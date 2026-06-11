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

The PDF Viewer features are organized into discrete modules so applications can include only the functionality they require. Inject the necessary modules to extend the viewer's behavior and reduce bundle size. The modules listed below are available for selective inclusion:

* [**Toolbar**](./toolbar-customization/primary-toolbar): Built-in toolbar for user interaction.
* [**Magnification**](./magnification): Perform zoom operations for a better viewing experience.
* [**Navigation**](./interactive-pdf-navigation/page): Navigate across pages.
* [**LinkAnnotation**](./interactive-pdf-navigation/table-of-content-navigation): Navigate within the document or to external destinations via hyperlinks.
* [**ThumbnailView**](./interactive-pdf-navigation/page-thumbnail): Navigate within the document using page thumbnails.
* [**BookmarkView**](./interactive-pdf-navigation/bookmark): Navigate using document bookmarks (table of contents).
* [**TextSelection**](./textselection): Select and copy text from the document.
* [**TextSearch**](./text-search/find-text): Search for text across the document.
* [**Print**](./print/overview): Print the entire document or specific pages directly from the browser.
* [**Annotation**](./annotations/overview): Add and edit annotations.
* [**FormFields**](./form-designer/form-filling): Work with form fields in the document.
* [**FormDesigner**](./form-designer/Create-edit-Style-del-formFields/create-formfields): Add or edit form fields in the document.

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