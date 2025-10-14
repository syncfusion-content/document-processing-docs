var documenteditor = new ej.documenteditor.DocumentEditor({ enableWordExport: true, enableTextExport: true, enableSelection: true, enableEditor: true, isReadOnly: false });

documenteditor.appendTo('#DocumentEditor');

document.getElementById('export').addEventListener('click', function () {
    documenteditor.save('sample', 'Dotx');
});

