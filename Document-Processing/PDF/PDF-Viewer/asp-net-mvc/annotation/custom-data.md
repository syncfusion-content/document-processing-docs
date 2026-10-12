---
layout: post
title: Add Custom Data in Annotations in ASP.NET MVC PDF Viewer | Syncfusion
description: Attach custom metadata to annotations in the ASP.NET MVC PDF Viewer using the customData property and access it programmatically.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Adding Custom Data in Annotations in ASP.NET MVC PDF Viewer

The PDF Viewer allows you to attach custom metadata to each annotation. Use the **customData** property when adding or editing annotations to store any application-specific information you need to persist alongside the annotation.

## Add Custom Data to an Annotation

Pass a **customData** object when calling **addAnnotation** to store additional properties on the annotation.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addAnnotationWithData" onclick="addAnnotationWithData()">Add Annotation with Custom Data</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addAnnotationWithData() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Rectangle", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            width: 150,
            height: 75,
            customData: { reviewId: 'REV-2026-001', reviewer: 'QA Team', status: 'Pending' }
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addAnnotationWithData" onclick="addAnnotationWithData()">Add Annotation with Custom Data</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addAnnotationWithData() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Rectangle", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            width: 150,
            height: 75,
            customData: { reviewId: 'REV-2026-001', reviewer: 'QA Team', status: 'Pending' }
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Read Custom Data Programmatically

Iterate over the **annotationCollection** to read the custom data attached to each annotation.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="readCustomData" onclick="readCustomData()">Read Custom Data</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function readCustomData() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            var ann = viewer.annotationCollection[i];
            if (ann.customData) {
                console.log('Annotation ID:', ann.annotationId, 'Data:', ann.customData);
            }
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="readCustomData" onclick="readCustomData()">Read Custom Data</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function readCustomData() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            var ann = viewer.annotationCollection[i];
            if (ann.customData) {
                console.log('Annotation ID:', ann.annotationId, 'Data:', ann.customData);
            }
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

N> Custom data is not exported to XFDF and is intended for in-memory use. To persist custom metadata, export the annotations as JSON.

## See also

- [Annotation Overview](./overview)
- [Create and Modify Annotation](./create-modify-annotation)
- [Customize Annotation](./customize-annotation)
- [Export and Import Annotation](./export-import/export-annotation)
- [Annotation API](./annotations-api)
