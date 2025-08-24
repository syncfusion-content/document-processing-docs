

import { DocumentEditor, Editor, Selection, SfdtExport, EditorHistory, BookmarkDialog } from '@syncfusion/ej2-documenteditor';

// Enable requir modules
DocumentEditor.Inject(Editor, Selection, SfdtExport, EditorHistory, BookmarkDialog);

// Initialize Document Editor component.
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enableEditor: true,
    enableSelection: true,
    enableEditorHistory: true,
    enableBookmarkDialog: true,
    height: '590px'
});
documenteditor.appendTo('#DocumentEditor');

document.getElementById('dialog').addEventListener('click', () => {
    //Open bookmark dialog.
    documenteditor.showDialog('Bookmark');
});


