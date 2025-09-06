

import { DocumentEditor, Editor } from '@syncfusion/ej2-documenteditor';

//Initialize Document Editor component.
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false, height: '370px', documentEditorSettings: {showRuler: true}, serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});

//Enable all built in modules.
documenteditor.enableAllModules();

document.getElementById('container_ruler_button').addEventListener('click', 
function () {
    documenteditor.documentEditorSettings.showRuler = !documenteditor.documentEditorSettings.showRuler;
});

//Render Document Editor component.
documenteditor.appendTo('#DocumentEditor');


