---
layout: post
title: Getting started with Typescript PDF Viewer control | Syncfusion
description:  Checkout and learn about Getting started with Typescript PDF Viewer control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: PDF Viewer
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in Standalone PDF Viewer control

This section briefly explains how to create **PDF Viewer** component and configure its available functionalities in TypeScript using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion CSS styles

Add the components CSS in the `~/src/styles/styles.css` file, as shown below:

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-notifications/styles/material.css";

{% endhighlight %}
{% endtabs %}

## Adding PDF Viewer component

* Add the PDF Viewer component following code in the `app.ts`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

### Steps to Load PDF Viewer with Local Resources

To configure the PDF Viewer to use local files for `documentPath` and `resourceUrl` instead of files hosted on a CDN, follow these steps:

**Step 1:** Ensure that your application includes the `ej2-pdfviewer-lib` folder. This folder must contain the `pdfium.js`, `pdfium.wasm` files, and the PDF file that you intend to display. Place these files in your project's `dist` directory.

**Step 2:** Assign local file paths to the `documentPath` and `resourceUrl` properties within the PDF Viewer setup. The `documentPath` should refer to your PDF file, while the `resourceUrl` should point to the directory containing the supporting resources.

By following these steps, you will configure your PDF Viewer to load the required resources locally. See the code snippet below for reference.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

pdfviewer.documentPath = window.location.origin + "/pdfsuccinctly.pdf";
pdfviewer.resourceUrl = window.location.origin + "/ej2-pdfviewer-lib";

{% endhighlight %}
{% endtabs %}

View the sample in GitHub to [load PDF Viewer with local resources](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/Refer%20resource%20url%20locally)

* Add an HTML div element to act as the PDF Viewer element `index.html` using the following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <!--Element which will render as PDF Viewer -->
    <div id="PdfViewer"></div>
</body>

</html>
{% endhighlight %}
{% endtabs %}

## Run the application

The quickstart project is configured to compile and run the application in the browser. Use the following command to run the application.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

Output will be displayed as follows.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
         ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner );

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl="https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Typescript PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/26.2.11/ej2-base/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/26.2.11/ej2-pdfviewer/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/26.2.11/ej2-buttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/26.2.11/ej2-popups/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/26.2.11/ej2-navigations/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/26.2.11/ej2-dropdowns/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/26.2.11/ej2-lists/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/26.2.11/ej2-inputs/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/26.2.11/ej2-splitbuttons/styles/material.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/26.2.11/ej2-notifications/styles/material.css" rel="stylesheet" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>
<body>
    <div id='loader'>Loading....</div>
    <div id='container'>
        <div id='PdfViewer' style="height:500px;width:100%;"></div>
    </div>
</body>
</html>
{% endhighlight %}
{% endtabs %}

{% previewsample "Document-Processing/code-snippet/pdfviewer/javascript-es6/getting-started-cs2/index.html" %}

## Module injection

To create PDF Viewer with additional features, inject the required modules. The following modules are used to extend PDF Viewer's basic functionality:-

* `LinkAnnotation`:-  Inject this module to use PDF Viewer link annotation.
* `BookmarkView`:-  Inject this module to use bookmark view of the PDF Viewer.
* `Magnification`:-  Inject this module to magnify the PDF Document.
* `Navigation`:-  Inject this module to use page navigation on PDF Document.
* `TextSelection`:-  Inject this module to use text selection with the PDF Document.
* `ThumbnailView`:-  Inject this module to use thumbnail view of the PDF Viewer
* `Toolbar`:-  Inject this module to enable the user interface for toolbar option in PDF Viewer.
* `Print`:-  Inject this module to use pdfviewer print feature.
* `Annotation`:-  Inject this module to use pdfviewer annotation feature.
* `TextSearch`:-  Inject this module to use pdfviewer text search feature.
* `FormFields`:-  Inject this module to use pdfviewer form fields feature.
* `FormDesigner`:-  Inject this module to use pdfviewer form designer feature.

These modules should be injected into the PDF Viewer using `PdfViewer.Inject` method.

> You can refer to our [JavaScript PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk) feature tour page for its groundbreaking feature representations. You can also explore our [JavaScript PDF Viewer example](https://document.syncfusion.com/demos/pdf-viewer/javascript/#/tailwind3/pdfviewer/default.html) to understand how to explains core features of PDF Viewer.
