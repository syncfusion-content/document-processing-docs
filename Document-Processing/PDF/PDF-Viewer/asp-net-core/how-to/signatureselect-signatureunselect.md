---
layout: post
title: Handle signatureSelect and signatureUnselect events in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to respond to signatureSelect and signatureUnselect events in the Syncfusion ASP.NET Core PDF Viewer to track handwritten signature interactions.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Handle signatureSelect and signatureUnselect events

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer triggers the `signatureSelect` and `signatureUnselect` events when a handwritten signature annotation gains or loses focus. These events enable applications to log reviewer actions, update contextual UI elements, or validate signatures before finalizing the document.

**signatureSelect**

This event fires when a user selects an existing handwritten signature or completes a new signature drawing. The event arguments provide metadata such as the annotation ID, bounds, and page index, allowing the application to synchronize the signature state with other UI components.

**signatureUnselect**

This event fires when focus moves away from a signature or the user deselects it. Use this callback to persist changes, disable signature-specific toolbar actions, or reset state that is only relevant while a signature is active.

Follow these steps to integrate signature event handling in an ASP.NET Core application:

1. Create a PDF Viewer project by following the [ASP.NET Core getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started).
2. Define the event handlers and assign them to the `signatureSelect` and `signatureUnselect` properties of the PDF Viewer component.

The following example demonstrates how to subscribe to these events in both standalone and server-backed configurations.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@{
    ViewData["Title"] = "Home page";
}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib"
                   signatureSelect="signatureSelect"
                   signatureUnselect="signatureUnselect">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">

    function signatureSelect(args) {
        console.log('Signature selected:', args);
    }
    function signatureUnselect(args) {
        console.log('Signature selected:', args);
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
                   signatureSelect="signatureSelect"
                   signatureUnselect="signatureUnselect">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">

    function signatureSelect(args) {
        console.log('Signature selected:', args);
    }
    function signatureUnselect(args) {
        console.log('Signature selected:', args);
    };

</script>
{% endhighlight %}
{% endtabs %}

By implementing `signatureSelect` and `signatureUnselect`, developers can audit user interactions, manage toolbar states, and provide immediate visual feedback during the signing process.
