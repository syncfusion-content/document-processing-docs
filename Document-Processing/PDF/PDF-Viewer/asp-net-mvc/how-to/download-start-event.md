---
layout: post
title: Control file downloads in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to intercept and control file downloads in the Syncfusion ASP.NET MVC PDF Viewer using the downloadStart event.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Control file downloads in the ASP.NET MVC PDF Viewer

Use the `downloadStart` event to intercept the start of a download and optionally cancel it. In the event handler, set `args.cancel = true` to prevent the download.

By default, `args.cancel` is `false`, so the download proceeds unless explicitly canceled.

## Flexibility

Leverage the [`downloadStart`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DownloadStart) event to apply custom rules for allowing or preventing downloads based on application needs.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

@{
    ViewBag.Title = "Home Page";
}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").DownloadStart("downloadStart").Render()
</div>

<script>
function downloadStart(args) {
    // Your custom logic here
    args.cancel = true; // Prevent download action
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

@{
    ViewBag.Title = "Home Page";
}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").DownloadStart("downloadStart").Render()
</div>

<script>
function downloadStart(args) {
    // Your custom logic here
    args.cancel = true; // Prevent download action
};
</script>

{% endhighlight %}
{% endtabs %}
