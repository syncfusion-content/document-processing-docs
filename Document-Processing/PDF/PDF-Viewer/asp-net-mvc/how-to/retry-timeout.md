---
layout: post
title: Configure retryTimeout in the ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to configure retryTimeout and retryCount in the Syncfusion ASP.NET MVC PDF Viewer to improve reliability when network requests fail.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Configure retry timeout and retry count

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC PDF Viewer can automatically retry failed AJAX requests by using the [`retryTimeout`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_RetryTimeout) and [`retryCount`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_RetryCount) properties. Configure these settings to handle transient network errors or brief service outages without interrupting the document viewing experience.

Set `retryTimeout` to define how long (in seconds) the viewer waits before retrying the failed request, and use `retryCount` to control how many attempts occur before the viewer reports an error. By default, `retryTimeout` is `0`, which disables the retry delay and causes the viewer to keep the request open indefinitely, while `retryCount` defaults to `0`, meaning no additional attempts occur.

Assign positive values to both properties to limit how long the viewer waits for a response and how many retries should run before surfacing an error message.
Use the properties in Razor markup as shown below. This sample demonstrates a server-backed viewer configuration.

```html

@{
    ViewBag.Title = "Home Page";
    double RetryTimeout = 10;
    double RetryCount = 5;
}

<div>
    <div style="height:100%; width: 100%;">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/Home/")).DocumentPath("PDF_Succinctly.pdf").RetryCount(RetryCount).RetryTimeout(RetryTimeout).Render()
    </div>
</div>

```

In the sample, `retryTimeout` is set to 10 seconds and `retryCount` to 5. If the service does not respond within 10 seconds, the viewer aborts the request and queues a new attempt. The process continues until the document loads or all five retries finish without success.

Monitor the [`ajaxRequestFailed`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AjaxRequestFailed) event to log or display messages when the viewer exhausts all retries. This makes it easier to alert users and diagnose persistent outages.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to/Retry%20Timeout)
