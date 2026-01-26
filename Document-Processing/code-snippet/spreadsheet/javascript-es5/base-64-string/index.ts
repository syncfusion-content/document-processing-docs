
import { Spreadsheet, BeforeSaveEventArgs, SaveCompleteEventArgs } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.ts';

let base64String: string | ArrayBuffer;

let spreadsheet: Spreadsheet = new Spreadsheet({
  openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
  sheets: [{
    name: 'Car Sales Report',
    ranges: [{ dataSource: data }],
    columns: [
      { width: 180 }, { width: 130 }, { width: 130 }, { width: 180 },
      { width: 130 }, { width: 120 }
    ]
  }],

  created: (): void => {
    //Applies cell and number formatting to specified range of the active sheet
    spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
  },

  beforeSave: (args: BeforeSaveEventArgs): void => {
    args.needBlobData = true; // To trigger the saveComplete event.
    args.isFullPost = false; // Get the spreadsheet data as blob data in the saveComplete event.
  },

  saveComplete: (args: SaveCompleteEventArgs): void => {
    // Convert blob data to base64 string.
    let reader: FileReader = new FileReader();
    reader.readAsDataURL(args.blobData);
    reader.onloadend = function () {
      base64String = reader.result ? reader.result : '';
    };
  }

});

spreadsheet.appendTo('#spreadsheet');

document.getElementById("import")!.onclick = (): void => {
  // Open the file based on saved base64 string.
  fetch(base64String as string)
    .then((response) => response.blob())
    .then((fileBlob) => {
      let file = new File([fileBlob], 'Sample.xlsx');
      spreadsheet.open({ file: file });
    });
}

document.getElementById("export")!.onclick = (): void => {
  spreadsheet.save({
    url: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
    fileName: 'Worksheet',
    saveType: 'Xlsx',
  }); // Specifies the save URL, file name, file type need to be saved.
  // Logs base64 string into the console.
  console.log('Base64 String - ', base64String);
}