


import { DocumentEditor, Editor, Selection, TableOptionsDialog, TablePropertiesDialog, BordersAndShadingDialog, SfdtExport, EditorHistory } from '@syncfusion/ej2-documenteditor';
DocumentEditor.Inject(Editor, Selection, SfdtExport, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, EditorHistory);
let documenteditor: DocumentEditor = new DocumentEditor({
      isReadOnly: false,
      enableSelection: true,
      enableEditor: true,
      enableTableOptionsDialog: true,
      enableTablePropertiesDialog: true,
      enableBordersAndShadingDialog: true,
      enableSfdtExport: true,
      height: '370px',
      enableEditorHistory: true
});
let button: HTMLElement = document.getElementById('dialog');
button.addEventListener('click', function () {
    //To open table options dialog
    documenteditor.showDialog('TableOptions');
});
documenteditor.appendTo('#DocumentEditor');
documenteditor.editor.insertTable(2, 2);



