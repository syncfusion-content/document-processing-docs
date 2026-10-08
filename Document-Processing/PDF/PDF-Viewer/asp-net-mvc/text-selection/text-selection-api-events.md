---
layout: post
title: Text Selection API and Events in ASP.NET MVC PDF Viewer | Syncfusion
description: Reference documentation for text selection properties, methods, and events in the ASP.NET MVC PDF Viewer, with examples for common scenarios.
platform: document-processing
control: Text Selection
documentation: ug
---

# Text Selection API and Events in ASP.NET MVC PDF Viewer

This document provides the reference details for text selection APIs and events in the ASP.NET MVC PDF Viewer. It includes the programmatic methods and event callbacks that allow applications to react to selection behavior.

## Methods

### selectTextRegion

Programmatically selects text within a specified page and bounds.

**Method signature:**

```ts
selectTextRegion(pageNumber: number, bounds: IRectangle[]): void
```

**Parameters:**

- `pageNumber` — number indicating the target page (1-based indexing).
- `bounds` — `IRectangle` array defining the selection region.

**Example:**

```ts
var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
pdfViewer.textSelection.selectTextRegion(3, [
    {
        left: 121.07501220703125,
        right: 146.43399047851562,
        top: 414.9624938964844,
        bottom: 430.1625061035156,
        width: 25.358978271484375,
        height: 15.20001220703125
    }
]);
```

### copyText

Copies the currently selected text to the clipboard.

**Method signature:**

```ts
copyText(): void
```

**Example:**

```ts
var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
pdfViewer.textSelection.copyText();
```

## Events

### textSelectionStart

Triggered when the user begins selecting text.

The event arguments are typed as `TextSelectionStartEventArgs` and expose the following members:

- `pageNumber` – Page where the selection started (1-based indexing).
- `name` – Event name identifier.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TextSelectionStart("textSelectionStarted").Render()
</div>

<script>
    function textSelectionStarted(args) {
        // custom logic
        console.log('Selection started on page', args.pageNumber);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TextSelectionStart("textSelectionStarted").Render()
</div>

<script>
    function textSelectionStarted(args) {
        // custom logic
        console.log('Selection started on page', args.pageNumber);
    }
</script>

{% endhighlight %}
{% endtabs %}

### textSelectionEnd

Triggered when the user completes a text selection.

The event arguments are typed as `TextSelectionEndEventArgs` and expose the following members:

- `pageNumber` – Page where the selection ended (1-based indexing).
- `name` – Event name identifier.
- `textContent` – The full text extracted from the selection range.
- `textBounds` – Array of bounding rectangles that define the geometric region of the selected text. Useful for custom UI overlays or programmatic re-selection.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TextSelectionEnd("textSelectionEnded").Render()
</div>

<script>
    function textSelectionEnded(args) {
        // args.textContent contains the selected text
        // args.textBounds provides the geometric region
        console.log('Selection ended:', args.textContent, args.textBounds);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").TextSelectionEnd("textSelectionEnded").Render()
</div>

<script>
    function textSelectionEnded(args) {
        // args.textContent contains the selected text
        // args.textBounds provides the geometric region
        console.log('Selection ended:', args.textContent, args.textBounds);
    }
</script>

{% endhighlight %}
{% endtabs %}

## See also

- [Enable or disable text selection](../how-to/enable-text-selection)
- [Text selection overview](./overview)
- [Text search events](../text-search/text-search-events)
