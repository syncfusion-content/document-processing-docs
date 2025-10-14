

import { DocumentEditor, Editor, Selection, SfdtExport, EditorHistory, TableDialog, ContextMenu } from '@syncfusion/ej2-documenteditor';
import { Toolbar } from '@syncfusion/ej2-navigations';
DocumentEditor.Inject(Editor, Selection, EditorHistory, TableDialog, ContextMenu, SfdtExport);
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enableSelection: true,
    enableEditorHistory: true,
    enableEditor: true,
    enableTableDialog: true,
    enableContextMenu: true,
    enableSfdtExport: true,
    height: '370px'
});
function toolbarButtonClick(arg) {
    switch (arg.item.id) {
        case 'table':
            //Insert table API to add table
            documenteditor.editor.insertTable(3, 2);
            break;
        case 'insert_above':
            //Insert the specified number of rows to the table above to the row at cursor position
            documenteditor.editor.insertRow(true, 2);
            break;
        case 'insert_below':
            //Insert the specified number of rows to the table below to the row at cursor position
            documenteditor.editor.insertRow();
            break;
        case 'insert_left':
            //Insert the specified number of columns to the table left to the column at cursor position
            documenteditor.editor.insertColumn(true, 2);
            break;
        case 'insert_right':
            //Insert the specified number of columns to the table right to the column at cursor position
            documenteditor.editor.insertColumn();
            break;
        case 'delete_table':
            //Delete the entire table
            documenteditor.editor.deleteTable();
            break;
        case 'delete_row':
            //Delete the selected number of rows
            documenteditor.editor.deleteRow();
            break;
        case 'delete_column':
            //Delete the selected number of columns
            documenteditor.editor.deleteColumn();
            break;
        case 'merge_cell':
            //Merge the selected cells into one (both vertically and horizontally)
            documenteditor.editor.mergeCells();
            break;
        case 'table_dialog':
            //Opens insert table dialog
            documenteditor.showDialog('Table');
            break;
    }
}

let toolBar: Toolbar = new Toolbar({
    clicked: toolbarButtonClick,
    items: [
        {
            prefixIcon: 'e-de-ctnr-table e-icons',
            tooltipText: 'Insert Table',
            id: 'table',
        },
        {
            type: 'Separator'
        },
        {
            prefixIcon: 'e-de-ctnr-insertabove e-icons',
            tooltipText: 'Insert new row above',
            id: 'insert_above',
        },
        {
            prefixIcon: 'e-de-ctnr-insertbelow e-icons',
            tooltipText: 'Insert new row below',
            id: 'insert_below',
        },
        {
            type: 'Separator'
        },
        {
            prefixIcon: 'e-de-ctnr-insertleft e-icons',
            tooltipText: 'Insert new column to the left',
            id: 'insert_left',
        },
        {
            prefixIcon: 'e-de-ctnr-insertright e-icons',
            tooltipText: 'Insert new column to the right',
            id: 'insert_right',
        },
        {
            type: 'Separator'
        },
        {
            prefixIcon: 'e-de-delete-table e-icons',
            tooltipText: 'Delete Entire table',
            id: 'delete_table',
        },
        {
            prefixIcon: 'e-de-ctnr-deleterows e-icons',
            tooltipText: 'Delete the selected row',
            id: 'delete_row',
        },
        {
            prefixIcon: 'e-de-ctnr-deletecolumns e-icons',
            tooltipText: 'Delete the selected column',
            id: 'delete_column',
        },
        {
            type: 'Separator'
        },
        {
            prefixIcon: 'e-de-ctnr-mergecell e-icons',
            tooltipText: 'Merge the selected cells',
            id: 'merge_cell',
        },
        {
            type: 'Separator'
        },
        {
            text: 'Dialog',
            tooltipText: 'Open insert table dialog',
            id: 'table_dialog',
        },
    ],
});
toolBar.appendTo('#toolbar');

documenteditor.appendTo('#DocumentEditor');
//Insert table.
documenteditor.editor.insertTable(2, 2);


