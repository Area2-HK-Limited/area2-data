const https = require('https');
const token = 'pFe0uIIq1atj2hipJWrlzI3MqzOug8IC2biBGbfHZltT52NqDf36Lml1tQ5GwJt5';

// 20 invoices spread across 2026 for various clients
const invoiceData = [
  { client_id: 'Wpmbk5ezJn', amount: 45000, date: '2026-01-08' },   // Nike
  { client_id: 'yMYerEdOBQ', amount: 55000, date: '2026-01-15' },   // 長江
  { client_id: 'gl9avmeG1v', amount: 35000, date: '2026-01-22' },   // 韓麗
  { client_id: '4openRe7Az', amount: 28000, date: '2026-02-05' },   // 海洋公園
  { client_id: 'l4zbq2dprO', amount: 42000, date: '2026-02-12' },   // 美心
  { client_id: 'k8mep2bMyJ', amount: 38000, date: '2026-02-19' },   // 展覽
  { client_id: '7LDdwRb1YK', amount: 31000, date: '2026-03-07' },   // 麥當奴
  { client_id: 'Opnel5aKBz', amount: 29000, date: '2026-03-14' },   // 一田
  { client_id: 'wMvbmOeYAl', amount: 48000, date: '2026-03-21' },   // 恒基
  { client_id: 'WJxbojagwO', amount: 25000, date: '2026-04-04' },   // 星巴克
  { client_id: 'Wpmbk5ezJn', amount: 52000, date: '2026-04-11' },   // Nike
  { client_id: 'yMYerEdOBQ', amount: 58000, date: '2026-04-18' },   // 長江
  { client_id: 'gl9avmeG1v', amount: 40000, date: '2026-05-02' },   // 韓麗
  { client_id: '4openRe7Az', amount: 33000, date: '2026-05-09' },   // 海洋公園
  { client_id: 'l4zbq2dprO', amount: 46000, date: '2026-05-16' },   // 美心
  { client_id: 'k8mep2bMyJ', amount: 37000, date: '2026-05-23' },   // 展覽
  { client_id: '7LDdwRb1YK', amount: 34000, date: '2026-06-06' },   // 麥當奴
  { client_id: 'Opnel5aKBz', amount: 31000, date: '2026-06-13' },   // 一田
  { client_id: 'wMvbmOeYAl', amount: 50000, date: '2026-06-20' },   // 恒基
  { client_id: 'WJxbojagwO', amount: 27000, date: '2026-06-27' },   // 星巴克
];

let startNum = 116;
let created = 0;

function createInvoice(data, number) {
  return new Promise((resolve) => {
    const dueDate = new Date(data.date);
    dueDate.setMonth(dueDate.getMonth() + 1);
    const dueDateStr = dueDate.toISOString().split('T')[0];
    
    const postData = JSON.stringify({
      client_id: data.client_id,
      number: `INV-${number}`,
      date: data.date,
      due_date: dueDateStr,
      status_id: 2,
      line_items: [{
        quantity: 1,
        cost: data.amount,
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
      let d = '';
      res.on('data', (c) => d += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(d);
          if (json.data) {
            console.log(`✓ ${json.data.number}: HK$${data.amount.toLocaleString()} → ${data.date}`);
            created++;
          } else {
            console.log(`✗ INV-${number}: ${JSON.stringify(json.errors || json).substring(0, 60)}`);
          }
        } catch (e) {
          console.log(`✗ INV-${number}: Parse error`);
        }
        resolve();
      });
    });
    
    req.on('error', () => { console.log(`✗ INV-${number}: Network error`); resolve(); });
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('Creating 20 invoices...\n');
  for (let i = 0; i < invoiceData.length; i++) {
    await createInvoice(invoiceData[i], startNum + i);
  }
  console.log(`\n✓ Done: ${created}/20 invoices created`);
}

main();