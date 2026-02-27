---
layout: post
title: Display custom stamp items in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to configure custom stamp settings in the Syncfusion ASP.NET Core PDF Viewer so users can apply personalized stamps from the custom stamp dropdown.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Display custom items in the custom stamp dropdown

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer supports custom stamp templates, allowing reviewers to use organization-specific seals or approval marks. Populate the custom stamp menu by configuring the [`PdfViewerCustomStampSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerCustomStampSettings.html) object during component initialization.

Follow these steps to surface custom stamp items in the viewer:

**Step 1:** Create an ASP.NET Core PDF Viewer project by following the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started).

**Step 2:** Define the custom stamp collection in the Razor Page and assign it to the `PdfViewerCustomStampSettings` property. The example below demonstrates how to add stamps using base64 strings or hosted image URLs.

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

Once configured, the viewer automatically displays the specified items in the custom stamp dropdown menu, enabling users to place them directly onto the PDF document.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
