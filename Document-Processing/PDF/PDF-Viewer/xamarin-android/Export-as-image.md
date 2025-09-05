---
layout: post
title: Exporting as images using PDF Viewer Xamarin.Android | Syncfusion
description: Convert pages of the PDF to image stream with custom scale factor using Syncfusion<sup>®</sup> Xamarin.Android PDF Viewer control, its elements, and more.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Exporting the pages of PDF document as images

The PdfViewerControl allows users to export the pages of a PDF document as image streams using the `ExportAsImage` method. The resultant image streams can be saved as image files in the local storage.

## Exporting a single PDF page as image

To export a single PDF page as image, you should use the ExportAsImage method that accepts page index as its parameter. The following code example describes exporting page at index 0 as image stream. 

{% tabs %}
{% highlight c# %}
//Get the PDF Viewer instance from the axml layout
SfPdfViewer pdfViewer = this.FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
//Accessing the PDF document that is placed inside the assets directory as stream
Stream docStream = Assets.Open("GIS Succinctly.pdf");
// Load the PDF document stream in SfPdfViewer
pdfViewer.LoadDocument(docStream);
// Export the page of PDF document to image stream with the given index
Stream imgStream = pdfViewer.ExportAsImage(0);
{% endhighlight %}
{% endtabs %}

## Exporting a single PDF page as image with custom scale factor

To export a single PDF page as image with custom scale factor, you should use the ExportAsImage method that accepts page index and scale factor as its parameters. The following code example describes exporting page at index 0 with the scale factor 2.0 as image stream.

{% tabs %}
{% highlight c# %}

//Get the PDF Viewer instance from the axml layout
SfPdfViewer pdfViewer = this.FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
//Accessing the PDF document that is placed inside the assets directory as stream
Stream docStream = Assets.Open("GIS Succinctly.pdf");
// Load the PDF document stream in SfPdfViewer
pdfViewer.LoadDocument(docStream);
// Export the 0th index of PDF page to image stream with size two times greater than the original size 
Stream stream = pdfViewer.ExportAsImage(0,2.0f);

{% endhighlight %}
{% endtabs %}

## Exporting a range of PDF pages as images

To export a range of PDF pages as images, you should use the ExportAsImage method that accepts start page index and end page index as its parameter. The following code example describes exporting pages ranging between index 0 and 3 as image stream array.

{% tabs %}
{% highlight c# %}

//Get the PDF Viewer instance from the axml layout
SfPdfViewer pdfViewer = this.FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
//Accessing the PDF document that is placed inside the assets directory as stream
Stream docStream = Assets.Open("GIS Succinctly.pdf");
// Load the PDF document stream in SfPdfViewer
pdfViewer.LoadDocument(docStream);
// Export the pages of PDF document from the index 0 to the index 3 to the array of image stream.
Stream[] stream = pdfViewer.ExportAsImage(0,3);

{% endhighlight %}
{% endtabs %}

## Exporting a range of PDF pages as images with custom scale factor

To export a range of PDF pages as images, you should use the ExportAsImage method that accepts start page index, end page index, and scale factor as its parameter. The following code example describes exporting pages ranging between index 0 and 3 with the scale factor 2 as image stream array.

{% tabs %}
{% highlight c# %}

//Get the PDF Viewer instance from the axml layout
SfPdfViewer pdfViewer = this.FindViewById<SfPdfViewer>(Resource.Id.pdfviewercontrol);
//Accessing the PDF document that is placed inside the assets directory as stream
Stream docStream = Assets.Open("GIS Succinctly.pdf");
// Load the PDF document stream in SfPdfViewer
pdfViewer.LoadDocument(docStream);
// Export the pages of PDF document from the index 0 to the index 3 to the array of image stream.
// All the exported images are scaled 2 times larger than its original size
Stream[] stream = pdfViewer.ExportAsImage(0,3, 2.0f);

{% endhighlight %}
{% endtabs %}