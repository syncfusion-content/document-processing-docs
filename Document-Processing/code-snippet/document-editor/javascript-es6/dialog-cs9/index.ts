


import { DocumentEditor, Editor, Selection, StyleDialog, SfdtExport, StylesDialog, EditorHistory } from '@syncfusion/ej2-documenteditor';

DocumentEditor.Inject(Editor, Selection, SfdtExport, StyleDialog, StylesDialog, EditorHistory);

let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enableSelection: true,
    enableEditor: true,
    enableStyleDialog: true,
    enableSfdtExport: true,
    enableEditorHistory: true,
    height: '370px'
});

let button: HTMLElement = document.getElementById('dialog');
button.addEventListener('click', function () {

    //To open style dialog
    documenteditor.showDialog('Style');
});

documenteditor.appendTo('#DocumentEditor');



