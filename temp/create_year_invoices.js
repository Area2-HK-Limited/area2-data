const https = require('https');

const token = 'pFe0uIIq1atj2hipJWrlzI3MqzOug8IC2biBGbfHZltT52NqDf36Lml1tQ5GwJt5';

const clients = {
  'Wpmbk5ezJn': { name: 'Nike Hong Kong', total: 460000 },
  'yMYerEdOBQ': { name: '長江地產', total: 434000 },
  'gl9avmeG1v': { name: '韓麗化妝品', total: 230000 },
  '4openRe7Az': { name: '海洋公園', total: 240000 },
  'l4zbq2dprO': { name: '美心MX', total: 206000 },
  'k8mep2bMyJ': { name: '展覽集團', total: 170000 },
  '7LDdwRb1YK': { name: '麥當奴', total: 190000 },
  'Opnel5aKBz': { name: '一田', total: 130000 },
  'wMvbmOeYAl': { name: '恒基兆業', total: 106000 },
  'WJxbojagwO': { name: '星巴克', total: 80000 }
};

// 2026 months
const months = [
  { month: '2026-01', days: 31 },
  { month: '2026-02', days: 28 },
  { month: '2026-03', days: 31 },
  { month: '2026-04', days: 30 },
  { month: '2026-05', days: 31 },
  { month: '2026-06', days: 30 },
  { month: '2026-07', days: 31 },
  { month: '2026-08', days: 31 },
  { month: '2026-09', days: 30 },
  { month: '2026-10', days: 31 },
  { month: '2026-11', days: 30 },
  { month: '2026-12', days: 31 }
];

let invoiceCount = 0;
const invoices = [];
const nextNumbers = {
  'Wpmbk5ezJn': 43,
  'yMYerEdOBQ': 39,
  'gl9avmeG1v': 37,
  '4openRe7Az': 37,
  'l4zbq2dprO': 29,
  'k8mep2bMyJ': 42,
  '7LDdwRb1YK': 37,
  'Opnel5aKBz': 37,
  'wMvbmOeYAl': 37,
  'WJxbojagwO': 27
};

function createInvoice(clientId, amount, date, number) {
  return new Promise((resolve) => {
    const dueDate = new Date(date);
    dueDate.setMonth(dueDate.getMonth() + 1);
    const dueDateStr = dueDate.toISOString().split('T')[0];
    
    const postData = JSON.stringify({
      client_id: clientId,
      number: number,
      date: date,
      due_date: dueDateStr,
      status_id: 2,
      line_items: [{
        quantity: 1,
        cost: amount,
        notes: '服務費用結算'
      }]
    });
    
    const options = {
      hostname: 'invoice3.area2.com',
      path: '/api/v1/invoices',
      method: 'POST',
      headers: {
        'X-Api-Token': token,
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.data) {
            invoices.push({ 
              id: json.data.id, 
              number: json.data.number, 
              client: clientId,
              clientName: clients[clientId].name,
              amount: amount,
              date: date
            });
            invoiceCount++;
            if (invoiceCount % 10 === 0) {
              console.log(`Created ${invoiceCount} invoices...`);
            }
          } else {
            console.log(`Error ${number}: ${JSON.stringify(json.errors || json).substring(0, 100)}`);
          }
        } catch (e) {
          console.log(`Parse error for ${number}`);
        }
        resolve();
      });
    });
    
    req.on('error', (e) => {
      console.log(`Network error for ${number}`);
      resolve();
    });
    
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('Creating year-long invoices for all clients...\n');
  
  const promises = [];
  
  // For each client, create monthly invoices spread across 2026
  for (const [clientId, info] of Object.entries(clients)) {
    const monthlyAmount = Math.ceil(info.total / 12);
    let remaining = info.total;
    
    for (let i = 0; i < 12; i++) {
      const month = months[i].month;
      // Last month gets the remainder to handle rounding
      const amount = (i === 11) ? remaining : monthlyAmount;
      remaining -= amount;
      
      const num = String(nextNumbers[clientId]++).padStart(3, '0');
      const invoiceNum = `INV-${month.slice(5)}-${num}`;
      
      promises.push(createInvoice(clientId, amount, `${month}-15`, invoiceNum));
    }
  }
  
  await Promise.all(promises);
  
  console.log(`\n✓ Total created: ${invoiceCount} invoices`);
  console.log('\nSummary by client:');
  for (const [clientId, info] of Object.entries(clients)) {
    const clientInvoices = invoices.filter(inv => inv.client === clientId);
    const total = clientInvoices.reduce((s, inv) => s + inv.amount, 0);
    console.log(`  ${info.name}: ${clientInvoices.length} invoices, HK$${total.toLocaleString()}`);
  }
  
  // Save invoice IDs for next step
  console.log('\nInvoice IDs (first 10):');
  invoices.slice(0, 10).forEach(inv => {
    console.log(`  ${inv.id} : ${inv.number}`);
  });
  console.log(`  ... and ${invoices.length - 10} more`);
}

main();