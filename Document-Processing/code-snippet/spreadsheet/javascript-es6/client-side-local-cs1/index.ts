import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

// Initialize Spreadsheet component without openUrl for client-side processing.
let spreadsheet: Spreadsheet = new Spreadsheet({
    allowOpen: true
});

// Render initialized Spreadsheet component.
spreadsheet.appendTo('#spreadsheet');

let fileInput: HTMLInputElement = document.getElementById('fileInput') as HTMLInputElement;
if (fileInput) {
    fileInput.addEventListener('change', (event: Event) => {
        let target: HTMLInputElement = event.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
            let file: File = target.files[0];
            spreadsheet.open({ file: file });
        }
    });
}
