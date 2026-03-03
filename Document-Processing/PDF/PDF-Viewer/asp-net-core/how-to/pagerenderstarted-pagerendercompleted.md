---
layout: post
title: Handle pageRenderInitiate and pageRenderComplete events in ASP.NET Core PDF Viewer | Syncfusion
description: Discover how to use the pageRenderInitiate and pageRenderComplete events in the Syncfusion ASP.NET Core PDF Viewer to monitor page rendering stages.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Page rendering events in ASP.NET Core PDF Viewer

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer provides the `pageRenderInitiate` and `pageRenderComplete` events to monitor and respond to each stage of the page rendering lifecycle. These events are essential for tracking progress, managing specialized UI overlays, or deferring computational tasks until a page is fully visible.

## pageRenderInitiate

The `pageRenderInitiate` event fires correctly before a page enters the rendering process. This is the ideal stage to initialize timers, allocate temporary resources, or log analytical data. The event arguments provide the specific page index and source details.

## pageRenderComplete

The `pageRenderComplete` event fires after the viewer has finished drawing the page content. Use this callback to finalize custom overlays, update progress indicators, or trigger workflows that depend on a fully rendered page.

The following example demonstrates how to subscribe to these events in both standalone and server-backed configurations:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@{
    ViewData["Title"] = "Home page";
}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib"
                   pageRenderInitiate="pageRenderInitiate"
                   pageRenderComplete="pageRenderComplete">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">

    function pageRenderInitiate(args) {
        // This method is called when the page rendering starts
        console.log('Rendering of pages started');
        console.log(args);
    }
    function pageRenderComplete(args) {
        // This method is called when the page rendering completes
        console.log('Rendering of pages completed');
        console.log(args);
    };

</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

@{
    ViewData["Title"] = "Home page";
}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   serviceUrl="/Index"
                   pageRenderInitiate="pageRenderInitiate"
                   pageRenderComplete="pageRenderComplete">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">

    function pageRenderInitiate(args) {
        // This method is called when the page rendering starts
        console.log('Rendering of pages started');
        console.log(args);
    }
    function pageRenderComplete(args) {
        // This method is called when the page rendering completes
        console.log('Rendering of pages completed');
        console.log(args);
    };

</script>
{% endhighlight %}
{% endtabs %}

By leveraging these rendering events, developers can maintain granular control over the viewer's lifecycle and provide a more interactive documentation experience.
