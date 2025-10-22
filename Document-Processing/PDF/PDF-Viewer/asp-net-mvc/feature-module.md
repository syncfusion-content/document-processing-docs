---
layout: post
title: Feature modules in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn about feature modules in the Syncfusion ASP.NET MVC PDF Viewer component and how to enable them.
platform: document-processing
control: PDF Viewer
documentation: ug
---


# Feature modules in ASP.NET MVC PDF Viewer

The PDF Viewer features are organized into individual feature modules to enable selective referencing in your application. Inject the required modules to extend functionality. The following modules can be included as needed:

The available PdfViewer modules are:

* [**Toolbar**](./toolbar-customization):- Built-in toolbar for better user interaction.
* [**Magnification**](./magnification.md):- Perform zooming operation for better viewing experience.
* [**Navigation**](./interactive-pdf-navigation/page-navigation.md):- Easy navigation across the PDF pages.
* [**LinkAnnotation**](./interactive-pdf-navigation/table-of-content-navigation.md):- Easy navigation within and outside of the PDF document.
* [**ThumbnailView**](./interactive-pdf-navigation/page-thumbnail-navigation.md):- Easy navigation with in the PDF document.
* [**BookmarkView**](./interactive-pdf-navigation/bookmark-navigation.md):- Easy navigation based on the bookmark content of the PDF document.
* [**TextSelection**](./textselection.md):- Select and copy text from a PDF file.
* [**TextSearch**](./text-search.md):- Search a text easily across the PDF document.
* [**Print**](./print.md):- Print the entire document or a specific page directly from the browser.
* [**Annotation**](./annotation/text-markup-annotation.md):- Annotations can be added or edited in the PDF document.
* [**FormFields**](./form-designer/create-programmatically.md):- Preserve the form fields in the PDF document.
* [**FormDesigner**](./form-designer/create-programmatically.md):- Form fields can be added or edited in the PDF document.

N> In addition to injecting the required modules in your application, enable the corresponding properties to extend the functionality for a PDF Viewer instance. Refer to the following table.

| Module | Property to enable the functionality for a PDF Viewer instance |
|---|---|
|Toolbar|`@Html.EJS().PdfViewer("container").EnableToolbar(true).Render()`|
|Magnification|`@Html.EJS().PdfViewer("container").EnableMagnification(true).Render()`|
|Navigation|`@Html.EJS().PdfViewer("container").EnableNavigation(true).Render()`|
|LinkAnnotation|`@Html.EJS().PdfViewer("container").EnableHyperlink(true).Render()`|
|ThumbnailView|`@Html.EJS().PdfViewer("container").EnableThumbnail(true).Render()`|
|BookmarkView|`@Html.EJS().PdfViewer("container").EnableBookmark(true).Render()`|
|TextSelection|`@Html.EJS().PdfViewer("container").EnableTextSelection(true).Render()`|
|TextSearch|`@Html.EJS().PdfViewer("container").EnableTextSearch(true).Render()`|
|Print|`@Html.EJS().PdfViewer("container").EnablePrint(true).Render()`|
|Annotation|`@Html.EJS().PdfViewer("container").EnableAnnotation(true).Render()`|
|FormFields|`@Html.EJS().PdfViewer("container").EnableFormFields(true).Render()`|
|FormDesigner|`@Html.EJS().PdfViewer("container").EnableFormDesigner(true).Render()`|

## See also

* [Toolbar items](./toolbar)
* [Toolbar customization](./how-to/toolbar_customization)
