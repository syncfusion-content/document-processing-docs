
var base64String;

var spreadsheet = new ej.spreadsheet.Spreadsheet({
  openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
  saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
  sheets: [{
    name: 'Car Sales Report',
    ranges: [{ dataSource: data }],
    columns: [
      { width: 180 }, { width: 130 }, { width: 130 }, { width: 180 },
      { width: 130 }, { width: 120 }
    ]
  }],

  beforeSave: function (args) {
    args.needBlobData = true; // To trigger the saveComplete event.
    args.isFullPost = false; // Get the spreadsheet data as blob data in the saveComplete event.
  },

  saveComplete: function (args) {
    // To obtain the blob data
    console.log('Spreadsheet BlobData : ', args.blobData)
  }

});

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');