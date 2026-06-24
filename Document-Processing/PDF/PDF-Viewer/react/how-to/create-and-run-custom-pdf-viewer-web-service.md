---
layout: post
title: Create and Run a Custom PDF Viewer Web Service | Syncfusion
description: Learn how to set up and run a custom PDF Viewer web service for the Syncfusion React PDF Viewer component.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Create and Run a Custom PDF Viewer Web Service

This guide explains how to set up and run your own PDF Viewer web service for use with the server-backed React PDF Viewer component.

## Prerequisites

- .NET SDK 6.0 or 8.0 installed on your machine
- Basic knowledge of ASP.NET Core

## Steps to Set Up the Web Service

### Step 1: Download the Web Service Sample

Download the sample from the [Web service sample in GitHub](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) repository.

### Step 2: Navigate to the ASP.NET Core Folder

Open the downloaded sample and navigate to the `ASP.NET Core` folder using your command prompt or terminal.

### Step 3: Select Your .NET Version

Navigate to the appropriate subfolder based on your .NET version:

- For .NET 6.0 → `PdfViewerWebService_6.0`
- For .NET 8.0 → `PdfViewerWebService_8.0`

### Step 4: Restore Required Packages

Run the following command to restore the required NuGet packages:

```bash
dotnet restore
```

### Step 5: Run the Web Service

Start the web service using the following command:

```bash
dotnet run
```

### Step 6: Verify the Service is Running

The PDF Viewer server instance will run on `localhost:5001`. You can verify it by navigating to `http://localhost:5001/pdfviewer` in your browser, which returns the default GET response.

## Configure Your React Application

Once your web service is running, configure your React PDF Viewer component to use the local service URL:

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
      <PdfViewerComponent
        id="container"
        documentPath="PDF_Succinctly.pdf"
        serviceUrl="https://localhost:5001/pdfviewer"
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
        documentPath="PDF_Succinctly.pdf"
        serviceUrl="https://localhost:5001/pdfviewer"
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

## Additional Resources

- [GitHub Web Service Examples](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices)
- [Docker Image for PDF Viewer Server](https://hub.docker.com/r/syncfusion/pdfviewer-server)

N> For production deployment, ensure you configure proper security, CORS policies, and hosting settings for your web service.
