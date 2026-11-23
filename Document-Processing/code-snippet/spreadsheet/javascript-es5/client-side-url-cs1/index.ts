import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

// Initialize Spreadsheet component.
let spreadsheet: Spreadsheet = new Spreadsheet({
    created: (): void => {
        fetch('https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx') // fetch the remote url
            .then((response: Response) => {
                response.blob().then((fileBlob: Blob) => { // convert the excel file to blob
                    let file: File = new File([fileBlob], 'Sample.xlsx'); // convert the blob into file
                    spreadsheet.open({ file: file }); // open the file into Spreadsheet
                });
            });
    }
});

// Render initialized Spreadsheet component.
spreadsheet.appendTo('#spreadsheet');
