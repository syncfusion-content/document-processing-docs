---
layout: post
title: Focus on a form field after loading in Javascript Pdfviewer control | Syncfusion
description: Learn here all about Focus on a form field after loading in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Focus on a form field after loading
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Focus on a form field after loading in Javascript Pdfviewer control

The PDF Viewer library allows you to focus to the respective form field using the [`focusFormField()`](https://ej2.syncfusion.com/documentation/api/pdfviewer/#focusformfield) API.

The following steps are used to focus to the respective form field.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code sample to focus to the respective form field while loading as well as in a button click.

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

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Form%20Fields/Focusing%20the%20form%20fields%20while%20loading).