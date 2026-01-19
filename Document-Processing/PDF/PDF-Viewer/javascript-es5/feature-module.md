---
layout: post
title: Feature module in JavaScript PDF Viewer Control | Syncfusion
description: Learn here all about Feature module in Syncfusion Essential JavaScript PDF Viewer control, its elements and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Feature module in JavaScript PDF Viewer Control

The PDF Viewer features are segregated into individual feature-wise modules to enable selectively referencing in the application. The required modules should be injected to extend its functionality. The following are the selective modules of PDF Viewer that can be included as required:

The available PDF Viewer modules are:

* [**Toolbar**](./toolbar-customization/primary-toolbar):- Built-in toolbar for better user interaction.
* [**Magnification**](./magnification):- Perform zooming operation for better viewing experience.
* [**Navigation**](./interactive-pdf-navigation/page):- Easy navigation across the PDF pages.
* [**LinkAnnotation**](./interactive-pdf-navigation/hyperlink):- Easy navigation within and outside of the PDF document.
* [**ThumbnailView**](./interactive-pdf-navigation/page-thumbnail):- Easy navigation with in the PDF document.
* [**BookmarkView**](./interactive-pdf-navigation/bookmark):- Easy navigation based on the bookmark content of the PDF document.
* [**TextSelection**](./textselection):- Select and copy text from a PDF file.
* [**TextSearch**](./text-search/text-search-features):- Search a text easily across the PDF document.
* [**Print**](./print/overview):- Print the entire document or a specific page directly from the browser.
* [**Annotation**](./annotations/overview):- Annotations can be added or edited in the PDF document.
* [**FormFields**](./form-designer/form-filling):- Preserve the form fields in the PDF document.
* [**FormDesigner**](./form-designer/create-programmatically):- Form fields can be added or edited in the PDF document.

>In addition to injecting the required modules in your application, enable corresponding properties to extend the functionality for a PDF Viewer instance.
Refer to the following table.

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