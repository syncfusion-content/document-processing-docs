---
layout: post
title: Feature module in React Pdfviewer component | Syncfusion
description: Learn here all about Feature module in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Feature module in React PDF Viewer Control

The PDF Viewer features are segregated into individual feature-wise modules to enable selectively referencing in the application. The required modules should be injected to extend its functionality. The following are the selective modules of PDF Viewer that can be included as required:

The available PDF Viewer modules are:

* [**Toolbar**](./toolbar-customization/annotation-toolbar-customization): Built-in toolbar for user interaction.
* [**Magnification**](./magnification): Perform zoom operations for a better viewing experience.
* [**Navigation**](./interactive-pdf-navigation/page-navigation): Navigate across pages.
* [**LinkAnnotation**](./interactive-pdf-navigation/table-of-content-navigation): Navigate within the document or to external destinations via hyperlinks.
* [**ThumbnailView**](./interactive-pdf-navigation/page-thumbnail-navigation): Navigate within the document using page thumbnails.
* [**BookmarkView**](./interactive-pdf-navigation/bookmark-navigation): Navigate using document bookmarks (table of contents).
* [**TextSelection**](./textselection): Select and copy text from the document.
* [**TextSearch**](./text-search): Search for text across the document.
* [**Print**](./print): Print the entire document or specific pages directly from the browser.
* [**Annotation**](./annotations/text-markup-annotation): Add and edit annotations.
* [**FormFields**](./form-designer/create-programmatically): Work with form fields in the document.
* [**FormDesigner**](./form-designer/create-programmatically): Add or edit form fields in the document.

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