


import { Spreadsheet, SheetModel, BeforeSaveEventArgs } from '@syncfusion/ej2-spreadsheet';
let sheet: SheetModel[] = [{
        rows: [{
                cells: [
                    { index: 0, value: 'Order ID',  style: { fontWeight: 'bold' }},
                    { value: 'Customer ID', style: { fontWeight: 'bold' }},
                    { value: 'Employee ID', style: { fontWeight: 'bold' }},
                    { value: 'Ship Name', style: { fontWeight: 'bold' }},
                    { value: 'Ship City', style: { fontWeight: 'bold' }},
                    { value: 'Ship Address', style: { fontWeight: 'bold' }}
                ]
            },
            {
                cells: [
                    { value: '10248' },
                    { value: 'VINET' },
                    { value: '5' },
                    { value: 'Vins et alcools Chevalier' },
                    { value: 'Reims' },
                    { value: '59 rue de lAbbaye' }
                ]
            },
            {
                cells: [
                    { value: '10249' },
                    { value: 'TOMSP' },
                    { value: '6' },
                    { value: 'Toms Spezialitäten' },
                    { value: 'Münster' },
                    { value: 'Luisenstr. 48' }
                ]
            },
            {
                cells: [
                    { value: '10250' },
                    { value: 'HANAR' },
                    { value: '4' },
                    { value: 'Hanari Carnes' },
                    { value: 'Rio de Janeiro' },
                    { value: 'Rua do Paço, 67' }
                ]
            },
            {
                cells: [
                    { value: '10251' },
                    { value: 'VICTE' },
                    { value: '3' },
                    { value: 'Victuailles en stock' },
                    { value: 'Lyon' },
                    { value: '2, rue du Commerce' }
                ]
            }],
    columns: [
            { width: 80 }, { width: 80 }, { width: 82 },
            { width: 160 }, { width: 110 }, { width: 130 }
        ]
}];
//Initialize the Spreadsheet control
let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheet,
    allowSave: true,
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
    beforeSave: (args: BeforeSaveEventArgs) => {
        // your code snippets here
    }
});
//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');


