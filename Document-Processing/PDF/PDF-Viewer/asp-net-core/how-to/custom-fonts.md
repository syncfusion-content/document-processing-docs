---
layout: post
title: Add custom fonts in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to add and load custom TTF fonts for documents displayed in the Syncfusion ASP.NET Core PDF Viewer using the customFonts property.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add custom fonts in the ASP.NET Core PDF Viewer

To use custom fonts in the Syncfusion ASP.NET Core PDF Viewer, add the custom TTF files to the resource URL directory and configure the viewer to load them. Specify font file names using the `customFonts` property as an array of names.

## Steps to add custom fonts

**Step 1:** Add custom TTF font files to the resource URL path referenced in the application. For example, place the TTF files in the ej2-pdfviewer-lib folder that serves as the resource URL path.

**Step 2:** Use the following code to configure custom fonts in the PDF Viewer.

```html

<div style="width:100%;height:600px">
    <button id="loadPDF Viewer">Load PDF Viewer</button>
    <div id="pdfViewer" style="height: 100%;width: 100%;"></div>
</div>

<script>
    document.getElementById("loadPDF Viewer").addEventListener('click', function () {
        $.ajax({
            url: 'https://localhost:44327/pdfviewer/GetPdfDocument',
            type: "GET",
            success: function (data) {
                var viewer = new ej.pdfviewer.PdfViewer({
                    documentPath: data,
                });
                viewer.customFonts = ["arialbd.ttf", "arial.ttf", "BKANT.TTF", "calibri.ttf", "GARA.TTF", "GARAIT.TTF", "msgothic.ttc", "trebuc.ttf", "wingding.ttf"];
                viewer.appendTo("#pdfViewer");
            }
        });
    });
</script>

```

These steps integrate custom fonts into PDF documents displayed in the PDF Viewer.
