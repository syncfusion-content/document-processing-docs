---
layout: post
title: Organize Pages Events in Blazor PDF Viewer | Syncfusion
description: Learn how to organize pages Events in the Blazor PDF Viewer, including rotating, rearranging, inserting, deleting, and copying pages.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Organize Pages Events in Blazor PDF Viewer

The PDF Viewer provides events to track and respond to actions within the page organizer, allowing for the customization of page manipulation features.

|Name|Description|
|---|---|
|PageOrganizerSaveRequested|Triggers when a save action is performed in the page organizer.|
|PageOrganizerZoomChanged|Triggers when the zoom level of the page organizer is changed.|
|PageOrganizerVisibilityChanged|Triggers when the page organizer dialog visibility is changed.|

## PageOrganizerSaveRequested Event

The `PageOrganizerSaveRequested` event is triggered when a save action is performed in the page organizer.

-  Occurs when the **Save as** button in the page organizer toolbar is clicked after modifying the document structure.

The event arguments provide the necessary information about the save event:

- `FileName`: The name of the currently loaded PDF document.
- `DownloadDocument`: A base64 string of the modified PDF document data.
- `Cancel`: A boolean that, when set to `true`, prevents the default save action from proceeding.

{% tabs %}
{% highlight razor %}
@page "/"

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PdfViewerEvents PageOrganizerSaveRequested="SavePages"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private void SavePages(PageOrganizerSaveEventArgs args) {
        Console.WriteLine("Saved File Name : " + args.FileName.ToString());
    }
}

{% endhighlight %}
{% endtabs %}

## PageOrganizerZoomChanged Event

The `PageOrganizerZoomChanged` event is triggered when the zoom level of the page organizer is changed.

-  This event is fired when the user interacts with the zoom slider in the page organizer. The `ShowImageZoomingSlider` property in `PageOrganizerSettings` must be set to `true` for the slider to be visible.

Event arguments:

- `PreviousZoom`: The previous zoom value.
- `CurrentZoom`: The current zoom value.

{% tabs %}
{% highlight razor %}
@page "/"

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PdfViewerEvents PageOrganizerZoomChanged="ZoomChange"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private void ZoomChange(PageOrganizerZoomChangedEventArgs args) {
        Console.WriteLine("Current Zoom : " + args.CurrentZoom);
    }
}

{% endhighlight %}
{% endtabs %}

## PageOrganizerVisibilityChanged Event

The `PageOrganizerVisibilityChanged` event is triggered when the page organizer dialog visibility is changed.

{% tabs %}
{% highlight razor %}
@page "/"

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%" PageOrganizerVisibilityChanged="VisibleChanged">
</SfPdfViewer2>

@code {
    private void VisibleChanged(bool isVisible) {
        Console.WriteLine("Organize Dialog Visibility : " + isVisible.ToString());
    }
}

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Page%20Organizer/Page-Organizer-Events)

## See also

- Overall Viewer events: [Event](../events)
- Annotation events: [Annotation events](../annotation/events)
- Form designer events: [Form field events](../form-designer/events)
