---
title: Overview of React PDF Viewer Component | Syncfusion
description: Checkout and learn about overview of the Syncfusion React PDF Viewer component and much more details.
platform: document-processing
control: PDF Viewer
documentation: UG
---

# Overview of React PDF Viewer component

The [`React PDF Viewer`](https://www.syncfusion.com/pdf-viewer-sdk) component is a lightweight, modular control for viewing and printing PDF files. It supports core interactions such as zooming, scrolling, text searching, text selection, and text copying. Thumbnails, bookmarks, hyperlinks, and table-of-contents support enable easy navigation inside and outside PDF files.

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
```

## Key Features 

[View PDF Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) - Open and display both the normal and the protected PDF files with AES and RC4 encryption.
[Annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/annotation/text-markup-annotation) - Annotate with text markup, shapes, stamps, ink, and sticky notes.Form filling and form designing can be done.
[Form Fields](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/forms/manage-form-fields/create-form-fields) - Form filling and form designing can be done.
[Signature](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/annotation/signature-annotation) - Hand-written and digital signatures are allowed.
[Toolbar](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/toolbar) - Built-in-toolbar and custom toolbars to perform user interaction of PDF Viewer functionalities.
[Navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/interactive-pdf-navigation/page) - Easy navigation with the help of bookmarks, thumbnails, hyperlinks, and table of contents.
[Magnification](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/magnification) - Fit to page, fit to width, and automatic (fits to the visible area).
[Search](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/text-search) - Search a text easily across the PDF document.
[Core Interactions](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/interaction-mode) - Allows scrolling, zooming, panning, selection, and page navigation.
[Print](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/print) - Print the entire document or a specific page directly from the browser.
[Globalization](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/globalization) - Provides inherent support to localize the UI.

## Supported web platforms

- [JavaScript (ES5)](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started)
- [JavaScript (ES6)](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started)
- [Angular](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started)
- [Vue](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started)
- [ASP.NET Core](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started)
- [ASP.NET MVC](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started)
- [Blazor](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/overview)