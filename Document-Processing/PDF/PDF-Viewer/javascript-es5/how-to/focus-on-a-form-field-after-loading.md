---
layout: post
title: Focus on a form field after loading in JavaScript PDF Viewer control | Syncfusion
description: Learn how to set focus on form fields after loading a document in the Syncfusion JavaScript PDF Viewer control by calling the focusFormField API.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Focus on a form field after loading in JavaScript PDF Viewer

The JavaScript PDF Viewer library enables setting focus on a specific form field by using the [`focusFormField()`](https://ej2.syncfusion.com/documentation/api/pdfviewer/#focusformfield) API.

Follow these steps to bring a form field into focus during document load and on demand.

**Step 1:** Complete the configuration described in [Getting started with the JavaScript PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) to build a working sample.

**Step 2:** Add the following markup and code to focus the desired form field when the document loads or when a button is clicked.

```
  <button id="focusFormField">FocusFormField</button>
```

```ts
//Event triggers while clicking the FocusFormField button.
document.getElementById('click').addEventListener('click', function () {
    var formField = viewer.retrieveFormFields();
    //API to bring the form fields in focus.
    viewer.focusFormField(formField[1]);
});
//Event triggers while loading the document.
viewer.documentLoad = (args) => {
    var formField = viewer.retrieveFormFields();
    //API to bring the form fields in focus.
    viewer.focusFormField(formField[1]);
};
```

[View the sample on GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Form%20Fields/Focusing%20the%20form%20fields%20while%20loading).