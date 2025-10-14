


import { DocumentEditor, Editor, Selection, BookmarkDialog, SfdtExport, } from '@syncfusion/ej2-documenteditor';
DocumentEditor.Inject(Editor, Selection, SfdtExport, BookmarkDialog);
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false,
    enableSelection: true,
    enableEditor: true,
    enableBookmarkDialog: true,
    enableSfdtExport: true,
    height: '370px'
});
let button: HTMLElement = document.getElementById('dialog');
button.addEventListener('click', function () {
    //To open bookmark dialog
    documenteditor.showDialog('Bookmark');
});
documenteditor.appendTo('#DocumentEditor');



