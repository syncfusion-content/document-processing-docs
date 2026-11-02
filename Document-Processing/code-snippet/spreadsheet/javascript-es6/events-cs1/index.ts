import { Spreadsheet, SheetModel, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';
import { data } from './datasource.ts';

enableRipple(true);

let columns: ColumnModel[] = [
    { width: 180 },
    { width: 130 },
    { width: 130 },
    { width: 180 },
    { width: 130 },
    { width: 120 }
];

let sheets: SheetModel[] = [{
    name: 'Sheet1',
    ranges: [{ dataSource: data }],
    columns: columns
}];

function appendElement(html: string): void {
    const span: HTMLSpanElement = document.createElement('span');
    span.innerHTML = html;
    const log: HTMLElement | null = document.getElementById('EventLog');
    if (log) {
        log.insertBefore(span, log.firstChild);
    }
}

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: sheets,

    actionBegin: (args: any): void => {
        appendElement(`actionBegin triggered for <b>&nbsp;${args.action}</b> action<hr>`);
        console.log(args);
    },

    actionComplete: (args: any): void => {
        appendElement(`actionComplete triggered for <b>&nbsp;${args.action}</b> action<hr>`);
        console.log(args);
    },

    // Removed the unwanted support for this sample
    showRibbon: false,
    showFormulaBar: false
});

spreadsheet.appendTo('#spreadsheet');

document.getElementById('clearBtn')?.addEventListener('click', (): void => {
    const eventLog: HTMLElement | null = document.getElementById('EventLog');
    if (eventLog) {
        eventLog.innerHTML = '';
    }
});