
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useRef, useState } from 'react';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { originalDocument, revisedDocument } from './data';

DocumentEditorContainerComponent.Inject(Toolbar);

function App() {
    let container = useRef<DocumentEditorContainerComponent>(null);
    const [result, setResult] = useState('');

    //Utilise the correct Service URL where the CompareDocuments Web API is hosted.
    //If you choose to use localhost, please update the URL below to 'http://localhost:62870/api/DocumentEditor/';
    let serviceUrl: string = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

    // Compare the original and revised documents by sending the SFDT contents to the server-side CompareDocuments Web API
    // and load the resultant document with tracked changes into the Document Editor.
    function onCompareClick() {
        const formData = new FormData();
        formData.append('originalDocument', JSON.stringify(originalDocument));
        formData.append('revisedDocument', JSON.stringify(revisedDocument));
        formData.append('authorName', 'Author');
        formData.append('dateTime', new Date().toISOString());
        fetch(serviceUrl + 'CompareDocuments', {
            method: 'POST',
            body: formData
        }).then(response => {
            if (response.ok) {
                return response.text();
            } else {
                alert('Failed to compare the documents. Please try again.');
            }
        }).then((sfdt: string) => {
            if (sfdt) {
                // Open the compared document with tracked changes in the Document Editor
                container.current.documentEditor.showRevisions = true;
                container.current.documentEditor.open(sfdt);
            }
        }).catch(() => {
            alert('Failed to compare the documents. Please try again.');
        });
    }

    return (
        <div>
            <ButtonComponent cssClass='e-primary' onClick={onCompareClick}>Compare</ButtonComponent>
            <DocumentEditorContainerComponent id="container" height={'590px'}
                serviceUrl={serviceUrl} enableToolbar={true} ref={container} />
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
