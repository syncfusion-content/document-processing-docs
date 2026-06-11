---
layout: post
title: Add custom fonts in TypeScript PDF Viewer | Syncfusion
description: Learn how to add and load custom TTF fonts for documents displayed in the TypeScript PDF Viewer using the customFonts property.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Add Custom Fonts to PDF Forms in TypeScript PDF Viewer

The Syncfusion **JavaScript PDF Viewer** supports loading, editing, and saving **custom fonts** in form fields such as [TextBox](../forms/manage-form-fields/create-form-fields#textbox), [ListBox](../forms/manage-form-fields/create-form-fields#listbox), and [DropDown](../forms/manage-form-fields/create-form-fields#dropdown) fields using the `customFonts` property. This ensures consistent text rendering when required fonts are not installed on the user’s system.

Custom fonts are embedded and preserved when form fields are modified or saved, ensuring the PDF renders correctly across environments.

## When dynamic fonts are used
Dynamic fonts are currently used in the following scenarios:
- **Text annotations** — When users enter text annotations that use non standard fonts, the viewer dynamically loads the required fonts to ensure correct character rendering. 
- **PDF forms** — When users fill form fields that rely on fonts not included by default, dynamic font loading ensures the entered text is rendered correctly.

## How Custom Fonts Work
The custom font workflow in the PDF Viewer is as follows:
- Place the required **TrueType Font (TTF)** files in the resource directory used by the viewer.
- Specify the font names using the customFonts property.
- The specified fonts become available for:
  - Rendering form field content
  - Editing text in form fields
  - Saving and downloading the PDF with embedded fonts

## Steps to Add Custom Fonts

### Add TTF Font Files
1. Place the TTF font files in the resource path used by the PDF Viewer (for example, the ej2-pdfviewer-lib folder).  
2. Fonts can be referenced in either of the following ways:
   - **Relative path** 
     Example:  
     calibri.ttf  
     fallback-fonts/calibri.ttf
   - **Absolute URL**
     Fonts can be hosted on a server and referenced using a fully qualified URL. Ensure that the hosting server has **CORS** enabled.

### Configure Custom Fonts in the PDF Viewer
Specify the required font names in the customFonts property.

{% tabs %}
{% highlight ts tabtitle="Standalone" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = window.location.origin + "/resources/ej2-pdfviewer-lib";
pdfviewer.customFonts = ["simsun.ttc", "sumsinb.ttf", "arial/arialbd.ttf", "arial/arial.ttf", "BKANT.TTF", "calibri.ttf", "GARA.TTF", "GARAIT.TTF", "msgothic.ttc", "trebuc.ttf", "wingding.ttf"];
pdfviewer.appendTo('#PdfViewer');

//PDF Viewer control rendering starts
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

N>Ensure that the font file names match the specified font names.

## Supported Form Fields
Custom fonts can be applied to the following form field types:
- [TextBox](../forms/manage-form-fields/create-form-fields#textbox)
- [ListBox](../forms/manage-form-fields/create-form-fields#listbox)
- [DropDown](../forms/manage-form-fields/create-form-fields#dropdown)

## Notes and Limitations
- If text rendered using a custom font exceeds the form field’s bounds, the downloaded PDF may render incorrectly in some third party PDF viewers.
- The same content displays correctly in the **Syncfusion PDF Viewer**.

## To avoid rendering issues:
- Use an appropriate font size that fits within the form field.
- Increase the size of the form field before saving or downloading the PDF.