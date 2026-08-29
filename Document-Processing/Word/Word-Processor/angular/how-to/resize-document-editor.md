---
layout: post
title: How to Resize in Angular DOCX Editor | Syncfusion
description: Adjust the height and width of the Syncfusion® Angular DOCX Editor to create responsive layouts and customize the document editing experience.
platform: document-processing
control: Resize DOCX Editor
documentation: ug
domainurl: ##DomainURL##
---

# How to Resize in Angular DOCX Editor 

In this article, we are going to see how to change the height and width of the [Angular DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor).

## Change height of DOCX Editor

DocumentEditorContainer initially renders with default height. You can change the height of the DOCX Editor using the [`height`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/documentEditorContainerModel#height) property, the value which is in pixels.

The following example code illustrates how to change the height of DOCX Editor.

```typescript

import { Component, OnInit } from '@angular/core';
import {
  ToolbarService,
} from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specified the height as 600px
      template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService],
})
export class AppComponent implements OnInit {
ngOnInit(): void {

}
}

```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Similarly, you can use [`height`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#height) property for DocumentEditor also.

## Change width of DOCX Editor

DocumentEditorContainer initially renders with default width. You can change the width of the DOCX Editor using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/documentEditorContainerModel#width) property, the value which is in percentages.

The following example code illustrates how to change the width of DOCX Editor.

```typescript

import { Component, OnInit } from '@angular/core';
import {
  ToolbarService,
} from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specified the height as 600px
      template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" width="100%" style="display:block" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService],
})
export class AppComponent implements OnInit {
ngOnInit(): void {

}
}

```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Similarly, you can use [`width`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#width) property for DocumentEditor also.

## Resize DOCX Editor

Using the [`resize`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container#resize) method, you can change the height and width of the DOCX Editor.

The following example code illustrates how to fit the DOCX Editor to the browser window size.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DocumentEditorContainerComponent,
  ToolbarService,
} from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #documenteditor_default serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true (created)="onCreate()"> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService],
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  onCreate(): void {
    setInterval(() => {
        this.updateDocumentEditorSize();
      }, 100);
      //Adds event listener for browser window resize event.
      window.addEventListener('resize', this.onWindowResize.bind(this));
  }
  onWindowResize() {
    //Resizes the document editor component to fit full browser window automatically whenever the browser is resized.
    this.updateDocumentEditorSize();
  }
  updateDocumentEditorSize() {
    //Resizes the document editor component to fit full browser window.
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    this.container.resize(windowWidth, windowHeight);
  }
}
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
