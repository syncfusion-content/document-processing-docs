---
layout: post
title: Organize Page Toolbar in Blazor PDF Viewer control | Syncfusion
description: Learn here all about Organize Page Toolbar Customization in Syncfusion Blazor PDF Viewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Organize page toolbar

The PDF Viewer lets applications customize the Organize Pages toolbar to enable or disable tools according to project requirements. Use the [PageOrganizerSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_PageOrganizerSettings)  to control each tool's interactivity and behavior.

## Enable or disable the insert option

The `CanInsert` property controls the insert tool visibility. Set it to `false` to disable the insert tool.

{% tabs %}
{% highlight razor %}
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PageOrganizerSettings CanInsert="false"></PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

## Enable or disable the delete option

The `CanDelete` property controls the delete tool visibility. Set it to `false` to disable the delete tool.

{% tabs %}
{% highlight razor %}
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PageOrganizerSettings CanDelete="false"></PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

## Enable or disable the rotate option

The `CanRotate` property controls the rotate tool visibility. Set it to `false` to disable the rotate tool.

{% tabs %}
{% highlight razor %}
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PageOrganizerSettings CanRotate="false"></PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

## Enable or disable the copy option

The `CanDuplicate` property controls the copy tool visibility. Set it to `false` to disable the copy tool.

{% tabs %}
{% highlight razor %}

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PageOrganizerSettings CanDuplicate="false"></PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

## Enable or disable the import option

The `CanImport` property controls the import tool visibility. Set it to `false` to disable the import tool.

{% tabs %}
{% highlight razor %}

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PageOrganizerSettings CanImport="false"></PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

## Enable or disable the extract option

The `CanExtractPages` property controls the extract tool visibility. Set it to `false` to disable the extract tool.

{% tabs %}
{% highlight razor %}

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PageOrganizerSettings CanExtractPages="false"></PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

## Enable or disable the rearrange option

The `CanRearrange` property controls whether pages can be rearranged. Set it to `false` to disable page reordering.

{% tabs %}
{% highlight razor %}

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PageOrganizerSettings CanRearrange="false"></PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Page%20Organizer/Page-Organizer-Settings)