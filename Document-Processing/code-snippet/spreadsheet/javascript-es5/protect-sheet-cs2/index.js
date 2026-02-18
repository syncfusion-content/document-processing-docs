// Initialize the Spreadsheet component.
var columns = [{ width: 100 }, { width: 100 }, { width: 100 },
{ width: 100 }];
var spreadsheet = new ej.spreadsheet.Spreadsheet({
    sheets: [{ name: 'Budget', ranges: [{ dataSource: budgetData }], columns: columns, isProtected: true, protectSettings: { selectCells: true } },
    { name: 'Salary', ranges: [{ dataSource: salaryData }], columns: columns }],
    dataBound: function () {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
        spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A11:D11');
    }
});

spreadsheet.appendTo('#spreadsheet');

var dialogObj = new ej.popups.Dialog({
    header: 'Spreadsheet',
    target: document.getElementById('spreadsheet'),
    content: '"A1:F3" range of cells has been unlocked.',
    showCloseIcon: true,
    isModal: true,
    visible: false,
    width: '500px',
    buttons: [{
        click: lockCells,
        buttonModel: { content: 'Ok', isPrimary: true }
    }]
});
dialogObj.appendTo('#dialog');

var button = new ej.buttons.Button({ content: 'Unlock cells' });
button.appendTo('#button');
document.getElementById('button').onclick = function () {
    dialogObj.show();
};
function lockCells() {
    spreadsheet.lockCells('A1:F3', false);
    dialogObj.hide();
}