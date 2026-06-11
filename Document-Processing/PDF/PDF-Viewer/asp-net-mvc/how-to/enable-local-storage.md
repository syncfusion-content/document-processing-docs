---
layout: post
title: Manage local storage in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to control session-specific data storage in the Syncfusion ASP.NET MVC PDF Viewer using the enableLocalStorage property.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Manage local storage in the ASP.NET MVC PDF Viewer

Use the `enableLocalStorage` property to control whether session-specific data is stored in session storage (default) or an internal in-memory collection.

## Use enableLocalStorage

Set `enableLocalStorage` to manage storage behavior. When `true`, data is kept in memory; otherwise, session storage is used.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

@using Syncfusion.EJ2
@{
    ViewBag.Title = "Home Page";
}

<div>
    <!-- Render PDF Viewer -->
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<!-- Ensure necessary Syncfusion scripts and styles are included -->
<script src="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2.min.js"></script>
<script type="text/javascript">
    window.onload = function () {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.enableLocalStorage = true;
    }
</script>

{% endhighlight %}
{% endtabs %}

## Considerations

- Memory usage can increase when using in-memory storage with large documents or many interactive elements.
- Dispose of the PDF Viewer instance when no longer needed to avoid memory leaks.
- Default: `enableLocalStorage` is `false`, so session storage is used unless changed.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)
