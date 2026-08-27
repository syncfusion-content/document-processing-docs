---
layout: post
title: Hide Toolbar and Properties Pane in Angular DOCX Editor | Syncfusion
description: Hide the toolbar and properties pane in Syncfusion® Angular DOCX Editor to create a custom user interface and streamline the document editing experience.
platform: document-processing
control: Hide tool bar and properties pane 
documentation: ug
domainurl: ##DomainURL##
---

# How to Hide Toolbar and Properties Pane in Angular DOCX Editor

**DOCX Editor Container** provides the main document view area along with the built-in toolbar and properties pane.

**DOCX Editor** provides just the main document view area. Here, the user can compose, view, and edit the Word documents. You may prefer to use this component when you want to design your own UI options for your application.

## Hide the properties pane

By default, DOCX Editor Container has built-in properties pane which contains options for formatting text, tables, images, headers, and footers. You can use [`showPropertiesPane`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/documentEditorContainerModel#showpropertiespane) API in [`DocumentEditorContainer`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/documentEditorContainerModel) to hide the properties pane.

The following example code illustrates how to hide the properties pane.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `<ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [showPropertiesPane]=false
      [enableToolbar]=true >
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  ngOnInit(): void {}
}
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

N> Positioning and customizing the properties pane in the DOCX Editor Container is not possible. Instead, you can hide the existing properties pane and create your own pane using public APIs.

## Hide the toolbar

You can use [`enableToolbar`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/documentEditorContainerModel#enabletoolbar) API in [`DocumentEditorContainer`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/documentEditorContainerModel) to hide the existing toolbar.

The following example code illustrates how to hide the existing toolbar.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  DocumentEditorContainerComponent,
} from '@syncfusion/ej2-angular-documenteditor';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [DocumentEditorContainerModule],
  providers: [ToolbarService],
  template: `<ejs-documenteditorcontainer #documenteditor_default 
      serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
      height="600px" 
      style="display:block" 
      [enableToolbar]=false >
    </ejs-documenteditorcontainer>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container?: DocumentEditorContainerComponent;
  ngOnInit(): void {}
}
```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## See also

* [How to customize the toolbar](../how-to/customize-tool-bar)