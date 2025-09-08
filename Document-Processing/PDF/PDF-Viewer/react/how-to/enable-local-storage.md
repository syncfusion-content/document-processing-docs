---
layout: post
title: Managing Local Storage in React Pdfviewer component | Syncfusion
description: Learn how to manage local storage in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Managing Local Storage in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer

The Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer provides the `enableLocalStorage` property, which allows you to control how session-specific data is stored. You can choose to store this data in an internal collection or rely on the default session storage.

### Using the enableLocalStorage Property

Set the `enableLocalStorage` property to manage whether the PDF Viewer uses session storage (default) or an internal collection. When set to `true`, session-specific data is kept in memory. Otherwise, session storage is used.

{% tabs %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  return (<div>
    <div className='control-section'>
      <PdfViewerComponent
        id="container"
        documentPath="PDF_Succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        style={{ 'height': '680px' }}
        // Enable or disable pinch zoom.
        enableLocalStorage = "true"
      >
        <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
          Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

### Impact and Considerations

- **Increased Memory Usage**: Setting `enableLocalStorage` to `true` can increase memory usage, particularly with larger documents or those containing many interactive elements, such as form fields and annotations.
- **Avoiding Memory Leaks**: It is crucial to properly dispose of the PDF Viewer instance when it's no longer needed to prevent memory leaks, especially when using in-memory storage.
- **Default Behavior**: By default, this property is set to `false`, meaning the session storage mechanism is utilized unless explicitly changed.

### Enhanced Control

Leveraging the `enableLocalStorage` property provides greater flexibility in managing how data is stored during a session, allowing you to optimize performance and storage based on your application’s specific requirements.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to/)