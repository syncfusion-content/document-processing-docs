---
layout: post
title: Search Redact in ASP.NET Core PDF Viewer | Syncfusion
description: Find text and add redaction annotations programmatically in the ASP.NET Core PDF Viewer to remove sensitive content across an entire document.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Search and Redact Text in ASP.NET Core PDF Viewer

## Overview

This guide shows how to search for text inside a loaded PDF and add redaction annotations programmatically for every match. You will add two buttons: one to locate and mark matches with redaction annotations, and another to apply redactions (permanently remove the marked content).

**Outcome:** After following the steps you will have a working ASP.NET Core sample where clicking **Search & Mark for Redaction** marks found text with redaction annotations and clicking **Apply Redaction** permanently removes the marked content.

## Prerequisites

- Syncfusion ASP.NET Core PDF Viewer added to your project. See [getting started guide](../getting-started).
- The viewer's redaction feature enabled in your product version.

## Steps

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to create a simple PDF Viewer sample.


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

[View Sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples)

### Expected result

- The viewer loads the specified PDF.
- Clicking **Search "syncfusion" & Mark for Redaction** adds redaction annotations over the matched text.
- Clicking **Apply Redaction** permanently removes the marked content from the document; this operation is irreversible.

## Troubleshooting

- Issue: "No matches found" even though text exists — Cause: PDF text extraction may not be ready. Solution: Wait for the document to finish loading or call search after the `documentLoad` event.
- Issue: Bounds look misplaced — Cause: `findTextAsync()` returns bounds in points (72 DPI). Ensure conversion to pixels using the provided `px()` helper.
- Issue: `textSearchModule` is undefined — Cause: `TextSearch` service not injected. Add `TextSearch` to the injected services list.
- Issue: Redactions not applied — Cause: `redact()` requires redaction annotations present and viewer to support apply-redaction; ensure `Annotation` service and `Redaction` features are available in your build.

## Related topics

- [Overview of Redaction](./overview)
- [Programmatic Support in Redaction](./programmatic-support)
- [Redaction UI interactions](./ui-interaction)
- [Redaction in Mobile View](./mobile-view)
- [Redaction Toolbar](./toolbar)