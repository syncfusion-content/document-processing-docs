---
layout: post
title: Text selection API and events in Blazor PDF Viewer | Syncfusion
description: Reference documentation for text selection properties, methods, and events in the Syncfusion Blazor PDF Viewer.
platform: document-processing
control: Text selection
documentation: ug
domainurl: ##DomainURL##
---

# Text selection API and events in Blazor PDF Viewer

This document provides the reference details for text selection APIs and events in the Syncfusion Blazor PDF Viewer. It includes the available configuration property, programmatic methods, and event callbacks that allow applications to react to selection behavior.

## Methods

### SelectTextRegionAsync

Programmatically selects text within a specified page and bounds.

**Method signature:**

```cshtml
SelectTextRegionAsync(pageNumber: int, bounds: List<Bound>): Task
```

**Parameters:**

- pageNumber: `int` indicating the target page (1 based indexing)
- bounds: `List<Bound>` array defining the selection region

**Example:**

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="SelectTextRegion">SelectText Region</SfButton>
<SfPdfViewer2 Width="100%"
              Height="100%"
              DocumentPath="@DocumentPath"
              @ref="@Viewer" />

@code {
    SfPdfViewer2? Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async Task SelectTextRegion()
    {
        List<Bound> bounds = new List<Bound>() {
            new Bound() {              
            X= 349.312,
            Y= 372.32,
            Height= 32.3104,
            Width=100

            }
        };
        if(Viewer!=null)
        await Viewer.SelectTextRegionAsync(2, bounds);
    }
}
{% endhighlight %}
{% endtabs %}

### ClearTextSelectionAsync

Clears all text selection in the PDF document. Removes any highlighted or selected text regions.

**Method signature:**

```cshtml
ClearTextSelectionAsync(): Task
```

**Example:**

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="ClearTextSelection">ClearTextSelection</SfButton>
<SfPdfViewer2 Width="100%"
              Height="100%"
              DocumentPath="@DocumentPath"
              @ref="@Viewer" />

@code {
    SfPdfViewer2? Viewer;
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    public async Task ClearTextSelection()
    {
        if(Viewer!=null)
        await Viewer.ClearTextSelectionAsync();
    }
}
{% endhighlight %}
{% endtabs %}

## Events

### OnTextSelectionStart

Triggered when the user begins selecting text.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer
<SfPdfViewer2 DocumentPath="@DocumentPath">
    <PdfViewerEvents OnTextSelectionStart="OnTextSelectionStart"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private void OnTextSelectionStart(TextSelectionStartEventArgs args)
    {
        // PageNumber - The page where the selection started (1‑based indexing)
        int pageNumber = args.PageNumber;
        Console.WriteLine(pageNumber);
    }
}
{% endhighlight %}
{% endtabs %}

**Arguments include:**

- `PageNumber` - The page where the selection started (1‑based indexing).

### OnTextSelectionEnd

Triggered when the selection operation completes.

{% tabs %}
{% highlight razor %}
<SfPdfViewer2 DocumentPath="@DocumentPath">
    <PdfViewerEvents OnTextSelectionEnd="OnTextSelectionEnd"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    public string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";
    private void OnTextSelectionEnd(TextSelectionEndEventArgs args)
    {
        // PageNumber - Page where the selection ended (1‑based indexing)
        int pageNumber = args.PageNumber;
        Console.WriteLine(pageNumber);
        // TextContent - The full text extracted from the selection range
        string textContent = args.TextContent;
        Console.WriteLine(textContent);
        // TextBounds - Array of bounding rectangles that define the geometric region of the selected text
        List<TextBound> textBounds = args.TextBounds;
        Console.WriteLine(textBounds);
    }
}
{% endhighlight %}
{% endtabs %}

**Arguments include:**

- `PageNumber` - Page where the selection ended (1‑based indexing).
- `TextContent` - The full text extracted from the selection range.
- `TextBounds` - Array of bounding rectangles that define the geometric region of the selected text. Useful for custom UI overlays or programmatic re-selection.

## See also

- [Toggle text selection](./enable-text-selection)
- [Blazor PDF Viewer events](../events)
