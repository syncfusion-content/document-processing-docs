---
layout: post
title: Feature modules in ASP.NET Core PDF Viewer | Syncfusion
description: Learn about feature modules in the Syncfusion ASP.NET Core PDF Viewer component and how to enable them.
platform: document-processing
control: PDF Viewer
documentation: ug
---


# Feature Modules in ASP.NET Core PDF Viewer

PDF Viewer features are organized into individual feature modules to enable selective referencing in the application. Required modules can be injected to extend functionality. The available modules include:

* [**Toolbar**](./toolbar-customization):- Built-in toolbar for better user interaction.
* [**Magnification**](./magnification):- Perform zooming operation for better viewing experience.
* [**Navigation**](./interactive-pdf-navigation/page-navigation):- Easy navigation across the PDF pages.
* [**LinkAnnotation**](./interactive-pdf-navigation/table-of-content-navigation):- Easy navigation within and outside of the PDF document.
* [**ThumbnailView**](./interactive-pdf-navigation/page-thumbnail-navigation):- Easy navigation with in the PDF document.
* [**BookmarkView**](./interactive-pdf-navigation/bookmark-navigation):- Easy navigation based on the bookmark content of the PDF document.
* [**TextSelection**](./textselection):- Select and copy text from a PDF file.
* [**TextSearch**](./text-search):- Search a text easily across the PDF document.
* [**Print**](./print):- Print the entire document or a specific page directly from the browser.
* [**Annotation**](./annotation/text-markup-annotation):- Annotations can be added or edited in the PDF document.
* [**FormFields**](./form-designer/create-programmatically):- Preserve the form fields in the PDF document.
* [**FormDesigner**](./form-designer/create-programmatically):- Form fields can be added or edited in the PDF document.

N> In addition to injecting required modules in the application, enable the corresponding properties to extend functionality for a PDF Viewer instance. Refer to the following table.

| Module | Property to enable the functionality for a PDF Viewer instance |
|---|---|
|Toolbar|`<ejs-pdfviewer enableToolbar= true ></ejs-pdfviewer>`|
|Magnification|`<ejs-pdfviewer enableMagnification= true ></ejs-pdfviewer>`|
|Navigation|`<ejs-pdfviewer enableNavigation= true ></ejs-pdfviewer>`|
|LinkAnnotation|`<ejs-pdfviewer enableHyperlink= true ></ejs-pdfviewer>`|
|ThumbnailView|`<ejs-pdfviewer enableThumbnail= true ></ejs-pdfviewer>`|
|BookmarkView|`<ejs-pdfviewer enableBookmark= true ></ejs-pdfviewer>`|
|TextSelection|`<ejs-pdfviewer enableTextSelection= true ></ejs-pdfviewer>`|
|TextSearch|`<ejs-pdfviewer enableTextSearch= true ></ejs-pdfviewer>`|
|Print|`<ejs-pdfviewer enablePrint= true ></ejs-pdfviewer>`|
|Annotation|`<ejs-pdfviewer enableAnnotation= true ></ejs-pdfviewer>`|
|FormFields|`<ejs-pdfviewer enableFormFields= true ></ejs-pdfviewer>`|
|FormDesigner|`<ejs-pdfviewer enableFormDesigner= true ></ejs-pdfviewer>`|

## See also

* [Toolbar items](./toolbar)
* [Toolbar customization](./how-to/toolbar-customization)