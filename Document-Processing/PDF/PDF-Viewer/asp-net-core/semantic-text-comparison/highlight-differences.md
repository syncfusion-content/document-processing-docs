---
layout: post
title: Highlight Differences in UI | Syncfusion ASP.NET Core PDF Viewer
description: Learn how to highlight text differences in the Syncfusion ASP.NET Core PDF Viewer using visual highlighting with customizable colors and opacity.
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

- ASP.NET Core web application with Syncfusion tag helpers
- `ejs-pdfcomparer` tag helper available
- Two PDF documents ready for comparison

## Steps

### Step 1: Create the Razor view

Create an ASP.NET Core Razor view (e.g., `Index.cshtml`) with the PDF Comparer tag helper:

{% tabs %}
{% highlight html tabtitle="Index.cshtml" %}
{% raw %}
@page
@model IndexModel

<div id="container">
    <ejs-pdfcomparer id="pdfviewer"
                     style="height:600px"
                     originalDocumentPath="https://cdn.syncfusion.com/content/pdf/original-document.pdf"
                     modifiedDocumentPath="https://cdn.syncfusion.com/content/pdf/modified-document.pdf"
                     resourceUrl="https://cdn.syncfusion.com/ej2/34.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfcomparer>
</div>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 2: Configure highlight colors and options

Define the comparison options to customize highlighting:

{% tabs %}
{% highlight html tabtitle="Index.cshtml" %}
{% raw %}
@page
@model IndexModel

<div id="container">
    <ejs-pdfcomparer id="pdfviewer"
                     style="height:600px"
                     originalDocumentPath="https://cdn.syncfusion.com/content/pdf/original-document.pdf"
                     modifiedDocumentPath="https://cdn.syncfusion.com/content/pdf/modified-document.pdf"
                     resourceUrl="https://cdn.syncfusion.com/ej2/34.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfcomparer>
</div>

<script>
var comparisonOptions = {
    beforeColor: '#FF0000',        // Color for deleted text (red)
    afterColor: '#00FF00',         // Color for added text (green)
    beforeColorOpacity: 0.4,       // Transparency for deleted (0-1)
    afterColorOpacity: 0.4,        // Transparency for added (0-1)
    enableHighlights: true         // Enable visual highlighting
};

document.addEventListener('DOMContentLoaded', function() {
    var pdfComparerElement = document.getElementById('pdfviewer');
    if (pdfComparerElement && pdfComparerElement.ej2_instances) {
        var pdfComparer = pdfComparerElement.ej2_instances[0];
        pdfComparer.comparisonOptions = comparisonOptions;
    }
});
</script>
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
{% highlight html tabtitle="Index.cshtml" %}
{% raw %}
<div id="container">
    <ejs-pdfcomparer id="pdfviewer"
                     style="height:600px"
                     originalDocumentPath="https://cdn.syncfusion.com/content/pdf/original-document.pdf"
                     modifiedDocumentPath="https://cdn.syncfusion.com/content/pdf/modified-document.pdf"
                     enableDifferencePanel="false"
                     resourceUrl="https://cdn.syncfusion.com/ej2/34.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfcomparer>
</div>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Control synchronized scrolling and navigation

Use the `enableSyncScrolling` property to control whether the viewers stay synchronized during scrolling, page navigation, and magnification (zoom):

{% tabs %}
{% highlight html tabtitle="Index.cshtml" %}
{% raw %}
<div id="container">
    <ejs-pdfcomparer id="pdfviewer"
                     style="height:600px"
                     originalDocumentPath="https://cdn.syncfusion.com/content/pdf/original-document.pdf"
                     modifiedDocumentPath="https://cdn.syncfusion.com/content/pdf/modified-document.pdf"
                     enableSyncScrolling="false"
                     resourceUrl="https://cdn.syncfusion.com/ej2/34.2.2/dist/ej2-pdfviewer-lib">
    </ejs-pdfcomparer>
</div>
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

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/Semantic%20Text%20Comparison/Highlight%20differences%20in%20UI).

## Related topics

- [Overview of semantic text comparison](./overview)
- [Programmatically get differences](./programmatically-get-differences)