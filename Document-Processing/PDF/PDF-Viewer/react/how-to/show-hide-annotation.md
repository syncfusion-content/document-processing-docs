---
layout: post
title: Show or hide annotations in React PDF Viewer | Syncfusion
description: Learn how to toggle annotation visibility in the Syncfusion React PDF Viewer by exporting and importing annotations.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Show and hide annotations in PDF Viewer

## Overview

This guide shows how to temporarily hide annotations and restore them later in the React PDF Viewer. This is useful for presenting a clean view of the document while preserving annotation data for later use.

## How to show and hide annotations

**Step 1:** Create a basic React PDF Viewer sample using the [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) guide.

**Step 2:** Set up the React component and template

Add UI controls (for example, buttons) that trigger hide and unhide behaviors. The sample below exports annotations to an object, removes them from the viewer, and later imports them back to restore the annotations.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import {
    PdfViewerComponent,
    Toolbar,
    Magnification,
    Navigation,
    LinkAnnotation,
    BookmarkView,
    ThumbnailView,
    Print,
    TextSelection,
    Annotation,
    TextSearch,
    FormFields,
    FormDesigner,
    PageOrganizer,
    Inject
} from '@syncfusion/ej2-react-pdfviewer';

export class App extends React.Component {
    constructor() {
        super();
        this.pdfViewer = React.createRef();
        this.state = {
            exportObject: null
        };
    }

    hideAnnotations = () => {
        if (this.pdfViewer.current) {
            this.pdfViewer.current.exportAnnotationsAsObject().then((value) => {
                this.setState({ exportObject: value });
                this.pdfViewer.current.deleteAnnotations();
            });
        }
    }

    showAnnotations = () => {
        if (this.pdfViewer.current && this.state.exportObject) {
            this.pdfViewer.current.importAnnotation(JSON.parse(this.state.exportObject));
        }
    }

    render() {
        return (
            <div id="app">
                <div style={{ marginBottom: '10px' }}>
                    <button
                        id="hideBtn"
                        onClick={this.hideAnnotations}
                        style={{ marginRight: '10px' }}
                    >
                        Hide Annotations
                    </button>
                    <button
                        id="unhideBtn"
                        onClick={this.showAnnotations}
                    >
                        Show Annotations
                    </button>
                </div>
                <PdfViewerComponent
                    id="pdfViewer"
                    ref={this.pdfViewer}
                    resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                    style={{ 'height': '680px' }}
                >
                    <Inject services={[
                        Toolbar,
                        Magnification,
                        Navigation,
                        Annotation,
                        LinkAnnotation,
                        BookmarkView,
                        ThumbnailView,
                        Print,
                        TextSelection,
                        TextSearch,
                        FormFields,
                        FormDesigner,
                        PageOrganizer
                    ]} />
                </PdfViewerComponent>
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

These steps add the ability to toggle annotation visibility in a PDF Viewer application for selective viewing.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)