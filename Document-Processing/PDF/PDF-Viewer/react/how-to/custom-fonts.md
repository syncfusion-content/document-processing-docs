---
layout: post
title: Add custom fonts in React PDF Viewer | Syncfusion
description: Learn how to add and load custom TTF fonts for documents displayed in the React PDF Viewer using the customFonts property.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Add custom fonts in PDF Viewer

To use custom fonts in the Syncfusion PDF Viewer, add the custom TTF files to the resource URL directory and configure the viewer to load them. Specify font file names using the `customFonts` property as an array of names.

Steps to add custom fonts

**Step 1:** Add custom TTF font files to the resource URL path referenced in the application. For example, place the TTF files in the ej2-pdfviewer-lib folder that serves as the resource URL path.

**Step 2:** Use the following code to configure custom fonts in the PDF Viewer.

{% raw %}

```javascript
<PdfViewerComponent
    id="container"
    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
    customFonts = {["arialbd.ttf", "arial.ttf", "BKANT.TTF", "calibri.ttf", "GARA.TTF", "GARAIT.TTF", "msgothic.ttc", "trebuc.ttf", "wingding.ttf"]}
    style={{ height: '640px' }}>
</PdfViewerComponent>

```
{% endraw %}

These steps integrate custom fonts into PDF documents displayed in the PDF Viewer.