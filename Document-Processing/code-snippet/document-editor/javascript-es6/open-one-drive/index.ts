
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

// Inject require modules.
DocumentEditorContainer.Inject(Toolbar);

//Initialize Document Editor component
let documentEditorContainer: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', serviceUrl: 'http://localhost:62870/api/documenteditor/' });

// Render Document Editor component.
documentEditorContainer.appendTo('#DocumentEditor');

document.getElementById('load').addEventListener('click', (): void => {
  load();
});

function load(): void {
  fetch(
    'http://localhost:62870/api/documenteditor/LoadFromOneDrive',
    {
      method: 'Post',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({ documentName: 'Getting Started.docx' })
    }
  )
    .then(response => {
      if (response.status === 200 || response.status === 304) {
        return response.json(); // Return the Promise
      } else {
        throw new Error('Error loading data');
      }
    })
    .then(json => {
      documentEditorContainer.documentEditor.open(JSON.stringify(json));
    })
    .catch(error => {
      console.error(error);
    });
}

