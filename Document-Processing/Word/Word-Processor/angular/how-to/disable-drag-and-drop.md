---
layout: post
title: Disable drag and drop in Angular DOCX Editor | Syncfusion
description: Learn here all about Disable drag and drop in Syncfusion Angular Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Disable drag and drop in Document Editor
documentation: ug
domainurl: ##DomainURL##
---

# How to disable drag and drop in the Angular Document Editor

[Angular Document Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) (Document Editor) provides support to drag and drop contents within the component and it can be customized (enable and disable) using the [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documentEditorSettings#allowDragAndDrop) property in Document Editor settings.

The following example illustrates how to customize the drag and drop option.

```typescript
@Component({
      template: `<ejs-documenteditorcontainer serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" height="600px" [enableToolbar]=true [documentEditorSettings]="settings"> </ejs-documenteditorcontainer>`,
})
export class AppComponent{
    public settings: DocumentEditorSettingsModel = { allowDragAndDrop : false };
}
```

N> The default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documentEditorSettings#allowDragAndDrop) property is `true`.

The following example illustrates how to disable the drag and drop option in the Document Editor.

```typescript
@Component({
      template: `<ejs-documenteditor #document_editor height="330px" [enablePrint]=true [documentEditorSettings]="settings"></ejs-documenteditor>`,
})
export class AppComponent{
    public settings: DocumentEditorSettingsModel = { allowDragAndDrop : false };
}
```

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

N> The default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documenteditorsettings#allowDragAndDrop) property is `true`.