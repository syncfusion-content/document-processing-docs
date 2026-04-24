---
layout: post
title: Getting started with React PDF Viewer component | Syncfusion
description: Checkout and learn about Getting started with React PDF Viewer component of Syncfusion Essential JS 2 and more details.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with server-backed React PDF Viewer component

This section explains the steps to create a server-backed React PDF Viewer and demonstrates basic usage of the PDF Viewer component in a React application.

## Prerequisites

To get started with Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components, ensure the compatible version of React.
* React supported version >= `15.5.4+`.
* Required node version >= `14.0.0+`(NPM Package Manager).

## Create a React app

To set up a React application, use Vite (for example, `npm create vite@latest`), which provides a fast development environment, smaller bundle sizes, and optimized production builds compared to traditional tools such as `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/).

N> To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

{% tabs %}
{% highlight bash tabtitle="TypeScript" %}

npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev

{% endhighlight %}
{% highlight bash tabtitle="JavaScript" %}

npm create vite@latest my-app -- --template react
cd my-app
npm run dev

{% endhighlight %}
{% endtabs %}

## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.

To install PDF Viewer component, use the following command:

```
npm install @syncfusion/ej2-react-pdfviewer --save
```

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

* Add the React PDF Viewer as below in `src/index.js` file to render the PDF Viewer component.

{% tabs %}
{% highlight js tabtitle="JSX" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
      BookmarkView,ThumbnailView, Print, TextSelection, Annotation, TextSearch,
      FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';

function App() {
    return (<div>
    <div className='control-section'>
    {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        // Specifies the path or Base64 string of the PDF document to be loaded in the PDF Viewer.
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        // Specifies the backend service URL that processes and streams PDF data
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        style={{ 'height': '640px' }}>
         // Specifies the modules required for the PDF Viewer
         <Inject services={[ Toolbar, Magnification, Navigation, Annotation,
                        LinkAnnotation, BookmarkView, ThumbnailView, Print,
                        TextSelection, TextSearch, FormFields, FormDesigner ]}/>
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
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView,ThumbnailView, Print, TextSelection, Annotation, TextSearch,
         FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';
export function App() {
return (<div>
 <div className='control-section'>
     <PdfViewerComponent
      id="container"
      // Specifies the path or Base64 string of the PDF document to be loaded in the PDF Viewer.
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      // Specifies the backend service URL that processes and streams PDF data
      serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
      style={{ 'height': '640px' }}>
          // Specifies the modules required for the PDF Viewer
         <Inject services={[ Toolbar, Magnification, Navigation, Annotation,
          LinkAnnotation, BookmarkView,ThumbnailView, Print, TextSelection,
          TextSearch, FormFields,FormDesigner ]}/>
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

N> The Web API hosted link https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer utilized in the PDF viewer's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/pdfviewer-server) for hosting your own web service and use for the serviceUrl property. **We strongly recommend using the standalone mode.**

[How to Create and Run a Custom PDF Viewer Web Service](./how-to/create-and-run-custom-pdf-viewer-web-service)


## Run the application

Use the following command to run the application in browser.

```
npm run dev
```

Output will be appears as follows.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pdfviewer/react/base-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pdfviewer/react/base-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pdfviewer/react/base-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/pdfviewer/react/base-cs1" %}

N> When configuring the server-backed PDF viewer, it's Essential<sup style="font-size:70%">&reg;</sup> to understand that there is no need to include the pdfium.js and pdfium.wasm files. Unlike the standalone PDF viewer, which relies on these files for local rendering, the server-backed PDF viewer fetches and renders PDFs directly from the server. Consequently, you can exclude the copy command for deployment process, as they are not required to load and display PDFs in this context.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Getting%20Started).

N> For hosting the web service on the Linux platform, ensure to include the [SkiaSharp.NativeAssets.Linux v3.119.1](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1). Additionally, for AWS environments, utilize the following packages:

| **Amazon Web Services (AWS)** |**NuGet package name** |
| --- | --- |
| AWS Lambda|[SkiaSharp.NativeAssets.Linux v3.119.1](https://nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)|
| AWS Elastic Beanstalk |[SkiaSharp.NativeAssets.Linux.NoDependencies v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.119.1)|
