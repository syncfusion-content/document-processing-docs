---
layout: post
title: Authorization Token in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn here all about Authorization Token in Syncfusion ASP.NET MVC PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Include Authorization token to header

The PDF Viewer component enables adding authorization tokens to each AJAX request through the `ajaxHeaders` collection in `AjaxRequestSettings`, ensuring the header is appended to every call initiated by the viewer.

Use the following steps to configure the authorization token for the PDF Viewer control.

**Step 1:** Follow the steps in the [Getting Started with ASP.NET MVC PDF Viewer guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to configure a basic ASP.NET MVC project with the PDF Viewer component.

**Step 2:** Add the following script after the PDF Viewer instance is rendered to include the authorization token in subsequent requests.

```html

@Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("PDF_Succinctly.pdf").AjaxRequestSettings(new PdfViewerAjaxRequestSettings { WithCredentials = true, AjaxHeaders = new object[] { new { headerName = "Testingabc", headerValue = "Testing123" } } }).Render()

```

Download the sample [how to include authorization token](https://www.syncfusion.com/downloads/support/directtrac/general/ze/MVCSAM~21380738543)
