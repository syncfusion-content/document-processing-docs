---
layout: post
title: Text selection API and events in Blazor PDF Viewer | Syncfusion
description: Reference documentation for text selection properties, methods, and events in the Blazor PDF Viewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
domainurl: ##DomainURL##
---

# Text selection API and events in Blazor PDF Viewer

This document provides the reference details for text selection APIs and events in the Blazor PDF Viewer. It includes the available programmatic methods and event callbacks that allow applications to react to selection behavior.

## Methods

### SelectTextRegionAsync

The [`SelectTextRegionAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_SelectTextRegionAsync_System_Int32_System_Collections_Generic_List_Syncfusion_Blazor_SfPdfViewer_Bound__) method programmatically selects text within a specified page and bounds. Use this method to highlight specific text regions based on user interactions, search results, or application logic.

The following example illustrates how to handle the SelectTextRegionAsync method.

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
    private SfPdfViewer2? Viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private async Task SelectTextRegion()
    {
        List<Bound> bounds = new List<Bound>() {
            new Bound() {              
                X = 349.312,
                Y = 372.32,
                Height = 32.3104,
                Width = 100
            }
        };
        if(Viewer != null)
            await Viewer.SelectTextRegionAsync(2, bounds);
    }
}
{% endhighlight %}
{% endtabs %}

### ClearTextSelectionAsync

The [`ClearTextSelectionAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_ClearTextSelectionAsync) method clears all text selection in the PDF document. It clears any highlighted or selected text regions and resets the selection state. Use this method to reset the UI when users start a new operation or when clearing filtered results.

The following example illustrates how to handle the ClearTextSelectionAsync method.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="ClearTextSelection">Clear Text Selection</SfButton>
<SfPdfViewer2 Width="100%"
              Height="100%"
              DocumentPath="@DocumentPath"
              @ref="@Viewer" />

@code {
    private SfPdfViewer2? Viewer;
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private async Task ClearTextSelection()
    {
        if(Viewer != null)
            await Viewer.ClearTextSelectionAsync();
    }
}
{% endhighlight %}
{% endtabs %}

## Events

### OnTextSelectionStart

The [OnTextSelectionStart](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSelectionStart) event is triggered when the user begins selecting text. Use this event to perform actions when text selection starts, such as logging, updating UI elements, or starting data collection.

**Event arguments:** [`TextSelectionStartEventArgs`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.TextSelectionStartEventArgs.html) exposes:

- `PageNumber` (int) – The page where the selection started (1-based indexing).

The following example illustrates how to handle the OnTextSelectionStart event.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Width="100%"
              Height="100%"
              DocumentPath="@DocumentPath">
    <PdfViewerEvents OnTextSelectionStart="OnTextSelectionStart"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private void OnTextSelectionStart(TextSelectionStartEventArgs args)
    {
        int pageNumber = args.PageNumber;
        Console.WriteLine($"Text selection started on page: {pageNumber}");
    }
}
{% endhighlight %}
{% endtabs %}

### OnTextSelectionEnd

The [`OnTextSelectionEnd`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerEvents.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerEvents_OnTextSelectionEnd) event is triggered when the selection operation completes. Use this event to capture and process selected text, update UI elements, or perform operations based on the selection bounds and content.

**Event arguments:** [TextSelectionEndEventArgs](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.TextSelectionEndEventArgs.html) exposes:

- `PageNumber` (int) – The page where the selection ended (1-based indexing).
- `TextBounds` (List<[TextBound](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.TextBound.html)>) – The bounds of the selected text in the page.
- `TextContent` (string) – The text content selected in the page.

The following example illustrates how to handle the OnTextSelectionEnd event.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 Width="100%"
              Height="100%"
              DocumentPath="@DocumentPath">
    <PdfViewerEvents OnTextSelectionEnd="OnTextSelectionEnd"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private string DocumentPath { get; set; } = "wwwroot/Data/PDF_Succinctly.pdf";

    private void OnTextSelectionEnd(TextSelectionEndEventArgs args)
    {
        string textContent = args.TextContent;
        List<TextBound> textBounds = args.TextBounds;
    }
}
{% endhighlight %}
{% endtabs %}

## See also

- [Enable or disable text selection in Blazor PDF Viewer](./enable-text-selection)
- [Blazor PDF Viewer events](../events)
