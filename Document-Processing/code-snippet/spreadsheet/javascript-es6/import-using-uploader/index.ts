import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { Uploader } from '@syncfusion/ej2-inputs';

let spreadsheet: Spreadsheet = new Spreadsheet({
  openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
});
spreadsheet.appendTo('#spreadsheet');

let uploader: Uploader = new Uploader({
  asyncSettings: {
    saveUrl:
      'https://services.syncfusion.com/js/production/api/FileUploader/Save',
    removeUrl:
      'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
  },
  success: onSuccess,
  allowedExtensions: '.csv, .xls, .xlsx',
});
uploader.appendTo('#uploader');

function onSuccess(args): void {
  if (args.operation == 'upload')
    spreadsheet.open({ file: args.file.rawFile });
}
