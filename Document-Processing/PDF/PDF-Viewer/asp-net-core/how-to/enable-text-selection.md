---
layout: post
title: Manage Text Selection in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to enable or disable text selection in the Syncfusion ASP.NET Core PDF Viewer using the enableTextSelection property.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Enable or disable text selection in ASP.NET Core PDF Viewer

Control whether users can select and copy text from the PDF using the `enableTextSelection` property. Configure this setting when the viewer initializes or change it dynamically at runtime.

## Configure text selection at initialization

Text selection is enabled by default. Disable it during viewer initialization if the use case requires a read-only viewing experience.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <ejs-pdfviewer id="pdfviewer"
                  style="height:600px"
                  resourceUrl="https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib"
                  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                  enableTextSelection="false">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Toggle text selection at runtime

Dynamically enable or disable text selection using buttons or other UI triggers. The following example shows how to toggle this behavior after the viewer is initialized.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<div class="text-center">
    <button onclick="enableTextSelection()">Enable Text Selection</button>
    <button onclick="disableTextSelection()">Disable Text Selection</button>
    <ejs-pdfviewer id="pdfviewer"
                  style="height:600px"
                  resourceUrl="https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib"
                  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                  enableTextSelection="false">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
    // Toggle text selection dynamically with JavaScript
    function enableTextSelection() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.enableTextSelection = true;
    }

    function disableTextSelection() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.enableTextSelection = false;
    }
</script>

{% endhighlight %}
{% endtabs %}

## Common use cases

- **Sensitive documents:** Disable text selection to prevent unauthorized copying of confidential information.
- **Read-only viewing:** Provide a protected viewing experience where users can only view documents without extraction.
- **Role-based access:** Toggle selection based on user permissions or authentication levels.
- **Document sections:** Conditionally enable or disable selection based on specific document regions.

## Default behavior

Text selection is enabled by default. When disabled, users cannot select or copy text from the PDF, which helps protect document content in security-sensitive scenarios.

N> When `enableTextSelection` is set to `false`, all text selection functionality, including keyboard shortcuts and mouse interactions, is disabled.

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
