---
layout: post
title: Set Width and Height of ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to set the width and height of the Syncfusion ASP.NET MVC PDF Viewer component to control its dimensions in your web application.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Set width and height of PDF Viewer

To control the dimensions of the Syncfusion ASP.NET MVC PDF Viewer, you can modify its `Width` and `Height` properties.

To change the width and height of the PDF Viewer, update the `Width` and `Height` properties of the `PdfViewer` control as follows:

```html
<div>
    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/Home/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Height("1000px").Width("80%").Render()
    </div>
</div>
```

In this example, the `Width` property is set to `80%`, and the `Height` property is set to `1000px`. You can change these values to any desired size in pixels or percentages. When using percentage-based values for `Width` or `Height`, ensure that the parent container elements also have defined dimensions, otherwise, the PDF Viewer may not render correctly.

[View sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/EJ2-69063-defaultWidthHeight/How%20to/Change%20Default%20Height%20and%20Width)
