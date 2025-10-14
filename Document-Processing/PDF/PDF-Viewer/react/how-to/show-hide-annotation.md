---
layout: post
title: Show and Hide Annotations in React Pdfviewer component | Syncfusion
description: Learn here all about how to show and hide annotations in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Pdfviewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Show and Hide Annotations in PDF Viewer

### Overview

This guide demonstrates how to toggle the visibility of annotations in the Syncfusion PDF Viewer component for React. This functionality is useful when you need to temporarily hide annotations for a cleaner view or show them again for collaborative review.

### How to Show and Hide Annotations

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Set Up Your React Component with Annotation Toggle Functionality

Create a React component that includes the Syncfusion PDF Viewer and buttons to show and hide annotations. The sample uses the standalone version of the PDF Viewer with the `resourceUrl` property pointing to the CDN, eliminating the need for a backend service. The implementation leverages the `exportAnnotationsAsObject`, `deleteAnnotations`, and `importAnnotation` methods to manage the annotations. Here is a sample implementation:

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
                    resourceUrl="https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib"
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

The ability to show and hide annotations provides users with a more flexible viewing experience. By implementing this functionality, you can allow users to focus on the document content without distractions when needed, and bring back annotations for collaborative review.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)