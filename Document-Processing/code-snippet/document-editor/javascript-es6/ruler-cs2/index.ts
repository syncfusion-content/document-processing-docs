

import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

//Inject require modules.
DocumentEditorContainer.Inject(Toolbar);

//Initialize Document Editor Container component.
let container: DocumentEditorContainer = new DocumentEditorContainer({
    height: '590px', documentEditorSettings: {showRuler: true}
});

document.getElementById('container_ruler_button').addEventListener('click', 
function () {
    container.documentEditorSettings.showRuler = !container.documentEditorSettings.showRuler;
});

//Render Document Editor Container component.
container.appendTo('#DocumentEditor');


