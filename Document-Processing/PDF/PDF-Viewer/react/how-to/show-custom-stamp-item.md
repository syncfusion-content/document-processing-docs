---
layout: post
title: Displaying Custom Items in React Pdfviewer component | Syncfusion
description: Learn how to display custom items in the custom stamp Dropdown in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Toolbar
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---


# Displaying Custom Items in Custom Stamp Dropdown

### Overview

This guide explains how to add and display custom items in the custom stamp dropdown menu of Syncfusion's PDF Viewer using React. This feature allows users to easily access and apply custom stamps to their PDF documents.

### Steps to Show Custom Items in Custom Stamp Dropdown

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF Viewer sample.


**Step 2:** Configure Custom Stamp Settings

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
                        resourceUrl="https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib"
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


By following these instructions, you can successfully configure to display custom items in the custom stamp dropdown, allowing users to easily apply personalized stamps to their documents.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)