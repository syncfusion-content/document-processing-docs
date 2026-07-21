---
layout: post
title: Disable header and footer edit in document editor in React Document Editor using Syncfusion
description: Learn here all about Disable header and footer edit in document editor in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Disable header and footer edit in document editor
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Disable header and footer edit in document editor in React Document editor component

## Disable header and footer edit in DocumentEditorContainer instance

You can use [`restrictEditing`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#restrictediting) property to disable header and footer editing based on selection context type.

RestrictEditing allows you to restrict the document modification and makes the Document read only mode. So, by using this property, and if selection inside header or footer, you can set this property as true.

> **Note:** Setting `restrictEditing` to `true` affects the **entire document**, not just the header or footer region. All editing across the document is disabled while the value is `true`. Toggle it back to `false` (as shown in the example) when the selection leaves the header/footer to restore editing in the body.

The selection's [`contextType`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#contexttype) property reports the current editing context as a string (for example, `Header`, `Footer`, `Table`, `Text`, or `null` when the selection is empty or the editor is in an uninitialized state). The examples below check whether `contextType` contains `Header` or `Footer` to detect header/footer selection.

The following example code illustrates how to disable header and footer edit in `DocumentEditorContainer` instance.

> **Note:** The example injects and enables the `Toolbar` module so that the `DocumentEditorContainerComponent` renders with its default toolbar. The toolbar itself is not required for header/footer disabling; you can omit `Toolbar` injection and `enableToolbar={true}` if your application does not need a toolbar.

> **Note:** The `selectionChange` event fires after layout updates, so the `contextType` value may not be immediately available when the handler runs. If you observe stale `contextType` values, wrap the check in `setTimeout` as shown in the [`DocumentEditor` instance example](#disable-header-and-footer-edit-in-documenteditor-instance) below.

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

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
>
> The `serviceUrl` must point to a backend that exposes the Document Editor Web API endpoints used by the component (for example, `/api/documenteditor/Import`, `/api/documenteditor/Save`, `/api/documenteditor/SystemClipboard`, and `/api/documenteditor/RestrictEditing`). Refer to the [Web Service API documentation](https://ej2.syncfusion.com/react/documentation/document-editor/import-document-server-side) for the full list of required endpoints and request/response contracts before deploying your own service.

### Disable header and footer edit using closeHeaderFooter API

As an alternative to `restrictEditing`, you can disable clicking inside Header or Footer by using [`closeHeaderFooter`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#closeheaderfooter) API in selection module. This method closes the active header or footer region when the selection enters it, returning the selection to the document body and preventing header/footer modification.

The following example code illustrates how to close header and footer when selection is inside header or footer in `DocumentEditorContainer` instance.

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
      // Close header footer
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

> **Note:** For details on the `serviceUrl` used in this example, see the [serviceUrl callout](#disable-header-and-footer-edit-in-documenteditorcontainer-instance) at the end of the first example above.

Like restrictEditing, you can use [`isReadOnly`](https://ej2.syncfusion.com/react/documentation/api/document-editor/#isreadonly) property in Document editor to disable header and footer edit.

The following example code illustrates how to disable header and footer edit in `DocumentEditor` instance.

> **Note:** The `onSelectionChange` handler wraps the `contextType` check in `setTimeout(..., 20)` to defer the read until after the editor's selection/layout update cycle has completed. The 20 ms delay is an empirical value that gives the underlying editor time to update `contextType` before it is read; adjust as needed for your environment.

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
  function onSelectionChange() {
    setTimeout(() => {
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
    }, 20);
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
      selectionChange={onSelectionChange}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

> **Note:** For details on the `serviceUrl` used in this example, see the [serviceUrl callout](#disable-header-and-footer-edit-in-documenteditorcontainer-instance) at the end of the first example above.
