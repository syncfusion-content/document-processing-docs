---
layout: post
title: Programmatically Get Differences | Syncfusion MVC PDF Viewer
description: Learn how to programmatically access text differences between two PDF documents in the Syncfusion MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Programmatically Get Differences in ASP.NET MVC PDF Viewer UI

The semantic text comparison feature provides programmatic access to all differences found between two PDF documents. Using the [`semanticTextCompare()`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#semantictextcompare) method, you can retrieve structured difference data for custom processing, reporting, or integration with other workflows.

## Overview

The comparison provides:

- **Async comparison API** - Use [`semanticTextCompare()`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#semantictextcompare) to compare documents programmatically
- **Difference array access** - Get all detected differences with type and content
- **Structured data** - Each difference contains text, type, location, and page information
- **Categorized results** - Differences grouped by type (Added, Deleted, Modified)
- **Custom processing** - Export, filter, or analyze differences programmatically

## Prerequisites

- An MVC application with HTML views
- CDN ej2.min.js library loaded
- Two PDF viewers for side-by-side comparison
- Semantic text comparison feature enabled

## Steps

### Step 1: Create the MVC view

Create an MVC view (e.g., `SemanticComparison.cshtml`) with dual PDF viewers:

{% tabs %}
{% highlight html tabtitle="View.cshtml" %}
{% raw %}
@{
    ViewBag.Title = "Semantic Text Comparison";
}

<link href="https://cdn.syncfusion.com/ej2/34.1.29/material.css" rel="stylesheet" />
<script src="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2.min.js"></script>

<div id="controlPanel">
    <button onclick="handleCompare()">Compare Documents</button>
    <button onclick="getDifferencesByType('Added')">Get Added Text</button>
    <button onclick="getDifferencesByType('Deleted')">Get Deleted Text</button>
    <button onclick="generateReport()">Generate Report</button>
</div>

<div id="viewersContainer">
    <div>
        <h3>Original Document</h3>
        @Html.EJS().PdfViewer("pdfViewer1").DocumentPath("https://cdn.syncfusion.com/content/pdf/original-document.pdf").ResourceUrl("https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib").DocumentLoad("handleDocumentLoad").Render()
    </div>

    <div>
        <h3>Modified Document</h3>
        @Html.EJS().PdfViewer("pdfViewer2").DocumentPath("https://cdn.syncfusion.com/content/pdf/modified-document.pdf").ResourceUrl("https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib").DocumentLoad("handleDocumentLoad").Render()   
    </div>
</div>

<script src="~/Scripts/comparison.js"></script>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 2: Create the comparison script

Create `comparison.js` with semantic text comparison functions:

{% tabs %}
{% highlight javascript tabtitle="comparison.js" %}
{% raw %}
var appState = {
    viewer1: null,
    viewer2: null,
    loadedCount: 0,
    viewersLoaded: false
};

function handleDocumentLoad() {
    appState.loadedCount++;
    if (appState.loadedCount === 2) {
        appState.viewer1 = document.getElementById('pdfViewer1').ej2_instances[0];
        appState.viewer2 = document.getElementById('pdfViewer2').ej2_instances[0];
        if (appState.viewer1 && appState.viewer2) {
            appState.viewersLoaded = true;
            appState.viewer1.syncViewers(appState.viewer2, true);
        }
    }
}

function handleCompare() {
    if (!appState.viewersLoaded || !appState.viewer1 || !appState.viewer2) {
        console.warn('Viewers not ready for comparison');
        return;
    }

    var options = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: true
    };

    if (typeof appState.viewer1.semanticTextCompare !== 'function') {
        console.error('semanticTextCompare method not available');
        return;
    }

    appState.viewer1.semanticTextCompare(appState.viewer2, options)
        .then(function(result) {
            console.log('Full Comparison Result:', result);

            var originalAnnotations = result.originalDocumentAnnotations || [];
            var modifiedAnnotations = result.modifiedDocumentAnnotations || [];
            var totalTextDiffCount = result.totalTextDiffCount || 0;

            var addedCount = 0;
            var deletedCount = 0;
            var modifiedCount = 0;

            originalAnnotations.forEach(function(pageAnnotations) {
                if (pageAnnotations.differenceAnnotations) {
                    pageAnnotations.differenceAnnotations.forEach(function(diff) {
                        if (diff.textDiffType === 'added') addedCount++;
                        if (diff.textDiffType === 'deleted') deletedCount++;
                        if (diff.textDiffType === 'modified') modifiedCount++;
                    });
                }
            });

            console.log('Total Differences:', totalTextDiffCount);
            console.log('Added:', addedCount, 'Deleted:', deletedCount, 'Modified:', modifiedCount);
        })
        .catch(function(error) {
            console.error('Error during comparison:', error);
        });
}

function getDifferencesByType(type) {
    if (!appState.viewersLoaded || !appState.viewer1 || !appState.viewer2) {
        console.warn('Viewers not ready');
        return [];
    }

    var options = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: true
    };

    appState.viewer1.semanticTextCompare(appState.viewer2, options)
        .then(function(result) {
            var originalAnnotations = result.originalDocumentAnnotations || [];
            var differences = [];

            originalAnnotations.forEach(function(pageAnnotations) {
                if (pageAnnotations.differenceAnnotations) {
                    pageAnnotations.differenceAnnotations.forEach(function(diff) {
                        if (diff.textDiffType === type.toLowerCase()) {
                            differences.push({
                                pageNumber: pageAnnotations.pageNumber,
                                type: diff.textDiffType,
                                text: diff.textDiffData
                            });
                        }
                    });
                }
            });

            console.log(type + ' differences (' + differences.length + '):', differences);
            return differences;
        })
        .catch(function(error) {
            console.error('Error filtering differences:', error);
            return [];
        });
}

