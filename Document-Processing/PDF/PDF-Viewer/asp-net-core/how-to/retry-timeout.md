---
layout: post
title: Configure retryTimeout in the ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to configure retryTimeout and retryCount in the Syncfusion ASP.NET Core PDF Viewer to improve reliability when network requests fail.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Configure retry timeout and retry count

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer provides the [`retryTimeout`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_RetryTimeout) and [`retryCount`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_RetryCount) properties to manage failed AJAX requests automatically. Configuring these settings improves application resilience by handling transient network fluctuations or temporary service unavailability without disrupting the user experience.

* **retryTimeout:** Defines the duration (in seconds) the viewer waits for a response before aborting and retrying the request. The default value is `0`, which disables the retry delay.
* **retryCount:** Specifies the maximum number of retry attempts the viewer should perform before reporting a definitive error. The default value is `0`, meaning no retries are attempted.

Assigning positive values to both properties ensures the viewer proactively manages connection issues.


The following example demonstrates how to configure these properties in a server-backed PDF Viewer setup.

```cshtml
@{
    ViewData["Title"] = "Home page";
    double RetryTimeout = 10;
    double RetryCount = 5;
}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/Index"
                   retryTimeout="@RetryTimeout"
                   retryCount="@RetryCount"
                   documentPath="Data/PDF_Succinctly.pdf">
    </ejs-pdfviewer>
</div>
```

In this configuration, if the service does not respond within 10 seconds, the viewer cancels the current request and initiates a new one. This process continues until either the document loads successfully or the five retry attempts are exhausted.

## Monitoring failures

To provide a better user experience, monitor the [`ajaxRequestFailed`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_AjaxRequestFailed) event. This helps in logging failures or displaying custom notifications once all retry attempts have finished.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/RetryTimeout)
