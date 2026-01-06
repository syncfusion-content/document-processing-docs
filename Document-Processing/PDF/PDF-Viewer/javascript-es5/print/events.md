---
layout: post
title: Print Events in JavaScript PDF Viewer | Syncfusion
description: Learn how to configure print events and track usage and implements workflows in the Syncfusion JavaScript PDF Viewer component.
platform: document-processing
control: Print
documentation: ug
domainurl: ##DomainURL##
---

# Print events in JavaScript PDF Viewer

Subscribe to print life cycle events to track usage and implement custom workflows.

| Name         | Description |
|--------------|-------------|
| `printStart` | Raised when a print action begins. Use the event to log activity or cancel printing. |
| `printEnd`   | Raised after a print action completes. Use the event to notify users or clean up resources. |

## printStart event
The [`printStart`](https://ej2.syncfusion.com/documentation/api/pdfviewer#printstart) event runs when printing starts from the toolbar or from code. Use it to validate prerequisites or cancel the action.

### Event arguments
Review [`PrintStartEventArgs`](https://ej2.syncfusion.com/documentation/api/pdfviewer/printStartEventArgs) for details such as `fileName` and the `cancel` option.

The following example logs the file that is being printed and shows how to cancel the operation.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    printStart: function(args) {
        console.log('Print action has started for file: ' + args.fileName);
        // To cancel the print action
        // args.cancel = true;
    }
});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/',
    printStart: function(args) {
        console.log('Print action has started for file: ' + args.fileName);
        // To cancel the print action
        // args.cancel = true;
    }
});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## printEnd event
The [`printEnd`](https://ej2.syncfusion.com/documentation/api/pdfviewer#printend) event triggers after printing completes. Use it to finalize analytics or inform users that printing finished.

### Event arguments
See [`PrintEndEventArgs`](https://ej2.syncfusion.com/documentation/api/pdfviewer/printEndEventArgs) for available values such as `fileName`.

The following example logs the printed file name.

{% tabs %}
{% highlight js tabtitle="Standalone" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    printEnd: function(args) {
        console.log('Printed File Name: ' + args.fileName);
    }
});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification,
    ej.pdfviewer.Navigation,
    ej.pdfviewer.Annotation,
    ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView,
    ej.pdfviewer.BookmarkView,
    ej.pdfviewer.TextSelection
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/',
    printEnd: function(args) {
        console.log('Printed File Name: ' + args.fileName);
    }
});
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## See Also

- [Overview](./overview)
- [Print quality](./print-quality)
- [Enable print rotation](./enable-print-rotation)
- [Print modes](./print-modes)