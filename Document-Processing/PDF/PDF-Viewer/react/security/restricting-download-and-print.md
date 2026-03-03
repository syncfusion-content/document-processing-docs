---
layout: post
title: Restrict download or print in React PDF Viewer | Syncfusion
description: Learn how to prevent end users from downloading or printing PDFs displayed by the EJ2 React PDF Viewer using toolbar and events.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Restrict download or print in React PDF Viewer

## Overview

This guide shows how to prevent end users from downloading and printing PDFs displayed by the EJ2 React PDF Viewer.

**Outcome:** The Download and print button are removed from the primary toolbar and any download or print attempt is blocked by the [`downloadStart`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#downloadstart) and [`printStart`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#printstart) event handlers.

## Prerequisites
- EJ2 React PDF Viewer installed and basic viewer setup completed. See [getting started guide](../getting-started)

## Steps

### 1. Hide the Download and print button in the primary toolbar

The viewer toolbar items are controlled by [`toolbarSettings.toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarsettings#toolbaritems). Omit `DownloadOption` and `PrintOption` from that array to remove the Download and print button from the primary toolbar. See [primary toolbar customization](../toolbar-customization/primary-toolbar) for code examples.

### 2. Block download with the `downloadStart` event

The viewer raises the [`downloadStart`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#downloadstart) event whenever a download is initiated. Add an event handler and set `args.cancel = true` to block the operation regardless of how it was triggered (toolbar, API, or custom UI).

### 3. Block download with the `printStart` event

The viewer triggers the [`printStart`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#printstart) event whenever a print action is initiated. Attach an event handler to the event and set `args.cancel = true` to block the operation regardless of how it was triggered.

**Complete Example**:

The following is a complete, runnable React example that cancels every download or print attempt.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
    ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner,
    PageOrganizer, Inject, Print
} from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    const onDownloadStart = (args: any) => {
        // Cancels every download attempt
        args.cancel = true;
        console.log('Download restricted.');
    };
    const onPrintStart = (args: any) => {
        // Cancels every print attempt
        args.cancel = true;
        console.log('Print restricted.');
    };

    return (
        <div style={{ height: '640px' }}>
            <PdfViewerComponent
                id="pdf-viewer"
                documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                resourceUrl="https://cdn.syncfusion.com/ej2/32.2.5/dist/ej2-pdfviewer-lib"
                downloadStart={onDownloadStart}
                printStart={onPrintStart}
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

**Expected result**:

- Any programmatic or UI-triggered download attempts are canceled by the `downloadStart` handler; no file is downloaded.

## Troubleshooting

- If the Download or print button is still visible, remove `DownloadOption` and `PrintOption` from [`toolbarSettings.toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarsettings#toolbaritems), and ensure no custom toolbar rendering inserts the Download control.

- If downloads still occur despite the handler, confirm `downloadStart={onDownloadStart}` is present on `PdfViewerComponent` and that the handler sets `args.cancel = true`.

- If print still occurs despite the handler, confirm `printStart={onPrintStart}` is present on `PdfViewerComponent` and that the handler sets `args.cancel = true`.

## Related topics

- [Customize primary toolbar](../toolbar-customization/primary-toolbar)
- [`downloadStart` event reference](../events#downloadstart)
- [`printStart` event reference](../events#printstart)