---
layout: post
title: Load document after resources Loaded MVC PDF Viewer | Syncfusion
description: Learn here how to load a PDF only after assets are ready in the Syncfusion ASP.NET MVC PDF Viewer (Standalone) using the resourcesLoaded event.
platform: document-processing
control: PDF Viewer 
documentation: ug
domainurl: ##DomainURL##
---

# Load a PDF only after PDFium resources are ready

In Standalone mode, the ASP.NET MVC PDF Viewer downloads its PDFium runtime assets (scripts/wasm) from the location specified in the resourceUrl property. Attempting to load a document before those assets are available can cause errors. Use the resourcesLoaded event to defer document loading until all required assets are ready.

## When does resourcesLoaded trigger?

The resourcesLoaded event fires once the viewer finishes loading all required PDFium assets. At this point, it is safe to call the load method to open a document (by URL or Base64).

## How to Load Document after resourcesLoaded

- Set the resourceUrl to a valid PDF Viewer assets path (CDN or your hosted path).
- Listen to resourcesLoaded and call load inside the handler.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@{
    ViewBag.Title = "Home Page";
}
@Html.EJS().ScriptManager()
<div>
<div style="height:500px;width:100%;">
        @Html.EJS().PdfViewer("pdfviewer").ResourceUrl("https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib").Render()
</div>
</div>
 
<script>
    window.onload = function() {
        var viewer = (document.getElementById('pdfviewer')).ej2_instances[0];
        viewer.resourcesLoaded = function () {
            viewer.load(base64, ''); //viewer.load(documnetUrl,'') to load via document Url
        }
    }
    var documentUrl = 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';

    var base64 = 'data:application/pdf;base64,JVBERi0xLjMNCiXi48....'; //Update Base64 here
</script>

{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/How%20to)

## Notes and best practices

- Always set a valid resourceUrl when using the Standalone PDF Viewer. If the path is incorrect or blocked by the network, the event cannot fire.
- Load documents inside resourcesLoaded. This guarantees the PDFium runtime is ready and prevents intermittent errors on slower networks.
- The event fires for the viewer’s asset load life cycle, not for every document load. After it fires once, you can safely call load again later (for example, in response to user actions) without waiting for the event.

## See also

- [Events in ASP.NET MVC PDF Viewer](../event#resourcesloaded)
- [Open PDF files](../open-pdf-files)
- [Save PDF files](../save-pdf-files)
- [Getting started](../getting-started)
