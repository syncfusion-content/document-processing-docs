

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorComponent, SfdtExport, Selection, Editor, HyperlinkDialog
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorComponent.Inject(Selection, SfdtExport, Editor, HyperlinkDialog);
function App() {
   let documenteditor: DocumentEditorComponent;

    //Click the hyperlink button, the hyperlink dialog will open
    function showHyperlinkDialog() {
        //Open hyperlink dialog.
        documenteditor.showDialog('Hyperlink');
    }

        return (
            <div>
                <button onClick={showHyperlinkDialog}>Dialog</button>
                <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => {documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableSfdtExport={true} enableEditor={true} enableHyperlinkDialog={true} />
            </div>
        );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));


