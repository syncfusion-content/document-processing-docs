


import { DocumentEditor, Editor, Selection, ListDialog, SfdtExport, } from '@syncfusion/ej2-documenteditor';
DocumentEditor.Inject(Editor, Selection, SfdtExport, ListDialog);
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enableSelection: true,
    enableEditor: true,
    enableListDialog: true,
    enableSfdtExport: true,
    height: '370px'
});
let button: HTMLElement = document.getElementById('dialog');
button.addEventListener('click', function () {
    //To open list dialog
    documenteditor.showDialog('List');
});
documenteditor.appendTo('#DocumentEditor');



