---
layout: post
title: Feature Module in React PDF Viewer | Syncfusion
description: The feature module in the React PDF Viewer lets you load only the capabilities you need, keeping the bundle size small and the app fast.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Feature Module in React PDF Viewer

The PDF Viewer features are organized into discrete modules so applications can include only the functionality they require. Inject the required modules to extend the viewer. The following modules are available:

* [**Toolbar**](./toolbar-customization/annotation-toolbar): Built-in toolbar for user interaction.
* [**Magnification**](./magnification/magnification): Perform zoom operations for a better viewing experience.
* [**Navigation**](./interactive-pdf-navigation/page): Navigate across pages.
* [**LinkAnnotation**](./interactive-pdf-navigation/hyperlink): Navigate within the document or to external destinations via hyperlinks.
* [**ThumbnailView**](./interactive-pdf-navigation/page-thumbnail): Navigate within the document using page thumbnails.
* [**BookmarkView**](./interactive-pdf-navigation/bookmark): Navigate using document bookmarks (table of contents).
* [**TextSelection**](./text-selection/overview): Select and copy text from the document.
* [**TextSearch**](./text-search/overview): Search for text across the document.
* [**Print**](./print/overview): Print the entire document or specific pages directly from the browser.
* [**Annotation**](./annotation/text-markup-annotation): Add and edit annotations.
* [**FormFields**](./forms/form-designer): Work with form fields in the document.
* [**FormDesigner**](./forms/form-designer): Add or edit form fields in the document.

N> In addition to injecting required modules in an application, enable the corresponding properties to extend functionality for a PDF Viewer instance.

Refer to the following table.

| Module | Property to enable the functionality for a PDF Viewer instance |
|---|---|
|Toolbar|`<PdfViewerComponent enableToolbar={true} ></PdfViewerComponent>`|
|Magnification|`<PdfViewerComponent enableMagnification={true} ></PdfViewerComponent>`|
|Navigation|`<PdfViewerComponent enableNavigation={true} ></PdfViewerComponent>`|
|LinkAnnotation|`<PdfViewerComponent enableHyperlink={true} ></PdfViewerComponent>`|
|ThumbnailView|`<PdfViewerComponent enableThumbnail={true} ></PdfViewerComponent>`|
|BookmarkView|`<PdfViewerComponent enableBookmark={true} ></PdfViewerComponent>`|
|TextSelection|`<PdfViewerComponent enableTextSelection={true} ></PdfViewerComponent>`|
|TextSearch|`<PdfViewerComponent enableTextSearch={true} ></PdfViewerComponent>`|
|Print|`<PdfViewerComponent enablePrint={true} ></PdfViewerComponent>`|
|Annotation|`<PdfViewerComponent enableAnnotation={true} ></PdfViewerComponent>`|
|FormFields|`<PdfViewerComponent enableFormFields={true} ></PdfViewerComponent>`|
|FormDesigner|`<PdfViewerComponent enableFormDesigner={true} ></PdfViewerComponent>`|

## See also

* [Toolbar customization](./toolbar-customization/overview)
* [Custom toolbar](./toolbar-customization/custom-toolbar)