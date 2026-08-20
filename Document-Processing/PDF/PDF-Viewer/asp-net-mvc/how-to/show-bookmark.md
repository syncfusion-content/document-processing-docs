---
layout: post
title: How to Show the Bookmark Pane in ASP.NET MVC PDF Viewer | Syncfusion
description: Show or hide the bookmark pane in the ASP.NET MVC PDF Viewer using showBookmarkPane to control when users can access document bookmarks.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Show the Bookmark Pane in ASP.NET MVC PDF Viewer

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC PDF Viewer can display the bookmark pane automatically by setting the [`enableBookmark`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableBookmark) property to `true`. Use this option when documents rely on bookmark navigation for quick access to chapters or tagged sections.

N> The default value of `enableBookmark` is `true`, so the bookmark pane remains available unless it is explicitly disabled.

Follow these steps to show the bookmark pane:

**Step 1:** Create a PDF Viewer sample by using the [ASP.NET MVC getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) so that the required scripts, styles, and controller endpoints are configured.

**Step 2:** Enable the bookmark pane in the Razor markup, as shown in the following samples.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").EnableBookmark(true).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").EnableBookmark(true).Render()
</div>

{% endhighlight %}
{% endtabs %}
