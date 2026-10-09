---
layout: post
title: Toolbar in ASP.NET MVC PDF Viewer | Syncfusion
description: Customize the Organize Pages toolbar in the ASP.NET MVC PDF Viewer to show, hide, or replace the default actions that appear in the panel.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Organize Pages Toolbar in ASP.NET MVC PDF Viewer

The PDF Viewer lets applications customize the Organize Pages toolbar to enable or disable tools according to project requirements. Use the `PageOrganizerSettings` API to control each tool's interactivity and behavior.

## Enable or disable the insert option

The `CanInsert` property controls the insert tool visibility. Set it to `false` to disable the insert tool.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}

@{
    ViewBag.Title = "PDF Viewer";
}

<div class="control-section">
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .ServiceUrl(ViewBag.ServiceUrl)
        .PageOrganizerSettings(settings => settings.CanInsert(false))
        .Render()
</div>

{% endhighlight %}
{% endtabs %}

## Enable or disable the delete option

The `CanDelete` property controls the delete tool visibility. Set it to `false` to disable the delete tool.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}

@{
    ViewBag.Title = "PDF Viewer";
}

<div class="control-section">
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .ServiceUrl(ViewBag.ServiceUrl)
        .PageOrganizerSettings(settings => settings.CanDelete(false))
        .Render()
</div>

{% endhighlight %}
{% endtabs %}
Enable or disable the rotate option

The `CanRotate` property controls the rotate tool visibility. Set it to `false` to disable the rotate tool.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}

@{
    ViewBag.Title = "PDF Viewer";
}

<div class="control-section">
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .ServiceUrl(ViewBag.ServiceUrl)
        .PageOrganizerSettings(settings => settings.CanRotate(false))
        
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new { CanRotate = false }).Render()
</div>

{% endhighlight %}
{% endtabs %}
Enable or disable the copy option

The `CanCopy` property controls the copy tool visibility. Set it to `false` to disable the copy tool.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}

@{
    ViewBag.Title = "PDF Viewer";
}

<div class="control-section">
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .ServiceUrl(ViewBag.ServiceUrl)
        .PageOrganizerSettings(settings => settings.CanCopy(false))
        
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new { CanCopy = false }).Render()
</div>

{% endhighlight %}
{% endtabs %}
Enable or disable the rearrange option

The `CanRearrange` property controls the rearrange tool visibility. Set it to `false` to disable the rearrange tool.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}

@{
    ViewBag.Title = "PDF Viewer";
}

<div class="control-section">
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .ServiceUrl(ViewBag.ServiceUrl)
        .PageOrganizerSettings(settings => settings.CanRearrange(false))
        .Render()
</div>

{% endhighlight %}
{% endtabs %}

## Enable or disablezoom pages option

The `ShowImageZoomingSlider` property controls the zoom slider visibility. Set it to `false` to hide the zoom slider.

{% tabs %}
{% highlight cshtml tabtitle="Index.cshtml" %}

@{
    ViewBag.Title = "PDF Viewer";
}

<div class="control-section">
    @Html.EJS().PdfViewer("pdfviewer")
        .DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf")
        .ServiceUrl(ViewBag.ServiceUrl)
        .PageOrganizerSettings(settings => settings.ShowImageZoomingSlider(false))
        
        
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new { CanImport = false }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Show or hide the rearrange option

The `canRearrange` property controls the ability to rearrange pages. When set to `false`, pages cannot be rearranged.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new { CanRearrange = false }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new { CanRearrange = false }).Render()
</div>

{% endhighlight %}
{% endtabs %}
