---
layout: post
title: Programmatic Support for Organize Pages in ASP.NET Core PDF Viewer control | Syncfusion
description: Learn here all about Programmatic Support for Organize Pages in Syncfusion ASP.NET Core PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Programmatic Support for Organize Pages in ASP.NET Core PDF Viewer control

The PDF Viewer provides comprehensive programmatic support for organizing pages, allowing you to integrate and manage PDF functionalities directly within your application. This section details the available APIs to enable, control, and interact with the page organization features.

## Enable or disable the page organizer

The page organizer feature can be enabled or disabled using the `enablePageOrganizer` property. By default, this feature is enabled.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enablePageOrganizer="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enablePageOrganizer="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Open the page organizer on document load

You can control whether the page organizer dialog opens automatically when a document is loaded using the `isPageOrganizerOpen` property. The default value is `false`.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   isPageOrganizerOpen="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   isPageOrganizerOpen="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Customize page organizer settings

The `pageOrganizerSettings` API allows you to customize the page management functionalities. You can enable or disable actions such as deleting, inserting, rotating, copying, importing, and rearranging pages, as well as configure thumbnail zoom settings. By default, all actions are enabled, and standard zoom settings are applied.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer  id="pdfviewer" 
                    style="height:600px" 
                    pageOrganizerSettings="@(new {CanDelete= false, CanInsert= false, CanRotate= false, canCopy= false, canRearrange= false, canImport= false, imageZoom= 1, showImageZoomingSlider= true, imageZoomMin= 1, imageZoomMax= 5 })" 
                    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}
<div class="text-center">
    <ejs-pdfviewer  id="pdfviewer" 
                    style="height:600px" 
                    serviceUrl="/api/PdfViewer"
                    pageOrganizerSettings="@(new {CanDelete= false, CanInsert= false, CanRotate= false, canCopy= false, canRearrange= false, canImport= false, imageZoom= 1, showImageZoomingSlider= true, imageZoomMin= 1, imageZoomMax= 5 })" 
                    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

## Open the page organizer dialog

The `openPageOrganizer` method programmatically opens the page organizer dialog, providing access to page management tools.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="openPageOrganizer" onclick="openPageOrganizer()">OpenPageOrganizer</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function openPageOrganizer() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.pageOrganizer.openPageOrganizer();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="openPageOrganizer" onclick="openPageOrganizer()">OpenPageOrganizer</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function openPageOrganizer() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.pageOrganizer.openPageOrganizer();
    }
</script>

{% endhighlight %}
{% endtabs %}

## Close the page organizer dialog

The `closePageOrganizer` method programmatically closes the page organizer dialog.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="closePageOrganizer" onclick="closePageOrganizer()">Close PageOrganizer</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function closePageOrganizer() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.pageOrganizer.closePageOrganizer();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="closePageOrganizer" onclick="closePageOrganizer()">Close PageOrganizer</button>
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>

<script>
    function closePageOrganizer() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.pageOrganizer.closePageOrganizer();
    }
</script>

{% endhighlight %}
{% endtabs %}
