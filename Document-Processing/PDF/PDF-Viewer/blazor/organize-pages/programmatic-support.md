---
layout: post
title: Programmatic Support Organize Pages in Blazor PDF Viewer | Syncfusion
description: Learn here all about Programmatic Support for Organize Pages in Blazor PDF Viewer control.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Programmatic support for Organize Pages in Blazor PDF Viewer

The Blazor PDF Viewer exposes programmatic APIs for organizing pages so applications can integrate page-management workflows (for example: enable/disable the Organize Pages panel, open/close the panel, and customize behavior). This section documents the available properties, settings, and events used to control the Organize Pages experience.

## Enable or disable the page organizer

The page organizer can be enabled or disabled using the `EnablePageOrganizer` property. By default, the page organizer is enabled.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%"
              EnablePageOrganizer="true">
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

## Open and close the page organizer panel

The page organizer panel can be opened or closed programmatically by two-way binding the `PageOrganizerVisibility` property to a state variable. Set the variable to `true` to open the page organizer panel and `false` to close it. The default value is `false`.

### Open on document load

Update the bound state variable in the `DocumentLoaded` event so the page organizer appears once the document has been fully loaded.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%"
              @bind-PageOrganizerVisibility="isVisible">
    <PdfViewerEvents DocumentLoaded="OnDocumentLoaded"></PdfViewerEvents>
</SfPdfViewer2>

@code {
    private bool isVisible = false;
    private void OnDocumentLoaded()
    {
        isVisible = true;
    }
}

{% endhighlight %}
{% endtabs %}

### Toggle from button clicks

Bind `PageOrganizerVisibility` with `@bind-` so that updates from the click handlers flow back to the component.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="OpenPageOrganizer">Open PageOrganizer Panel</SfButton>
<SfButton OnClick="ClosePageOrganizer">Close PageOrganizer Panel</SfButton>
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%"
              @bind-PageOrganizerVisibility="isVisible">
</SfPdfViewer2>

@code {
    private bool isVisible = false;

    private void OpenPageOrganizer() {
        isVisible = true;
    }

    private void ClosePageOrganizer() {
        isVisible = false;
    }
}

{% endhighlight %}
{% endtabs %}

## Customize page organizer settings

The `PageOrganizerSettings` API customizes page-management capabilities. Use it to enable or disable actions (delete, insert, rotate, duplicate, import, rearrange) and to configure thumbnail zoom settings. By default, actions are enabled and standard zoom settings apply.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.SfPdfViewer

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
    <PageOrganizerSettings CanDelete="true"
                           CanInsert="true"
                           CanRotate="true"
                           CanDuplicate="true"
                           CanRearrange="true"
                           CanImport="true">
    </PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

For information about the page organizer events (such as `PageOrganizerSaveRequested`, `PageOrganizerZoomChanged`, and `PageOrganizerVisibilityChanged`), see [Organize pages events](./events).

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Page%20Organizer/Organize-API-Support/Components/Pages/Home.razor)

## See also

- [Organize pages overview](./overview)
- [Organize pages events](./events)
- [Organize pages toolbar customization](./toolbar)
- [Insert blank pages using the Organize Pages tool](./insert-blank-pages)
