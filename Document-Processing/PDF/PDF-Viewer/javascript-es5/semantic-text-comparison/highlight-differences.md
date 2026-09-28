---
layout: post
title: Highlight Differences in UI | Syncfusion ES5 JavaScript PDF Viewer
description: Learn how to highlight text differences in the Syncfusion ES5 JavaScript PDF Viewer using visual highlighting with customizable colors and opacity.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Highlight Differences in UI

The semantic text comparison feature highlights differences between two PDF documents with customizable colors and opacity, making it easy to identify changes at a glance.

## Overview

When you compare two PDF documents using the semantic text comparison feature, differences are highlighted with:

- **Deleted text** - Highlighted in one color (default: red)
- **Added text** - Highlighted in another color (default: green)
- **Synchronized viewers** - Both documents remain aligned during comparison

## Prerequisites

- Updated `ej2.min.js` from CDN or CRG
- `ej.pdfviewer` namespace available
- Two PDF documents ready for comparison

## Steps

### Step 1: Create the HTML structure

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% raw %}
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>PDF Viewer Semantic Text Comparison</title>
    <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/dist/ej2.min.css">
    <script src="https://cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
        }
        #PdfComparer {
            height: 100vh;
        }
    </style>
</head>
<body>
    <div id="PdfComparer"></div>
    <script src="app.js" type="text/javascript"></script>
</body>
</html>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 2: Initialize PDF Viewer with semantic text comparison

Create `app.js` with the PdfComparer initialization:

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% raw %}
var pdfComparer = new ej.pdfviewer.PdfComparer({
    originalDocumentPath: 'https://cdn.syncfusion.com/content/pdf/original-document.pdf',
    modifiedDocumentPath: 'https://cdn.syncfusion.com/content/pdf/modified-document.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/34.2.4/dist/ej2-pdfviewer-lib'
});

// PDF Viewer control rendering starts
pdfComparer.appendTo('#PdfComparer');
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 3: Configure highlight colors and options

Define the `comparisonOptions` object to customize highlighting:

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% raw %}
var comparisonOptions = {
    beforeColor: '#FF0000',
    afterColor: '#00FF00',
    beforeColorOpacity: 0.4,
    afterColorOpacity: 0.4,
    enableHighlights: true
};

var pdfComparer = new ej.pdfviewer.PdfComparer({
    originalDocumentPath: 'https://cdn.syncfusion.com/content/pdf/original-document.pdf',
    modifiedDocumentPath: 'https://cdn.syncfusion.com/content/pdf/modified-document.pdf',
    comparisonOptions: comparisonOptions,
    resourceUrl: 'https://cdn.syncfusion.com/ej2/34.2.4/dist/ej2-pdfviewer-lib'
});

pdfComparer.appendTo('#PdfComparer');
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Highlight customization

### Comparison options

The highlight appearance is controlled by these options in the `comparisonOptions` object:

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `beforeColor` | string | Color for deleted text (hex format) | `#FF0000` |
| `afterColor` | string | Color for added text (hex format) | `#00FF00` |
| `beforeColorOpacity` | number | Transparency for deleted (0-1) | `0.4` |
| `afterColorOpacity` | number | Transparency for added (0-1) | `0.4` |
| `enableHighlights` | boolean | Enable/disable visual highlighting | `true` |

### Viewer behavior properties

Control the viewer behavior with these properties:

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| `enableDifferencePanel` | boolean | Show/hide sidebar panel displaying detected differences | `true` |
| `enableSyncScrolling` | boolean | Enable synchronized scrolling, navigation, and magnification between viewers | `true` |

### Control the difference panel

Use the `enableDifferencePanel` property to show or hide the sidebar panel that displays all detected differences:

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% raw %}
var pdfComparer = new ej.pdfviewer.PdfComparer({
    originalDocumentPath: 'https://cdn.syncfusion.com/content/pdf/original-document.pdf',
    modifiedDocumentPath: 'https://cdn.syncfusion.com/content/pdf/modified-document.pdf',
    enableDifferencePanel: false,
    resourceUrl: 'https://cdn.syncfusion.com/ej2/34.2.4/dist/ej2-pdfviewer-lib'
});

pdfComparer.appendTo('#PdfComparer');
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Control synchronized scrolling and navigation

Use the `enableSyncScrolling` property to control whether the viewers stay synchronized during scrolling, page navigation, and magnification (zoom):

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% raw %}
var pdfComparer = new ej.pdfviewer.PdfComparer({
    originalDocumentPath: 'https://cdn.syncfusion.com/content/pdf/original-document.pdf',
    modifiedDocumentPath: 'https://cdn.syncfusion.com/content/pdf/modified-document.pdf',
    enableSyncScrolling: false,
    resourceUrl: 'https://cdn.syncfusion.com/ej2/34.2.4/dist/ej2-pdfviewer-lib'
});

pdfComparer.appendTo('#PdfComparer');
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Features

![Semantic text comparison interface](../images/semantic-text-comparison.png)

- **Side-by-side viewers** - Compare original and modified documents simultaneously
- **Synchronized navigation** - Zoom, scroll, and page navigation synchronized between viewers
- **Color-coded highlighting** - Visual differentiation of added and deleted text (red for deleted, green for added)
- **Differences panel** - Consolidated list on the right showing all detected differences categorized by type
- **File upload support** - Upload custom PDFs for comparison

N> For complete production implementation, refer to the [GitHub sample](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Semantic%20Text%20Comparison/Highlight%20differences%20in%20UI).

## Related topics

- [Overview of semantic text comparison](./overview)
- [Programmatically get differences](./programmatically-get-differences)