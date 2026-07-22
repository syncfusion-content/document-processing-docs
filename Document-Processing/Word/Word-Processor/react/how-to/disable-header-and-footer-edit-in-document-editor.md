---
layout: post
title: Disable header and footer in React DOCX Editor using Syncfusion
description: Learn here all about Disable header and footer edit in Document Editor in Syncfusion React Document Editor component of Syncfusion Essential JS 2 and more.
control: Disable header and footer edit in Document Editor
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Disable header and footer editing in React Document Editor

## Disable header and footer edit in DocumentEditorContainer instance

You can use [`restrictEditing`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#restrictediting) property to disable header and footer editing based on selection context type.

RestrictEditing allows you to restrict the document modification and puts the document in read-only mode. So, by using this property, and if the selection is inside header or footer, you can set this property as true.

The following example code illustrates how to disable header and footer edit in `DocumentEditorContainer` instance.

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
  function selectionChanges() {
    // Check whether selection is in header
    if (container.documentEditor.selection.contextType.indexOf('Header') > -1 ||
      // Check whether selection is in Footer
      container.documentEditor.selection.contextType.indexOf('Footer') > -1) {
      // Change the document to read only mode
      container.restrictEditing = true;
    } else {
      // Change the document to editable mode
      container.restrictEditing = false;
    }
  };
  return (
    <DocumentEditorContainerComponent
      id="container" ref={(scope) => {
        container = scope;
      }}
      height={'590px'}
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      enableToolbar={true}
      selectionChange={selectionChanges}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

### Disable header and footer edit using closeHeaderFooter API

As an alternative to `restrictEditing`, you can disable clicking inside Header or Footer by using [`closeHeaderFooter`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#closeheaderfooter) API in selection module. This method closes the active header or footer region when the selection enters it, returning the selection to the document body and preventing header/footer modification.

The following example code illustrates how to disable header and footer edit in `DocumentEditorContainer` instance.

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
  function selectionChanges() {
    // Check whether selection is in header
    if (container.documentEditor.selection.contextType.indexOf('Header') > -1 ||
      // Check whether selection is in Footer
      container.documentEditor.selection.contextType.indexOf('Footer') > -1) {
      // Close header Footer
      container.documentEditor.selection.closeHeaderFooter();
    }
  };
  return (
    <DocumentEditorContainerComponent
      id="container" ref={(scope) => {
        container = scope;
      }}
      height={'590px'}
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      enableToolbar={true}
      selectionChange={selectionChanges}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Disable header and footer edit in DocumentEditor instance

Like restrictEditing, you can use [`isReadOnly`](https://ej2.syncfusion.com/react/documentation/api/document-editor#isreadonly) property in Document Editor to disable header and footer edit.

The following example code illustrates how to disable header and footer edit in `DocumentEditor` instance.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent,
  Editor,
  Selection,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorComponent.Inject(Editor, Selection);
function App() {
  let documentEditor;
  React.useEffect(() => {
    documentEditor.selectionChange = () => {
      setTimeout(() => {
        onSelectionChange();
      }, 20);
    };
  }, []);

  function onSelectionChange() {
    // Check whether selection is in header
    if (
      documentEditor.selection.contextType.indexOf('Header') > -1 ||
      // Check whether selection is in Footer
      documentEditor.selection.contextType.indexOf('Footer') > -1
    ) {
      // Change the document to read only mode
      documentEditor.isReadOnly = true;
    } else {
      // Change the document to editable mode
      documentEditor.isReadOnly = false;
    }
  }
  return (
    <DocumentEditorComponent
      id="container"
      height={'590px'}
      ref={(scope) => {
        documentEditor = scope;
      }}
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      enableSelection={true}
      enableEditor={true}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
