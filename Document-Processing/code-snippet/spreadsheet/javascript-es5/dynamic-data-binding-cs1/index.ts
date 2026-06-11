


import { Spreadsheet, DataSourceChangedEventArgs } from '@syncfusion/ej2-spreadsheet';
import { data, itemData } from './datasource.ts';

let spreadsheet: Spreadsheet = new Spreadsheet({
        showRibbon: false,
        showFormulaBar: false,
        sheets: [
            {
                ranges: [{ dataSource: data }],
                columns: [
                    { width: 90 }, { width: 100 }, { width: 96 },
                    { width: 120 }, { width: 130 }, { width: 120 }
                ]
            }],
        dataSourceChanged: (args: DataSourceChangedEventArgs) => {
            appendElement("Data source changed with" + "<b>&nbsp;" + args.action + "</b> action<hr>");
        }
});

spreadsheet.appendTo('#spreadsheet');

document.getElementById('changeDataBtn').addEventListener('click', ()=> {
    spreadsheet.sheets[0].ranges[0].dataSource = itemData;
});

document.getElementById('clearBtn').addEventListener('click', ()=> {
    document.getElementById('EventLog').innerHTML = "";
});

function appendElement(html: string): void {
     let span: HTMLElement = document.createElement("span");
     span.innerHTML = html;
     let log: HTMLElement = document.getElementById('EventLog');
     log.insertBefore(span, log.firstChild);
}



