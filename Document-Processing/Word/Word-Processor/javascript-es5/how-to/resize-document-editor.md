---
layout: post
title: How to Resize in JavaScript DOCX Editor | Syncfusion
description: Adjust the height and width of the Syncfusion® JavaScript DOCX Editor to create responsive layouts and customize the document editing experience.
platform: document-processing
control: Resize Document Editor
documentation: ug
domainurl: ##DomainURL##
---

# How to Resize in JavaScript DOCX Editor 

In this article, we are going to see how to change the height and width of the [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor).

## Change the Height of the Document Editor

The DocumentEditorContainer initially renders with a default height. You can change the height of the DocumentEditor using the [`height`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor-container/documentEditorContainerModel#height) property, the value of which is in pixels.

The following example code illustrates how to change the height of the Document Editor.

```js
var container = new ej.documenteditor.DocumentEditorContainer({
    enableToolbar: true, height: "590px"
});
container.appendTo('#DocumentEditor');
```

Similarly, you can also use the [`height`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#height) property for the DocumentEditor.

## Change the Width of the Document Editor

The DocumentEditorContainer initially renders with a default width. You can change the width of the DocumentEditor using the [`width`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor-container/documentEditorContainerModel#width) property, the value of which is in percentage.

The following example code illustrates how to change the width of the Document Editor.

```js
var container = new ej.documenteditor.DocumentEditorContainer({
    enableToolbar: true,  width: "100%"
});
container.appendTo('#DocumentEditor');
```

Similarly, you can also use the [`width`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#width) property for the DocumentEditor.

## Resize the Document Editor

Using the [`resize`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#resize) method, you can change the height and width of the Document Editor.

The following example code illustrates how to fit the Document Editor to the browser window size.

```js
var container = new ej.documenteditor.DocumentEditorContainer({ enableToolbar: true, height: '590px' });
 ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
container.serviceUrl =
    'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.created = () => {
    setInterval(() => {
        updateDocumentEditorSize();
    }, 100);
    // Adds event listener for browser window resize event.
    window.addEventListener('resize', onWindowResize);
};
container.appendTo('#container');

function onWindowResize() {
    // Resizes the document editor component to fit full browser window automatically whenever the browser resized.
    updateDocumentEditorSize();
}
function updateDocumentEditorSize() {
    // Resizes the document editor component to fit full browser window.
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    container.resize(windowWidth, windowHeight);
}
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.