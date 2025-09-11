// Inject collaborative editing module.
ej.documenteditor.DocumentEditor.Inject(ej.documenteditor.CollaborativeEditingHandler);
ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
let container = new ej.documenteditor.DocumentEditorContainer({ enableToolbar: true,  height: '590px',});
container.appendTo('#container');

// Enable collaborative editing in Document Editor.
container.documentEditor.enableCollaborativeEditing = true;