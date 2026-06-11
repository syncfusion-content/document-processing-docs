---
layout: post
title: Get page info in React PDF Viewer | Syncfusion
description: Learn how to retrieve page height, width, and rotation using getPageInfo in the Syncfusion React PDF Viewer.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Get page info in React PDF Viewer

The `getPageInfo()` method returns metadata for a specified page in the viewer, such as `height`, `width`, and `rotation`. `pageIndex` is zero-based. Call `getPageInfo()` after the viewer is ready to ensure page data is available (for example, in `ngAfterViewInit` or after the document has been loaded).

The following example retrieves and logs the page dimensions and rotation for a specified page.

**Step 1:** Follow the steps provided in the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF Viewer sample.

**Step 2:** The following code snippet implements retrieval of height, width, and rotation for a specified page in the viewer.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import React from 'react';
import ReactDOM from 'react-dom';
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

    retrievePageInfo = () => {
        // Set the page index for which info is required
        const pageIndex = 0;
        const pdfviewer = this.viewerRef.current;

        if (pdfviewer) {
            // To Retrieve and log the page information
            console.log(pdfviewer.getPageInfo(pageIndex));
            // To Log the specific page information details to the console
            const pageInfo = pdfviewer.getPageInfo(pageIndex);
            if (pageInfo) {
                console.log(`Page Info for Page Index ${pageIndex}:`);
                console.log(`Height: ${pageInfo.height}`);
                console.log(`Width: ${pageInfo.width}`);
                console.log(`Rotation: ${pageInfo.rotation}`);
            }
        }
    }

    render() {
        return (
            <div>
                <div className='control-section' style={{ marginTop: '50px' }}>
                <button onClick={this.retrievePageInfo} style={{ marginTop: '20px' }}>
                GetPageInfo
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
{% endtabs %}

By following these steps, the page info API can be integrated and used in the EJ2 PDF Viewer.

[View Sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)