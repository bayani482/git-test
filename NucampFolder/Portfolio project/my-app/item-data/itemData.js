const xlsxFile = require('read-excel-file/node');

xlsxFile('item-data\itemData.js')
  .then((rows) => {
    rows.forEach((row) => {
      row.forEach((cell) => {
        console.log(cell);
      });
    });
  });