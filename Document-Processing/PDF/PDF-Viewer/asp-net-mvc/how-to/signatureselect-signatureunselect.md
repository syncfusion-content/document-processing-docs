---
layout: post
title: Handle signatureSelect and signatureUnselect events in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to respond to signatureSelect and signatureUnselect events in the Syncfusion ASP.NET MVC PDF Viewer to track handwritten signature interactions.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# signatureSelect and signatureUnselect events

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC PDF Viewer raises the `signatureSelect` and `signatureUnselect` events whenever a handwritten signature annotation gains or loses focus. Use these callbacks to log reviewer actions, update guidance in the surrounding UI, or validate that a signer completes required steps before saving a document.

**signatureSelect**

This event fires when the user taps or clicks an existing handwritten signature or finishes drawing a new one. The event argument includes metadata such as the annotation ID, bounds, and page number so that applications can highlight related UI elements or load signer details.

**signatureUnselect**

This event fires after the focus moves away from a signature or the user deselects it. Handle the callback to persist edits, disable context commands, or reset state that should only be active while a signature is selected.

Follow these steps to wire the events in an ASP.NET MVC application:

1. Create a PDF Viewer sample by following the [ASP.NET MVC getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started). The guide explains how to register the viewer scripts, styles, and controller endpoints.
2. Place the buttons and script inside the page so the handlers attach after the viewer initializes. The console output appears in the browser developer tools and can be replaced with custom UI updates or service calls.

The following sample subscribes to both events in standalone and server-backed configurations.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

@{
    ViewBag.Title = "Home Page";
}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").SignatureUnselect("signatureUnselect").SignatureSelect("signatureSelect").Render()
</div>

<script>

function signatureSelect(args) {
    console.log('Signature selected:', args);
};

function signatureUnselect(args) {
    console.log('Signature selected:', args);
};
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

@{
    ViewBag.Title = "Home Page";
}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").SignatureUnselect("signatureUnselect").SignatureSelect("signatureSelect").Render()
</div>

<script>
function signatureSelect(args) {
    console.log('Signature selected:', args);
};

function signatureUnselect(args) {
    console.log('Signature selected:', args);
};
</script>

{% endhighlight %}
{% endtabs %}

By handling `signatureSelect` and `signatureUnselect`, applications can audit signer activity, enable or disable toolbar actions, and provide immediate feedback when signatures change state.
