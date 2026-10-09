---
layout: post
title: Export Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Export annotations from the ASP.NET MVC PDF Viewer in supported formats using the built-in UI options and programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Export Annotations in ASP.NET MVC PDF Viewer

PDF Viewer supports exporting annotations. Annotations can be exported in two ways:

- Using the built-in UI in the Comments panel (JSON or XFDF file)
- Programmatically (JSON, XFDF, or as an object for custom handling)

## Export using the UI (Comments panel)

The Comments panel provides export actions in its overflow menu:

- **Export annotation to JSON file**
- **Export annotation to XFDF file**

To export annotations, follow these steps:

1. Open the Comments panel in the PDF Viewer.
2. Click the overflow menu (three dots) at the top of the panel.
3. Choose **Export annotation to JSON file** or **Export annotation to XFDF file**.

The selected file is generated and downloaded, containing all annotations in the current document.

![Export Annotation](../../images/import.gif)

## Export programmatically

You can export annotations from code using **exportAnnotation()**, **exportAnnotationsAsObject()**, and **exportAnnotationsAsBase64String()** APIs.

Use the following example to initialize the viewer and export annotations as JSON, XFDF, or as an object.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="exportJSON" onclick="exportAsJSON()">Export JSON</button>
<button id="exportXFDF" onclick="exportAsXFDF()">Export XFDF</button>
<button id="exportObject" onclick="exportAsObject()">Export as Object</button>
<button id="exportBase64" onclick="exportAsBase64()">Export as Base64</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exportAsJSON() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotation('Json');
    }

    function exportAsXFDF() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotation('Xfdf');
    }

    function exportAsObject() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotationsAsObject().then(function (value) {
            console.log('Exported annotation object:', value);
        });
    }

    function exportAsBase64() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotationsAsBase64String('Json').then(function (value) {
            console.log('Exported Base64:', value);
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="exportJSON" onclick="exportAsJSON()">Export JSON</button>
<button id="exportXFDF" onclick="exportAsXFDF()">Export XFDF</button>
<button id="exportObject" onclick="exportAsObject()">Export as Object</button>
<button id="exportBase64" onclick="exportAsBase64()">Export as Base64</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function exportAsJSON() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotation('Json');
    }

    function exportAsXFDF() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotation('Xfdf');
    }

    function exportAsObject() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotationsAsObject().then(function (value) {
            console.log('Exported annotation object:', value);
        });
    }

    function exportAsBase64() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotationsAsBase64String('Json').then(function (value) {
            console.log('Exported Base64:', value);
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Common use cases

- Archive or share annotations as portable JSON/XFDF files
- Save annotations alongside a document in your storage layer
- Send annotations to a backend for collaboration or review workflows
- Export as object for custom serialization and re-import later

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation-types/area-annotation)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../create-modify-annotation)
- [Customize Annotation](../customize-annotation)
- [Remove Annotation](../delete-annotation)
- [Handwritten Signature](../signature-annotation)
- [Import Annotation](./import-annotation)
- [Import Export Events](./export-import-events)
- [Annotation Permission](../annotation-permission)
- [Annotation in Mobile View](../annotations-in-mobile-view)
- [Annotation Events](../annotation-event)
- [Annotation API](../annotations-api)
