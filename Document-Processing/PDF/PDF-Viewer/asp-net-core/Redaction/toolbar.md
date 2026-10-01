---
layout: post
title: Toolbar in ASP.NET Core PDF Viewer | Syncfusion
description: Customize the redaction toolbar in the ASP.NET Core PDF Viewer by showing or hiding the default redaction actions to fit your scenario.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize the Redaction Toolbar in ASP.NET Core PDF Viewer

This guide shows how to enable and control the redaction toolbar in the ASP.NET Core PDF Viewer, including showing/hiding it from the primary toolbar programmatically.

**Outcome**: a working viewer with the Redaction toolbar available and code to toggle it.

## Prerequisites

- Syncfusion ASP.NET Core PDF Viewer installed and added to your project. See [getting started guide](../getting-started).
- A public PDF or service endpoint (the examples use a CDN-hosted PDF and the Syncfusion resource URL).

## Steps

### Enable redaction toolbar

To enable the redaction toolbar, configure the `toolbarSettings.toolbarItems` property of the PdfViewer instance to include the **RedactionEditTool**.

The following example shows how to enable the redaction toolbar:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer
        id="pdfViewer"
        style="height:640px; display:block"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.12/dist/ej2-pdfviewer-lib"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
window.onload = function () {
        var viewer = document.getElementById('pdfViewer').ej2_instances[0];
        // Include RedactionEditTool in the primary toolbar
        viewer.toolbarSettings = {
            toolbarItems: [
                'OpenOption',
                'UndoRedoTool',
                'PageNavigationTool',
                'MagnificationTool',
                'PanTool',
                'SelectionTool',
                'CommentTool',
                'SubmitForm',
                'AnnotationEditTool',
                'RedactionEditTool',
                'FormDesignerEditTool',
                'SearchOption',
                'PrintOption',
                'DownloadOption'
            ]
        };
    }
</script>
{% endhighlight %}
{% endtabs %}

Refer to the following image for the toolbar view:

![Enable redaction toolbar](./redaction-annotations-images/redaction-icon-toolbar.png)

**Expected result**: the primary toolbar contains the Redaction icon. Clicking it opens the redaction toolbar.

## Show or hide the redaction toolbar

Toggle the redaction toolbar using the built‑in toolbar icon or programmatically with the `showRedactionToolbar` method.

### Display the redaction toolbar using the toolbar icon

When `RedactionEditTool` is included in the toolbar settings, clicking the redaction icon in the primary toolbar shows or hides the redaction toolbar.

![Show redaction toolbar from the primary toolbar](./redaction-annotations-images/redaction-icon-toolbar.png)

### Display the redaction toolbar programmatically

Control visibility in code by calling `viewer.toolbar.showRedactionToolbar(true)` or `viewer.toolbar.showRedactionToolbar(false)`.

The following example demonstrates toggling the redaction toolbar programmatically:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="content-wrapper">
    <!-- Separate buttons: Show and Hide Redaction toolbar -->
    <div style="margin-bottom:8px; display:flex; gap:8px;">
        <button type="button" onclick="showRedactionToolbar()">Show Redaction Toolbar</button>
        <button type="button" onclick="hideRedactionToolbar()">Hide Redaction Toolbar</button>
    </div>
    <ejs-pdfviewer
        id="pdfViewer"
        style="height:640px; display:block"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.12/dist/ej2-pdfviewer-lib"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
    window.onload = function () {
        window.viewer = document.getElementById('pdfViewer').ej2_instances[0];
        // Includes RedactionEditTool in the primary toolbar
        viewer.toolbarSettings = {
            toolbarItems: [
                'OpenOption', 'UndoRedoTool', 'PageNavigationTool', 'MagnificationTool', 'PanTool',
                'SelectionTool', 'CommentTool', 'SubmitForm', 'AnnotationEditTool', 'RedactionEditTool',
                'FormDesignerEditTool', 'SearchOption', 'PrintOption', 'DownloadOption'
            ]
        };
    };
    // Separate handlers for show/hide (no toggle)
    function showRedactionToolbar() {
        if (!window.viewer) return;
        viewer.toolbar.showRedactionToolbar(true);
    }
    function hideRedactionToolbar() {
        if (!window.viewer) return;
        viewer.toolbar.showRedactionToolbar(false);
    }
</script>
{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples)

Refer to the following image for details:

![Programmatically show the Redaction toolbar](./redaction-annotations-images/show-redaction-toolbar.png)

## Troubleshooting

- If redaction icon not visible, ensure that `'RedactionEditTool'` is added to `toolbarSettings.toolbarItems` and `Toolbar` is included in the injected services.
- If toolbar buttons have no effect, verify `resourceUrl` points to a reachable `ej2-pdfviewer-lib` bundle appropriate for your viewer version.
- If viewer fails to load PDF, use a public PDF URL or configure a server-side service endpoint.

## Related topics

- [Adding the redaction annotation in PDF viewer](./overview)
- [Redaction UI interactions](./ui-interaction)
- [Programmatic support](./programmatic-support)
- [Mobile view](./mobile-view)
- [Search Text and Redact](./search-redact)