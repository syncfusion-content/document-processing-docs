import { DocumentEditorContainer, DocumentEditor, CollaborativeEditingHandler} from '@syncfusion/ej2-documenteditor';

//Inject collaborative editing module.
DocumentEditor.Inject(CollaborativeEditingHandler);
DocumentEditorContainer.Inject(Toolbar);
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true,  height: '590px',});

container.serviceUrl = 'http://localhost:5000/api/documenteditor/';
container.appendTo('#container');

//Enable collaborative editing in Document Editor.
container.documentEditor.enableCollaborativeEditing = true;