


import { DocumentEditor, Editor, Selection, HyperlinkDialog, SfdtExport, } from '@syncfusion/ej2-documenteditor';
DocumentEditor.Inject(Editor, Selection, SfdtExport, HyperlinkDialog);
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enableSelection: true,
    enableEditor: true,
    enableHyperlinkDialog: true,
    enableSfdtExport: true,
    height: '370px'
});
let button: HTMLElement = document.getElementById('dialog');
button.addEventListener('click', function () {
    //To open hyperlink dialog
    documenteditor.showDialog('Hyperlink');
});
documenteditor.appendTo('#DocumentEditor');



