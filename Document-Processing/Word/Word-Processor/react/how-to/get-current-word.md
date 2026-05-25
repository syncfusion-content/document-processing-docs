---
layout: post
title: Get current word in React Document editor component | Syncfusion
description: Learn here all about Get current word in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Get current word 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Get current word in React Document editor component

You can get the current word or paragraph content from the React Document Editor component as plain text and SFDT (rich text).

## Select and get the word in current cursor position

You can use [`selectCurrentWord`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#selectcurrentword) API in selection module to select the current word at cursor position and use [`text`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the selected content as plain text from React Document Editor component.

The following example code illustrates how to select and get the current word as plain text.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container: DocumentEditorContainerComponent;
  function onCreated() {
    // To insert text in cursor position
    container.documentEditor.editor.insertText('Document editor');
    // Move selection to previous character
    container.documentEditor.selection.moveToPreviousCharacter();
    // To select the current word in document
    container.documentEditor.selection.selectCurrentWord();

    // To get the selected content as text
    let selectedContentText: string = container.documentEditor.selection.text;
    // To get the selected content as SFDT (rich text)
    let selectedContentSFDT: string = container.documentEditor.selection.sfdt;
  }
  return (
    <DocumentEditorContainerComponent
      id="container"
      ref={(scope) => {
        container = scope;
      }}
      height={'590px'}
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      enableToolbar={true}
      created={onCreated}
    />
  );
}
export default App
ReactDOM.render(<App />, document.getElementById('sample'));

```

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

To get the bookmark content as SFDT (rich text), please check this [`link`](./get-the-selected-content#get-the-selected-content-as-sfdt-rich-text)

## Select and get the paragraph in current cursor position

You can use [`selectParagraph`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#selectparagraph) API in selection module to select the current paragraph at cursor position and use [`text`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API or [`sfdt`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#sfdt-code-classlanguage-textstringcode) API to get the selected content as plain text or SFDT from React Document Editor component.

The following example code illustrates how to select and get the current paragraph as SFDT.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container: DocumentEditorContainerComponent;
  function onCreated() {
    // To insert text in cursor position
    container.documentEditor.editor.insertText('Document editor');
    // To select the current paragraph in document
    container.documentEditor.selection.selectParagraph();

    // To get the selected content as text
    let selectedContentText: string = container.documentEditor.selection.text;
    // To get the selected content as SFDT (rich text)
    let selectedContentSFDT: string = container.documentEditor.selection.sfdt;
  }
  return (
    <DocumentEditorContainerComponent
      id="container"
      ref={(scope) => {
        container = scope;
      }}
      height={'590px'}
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      enableToolbar={true}
      created={onCreated}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).
