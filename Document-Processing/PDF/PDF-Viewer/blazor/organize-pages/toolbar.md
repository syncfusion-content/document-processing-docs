---
layout: post
title: Organize Page Toolbar in Blazor PDF Viewer control | Syncfusion
description: Learn here all about Organize Page Toolbar Customization in Syncfusion Blazor PDF Viewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Organize page toolbar

Customize which tools appear in the Organize Pages toolbar using `PageOrganizerSettings`. Toggle features to match your application's needs.

## Hide insert

The `CanInsert` property controls the visibility of the insert tool. When set to `false`, the insert tool will be hidden from the toolbar.

{% tabs %}
{% highlight razor %}
@page "/"

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PageOrganizerSettings CanInsert="false"></PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

![Insert disabled](./images/organize-insert-disable.png)

## Hide delete

The `CanDelete` property controls the visibility of the delete tool. When set to `false`, the delete tool will be hidden.

{% tabs %}
{% highlight razor %}
@page "/"

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PageOrganizerSettings CanDelete="false"></PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

![Delete disabled](./images/organize-delete-disable.png)

## Hide rotate

The `CanRotate` property controls the visibility of the rotate tool. When set to `false`, the rotate tool will be hidden.

{% tabs %}
{% highlight razor %}
@page "/"

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PageOrganizerSettings CanRotate="false"></PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

![Rotate disabled](./images/organize-rotate-disable.png)

## Hide duplicate

The `CanDuplicate` property controls the visibility of the copy tool. When set to `false`, the copy tool will be hidden.

{% tabs %}
{% highlight razor %}
@page "/"

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PageOrganizerSettings CanDuplicate="false"></PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

![Duplicate disabled](./images/organize-copy-disable.png)

## Hide import

The `CanImport` property controls the visibility of the import tool. When set to `false`, the import tool will be hidden.

{% tabs %}
{% highlight razor %}
@page "/"

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PageOrganizerSettings CanImport="false"></PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

![Import disabled](./images/organize-import-disable.png)

## Hide extract

The `CanExtractPages` property controls the visibility of the extract tool. When set to `false`, the extract tool will be hidden.

{% tabs %}
{% highlight razor %}
@page "/"

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PageOrganizerSettings CanExtractPages="false"></PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

![Extract disabled](./images/organize-extract-disable.png)

## Disable rearrange

The `CanRearrange` property controls the ability to rearrange pages. When set to `false`, pages cannot be rearranged.

{% tabs %}
{% highlight razor %}
@page "/"

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
              <PageOrganizerSettings CanRearrange="false"></PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Page%20Organizer/Page-Organizer-Settings)