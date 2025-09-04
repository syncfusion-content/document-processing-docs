


import { DocumentEditor, Editor, Selection, TableOfContentsDialog, SfdtExport } from '@syncfusion/ej2-documenteditor';
DocumentEditor.Inject(Editor, Selection, SfdtExport, TableOfContentsDialog);
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enableSelection: true,
    enableEditor: true,
    enableTableOfContentsDialog: true,
    enableSfdtExport: true,
    height: '370px'
});
let button: HTMLElement = document.getElementById('dialog');
button.addEventListener('click', function () {
    //To open table of contents dialog
    documenteditor.showDialog('TableOfContents');
});
documenteditor.appendTo('#DocumentEditor');



