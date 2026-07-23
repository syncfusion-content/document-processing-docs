---
layout: post
title: Resize Document Editor in React DOCX Editor | Syncfusion
description: Learn here all about Resize Document Editor in Syncfusion React Document Editor component of Syncfusion Essential JS 2 and more.
control: Resize Document Editor
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Resize Document Editor in React Document Editor component

In this article, we are going to see how to change the height and width of the [React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor).

## Change height of Document Editor

DocumentEditorContainer initially renders with default height. You can change the height of the Document Editor using the [`height`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/documentEditorContainerModel#height) property, the value which is in pixels.

The following example code illustrates how to change height of Document Editor.

```ts
 <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          this.container = scope;
        }}
        height={'590px'}
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
        enableToolbar={true}
      />
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Similarly, you can use [`height`](https://ej2.syncfusion.com/react/documentation/api/document-editor#height) property for DocumentEditor also.

## Change width of Document Editor

DocumentEditorContainer initially renders with default width. You can change the width of the Document Editor using the [`width`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/documentEditorContainerModel#width) property, the value which is in percentages.

The following example code illustrates how to change the width of Document Editor.

```ts

 <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          this.container = scope;
        }}
        width={'100%'}
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
        enableToolbar={true}
      />

```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Similarly, you can use [`width`](https://ej2.syncfusion.com/react/documentation/api/document-editor#width) property for DocumentEditor also.

## Resize Document Editor

Using the [`resize`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#resize) method, you can change the height and width of the Document Editor.

The following example code illustrates how to fit the Document Editor to the browser window size.

```ts
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container;
  function onCreate() {
    setInterval(() => {
      updateDocumentEditorSize();
    }, 100);
    //Adds event listener for browser window resize event.
    window.addEventListener('resize', onWindowResize);
  }
  function onWindowResize() {
    //Resizes the document editor component to fit full browser window automatically whenever the browser is resized.
    updateDocumentEditorSize();
  }
  function updateDocumentEditorSize() {
    //Resizes the document editor component to fit full browser window.
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    container.resize(windowWidth, windowHeight);
  }
  return (
    <div>
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          container = scope;
        }}
        height={'590px'}
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
        enableToolbar={true}
        created={onCreate}
      />
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);

```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
