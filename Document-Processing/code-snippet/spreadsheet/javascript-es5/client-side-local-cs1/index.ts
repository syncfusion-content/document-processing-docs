import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

// Initialize Spreadsheet component.
let spreadsheet: Spreadsheet = new Spreadsheet({
    allowOpen: true
});

// Render initialized Spreadsheet component.
spreadsheet.appendTo('#spreadsheet');

// Select a local XLSX file without uploading it.
let input: HTMLInputElement = document.createElement('input');
input.type = 'file';
input.accept = '.xlsx';
input.onchange = (): void => {
    if (input.files && input.files.length) {
        spreadsheet.open({ file: input.files[0] });
    }
};
document.body.appendChild(input);
