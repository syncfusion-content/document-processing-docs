


import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { jsonData } from './datasource.ts';

let spreadsheet: Spreadsheet = new Spreadsheet({
    created: function () {
        spreadsheet.openFromJson({ file: jsonData });
    }
});

spreadsheet.appendTo('#spreadsheet');


