---
layout: post
title: Flatten PDF form fields in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to flatten interactive PDF form fields before download or save-as in EJ2 ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Flatten PDF form fields in ASP.NET Core

## Overview

Flattening PDF forms converts interactive fields such as textboxes, dropdowns, checkboxes, signatures, etc., into non‑editable page content. Use this when you want to protect filled data, finalize a document, or prepare it for secure sharing.

## Prerequisites

- EJ2 ASP.NET Core PDF Viewer installed and configured
- Basic viewer setup completed with toolbar and page organizer services injected. For more information, see [getting started guide](../getting-started)

## Flatten forms before downloading PDF

1. Get a reference to the `PdfViewer` instance using `document.getElementById()` so you can access viewer APIs from event handlers.
2. Intercept the download flow using [`downloadStart`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DownloadStart) and cancel the default flow.
3. Retrieve the viewer's blob via [`saveAsBlob()`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#saveasblob) and convert the blob to base64.
4. Use `PdfDocument` from Syncfusion PDF Library to open the document, set `field.flatten = true` for each form field, then save.
5. For the flattening the form fields when downloading through *Save As* option in Page Organizer, repeat steps 2–4 by using [`pageOrganizerSaveAs`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PageOrganizerSaveAs) event.

## Complete example

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:640px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:640px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   downloadStart="onDownloadStart"
                   pageOrganizerSaveAs="onPageOrganizerSaveAs">
    </ejs-pdfviewer>
</div>

<script>
    var viewer;

    function blobToBase64(blob) {
        return new Promise(function(resolve, reject) {
            var reader = new FileReader();
            reader.onerror = function() { reject(reader.error); };
            reader.onload = function() {
                var dataUrl = reader.result;
                var data = dataUrl.split(',')[1];
                resolve(data);
            };
            reader.readAsDataURL(blob);
        });
    }

    function flattenFormFields(data) {
        // Use the Syncfusion PDF library to open the document
        var document = new ej.pdf.PdfDocument(data);
        
        // Flatten all form fields
        for (var index = 0; index < document.form.count; index++) {
            var field = document.form.fieldAt(index);
            field.flatten = true;
        }
        
        // If both annotations and form fields need to be flattened, use:
        // document.flatten = true
        
        // Save the flattened document
        var fileName = viewer.fileName || 'document.pdf';
        document.save(fileName);
        document.destroy();
    }

    function handleFlattening() {
        viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (!viewer) return;

        viewer.saveAsBlob().then(function(blob) {
            blobToBase64(blob).then(function(data) {
                flattenFormFields(data);
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

- If viewer instance is not found, ensure the PDF Viewer is loaded and the page is fully rendered before invoking [`saveAsBlob()`](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#saveasblob).
- Missing resources: If viewer resources are not reachable, verify that the resource path for the ej2-pdfviewer-lib is correctly configured in your server.

## Related topics

- [`downloadStart` event reference](../events#downloadstart)
- [`pageOrganizerSaveAs` event reference](../events#pageorganizersaveas)
- [Form Designer in ASP.NET Core PDF Viewer](./form-designer)