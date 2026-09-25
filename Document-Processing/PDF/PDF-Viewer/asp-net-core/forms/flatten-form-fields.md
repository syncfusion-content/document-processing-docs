---
layout: post
title: Flatten Form Fields in ASP.NET Core PDF Viewer | Syncfusion
description: Flatten interactive PDF form fields in the ASP.NET Core PDF Viewer before downloading or saving the PDF so the fields become static content.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Flatten Form Fields in ASP.NET Core PDF Viewer

## Overview

Flattening PDF forms converts interactive fields such as textboxes, dropdowns, checkboxes, signatures, etc., into non-editable page content. Use this when you want to protect filled data, finalize a document, or prepare it for secure sharing.

## Prerequisites

- ASP.NET Core PDF Viewer installed and configured. For more information, see [getting started guide](../getting-started)
- Basic viewer setup completed with the toolbar and page organizer. For more information, see [getting started guide](../getting-started)

## Flatten forms before downloading PDF

1. Access the viewer instance from the `ejs-pdfviewer` element so you can use the viewer APIs from event handlers.
2. Intercept the download flow using [`downloadStart`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DownloadStart) and cancel the default flow.
3. Retrieve the viewer's blob via [saveAsBlob()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#saveasblob) and convert the blob to base64.
4. Use the client-side `ej.pdf.PdfDocument` to open the document, set `field.flatten = true` for each form field, then save.
5. To flatten the form fields when downloading through the *Save As* option in Page Organizer, repeat steps 2–4 by using the [pageOrganizerSaveAs](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PageOrganizerSaveAs) event.

## Complete example

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/32.2.5/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   downloadStart="onDownloadStart" pageOrganizerSaveAs="onPageOrganizerSaveAs">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
function blobToBase64(blob) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onerror = function () { reject(reader.error); };
    reader.onload = function () {
      var dataUrl = reader.result;
      var data = dataUrl.split(',')[1];
      resolve(data);
    };
    reader.readAsDataURL(blob);
  });
}

function handleFlattening() {
  var pdfviewer = document.getElementById('pdfviewer').ej2_instances[0];
  pdfviewer.saveAsBlob().then(function (blob) {
    blobToBase64(blob).then(function (data) {
      // Use the client-side PDF library to flatten form fields
      var document = new ej.pdf.PdfDocument(data);

      for (var i = 0; i < document.form.count; i++) {
        var field = document.form.fieldAt(i);
        field.flatten = true;
      }

      // To flatten both annotations and form fields:
      // document.flatten = true;

      document.save(pdfviewer.fileName + '.pdf');
      document.destroy();
    });
  });
}

function onDownloadStart(args) {
  args.cancel = true;
  handleFlattening();
}

function onPageOrganizerSaveAs(args) {
  args.cancel = true;
  handleFlattening();
}
</script>

{% endhighlight %}
{% endtabs %}

## Expected result

- The downloaded or "Save As" PDF will contain the visible appearance of filled form fields as static, non-editable content.
- Form fields will no longer be interactive or editable in common PDF readers.

## Troubleshooting

- If the viewer instance is null, ensure the `ejs-pdfviewer` element is rendered and the DOM is ready before invoking [saveAsBlob()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#saveasblob).
- Missing [resourceUrl](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResourceUrl): If viewer resources are not reachable, set [resourceUrl](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResourceUrl) to the correct CDN or local path for the ej2-pdfviewer-lib.

## Related topics

- [`downloadStart` event reference](../events#downloadstart)
- [`pageOrganizerSaveAs` event reference](../events#pageorganizersaveas)
- [Form Designer in ASP.NET Core PDF Viewer](./form-designer)