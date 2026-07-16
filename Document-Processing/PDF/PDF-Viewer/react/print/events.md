---
layout: post
title: Print Events in React PDF Viewer | Syncfusion
description: Learn how to subscribe to print events and implement print workflows in the Syncfusion React PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Print events in React PDF Viewer

This page lists each event emitted by the React PDF Viewer's [`Print`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/print) feature, the argument schema, and the minimal behavior notes needed for implementation.

## Events

| Name         | Description |
|--------------|-------------|
| [`printStart`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#printstart) | Raised when a print action begins. Use the event to log activity or cancel printing. |
| [`printEnd`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#printend) | Raised after a print action completes. Use the event to notify users or clean up resources. |

### `printStart`

This event is emitted when printing is initiated by the toolbar or through a programmatic API. Use this event to validate prerequisites, record analytics, or cancel printing.

**Arguments** - ([`PrintStartEventArgs`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/printstarteventargs)):

- `fileName` - The document file name being printed.
- `cancel` - Default: `false`. Set to `true` to cancel the print operation.

Setting `args.cancel = true` prevents the client-side print flow; for server-backed printing it prevents the service request that produces print output. Find the code example [here](../security/restricting-download-and-print#3-block-print-with-the-printstart-event)

**Minimal usage example:**

{% highlight ts %}
{% raw %}
<PdfViewerComponent
    id="PdfViewer"
    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
    printStart={(args: PrintStartEventArgs) => {
        console.log('Print action has started for file: ' + args.fileName);
    }}
    style={{ height: '100%' }}
>
    <Inject
        services={[
            TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification,
            Annotation, FormDesigner, FormFields
        ]}
    />
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}

### `printEnd`

This event is emitted after the printing completes. Use this event to finalize analytics, clear temporary state, or notify users. For client-side printing, the event fires after the browser's print dialog closes; for server-backed printing, it fires once the service finishes producing the print output.

**Arguments** - ([`PrintEndEventArgs`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/printendeventargs)):

- `fileName` - The printed document name.

**Minimal usage example:**

{% highlight ts %}
{% raw %}
<PdfViewerComponent
    id="PdfViewer"
    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib"
    printEnd={(args: PrintEndEventArgs) => {
        console.log('Printed file name: ' + args.fileName);
    }}
    style={{ height: '100%' }}
>
    <Inject
        services={[
            TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification,
            Annotation, FormDesigner, FormFields
        ]}
    />
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}

## See also

- [Overview](./overview)
- [Print quality](./print-quality)
- [Enable print rotation](./enable-print-rotation)
- [Print modes](./print-modes)