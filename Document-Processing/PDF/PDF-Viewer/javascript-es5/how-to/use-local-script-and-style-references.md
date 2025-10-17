---
layout: post
title: Use local script and style references in JavaScript PDF Viewer control | Syncfusion
description: Learn how to configure local script and style references for the Syncfusion JavaScript PDF Viewer control and reference them within your application.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Use local script and style references in JavaScript PDF Viewer

**Step 1:** Create an application folder named `myapp` for Essential JS 2 JavaScript components.

**Step 2:** Download the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2) build](https://www.syncfusion.com/downloads/essential-js2/) installed on your machine.

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/JavaScript - EJ2/{RELEASE_VERSION}/Web(Essential JS 2)/JavaScript/{PACKAGE_NAME}/dist/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/JavaScript - EJ2/{RELEASE_VERSION}/Web(Essential JS 2)/JavaScript/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/19.3.53/Web(Essential JS 2)/JavaScript/ej2/dist/ej2.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/19.3.53/Web(Essential JS 2)/JavaScript/ej2-js-es5/styles/material.css`

Alternatively, clone the [`Essential JS 2 quickstart`](https://github.com/syncfusion/ej2-quickstart.git) project and install the required packages by running the following commands.

```
git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install
```

**Step 3:** Create a folder named `myapp/resources` and copy the EJ2 scripts and styles from the installed location into the `myapp/resources` directory.

**Step 4:** Add the `div` element and initialize the Essential JS 2 PDF Viewer component in `index.html` with the local script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
          <title>Essential JS 2</title>
          <!-- Essential JS 2 material theme -->
          <link href="resources/ej2-js-es5/styles/material.css" rel="stylesheet" type="text/css"/>

          <!-- Essential JS 2 PDF Viewer's script -->
          <script src="resources/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
          <!--element which is going to render-->
          <div id="container">
               <div id="PdfViewer" style="display:block;height:580px;width:100%;">
               </div>
          </div>
          <script>
               //Initialize PDF Viewer component
               var pdfviewer = new ej.pdfviewer.PdfViewer({
                    documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
                    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
               });
               //PDF Viewer control rendering starts
               pdfviewer.appendTo('#PdfViewer');
          </script>
       </body>
  </html>
```

**Step 5:** Run the `index.html` file in a web browser to render the **Essential JS 2 PDF Viewer** component as shown below.

![JavaScript Output](../images/javascript_output.png)