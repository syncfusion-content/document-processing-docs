---
layout: post
title: Annotations Undo Redo in ASP.NET MVC PDF Viewer | Syncfusion
description: Undo or redo annotation changes in the ASP.NET MVC PDF Viewer using the toolbar or programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Annotations Undo and Redo in ASP.NET MVC PDF Viewer

The PDF Viewer provides built-in support for undoing and redoing annotation actions such as add, edit, and delete. Use the toolbar buttons or the corresponding APIs to manage annotation history.

## Undo and Redo via UI

The undo and redo buttons are available in the annotation toolbar after an annotation change is made.

- **Undo**: Reverts the most recent annotation action.
- **Redo**: Reapplies the most recently undone action.

![Undo Redo Toolbar](../images/undo-redo.png)

## Undo and Redo Programmatically

Use the **undo()** and **redo()** methods of the annotation module to programmatically manage history.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="undoAnnotation" onclick="undoAnnotation()">Undo Annotation</button>
<button id="redoAnnotation" onclick="redoAnnotation()">Redo Annotation</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function undoAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.undo();
    }

    function redoAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.redo();
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="undoAnnotation" onclick="undoAnnotation()">Undo Annotation</button>
<button id="redoAnnotation" onclick="redoAnnotation()">Redo Annotation</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    function undoAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.undo();
    }

    function redoAnnotation() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.annotation.redo();
    }
</script>

{% endhighlight %}
{% endtabs %}

N> The undo/redo history is per-session and is reset when the document is reloaded.

## See also

- [Annotation Overview](./overview)
- [Create and Modify Annotation](./create-modify-annotation)
- [Customize Annotation](./customize-annotation)
- [Remove Annotation](./delete-annotation)
- [Handwritten Signature](./signature-annotation)
- [Export and Import Annotation](./export-import/export-annotation)
- [Annotation Permission](./annotation-permission)
- [Annotation Events](./annotation-event)
- [Annotation API](./annotations-api)
