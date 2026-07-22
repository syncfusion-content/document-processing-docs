---
layout: post
title: History in React DOCX Editor Component | Syncfusion
description: Learn here all about History in Syncfusion React DOCX Editor component of Syncfusion Essential JS 2 and more.
control: History 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# History in React DOCX Editor Component

[React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (DOCX Editor) tracks the history of all editing actions done in the document, which allows undo and redo functionality.

## Enable or disable history

Inject the ‘EditorHistory’ module in your application to provide history preservation functionality for the DOCX Editor. Refer to the following code example.


```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, SfdtExport, Selection, Editor, EditorHistory } from '@syncfusion/ej2-react-documenteditor';


DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, EditorHistory);
function App() {
  let documenteditor: DocumentEditorComponent;
  React.useEffect(() => {
    ComponentDidMount()
  }, []);
  function ComponentDidMount() {
    //Enable history module.
    documenteditor.enableEditorHistory = true;
  }
  return (
    <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

You can enable or disable history preservation for the DOCX Editor instance at any time using the ‘enableEditorHistory’ property. Refer to the following sample code.

```ts
documenteditor.enableEditorHistory = false;
```

## Undo and Redo

You can perform undo and redo using the ‘Ctrl+Z’ and ‘Ctrl+Y’ keyboard shortcuts. The DOCX Editor exposes APIs to do it programmatically.
To undo the last editing operation in the DOCX Editor, refer to the following sample code.

```ts
documenteditor.editorHistory.undo();
```

To redo the last undone action, refer to the following code example.

```ts
documenteditor.editorHistory.redo();
```

## Stack Size

History of editing actions is maintained in a stack, so that the last item will be reverted first. By default, the DOCX Editor limits the size of undo and redo stacks to 500 each respectively. However, you can customize this limit. Refer to the following sample code.

```ts
documenteditor.editorHistory.undoLimit = 400;
documenteditor.editorHistory.redoLimit = 400;
```

## See Also

* [Feature modules](./feature-module)
* [Keyboard shortcuts](./keyboard-shortcut)