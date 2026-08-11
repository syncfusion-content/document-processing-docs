---
layout: post
title: Deploy for Mobile in JavaScript (ES6) DOCX Editor | Syncfusion
description: Learn how to deploy the Syncfusion JavaScript (ES6) Document Editor for mobile devices by switching to read-only mode.
platform: document-processing
control: Deploy Document Editor Component for Mobile
documentation: ug
domainurl: ##DomainURL##
---

# Deploy for Mobile in JavaScript (ES6) Document Editor

## Document Editor component for mobile

At present, the [TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) component is not responsive on mobile, and we haven't ensured the editing functionality in mobile browsers. However, it works properly as a document viewer in mobile browsers.

Hence, it is recommended to switch the Document Editor component to read-only mode in mobile browsers. Also, invoke the [`fitPage`](https://ej2.syncfusion.com/documentation/api/document-editor#fitpage) method with the [`FitPageWidth`](https://ej2.syncfusion.com/documentation/api/document-editor/pageFitType) parameter in the document change event to display one full page by adjusting the zoom factor.

The following example code illustrates how to deploy the Document Editor component for mobile.

```ts
//Initialize Document Editor Container component.
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);
let container: DocumentEditorContainer = new DocumentEditorContainer({
    enableToolbar: true, height: '590px'
});
container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';
container.appendTo('#DocumentEditor');

//To detect the device
let isMobileDevice: boolean = /Android|Windows Phone|webOS/i.test(navigator.userAgent);

container.documentChange = () => {
    if (isMobileDevice) {
        container.restrictEditing = true;
        setTimeout(() => {
            container.documentEditor.fitPage("FitPageWidth");
        }, 50);
    }
    else {
        container.restrictEditing = false;
    }
}
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

You can download the complete working example from this [GitHub location](https://github.com/SyncfusionExamples/Deploy-Document-Editor-in-Mobile-Friendly-Web-page/).

N> You can use the [`restrictEditing`](https://ej2.syncfusion.com/documentation/api/document-editor-container#restrictediting) in DocumentEditorContainer and [`isReadOnly`](https://ej2.syncfusion.com/documentation/api/document-editor#isreadonly) in DocumentEditor based on your requirement to change the component to read-only mode.