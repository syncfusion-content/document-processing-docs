---
layout: post
title: Handle signatureSelect and signatureUnselect events | Syncfusion
description: Learn how to handle signatureSelect and signatureUnselect events in the Syncfusion React PDF Viewer to manage handwritten signature selection state.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Handle signatureSelect and signatureUnselect events

Use the [signatureSelect](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#signatureselect) and [signatureUnselect](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#signatureunselect) events to manage the selection state of handwritten signatures in the PDF Viewer.

**signatureSelect**

Triggered when a handwritten signature annotation is selected. Use this event to capture selection and update the UI or store state.

**signatureUnselect**

Triggered when a handwritten signature annotation is unselected. Use this event to handle cleanup or update application state.

The following code demonstrates how to subscribe to these events:

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
         PageOrganizer, Inject} from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {

    function signatureSelect(args){
        console.log('Signature selected:', args);
    };
    function signatureUnselect(args){
        console.log('Signature unselected:', args);
    }
  return (<div>
    <div className='control-section'>
     {/* Render the PDF Viewer */}
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
        signatureSelect={signatureSelect}
        signatureUnselect={signatureUnselect}
        style={{ 'height': '640px' }}>
              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                             ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner,PageOrganizer ]}/>
      </PdfViewerComponent>
    </div>
  </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
         PageOrganizer, Inject} from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {

    function signatureSelect(args){
        console.log('Signature selected:', args);
    };
    function signatureUnselect(args){
        console.log('Signature unselected:', args);
    };
  return (<div>
    <div className='control-section'>
     {/* Render the PDF Viewer */}
      <PdfViewerComponent
        ref={(scope) => { pdfviewer = scope; }}
        id="container"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
        signatureSelect={signatureSelect}
        signatureUnselect={signatureUnselect}
        style={{ 'height': '640px' }}>
              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                             ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer ]}/>
      </PdfViewerComponent>
    </div>
  </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

These events enable robust management of handwritten signature state, supporting interactive and dynamic user experiences.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)