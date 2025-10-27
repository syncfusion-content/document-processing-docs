---
layout: post
title: Show custom items in the Custom Stamp dropdown | Syncfusion
description: Learn how to display custom items in the Custom Stamp dropdown using customStampSettings in the Syncfusion React PDF Viewer.
control: PDF Viewer
platform: document-processing
documentation: ug
---


# Show custom items in the Custom Stamp dropdown

### Overview

Add and display custom items in the Custom Stamp dropdown using React. This enables users to quickly apply personalized stamps in the PDF Viewer.

### Steps to show custom items in the Custom Stamp dropdown

**Step 1:** Follow the steps in the [Get started with React PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) guide to create a sample.


**Step 2:** Configure custom stamp settings

Within the PDF Viewer setup, utilize `customStampSettings` to specify the custom stamps that should appear in the dropdown menu.

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

    render() {
        const customStampSettings = {
            isAddToMenu: true,
            customStamps: [
            {
                customStampName: 'Image1',
                customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
                },
            {
                customStampName: 'Image2',
                customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
                }
            ],
            enableCustomStamp: true,
            opacity: 1
        };

        return (
            <div>
                <div className='control-section' style={{ marginTop: '50px' }}>
                    <PdfViewerComponent
                        ref={this.viewerRef}
                        id="PdfViewer"
                        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                        customStampSettings={customStampSettings}
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

    render() {
        const customStampSettings = {
            isAddToMenu: true,
            customStamps: [
            {
                customStampName: 'Image1',
                customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
                },
            {
                customStampName: 'Image2',
                customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
                }
            ],
            enableCustomStamp: true,
            opacity: 1
        };

        return (
            <div>
                <div className='control-section' style={{ marginTop: '50px' }}>
                    <PdfViewerComponent
                        ref={this.viewerRef}
                        id="PdfViewer"
                        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                        serviceUrl= "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"
                        customStampSettings={customStampSettings}
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


Use `customStampSettings` to specify the custom stamps that should appear in the dropdown menu.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)