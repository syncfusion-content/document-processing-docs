---
layout: post
title: Handle pageRenderInitiate and pageRenderComplete events in ASP.NET Core PDF Viewer | Syncfusion
description: Discover how to use the pageRenderInitiate and pageRenderComplete events in the Syncfusion ASP.NET Core PDF Viewer to monitor page rendering stages.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# pageRenderInitiate and pageRenderComplete event

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer raises the `pageRenderInitiate` and `pageRenderComplete` events for each page that enters the rendering pipeline. These notifications help track progress, update custom UI, and defer heavy logic until a page is ready.

**pageRenderInitiate**

The `pageRenderInitiate` event fires when a page begins rendering. Use it to prepare resources, start timers, or log analytics before drawing occurs. The event argument provides details such as the page number and source so that handlers can apply page-specific logic.

**pageRenderComplete**

The `pageRenderComplete` event fires after the viewer finishes rendering a page. Use it to finalize overlays, clean up temporary data, or trigger post-processing tasks. The event argument includes the rendered page index and status information, enabling conditional workflows.

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

The provided code demonstrates how to subscribe to the `pageRenderInitiate` and `pageRenderComplete` events in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer component.
