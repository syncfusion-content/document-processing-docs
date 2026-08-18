---
layout: post
title: Customize Organize Pages Toolbar in MVC PDF Viewer | Syncfusion
description: Customize the Organize Pages toolbar in the ASP.NET MVC PDF Viewer to show, hide, or replace the default actions that appear in the panel.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize the Organize Pages Toolbar in ASP.NET MVC PDF Viewer

The PDF Viewer allows you to customize the toolbar for the organize pages feature, enabling you to show or hide specific tools based on your application's requirements. The `pageOrganizerSettings` API provides properties to control the visibility of each tool in the organize pages dialog.

## Show or hide the insert option

The `CanInsert` property controls the visibility of the insert tool. When set to `false`, the insert tool will be hidden from the toolbar.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new { CanInsert = false }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new { CanInsert = false }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Show or hide the delete option

The `CanDelete` property controls the visibility of the delete tool. When set to `false`, the delete tool will be hidden.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new { CanDelete = false }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new { CanDelete = false }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Show or hide the rotate option

The `CanRotate` property controls the visibility of the rotate tool. When set to `false`, the rotate tool will be hidden.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new { CanRotate = false }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new { CanRotate = false }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Show or hide the copy option

The `CanCopy` property controls the visibility of the copy tool. When set to `false`, the copy tool will be hidden.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new { CanCopy = false }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new { CanCopy = false }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## Show or hide the import option

The `CanImport` property controls the visibility of the import tool. When set to `false`, the import tool will be hidden.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").PageOrganizerSettings(new { CanImport = false }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
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
