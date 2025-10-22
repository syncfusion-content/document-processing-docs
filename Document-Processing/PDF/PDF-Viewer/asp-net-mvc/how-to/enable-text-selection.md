---
layout: post
title: Enable or disable text selection in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to enable or disable text selection in the Syncfusion ASP.NET MVC PDF Viewer using the enableTextSelection property.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Enable or disable text selection in the ASP.NET MVC PDF Viewer

Use the `EnableTextSelection` property to control whether users can select text in the displayed PDF. This setting can be configured at initialization and toggled at runtime.

## Configure on initialization

Set initial behavior when instantiating the PDF Viewer. Text selection is enabled by default, but you can disable it as shown below.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

@using Syncfusion.EJ2
@{
    ViewBag.Title = "Home Page";
}

<div>
    <div style="height:500px;width:100%;">
        @Html.EJS().PdfViewer("pdfviewer")
            .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
            .ResourceUrl("https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib")
            .EnableTextSelection(false)
            .Render()
    </div>
</div>

{% endhighlight %}
{% endtabs %}

## Toggle dynamically

Change the behavior at runtime using buttons or other UI controls. The following example demonstrates how to toggle text selection with button clicks.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

@using Syncfusion.EJ2
@{
    ViewBag.Title = "Home Page";
}

<div>
    <div style="height:500px;width:100%;">
        <button onclick="enableTextSelection()">EnableTextSelection</button>
        <button onclick="disableTextSelection()">DisableTextSelection</button>
        @Html.EJS().PdfViewer("pdfviewer")
            .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
            .ResourceUrl("https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib")
            .EnableTextSelection(false)
            .Render()
    </div>
</div>

<script type="text/javascript">
    function enableTextSelection() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.enableTextSelection = true;
    }

    function disableTextSelection() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.enableTextSelection = false;
    }
</script>

{% endhighlight %}
{% endtabs %}

## Use cases and considerations

- **Document protection**: Disable text selection to help prevent copying sensitive content.
- **Read-only documents**: Provide a cleaner viewing experience by preventing selection.
- **Interactive apps**: Toggle selection based on user roles or document states.
- **Controlled Access**: Implement conditional text selection depending on user permissions or document sections.

## Default behavior

Text selection is enabled by default. Set `EnableTextSelection` to `false` to disable it.

N> When text selection is disabled, users will not be able to select or copy text from the document, which can be useful for protecting document content in certain scenarios.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)