function generateReport() {
    if (!appState.viewersLoaded || !appState.viewer1 || !appState.viewer2) {
        console.warn('Viewers not ready');
        return;
    }

    var options = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: true
    };

    appState.viewer1.semanticTextCompare(appState.viewer2, options)
        .then(function(result) {
            var originalAnnotations = result.originalDocumentAnnotations || [];
            var totalTextDiffCount = result.totalTextDiffCount || 0;

            var addedCount = 0;
            var deletedCount = 0;
            var modifiedCount = 0;
            var byPage = {};

            originalAnnotations.forEach(function(pageAnnotations) {
                var pageNum = pageAnnotations.pageNumber;
                if (!byPage[pageNum]) {
                    byPage[pageNum] = { deleted: 0, added: 0, modified: 0 };
                }

                if (pageAnnotations.differenceAnnotations) {
                    pageAnnotations.differenceAnnotations.forEach(function(diff) {
                        if (diff.textDiffType === 'deleted') {
                            deletedCount++;
                            byPage[pageNum].deleted++;
                        } else if (diff.textDiffType === 'added') {
                            addedCount++;
                            byPage[pageNum].added++;
                        } else if (diff.textDiffType === 'modified') {
                            modifiedCount++;
                            byPage[pageNum].modified++;
                        }
                    });
                }
            });

            var report = {
                totalDifferences: totalTextDiffCount,
                summary: {
                    added: addedCount,
                    deleted: deletedCount,
                    modified: modifiedCount
                },
                byPage: byPage,
                timestamp: new Date().toISOString()
            };

            console.log('=== DETAILED COMPARISON REPORT ===');
            console.log('Total Differences:', report.totalDifferences);
            console.log('Added:', report.summary.added);
            console.log('Deleted:', report.summary.deleted);
            console.log('Modified:', report.summary.modified);
            console.log('Full Report:', report);

            return report;
        })
        .catch(function(error) {
            console.error('Error generating report:', error);
        });
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 3: Perform semantic text comparison
## Features

- **Async API** - `semanticTextCompare()` returns a promise with structured results
- **Difference extraction** - Automatically categorizes differences by type (Added, Deleted, Modified)
- **Page grouping** - Easy to group differences by page number
- **Bounds information** - Each difference includes location and size information
- **Type filtering** - Filter results by Added, Deleted, or Modified differences

## Difference object structure

Each difference object contains:

| Property | Type | Description |
|----------|------|-------------|
| `type` | string | Type of difference: 'Added', 'Deleted', or 'Modified' |
| `text` | string | The actual text content of the difference |
| `pageNumber` | number | Page number where difference is located (1-based) |

## API Reference

### semanticTextCompare(viewer2, options)

Performs semantic text comparison between two PDF documents.

**Parameters:**
- `viewer2` - The second PDF viewer instance to compare against
- `options` - Comparison options object with `beforeColor`, `afterColor`, `beforeColorOpacity`, `afterColorOpacity`, `enableHighlights`

**Returns:** Promise with result object containing `totalTextDiffCount`, `originalDocumentAnnotations`, and `modifiedDocumentAnnotations`

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/mvc-pdf-viewer-examples/tree/master/Semantic%20Text%20Comparison/Programmatically%20get%20differences).

## Related topics

- [Overview of semantic text comparison](./overview)
- [Highlight differences in UI](./highlight-differences)