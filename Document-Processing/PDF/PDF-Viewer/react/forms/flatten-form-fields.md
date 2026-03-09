---
layout: post
title: Flatten PDF form fields in React PDF Viewer | Syncfusion
description: Learn hoow to flatten interactive PDF form fields before download or save-as in EJ2 React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Flatten PDF form fields in React

## Overview

Flattening PDF forms converts interactive fields such as textboxes, dropdowns, checkboxes, signatures, etc., into non‑editable page content. Use this when you want to protect filled data, finalize a document, or prepare it for secure sharing.

## Prerequisites

- EJ2 React PDF Viewer installed and configured
- Basic viewer setup completed with toolbar and page organizer services injected. For more information, see [getting started guide](../getting-started)

## Flatten forms before downloading PDF

1. Add a ref to the `PdfViewerComponent` so you can access viewer APIs from event handlers.
2. Intercept the download flow using `downloadStart` and cancel the default flow.
3. Retrieve the viewer's blob via `saveAsBlob()` and convert the blob to base64.
4. Use `PdfDocument` from Syncfusion PDF Library to open the document, set `field.flatten = true` for each form field, then save.
5. For the flattening the form fields when downloading through *Save As* option in Page Organizer, repeat steps 2–4 by using `pageOrganizerSaveAs` event.

## Complete example

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
    ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner,
    PageOrganizer, Inject, Print, PageOrganizerSaveAsEventArgs, DownloadStartEventArgs
} from '@syncfusion/ej2-react-pdfviewer';
import { PdfDocument, PdfField } from '@syncfusion/ej2-pdf';
import { RefObject, useRef } from 'react';

export default function App() {
    const viewerRef: RefObject<PdfViewerComponent> = useRef(null);

    const blobToBase64 = async (blob: Blob): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = () => reject(reader.error);
            reader.onload = () => {
                const dataUrl: string = reader.result as string;
                const data: string = dataUrl.split(',')[1];
                resolve(data);
            };
            reader.readAsDataURL(blob);
        });
    }

    const flattenFormFields = (data: string) => {
        let document: PdfDocument = new PdfDocument(data);
        for (let index = 0; index < document.form.count; index++) {
            let field: PdfField = document.form.fieldAt(index);
            field.flatten = true;
        }
        // If both annotations and form fields needs to be flattened, use
        // document.flatten = true
        document.save(`${viewerRef.current.fileName}.pdf`);
        document.destroy();
    }

    const handleFlattening = async () => {
        const blob: Blob = await viewerRef.current.saveAsBlob();
        const data: string = await blobToBase64(blob);
        flattenFormFields(data);
    }

    const onDownloadStart = async (args: DownloadStartEventArgs) => {
        args.cancel = true;
        handleFlattening();
    };

    const onPageOrganizerSaveAs = async (args: PageOrganizerSaveAsEventArgs) => {
        args.cancel = true;
        handleFlattening()
    };

    return (
        <div style={{ height: '640px' }}>
            <PdfViewerComponent
                id="pdf-viewer"
                ref={viewerRef}
                documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.5/dist/ej2-pdfviewer-lib"
                pageOrganizerSaveAs={onPageOrganizerSaveAs}
                downloadStart={onDownloadStart}
            >
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView,
                    BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer, Print]} />
            </PdfViewerComponent>
        </div>
    );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Expected result

- The downloaded or "Save As" PDF will contain the visible appearance of filled form fields as static, non-editable content.
- Form fields will no longer be interactive or editable in common PDF readers.

## Troubleshooting

- If viewerRef is null, ensure `ref={viewerRef}` is present and the component has mounted before invoking `saveAsBlob()`.
- Missing `resourceUrl`: If viewer resources are not reachable, set `resourceUrl` to the correct CDN or local path for the ej2-pdfviewer-lib.

## Related topics

- [`downloadStart` event reference](../events#downloadstart)
- [`pageOrganizerSaveAs` event reference](../events#pageorganizersaveas)
- [Form Designer in React PDF Viewer](./form-designer)