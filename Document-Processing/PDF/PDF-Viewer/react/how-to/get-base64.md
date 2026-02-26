---
layout: post
title: Get Base64 from loaded PDF in React PDF Viewer | Syncfusion
description: Learn how to retrieve the Base64 value of a loaded PDF in the Syncfusion React PDF Viewer using saveAsBlob and FileReader.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Retrieve Base64 from a PDF in PDF Viewer

### Overview

This guide shows how to obtain the Base64-encoded value of a PDF document loaded in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer using React. Producing a Base64 string is useful for sending the PDF to a server, embedding it in JSON payloads, or client-side processing.

### How to retrieve the Base64 value

**Step 1: Create the PDF Viewer sample**

Follow the [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) guide for the React PDF Viewer.

**Step 2: Set up the React component**

Create an React component and update the template to include a button that triggers conversion to a Base64 string. The samples below show both standalone and server-backed viewer configurations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    PdfViewerComponent,
    Toolbar,
    Magnification,
    Navigation,
    Annotation,
    TextSelection,
    TextSearch,
    FormFields,
    FormDesigner,
    PageOrganizer,
    Inject
} from '@syncfusion/ej2-react-pdfviewer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.viewerRef = React.createRef();
    }

    // Function to get Base64 of the loaded document
    base64ofloadedDocument = () => {
        this.viewerRef.current.saveAsBlob().then((blobData) => {
            const reader = new FileReader();
            reader.onload = () => {
                const base64data = reader.result;
                console.log(base64data);
            };
            reader.readAsDataURL(blobData);
        });
    };

    render() {
        return (
            <div>
                <div className='control-section' style={{ marginTop: '50px' }}>
                <button onClick={this.base64ofloadedDocument} style={{ marginTop: '20px' }}>
                    Get Base64
                </button>
                    <PdfViewerComponent
                        ref={this.viewerRef}
                        id="PdfViewer"
                        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                        resourceUrl= "https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib"
                        style={{ height: '640px' }}
                    >
                        <Inject services={[
                            Toolbar,
                            Magnification,
                            Navigation,
                            Annotation,
                            TextSelection,
                            TextSearch,
                            FormFields,
                            FormDesigner,
                            PageOrganizer
                        ]} />
                    </PdfViewerComponent>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    PdfViewerComponent,
    Toolbar,
    Magnification,
    Navigation,
    Annotation,
    TextSelection,
    TextSearch,
    FormFields,
    FormDesigner,
    PageOrganizer,
    Inject
} from '@syncfusion/ej2-react-pdfviewer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.viewerRef = React.createRef();
    }

    // Function to get Base64 of the loaded document
    base64ofloadedDocument = () => {
        this.viewerRef.current.saveAsBlob().then((blobData) => {
            const reader = new FileReader();
            reader.onload = () => {
                const base64data = reader.result;
                console.log(base64data);
            };
            reader.readAsDataURL(blobData);
        });
    };

    render() {
        return (
            <div>
                <div className='control-section' style={{ marginTop: '50px' }}>
                <button onClick={this.base64ofloadedDocument} style={{ marginTop: '20px' }}>
                    Get Base64
                </button>
                    <PdfViewerComponent
                        ref={this.viewerRef}
                        id="PdfViewer"
                        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                        serviceUrl= "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
                        style={{ height: '640px' }}
                    >
                        <Inject services={[
                            Toolbar,
                            Magnification,
                            Navigation,
                            Annotation,
                            TextSelection,
                            TextSearch,
                            FormFields,
                            FormDesigner,
                            PageOrganizer
                        ]} />
                    </PdfViewerComponent>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

### Conclusion

By implementing these steps in the React component, a PDF document loaded in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer can be converted into a Base64-encoded data URL when a button is clicked. This facilitates the manipulation or transfer of PDF data as needed.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)