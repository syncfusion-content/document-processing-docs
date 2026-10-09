---
layout: post
title: Programmatic Support in ASP.NET MVC PDF Viewer | Syncfusion
description: Use the programmatic APIs for Organize Pages in the ASP.NET MVC PDF Viewer to reorder, rotate, insert, delete, and copy pages from C# or JavaScript.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Programmatic Support for Organize Pages in ASP.NET MVC PDF Viewer

The PDF Viewer provides comprehensive programmatic support for organizing pages, allowing you to integrate and manage PDF functionalities directly within your application. This section details the available APIs to enable, control, and interact with the page organization features.

## Enable or disable the page organizer

The page organizer feature can be enabled or disabled using the `EnablePageOrganizer` property. By default, the page organizer is enabled.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}

@{
    ViewBag.Title = "PDF Viewer";
}

<div class="control-section">
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .ServiceUrl(ViewBag.ServiceUrl)
        .EnablePageOrganizer(true)
        .Render()
</div>

{% endhighlight %}
{% endtabs %}

## Open the page organizer on document load

Use the `IsPageOrganizerOpen` property to control whether the page organizer opens automatically when a document loads. The default value is `false`.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}

@{
    ViewBag.Title = "PDF Viewer";
}

<div class="control-section">
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .ServiceUrl(ViewBag.ServiceUrl)
        .IsPageOrganizerOpen(true)
        .Render()
</div>

{% endhighlight %}
{% endtabs %}

## Customize page organizer settings

The `PageOrganizerSettings` API customizes page-management capabilities. Use it to enable or disable actions (delete, insert, rotate, copy, import, rearrange) and to configure thumbnail zoom settings. By default, actions are enabled and standard zoom settings apply.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}

@{
    ViewBag.Title = "PDF Viewer";
}

<div class="control-section">
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .ServiceUrl(ViewBag.ServiceUrl)
        .PageOrganizerSettings(settings => settings
            .CanDelete(true)
            .CanInsert(true)
            .CanRotate(true)
            .CanCopy(true)
            .CanRearrange(true)
            .CanImport(true)
            .ImageZoom(1)
            .ShowImageZoomingSlider(true)
            .ImageZoomMin(1)
            .ImageZoomMax(5))
        .Render()Index.cshtml" %}

@{
    ViewBag.Title = "PDF Viewer";
}

<div class="control-section">
    <button onclick="openPageOrganizer()">Open PageOrganizer Pane</button>
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .ServiceUrl(ViewBag.ServiceUrl)
        .Render()
</div>

<script type="text/javascript">
    function openPageOrganizer() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.pageOrganizer.openPageOrganizer();
    }
</script>

{% endhighlight %}
{% endtabs %}

## Close the page organizer dialog

The `closePageOrganizer` method programmatically closes the page organizer dialog.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}

@{
    ViewBag.Title = "PDF Viewer";
}

<div class="control-section">
    <button onclick="closePageOrganizer()">Close PageOrganizer Pane</button>
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .ServiceUrl(ViewBag.ServiceUrl)
        .Render()
</div>

<script type="text/javascript">
    function closePageOrganizer() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.pageOrganizer.closePageOrganizer();
    }
</script>

{% endhighlight %}
{% endtabs %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="closePageOrganizer" onclick="closePageOrganizer()">Close PageOrganizer</button>
<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>

<script>
    function closePageOrganizer() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.pageOrganizer.closePageOrganizer();
    }
</script>

{% endhighlight %}
{% endtabs %}
