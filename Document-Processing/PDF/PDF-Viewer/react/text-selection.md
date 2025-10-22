---
layout: post
title: Text selection in React PDF Viewer control | Syncfusion
description: Learn how to configure text selection, react to selection events, and manage copy workflows in the Syncfusion React PDF Viewer.
platform: document-processing
control: Text selection
documentation: ug
domainurl: ##DomainURL##
---
# Text selection in React PDF Viewer control

The TextSelection module lets users highlight and copy text from the loaded PDF. Selection is enabled by default and can be configured or monitored programmatically to match application workflows.

## Enable or disable text selection

Use the `enableTextSelection` property to enable or disable choosing text in the PDF Viewer.

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

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
    PdfViewerComponent,
    Toolbar,
    Magnification,
    Navigation,
    LinkAnnotation,
    ThumbnailView,
    BookmarkView,
    TextSelection,
    Inject
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
    const viewerRef = React.useRef(null);

    React.useEffect(() => {
        // Disable text selection later if required
        if (viewerRef.current) {
            // Example toggle; set to false to disable after mount
            viewerRef.current.enableTextSelection = false;
        }
    }, []);

    return (
        <PdfViewerComponent
            id="PdfViewer"
            ref={viewerRef}
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            enableTextSelection={true}
            style={{ height: '500px', width: '100%' }}
        >
            <Inject services={[
                Toolbar,
                Magnification,
                Navigation,
                LinkAnnotation,
                ThumbnailView,
                BookmarkView,
                TextSelection
            ]} />
        </PdfViewerComponent>
    );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);

{% endhighlight %}
{% highlight ts tabtitle="Server-Backed" %}

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
    PdfViewerComponent,
    Toolbar,
    Magnification,
    Navigation,
    LinkAnnotation,
    ThumbnailView,
    BookmarkView,
    TextSelection,
    Inject
} from '@syncfusion/ej2-react-pdfviewer';

function App() {
    const viewerRef = React.useRef(null);

    React.useEffect(() => {
        // Toggle on demand
        if (viewerRef.current) {
            viewerRef.current.enableTextSelection = false;
        }
    }, []);

    return (
        <PdfViewerComponent
            id="PdfViewer"
            ref={viewerRef}
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            serviceUrl="https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/"
            enableTextSelection={true}
            style={{ height: '500px', width: '100%' }}
        >
            <Inject services={[
                Toolbar,
                Magnification,
                Navigation,
                LinkAnnotation,
                ThumbnailView,
                BookmarkView,
                TextSelection
            ]} />
        </PdfViewerComponent>
    );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);

{% endhighlight %}
{% endtabs %}

## Text selection events

Monitor user interaction with selection events to coordinate downstream actions such as showing tooltips, enabling context menus, or storing analytics.

### textSelectionStart

The [textSelectionStart](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#textselectionstartevent) event fires when a user begins selecting text. Use it to reset temporary UI, pause conflicting shortcuts, or capture the starting context.

- Event arguments: `TextSelectionStartEventArgs` supplies details such as `pageNumber`, `bounds`, and `selectionBehavior`.

```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, TextSelection, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
    const textSelectionStart = (args) => {
        // args.pageNumber, args.bounds provide the starting context
        console.log('Selection started', args);
    };

    return (
        <PdfViewerComponent
            id="PdfViewer"
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            textSelectionStart={textSelectionStart}
            style={{ height: '500px', width: '100%' }}
        >
            <Inject services={[TextSelection]} />
        </PdfViewerComponent>
    );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);
```

### textSelectionEnd

The [textSelectionEnd](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#textselectionendevent) event triggers after the selection is finalized. Use it to access the selected text, toggle contextual commands, or store telemetry.

- Event arguments: `TextSelectionEndEventArgs` includes `pageNumber`, `bounds`, `selectedText`, and `isSelectionCopied`.

```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, TextSelection, Inject } from '@syncfusion/ej2-react-pdfviewer';

function App() {
    const textSelectionEnd = (args) => {
        // For example, automatically copy or show a custom menu
        console.log('Selection ended', args);
    };

    return (
        <PdfViewerComponent
            id="PdfViewer"
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            textSelectionEnd={textSelectionEnd}
            style={{ height: '500px', width: '100%' }}
        >
            <Inject services={[TextSelection]} />
        </PdfViewerComponent>
    );
}

const root = ReactDOM.createRoot(document.getElementById('PdfViewer'));
root.render(<App />);
```


## See also

- [Text search](./text-search)
- [Interaction modes](./interaction-mode)
- [Toolbar items](./toolbar)
