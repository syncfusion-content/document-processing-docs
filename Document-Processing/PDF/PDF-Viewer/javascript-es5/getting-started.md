---
layout: post
title: Getting started with JavaScript PDF Viewer control | Syncfusion
description:  Checkout and learn about Getting started with JavaScript PDF Viewer control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in JavaScript Standalone PDF Viewer control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## Component Initialization with CDN link for script and style reference

**Step 1:** Create an app folder `my-app` for the Essential JS 2 JavaScript components.

**Step 2:** The Essential JS 2 component's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{Version}/dist/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{Version}/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2.min.js`](https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/26.2.11/ej2-base/styles/material.css`](https://cdn.syncfusion.com/ej2/26.2.11/ej2-base/styles/material.css)


**Step 3:** Create a HTML page (index.html) in `my-app` location and add the CDN link references. Now, add the `Div` element and initiate the `Essential JS 2 PDF Viewer` component in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/javascript-es5/es5-getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/pdfviewer/javascript-es5/es5-getting-started-cs2" %}


### Steps to Load PDF Viewer with Local Resources

To use local resources with your PDF Viewer, follow these steps:

**Step 1:** Ensure that your application includes the `ej2-pdfviewer-lib` folder. This folder must contain the `pdfium.js`, `pdfium.wasm` files, and the PDF file that you intend to display. These should reside in the same location as the `ej2.min.js` script and its related styles.

**Step 2:** Assign local file paths to the `documentPath` and `resourceUrl` properties within the PDF Viewer setup. The `documentPath` should refer to your PDF file, while the `resourceUrl` should point to the directory containing the supporting resources.

**Step 3:** Insert the necessary script and style references within the `<head>` section of your HTML file. Make sure these point to your local copies of the files instead of CDN links.

By following these steps, you will configure your PDF Viewer to load the required resources locally. See the code snippet below for reference.

{% tabs %}
{% highlight html tabtitle="index.html" %}
<script>

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath:window.location.origin +'/resources/pdfsuccinctly.pdf',
    resourceUrl:window.location.origin +'/resources/ej2-pdfviewer-lib'
});

</script>
{% endhighlight %}
{% endtabs %}

View the sample in GitHub to [load PDF Viewer with local resources](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to/Refer%20resource%20url%20locally)

**Step 4:** Now, run the `index.html` in web browser, it will render the `Essential JS 2 PDF Viewer` component.
