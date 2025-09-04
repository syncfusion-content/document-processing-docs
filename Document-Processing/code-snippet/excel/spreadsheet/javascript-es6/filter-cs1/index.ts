


import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { tradeData } from './datasource.ts';

let columns: ColumnModel[] = [{ width: 100 }, { width: 130 },{ width: 96},
    { width: 130 }, { width: 130 },{ width: 96},
    { width: 100 }, { width: 100 },{ width: 110}, { width: 100 }, { width: 130 },{ width: 150}]

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ ranges: [{ dataSource: tradeData }], columns: columns }],
    allowFiltering: true,
    dataBound: function () {
        if (spreadsheet.activeSheetIndex === 0) {
            let departments: string[] = ['Sweden', 'Canada', 'UK'];
            let predicateList: PredicateModel[] = []
            departments.forEach((department: string) => { predicateList.push({ field: 'D', predicate: 'or', operator: 'equal', value: department }); })
            spreadsheet.applyFilter(predicateList);
        }
    }
});

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');


