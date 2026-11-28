import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

// Initialize Spreadsheet component without openUrl for client-side processing.
let spreadsheet: Spreadsheet = new Spreadsheet({
    allowOpen: true,
    created: (): void => {
        fetch('https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx')
            .then((response: Response) => response.blob())
            .then((fileBlob: Blob) => {
                // Convert obtained blob data into a File object.
                let file: File = new File([fileBlob], 'Sample.xlsx', {
                    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                });
                spreadsheet.open({ file: file });
            });
    }
});

// Render initialized Spreadsheet component.
spreadsheet.appendTo('#spreadsheet');
