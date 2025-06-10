const fs = require('fs');
const csv = require('csvtojson');

Promise.all([
  csv().fromFile('./film-database.csv'),
  csv().fromFile('./tv-database.csv')
]).then(([films, tv]) => {
  const all = [...films, ...tv];
  fs.writeFileSync('tierdata.js', `const data = ${JSON.stringify(all, null, 2)};`);
  console.log('✅ tierdata.js created');
});