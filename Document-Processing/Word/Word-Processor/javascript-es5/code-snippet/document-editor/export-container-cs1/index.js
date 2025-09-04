var container = new ej.documenteditor.DocumentEditorContainer({ enableToolbar: true,  height: '590px'});

container.serviceUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';

container.appendTo('#DocumentEditor');

document.getElementById('export').addEventListener('click', function () {
    container.documentEditor.save('sample', 'Sfdt');
});