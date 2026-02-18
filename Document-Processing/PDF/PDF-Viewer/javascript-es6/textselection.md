---
layout: post
title: Text selection in TypeScript PDF Viewer control | Syncfusion
description: Learn how to configure text selection, react to selection events, and manage copy workflows in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: Text selection
documentation: ug
domainurl: ##DomainURL##
---
# Text selection in TypeScript PDF Viewer

The TextSelection module allows users to highlight and copy text from the loaded PDF. Text selection is enabled by default and can be configured or monitored programmatically to match application workflows.

## Enable or disable text selection

Use the `enableTextSelection` property to enable or disable text selection in the PDF Viewer.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />

    <!--style reference from app-->
    <link href="/styles/styles.css" rel="stylesheet" />

    <!--system js reference and configuration-->
    <script src="node_modules/systemjs/dist/system.src.js" type="text/javascript"></script>
    <script src="system.config.js" type="text/javascript"></script>
</head>

<body>
    <!--Element which will render as PdfViewer -->
    <div id="PdfViewer"></div>
</body>

</html>
```

{% tabs %}
{% highlight ts tabtitle="Standalone" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    enableTextSelection: true // Defaults to true
});
pdfviewer.appendTo('#PdfViewer');

// Disable text selection later if required
pdfviewer.enableTextSelection = false;

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection } from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection);

let pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    enableTextSelection: true
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

```ts
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';

const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    textSelectionStart: (args: any) => {
        // args.pageNumber, args.bounds provide the starting context
        console.log('Selection started', args);
    }
});
viewer.appendTo('#PdfViewer');
```

### textSelectionEnd

The [textSelectionEnd](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#textselectionendevent) event triggers after the selection is finalized. Use it to access the selected text, toggle contextual commands, or store telemetry.

- Event arguments: `TextSelectionEndEventArgs` includes `pageNumber`, `bounds`, `selectedText`, and `isSelectionCopied`.

```ts
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';

const viewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    textSelectionEnd: (args: any) => {
        // For example, automatically copy or show a custom menu
        console.log('Selection ended', args);
    }
});
viewer.appendTo('#PdfViewer');
```


## See also

- [Text search](./text-search)
- [Interaction modes](./interaction-mode)
- [Toolbar items](./toolbar)
