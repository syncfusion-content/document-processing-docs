var documenteditor = new ej.documenteditor.DocumentEditor({ enableBordersAndShadingDialog: true, enableSelection: true, enableEditor: true, isReadOnly: false, enableEditorHistory: true, height: '370px' });

documenteditor.appendTo('#DocumentEditor');
documenteditor.editor.insertTable(2,2);
document.getElementById('dialog').addEventListener('click', function () {
    documenteditor.showDialog('BordersAndShading');
});

