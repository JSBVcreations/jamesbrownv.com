const fs = require('fs');
const csv = require('csvtojson');

Promise.all([
  csv().fromFile('./projects/tierlist/film-database.csv'),
  csv().fromFile('./projects/tierlist/tv-database.csv')
])
.then(([films, tv]) => {
  const all = [...films, ...tv];
  fs.writeFileSync('./projects/tierlist/tierdata.js', `const data = ${JSON.stringify(all, null, 2)};`);
  console.log('✅ tierdata.js created in projects/tierlist/');
});