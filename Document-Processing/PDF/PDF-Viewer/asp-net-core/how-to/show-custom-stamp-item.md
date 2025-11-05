---
layout: post
title: Display custom stamp items in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to configure custom stamp settings in the Syncfusion ASP.NET Core PDF Viewer so users can apply personalized stamps from the custom stamp dropdown.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Display custom items in the custom stamp dropdown

The PDF Viewer supports custom stamp templates so that reviewers can reuse organization-specific seals or approval marks. Populate the custom stamp dropdown by configuring the [`PdfViewerCustomStampSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerCustomStampSettings.html) object when initializing the viewer.

Follow these steps to surface custom stamp items:

**Step 1:** Create an ASP.NET Core PDF Viewer sample by following the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started). The tutorial explains how to reference the required Syncfusion scripts, styles, and Razor Page model before adding custom stamps.

**Step 2:** Define the custom stamp collection in the Razor Page and assign it to `PdfViewerCustomStampSettings`. The sample below demonstrates how to add base64 or hosted image sources to the dropdown. Replace the placeholder image strings with production-ready assets that your application can access securely.

```cs
@page "{handler?}"
@using Syncfusion.EJ2.PdfViewer;
@model IndexModel
@{
    ViewData["Title"] = "Home page";

    List<Object> customStamp = new List<Object>();

    customStamp.Add(new
    {
        customStampName = "Image1",
        customStampImageSource ="data:image/png;base64,...' // Provide a valid base64 or URL for the image"
    });
    customStamp.Add(new
    {
        customStampName = "Image2",
        customStampImageSource ="data:image/png;base64,...' // Provide a valid base64 or URL for the image"
    });
    PdfViewerCustomStampSettings CustomStampsSettings = new PdfViewerCustomStampSettings()
            {
                IsAddToMenu = true,
                CustomStamps = customStamp,
                EnableCustomStamp = true,
                Opacity = 1,
            };
    }

<br>
<br>
    <ejs-pdfviewer id="pdfviewer" style="height:600px" CustomStampSettings="@CustomStampsSettings" documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
```

After configuring the custom stamp settings, the viewer automatically lists the provided stamp items in the custom stamp dropdown so users can insert them directly onto PDF pages.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
