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

The React PDF Viewer supports loading, editing, and saving custom fonts in form fields such as text boxes, list boxes, and drop-downs by using the customFonts property. Add the required TTF files to the resource URL directory used by the viewer so they can be loaded at runtime and used in forms.

## Integrating Custom Font Collections into Form Fields in PDF Viewer

To ensure proper rendering and saving of form fields that use custom fonts, especially when the fonts are not installed on the system, place the TTF files in the resource URL path referenced by the viewer and specify their names through the customFonts property (string array). These fonts will then be available for loading, editing, and saving form fields in the PDF.

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

> Note: If a form field (TextBox, ListBox, DropDown) using a custom font has text larger than the field’s bounds, the downloaded PDF may render incorrectly in browsers or third‑party viewers. It displays correctly in the Syncfusion PDF Viewer. To avoid this, use a font size that fits within the field or enlarge the field before saving/downloading.