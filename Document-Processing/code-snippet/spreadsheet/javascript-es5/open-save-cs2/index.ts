


import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

//Initialize the Spreadsheet control
    let spreadsheet: Spreadsheet = new Spreadsheet({
        openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
        saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
        created: (): void => {
            fetch("https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx") // fetch the remote url
                .then((response) => {
                    response.blob().then((fileBlob) => { // convert the excel file to blob
                    let file = new File([fileBlob], "Sample.xlsx"); //convert the blob into file
                    spreadsheet.open({ file: file }); // open the file into Spreadsheet
                    })
                })
        }
    });
//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');


