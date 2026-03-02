---
layout: post
title: Add custom fonts in Core PDF Viewer | Syncfusion
description: Learn how to add and load custom TTF fonts for documents displayed in the Core PDF Viewer using the customFonts property.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Add custom fonts to PDF forms in ASP.NET Core PDF Viewer

The Syncfusion ASP.NET Core PDF Viewer supports loading, editing, and saving custom fonts in interactive form fields such as [TextBox](../forms/manage-form-fields/create-form-fields#textbox), [ListBox](../forms/manage-form-fields/create-form-fields#listbox), and [DropDown](../forms/manage-form-fields/create-form-fields#dropdown). Use the `customFonts` property to ensure consistent text rendering even when specific fonts are not installed on the user's system.

## Scenarios for custom fonts

Custom fonts are essential in the following scenarios:

- **Text Annotations:** When users create or view text annotations that use non-standard fonts, the viewer dynamically loads the required fonts to ensure correct character rendering.
- **Interactive PDF Forms:** When users fill form fields that rely on proprietary or specialized fonts, dynamic font loading ensures the entered text is displayed accurately across all environments.

## How custom fonts work

The custom font workflow in the PDF Viewer involves these key steps:

1. Place the required **TrueType Font (TTF)** files in the resource directory accessible by the viewer.
2. Specify the font names in the `customFonts` property of the PDF Viewer instance.
3. The viewer dynamically loads these fonts for rendering, editing, and embedding during the save process.

## Configure custom fonts

### Step 1: Add TTF font files

Place the TTF font files in the resource path used by the PDF Viewer. Fonts can be referenced in two ways:

* **Relative Path:** (for example: `calibri.ttf` or `fallback-fonts/calibri.ttf`)
* **Absolute URL:** Host fonts on a secure server and reference them using a fully qualified URL. Ensure that the hosting server has **CORS** enabled.

### Step 2: Configure the PDF Viewer

Specify the required font filenames in the `customFonts` property. Ensure that the filenames in the array match the actual files in the resource path.

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

## Supported Form Fields

Custom fonts are supported for [TextBox](../forms/manage-form-fields/create-form-fields#textbox), [ListBox](../forms/manage-form-fields/create-form-fields#listbox), and [DropDown](../forms/manage-form-fields/create-form-fields#dropdown) form field types.

## Important considerations

- **Font Size:** Ensure the chosen font size fits within the form field bounds to prevent rendering issues in third-party viewers.
- **Layout Integrity:** If text rendered with a custom font exceeds the field bounds, the downloaded PDF might display incorrectly in some external viewers, though it will render perfectly within the Syncfusion PDF Viewer.