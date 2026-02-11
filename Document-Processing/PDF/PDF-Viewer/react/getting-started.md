---
layout: post
title: Getting started with Standalone React PDF Viewer component| Syncfusion
description: Learn here all about Getting started with Standalone React PDF Viewer component of Syncfusion Essential JS 2 and more details.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in Standalone PDF Viewer control in React

This section explains the steps required to create a simple Standalone React PDF Viewer and demonstrates the basic usage of the PDF Viewer control in a React application.

## Prerequisites

To get started with Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components, ensure the compatible version of React.
* React supported version >= `15.5.4+`.
* Required node version >= `14.0.0+`(NPM Package Manager).

## Setup for Local Development

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```


## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

* To install PDF Viewer component, use the following command

```
npm install @syncfusion/ej2-react-pdfviewer --save
```

* Copy the contents of the ej2-pdfviewer-lib folder from ./node_modules/@syncfusion/ej2-pdfviewer/dist to the public directory using the command:

```bash
cp -R ./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib public/ej2-pdfviewer-lib
```

* Confirm that there is an 'ej2-pdfviewer-lib' directory within your public directory.

* Validate that your server has been configured to utilize the Content-Type: application/wasm MIME type. Additional information can be found in the [Troubleshooting](./troubleshooting/troubleshooting) section.

N> The following changes apply to React version 18 and above.

## Adding PDF Viewer component and the CSS reference

* Add an HTML div element to act as the PDF Viewer element `index.html` using the following code.

```
   <!DOCTYPE html>
   <html lang="en">
   <head>
   <title>Syncfusion React PDF Viewer</title>
   <meta charset="utf-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta name="description" content="Essential JS 2 for React Components" />
   <meta name="author" content="Syncfusion" />
   </head>
   <body>
      <div id='sample'>
         <div id='loader'>Loading....</div>
         <script type="module" src="/src/main.tsx"></script>
      </div>
   </body>
   </html>
```

* Add the React PDF Viewer component’s CSS reference as given below in `src/index.css` file.

```css
   @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
   @import "../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css";
```

* Add the React PDF Viewer as shown below in `src/index.js` when using JavaScript (JSX). If you're using TypeScript (TSX), add it in `src/app.tsx` to render the PDF Viewer component.


{% tabs %}
{% highlight js tabtitle="JSX" %}
{% raw %}

import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';

function App() {
    return (<div>
    <div className='control-section'>
    {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ 'height': '640px' }}>

         <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                             ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]}/>

      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="TSX" %}
{% raw %}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
          ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';
export function App() {
return (<div>
 <div className='control-section'>
     <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      style={{ 'height': '640px' }}>
         <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                             ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]}/>
     </PdfViewerComponent>
 </div>
</div>);
}
const rootElement = document.getElementById('sample')!;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

### Steps to Load PDF Viewer with Local Resources

To configure the PDF Viewer to use local files for `documentPath` and `resourceUrl` instead of files hosted on a CDN, follow these steps:

**Step 1:** Ensure that your application includes the `ej2-pdfviewer-lib` folder. This folder must contain the `pdfium.js`, `pdfium.wasm` files, and the PDF file that you intend to display. These should be located in the `assets` directory within your project's `public` folder.

**Step 2:** Assign local file paths to the `documentPath` and `resourceUrl` properties within the PDF Viewer setup. The `documentPath` should refer to your PDF file, while the `resourceUrl` should point to the directory containing the supporting resources.

By following these steps, you will configure your PDF Viewer to load the required resources locally. See the code snippet below for reference.

{% tabs %}
{% highlight js tabtitle="JSX" %}
{% raw %}

<PdfViewerComponent
    id="container"
    documentPath= {window.location.origin + "/assets/pdfsuccinctly.pdf"}
    resourceUrl = {window.location.origin + "/assets/ej2-pdfviewer-lib"}
    style={{ 'height': '640px' }}>
</PdfViewerComponent>

{% endraw %}
{% endhighlight %}
{% endtabs %}

View the sample in GitHub to [load PDF Viewer with local resources](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to/Refer%20resource%20url%20locally)

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

## Adding Next.js Configuration

When deploying the Syncfusion PDF Viewer component in a Next.js application, you may need to add the following configuration to ensure smooth deployment:

Create a next.config.js file in the root of your project, and add the following code to the file:

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,  // Disable React Strict Mode for compatibility
  swcMinify: false,        // Disable SWC minification for better compatibility
};

module.exports = nextConfig;
```

N> When running the sample, if you encounter the **ERR_OSSL_EVP_UNSUPPORTED error** error, you need to run the following command in your terminal to resolve this issue. This error is related to OpenSSL, which is a cryptographic library used by Node.js for secure communication and encryption tasks. This specific error typically occurs when Node.js is trying to use cryptographic algorithms or routines that are not supported by the current version of OpenSSL being used.

```
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```


Output will be appears as follows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';
export function App() {
return (<div>
    <div className='control-section'>
        <PdfViewerComponent
            id="container"
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
            style={{ 'height': '640px' }}>
               {/* Inject the required services */}
               <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                   Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
    </div>
</div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';
export function App() {
return (<div>
    <div className='control-section'>
        <PdfViewerComponent
            id="container"
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
            style={{ 'height': '640px' }}>
               {/* Inject the required services */}
               <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                   Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
    </div>
</div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% raw %}
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Syncfusion React PDF Viewer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Essential JS 2 for React Components" />
    <meta name="author" content="Syncfusion" />
    <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/material.css" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
</head>
<body>
        <div id='sample'>
            <div id='loader'>Loading....</div>
            <script type="module" src="/src/main.tsx"></script>
        </div>
</body>
</html>
{% endraw %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/pdfviewer/react/base-cs1-standalone" %}

> You can refer to our [React PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk) feature tour page for its groundbreaking feature representations. You can also explore our [React PDF Viewer example](https://document.syncfusion.com/demos/pdf-viewer/react/#/tailwind3/pdfviewer/default) to understand how to explains core features of PDF Viewer.
