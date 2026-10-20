---
layout: post
title: How to Handle Signature Select and Unselect Events | Syncfusion
description: Handle the signatureSelect and signatureUnselect events in the JavaScript (ES6) PDF Viewer to manage the selection state of handwritten signatures.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Handle Signature Select and Unselect Events in JavaScript

Before proceeding, ensure the PDF Viewer is initialized as described in the [Get started with JavaScript ES6 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) guide.

The PDF Viewer exposes events for monitoring the selection state of handwritten signature annotations: [signatureSelect](https://ej2.syncfusion.com/documentation/api/pdfviewer/signatureSelectEventArgs) and [signatureUnselect](https://ej2.syncfusion.com/documentation/api/pdfviewer/signatureUnselectEventArgs). These events enable applications to respond when a signature annotation is selected or cleared—for example, updating the UI, enabling contextual actions, or recording metadata.

**signatureSelect**

The `signatureSelect` event fires when a handwritten signature annotation is selected. Event arguments include details about the selected annotation and its page. Use this event to perform actions such as showing a properties panel or enabling signature-specific controls.

**signatureUnselect**

The `signatureUnselect` event fires when a handwritten signature annotation is unselected. Handle this event to perform cleanup tasks, hide contextual UI, or update application state.

The following snippet shows how to subscribe to `signatureSelect` and `signatureUnselect` events in the PDF Viewer component.

```ts

pdfviewer.signatureSelect = (args: any) => {
    console.log('Signature selected:', args);
 };

pdfviewer.signatureUnselect = (args: any) => {
    console.log('Signature unselected:', args);
};

```

These events enable robust management of handwritten signature state, supporting interactive and dynamic user experiences.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to)
