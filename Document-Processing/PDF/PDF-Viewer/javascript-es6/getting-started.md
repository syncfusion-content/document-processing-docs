---
layout: post
title: Setup for Local Development – TypeScript PDF Viewer | Syncfusion
description: Learn how to set up and run the Syncfusion TypeScript PDF Viewer in standalone mode using Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with the TypeScript PDF Viewer

This guide explains how to create and run a **TypeScript PDF Viewer** application using Syncfusion Essential JS 2 in **standalone mode**.

## Prerequisites

To get started, ensure the following software is installed on your machine:

- [Git](https://git-scm.com/downloads)
- [Node.js (`v14.15.0` or later)](https://nodejs.org/en/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Create a TypeScript application

Create a simple TypeScript application using the Essential® JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

**Step 1:** Open the command prompt from the required directory and clone the quickstart project from GitHub.

```bash
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart
```

**Step 2:** Navigate to the `ej2-quickstart` folder.

```bash
cd ej2-quickstart
```

**Step 3:** By default, the `ej2-quickstart` repository is preconfigured with the [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in `~/package.json`. This package installs all Syncfusion Essential JS 2 components, including the PDF Viewer and other EJ2 controls.

To install **only the PDF Viewer component**, replace the dependencies with [@syncfusion/ej2-pdfviewer](https://www.npmjs.com/package/@syncfusion/ej2-pdfviewer) in `package.json`:

```json
"@syncfusion/ej2-pdfviewer": "*"
```

**Step 4:** Install the dependent npm packages.

```bash
npm install
```

## Add CSS references

Add the required Syncfusion styles to `src/styles/styles.css`:

{% tabs %}
{% highlight css tabtitle="~/src/styles/styles.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';

{% endhighlight %}
{% endtabs %}

N> Refer to the [Themes topic](https://ej2.syncfusion.com/documentation/appearance/theme) to learn more about built-in themes and different ways to refer to themes in a TypeScript project.

## Add the PDF Viewer component

Import the PDF Viewer and inject only the required modules. Update `src/app.ts` as shown below:

{% tabs %}
{% highlight ts tabtitle="~/src/app.ts" %}

import { PdfViewer, Toolbar, Magnification, Navigation, 
         Annotation, LinkAnnotation, ThumbnailView,
         BookmarkView, TextSelection, TextSearch,
         FormFields, FormDesigner } from '@syncfusion/ej2-pdfviewer';

   PdfViewer.Inject(Toolbar, Magnification, Navigation,
                  Annotation, LinkAnnotation, ThumbnailView,
                  BookmarkView, TextSelection, TextSearch,
                  FormFields, FormDesigner);

    let pdfviewer: PdfViewer = new PdfViewer();
    // Specifies the URL or path of the PDF document to be loaded.
    // You can provide a remote URL or a local PDF file path.
    pdfviewer.documentPath =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

    // Specifies the URL of the PDFium resource files required by the PDF Viewer.
    // This should point to the ej2-pdfviewer-lib folder, either from a CDN
    // or a locally hosted location.
    pdfviewer.resourceUrl =
    'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
   pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}


Add a container element for the PDF Viewer in `index.html`:

{% tabs %}
{% highlight html tabtitle="index.html" %}
<div id="PdfViewer" style="height: 640px"></div>
{% endhighlight %}
{% endtabs %}

## Run the application

Build and launch the application using the following command:

```bash
npm start
```

The image below shows how the PDF Viewer is rendered in the browser:

![Rendered PDF Viewer in browser](images/pdfviewer-control.png)

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es6/getting-started-cs2" %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/Save%20and%20Load)

## See also

- [Getting started with Server-Backed TypeScript PDF Viewer](./getting-started-with-server-backed)
- [Open PDF Files](./open-pdf-files)
- [Save PDF Files](./save-pdf-files)