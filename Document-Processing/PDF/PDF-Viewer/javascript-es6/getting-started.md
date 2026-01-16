---
layout: post
title: Getting started with standalone TypeScript PDF Viewer | Syncfusion
description: Learn how to set up and use the Syncfusion TypeScript PDF Viewer in standalone mode, including local resource configuration and module injection.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with TypeScript PDF Viewer (standalone)

This guide explains how to create the PDF Viewer component and configure its features in TypeScript using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack) seed repository.

> This application is integrated with a webpack configuration (`webpack.config.js`) and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli#commands). It requires Node.js `v14.15.0` or higher. For more information, refer to the [webpack getting started guide](https://webpack.js.org/guides/getting-started).

## Set up the development environment

Open a command prompt in the target directory and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning, run the following command to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. Install all EJ2 controls with the [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) meta package or install individual control packages.

The quickstart application is preconfigured with [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) in `~/package.json`. Use the following command to install dependencies:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import Syncfusion CSS styles

Add the component CSS in the `~/src/styles/styles.css` file, as shown below:

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

## Add the PDF Viewer component

* Add the PDF Viewer component in `app.ts`:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% endtabs %}

### Load PDF Viewer with local resources

To configure the PDF Viewer to use local files for `documentPath` and `resourceUrl` instead of CDN-hosted files, follow these steps:

**Step 1:** Ensure the application includes the `ej2-pdfviewer-lib` folder. This folder must contain the `pdfium.js`, `pdfium.wasm` files, and the PDF file to display. Place these files in the project's `dist` directory.

**Step 2:** Assign local file paths to the `documentPath` and `resourceUrl` properties. The `documentPath` should refer to the PDF file, and the `resourceUrl` should point to the directory containing the supporting resources.

The following example shows how to load resources locally:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

pdfviewer.documentPath = window.location.origin + "/pdfsuccinctly.pdf";
pdfviewer.resourceUrl = window.location.origin + "/ej2-pdfviewer-lib";

{% endhighlight %}
{% endtabs %}

View the sample in GitHub to [load PDF Viewer with local resources](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/Refer%20resource%20url%20locally)

* Add an HTML div element to act as the PDF Viewer element in `index.html`:

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

The quickstart project is configured to compile and run in the browser. Use the following command to start the application:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm start

{% endhighlight %}
{% endtabs %}

Output:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
         ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner );

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib";
pdfviewer.appendTo('#PdfViewer');
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
<!DOCTYPE html>
<html lang="en">

<head>
    <title>EJ2 PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="TypeScript PDF Viewer Control" />
    <meta name="author" content="Syncfusion" />
    <link href="index.css" rel="stylesheet" />
    <link href="https://cdn.syncfusion.com/ej2/31.1.23/material.css" rel="stylesheet" />

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

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es6/getting-started-cs2" %}

## Module injection

To enable additional features, inject the required modules. The following modules extend the PDF Viewer's functionality:

* `LinkAnnotation`: Enables hyperlink navigation.
* `BookmarkView`: Displays and navigates document bookmarks.
* `Magnification`: Provides zoom in/out operations.
* `Navigation`: Enables page navigation.
* `TextSelection`: Enables text selection.
* `ThumbnailView`: Displays page thumbnails for navigation.
* `Toolbar`: Enables the built-in toolbar UI.
* `Print`: Enables printing.
* `Annotation`: Enables annotation features.
* `TextSearch`: Enables text search.
* `FormFields`: Enables form field support.
* `FormDesigner`: Enables designing and editing of form fields.

Inject modules using the `PdfViewer.Inject` method.

> Refer to the [JavaScript PDF Viewer feature tour](https://www.syncfusion.com/pdf-viewer-sdk) for an overview of capabilities. Explore the [JavaScript PDF Viewer example](https://document.syncfusion.com/demos/pdf-viewer/javascript/#/tailwind3/pdfviewer/default.html) to see core features in action.
