---
layout: post
title: Import Annotation in ASP.NET MVC PDF Viewer | Syncfusion
description: Import annotations into the ASP.NET MVC PDF Viewer in supported formats using the built-in UI options and programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Import Annotations in ASP.NET MVC PDF Viewer

Annotations can be imported into the PDF Viewer using the built-in UI or programmatically. The UI accepts JSON and XFDF files from the Comments panel; programmatic import accepts an annotation object previously exported by the viewer.

## Import using the UI (Comments panel)

The Comments panel provides import options in its overflow menu:

- **Import annotations from JSON file**
- **Import annotations from XFDF file**

To import annotations, follow these steps:
1. Open the Comments panel in the PDF Viewer.
2. Click the overflow menu (three dots) at the top of the panel.
3. Choose the appropriate import option and select the file.

All annotations in the selected file are applied to the current document.

![Import Annotation](../../images/import.gif)

## Import programmatically (from object)

Import annotations from an object previously exported using **exportAnnotationsAsObject()**. Only objects produced by the viewer can be re-imported with the **importAnnotation()** API.

Example: export annotations as an object and import them back into the viewer.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<button id="exportObj" onclick="exportAsObject()">Export as Object</button>
<button id="importObj" onclick="importFromObject()">Import from Object</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    // Hold the exported annotation object between calls
    var exportedObject = null;

    function exportAsObject() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotationsAsObject().then(function (value) {
            console.log('Exported annotation object:', value);
            exportedObject = value;
        });
    }

    function importFromObject() {
        if (exportedObject) {
            var viewer = document.getElementById('pdfviewer').ej2_instances[0];
            viewer.importAnnotation(JSON.parse(exportedObject));
        }
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<button id="exportObj" onclick="exportAsObject()">Export as Object</button>
<button id="importObj" onclick="importFromObject()">Import from Object</button>
<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").Render()
</div>
<script>
    var exportedObject = null;

    function exportAsObject() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.exportAnnotationsAsObject().then(function (value) {
            console.log('Exported annotation object:', value);
            exportedObject = value;
        });
    }

    function importFromObject() {
        if (exportedObject) {
            var viewer = document.getElementById('pdfviewer').ej2_instances[0];
            viewer.importAnnotation(JSON.parse(exportedObject));
        }
    }
</script>

{% endhighlight %}
{% endtabs %}

N> Only objects produced by the viewer (for example, by `exportAnnotationsAsObject()`) are compatible with `importAnnotation()`. Persist exported objects in a safe storage location (database or API) and validate them before import.

## Common use cases

- Restore annotations saved earlier (for example, from a database or API)
- Apply reviewer annotations shared as JSON/XFDF files via the Comments panel
- Migrate or merge annotations between documents or sessions
- Support collaborative workflows by reloading team annotations

## See also

- [Annotation Overview](../overview)
- [Annotation Types](../annotation-types/area-annotation)
- [Annotation Toolbar](../../toolbar-customization/annotation-toolbar)
- [Create and Modify Annotation](../create-modify-annotation)
- [Customize Annotation](../customize-annotation)
- [Remove Annotation](../delete-annotation)
- [Handwritten Signature](../signature-annotation)
- [Export Annotation](./export-annotation)
- [Import Export Events](./export-import-events)
- [Annotation Permission](../annotation-permission)
- [Annotation in Mobile View](../annotations-in-mobile-view)
- [Annotation Events](../annotation-event)
- [Annotation API](../annotations-api)
