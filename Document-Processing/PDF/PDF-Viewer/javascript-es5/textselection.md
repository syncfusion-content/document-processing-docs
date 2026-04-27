---
layout: post
title: Text selection in JavaScript PDF Viewer control | Syncfusion
description: Learn how to configure text selection, react to selection events, and manage copy workflows in the Syncfusion JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---
# Text selection in JavaScript PDF Viewer

The TextSelection module allows users to highlight and copy text from the loaded PDF. Text selection is enabled by default and can be configured or monitored programmatically to match application workflows.

## Enable or disable text selection

Use the `enableTextSelection` property to enable or disable text selection in the PDF Viewer.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Essential JS 2</title>
        <!-- Essential JS 2 tailwind3 theme -->
        <link href="https://cdn.syncfusion.com/ej2/31.2.2/tailwind3.css" rel="stylesheet" type="text/css"/>
        <!-- Essential JS 2 PDF Viewer's global script -->
        <script src="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2.min.js" type="text/javascript"></script>
    </head>
    <body>
        <div id='container'>
            <div id='pdfViewer' style="height:500px;width:100%;">
            </div>
        </div>
    </body>
</html>
```

{% tabs %}
{% highlight js tabtitle="Standalone" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    enableTextSelection: true // Defaults to true
});
pdfviewer.appendTo('#PdfViewer');

// Disable text selection later if required
pdfviewer.enableTextSelection = false;

{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}

ej.pdfviewer.PdfViewer.Inject(
    ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation,
    ej.pdfviewer.ThumbnailView, ej.pdfviewer.BookmarkView, ej.pdfviewer.TextSelection
);

var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    enableTextSelection: true // Defaults to true
});
pdfviewer.serviceUrl = 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/';
pdfviewer.appendTo('#PdfViewer');

// Toggle on demand
pdfviewer.enableTextSelection = false;

{% endhighlight %}
{% endtabs %}

## Text selection events

Monitor user interaction with selection events to coordinate downstream actions such as showing tooltips, enabling context menus, or storing analytics.

### textSelectionStart

The [textSelectionStart](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#textselectionstartevent) event fires when a user begins selecting text. Use it to reset temporary UI, pause conflicting shortcuts, or capture the starting context.

- Event arguments: `TextSelectionStartEventArgs` supplies details such as `pageNumber`, `bounds`, and `selectionBehavior`.

```js

var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    textSelectionStart: function (args) {
        // args.pageNumber, args.bounds provide the starting context
        console.log('Selection started', args);
    }
});
viewer.appendTo('#PdfViewer');
```

### textSelectionEnd

The [textSelectionEnd](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#textselectionendevent) event triggers after the selection is finalized. Use it to access the selected text, toggle contextual commands, or store telemetry.

- Event arguments: `TextSelectionEndEventArgs` includes `pageNumber`, `bounds`, `selectedText`, and `isSelectionCopied`.

```js

var viewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    textSelectionEnd: function (args) {
        // For example, automatically copy or show a custom menu
        console.log('Selection ended', args);
    }
});
viewer.appendTo('#PdfViewer');
```


## See also

- [Text search](./text-search)
- [Interaction modes](./interaction-mode)
