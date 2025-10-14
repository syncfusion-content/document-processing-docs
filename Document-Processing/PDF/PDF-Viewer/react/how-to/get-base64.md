---
layout: post
title: Retrieving Base64 Value in React Pdfviewer component | Syncfusion
description: Learn here all about how to retrieve the Base64 value in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Toolbar
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Retrieving Base64 Value from a PDF in PDF Viewer

### Overview

This guide demonstrates how to fetch the base64-encoded value of a PDF document loaded in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer using React. This is useful for sending the PDF as a base64 string or processing it in the front end.

### How to Retrieve Base64 Value

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF Viewer sample.


**Step 2:** Set Up Your React Component

Create a React component and set up the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer. Add a button to trigger the conversion to a base64 string.

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

By implementing these steps in your React application, you can convert a PDF document loaded in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer to a base64 string upon button click. This facilitates the manipulation or transfer of PDF data as needed.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)