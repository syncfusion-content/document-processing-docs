---
layout: post
title: Hide Toolbar and Properties Pane JavaScript (ES5) DOCX Editor | Syncfusion
description: Learn how to hide the toolbar and properties pane in Syncfusion JavaScript (ES5) Document Editor using the showPropertiesPane and enableToolbar APIs.
platform: document-processing
control: Hide Toolbar and Properties Pane
documentation: ug
domainurl: ##DomainURL##
---

# Hide Toolbar and Properties Pane JavaScript (ES5) Document Editor

**Document Editor Container** provides the main document view area along with the built-in toolbar and properties pane.

**[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor)** (Document Editor) provides just the main document view area. Here, the user can compose, view, and edit Word documents. You may prefer this component when you want to design custom UI options.

## Hide the Properties Pane

By default, the Document Editor Container has a built-in properties pane which contains options for formatting text, tables, images, headers, and footers. You can use the [`showPropertiesPane`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor-container/documentEditorContainerModel#showpropertiespane) API in [`DocumentEditorContainer`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor-container/documentEditorContainerModel) to hide the properties pane.

The following example code illustrates how to hide the properties pane.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

DocumentEditorContainer.Inject(Toolbar);

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '590px', showPropertiesPane: false });

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

N> Positioning and customizing the properties pane in the Document Editor Container is not possible. Instead, you can hide the existing properties pane and create your own pane using public APIs.

## Hide the Toolbar

You can use the [`enableToolbar`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor-container/documentEditorContainerModel#enabletoolbar) API in [`DocumentEditorContainer`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor-container/documentEditorContainerModel) to hide the existing toolbar.

The following example code illustrates how to hide the existing toolbar.

```ts
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: false, height: '590px' });

container.serviceUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

container.appendTo('#container');
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## See Also

* [How to customize the toolbar](../how-to/customize-tool-bar)