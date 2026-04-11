const https = require('https');

const token = 'pFe0uIIq1atj2hipJWrlzI3MqzOug8IC2biBGbfHZltT52NqDf36Lml1tQ5GwJt5';

const clients = {
  'Wpmbk5ezJn': { name: 'Nike Hong Kong', remaining: 460000 - 0 }, // already has 0 from earlier? Let me recalculate
  'yMYerEdOBQ': { name: '長江地產', remaining: 434000 - 0 },
  'gl9avmeG1v': { name: '韓麗化妝品', remaining: 230000 - 57501 },
  '4openRe7Az': { name: '海洋公園', remaining: 240000 - 120000 },
  'l4zbq2dprO': { name: '美心MX', remaining: 206000 - 206000 },
  'k8mep2bMyJ': { name: '展覽集團', remaining: 170000 - 0 },
  '7LDdwRb1YK': { name: '麥當奴', remaining: 190000 - 15834 },
  'Opnel5aKBz': { name: '一田', remaining: 130000 - 21668 },
  'wMvbmOeYAl': { name: '恒基兆業', remaining: 106000 - 0 },
  'WJxbojagwO': { name: '星巴克', remaining: 80000 - 80000 }
};

// Recalculate remaining based on what was already created
const actualRemaining = {
  'Wpmbk5ezJn': 460000, // Nike - none created yet
  'yMYerEdOBQ': 434000, // 長江 - none created yet  
  'gl9avmeG1v': 172499, // 韓麗 - only 3 invoices = 57501
  '4openRe7Az': 120000, // 海洋公園 - only 6 invoices = 120000
  'l4zbq2dprO': 0, // 美心MX - already complete (12 invoices = 206000)
  'k8mep2bMyJ': 170000, // 展覽集團 - none created yet
  '7LDdwRb1YK': 174166, // 麥當奴 - only 1 invoice = 15834
  'Opnel5aKBz': 108332, // 一田 - only 2 invoices = 21668
  'wMvbmOeYAl': 106000, // 恒基兆業 - none created yet
  'WJxbojagwO': 0 // 星巴克 - already complete (12 invoices = 80000)
};

let startNumber = 36;
let invoiceCount = 0;
const invoices = [];

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
            invoices.push({ id: json.data.id, number: json.data.number, client: clientId, amount: amount });
          } else {
            console.log(`Error ${number}: ${JSON.stringify(json.errors || json).substring(0, 80)}`);
          }
        } catch (e) {
          console.log(`Parse error for ${number}`);
        }
        resolve();
      });
    });
    
    req.on('error', () => resolve());
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('Creating remaining invoices...\n');
  
  const promises = [];
  const months2026 = ['2026-01','2026-02','2026-03','2026-04','2026-05','2026-06',
                      '2026-07','2026-08','2026-09','2026-10','2026-11','2026-12'];
  
  let num = startNumber;
  
  for (const [clientId, remaining] of Object.entries(actualRemaining)) {
    if (remaining <= 0) continue;
    
    // Create monthly invoices for 2026
    const monthlyAmount = Math.ceil(remaining / 12);
    let stillRemaining = remaining;
    
    for (let i = 0; i < 12; i++) {
      const amount = (i === 11) ? stillRemaining : monthlyAmount;
      stillRemaining -= amount;
      if (amount <= 0) continue;
      
      const invoiceNum = `INV-${String(num).padStart(3, '0')}`;
      const monthIdx = i % 12;
      const date = `${months2026[monthIdx]}-15`;
      
      promises.push(createInvoice(clientId, amount, date, invoiceNum));
      num++;
      invoiceCount++;
    }
  }
  
  await Promise.all(promises);
  
  console.log(`\n✓ Created ${invoiceCount} invoices`);
  console.log('\nInvoice IDs:');
  invoices.forEach(inv => console.log(`  ${inv.id} : ${inv.number} : HK$${inv.amount.toLocaleString()}`));
}

main();