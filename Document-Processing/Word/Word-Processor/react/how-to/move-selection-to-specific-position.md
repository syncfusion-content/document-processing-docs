---
layout: post
title: Move selection to position in React Document editor | Syncfusion
description: Learn here all about Move selection to specific position in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Move selection to specific position 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Move selection to specific position in React Document editor component

Using [`select`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#select) API in selection module, You can set cursor position to anywhere in the document.

## Selects content based on start and end hierarchical index

Hierarchical index will be in below format.

`sectionIndex;blockIndex;offset`

The following code snippet illustrate how to select using hierarchical index.

```ts
// Selection will occur between provided start and end offset
container.documentEditor.editor.insertText("Welcome");
// The below code will select the letters “We” from inserted text “Welcome”
container.documentEditor.selection.select("0;0;0", "0;0;2");
```

The following table illustrates about Hierarchical index in detail.

| Element |Hierarchical Format | Explanation |
|-----------------|-------------|----|
|Move selection to Paragraph |sectionIndex;blockIndex;offset <br>**Ex:** 0;0;0|It moves the cursor to the start of paragraph.|
|Move selection to Table|sectionIndex;tableIndex;rowIndex;cellIndex;blockIndex;offset <br>**Ex:** 0;0;0;0;1;0|It moves the cursor to the second paragraph which is inside first row and cell of table.|
|Move selection to header|pageIndex;H;sectionIndex;blockIndex;offset<br>**Ex:** 1;H;0;0;0|It moves cursor to the header in second page.|
|Move selection to Footer|pageIndex;F;sectionIndex;blockIndex;offset<br>**Ex:** 1;F;0;0;0|It moves cursor to the footer in second page.|

## Get the selection start and end hierarchical index

Using [`startOffset`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#startoffset), you can get start hierarchical index which denotes the start index of current selection.
Similarly, using [`endOffset`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#endoffset), you can get end hierarchical index which denotes the end index of current selection.

The following code snippet illustrate how to get the selection start and end offset on selection changes in document.

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
        //Get the start index of current selection
        let startOffset: string =
            container.documentEditor.selection.startOffset;
        //Get the end index of current selection
        let endOffset: string = container.documentEditor.selection.endOffset;
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
            selectionChange={selectionChanges}
        />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Document editor have [`selectionChange`](https://ej2.syncfusion.com/react/documentation/api/document-editor#selectionchange) event which is triggered whenever the selection changes in Document.

## Selects the content based on left and top position

Here, you can specify the [`selection settings`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selectionSettings/) to select the content based on left and top position.

x denotes the left position and y denotes the top position and extend denotes whether to extend or update selection.

Please check below code sample for reference.

```ts
container.documentEditor.selection.select({ x: 188.4814208984375 , y: 662.00005, extend: true });
```