var documenteditor = new ej.documenteditor.DocumentEditor({ enableTableOptionsDialog: true, enableSelection: true, enableEditor: true, isReadOnly: false, enableEditorHistory: true, enableTableOptionsDialog: true, enableTablePropertiesDialog: true, enableBordersAndShadingDialog: true, height: '370px' });
// documenteditor.enableAllModules();
documenteditor.appendTo('#DocumentEditor');
documenteditor.editor.insertTable(2,2);
document.getElementById('dialog').addEventListener('click', function () {
    documenteditor.showDialog('TableOptions');
});

