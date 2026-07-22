---
layout: post
title: Getting started with JavaScript PDF Viewer control | Syncfusion
description:  Checkout and learn about Getting started with JavaScript PDF Viewer control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Standalone JavaScript PDF Viewer

This section explains how to create and run a **JavaScript (ES5) PDF Viewer** application using Syncfusion Essential JS 2 in **standalone mode**.

## Create application folder

Create an app folder `pdf-viewer-app` for the Essential JS 2 JavaScript components.

Your application structure should look like this:

```text
pdf-viewer-app/
├── index.html
├── index.js
```

## Add Syncfusion® PDF Viewer resources

Add the required Syncfusion® PDF Viewer style and script references to the `index.html` file using one of the following methods:

{% tabcontents %}

{% tabcontent Using Local Resources %}

To use local scripts and styles for the Syncfusion® PDF Viewer, follow these steps:

1. Download the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2) build](https://www.syncfusion.com/downloads/essential-js2/) installed on your machine.

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/JavaScript - EJ2/{RELEASE_VERSION}/Web(Essential JS 2)/JavaScript/{PACKAGE_NAME}/dist/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/JavaScript - EJ2/{RELEASE_VERSION}/Web(Essential JS 2)/JavaScript/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/19.3.53/Web(Essential JS 2)/JavaScript/ej2/dist/ej2.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/JavaScript - EJ2/19.3.53/Web(Essential JS 2)/JavaScript/ej2-js-es5/styles/material.css`

Alternatively, run the following command to clone the [`Essential JS 2 quickstart`](https://github.com/syncfusion/ej2-quickstart.git) project from GitHub and install the required packages.

{% tabs %}
{% highlight bash tabtitle="CLI" %}

git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install

{% endhighlight %}
{% endtabs %}

2. Download the `pdfium.js` and `pdfium.wasm` files from the following links:

**Syntax:**
> `pdfium.js`: `https://cdn.syncfusion.com/ej2/{Version}/dist/ej2-pdfviewer-lib/pdfium.js`
>
> `pdfium.wasm`: `https://cdn.syncfusion.com/ej2/{Version}/dist/ej2-pdfviewer-lib/pdfium.wasm`

**Example:**
> `pdfium.js`: [`https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/dist/ej2-pdfviewer-lib/pdfium.js`](https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/dist/ej2-pdfviewer-lib/pdfium.js)
>
> `pdfium.wasm`: [`https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/dist/ej2-pdfviewer-lib/pdfium.wasm`](https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/dist/ej2-pdfviewer-lib/pdfium.wasm)

3. Create a folder named `pdf-viewer-app/resources` and copy the EJ2 scripts and styles from the installed location into the `pdf-viewer-app/resources` directory. Copy the `ej2-pdfviewer-lib` folder (containing `pdfium.js` and `pdfium.wasm`) and the sample PDF document into the `pdf-viewer-app/resources` directory as well.

4. Add the PDF Viewer and its dependent control style and script references inside the `<head>` section of your `index.html` file using local resources.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!-- PDF Viewer dependency styles -->
<link href="resources/ej2-base/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/ej2-popups/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/ej2-navigations/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/ej2-dropdowns/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/ej2-lists/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/ej2-inputs/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/ej2-splitbuttons/styles/material.css" rel="stylesheet" type="text/css" />
<link href="resources/ej2-notifications/styles/material.css" rel="stylesheet" type="text/css" />
<!-- PDF Viewer styles -->
<link href="resources/ej2-pdfviewer/styles/material.css" rel="stylesheet" type="text/css" />
<!-- PDF Viewer dependency scripts -->
<script src="resources/ej2-base/dist/global/ej2-base.min.js" type="text/javascript"></script>
<script src="resources/ej2-buttons/dist/global/ej2-buttons.min.js" type="text/javascript"></script>
<script src="resources/ej2-popups/dist/global/ej2-popups.min.js" type="text/javascript"></script>
<script src="resources/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js" type="text/javascript"></script>
<script src="resources/ej2-inputs/dist/global/ej2-inputs.min.js" type="text/javascript"></script>
<script src="resources/ej2-lists/dist/global/ej2-lists.min.js" type="text/javascript"></script>
<script src="resources/ej2-dropdowns/dist/global/ej2-dropdowns.min.js" type="text/javascript"></script>
<script src="resources/ej2-navigations/dist/global/ej2-navigations.min.js" type="text/javascript"></script>
<!-- PDF Viewer scripts -->
<script src="resources/ej2-pdfviewer/dist/global/ej2-pdfviewer.min.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Using CDN Links %}

Create an HTML page (index.html) in `pdf-viewer-app` location and add the CDN link references inside the `<head>` section of your `index.html` file.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-base/styles/material.css" rel="stylesheet">    
<link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-buttons/styles/material.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-popups/styles/material.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-navigations/styles/material.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-dropdowns/styles/material.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-lists/styles/material.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-inputs/styles/material.css" rel="stylesheet">    
<link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-splitbuttons/styles/material.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-notifications/styles/material.css" rel="stylesheet">
<link href="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/ej2-pdfviewer/styles/material.css" rel="stylesheet">
<!-- Essential JS 2 PDF Viewer's script --> 
<script src="https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/dist/ej2.min.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

## Add Syncfusion® PDF Viewer component

Add a container element for the PDF Viewer control in the `index.html` file and then initialize the control inside the `<body>` section of your `index.html` file.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!-- Element which will render as PDF Viewer -->
<div id="PdfViewer" style="height:500px;width:100%;"></div>

{% endhighlight %}
{% endtabs %}

Initialize the PDF Viewer component in the `index.js` file:

{% tabcontents %}

{% tabcontent Using Local Resources %}

{% tabs %}
{% highlight js tabtitle="index.js" %}

// Initialize PDF Viewer component
var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: window.location.origin + '/resources/pdfsuccinctly.pdf',
    resourceUrl: window.location.origin + '/resources/ej2-pdfviewer-lib'
});

// PDF Viewer control rendering starts
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Using CDN Links %}

{% tabs %}
{% highlight js tabtitle="index.js" %}

// Initialize PDF Viewer component
var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/{{ site.releaseversion }}/dist/ej2-pdfviewer-lib'
});

// PDF Viewer control rendering starts
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

N> The `documentPath` property is used to set the path of the PDF file to be loaded in the PDF Viewer. The `resourceUrl` property is used to set the path of the PDF Viewer library resources required for PDF rendering. For local resources, ensure the `ej2-pdfviewer-lib` folder contains the required `pdfium.js` and `pdfium.wasm` files.

## Run the application

Run the following command to start the JavaScript application:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npx serve .

{% endhighlight %}
{% endtabs %}

After the application starts, open the localhost URL displayed in the terminal in your web browser. The PDF document will be rendered in the browser. The output will appear as follows:

![Rendered PDF Viewer in browser](images/pdfviewer-control.png)

You can also explore the PDF Viewer interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es5/es5-getting-started-cs2" %}

N> [View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to/Refer%20resource%20url%20locally).

## See also

- [Getting started with Server-Backed JavaScript PDF Viewer](./getting-started-with-server-backed)
- [Feature modules](./feature-module)