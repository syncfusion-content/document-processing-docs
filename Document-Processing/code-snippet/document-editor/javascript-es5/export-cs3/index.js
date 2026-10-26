var documenteditor = new ej.documenteditor.DocumentEditor({ enableTextExport: true, enableSelection: true, enableEditor: true, isReadOnly: false, height: '370px' });

documenteditor.appendTo('#DocumentEditor');

document.getElementById('export').addEventListener('click', function () {
    documenteditor.save('sample', 'Txt');
});

