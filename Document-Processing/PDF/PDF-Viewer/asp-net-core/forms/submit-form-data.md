---
layout: post
title: Submit Form Data in ASP.NET Core PDF Viewer | Syncfusion
description: Submit filled PDF form data from the ASP.NET Core PDF Viewer to a backend server, with a complete frontend example to get you started.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Submit Form Data to a Server in ASP.NET Core PDF Viewer

## Overview

The ASP.NET Core PDF Viewer allows submitting filled form data like text fields, checkboxes, radio buttons, and dropdown values to a back end server for processing. This guide shows how to extract form data from the viewer and **post** it as `JSON` to a server endpoint.

## Prerequisites

- ASP.NET Core PDF Viewer installed and configured in your application
- PDF contains interactive form fields
- The viewer must be loaded before reading values
- If posting cross-origin, ensure CORS is enabled on the server

## Steps to send data

1. Enable form fields in the viewer

   - Enable the Form Fields and [Form Designer](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.formdesigner.html) modules on the viewer so form APIs are available.

2. Export form data from the viewer

   - Use [exportFormFieldsAsObject()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfieldsasobject) with the `Json` format to obtain the filled values as JSON.

3. POST the exported JSON to your back end

   - Use `fetch` to send the JSON. The server must accept `application/json` and handle CORS if cross-domain.

4. Trigger submission from a UI action

   - Call the export + POST flow from a button click handler.

## Example

This full example shows an ASP.NET Core view with the PDF viewer and a Submit button that sends form data to `/api/submit-form`.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <div style="margin-bottom: 8px">
        <button id="submitForm">Submit form data</button>
    </div>
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var viewerElement = document.getElementById('pdfviewer');
  var pdfviewer = viewerElement && viewerElement.ej2_instances && viewerElement.ej2_instances[0];
  if (!pdfviewer) return;

  var sendToServer = function (formData) {
    // Adjust URL to your server endpoint
    return fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).then(function (res) {
      if (!res.ok) {
        throw new Error('Server error ' + res.status);
      }
    });
  };

  var handleSubmit = function () {
    // exportFormFieldsAsObject returns a Promise resolving to form data object
    pdfviewer.exportFormFieldsAsObject('Json').then(function (formData) {
      return sendToServer(formData).then(function () {
        console.log('Form data submitted successfully.');
      });
    }).catch(function (err) {
      console.error(err);
      console.log('Submission failed: ' + (err && err.message));
    });
  };

  document.getElementById('submitForm').addEventListener('click', handleSubmit);
});
</script>
{% endhighlight %}
{% endtabs %}

## Troubleshooting

- **No form values returned**: Ensure the PDF has interactive fields and the viewer has finished loading before calling [exportFormFieldsAsObject()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#exportformfieldsasobject).
- **CORS errors**: Enable CORS on the server or serve both the view and back end from the same origin during testing.
- **Server rejects payload**: Confirm the server expects `application/json` and validates the shape of the object.
- **WASM or resource errors**: Ensure [resourceUrl](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResourceUrl) points to the correct ASP.NET Core PDF Viewer library files.

## Use cases

- Enable remote verification and approval workflows by sending submitted form data to a back end service for review and sign-off.
- Store submitted form responses in a database to persist user inputs for auditing, reporting, or later retrieval.
- Trigger workflow automation and downstream processing by sending form data to business systems or serverless functions.
- Merge submitted values into a final flattened PDF on the server to produce a non-editable document that combines the form data with the original PDF.

## Related topics

- [exportFormFieldsAsObject API reference](./form-fields-api#exportformfieldsasobject)
- [Export form data as object](./import-export-form-fields/export-form-fields#export-as-object)