---
layout: post
title: Add custom fonts in TypeScript PDF Viewer | Syncfusion
description: Learn how to add and load custom TTF fonts for documents displayed in the TypeScript PDF Viewer using the customFonts property.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Add custom fonts in PDF Viewer

To use custom fonts in the Syncfusion PDF Viewer, add the custom TTF files to the resource URL directory and configure the viewer to load them. Specify font file names using the `customFonts` property as an array of names.

Steps to add custom fonts

**Step 1:** Add custom TTF font files to the resource URL path referenced in the application. For example, place the TTF files in the ej2-pdfviewer-lib folder that serves as the resource URL path.

**Step 2:** Use the following code to configure custom fonts in the PDF Viewer.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

let viewer: PdfViewer = new PdfViewer();
PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields);
viewer.documentPath= 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
viewer.resourceUrl:'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib';
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

These steps integrate custom fonts into PDF documents displayed in the PDF Viewer.
