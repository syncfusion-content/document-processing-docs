

import { DocumentEditor, Print, Editor, Selection, EditorHistory } from '@syncfusion/ej2-documenteditor';
import { Button } from '@syncfusion/ej2-buttons';

DocumentEditor.Inject(Print, Editor, Selection, EditorHistory);

let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enablePrint: true,
    enableEditor: true,
    enableSelection: true,
    enableEditorHistory: true,
    height: '370px'
});
documenteditor.appendTo('#DocumentEditor');
let printButton: Button = new Button();
printButton.appendTo('#print');

document.getElementById('print').addEventListener('click', () => {
    documenteditor.print();
});


