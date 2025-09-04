

import { DocumentEditor, Editor, Selection, EditorHistory, HyperlinkDialog, SfdtExport } from '@syncfusion/ej2-documenteditor';
//Inject the required module
DocumentEditor.Inject(Editor, Selection, EditorHistory, HyperlinkDialog, SfdtExport);
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enableSelection: true,
    enableEditorHistory: true,
    enableEditor: true,
    enableHyperlinkDialog: true,
    enableSfdtExport: true,
    height: '370px'
});
//Click the hyperlink button, the hyperlink dialog will open
function showHyperlinkDialog() {
    //Open the hyperlink dialog.
    documenteditor.showDialog('Hyperlink');
}
let button: HTMLElement = document.getElementById('dialog');
button.addEventListener('click', showHyperlinkDialog)
documenteditor.appendTo('#DocumentEditor');


