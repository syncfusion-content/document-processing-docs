import { Spreadsheet, getRangeIndexes, ColumnModel } from '@syncfusion/ej2-spreadsheet';
import { defaultData } from './datasource.ts';
import { enableRipple, addClass, removeClass } from '@syncfusion/ej2-base';

let columns: ColumnModel[] = [
    {
        width: 130
    },
    {
        width: 92
    },
    {
        width: 96
    }
];

let spreadsheet: Spreadsheet = new Spreadsheet({
    sheets: [{ ranges: [{ dataSource: defaultData }], columns: columns }],
    actionComplete: (args): void => {
        let actionEvents: any = args;
        if (actionEvents.eventArgs.action == "customCSS") {
            let Element: HTMLElement = spreadsheet.getCell(actionEvents.eventArgs.rowIdx, actionEvents.eventArgs.colIdx);
            if (actionEvents.isUndoRedo && actionEvents.isUndo) {
                removeClass([Element], 'customClass'); // To remove the custom class in undo action
            }
            else {
                addClass([Element], 'customClass');// To add the custom class in redo action
            }
        }
    }
});

//Render the initialized Spreadsheet
spreadsheet.appendTo('#spreadsheet');

document.getElementById("customBtn")!.addEventListener('click', updateCollection);

function updateCollection() {
    let cell: string = spreadsheet.getActiveSheet().activeCell;
    let cellIdx: number[] = getRangeIndexes(cell);
    let Element: HTMLElement = spreadsheet.getCell(cellIdx[0], cellIdx[1]);
    if (!Element.classList.contains("customClass")) {
        addClass([Element], 'customClass'); // To add the custom class in active cell element
        spreadsheet.updateUndoRedoCollection({ eventArgs: { class: 'customClass', rowIdx: cellIdx[0], colIdx: cellIdx[1], action: 'customCSS' } }); // To update the undo redo collection
    }
}
