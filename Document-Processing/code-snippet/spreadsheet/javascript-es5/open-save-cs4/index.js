//Initialize Spreadsheet component
var spreadsheet = new ej.spreadsheet.Spreadsheet({
  openUrl:
    'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
  saveUrl:
    'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',

  openComplete: function () {
    var sheets = spreadsheet.sheets;
    for (var index = 0; index < sheets.length; index++) {
      var name = spreadsheet.sheets[index].name;
      var protectSetting = {
        selectCells: true,
        formatCells: false,
      };

      //To protect the sheet using sheet name
      spreadsheet.protectSheet(name, protectSetting);
      var address = ejs.spreadsheet.getRangeAddress([
        0,
        0,
        sheets[index].usedRange.rowIndex,
        sheets[index].usedRange.colIndex,
      ]);
      //To lock the used range cells
      spreadsheet.lockCells(name + '!' + address, true);
    }
  },
});

//Render initialized Spreadsheet component
spreadsheet.appendTo('#spreadsheet');


