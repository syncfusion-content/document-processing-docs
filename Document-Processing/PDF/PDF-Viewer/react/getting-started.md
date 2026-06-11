---
layout: post
title: Getting started with Standalone React PDF Viewer component| Syncfusion
description: Learn here all about Getting started with Standalone React PDF Viewer component of Syncfusion Essential JS 2 and more details.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with standalone React PDF Viewer component

This section explains the steps to create a standalone React PDF Viewer and demonstrates basic usage of the PDF Viewer component in a React application.

## Prerequisites

[System requirements for Syncfusion® React components](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Create a React application

Use [`Vite`](https://vitejs.dev/guide/) to create a new React application, as it provides a faster development environment, smaller bundle sizes, and optimized production builds.

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


## Install the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer packages

Install the [React PDF Viewer](https://www.npmjs.com/package/@syncfusion/ej2-react-pdfviewer) package from npm using the following command:

```
npm install @syncfusion/ej2-react-pdfviewer --save
```

## Adding PDF Viewer component and the CSS reference

Add the React PDF Viewer component’s CSS reference as given below in `src/index.css` file.

{% tabs %}
{% highlight css tabtitle="src/index.css" %}
   @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
   @import "../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css";
{% endhighlight %}
{% endtabs %}


Add the following import statements for the PDF Viewer along with the default imports in the file (src/index.js when using JavaScript/JSX, or src/app.tsx when using TypeScript/TSX), and include the PDF Viewer initialization code inside the function to render the PDF Viewer component.


{% tabs %}
{% highlight js tabtitle="JSX" %}
{% raw %}

import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
        BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch,
        FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';

function App() {
    return (<div>
    <div className='control-section'>
    {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        // Specifies the path or Base64 string of the PDF document to be loaded in the PDF Viewer.
        // You can provide a URL (for example, a file from the public folder) or a Base64-encoded PDF.
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        // Specifies the path to the PDFium resource files required for the PDF Viewer to function.
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
        style={{ 'height': '640px' }}>

         <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                             ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]}/>

      </PdfViewerComponent>
    </div>
  </div>);
}

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="TSX" %}
{% raw %}

import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
         BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch,
         FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';
export function App() {
return (<div>
 <div className='control-section'>
     <PdfViewerComponent
      id="container"
      // Specifies the path or Base64 string of the PDF document to be loaded in the PDF Viewer.
      // You can provide a URL (for example, a file from the public folder) or a Base64-encoded PDF.
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      // Specifies the path to the PDFium resource files required for the PDF Viewer to function.
      resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
      style={{ 'height': '640px' }}>
         // Specifies the modules required for the PDF Viewer
         <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                             ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]}/>
     </PdfViewerComponent>
 </div>
</div>);
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

N> To load PDF documents and resources from your local application instead of a CDN, refer to [Load PDF Viewer with Local Resources](how-to/load-pdf-viewer-with-local-resources).

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```
npm run dev
```

After the application starts, open the localhost URL shown in the terminal to view the React PDF Viewer in the browser. The output will appear as follows:

![React PDF Viewer Control](images/pdfviewer-control.png)

You can also explore the PDF Viewer interactively using the live sample below.

{% previewsample "/document-processing/code-snippet/pdfviewer/react/base-cs1-standalone" %}

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Getting%20Started).

## Video tutorial

To get started quickly with React PDF Viewer, you can watch this video:

{% youtube "https://www.youtube.com/watch?v=VJibluQFWns" %}

## See also

- [Getting started with Server-Backed React PDF Viewer](./getting-started-with-server-backed)
- [Open PDF Files](./open-pdf-files)
- [Save PDF Files](./save-pdf-files)
