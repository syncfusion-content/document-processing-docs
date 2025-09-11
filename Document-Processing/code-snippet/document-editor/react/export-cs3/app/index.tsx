


import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, SfdtExport, Selection, Editor, TextExport } from '@syncfusion/ej2-react-documenteditor';

//Inject require module.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, TextExport);
function App() {
    let documenteditor: DocumentEditorComponent;
    function save() {
        //Download the document in txt format.
        documenteditor.save('sample', 'Txt');
    }
        return (
            <div>
                <button onClick={save}>Save</button>
                <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => {documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableTextExport={true} />
            </div>
        );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



