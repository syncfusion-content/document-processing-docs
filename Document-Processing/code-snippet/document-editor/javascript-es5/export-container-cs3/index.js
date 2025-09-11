var container = new ej.documenteditor.DocumentEditorContainer({ enableToolbar: true,  height: '590px'});

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#DocumentEditor');

document.getElementById('export').addEventListener('click', function () {
    container.documentEditor.save('sample', 'Txt');
});