---
layout: post
title: Export pages as images in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to export pages as Base64-encoded images in the Syncfusion ASP.NET MVC PDF Viewer using the ExportAsImage method family.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Export pages as images in the ASP.NET MVC PDF Viewer

Export individual pages or a range of pages from a PDF document as raster images using the `ExportAsImage` APIs. These helpers convert pages to bitmaps that you can save, process, or serve for download.

## Steps to export pages as images

**Step 1:** Follow the steps in the [Syncfusion ASP.NET MVC PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create a simple PDF Viewer application.

**Step 2:** Choose the appropriate `ExportAsImage` overload to export pages with the required DPI, size, or range settings. The following examples demonstrate each option.

### Export a single page

Exports the specified page as image using the Pdfium rendering engine.

```cs

//Uses the Syncfusion.EJ2.PdfViewer assembly
PdfRenderer pdfExportImage = new PdfRenderer();
//Loads the PDF document
pdfExportImage.Load(@"currentDirectory/../../../../Data/HTTP Succinctly.pdf");
//Exports the PDF document pages into images
Bitmap bitmapimage = pdfExportImage.ExportAsImage(0);
//Save the exported image in disk
bitmapimage.Save(@"currentDirectory/../../../../Images/" + "bitmapImage.png");

```

### Export a page with custom DPI

Exports the specified page as image with respect to the specified DPI values.

```cs

//Uses the Syncfusion.EJ2.PdfViewer assembly
PdfRenderer pdfExportImage = new PdfRenderer();
//Loads the PDF document
pdfExportImage.Load(@"currentDirectory/../../../../Data/HTTP Succinctly.pdf");
//Exports the PDF document pages into images
Bitmap bitmapimage = pdfExportImage.ExportAsImage(0, 200, 200);
//Save the exported image in disk
bitmapimage.Save(@"currentDirectory/../../../../Images/" + "bitmapImage.png");

```

### Export a page with custom size

Exports the specified page as image with respect to the specified custom size.

```cs

//Uses the Syncfusion.EJ2.PdfViewer assembly
PdfRenderer pdfExportImage = new PdfRenderer();
//Loads the PDF document
pdfExportImage.Load(@"currentDirectory/../../../../Data/HTTP Succinctly.pdf");
//Exports the PDF document pages into images
Bitmap bitmapimage = pdfExportImage.ExportAsImage(0, new SizeF(200, 300), true);
//Save the exported image in disk
bitmapimage.Save(@"currentDirectory/../../../../Images/" + "bitmapImage.png");

```

### Export a page with custom size and DPI

Exports the specified page as image with respect to the custom size and the specified DPI values.

```cs

//Uses the Syncfusion.EJ2.PdfViewer assembly
PdfRenderer pdfExportImage = new PdfRenderer();
//Loads the PDF document
pdfExportImage.Load(@"currentDirectory/../../../../Data/HTTP Succinctly.pdf");
//Exports the PDF document pages into images
Bitmap bitmapimage = pdfExportImage.ExportAsImage(0, new SizeF(200, 300),200,200, true);
//Save the exported image in disk
bitmapimage.Save(@"currentDirectory/../../../../Images/" + "bitmapImage.png");


```

### Export a range of pages

Exports the specified pages as images using the Pdfium rendering engine.

```cs

//Uses the Syncfusion.EJ2.PdfViewer assembly
PdfRenderer pdfExportImage = new PdfRenderer();
//Loads the PDF document
pdfExportImage.Load(@"currentDirectory/../../../../Data/HTTP Succinctly.pdf");
//Exports the PDF document pages into images
Bitmap[] bitmapimage = pdfExportImage.ExportAsImage(0, pdfExportImage.PageCount-1);
for (int i =0; i < pdfExportImage.PageCount; i++)
{
    // Save the exported image in disk
    bitmapimage[i].Save(@"currentDirectory/../../../../Images/" + "bitmapImage.png");
}

```

### Export a range with custom DPI

Exports the specified pages as images with respect to the specified DPI values.

```cs

//Uses the Syncfusion.EJ2.PdfViewer assembly
PdfRenderer pdfExportImage = new PdfRenderer();
//Loads the PDF document
pdfExportImage.Load(@"currentDirectory/../../../../Data/HTTP Succinctly.pdf");
//Exports the PDF document pages into images
Bitmap[] bitmapimage = pdfExportImage.ExportAsImage(0, pdfExportImage.PageCount-1, 200, 200);
for (int i =0; i < pdfExportImage.PageCount; i++)
{
    //Save the exported image in disk
    bitmapimage[i].Save(@"currentDirectory/../../../../Images/" + "bitmapImage.png");
}

```

### Export a range with custom size

Exports the specified pages as images with respect to the specified custom size.

```cs

//Uses the Syncfusion.EJ2.PdfViewer assembly
PdfRenderer pdfExportImage = new PdfRenderer();
//Loads the PDF document
pdfExportImage.Load(@"currentDirectory/../../../../Data/HTTP Succinctly.pdf");
//Exports the PDF document pages into images
Bitmap[] bitmapimage = pdfExportImage.ExportAsImage(0, pdfExportImage.PageCount-1, new SizeF(200, 300), false);
for (int i =0; i < pdfExportImage.PageCount; i++)
{
    //Save the exported image in disk
    bitmapimage[i].Save(@"currentDirectory/../../../../Images/" + "bitmapImage.png");
}

```

### Export a range with custom size and DPI

Exports the specified pages as images with respect to the custom size and the specified DPI values.

```cs

//Uses the Syncfusion.EJ2.PdfViewer assembly
PdfRenderer pdfExportImage = new PdfRenderer();
//Loads the PDF document
pdfExportImage.Load(@"currentDirectory/../../../../Data/HTTP Succinctly.pdf");
//Exports the PDF document pages into images
Bitmap[] bitmapimage = pdfExportImage.ExportAsImage(0, pdfExportImage.PageCount-1, new SizeF(200, 300),200,200,false);
for (int i = 0; i < pdfExportImage.PageCount; i++)
{
    //Save the exported image in disk
    bitmapimage[i].Save(@"currentDirectory/../../../../Images/" + "bitmapImage.png");
}

```

N> Ensure the provided document path and the output image save locations are updated to match your application.
