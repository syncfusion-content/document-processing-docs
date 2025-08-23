---
title: Overview of React PDF Viewer Component | Syncfusion
description: Checkout and learn about overview of the Syncfusion React PDF Viewer component and much more details.
platform: document-processing
control: PDF Viewer
documentation: UG
---

# Overview of React PDF Viewer Component

The [`React PDF Viewer`](https://www.syncfusion.com/react-components/react-pdf-viewer) component is a lightweight and modular component for viewing and printing PDF files. It provides the best viewing experience available with core interactions such as zooming, scrolling, text searching, text selection, and text copying. The thumbnail, bookmark, hyperlink and table of contents support provides easy navigation within and outside the PDF files.

## Setup

### Create a React Application

You can use [create-react-app](https://github.com/facebook/create-react-app) to setup applications. To create React app use the following command.

```
create-react-app quickstart
cd quickstart
npm install
```

### Adding Syncfusion PDF Viewer package

All Syncfusion react packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. To install the react PDF Viewer package, use the following command.

```
npm install @syncfusion/ej2-react-pdfviewer --save
```
### Adding CSS references for PDF Viewer

Add CSS references needed for a PDF Viewer in `src/index.css` from the `../node_modules/@syncfusion` package folder.

```
   @import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
   @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
   @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
   @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
   @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
   @import "../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css";

```
### Add PDF Viewer component

In the `src/index.js` file, use the following code snippet to render the Syncfusion React PDF Viewer control and import index.css to apply styles to the PDF Viewer

```
import * as ReactDOM from 'react-dom';
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
        resourceUrl="https://cdn.syncfusion.com/ej2/23.1.40/dist/ej2-pdfviewer-lib"
        style={{ 'height': '640px' }}>
         
         <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                             ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]}/>

      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

## Key Features 

*[`View PDF Document`](https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started) - Open and display both the normal and the protected PDF files with AES and RC4 encryption.
*[`Annotations`](https://ej2.syncfusion.com/react/documentation/pdfviewer/annotation/text-markup-annotation) - Annotate with text markup, shapes, stamps, ink, and sticky notes.Form filling and form designing can be done.
*[`Form Fields`](https://ej2.syncfusion.com/react/documentation/pdfviewer/form-designer/create-fillable-pdf-forms/create-programmatically) - Form filling and form designing can be done.
*[`Signature`](https://ej2.syncfusion.com/react/documentation/pdfviewer/annotation/signature-annotation) - Hand-written and digital signatures are allowed.
*[`Toolbar`](https://ej2.syncfusion.com/react/documentation/pdfviewer/toolbar) - Built-in-toolbar and custom toolbars to perform user interaction of PDF Viewer functionalities.
*[`Navigation`](https://ej2.syncfusion.com/react/documentation/pdfviewer/navigation) - Easy navigation with the help of bookmarks, thumbnails, hyperlinks, and table of contents.
*[`Magnification`](https://ej2.syncfusion.com/react/documentation/pdfviewer/magnification) - Fit to page, fit to width, and automatic (fits to the visible area).
*[`Search`](https://ej2.syncfusion.com/react/documentation/pdfviewer/text-search) - Search a text easily across the PDF document.
*[`Core Interactions`](https://ej2.syncfusion.com/react/documentation/pdfviewer/interaction-mode) - Allows scrolling, zooming, panning, selection, and page navigation.
*[`Print`](https://ej2.syncfusion.com/react/documentation/pdfviewer/print) - Print the entire document or a specific page directly from the browser.
*[`Globalization`](https://ej2.syncfusion.com/react/documentation/pdfviewer/globalization) - Provides inherent support to localize the UI.

## Supported Web platforms

* [Javascript(ES5)](https://ej2.syncfusion.com/javascript/documentation/pdfviewer/getting-started)
* [Javascript](https://ej2.syncfusion.com/documentation/pdfviewer/getting-started)
* [Angular](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started)
* [Vue](https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started)
* [ASP.NET Core](https://ej2.syncfusion.com/aspnetcore/documentation/pdfviewer/getting-started)
* [ASP.NET MVC](https://ej2.syncfusion.com/aspnetmvc/documentation/pdfviewer/getting-started)
* [Blazor](https://help.syncfusion.com/document-processing/pdf/pdf-viewer2/blazor/getting-started/features)