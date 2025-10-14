//Initialize DataManager.
var data = new ej.data.DataManager({
  url: 'https://services.syncfusion.com/js/production/api/Orders',
  adaptor: new ej.data.WebApiAdaptor(),
  crossDomain: true
});

var spreadsheet = new ej.spreadsheet.Spreadsheet({
  sheets: [
    {
      name: 'Order details',
      ranges: [{ dataSource: data }],
      columns: [
        { width: 80 },
        { width: 80 },
        { width: 80 },
        { width: 80 },
        { width: 80 },
        { width: 80 },
        { width: 280 },
        { width: 180 },
        { width: 80 },
        { width: 180 },
        { width: 180 }
      ]
    }
  ],
  openUrl:
    'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
  saveUrl:
    'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
  created: function () {
    //Applies cell and number formatting to specified range of the active sheet.
    spreadsheet.cellFormat(
      { fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' },
      'A1:K1'
    );
  }
});
spreadsheet.appendTo('#spreadsheet');
