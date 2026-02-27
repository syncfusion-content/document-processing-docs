---
layout: post
title: Manage local storage in React PDF Viewer | Syncfusion
description: Learn how to control session-specific data storage in the React PDF Viewer using the enableLocalStorage property.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Manage local storage in PDF Viewer

The Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer exposes the `enableLocalStorage` property to control how session-specific viewer data is stored. Configure this property to choose between the viewer's internal storage mechanism (in-memory collection) and the browser's session storage.

### Using the `enableLocalStorage` property

Set `enableLocalStorage` to control whether the viewer preserves session data in an internal (in-memory) collection or uses browser session storage. When `enableLocalStorage` is `true`, the viewer keeps session data in memory for the current application session; when `false` (the default), session storage is used. Review memory implications before enabling in-memory storage for large documents or heavy interactive content.

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

### Considerations

- **Increased memory usage**: Enabling in-memory storage can increase memory consumption, especially for large documents or when many interactive elements (form fields, annotations) are present.
- **Dispose when unused**: Dispose or destroy the PDF Viewer instance when it is no longer required to avoid memory leaks, particularly when `enableLocalStorage` is `true`.
- **Default behavior**: The default value is `false`, which uses the browser session storage unless explicitly changed.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to/)