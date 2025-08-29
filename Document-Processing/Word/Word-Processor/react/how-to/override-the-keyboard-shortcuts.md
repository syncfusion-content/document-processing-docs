---
layout: post
title: Override keyboard shortcuts in React Document editor | Syncfusion
description: Learn here all about Override the keyboard shortcuts in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Override the keyboard shortcuts 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Override the keyboard shortcuts in React Document editor component

Document Editor triggers the [`keyDown`](https://ej2.syncfusion.com/react/documentation/api/document-editor#keydown) event every time when any key is entered and provides an instance of [`DocumentEditorKeyDownEventArgs`](https://ej2.syncfusion.com/react/documentation/api/document-editor/documentEditorKeyDownEventArgs/). You can use the [`isHandled`](https://ej2.syncfusion.com/react/documentation/api/document-editor/documentEditorKeyDownEventArgs#ishandled) property to override the keyboard shortcut behavior.

## Preventing default keyboard shortcut

The following code shows how to prevent the `CTRL + C` keyboard shortcut for copying selected content in document editor.


```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, DocumentEditorKeyDownEventArgs, SfdtExport, Selection, Editor } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorComponent.Inject(SfdtExport, Selection, Editor);
function App() {
    let documenteditor: DocumentEditorComponent;
    React.useEffect(() => {
        componentDidMount()
    }, []);
    function componentDidMount() {
        documenteditor.keyDown = function (args: DocumentEditorKeyDownEventArgs) {
            let keyCode: number = args.event.which || args.event.keyCode;
            let isCtrlKey: boolean = (args.event.ctrlKey || args.event.metaKey) ? true : ((keyCode === 17) ? true : false);
            //67 is the character code for 'C'
            if (isCtrlKey && keyCode === 67) {
                //To prevent copy operation set isHandled to true
                args.isHandled = true;
            }
        }
    }
    return (
        <DocumentEditorComponent
            id="container"
            ref={scope => {
                documenteditor = scope;
            }}
            isReadOnly={false}
            enableSelection={true}
            enableEditor={true}
            height={'330px'}
        />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

## Override or define the keyboard shortcut

Override or define a new keyboard shortcut behavior instead of preventing the keyboard shortcut.

For example, `Ctrl + S` keyboard shortcut saves the document in SFDT format by default, and there is no behavior for `Ctrl + Alt + S`. The following code demonstrates how to override the `Ctrl + S` shortcut to save a document in DOCX format and define `Ctrl + Alt + S` to save the document in SFDT format.


```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent,
  DocumentEditor,
  SfdtExport,
  Selection,
  Editor,
  DocumentEditorKeyDownEventArgs,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorComponent.Inject(SfdtExport, Selection, Editor);
function App() {
  let documentEditor;
  React.useEffect(() => {
    componentDidMount();
  }, []);
  function componentDidMount() {
    documentEditor.keyDown = (args) => {
      let keyCode = args.event.which || args.event.keyCode;
      let isCtrlKey =
        args.event.ctrlKey || args.event.metaKey
          ? true
          : keyCode === 17
          ? true
          : false;
      let isAltKey = args.event.altKey
        ? args.event.altKey
        : keyCode === 18
        ? true
        : false;
      // 83 is the character code for 'S'
      if (isCtrlKey && !isAltKey && keyCode === 83) {
        //To prevent default save operation, set the isHandled property to true
        args.isHandled = true;
        //Download the document in docx format.
        documentEditor.save('sample', 'Docx');
        args.event.preventDefault();
      } else if (isCtrlKey && isAltKey && keyCode === 83) {
        //Download the document in sfdt format.
        documentEditor.save('sample', 'Sfdt');
      }
    };
  }
  return (
    <DocumentEditorComponent
      id="container"
      ref={(scope) => {
        documentEditor = scope;
      }}
      isReadOnly={false}
      enableSelection={true}
      enableEditor={true}
      enableSfdtExport={true}
      height={'330px'}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```