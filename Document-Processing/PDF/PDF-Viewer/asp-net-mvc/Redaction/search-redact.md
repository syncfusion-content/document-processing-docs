---
layout: post
title: Search text and redact in MVC PDF Viewer | Syncfusion
description: Learn how to find text and add redaction annotations programmatically in the Syncfusion ASP.NET MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Search text and redact in ASP.NET MVC PdfViewer

You can search for a keyword in the loaded PDF and automatically add redaction annotations over each match. The example below wires the extractTextCompleted event, triggers text extraction, performs a search, and places redaction annotations for every result.

N> Prerequisites: Add the PdfViewer control to your ASP.NET MVC application and ensure a document is loaded. Make sure the redaction feature is available in the version you are using. Once applied, redaction permanently removes the selected content.

## Steps to add Redaction annotations on search Text Bounds

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create a simple PDF Viewer sample.


**Step 2:** Use the following code-snippets to Add Redaction annotation on Search Text Bounds.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
@page
@model IndexModel
@{
    ViewData["Title"] = "Search text and redact";
}
<div class="content-wrapper">
    <div style="margin-bottom:8px; display:flex; gap:8px; align-items:center;">
        <button id="searchTextRedact" type="button" onclick="searchTextAndRedact()">Search "syncfusion" & Mark for Redaction</button>
        <button id="applyRedaction" type="button" onclick="applyRedaction()">Apply Redaction</button>
    </div>

    <ejs-pdfviewer
        id="pdfViewer"
        style="height:640px; display:block"
        resourceUrl="https://cdn.syncfusion.com/ej2/31.2.12/dist/ej2-pdfviewer-lib"
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        isExtractText="true">
    </ejs-pdfviewer>
</div>
<script type="text/javascript">
    window.onload = function () {
        window.viewer = document.getElementById('pdfViewer').ej2_instances[0];
        // Primary toolbar including Redaction
        viewer.toolbarSettings = {
            toolbarItems: [
                'OpenOption', 'UndoRedoTool', 'PageNavigationTool', 'MagnificationTool', 'PanTool',
                'SelectionTool', 'CommentTool', 'SubmitForm', 'AnnotationEditTool', 'RedactionEditTool',
                'FormDesignerEditTool', 'SearchOption', 'PrintOption', 'DownloadOption'
            ]
        };
    };

    // Finds "syncfusion" and adds redaction annotations for each match
    async function searchTextAndRedact() {
        if (!window.viewer) return;
        var term = 'syncfusion';
        try {
            var results = await viewer.textSearchModule.findTextAsync(term, false);
            if (!results || results.length === 0) {
                console.warn('No matches found.');
                return;
            }
            var px = function (pt) { return (pt * 96) / 72; };
            for (var i = 0; i < results.length; i++) {
                var pageResult = results[i];
                if (!pageResult || !pageResult.bounds || pageResult.bounds.length === 0) continue;
                if (pageResult.pageIndex == null) continue;
                var pageNumber = pageResult.pageIndex + 1; // 1-based
                for (var b = 0; b < pageResult.bounds.length; b++) {
                    var bound = pageResult.bounds[b];
                    viewer.annotation.addAnnotation('Redaction', {
                        bound: {
                            x: px(bound.x),
                            y: px(bound.y),
                            width: px(bound.width),
                            height: px(bound.height)
                        },
                        pageNumber: pageNumber,
                        overlayText: 'Confidential',
                        fillColor: '#00FF40FF',
                        fontColor: '#333333',
                        fontSize: 12,
                        fontFamily: 'Arial',
                        markerFillColor: '#FF0000',
                        markerBorderColor: '#000000'
                    });
                }
            }
        } catch (e) {
            console.error('Search failed:', e);
        }
    }

    // Permanently applies all redaction marks in the document
    function applyRedaction() {
        if (!window.viewer) return;
        viewer.annotation.redact();
    }
</script>
{% endhighlight %}
{% endtabs %}

[View Sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples)

## Notes
- Ensure the PDF is fully loaded before triggering extraction and search.
- Bounds from search are in points (72 DPI). Convert to pixels (96 DPI) to align with annotation coordinates.
- Customize overlay text, colors, and typography as needed.
- Adding a redaction annotation covers the content visually. To permanently remove sensitive data, use the viewer's Apply Redaction action or equivalent API if available in your version.

## See also

* [Overview of Redaction](./overview)
* [Programmatic Support in Redaction](./programmatic-support)
* [UI interactions](./ui-interaction)
* [Redaction in Mobile View](./mobile-view)
* [Redaction Toolbar](./toolbar)