


import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, DocumentEditor, Print, Editor, Selection, EditorHistory, SfdtExport, } from '@syncfusion/ej2-react-documenteditor';

//Inject require modules.
DocumentEditor.Inject(Print, Editor, Selection, EditorHistory, SfdtExport);
function App() {
  let documenteditor1: DocumentEditorComponent = new DocumentEditorComponent(undefined);
  let documenteditor2: DocumentEditorComponent = new DocumentEditorComponent(undefined);
  function onPrint() {
    //Serialize the document content.
    let sfdtData = documenteditor1.serialize();
    //Open the serialized content in Document Editor.
    documenteditor2.open(sfdtData);
    //Set A5 paper size
    documenteditor2.selection.sectionFormat.pageWidth = 419.55;
    documenteditor2.selection.sectionFormat.pageHeight = 595.3;
    //Print the document content.
    documenteditor2.print();
  }
  return (
    <div>
      <button onClick={onPrint}>Print</button>
      <DocumentEditorComponent
        id="DocumentEditor"
        height={'330px'}
        ref={scope => {
          documenteditor1 = scope;
        }}
        enablePrint={true}
        isReadOnly={false}
        enableSelection={true}
        enableSfdtExport={true}
        enableEditor={true}
        enableEditorHistory={true}
      />
      <DocumentEditorComponent
        id="DocumentEditor2"
        height={'330px'}
        ref={scope => {
          documenteditor2 = scope;
        }}
        enablePrint={true}
        isReadOnly={false}
        enableSelection={true}
        enableSfdtExport={true}
        enableEditor={true}
        enableEditorHistory={true}
      />
    </div>
  );

} export default App
ReactDOM.render(<App />, document.getElementById('sample'));


