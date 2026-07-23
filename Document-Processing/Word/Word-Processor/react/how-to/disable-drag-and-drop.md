---
layout: post
title: Disable drag and drop in React DOCX Editor | Syncfusion
description: Learn here all about Disable drag and drop in Document Editor in Syncfusion React Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Disable drag and drop in Document Editor
documentation: ug
domainurl: ##DomainURL##
---

# How to disable drag and drop in the Document Editor in React Document Editor component

[React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) provides support to drag and drop contents within the component and it can be customized (enable and disable) using the [`allowDragAndDrop`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/documentEditorSettingsModel/#allowdraganddrop) property in Document Editor settings.

The following example illustrates how to customize the drag and drop option.

```typescript
const settings = { allowDragAndDrop: false };
const hostUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

<DocumentEditorContainerComponent id="container" height={'590px'} serviceUrl={hostUrl} documentEditorSettings={settings}/>
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

N> The default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/documentEditorSettingsModel/#allowdraganddrop) property is `true`.

The following example illustrates how to disable the drag and drop option in the Document Editor.

```typescript
const settings = { allowDragAndDrop: false };
const hostUrl = 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/';

<DocumentEditorComponent id="container" height={'590px'} documentEditorSettings={settings}/>
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

N> The default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/documentEditorSettingsModel/#allowdraganddrop) property is `true`.