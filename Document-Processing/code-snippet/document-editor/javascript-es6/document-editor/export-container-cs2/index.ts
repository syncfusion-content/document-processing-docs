import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '390px', serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/' });

container.appendTo('#DocumentEditor');

document.getElementById('export').addEventListener('click', () => {
    container.documentEditor.save('sample', 'Docx');
});