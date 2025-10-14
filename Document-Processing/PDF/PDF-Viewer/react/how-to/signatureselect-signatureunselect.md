---
layout: post
title: Signature selection events in React PDF Viewer component | Syncfusion
description: Learn here all about signatureSelect and signatureUnselect event in Syncfusion React PDF Viewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# SignatureSelect and SignatureUnselect event

The Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer provides event-handling capabilities for various actions, including selecting and unselecting handwritten signatures. The `signatureSelect` and `signatureUnselect` events enable developers to programmatically manage the selection state of signatures within the PDF Viewer component.

**signatureSelect**

The `signatureSelect` event triggers when a handwritten signature annotation is selected. This event allows developers to capture the signature selection and handle it programmatically, such as updating the UI or storing the selection data for further processing.

**signatureUnselect**

The `signatureUnselect` event triggers when a handwritten signature annotation is unselected. This event enables developers to manage the unselection programmatically, which can be useful for tasks like cleanup operations or updating the application's state to reflect that a signature is no longer selected.

The code snippet demonstrates how to subscribe to the `signatureSelect` and `signatureUnselect` events in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer component.

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

The `signatureSelect` and `signatureUnselect` events in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer offer robust options for managing the state of handwritten signatures within your application. By handling these events, developers can create a more interactive and dynamic user experience, responding programmatically to signature selection and unselection.

[View sample in GitHub]()