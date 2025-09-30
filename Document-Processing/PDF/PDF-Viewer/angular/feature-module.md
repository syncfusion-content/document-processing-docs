---
layout: post
title: Feature module in Angular PDF Viewer component | Syncfusion
description: Learn here all about Feature module in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Feature module
documentation: ug
domainurl: ##DomainURL##
---

# Feature modules

The [`Angular PDF Viewer`](https://www.syncfusion.com/pdf-viewer-sdk) features are provided as individual modules for selective reference in applications. Inject the required modules to extend functionality. The following modules can be included as needed:

The available PDF Viewer modules are:

* **Toolbar**: Built-in toolbar for better user interaction.
* **Magnification**: Performs zoom operations for a better viewing experience.
* **Navigation**: Easy navigation across PDF pages.
* **LinkAnnotation**: Easy navigation within and outside the PDF document.
* **ThumbnailView**: Easy navigation within the PDF document.
* **BookmarkView**: Easy navigation based on the bookmark content in the PDF document.
* **TextSelection**: Selects and copies text from a PDF file.
* **TextSearch**: Searches text across the PDF document.
* **Print**: Prints the entire document or a specific page directly from the browser.
* **Annotation**: Adds or edits annotations in the PDF document.
* **FormFields**: Preserves form fields in the PDF document.
* **FormDesigner**: Adds or edits form fields in the PDF document.
* **StickyNotesAnnotation**: Adds sticky notes to the PDF document.

>In addition to injecting the required modules in the application, enable the corresponding properties to extend functionality for a PDF Viewer instance.
Refer to the following table.

| Module | Property to enable functionality for a PDF Viewer instance |
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
|StickyNotesAnnotation|`<ejs-pdfviewer enableStickyNotesAnnotation= true ></ejs-pdfviewer>`|

## See also

* [Toolbar items](./toolbar)
* [Toolbar customization](./how-to/toolbar_customization)