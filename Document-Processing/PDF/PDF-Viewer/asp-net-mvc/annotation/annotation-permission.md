---
layout: post
title: Annotation Permission in ASP.NET MVC PDF Viewer | Syncfusion
description: Configure annotation permissions in the ASP.NET MVC PDF Viewer to control edit, add, and delete operations.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotation Permission in ASP.NET MVC PDF Viewer

Annotation permission controls whether users can add, edit, or delete annotations in the PDF Viewer. Use the **annotationSettings** property or programmatic APIs to configure these permissions per document.

## Configure Annotation Permission

Use the **annotationSettings** property to set permissions such as **isLock**, **enableAnnotation**, or specific edit flags. The following example disables adding new annotations while still allowing existing annotations to be viewed.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .EnableAnnotation(false)
        .Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer")
        .ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/"))
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .EnableAnnotation(false)
        .Render()
</div>

{% endhighlight %}
{% endtabs %}

## Lock a Specific Annotation

Set **isLock** to `true` when adding or editing an annotation to prevent users from modifying or deleting it.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addLockedAnnotation" onclick="addLockedAnnotation()">Add Locked Annotation</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addLockedAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Rectangle", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            width: 150,
            height: 75,
            isLock: true
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addLockedAnnotation" onclick="addLockedAnnotation()">Add Locked Annotation</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addLockedAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Rectangle", {
            offset: { x: 200, y: 230 },
            pageNumber: 1,
            width: 150,
            height: 75,
            isLock: true
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## See also

- [Annotation Overview](./overview)
- [Annotation Types](./annotation-types/area-annotation)
- [Create and Modify Annotation](./create-modify-annotation)
- [Customize Annotation](./customize-annotation)
- [Remove Annotation](./delete-annotation)
- [Handwritten Signature](./signature-annotation)
- [Export and Import Annotation](./export-import/export-annotation)
- [Annotation in Mobile View](./annotations-in-mobile-view)
- [Annotation Events](./annotation-event)
- [Annotation API](./annotations-api)
