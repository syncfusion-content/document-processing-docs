---
layout: post
title: Control annotation visibility in React PDF Viewer | Syncfusion
description: Learn how to control the visibility of PDF annotations in the React PDF Viewer, ensuring annotations appear only in the viewer as needed.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Control annotation visibility in PDF Viewer

Overview

This guide explains how to control the visibility of PDF annotations in documents loaded and saved using the Syncfusion PDF Viewer in React, so annotations are visible only in the viewer when required.

Steps to control annotation visibility

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started/) to create a simple PDF Viewer sample.


**Step 2:**  Set Up Your React Component

Create an React component and update the template to include a button that triggers the download operation. Additionally, create a function to save the document with the PDF annotation flag set to `noView`.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import {PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer, Inject, DynamicStampItem, SignStampItem, StandardBusinessStampItem, DisplayMode
} from '@syncfusion/ej2-react-pdfviewer';

// Import PdfAnnotationFlag and PdfDocument from the Syncfusion PDF library.
import { PdfAnnotationFlag, PdfDocument} from '@syncfusion/ej2-pdf';

function App() {
    return (<div>
    <div className='control-section' style={{marginTop: '50px'}} >
    <button onClick={Save}>Download</button>
        <PdfViewerComponent id="container" documentPath="https://cdn.syncfusion.com/content/pdf/annotations-v1.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentLoad={documentLoaded} style={{ 'height': '640px' }}>
            <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner,PageOrganizer]}/>
        </PdfViewerComponent>
    </div>
</div>);
function Save() {
    // Get the PDF viewer instance
    var viewer = document.getElementById('container').ej2_instances[0];

    // Save the current PDF document as a Blob
    viewer.saveAsBlob().then((blob) => {
        const reader = new FileReader();
        reader.onload = function () {
            // Convert Blob to Base64 format
            const base64data = reader.result;

            const base64EncodedData = base64data.split('base64,')[1];
            const document1 = new PdfDocument(base64EncodedData);

            // Iterate through each page and its annotations
            for (let i = 0; i < document1.pageCount; i++) {
                const page = document1.getPage(i);
                for (let j = 0; j < page.annotations.count; j++) {
                    const annot = page.annotations.at(j);
                    // Set the PdfAnnotationFlag to noView to ensure annotations are only visible in our viewer
                    annot.flags |= PdfAnnotationFlag.noView;
                }
            }

            // Save the modified document as Blob
            document1.saveAsBlob().then((modifiedBlob) => {
                const internalReader = new FileReader();
                internalReader.onload = function () {
                    // Convert the modified Blob to Base64 format
                    const modifiedBase64 = internalReader.result;

                    // Create a download link for the modified PDF
                    const downloadLink = document.createElement('a');
                    downloadLink.href = modifiedBase64; // Set the href to the modified PDF data
                    downloadLink.download = 'modified.pdf'; // Set the filename for the download
                    downloadLink.click(); // Trigger the download
                };
                internalReader.readAsDataURL(modifiedBlob.blobData);
            });
        };
        reader.readAsDataURL(blob);
    });
};
}
function documentLoaded(args) {
    var viewer = document.getElementById('container').ej2_instances[0];
        //Code snippet to add basic annotations. You can also include other annotations as needed.
        viewer.annotation.addAnnotation("Highlight", {
            bounds: [{ x: 97, y: 610, width: 350, height: 14 }],
            pageNumber: 1
        });
        viewer.annotation.addAnnotation("Underline", {
            bounds: [{ x: 97, y: 723, width: 353.5, height: 14 }],
            pageNumber: 1
        });
        viewer.annotation.addAnnotation("Strikethrough", {
            bounds: [{ x: 97, y: 836, width: 376.5, height: 14 }],
            pageNumber: 1
        });
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

Following these steps ensures annotations are visible in the Syncfusion PDF Viewer while controlling their visibility in the downloaded PDF.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)