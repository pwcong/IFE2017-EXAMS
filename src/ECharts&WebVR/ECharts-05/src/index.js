var fs = require('fs');
var csv = require('./utils/csv');

var szCSV = fs.readFileSync('./static/file/000001.csv');

fs.writeFileSync(
    './static/file/000001.json', 
    JSON.stringify(csv.parse(szCSV.toString(), {
        reverse: true,
        select: true,
        selectIndex: [0, 6, 3, 5, 4, 10],
        skip: 1,
    }))
);

var sp500hstCSV = fs.readFileSync('./static/file/sp500hst.csv');

let sp500hstCSVData = csv.parse(sp500hstCSV.toString(), {
        reverse: false,
        select: true,
        selectIndex: [0, 2, 5, 4, 3, 6],
        skip: 1,
        category: true,
        categoryIndex: 1
    });

fs.writeFileSync(
    './static/file/sp500hst.json', 
    JSON.stringify(sp500hstCSVData)
);

if(!fs.existsSync('./static/file/ticker'))
    fs.mkdirSync('./static/file/ticker');

let categories = [];

for(let key in sp500hstCSVData){

    categories.push({
        category: key,
        path: `./static/file/ticker/${key}.json`
    });

    fs.writeFileSync(
        `./static/file/ticker/${key}.json`, 
        JSON.stringify(sp500hstCSVData[key])
    );

}

fs.writeFileSync('./static/file/categories.json', JSON.stringify(categories));


