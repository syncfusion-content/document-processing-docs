


import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, WordExport, SfdtExport, Selection, Editor } from '@syncfusion/ej2-react-documenteditor';

//Inject require module.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, WordExport);
function App() {
    let documenteditor: DocumentEditorComponent;
    function save() {
        //Download the document in docx format.
        documenteditor.save('sample', 'Docx');
    }
        return (
            <div>
                <button onClick={save}>Save</button>
                <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => {documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableWordExport={true} />
            </div>
        );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));


