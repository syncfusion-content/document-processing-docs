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

Use the `IsPageOrganizerOpen` property to control whether the page organizer opens automatically when a document loads. The default value is `false`.

{% tabs %}
{% highlight razor %}
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%"
              IsPageOrganizerOpen="true">
</SfPdfViewer2>

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

## Open the page organizer panel

The `OpenPageOrganizerAsync` method programmatically opens the page organizer panel, providing access to page management tools.

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="OpenPageOrganizer">Open PageOrganizer Pane</SfButton>
<SfPdfViewer2 @ref="Viewer" DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2? Viewer;

    private async Task OpenPageOrganizer() {
        await Viewer?.OpenPageOrganizerAsync();
    }
}

{% endhighlight %}
{% endtabs %}

## Close the page organizer panel

The `ClosePageOrganizerAsync` method programmatically closes the page organizer panel.

{% tabs %}
{% highlight razor %}

@using Syncfusion.Blazor.Buttons

<SfButton OnClick="ClosePageOrganizer">Close PageOrganizer Pane</SfButton>
<SfPdfViewer2 @ref="Viewer" DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2? Viewer;

    private async Task ClosePageOrganizer() {
        await Viewer?.ClosePageOrganizerAsync();
    }
}

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/blob/master/Page%20Organizer/Organize-API-Support/Components/Pages/Home.razor)
