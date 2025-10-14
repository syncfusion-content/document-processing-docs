---
layout: post
title: How to in React Document editor component | Syncfusion
description: Learn here all about How to in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: How to 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to in React Document editor component

Document Editor triggers the [`keyDown`](./api-documentEditorKeyDownEventArgs.html) event every time when any key is entered and provides an instance of `DocumentEditorKeyDownEventArgs`. You can use the `isHandled` property to override the keyboard shortcut behavior.

## Preventing default keyboard shortcut

The following code shows how to prevent the `CTRL + C` keyboard shortcut for copying selected content in document editor.

```ts

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  DocumentEditorComponent, SfdtExport, Selection, Editor, DocumentEditorKeyDownEventArgs
} from '@syncfusion/ej2-react-documenteditor';

//Inject require modules.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor);
function App() {
  let documenteditor: DocumentEditorComponent;
  React.useEffect(() => {
    ComponentDidMount()
  }, []);
  function ComponentDidMount() {
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
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  DocumentEditorComponent, SfdtExport, Selection, Editor, DocumentEditorKeyDownEventArgs
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorComponent.Inject(SfdtExport, Selection, Editor);
function App() {
  let documenteditor: DocumentEditorComponent;
  React.useEffect(() => {
    ComponentDidMount()
  }, []);
  function ComponentDidMount() {
    documenteditor.keyDown = function (args: DocumentEditorKeyDownEventArgs) {
      let keyCode: number = args.event.which || args.event.keyCode;

      let isCtrlKey: boolean = (args.event.ctrlKey || args.event.metaKey) ? true : ((keyCode === 17) ? true : false);

      let isAltKey: boolean = args.event.altKey ? args.event.altKey : ((keyCode === 18) ? true : false);

      // 83 is the character code for 'S'
      if (isCtrlKey && !isAltKey && keyCode === 83) {
        //To prevent default save operation, set the isHandled property to true
        args.isHandled = true;
        //Download the document in docx format.
        documenteditor.save('sample', 'Docx');
        args.event.preventDefault();
      } else if (isCtrlKey && isAltKey && keyCode === 83) {
        //Download the document in sfdt format.
        documenteditor.save('sample', 'Sfdt');
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
