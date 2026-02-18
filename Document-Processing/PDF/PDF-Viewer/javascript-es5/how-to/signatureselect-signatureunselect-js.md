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

The Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer exposes events for monitoring the selection state of handwritten signature annotations: [signatureSelect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/signatureSelectEventArgs/) and [signatureUnselect](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/signatureUnselectEventArgs/). These events enable applications to respond when a signature annotation is selected or cleared—for example, updating the UI, enabling contextual actions, or recording metadata.

**signatureSelect**

The `signatureSelect` event fires when a handwritten signature annotation is selected. Event arguments include details about the selected annotation and its page. Use this event to perform actions such as showing a properties panel or enabling signature-specific controls.

**signatureUnselect**

The `signatureUnselect` event fires when a handwritten signature annotation is unselected. Handle this event to perform cleanup tasks, hide contextual UI, or update application state.

The following snippet shows how to subscribe to `signatureSelect` and `signatureUnselect` events in the PDF Viewer component.

```js
pdfviewer.signatureSelect = (args: any) => {
    console.log('Signature selected:', args);
 };

pdfviewer.signatureUnselect = (args: any) => {
    console.log('Signature selected:', args);
};
```

These events enable robust management of handwritten signature state, supporting interactive and dynamic user experiences.