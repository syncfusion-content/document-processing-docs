var documenteditor = new ej.documenteditor.DocumentEditor({ enableListDialog: true, enableSelection: true, enableEditor: true, isReadOnly: false, enableEditorHistory: true, height: '370px' });

documenteditor.appendTo('#DocumentEditor');

document.getElementById('dialog').addEventListener('click', function () {
    documenteditor.showDialog('List');
});

