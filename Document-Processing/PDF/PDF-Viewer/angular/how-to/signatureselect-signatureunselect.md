---
layout: post
title: Signature selection events in Angular PDF Viewer | Syncfusion
description: Learn about signatureSelect and signatureUnselect events in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# SignatureSelect and SignatureUnselect events

The Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer provides event-handling capabilities for various actions, including selecting and unselecting handwritten signatures. The [signatureSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureSelectEventArgs/) and [signatureUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureUnselectEventArgs/) events enable programmatic management of the selection state of signatures within the PDF Viewer component.

### signatureSelect Event

The [signatureSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureSelectEventArgs/) event triggers when a handwritten signature annotation is selected. This event allows capturing the signature selection and handling it programmatically, such as updating the UI or storing the selection data for further processing.

### signatureUnselect Event

The [signatureUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureUnselectEventArgs/) event triggers when a handwritten signature annotation is unselected. This event enables programmatic management of the unselection, which can be useful for tasks like cleanup operations or updating the application's state to reflect that a signature is no longer selected.

This code snippet demonstrates how to subscribe to the [signatureSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureSelectEventArgs/) and [signatureUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureUnselectEventArgs/) events in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer component:

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

The [signatureSelect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureSelectEventArgs/) and [signatureUnselect](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/signatureUnselectEventArgs/) events in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer offer robust options for managing the state of handwritten signatures within applications. By handling these events, developers can create a more interactive and dynamic user experience, responding programmatically to signature selection and unselection.

[View sample in GitHub]()