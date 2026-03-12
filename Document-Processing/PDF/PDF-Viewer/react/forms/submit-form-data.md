---
layout: post
title: Submit PDF Form Data to a Server using React PDF Viewer | Syncfusion
description: Submit filled PDF form data from the EJ2 React PDF Viewer to a backend server, with a complete frontend example and a minimal Node receiver.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Submit PDF Form Data to a Server in React

## Overview

The React PDF Viewer allows submitting filled form data like text fields, checkboxes, radio buttons and dropdown values to a back end server for processing. This guide shows how to extract form data from the viewer and **post** it as `JSON` to a server endpoint.

## Prerequisites

- EJ2 React PDF Viewer installed and configured in your React app
- PDF contains interactive form fields
- The viewer must be loaded before reading values
- If posting cross-origin, ensure CORS is enabled on the server

## Steps to send data

1. Enable form designer in the viewer

   - Inject `FormFields` and [`FormDesigner`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formdesigner) services into the viewer so form APIs are available.

2. Export form data from the viewer

   - Use [`viewer.exportFormFieldsAsObject()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#exportformfieldsasobject) to obtain the filled values as JSON.

3. POST the exported JSON to your back end

   - Use `fetch` to send the JSON. The server must accept `application/json` and handle CORS if cross-domain.

4. Trigger submission from a UI action

   - Call the export + POST flow from a button click or form submit handler.

## Example

This full example shows a React component with the PDF viewer and a Submit button that sends form data to `/api/submit-form`.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
    ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner,
    PageOrganizer, Inject, Print
} from '@syncfusion/ej2-react-pdfviewer';
import { RefObject, useRef } from 'react';

export default function SubmitFormExample() {
    const viewerRef: RefObject<PdfViewerComponent> = useRef<PdfViewerComponent>(null);

    const sendToServer = async (formData: any) => {
        // Adjust URL to your server endpoint
        const res = await fetch('/api/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if (!res.ok) {
            throw new Error(`Server error ${res.status}`);
        }
    };

    const handleSubmit = async () => {
        try {
            // exportFormFields returns a Promise resolving to form data object
            const formData = await viewerRef.current.exportFormFieldsAsObject();
            await sendToServer(formData);
            console.log('Form data submitted successfully.');
        } catch (err) {
            console.error(err);
            console.log('Submission failed: ' + (err as Error).message);
        }
    };

    return (
        <div style={{ height: '640px' }}>
            <div style={{ marginBottom: '8px' }}>
                <button onClick={handleSubmit}>Submit form data</button>
            </div>
            <PdfViewerComponent
                id="pdfViewer"
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.5/dist/ej2-pdfviewer-lib"
                style={{ height: '100%' }}>
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                    BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Print]} />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Troubleshooting

- **No form values returned**: Ensure the PDF has interactive fields and the viewer has finished loading before calling [`exportFormFieldsAsObject()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#exportformfieldsasobject).
- **CORS errors**: Enable CORS on the server or serve both frontend and back end from the same origin during testing.
- **Server rejects payload**: Confirm the server expects `application/json` and validates shape of the object.
- **WASM or resource errors**: Ensure [`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resourceurl) points to the correct Syncfusion PDF Viewer library files.

## Use cases

- Enable remote verification and approval workflows by sending submitted form data to a back end service for review and sign-off.
- Store submitted form responses in a database to persist user inputs for auditing, reporting, or later retrieval.
- Trigger workflow automation and downstream processing by sending form data to business systems or server less functions.
- Merge submitted values into a final flattened PDF on the server to produce a non-editable document that combines the form data with the original PDF.

## Related topics

- [`exportFormFieldsAsObject` API reference](./form-fields-api#exportformfieldsasobject)
- [Export form data as object](./import-export-form-fields/export-form-fields#export-as-object)