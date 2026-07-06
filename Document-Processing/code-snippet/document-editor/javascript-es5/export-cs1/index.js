var documenteditor = new ej.documenteditor.DocumentEditor({ enableSfdtExport: true, enableSelection: true, enableEditor: true, isReadOnly: false, height: '370px' });

documenteditor.appendTo('#DocumentEditor');

document.getElementById('export').addEventListener('click', function () {
    documenteditor.save('sample', 'Sfdt');
});

