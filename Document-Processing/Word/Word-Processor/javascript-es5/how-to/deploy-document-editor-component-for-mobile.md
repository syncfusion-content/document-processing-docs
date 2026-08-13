---
layout: post
title: Deploy DOCX editor for mobile in JavaScript (ES5) | Syncfusion
description: Learn here all about Deploy document editor component for mobile in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Deploy Document Editor component for mobile
documentation: ug
domainurl: ##DomainURL##
---

# Deploy DOCX editor component for mobile in JavaScript(ES5) DOCX editor

## Document Editor component for mobile

At present, the [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) component is not responsive for mobile, and we haven't ensured the editing functionalities in mobile browsers. However, it works properly as a document viewer in mobile browsers.

Hence, it is recommended to set the Document Editor component to read-only in mobile browsers. Also, invoke the [`fitPage`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#fitpage) method with the [`FitPageWidth`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/pageFitType) parameter in the document change event, such as to display one full page by adjusting the zoom factor.

The following example code illustrates how to deploy Document Editor component for mobile.

```js
//Initialize Document Editor Container component.

var container = new ej.documenteditor.DocumentEditorContainer({
    enableToolbar: true, height: '590px'
});
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
container.appendTo('#DocumentEditor');

//To detect the device
var isMobileDevice = /Android|Windows Phone|webOS/i.test(navigator.userAgent);

container.documentChange = function () {
    if (isMobileDevice) {
        container.restrictEditing = true;
        setTimeout(function () {
            container.documentEditor.fitPage("FitPageWidth");
        }, 50);
    }
    else {
        container.restrictEditing = false;
    }
};
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

You can download the complete working example from this [GitHub location](https://github.com/SyncfusionExamples/Deploy-Document-Editor-in-Mobile-Friendly-Web-page/).

N> You can use the [`restrictEditing`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#restrictediting) in DocumentEditorContainer and [`isReadOnly`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#isreadonly) in DocumentEditor based on your requirement to change the component to read-only mode.