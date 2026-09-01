---
layout: post
title: How to Resize in TypeScript DOCX Editor | Syncfusion
description: Adjust the height and width of the Syncfusion® TypeScript DOCX Editor to create responsive layouts and customize the document editing experience.
platform: document-processing
control: Resize the DOCX Editor
documentation: ug
domainurl: ##DomainURL##
---

# How to Resize in TypeScript DOCX Editor 

In this article, we are going to see how to change the height and width of the [TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor).

## Change the height of the DOCX Editor

The DocumentEditorContainer initially renders with a default height. You can change the height of the DocumentEditorContainer using the [`height`](https://ej2.syncfusion.com/documentation/api/document-editor-container/documentEditorContainerModel#height) property, whose value is in pixels.

The following example code illustrates how to change the height of the DOCX Editor.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({
    enableToolbar: true, height: '590px'
});
container.appendTo('#DocumentEditor');
```

Similarly, you can use the [`height`](https://ej2.syncfusion.com/documentation/api/document-editor#height) property for the DocumentEditor as well.

## Change the width of the DOCX Editor

The DocumentEditorContainer initially renders with a default width. You can change the width of the DocumentEditorContainer using the [`width`](https://ej2.syncfusion.com/documentation/api/document-editor-container/documentEditorContainerModel#width) property, whose value is in percent.

The following example code illustrates how to change the width of the DOCX Editor.

```ts
let container: DocumentEditorContainer = new DocumentEditorContainer({
    enableToolbar: true, width: '100%'
});
container.appendTo('#DocumentEditor');
```

Similarly, you can use the [`width`](https://ej2.syncfusion.com/documentation/api/document-editor#width) property for the DocumentEditor as well.

## Resize the DOCX Editor

Using the [`resize`](https://ej2.syncfusion.com/documentation/api/document-editor-container#resize) method, you can change the height and width of the DOCX Editor.

The following example code illustrates how to fit the DOCX Editor to the browser window size.

```ts
import {
    DocumentEditorContainer,
    Toolbar,
} from '@syncfusion/ej2-documenteditor';

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px' });
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl =
    'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.created = (): void => {
    setInterval(() => {
        updateDocumentEditorSize();
    }, 100);
    //Adds event listener for browser window resize event.
    window.addEventListener('resize', onWindowResize);
};
container.appendTo('#container');

function onWindowResize() {
    //Resizes the document editor component to fit the full browser window automatically whenever the browser is resized.
    updateDocumentEditorSize();
}
function updateDocumentEditorSize() {
    //Resizes the document editor component to fit the full browser window.
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    container.resize(windowWidth, windowHeight);
}
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
