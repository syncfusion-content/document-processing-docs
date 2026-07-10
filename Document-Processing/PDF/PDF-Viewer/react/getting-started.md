---
layout: post
title: React Standalone PDF Viewer Getting Started | Syncfusion
description: Learn all about Getting Started with the Standalone React PDF Viewer Component of Syncfusion Essential JS 2 and more details.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Standalone PDF Viewer Component

This section explains how to create a simple React application and add the standalone [Syncfusion® React PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/react-pdf-viewer) component with the minimum required setup.

## Prerequisites

[System requirements for Syncfusion® React components](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Create a React application

Use [`Vite`](https://vitejs.dev/guide/) to create a new React application for a faster development environment, smaller bundle sizes, and optimized production builds.

To create a new React application, run one of the following commands based on your preferred environment.

{% tabs %}
{% highlight bash tabtitle="JavaScript" %}

npm create vite@latest pdf-viewer-app -- --template react
cd pdf-viewer-app

{% endhighlight %}
{% highlight bash tabtitle="TypeScript" %}

npm create vite@latest pdf-viewer-app -- --template react-ts
cd pdf-viewer-app

{% endhighlight %}
{% endtabs %}


## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> React PDF Viewer package

Install the [React PDF Viewer](https://www.npmjs.com/package/@syncfusion/ej2-react-pdfviewer) package from npm using the following command:

{% tabs %}
{% highlight bash tabtitle="npm" %}

npm install @syncfusion/ej2-react-pdfviewer --save

{% endhighlight %}
{% endtabs %}

## Add CSS references

Add the following PDF Viewer and dependent component style references to the `src/index.css` file.

{% tabs %}
{% highlight css tabtitle="index.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';

{% endhighlight %}
{% endtabs %}

## Add the Syncfusion® React PDF Viewer component to the application

Add the **Syncfusion® React PDF Viewer** component to your `src/App.jsx` or `src/App.tsx` file.

The key props and services used in the following samples are:

* `documentPath`: URL or Base64 string of the PDF to load.
* `resourceUrl`: Path to the PDFium (`pdfium.js` / `pdfium.wasm`) assets required for rendering.
* `Inject services={[...]}`: Registers the optional modules (toolbar, navigation, annotations, search, form fields, etc.) you want to enable.

{% tabs %}
{% highlight js tabtitle="JSX" %}
{% raw %}

import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
         PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    return (
      <PdfViewerComponent id="container"
        // Specifies the URL (for example, a file from the public folder) or a Base64-encoded PDF.
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        // Specifies the path to the PDFium resource files required for the PDF Viewer to function.
        resourceUrl="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib">

         <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
                             BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
                             FormFields, FormDesigner, PageOrganizer ]}/>
      </PdfViewerComponent>
    );
}

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="TSX" %}
{% raw %}

import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
         PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';
 
export default function App() {
  return (
    <PdfViewerComponent id="container"
      // Specifies the URL (for example, a file from the public folder) or a Base64-encoded PDF.
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      // Specifies the path to the PDFium resource files required for the PDF Viewer to function.
      resourceUrl="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib">
      <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
                          BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
                          FormFields, FormDesigner, PageOrganizer ]}/>
    </PdfViewerComponent>
  );
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

N> To load PDF documents and resources from your local application instead of a CDN, refer to [Load PDF Viewer with Local Resources](how-to/load-pdf-viewer-with-local-resources).

## Run the application

Run the following command to start the React application:

{% tabs %}
{% highlight bash tabtitle="Vite CLI" %}

npm run dev

{% endhighlight %}
{% endtabs %}

After the application starts, open the localhost URL shown in the terminal to view the React PDF Viewer in the browser. The output will appear as follows:

![React PDF Viewer Control](images/pdfviewer-control.png)

You can also explore the PDF Viewer interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/pdfviewer/react/base-cs1-standalone" %}

> [View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Getting%20Started).

## Video tutorial

To get started quickly with React PDF Viewer, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=VJibluQFWns" %}

## See also

- [Getting started with Server-Backed React PDF Viewer](./getting-started-with-server-backed)
- [Open PDF Files](./open-pdf-files)
- [Save PDF Files](./save-pdf-files)
