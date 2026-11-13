---
layout: post
title: FAQs about Track Changes in React DOCX Editor | Syncfusion
description: Find frequently asked questions about track changes in the React DOCX Editor control, including how to detect editable and non-editable regions.
control: Track Changes
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# FAQs about Track Changes in React DOCX Editor

The frequently asked questions about track changes in [React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) are listed below:

## How do I detect whether the cursor is in an editable or non-editable region?

You can detect whether the current cursor position is in an editable or non-editable region by using the [`isSelectionInEditRegion`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#isselectionineditregion) API within the [`selectionChange`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#selectionchange) event. This is useful when a document is protected with editable ranges, and you want to perform custom logic based on where the selection lies.

The following code snippet illustrates how to identify the selection region using the `selectionChange` event:

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorContainerComponent,
    Toolbar,
    Ribbon,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar, Ribbon);

function App() {
    let container: DocumentEditorContainerComponent;
    function selectionChanges() {
        // Detect whether the selection is in an editable or non-editable region.
        if (container.documentEditor.selection.isSelectionInEditRegion()) {
            console.log('Selection in editable region');
        } else {
            console.log('Selection in non-editable region');
        }
    }
    return (
        <DocumentEditorContainerComponent
            id="container"
            ref={(scope) => {
                container = scope;
            }}
            height={'590px'}
            enableToolbar={true}
            toolbarMode="Ribbon"
            selectionChange={selectionChanges}
        />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
