---
layout: post
title: Add Custom fonts in Typescript Pdfviewer control | Syncfusion
description: Learn here all about how to add custom fonts using the PDF document in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# How to add custom fonts to the PDF viewer used in the PDF document

To use custom fonts in the Syncfusion PDF Viewer within your PDF document, you need to add the custom TTF font files to the resource URL directory and configure the viewer to load these fonts. You can specify the custom font names using the
**customFonts** property, which accepts an array of font names.

The following steps are used to customize the selection border.

**Step 1:** Add the custom TTF font files to the resource URL path referenced in your application. For example, place the custom TTF files in the ej2-pdfviewer-lib folder, which will serve as the resource URL path.

**Step 2:** The following code snippet are how you can add custom fonts to the PDF viewer.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

let viewer: PdfViewer = new PdfViewer();
PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields);
viewer.documentPath= 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
viewer.resourceUrl:'https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib';
viewer.customFonts: ["arialbd.ttf", "arial.ttf", "BKANT.TTF", "calibri.ttf", "GARA.TTF", "GARAIT.TTF", "msgothic.ttc", "trebuc.ttf", "wingding.ttf"];

//PDF Viewer control rendering starts
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

let viewer: PdfViewer = new PdfViewer();
PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields);
viewer.documentPath= 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
viewer.serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
viewer.customFonts: ["arialbd.ttf", "arial.ttf", "BKANT.TTF", "calibri.ttf", "GARA.TTF", "GARAIT.TTF", "msgothic.ttc", "trebuc.ttf", "wingding.ttf"];


//PDF Viewer control rendering starts
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

By following these steps, you can successfully integrate and use custom fonts in your PDF documents displayed in the EJ2 PDF Viewer.