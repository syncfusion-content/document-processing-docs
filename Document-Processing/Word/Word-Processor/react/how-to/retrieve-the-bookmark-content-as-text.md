---
layout: post
title: Retrieve the bookmark content as text in React Document editor component | Syncfusion
description: Learn here all about Retrieve the bookmark content as text in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Retrieve the bookmark content as text 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve the bookmark content as text in React Document editor component

You can get the bookmark or whole document content from the React Document Editor component as plain text and SFDT (rich text).

## Get the bookmark content as plain text

You can [`selectBookmark`](../bookmark#select-bookmark) API to navigate to the bookmark and use [`text`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the bookmark content as plain text from React Document Editor component.

The following example code illustrates how to get the bookmark content as plain text.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorContainerComponent,
    Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
let container: DocumentEditorContainerComponent;
function App() {
    function onCreated() {
        // To insert text in cursor position
        container.documentEditor.editor.insertText('Document editor');
        // To select all the content in document
        container.documentEditor.selection.selectAll();
        // Insert bookmark to selected content
        container.documentEditor.editor.insertBookmark('Bookmark1');

        // Provide your bookmark name to navigate to specific bookmark
        container.documentEditor.selection.selectBookmark('Bookmark1');

        // To get the selected content as text
        let selectedContent = container.documentEditor.selection.text;
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

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

To get the bookmark content as SFDT (rich text), please check this [`link`](../how-to/get-the-selected-content#get-the-selected-content-as-sfdt-rich-text)

## Get the whole document content as text

You can use [`text`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the whole document content as plain text from React Document Editor component.

The following example code illustrates how to get the whole document content as plain text.

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
        // To select all the content in document
        container.documentEditor.selection.selectAll();

        // To get the content as text
        let selectedContent: string = container.documentEditor.selection.text;
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

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Get the whole document content as SFDT(rich text)

You can use [`serialize`](https://ej2.syncfusion.com/react/documentation/api/document-editor#serialize) API to get the whole document content as SFDT string from React Document Editor component.

The following example code illustrates how to get the whole document content as SFDT.

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

        // To get the content as SFDT
        let selectedContent: string = container.documentEditor.serialize();
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

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Get the header content as text

You can use [`goToHeader`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#gotoheader) API to navigate the selection to the header and then use [`text`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the content as plain text.

The following example code illustrates how to get the header content as plain text.

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
        // To navigate the selection to header
        container.documentEditor.selection.goToHeader();
        // To insert text in cursor position
        container.documentEditor.editor.insertText('Document editor');
        // To select all the content in document
        container.documentEditor.selection.selectAll();

        // To get the selected content as text
        let selectedContent: string = container.documentEditor.selection.text;
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
export default App()
ReactDOM.render(<App />, document.getElementById('sample'));

```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Similarly, you can use [`goToFooter`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#gotofooter) API to navigate the selection to the footer and then use [`text`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection#text-code-classlanguage-textstringcode) API to get the content as plain text.