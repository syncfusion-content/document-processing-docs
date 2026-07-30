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

### Overview

The `getPageInfo()` method returns metadata for a specified page in the React PDF Viewer, such as `height`, `width`, and `rotation`. Use it when you need to read the rendered size or orientation of a page, for example to align overlays, custom toolbars, or to validate the loaded document.

**Parameter**

| Parameter | Type | Description |
| --- | --- | --- |
| `pageIndex` | `number` | Zero-based index of the page. Must be in the range `0` to `pageCount - 1`. Passing an index outside this range returns `undefined`. |

**Return value**

The method returns a `PageInfo` object with the following fields:

| Property | Type | Description |
| --- | --- | --- |
| `height` | `number` | Page height in points (1 point = 1/72 inch). |
| `width` | `number` | Page width in points. |
| `rotation` | `number` | Page rotation in degrees. Valid values are `0`, `90`, `180`, and `270`. |

Call `getPageInfo()` only after the document has finished loading (for example, inside the `documentLoaded` event handler) to ensure page data is available. Calling it before the document is loaded returns `undefined`.

### How to retrieve page info

The following example retrieves and logs the page dimensions and rotation for a specified page.

**Step 1: Create the PDF Viewer sample**

Follow the [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) guide for the React PDF Viewer.

**Step 2: Set up the React component**

Update the `src/index.js` (or `src/App.js`) template to include a button that retrieves and logs the page info for a specified page. The samples below show both standalone and server-backed viewer configurations.

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

    // Retrieve and log the page information for the specified page
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

### Conclusion

By implementing these steps in the React component, you can retrieve the height, width, and rotation of any page loaded in the React PDF Viewer when a button is clicked or once the `documentLoaded` event fires. This enables inspection of page metadata for further client-side processing.

### Troubleshooting

- **`getPageInfo()` returns `undefined`** — Ensure the call is made after the `documentLoaded` event has fired, or invoke it from a user action that occurs after the viewer is ready.
- **Invalid `pageIndex`** — Confirm the index is within the range `0` to `pageCount - 1`. Use the `pageCount` property to check the total number of pages.
- **Resource loading errors (Standalone)** — Verify the `resourceUrl` matches the version of the `@syncfusion/ej2-react-pdfviewer` package installed in your project.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)