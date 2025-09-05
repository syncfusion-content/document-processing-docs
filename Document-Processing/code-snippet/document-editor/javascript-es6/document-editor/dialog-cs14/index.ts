


import { DocumentEditor, Editor, Selection, PageSetupDialog, SfdtExport } from '@syncfusion/ej2-documenteditor';
DocumentEditor.Inject(Editor, Selection, SfdtExport, PageSetupDialog);
let documenteditor: DocumentEditor = new DocumentEditor({
      isReadOnly: false,
      enableSelection: true,
      enableEditor: true,
      enablePageSetupDialog: true,
      enableSfdtExport: true,
      height: '370px'
});
let button: HTMLElement = document.getElementById('dialog');
button.addEventListener('click', function () {
    //To open page setup dialog
    documenteditor.showDialog('PageSetup');
});
documenteditor.appendTo('#DocumentEditor');



