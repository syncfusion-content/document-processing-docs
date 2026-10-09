---
layout: post
title: Flatten Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Flatten annotations into the PDF document in the ASP.NET MVC PDF Viewer to permanently merge them with page content.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Flatten Annotations into the PDF in ASP.NET MVC PDF Viewer

Flattening annotations converts interactive annotations into static content on the PDF page. Once flattened, the annotations can no longer be edited, moved, or deleted through the UI.

## Flatten Programmatically

Use the **flattenAnnotation()** method of the annotation module to flatten annotations.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="flattenAnnotations" onclick="flattenAnnotations()">Flatten All Annotations</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function flattenAnnotations() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.flattenAnnotation();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="flattenAnnotations" onclick="flattenAnnotations()">Flatten All Annotations</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function flattenAnnotations() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.flattenAnnotation();
    }
</script>

{% endhighlight %}
{% endtabs %}

## Flatten a Specific Annotation by ID

Pass the annotation id to **flattenAnnotationById()** to flatten a single annotation.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="flattenById" onclick="flattenById()">Flatten First Annotation</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function flattenById() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (viewer.annotationCollection.length > 0) {
            viewer.annotation.flattenAnnotationById(viewer.annotationCollection[0].annotationId);
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="flattenById" onclick="flattenById()">Flatten First Annotation</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function flattenById() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        if (viewer.annotationCollection.length > 0) {
            viewer.annotation.flattenAnnotationById(viewer.annotationCollection[0].annotationId);
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

N> Flattening is permanent. After flattening, the annotation cannot be restored.

## See also

- [Annotation Overview](./overview)
- [Create and Modify Annotation](./create-modify-annotation)
- [Customize Annotation](./customize-annotation)
- [Remove Annotation](./delete-annotation)
- [Export and Import Annotation](./export-import/export-annotation)
- [Annotation Events](./annotation-event)
- [Annotation API](./annotations-api)
