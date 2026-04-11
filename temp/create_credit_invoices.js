const https = require('https');

const token = 'pFe0uIIq1atj2hipJWrlzI3MqzOug8IC2biBGbfHZltT52NqDf36Lml1tQ5GwJt5';

// Client mapping
const clients = {
  'Wpmbk5ezJn': { name: 'Nike Hong Kong', nextNum: 36 },
  'yMYerEdOBQ': { name: '長江地產', nextNum: 36 },
  'gl9avmeG1v': { name: '韓麗化妝品', nextNum: 36 },
  'wMvbmOeYAl': { name: '恒基兆業', nextNum: 36 },
  'WJxbojagwO': { name: '星巴克', nextNum: 26 },
  'l4zbq2dprO': { name: '美心MX', nextNum: 28 },
  '4openRe7Az': { name: '海洋公園', nextNum: 36 },
  'Opnel5aKBz': { name: '一田', nextNum: 36 },
  'k8mep2bMyJ': { name: '展覽集團', nextNum: 36 },
  '7LDdwRb1YK': { name: '麥當奴', nextNum: 36 }
};

// Unapplied amounts by client
const unapplied = {
  'Wpmbk5ezJn': 460000,
  'yMYerEdOBQ': 434000,
  'gl9avmeG1v': 230000,
  'wMvbmOeYAl': 106000,
  'WJxbojagwO': 80000,
  'l4zbq2dprO': 206000,
  '4openRe7Az': 240000,
  'Opnel5aKBz': 130000,
  'k8mep2bMyJ': 170000,
  '7LDdwRb1YK': 190000
};

const invoices = [];

function createInvoice(clientId, amount, number) {
  return new Promise((resolve) => {
    const postData = JSON.stringify({
      client_id: clientId,
      number: number,
      amount: amount,
      balance: amount,
      date: '2026-04-11',
      due_date: '2026-05-11',
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
            console.log('Created: INV-' + number.slice(-3) + ' | ' + clients[clientId].name + ' | HK$' + amount.toLocaleString());
          } else {
            console.log('Error creating ' + number + ': ' + JSON.stringify(json.errors || json));
          }
        } catch (e) {
          console.log('Parse error for ' + number);
        }
        resolve();
      });
    });
    
    req.on('error', (e) => {
      console.log('Network error for ' + number);
      resolve();
    });
    
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('Creating credit invoices...\n');
  
  const promises = [];
  for (const [clientId, amount] of Object.entries(unapplied)) {
    const num = String(clients[clientId].nextNum).padStart(3, '0');
    promises.push(createInvoice(clientId, amount, 'CREDIT-' + num));
    clients[clientId].nextNum++;
  }
  
  await Promise.all(promises);
  console.log('\nTotal created: ' + invoices.length + ' invoices');
  console.log('\nInvoice IDs:');
  invoices.forEach(inv => console.log(inv.id + ' : ' + inv.number + ' : HK$' + inv.amount.toLocaleString()));
}

main();