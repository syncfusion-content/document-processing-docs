---
layout: post
title: Feature module in React Pdfviewer component | Syncfusion
description: Learn here all about Feature module in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Feature module in React Pdf viewer Control

The PDF Viewer features are segregated into individual feature-wise modules to enable selectively referencing in the application. The required modules should be injected to extend its functionality. The following are the selective modules of PDF Viewer that can be included as required:

The available PDF Viewer modules are:

* [**Toolbar**](./toolbar-customization):- Built-in toolbar for better user interaction.
* [**Magnification**](./magnification.md):- Perform zooming operation for better viewing experience.
* [**Navigation**](./interactive-pdf-navigation/page-navigation.md):- Easy navigation across the PDF pages.
* [**LinkAnnotation**](./interactive-pdf-navigation/table-of-content-navigation.md):- Easy navigation within and outside of the PDF document.
* [**ThumbnailView**](./interactive-pdf-navigation/page-thumbnail-navigation.md):- Easy navigation with in the PDF document.
* [**BookmarkView**](./interactive-pdf-navigation/bookmark-navigation.md):- Easy navigation based on the bookmark content of the PDF document.
* [**TextSelection**](./textselection.md):- Select and copy text from a PDF file.
* [**TextSearch**](./text-search.md):- Search a text easily across the PDF document.
* [**Print**](./print.md):- Print the entire document or a specific page directly from the browser.
* [**Annotation**](./annotations/text-markup-annotation.md):- Annotations can be added or edited in the PDF document.
* [**FormFields**](./form-designer/create-programmatically.md):- Preserve the form fields in the PDF document.
* [**FormDesigner**](./form-designer/create-programmatically.md):- Form fields can be added or edited in the PDF document.

>In addition to injecting the required modules in your application, enable corresponding properties to extend the functionality for a PDF Viewer instance.
Refer to the following table.

| Module | Property to enable the functionality for a PDF Viewer instance |
|---|---|
|Toolbar|`<PdfViewerComponent enableToolbar= {true} ></PdfViewerComponent>`|
|Magnification|`<PdfViewerComponent enableMagnification= {true} ></PdfViewerComponent>`|
|Navigation|`<PdfViewerComponent enableNavigation= {true} ></PdfViewerComponent>`|
|LinkAnnotation|`<PdfViewerComponent enableHyperlink= {true} ></PdfViewerComponent>`|
|ThumbnailView|`<PdfViewerComponent enableThumbnail= {true} ></PdfViewerComponent>`|
|BookmarkView|`<PdfViewerComponent enableBookmark= {true} ></PdfViewerComponent>`|
|TextSelection|`<PdfViewerComponent enableTextSelection= {true} ></PdfViewerComponent>`|
|TextSearch|`<PdfViewerComponent enableTextSearch= {true} ></PdfViewerComponent>`|
|Print|`<PdfViewerComponent enablePrint= {true} ></PdfViewerComponent>`|
|Annotation|`<PdfViewerComponent enableAnnotation= {true} ></PdfViewerComponent>`|
|FormFields|`<PdfViewerComponent enableFormFields= {true} ></PdfViewerComponent>`|
|FormDesigner|`<PdfViewerComponent enableFormDesigner= {true} ></PdfViewerComponent>`|

## See also

* [Toolbar items](./toolbar)
* [Toolbar customization](./how-to/toolbar-customization)