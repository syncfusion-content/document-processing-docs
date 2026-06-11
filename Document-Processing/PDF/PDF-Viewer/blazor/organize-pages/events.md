---
layout: post
title: Organize Pages Events in Blazor PDF Viewer | Syncfusion
description: Learn how to organize pages Events in the Blazor PDF Viewer, including rotating, rearranging, inserting, deleting, and copying pages.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Organize pages events

Use the page organizer events to react to rotations, rearranges, inserts, deletes, and other page-manipulation actions performed in the page organizer.

| Name | Description |
|---|---|
| PageOrganizerSaveRequested | Triggers when the page organizer requests a save of the modified document. |
| PageOrganizerZoomChanged | Triggers when the page organizer zoom level changes. |
| PageOrganizerVisibilityChanged | Triggers when the page organizer dialog visibility changes. |

## PageOrganizerSaveRequested

Raised when the user saves changes from the page organizer (for example, after clicking the **Save as** button). The event args include:

- `FileName`: the current PDF file name.
- `DownloadDocument`: a base64 string containing the modified PDF bytes.
- `Cancel`: set to `true` to prevent the built-in save behavior.

{% tabs %}
{% highlight razor %}
@page "/"

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PdfViewerEvents PageOrganizerSaveRequested="SavePages"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private void SavePages(PageOrganizerSaveEventArgs args)
    {
        Console.WriteLine($"Saved File Name: {args.FileName}");
    }
}

{% endhighlight %}
{% endtabs %}

## PageOrganizerZoomChanged

Raised when the zoom slider in the page organizer changes value. Enable the slider by setting `PageOrganizerSettings.ShowImageZoomingSlider` to `true`.

Event args:

- `PreviousZoom`: previous zoom value.
- `CurrentZoom`: current zoom value.

{% tabs %}
{% highlight razor %}
@page "/"

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PdfViewerEvents PageOrganizerZoomChanged="ZoomChange"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private void ZoomChange(PageOrganizerZoomChangedEventArgs args)
    {
        Console.WriteLine($"Current Zoom: {args.CurrentZoom}");
    }
}

{% endhighlight %}
{% endtabs %}

## PageOrganizerVisibilityChanged

Raised when the page organizer dialog is opened or closed.

{% tabs %}
{% highlight razor %}
@page "/"

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%" PageOrganizerVisibilityChanged="VisibleChanged">
</SfPdfViewer2>

@code {
    private void VisibleChanged(bool isVisible)
    {
        Console.WriteLine($"Organize dialog visibility: {isVisible}");
    }
}

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Page%20Organizer/Page-Organizer-Events)

## See also

- Overall viewer events: [Event](../events)
- Annotation events: [Annotation events](../annotation/events)
- Form designer events: [Form field events](../form-designer/events)
