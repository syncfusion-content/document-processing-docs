---
layout: post
title: Redaction Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Add, edit, delete, and apply redaction annotations in the ASP.NET MVC PDF Viewer to permanently remove sensitive content from a PDF.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Redaction Annotation in ASP.NET MVC PDF Viewer

Redaction annotations permanently remove sensitive content from a PDF. You can draw redaction marks over text or graphics, redact entire pages, customize overlay text and styling, and apply redaction to finalize.

![Toolbar with the Redaction tool highlighted](../../Redaction/redaction-annotations-images/redaction-icon-toolbar.png)

## Add Redaction Annotation

### Add redaction annotations in UI
- Use the **Redaction** tool from the toolbar to draw over content to hide it.
- Redaction marks can show overlay text (for example, "Confidential") and can be styled.

![Drawing a redaction annotation on the page](../../Redaction/redaction-annotations-images/adding-redaction-annotation.png)

Redaction annotations are interactive:
- **Movable**  
![Moving a redaction annotation](../../Redaction/redaction-annotations-images/moving-redaction-annotation.png)
- **Resizable**  
![Resizing a redaction annotation](../../Redaction/redaction-annotations-images/resizing-redaction-annotation.png)

You can also add redaction annotations from the **context menu** by selecting content and choosing **Redact Annotation**.  
![Context menu showing Redact Annotation option](../../Redaction/redaction-annotations-images/redact-text-context-menu.png)

N> Ensure the **Redaction** tool is included in the toolbar. See [RedactionToolbar](../../Redaction/toolbar.md) for configuration.

### Add redaction annotations programmatically

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addRedaction" onclick="addRedaction()">Add Redaction programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addRedaction() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Redaction", {
            bound: { x: 200, y: 480, width: 150, height: 75 },
            pageNumber: 1,
            markerFillColor: '#000',
            markerBorderColor: '#fff',
            fillColor: '#000',
            overlayText: 'Confidential',
            fontColor: '#fff',
            fontFamily: 'Times New Roman',
            fontSize: 10,
            beforeRedactionsApplied: false
        });
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addRedaction" onclick="addRedaction()">Add Redaction programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addRedaction() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addAnnotation("Redaction", {
            bound: { x: 200, y: 480, width: 150, height: 75 },
            pageNumber: 1,
            markerFillColor: '#000',
            markerBorderColor: '#fff',
            fillColor: '#000',
            overlayText: 'Confidential',
            fontColor: '#fff',
            fontFamily: 'Times New Roman',
            fontSize: 10,
            beforeRedactionsApplied: false
        });
    }
</script>

{% endhighlight %}
{% endtabs %}

## Edit Redaction Annotations

### Edit redaction annotations in UI
Use the viewer to select, move, and resize Redaction annotations. Use the context menu for additional actions.

#### Edit the properties of redaction annotations in UI
Use the property panel or **context menu → Properties** to change overlay text, font, fill color, and more.  
![Redaction Property Panel Icon](../../Redaction/redaction-annotations-images/redaction-property-panel-icon.png)  
![Redaction Property Panel via Context Menu](../../Redaction/redaction-annotations-images/redaction-property-panel-via-context-menu.png)

### Edit redaction annotations programmatically

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="editRedaction" onclick="editFirstRedaction()">Edit Redaction programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editFirstRedaction() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Redaction') {
                viewer.annotationCollection[i].overlayText = 'EditedAnnotation';
                viewer.annotationCollection[i].markerFillColor = '#222';
                viewer.annotationCollection[i].fontColor = '#ff0';
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="editRedaction" onclick="editFirstRedaction()">Edit Redaction programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function editFirstRedaction() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Redaction') {
                viewer.annotationCollection[i].overlayText = 'EditedAnnotation';
                viewer.annotationCollection[i].markerFillColor = '#222';
                viewer.annotationCollection[i].fontColor = '#ff0';
                viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
                break;
            }
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

## Delete redaction annotations

### Delete in UI
- **Right-click → Delete**  
![Context menu showing Delete for a redaction](../../Redaction/redaction-annotations-images/redaction-delete-context-menu.png)
- Use the **Delete** button in the toolbar  
![Toolbar delete icon for redaction](../../Redaction/redaction-annotations-images/redaction-delete-icon.png)
- Press **Delete** key

### Delete programmatically

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="deleteRedaction" onclick="deleteFirstRedaction()">Delete Redaction by ID programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function deleteFirstRedaction() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var first = null;
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Redaction') {
                first = viewer.annotationCollection[i];
                break;
            }
        }
        if (first) {
            viewer.annotation.deleteAnnotationById(first.annotationId);
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="deleteRedaction" onclick="deleteFirstRedaction()">Delete Redaction by ID programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function deleteFirstRedaction() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var first = null;
        for (var i = 0; i < viewer.annotationCollection.length; i++) {
            if (viewer.annotationCollection[i].subject === 'Redaction') {
                first = viewer.annotationCollection[i];
                break;
            }
        }
        if (first) {
            viewer.annotation.deleteAnnotationById(first.annotationId);
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

## Redact pages

### Redact pages in UI
Use the **Redact Pages** dialog to mark entire pages with options like **Current Page**, **Odd Pages Only**, **Even Pages Only**, and **Specific Pages**.  
![Page Redaction Panel](../../Redaction/redaction-annotations-images/page-redaction-panel.png)

### Add page redactions programmatically

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="addPageRedactions" onclick="addPageRedactions()">Add page redactions programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addPageRedactions() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addPageRedactions([1, 3, 5]);
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="addPageRedactions" onclick="addPageRedactions()">Add page redactions programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function addPageRedactions() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.addPageRedactions([1, 3, 5]);
    }
</script>

{% endhighlight %}
{% endtabs %}

## Apply redaction

### Apply redaction in UI
Click **Apply Redaction** to permanently remove marked content.  
![Redact Button Icon](../../Redaction/redaction-annotations-images/redact-button-icon.png)  
![Apply Redaction Dialog](../../Redaction/redaction-annotations-images/apply-redaction-dialog.png)

N> **Redaction is permanent and cannot be undone.**

### Apply redaction programmatically

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="applyRedaction" onclick="applyRedaction()">Apply Redaction programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function applyRedaction() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.redact();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="applyRedaction" onclick="applyRedaction()">Apply Redaction programmatically</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function applyRedaction() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.redact();
    }
</script>

{% endhighlight %}
{% endtabs %}

N> Applying redaction is **irreversible**.

## Default redaction settings during initialization

Configure defaults with the **redactionSettings** property.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").RedactionSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerRedactionSettings { OverlayText = "Confidential", MarkerFillColor = "#000000" }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").RedactionSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerRedactionSettings { OverlayText = "Confidential", MarkerFillColor = "#000000" }).Render()
</div>

{% endhighlight %}
{% endtabs %}

## See also
- [Annotation Overview](../overview)
- [Redaction Overview](../../Redaction/overview)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../../annotation/create-modify-annotation)
- [Customize Annotation](../../annotation/customize-annotation)
- [Remove Annotation](../../annotation/delete-annotation)
- [Handwritten Signature](../../annotation/signature-annotation)
- [Export and Import Annotation](../../annotation/export-import/export-annotation)
- [Annotation in Mobile View](../../annotation/annotations-in-mobile-view)
