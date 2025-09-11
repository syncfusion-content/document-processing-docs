


import { DocumentEditor, Editor, Selection, ColumnsDialog, SfdtExport, EditorHistory } from '@syncfusion/ej2-documenteditor';
DocumentEditor.Inject(Editor, Selection, SfdtExport, ColumnsDialog, EditorHistory);
let documenteditor: DocumentEditor = new DocumentEditor({
      isReadOnly: false,
      enableSelection: true,
      enableEditor: true,
      enableColumnsDialog: true,
      enableSfdtExport: true,
      enableEditorHistory: true,
      height: '370px'
});
let button: HTMLElement = document.getElementById('dialog');
button.addEventListener('click', function () {
    //To open page setup dialog
    documenteditor.showDialog('Columns');
});
documenteditor.appendTo('#DocumentEditor');



