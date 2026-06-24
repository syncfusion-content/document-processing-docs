---
layout: post
title: Export form data in the React PDF Viewer component | Syncfusion
description: Learn how to export PDF form field data (FDF, XFDF, JSON, and as an object) using the Syncfusion React PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Export PDF Form Data from React PDF Viewer

This guide shows concise, actionable steps to export PDF form field data for storage or integration. It covers:

- Exporting as [FDF](#3-export-as-fdf), [XFDF](#4-export-as-xfdf), and [JSON](#5-export-as-json) using [`exportFormFields()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#exportformfields).
- Exporting as a [JavaScript object](#6-export-as-a-javascript-object) using [`exportFormFieldsAsObject()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#exportformfieldsasobject).

## Steps

### 1. Configure the PDF Viewer 

Install and import the viewer with required services.

{% highlight ts %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
    ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner,
    PageOrganizer, Inject, Print, FormFieldDataFormat
} from '@syncfusion/ej2-react-pdfviewer';
import { RefObject, useRef } from 'react';
{% endhighlight %}

### 2. Initialize ref 

Initialize the viewer with a `ref` so you can call export methods.

{% highlight ts %}
const viewerRef: RefObject<PdfViewerComponent> = useRef(null);
{% endhighlight %}

### 3. Export as FDF

Use [`exportFormFields(destination?, FormFieldDataFormat.Fdf)`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#exportformfields) to download an FDF file.

{% highlight ts %}
viewerRef.current?.exportFormFields('FormData', FormFieldDataFormat.Fdf);
{% endhighlight %}

### 4. Export as XFDF

Use [`FormFieldDataFormat.Xfdf`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formfielddataformat) to export XFDF.

{% highlight ts %}
viewerRef.current?.exportFormFields('FormData', FormFieldDataFormat.Xfdf);
{% endhighlight %}

### 5. Export as JSON

Use [`FormFieldDataFormat.Json`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formfielddataformat) to export form data as a JSON file.

{% highlight ts %}
viewerRef.current?.exportFormFields('FormData', FormFieldDataFormat.Json);
{% endhighlight %}

### 6. Export as a JavaScript object

Use [`exportFormFieldsAsObject(format)`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#exportformfieldsasobject) to get data for API calls or storing in a database.

{% highlight ts %}
const data = await viewerRef.current?.exportFormFieldsAsObject();
{% endhighlight %}

## Complete example

The example below provides a single page with buttons to export in all supported formats. It uses the same imports shown above and is ready to run in a typical React app.

{% tabs %}
{% highlight js %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
    ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner,
    PageOrganizer, Inject, Print, FormFieldDataFormat
} from '@syncfusion/ej2-react-pdfviewer';
import { RefObject, useRef } from 'react';

export default function App() {
    const viewerRef: RefObject<PdfViewerComponent> = useRef(null);

    const onExportFdf = () => {
        viewerRef.current?.exportFormFields('FormData', FormFieldDataFormat.Fdf);
    };

    const onExportXfdf = () => {
        viewerRef.current?.exportFormFields('FormData', FormFieldDataFormat.Xfdf);
    };

    const onExportJson = () => {
        viewerRef.current?.exportFormFields('FormData', FormFieldDataFormat.Json);
    };

    const onExportObject = async () => {
        const data = await viewerRef.current?.exportFormFieldsAsObject();
        console.log('Exported object:', data);
    };

    return (
        <div className='control-section'>
            <div style={{ marginBottom: 12 }}>
                <button onClick={onExportFdf} id="exportFdf">Export FDF</button>
                <button onClick={onExportXfdf} id="exportXfdf">Export XFDF</button>
                <button onClick={onExportJson} id="exportJson">Export JSON</button>
                <button onClick={onExportObject} id="exportObj">Export Object</button>
            </div>
            <PdfViewerComponent
                ref={viewerRef}
                id="container"
                documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                style={{ height: '680px' }}
            >
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, TextSelection, FormFields, FormDesigner, TextSearch, PageOrganizer, Print]} />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples)

## Troubleshooting

- Ensure `FormFields` and [`FormDesigner`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/formdesigner) services are injected when using form APIs.
- Confirm [`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resourceurl) points to the matching `ej2-pdfviewer-lib` version.
- If exports fail in restrictive browsers, check popup/download settings and CORS for hosted endpoints.
- For server-side persistence, use [`exportFormFieldsAsObject()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#exportformfieldsasobject) and send the result to your API.

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Import form fields](./import-form-fields)
- [Import Export Events](./import-export-events)
- [Create form fields](../overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)