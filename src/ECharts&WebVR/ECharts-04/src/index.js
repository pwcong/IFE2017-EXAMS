var fs = require('fs');
var csv = require('./utils/csv');

var string = fs.readFileSync('./static/file/000001.csv');

fs.writeFileSync(
    './static/file/000001.json', 
    JSON.stringify(csv(string.toString(), {
        reverse: true,
        select: true,
        selectIndex: [0, 6, 3, 5, 4, 10],
        skip: 1,
    })));
