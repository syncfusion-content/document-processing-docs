import { Spreadsheet, getFormatFromType } from '@syncfusion/ej2-spreadsheet';
import { loadCldr, L10n, setCulture, setCurrencyCode, enableRipple } from '@syncfusion/ej2-base';
import { data } from './datasource.ts';
import * as currencies from './currencies.json';
import * as cagregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';
import * as numberingSystems from './numberingSystems.json';
import * as deDELocalization from './locale.json';

enableRipple(true);

loadCldr(currencies, cagregorian, numbers, timeZoneNames, numberingSystems);

setCulture('de');
setCurrencyCode('EUR');

L10n.load(deDELocalization);

let spreadsheet: Spreadsheet = new Spreadsheet({
    locale: 'de',
    listSeparator: ';',
    showSheetTabs: false,
    showRibbon: false,
    sheets: [{
        selectedRange: 'E14',
        ranges: [{ dataSource: data }],
        rows: [{ index: 12, cells: [{ index: 3, value: 'Subtotal:' }, { formula: '=SUBTOTAL(9;E2:E12)' }] },
            { cells: [{ index: 3, value: 'Discount (8,5%):' }, { formula: '=PRODUCT(8,5;E13)/100' }] },
            { cells: [{ index: 3, value: 'Total Amount:' }, { formula: '=E13-E14'}] }],
        columns: [{ width: 120 }, { width: 180 }, { width: 100 }, { width: 120 }, { width: 120 }]
    }],
    created: (): void => {
        spreadsheet.cellFormat({ textAlign: 'center', fontWeight: 'bold' }, 'A1:E1');
        spreadsheet.numberFormat(getFormatFromType('Currency'), 'D2:E12');
        spreadsheet.numberFormat(getFormatFromType('Currency'), 'E13:E15');
    }
});

spreadsheet.appendTo('#spreadsheet');


