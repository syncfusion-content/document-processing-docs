---
layout: post
title: Text selection API and events in React PDF Viewer | Syncfusion
description: Reference documentation for text selection properties, methods, and events in the Syncfusion React PDF Viewer.
platform: document-processing
control: Text Selection
documentation: ug
domainurl: ##DomainURL##
---

# Text selection API and events in React PDF Viewer

This document provides the reference details for text selection APIs and events in the React PDF Viewer. It includes the programmatic methods and event callbacks that allow applications to react to selection behavior.

## Methods

### selectTextRegion

Programmatically selects text within a specified page and bounds.

**Method signature:**

```ts
selectTextRegion(pageNumber: number, bounds: IRectangle[]): void
```

**Parameters:**

- pageNumber: number indicating the target page (1 based indexing)
- bounds: `IRectangle` array defining the selection region

**Example:**

```ts
pdfviewer.textSelection.selectTextRegion(3, [
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
pdfviewer.textSelection.copyText();
```

## Events

### textSelectionStart

Triggered when the user begins selecting text.

The event arguments are typed as `TextSelectionStartEventArgs` and expose the following members:

- `pageNumber` – Page where the selection started (1-based indexing).
- `name` – Event name identifier.

**Example:**

{% highlight ts %}
{% raw %}
<PdfViewerComponent
    textSelectionStart={(args: TextSelectionStartEventArgs) => {
        // custom logic
    }}
>
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}

### textSelectionEnd

Triggered when the user completes a text selection.

The event arguments are typed as `TextSelectionEndEventArgs` and expose the following members:

- `pageNumber` – Page where the selection ended (1-based indexing).
- `name` – Event name identifier.
- `textContent` – The full text extracted from the selection range.
- `textBounds` – Array of bounding rectangles that define the geometric region of the selected text. Useful for custom UI overlays or programmatic re-selection.

**Example:**

{% highlight ts %}
{% raw %}
<PdfViewerComponent
    textSelectionEnd={(args: TextSelectionEndEventArgs) => {
        // custom logic
    }}
>
</PdfViewerComponent>
{% endraw %}
{% endhighlight %}

## See also

- [Enable or disable text selection](../how-to/enable-text-selection)
- [React PDF Viewer events](../events)