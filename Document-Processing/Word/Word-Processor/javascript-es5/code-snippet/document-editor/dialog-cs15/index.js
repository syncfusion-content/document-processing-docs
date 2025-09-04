var documenteditor = new ej.documenteditor.DocumentEditor({ enableColumnsDialog: true, enablePageSetupDialog: true, enableSelection: true, enableEditor: true, isReadOnly: false, enableEditorHistory: true });

documenteditor.appendTo('#DocumentEditor');

document.getElementById('dialog').addEventListener('click', function () {
    documenteditor.showDialog('Columns');
});

