---
layout: post
title: How to Show Custom Stamp Items in ASP.NET MVC PDF Viewer | Syncfusion
description: Display custom items in the custom stamp dropdown in the ASP.NET MVC PDF Viewer using customStampSettings to provide tailored stamp options.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Show Custom Stamp Items in ASP.NET MVC PDF Viewer

The PDF Viewer supports custom stamp templates so that reviewers can reuse organization-specific seals or approval marks. Populate the custom stamp dropdown by configuring the [`PdfViewerCustomStampSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerCustomStampSettings.html) object when initializing the viewer.

Follow these steps to surface custom stamp items:

**Step 1:** Create an ASP.NET MVC PDF Viewer sample by following the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started). The tutorial explains how to reference the required Syncfusion scripts, styles, and Razor Page model before adding custom stamps.

**Step 2:** Define the custom stamp collection in the Razor Page and assign it to `PdfViewerCustomStampSettings`. The sample below demonstrates how to add base64 or hosted image sources to the dropdown. Replace the placeholder image strings with production-ready assets that your application can access securely.

```cs
@using Syncfusion.EJ2.PdfViewer
@{
    ViewBag.Title = "Home Page";
}
@{
    ViewData["Title"] = "Home page";

    List<Object> customStamp = new List<Object>();

    customStamp.Add(new
    {
        customStampName = "Image1",
        // Provide a valid base64 or URL for the image
        customStampImageSource = "data:image/png;base64,..."
    });
    customStamp.Add(new
    {
        customStampName = "Image2",
        // Provide a valid base64 or URL for the image
        customStampImageSource = "data:image/png;base64,..."
    });
    PdfViewerCustomStampSettings CustomStampsSettings = new PdfViewerCustomStampSettings()
    {
        IsAddToMenu = true,
        CustomStamps = customStamp,
        EnableCustomStamp = true,
        Opacity = 1,
    };

}

<div>
    <div style="height:500px;width:100%;">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").CustomStampSettings(CustomStampsSettings).Render()
    </div>
</div>

```

After configuring the custom stamp settings, the viewer automatically lists the provided stamp items in the custom stamp dropdown so users can insert them directly onto PDF pages.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)
