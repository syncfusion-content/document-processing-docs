---
layout: post
title: Handle signatureSelect and signatureUnselect events in JavaScript PDF Viewer | Syncfusion
description: Learn how to handle signatureSelect and signatureUnselect events in the Syncfusion JavaScript PDF Viewer to manage handwritten signature selection state.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Handle signatureSelect and signatureUnselect events

Use the [signatureSelect](https://ej2.syncfusion.com/documentation/api/pdfviewer/#signatureselect) and [signatureUnselect](https://ej2.syncfusion.com/documentation/api/pdfviewer/#signatureunselect) events to manage the selection state of handwritten signatures in the PDF Viewer.

**signatureSelect**

Triggered when a handwritten signature annotation is selected. Use this event to capture selection and update the UI or store state.

**signatureUnselect**

Triggered when a handwritten signature annotation is unselected. Use this event to handle cleanup or update application state.

The following code demonstrates how to subscribe to these events:

```js
pdfviewer.signatureSelect = (args: any) => {
    console.log('Signature selected:', args);
 };

pdfviewer.signatureUnselect = (args: any) => {
    console.log('Signature selected:', args);
};
```

These events enable robust management of handwritten signature state, supporting interactive and dynamic user experiences.