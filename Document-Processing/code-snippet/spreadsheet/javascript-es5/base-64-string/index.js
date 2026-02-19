var base64String;

var spreadsheet = new ej.spreadsheet.Spreadsheet({
  openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
  sheets: [{
    name: 'Car Sales Report',
    ranges: [{ dataSource: data }],
    columns: [
      { width: 180 }, { width: 130 }, { width: 130 }, { width: 180 },
      { width: 130 }, { width: 120 }
    ]
  }],

  created: function () {
    // Applies cell and number formatting to specified range of the active sheet
    spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
  },

  beforeSave: function (args) {
    args.needBlobData = true; // To trigger the saveComplete event.
    args.isFullPost = false; // Get the spreadsheet data as blob data in the saveComplete event.
  },

  saveComplete: function (args) {
    // Convert blob data to base64 string.
    var reader = new FileReader();
    reader.readAsDataURL(args.blobData);
    reader.onloadend = function () {
      base64String = reader.result;
    };
  }

});

// Render initialized Spreadsheet.
spreadsheet.appendTo('#spreadsheet');

document.getElementById("import").onclick = function () {
  // Open the file based on saved base64 string.
  fetch(base64String)
    .then(function (response) {
      return response.blob();
    })
    .then(function (fileBlob) {
      var file = new File([fileBlob], 'Sample.xlsx');
      spreadsheet.open({ file: file });
    });
};

document.getElementById("export").onclick = function () {
  spreadsheet.save({
    url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
    fileName: 'Worksheet',
    saveType: 'Xlsx'
  }); // Specifies the save URL, file name, file type need to be saved.
  // Logs base64 string into the console.
  console.log('Base64 String - ', base64String);
};