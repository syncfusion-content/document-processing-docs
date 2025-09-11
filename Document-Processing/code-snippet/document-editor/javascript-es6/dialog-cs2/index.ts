


import { DocumentEditor, Editor, Selection, FontDialog, SfdtExport, } from '@syncfusion/ej2-documenteditor';

DocumentEditor.Inject(Editor, Selection, SfdtExport, FontDialog);

let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enableSelection: true,
    enableEditor: true,
    enableFontDialog: true,
    enableSfdtExport: true,
     height: '370px'
});

let containerPanel: HTMLElement = document.getElementById('container');

let button: HTMLElement = document.getElementById('dialog');

button.addEventListener('click', function () {
    // To open Font Dialog
    documenteditor.showDialog('Font');
});

documenteditor.appendTo('#DocumentEditor');



