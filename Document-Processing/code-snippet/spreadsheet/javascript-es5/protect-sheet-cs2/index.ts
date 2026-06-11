import { Spreadsheet, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { Button } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';
import { budgetData, salaryData } from './datasource.ts';

let columns: ColumnModel[] = [{ width: 100 }, { width: 100 }, { width: 100 },
{ width: 100 }];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns, isProtected: true, protectSettings: { selectCells: true } },
    { name: 'Salary', ranges: [{ dataSource: salaryData }], columns: columns }],
    dataBound: function () {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
        spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A11:D11');
    }
});
spreadsheet.appendTo('#spreadsheet');
let dialogObj: Dialog = new Dialog({
        header: 'Spreadsheet',
        target: document.getElementById('spreadsheet'),
        content: '"A1:F3" range of cells has been unlocked.',
        showCloseIcon: true,
        isModel: true,
        visible: false,
        width: '500px',
        buttons: [{
            click: lockCells,
            buttonModel: { content: 'Ok', isPrimary: true }
        }]
    });
dialogObj.appendTo('#dialog');
let button: Button = new Button({content: 'Unlock cells'});
button.appendTo('#button');
document.getElementById('button')!.onclick = (): void => {
    dialogObj.show();
}
function lockCells(): void {
    spreadsheet.lockCells('A1:F3', false);
    dialogObj.hide();
}


