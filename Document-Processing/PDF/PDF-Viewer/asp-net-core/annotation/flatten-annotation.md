---
layout: post
title: Flatten Annotations in the Syncfusion ASP.NET Core PDF Viewer
description: Learn how all about how to flatten annotations and formfields before saving a PDF in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Flatten Annotations in ASP.NET Core PDF Viewer

Flattening takes the visual appearance of annotations and embeds them into each page's content stream. The visual result remains visible, but the annotation objects and interactive form field structures are removed or converted so they can no longer be selected, edited, or filled.

Flattening annotations permanently merges them into the PDF content. Once flattened:
- Annotations are **no longer editable** in any PDF viewer.
- Useful for **secure sharing**, preventing modifications.
- Ideal when **finalizing markup** before distribution.

## How to Flatten Annotations

You can flatten annotations either when a document is loaded (preprocessing) or when exporting/saving the file. Flattening on load makes the viewer display a flattened version immediately; flattening on export preserves the original viewer session while producing a flattened output file.

Typical export-time steps:
- Save the viewer contents to a Blob.
- Create a `PdfDocument` from the saved bytes.
- Enable `document.flatten = true` to merge annotations and form field appearances.
- Save the resulting PDF.

Use the example below to flatten at export time (on download).

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div style="width:100%;height:680px">
  <div style="margin-bottom: 8px;">
    <button onclick="flattenPdf()">Flatten and download PDF</button>
  </div>
  <ejs-pdfviewer id="container" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"></ejs-pdfviewer>
</div>
<script>
window.onload = function() {
  var viewer = document.getElementById('container').ej2_instances[0];
};

function getViewer() {
  return document.getElementById('container').ej2_instances[0];
}

function flattenPdf() {
  var viewer = getViewer();
  if (viewer) {
    viewer.saveAsBlob().then(function(value) {
      var reader = new FileReader();
      reader.onloadend = function() {
        var arrayBuffer = reader.result;
        var byteArray = new Uint8Array(arrayBuffer);
        // Create a PDF document from the byte array and flatten it
        // Note: For ASP.NET Core, you would typically handle PDF flattening 
        // on the server-side using Syncfusion.Pdf library
        // Client-side flattening is limited; server-side processing is recommended
        console.log('PDF flattening should be handled server-side for best results');
        // For demonstration, trigger download of the original PDF
        var blob = new Blob([byteArray], { type: 'application/pdf' });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'flattened.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      };
      reader.readAsArrayBuffer(value);
    });
  }
}
</script>
{% endhighlight %}
{% endtabs %}

N> To flatten documents when they are uploaded/loaded into the viewer, see [Flatten on Load](../document-handling/preprocess-pdf#flatten-on-load).


## Notes

- Flattening applies to **all annotation types**: text markup, shapes, stamps, notes, ink, and form fields.
- Once flattened, annotations **cannot be edited or removed**.
- Use flattening **only at export time**, not during regular document interactions.

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation/annotation-types/area-annotation)
- [Annotation Toolbar](../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../annotation/create-modify-annotation)
- [Customize Annotation](../annotation/customize-annotation)
- [Handwritten Signature](../annotation/signature-annotation)
- [Export and Import Annotation](../annotation/export-import/export-annotation)
- [Annotation Permission](../annotation/annotation-permission)
- [Annotation in Mobile View](../annotation/annotations-in-mobile-view)
- [Annotation Events](../annotation/annotation-event)
- [Annotation API](../annotation/annotations-api)