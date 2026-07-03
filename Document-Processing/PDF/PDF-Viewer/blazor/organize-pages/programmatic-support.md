---
layout: post
title: Programmatic Support Organize Pages in Blazor PDF Viewer | Syncfusion
description: Learn here all about Programmatic Support for Organize Pages in Syncfusion Blazor PDF Viewer control.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Programmatic support for Organize Pages in Blazor

The Blazor PDF Viewer exposes programmatic APIs for organizing pages so applications can integrate page-management workflows (for example: enable/disable organizer, open/close the organizer, and customize behavior). This section documents the available properties, methods, and settings used to control the Organize Pages experience.

## Enable or disable the page organizer

The page organizer feature can be enabled or disabled using the `EnablePageOrganizer` property. By default, the page organizer is enabled.

{% tabs %}
{% highlight razor %}

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%"
              EnablePageOrganizer="true">
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

## Open the page organizer on document load

Use the `PageOrganizerVisibility` property to control whether the page organizer opens automatically when a document loads. By binding this property to a state variable and updating it in the `DocumentLoaded` event, you can ensure the page organizer appears once the document has been fully loaded. The default value is `false`.

{% tabs %}
{% highlight razor %}
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%"
              PageOrganizerVisibility="isVisible">
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

## Customize page organizer settings

The `PageOrganizerSettings` API customizes page-management capabilities. Use it to enable or disable actions (delete, insert, rotate, duplicate, import, rearrange) and to configure thumbnail zoom settings. By default, actions are enabled and standard zoom settings apply.

{% tabs %}
{% highlight razor %}

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

## Open and close the page organizer panel

The page organizer panel can be opened or closed programmatically by binding the `PageOrganizerVisibility` property to a state variable. Set it to `true` to open the page organizer panel and `false` to close it. This approach provides easy control over the visibility of page management tools through button clicks or other user interactions.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="OpenPageOrganizer">Open PageOrganizer Pane</SfButton>
<SfButton OnClick="ClosePageOrganizer">Close PageOrganizer Pane</SfButton>
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%"
              PageOrganizerVisibility="isVisible">
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

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Page%20Organizer/Organize-API-Support/Components/Pages/Home.razor)
