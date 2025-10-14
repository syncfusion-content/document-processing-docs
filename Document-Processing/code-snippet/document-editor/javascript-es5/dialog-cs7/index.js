var documenteditor = new ej.documenteditor.DocumentEditor({ enableTableOfContentsDialog: true, enableSelection: true, enableEditor: true, isReadOnly: false, enableEditorHistory: true });

documenteditor.appendTo('#DocumentEditor');

document.getElementById('dialog').addEventListener('click', function () {
    documenteditor.showDialog('TableOfContents');
});

