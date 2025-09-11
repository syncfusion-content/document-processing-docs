import { DocumentEditorContainer, DocumentEditor, CollaborativeEditingHandler} from '@syncfusion/ej2-documenteditor';

//Inject collaborative editing module.
DocumentEditor.Inject(CollaborativeEditingHandler);
let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true,  height: '590px'});
container.appendTo('#container');

//Enable collaborative editing in Document Editor.
container.documentEditor.enableCollaborativeEditing = true;