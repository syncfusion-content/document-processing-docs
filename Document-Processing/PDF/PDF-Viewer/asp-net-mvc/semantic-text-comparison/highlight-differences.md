---
layout: post
title: Highlight Differences in UI | Syncfusion MVC PDF Viewer
description: Learn how to highlight text differences in the Syncfusion MVC PDF Viewer using visual highlighting with customizable colors and opacity.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Highlight Differences in ASP.NET MVC PDF Viewer UI

The semantic text comparison feature highlights differences between two PDF documents with customizable colors and opacity, making it easy to identify changes at a glance.

## Overview

When you compare two PDF documents using the semantic text comparison feature, differences are highlighted with:

- **Deleted text** - Highlighted in one color (default: red)
- **Added text** - Highlighted in another color (default: green)
- **Synchronized viewers** - Both documents remain aligned during comparison

## Prerequisites

- An MVC application with HTML views
- Syncfusion EJ2 MVC package installed
- Two PDF documents ready for comparison

## Steps

### Step 1: Create the MVC view

Create an MVC view (e.g., `SemanticComparison.cshtml`) and add the Syncfusion styles, script references, and the Script Manager at the end of the view:

{% tabs %}
{% highlight html tabtitle="View.cshtml" %}
{% raw %}
<div id="container">
    @Html.EJS().PdfComparer("pdfviewer").OriginalDocumentPath("https://cdn.syncfusion.com/content/pdf/original-document.pdf").ModifiedDocumentPath("https://cdn.syncfusion.com/content/pdf/modified-document.pdf").ResourceUrl("https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib").Render()
</div>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 2: Initialize the PDF Comparer with default highlighting

Render the PDF Comparer with the original and modified document paths:

{% tabs %}
{% highlight csharp tabtitle="View.cshtml" %}
@Html.EJS().PdfComparer("pdfviewer").OriginalDocumentPath("https://cdn.syncfusion.com/content/pdf/original-document.pdf").ModifiedDocumentPath("https://cdn.syncfusion.com/content/pdf/modified-document.pdf").ResourceUrl("https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib").Render()
{% endhighlight %}
{% endtabs %}

### Step 3: Configure highlight colors and options

Customize highlighting by setting comparison options:

{% tabs %}
{% highlight csharp tabtitle="View.cshtml" %}
@{
    PdfViewerTextComparisonOptions comparisonOptions = new PdfViewerTextComparisonOptions()
    {
        BeforeColor = "#FF0000",
        AfterColor = "#00FF00",
        BeforeColorOpacity = 0.4,
        AfterColorOpacity = 0.4,
        EnableHighlights = true
    };
}

@Html.EJS().PdfComparer("pdfviewer").OriginalDocumentPath("https://cdn.syncfusion.com/content/pdf/original-document.pdf").ModifiedDocumentPath("https://cdn.syncfusion.com/content/pdf/modified-document.pdf").ResourceUrl("https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib").ComparisonOptions(comparisonOptions).Render()
{% endhighlight %}
{% endtabs %}

## Highlight customization

### Comparison options

The highlight appearance is controlled by these options in the `ComparisonOptions` object:

| Option | Type | Description | Default |
|--------|------|-------------|--------|
| `BeforeColor` | string | Color for deleted text (hex format) | `#FF0000` |
| `AfterColor` | string | Color for added text (hex format) | `#00FF00` |
| `BeforeColorOpacity` | number | Transparency for deleted (0-1) | `0.4` |
| `AfterColorOpacity` | number | Transparency for added (0-1) | `0.4` |
| `EnableHighlights` | boolean | Enable/disable visual highlighting | `true` |

### Viewer behavior properties

Control the viewer behavior with these properties:

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| `EnableDifferencePanel` | boolean | Show/hide sidebar panel displaying detected differences | `true` |
| `EnableSyncScrolling` | boolean | Enable synchronized scrolling, navigation, and magnification between viewers | `true` |

### Control the difference panel

Use the `EnableDifferencePanel` property to show or hide the sidebar panel that displays all detected differences:

{% tabs %}
{% highlight csharp tabtitle="View.cshtml" %}
@Html.EJS().PdfComparer("pdfviewer").OriginalDocumentPath("https://cdn.syncfusion.com/content/pdf/original-document.pdf").ModifiedDocumentPath("https://cdn.syncfusion.com/content/pdf/modified-document.pdf").ResourceUrl("https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib").EnableDifferencePanel(false).Render()
{% endhighlight %}
{% endtabs %}

### Control synchronized scrolling and navigation

Use the `EnableSyncScrolling` property to control whether the viewers stay synchronized during scrolling, page navigation, and magnification (zoom):

{% tabs %}
{% highlight csharp tabtitle="View.cshtml" %}
@Html.EJS().PdfComparer("pdfviewer").OriginalDocumentPath("https://cdn.syncfusion.com/content/pdf/original-document.pdf").ModifiedDocumentPath("https://cdn.syncfusion.com/content/pdf/modified-document.pdf").ResourceUrl("https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib").EnableSyncScrolling(false).Render()
{% endhighlight %}
{% endtabs %}

## Features

![Semantic text comparison interface](../images/semantic-text-comparison.png)

- **Side-by-side viewers** - Compare original and modified documents simultaneously
- **Synchronized navigation** - Zoom, scroll, and page navigation synchronized between viewers
- **Color-coded highlighting** - Visual differentiation of added and deleted text (red for deleted, green for added)
- **Differences panel** - Consolidated list on the right showing all detected differences categorized by type
- **File upload support** - Upload custom PDFs for comparison

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/Semantic%20Text%20Comparison/Highlight%20differences%20in%20UI/Highlight%20differences%20in%20UI).

## Related topics

- [Overview of semantic text comparison](./overview)
- [Programmatically get differences](./programmatically-get-differences)