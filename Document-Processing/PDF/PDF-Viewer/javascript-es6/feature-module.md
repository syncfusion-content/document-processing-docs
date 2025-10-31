---
layout: post
title: Feature modules in TypeScript PDF Viewer | Syncfusion
description: Learn to inject feature modules in Syncfusion TypeScript PDF Viewer to enable toolbar, search, forms, and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Feature modules in TypeScript PDF Viewer

The PDF Viewer features are provided as individual modules, allowing applications to include only what is needed. Inject the required modules to enable functionality, then configure the corresponding properties on the PDF Viewer instance.

Available PDF Viewer modules:

* [**Toolbar**](./toolbar-customization): Built-in toolbar for user interaction.
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

> In addition to injecting the required modules in an application, enable the corresponding properties to activate features on a PDF Viewer instance.
Refer to the following table:

| Module | Dependent modules to be injected for extending the functionality of PDF Viewer in your application | Property to enable the functionality for a PDF Viewer instance |
|---|---|---|
|Toolbar|`PdfViewer.Inject(Toolbar)`|`let pdfViewer: PdfViewer = new PdfViewer({ enableToolbar: true });`|
|Magnification|`PdfViewer.Inject(Magnification)`|`let pdfViewer: PdfViewer = new PdfViewer({ enableMagnification: true });`|
|Navigation|`PdfViewer.Inject(Navigation)`|`let pdfViewer: PdfViewer = new PdfViewer({ enableNavigation: true });`|
|LinkAnnotation|`PdfViewer.Inject(LinkAnnotation)`|`let pdfViewer: PdfViewer = new PdfViewer({ enableHyperlink: true });`|
|ThumbnailView|`PdfViewer.Inject(ThumbnailView)`|`let pdfViewer: PdfViewer = new PdfViewer({ enableThumbnail: true });`|
|BookmarkView|`PdfViewer.Inject(BookmarkView)`|`let pdfViewer: PdfViewer = new PdfViewer({ enableBookmark: true });`|
|TextSelection|`PdfViewer.Inject(TextSelection)`|`let pdfViewer: PdfViewer = new PdfViewer({ enableTextSelection: true });`|
|TextSearch|`PdfViewer.Inject(TextSearch)`|`let pdfViewer: PdfViewer = new PdfViewer({ enableTextSearch: true });`|
|Print|`PdfViewer.Inject(Print)`|`let pdfViewer: PdfViewer = new PdfViewer({ enablePrint: true });`|
|Annotation|`PdfViewer.Inject(Annotation)`|`let pdfViewer: PdfViewer = new PdfViewer({ enableAnnotation: true });`|
|FormFields|`PdfViewer.Inject(FormFields)`|`let pdfViewer: PdfViewer = new PdfViewer({ enableFormFields: true });`|
|FormDesigner|`PdfViewer.Inject(FormDesigner)`|`let pdfViewer: PdfViewer = new PdfViewer({ enableFormDesigner: true });`|

## See also

* [Toolbar items](./toolbar)
* [Toolbar customization](./how-to/customization)