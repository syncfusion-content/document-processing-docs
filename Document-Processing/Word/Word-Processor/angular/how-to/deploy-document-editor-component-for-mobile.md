---
layout: post
title: Deploy mobile DOCX Editor in Angular | Syncfusion
description: Learn here all about deploying in Syncfusion Angular Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Deploy Document Editor component for mobile
documentation: ug
domainurl: ##DomainURL##
---

# Deploy Angular Document Editor component for Mobile

## Document Editor component for mobile

At present, [Angular Document Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) component is not responsive for mobile, and editing functionalities are not supported in mobile browsers. However, it works properly as a document viewer in mobile browsers.

Hence, it is recommended to switch the Document Editor component to read-only in mobile browsers. Also, invoke the [`fitPage`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#fitpage) method with `FitPageWidth` parameter in the document change event to display one full page by adjusting the zoom factor.

The following example code illustrates how to deploy the Document Editor component for mobile.

```typescript
//Initialize Document Editor Container component.
import { Component, ViewChild } from '@angular/core';
import { ToolbarService, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-container',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #document_editor (documentChange)="onDocumentChange()" serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService]
})
export class AppComponent {

    @ViewChild('document_editor')
    public container: DocumentEditorContainerComponent;

    onDocumentChange(): void {

    //To detect the device
    let isMobileDevice: boolean = /Android|Windows Phone|webOS/i.test(navigator.userAgent);

    if (isMobileDevice) {
      this.container.restrictEditing = true;
      setTimeout(() => {
        this.container.documentEditor.fitPage("FitPageWidth");
      }, 50);
    }
    else {
      this.container.restrictEditing = false;
    }
  }
}
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

You can download the complete working example from this [GitHub location](https://github.com/SyncfusionExamples/Deploy-Document-Editor-in-Mobile-Friendly-Web-page/)

N> You can use the [`restrictEditing`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container#restrictediting) in DocumentEditorContainer and [`isReadOnly`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#isreadonly) in DocumentEditor based on your requirement to change the component to read-only mode.