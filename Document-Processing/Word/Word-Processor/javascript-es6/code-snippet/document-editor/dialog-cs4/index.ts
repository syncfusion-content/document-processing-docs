


import { DocumentEditor, Editor, Selection, TableDialog, SfdtExport, } from '@syncfusion/ej2-documenteditor';
DocumentEditor.Inject(Editor, Selection, SfdtExport, TableDialog);
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enableSelection: true,
    enableEditor: true,
    enableTableDialog: true,
    enableSfdtExport: true,
    height: '370px'
});
let button: HTMLElement = document.getElementById('dialog');
button.addEventListener('click', function () {
    //To open table dialog
    documenteditor.showDialog('Table');
});
documenteditor.appendTo('#DocumentEditor');



