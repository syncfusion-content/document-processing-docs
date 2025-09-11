
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {  DocumentEditorComponent, Print, Editor, Selection, EditorHistory, SfdtExport
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorComponent.Inject(Print, Editor, Selection, SfdtExport, EditorHistory);
let documenteditor;
function App() {
  return (
    <div>
      <button onClick={onPrint}>Print</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} enablePrint={true} isReadOnly={false} enableSelection={true} enableSfdtExport={true} enableEditor={true} enableEditorHistory={true}
      />
    </div>
  );
  function onPrint() {
    //Print the document content.
    documenteditor.print();
  }
}
export default App
ReactDOM.render(<App />, document.getElementById('sample'));
