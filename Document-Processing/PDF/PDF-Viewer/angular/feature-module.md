---
layout: post
title: Feature module in Angular PDF Viewer component | Syncfusion
description: Learn here all about Feature module in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Feature module
documentation: ug
domainurl: ##DomainURL##
---

# Feature modules in Angular PDF Viewer

The [Angular PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk) exposes functionality as feature modules that can be imported selectively. Import and register only the modules required by an application to keep bundle sizes small and enable specific capabilities on demand. The following feature modules are available:

* **Toolbar**: Built-in toolbar for user interaction.
* **Magnification**: Zoom and fit options for improved viewing.
* **Navigation**: Page navigation controls and page jump support.
* **LinkAnnotation**: Support for hyperlinks within and outside the PDF.
* **ThumbnailView**: Page thumbnails for rapid navigation within the document.
* **BookmarkView**: Navigation based on document bookmarks.
* **TextSelection**: Select and copy text from the PDF.
* **TextSearch**: Find text across the document.
* **Print**: Print the document or individual pages from the browser.
* **Annotation**: Create and edit annotations on the PDF.
* **FormFields**: Preserve and interact with form fields in the document.
* **FormDesigner**: Add and edit form fields in design mode.
* **StickyNotesAnnotation**: Add sticky notes to the PDF.

N> In addition to registering the required modules, enable the corresponding component properties to activate each capability on a PDF Viewer instance. Refer to the following table for example attribute usage.

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
|StickyNotesAnnotation|`<ejs-pdfviewer enableStickyNotesAnnotation= true ></ejs-pdfviewer>`|

## See also

* [Toolbar items](./toolbar)
* [Toolbar customization](./how-to/toolbar_customization)