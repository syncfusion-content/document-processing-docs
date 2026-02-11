---
layout: post
title: Signature selection events in Angular PDF Viewer component| Syncfusion
description: Learn here all about signatureSelect and signatureUnselect event event in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Signature select and unselect events

The Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer exposes events for monitoring the selection state of handwritten signature annotations: [signatureSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureSelectEventArgs/) and [signatureUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureUnselectEventArgs/). These events enable applications to respond when a signature annotation is selected or cleared—for example, updating the UI, enabling contextual actions, or recording metadata.

**signatureSelect**

The `signatureSelect` event fires when a handwritten signature annotation is selected. Event arguments include details about the selected annotation and its page. Use this event to perform actions such as showing a properties panel or enabling signature-specific controls.

**signatureUnselect**

The `signatureUnselect` event fires when a handwritten signature annotation is unselected. Handle this event to perform cleanup tasks, hide contextual UI, or update application state.

The following snippet shows how to subscribe to `signatureSelect` and `signatureUnselect` events in the PDF Viewer component.

```html
<ejs-pdfviewer #pdfViewer id="pdfViewer"
               [serviceUrl]='service'
               [documentPath]='document'
               (signatureSelect)='signatureSelect($event)'
               (signatureUnselect)='signatureUnselect($event)'
               style="height:640px;display:block">
</ejs-pdfviewer>
```

```typescript
public signatureSelect(args: any): void {
  console.log('Signature selected:', args);
}

public signatureUnselect(args: any): void {
  console.log('Signature unselected:', args);
}
```
The [signatureSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureSelectEventArgs/) and [signatureUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureUnselectEventArgs/) events in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer offer robust options for managing the state of handwritten signatures within your application. By handling these events, developers can create a more interactive and dynamic user experience, responding programmatically to signature selection and unselection.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples)