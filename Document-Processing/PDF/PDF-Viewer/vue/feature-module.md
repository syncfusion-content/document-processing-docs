---
layout: post
title: Feature modules in Vue PDF Viewer | Syncfusion
description: Learn to inject feature modules in Syncfusion Vue PDF Viewer to enable toolbar, search, forms, annotations, and printing.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Feature modules in Vue PDF viewer Control

The PDF Viewer features are provided as individual modules, allowing applications to include only what is needed. Inject the required modules to enable functionality, then configure the corresponding properties on the PDF Viewer instance.

Available PDF Viewer modules:

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

> In addition to injecting the required modules in an application, enable the corresponding properties to activate features on a PDF Viewer instance.

Refer to the following table:

| Module | Property to enable the functionality for a PDF Viewer instance |
|---|---|
|Toolbar|`<ejs-pdfviewer :enableToolbar="true" ></ejs-pdfviewer>`|
|Magnification|`<ejs-pdfviewer :enableMagnification="true" ></ejs-pdfviewer>`|
|Navigation|`<ejs-pdfviewer :enableNavigation="true" ></ejs-pdfviewer>`|
|LinkAnnotation|`<ejs-pdfviewer :enableHyperlink="true" ></ejs-pdfviewer>`|
|ThumbnailView|`<ejs-pdfviewer :enableThumbnail="true" ></ejs-pdfviewer>`|
|BookmarkView|`<ejs-pdfviewer :enableBookmark="true" ></ejs-pdfviewer>`|
|TextSelection|`<ejs-pdfviewer :enableTextSelection="true" ></ejs-pdfviewer>`|
|TextSearch|`<ejs-pdfviewer :enableTextSearch="true" ></ejs-pdfviewer>`|
|Print|`<ejs-pdfviewer :enablePrint="true" ></ejs-pdfviewer>`|
|Annotation|`<ejs-pdfviewer :enableAnnotation="true" ></ejs-pdfviewer>`|
|FormFields|`<ejs-pdfviewer :enableFormFields="true" ></ejs-pdfviewer>`|
|FormDesigner|`<ejs-pdfviewer :enableFormDesigner="true" ></ejs-pdfviewer>`|

## See also

* [Toolbar items](../pdfviewer/toolbar)
* [Toolbar customization](../pdfviewer/how-to/toolbar-customization)
