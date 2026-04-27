---
layout: post
title: Import form data in the React PDF Viewer component | Syncfusion
description: Learn how to import PDF form field data (FDF, XFDF, JSON, and from an object) using the Syncfusion React PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import PDF Form Data into the React PDF Viewer

This guide shows how to import form field values into an already loaded PDF in the EJ2 React PDF Viewer. **Supported import formats**: FDF, XFDF, JSON, and importing from a JavaScript object.

## Steps to import data

1. Import the viewer, inject `FormFields` / `FormDesigner` services, and create a `ref` to call `importFormFields`.

2. Call [`importFormFields(data, format)`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#importformfields) where `format` is one of `FormFieldDataFormat.Fdf`, `FormFieldDataFormat.Xfdf`, or `FormFieldDataFormat.Json`. `data` may be a file path (for server/file-based imports) / base64 string or a JavaScript object mapping field names to values.

3. Verify the form fields are populated after the import completes. For server-backed imports, ensure [`serviceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#serviceurl) is configured and the import file is accessible by the server.

## Example

The example below provides a minimal React app with four buttons to import FDF, XFDF, JSON, or an object. Replace the import file identifiers (`'File'`) with your file path or implement a file upload to pass a Blob/stream.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}
import { RefObject, useRef } from 'react';
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
    ThumbnailView, BookmarkView, TextSelection, FormFields, FormDesigner, Inject,
    PageOrganizer, Print, FormFieldDataFormat
} from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    const viewerRef: RefObject<PdfViewerComponent> = useRef(null);

    // The file for importing should be accessible at the given path or as a base 64 string depending on your integration
    const importFdf = () => viewerRef.current?.importFormFields('File', FormFieldDataFormat.Fdf);
    const importXfdf = () => viewerRef.current?.importFormFields('File', FormFieldDataFormat.Xfdf);
    const importJson = () => viewerRef.current?.importFormFields('File', FormFieldDataFormat.Json);
    // Import from a JavaScript object (fieldName: value)
    const importFromObject = () => {
        const formDataObject = {
            'fullname': 'Jane Doe',
            'email': 'jane.doe@example.com',
            'agreeTerms': 'yes'
        };
        viewerRef.current?.importFormFields(JSON.stringify(formDataObject), FormFieldDataFormat.Json);
    };

    return (
        <div>
            <div style={{ marginBottom: 12 }}>
                <button onClick={importFdf} style={{ marginRight: 8 }}>Import FDF</button>
                <button onClick={importXfdf} style={{ marginRight: 8 }}>Import XFDF</button>
                <button onClick={importJson} style={{ marginRight: 8 }}>Import JSON</button>
                <button onClick={importFromObject}>Import from Object</button>
            </div>

            <PdfViewerComponent
                id="pdfViewer"
                style={{ height: '680px', width: '100%' }}
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                // For server-backed viewer uncomment and set your service URL
                // serviceUrl="http://localhost:5262/pdfviewer"
                resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
            >
                <Inject services={
                    [ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
                    ThumbnailView, BookmarkView, TextSelection, FormFields, FormDesigner,
                    PageOrganizer, Print ]} />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

**Expected result**: The loaded PDF's interactive form fields are populated with the values from the imported file/object. For object imports, fields matching the object keys receive the provided values.

## Troubleshooting

- If imports do not populate fields, confirm the field names in the source match the PDF form field names.
- For file-based imports, ensure you use server mode and that the import file is accessible to the viewer.
- If using a Blob, pass the encoded base64 string of Blob/stream instead of the string `'File'`.
- Check browser console for network errors when the viewer attempts to fetch import files.

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Export form fields](./export-form-fields)
- [Import Export Events](./import-export-events)
- [Create Edit form fields](../overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)