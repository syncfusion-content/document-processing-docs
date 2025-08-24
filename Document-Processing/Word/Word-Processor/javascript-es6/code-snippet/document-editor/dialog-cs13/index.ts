


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
    //To open table properties dialog
    documenteditor.showDialog('TableProperties');
});

documenteditor.appendTo('#DocumentEditor');

// Insert a new table.
documenteditor.editor.insertTable(2, 2);



