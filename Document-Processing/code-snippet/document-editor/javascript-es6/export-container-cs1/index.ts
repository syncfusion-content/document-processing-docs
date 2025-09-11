import { DocumentEditorContainer, Toolbar,Editor, SfdtExport } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar, Editor, SfdtExport);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '390px', serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/' });

container.appendTo('#DocumentEditor');

document.getElementById('export').addEventListener('click', () => {
    container.documentEditor.save('sample', 'Sfdt');
});