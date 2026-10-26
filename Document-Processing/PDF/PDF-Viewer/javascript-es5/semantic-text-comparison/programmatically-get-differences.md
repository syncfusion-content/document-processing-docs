---
layout: post
title: Programmatically Get Differences in JavaScript PDF Viewer | Syncfusion
description: Learn how to programmatically access text differences between two PDF documents in the Syncfusion ES5 JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Programmatically Get Differences in JavaScript PDF Viewer

The semantic text comparison feature provides programmatic access to all differences found between two PDF documents. Using the [`semanticTextCompare()`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#semantictextcompare) method on the PDF Viewer, you can retrieve structured difference data for custom processing, reporting, or integration with other workflows.

## Overview

The comparison provides:

- **Async comparison API** - Use [`semanticTextCompare()`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#semantictextcompare) to compare documents programmatically
- **Difference array access** - Get all detected differences with type and content
- **Structured data** - Each difference contains text, type, location, and page information
- **Categorized results** - Differences grouped by type (Added, Deleted, Modified)
- **Custom processing** - Export, filter, or analyze differences programmatically

## Steps

### Step 1: Create the HTML structure with styles and dual viewers

Create an HTML page with CSS styling and two side-by-side PDF viewers:

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% raw %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Semantic Text Comparison</title>
  <link href="https://cdn.syncfusion.com/ej2/35.1.37/tailwind3.css" rel="stylesheet" />
  <script src="https://cdn.syncfusion.com/ej2/35.1.37/dist/ej2.min.js" type="text/javascript"></script>
</head>
<body>
  <div id="app">
    <!-- Control Panel with Buttons -->
    <div class="control-panel">
      <button id="btnCompare">Compare Documents</button>
      <button id="btnToggleHighlights">Disable Highlights</button>
      <button id="btnToggleSync">Disable Sync</button>
      <button id="btnClearAnnotations">Clear Annotations</button>
      <button id="btnGetAdded">Get Added</button>
      <button id="btnGetDeleted">Get Deleted</button>
      <button id="btnGetModified">Get Modified</button>
      <button id="btnGroupByPage">Group by Page</button>
      <button id="btnGenerateReport">Generate Report</button>
    </div>

    <!-- PDF Viewers Container -->
    <div class="viewers-container">
      <!-- Viewer 1 - Original Document -->
      <div class="viewer-wrapper">
        <div class="viewer-title">Original Document</div>
        <div class="viewer-content">
          <div id="pdfViewer1"></div>
        </div>
      </div>

      <!-- Viewer 2 - Modified Document -->
      <div class="viewer-wrapper">
        <div class="viewer-title">Modified Document</div>
        <div class="viewer-content">
          <div id="pdfViewer2"></div>
        </div>
      </div>
    </div>
  </div>
  <script src="index.js" type="text/javascript"></script>
</body>
</html>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 2: Initialize viewers and manage state

Create `index.js` to initialize dual PDF viewers and manage comparison state:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}
// Global state management
var viewer1 = null;
var viewer2 = null;
var loadedCount = 0;
var viewersLoaded = false;
var synchronizationEnabled = true;
var highlightsEnabled = true;

// Initialize viewers when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize viewer 1
    viewer1 = new ej.pdfviewer.PdfViewer({
        documentPath: 'https://cdn.syncfusion.com/content/pdf/original-document.pdf',
        resourceUrl: 'https://cdn.syncfusion.com/ej2/35.1.37/dist/ej2-pdfviewer-lib',
        documentLoad: handleDocumentLoad
    });

    ej.pdfviewer.PdfViewer.Inject(
        ej.pdfviewer.Toolbar,
        ej.pdfviewer.Magnification,
        ej.pdfviewer.Navigation,
        ej.pdfviewer.Annotation,
        ej.pdfviewer.LinkAnnotation,
        ej.pdfviewer.BookmarkView,
        ej.pdfviewer.ThumbnailView,
        ej.pdfviewer.Print,
        ej.pdfviewer.TextSelection,
        ej.pdfviewer.TextSearch,
        ej.pdfviewer.FormFields,
        ej.pdfviewer.FormDesigner,
        ej.pdfviewer.PageOrganizer
    );

    viewer1.appendTo('#pdfViewer1');

    // Initialize viewer 2
    viewer2 = new ej.pdfviewer.PdfViewer({
        documentPath: 'https://cdn.syncfusion.com/content/pdf/modified-document.pdf',
        resourceUrl: 'https://cdn.syncfusion.com/ej2/35.1.37/dist/ej2-pdfviewer-lib',
        documentLoad: handleDocumentLoad
    });

    ej.pdfviewer.PdfViewer.Inject(
        ej.pdfviewer.Toolbar,
        ej.pdfviewer.Magnification,
        ej.pdfviewer.Navigation,
        ej.pdfviewer.Annotation,
        ej.pdfviewer.LinkAnnotation,
        ej.pdfviewer.BookmarkView,
        ej.pdfviewer.ThumbnailView,
        ej.pdfviewer.Print,
        ej.pdfviewer.TextSelection,
        ej.pdfviewer.TextSearch,
        ej.pdfviewer.FormFields,
        ej.pdfviewer.FormDesigner,
        ej.pdfviewer.PageOrganizer
    );

    viewer2.appendTo('#pdfViewer2');

    // Attach control button event listeners
    attachEventListeners();
});

// Attach event listeners to all control buttons
function attachEventListeners() {
    document.getElementById('btnCompare').addEventListener('click', handleCompare);
    document.getElementById('btnToggleHighlights').addEventListener('click', handleToggleHighlights);
    document.getElementById('btnToggleSync').addEventListener('click', handleToggleSync);
    document.getElementById('btnClearAnnotations').addEventListener('click', handleClearAnnotations);
    document.getElementById('btnGetAdded').addEventListener('click', function() {
        getDifferencesByType('added');
    });
    document.getElementById('btnGetDeleted').addEventListener('click', function() {
        getDifferencesByType('deleted');
    });
    document.getElementById('btnGetModified').addEventListener('click', function() {
        getDifferencesByType('modified');
    });
    document.getElementById('btnGroupByPage').addEventListener('click', groupDifferencesByPage);
    document.getElementById('btnGenerateReport').addEventListener('click', generateReport);
}

// Handle document load event
function handleDocumentLoad() {
    loadedCount++;
    if (loadedCount === 2 && viewer1 && viewer2) {
        viewersLoaded = true;
        if (viewer1.syncViewers) {
            viewer1.syncViewers(viewer2, synchronizationEnabled);
        }
    }
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 3: Perform semantic text comparison

Compare the documents programmatically and access differences:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}
// Perform semantic text comparison
async function handleCompare() {
    if (!viewersLoaded || !viewer1 || !viewer2) {
        console.warn('Viewers not loaded yet');
        return;
    }

    var options = {
        beforeColor: '#FF0000',      // Red for original
        afterColor: '#00FF00',       // Green for modified
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: highlightsEnabled
    };

    try {
        var result = await viewer1.semanticTextCompare(viewer2, options);
        console.log('Full Comparison Result:', result);

        // Access annotations from both documents
        var originalAnnotations = result.originalDocumentAnnotations || [];
        var modifiedAnnotations = result.modifiedDocumentAnnotations || [];
        var totalTextDiffCount = result.totalTextDiffCount || 0;

        console.log('Total Text Differences: ' + totalTextDiffCount);

        // Extract and categorize all differences
        var addedCount = 0, deletedCount = 0, modifiedCount = 0;

        // Process original document annotations (deletions and modifications)
        originalAnnotations.forEach(function(pageAnnotations) {
            if (pageAnnotations.differenceAnnotations) {
                pageAnnotations.differenceAnnotations.forEach(function(diff) {
                    var type = diff.textDiffType;
                    if (type === 'deleted') deletedCount++;
                    if (type === 'modified') modifiedCount++;
                    if (type === 'added') addedCount++;
                });
            }
        });

        console.log('Added: ' + addedCount);
        console.log('Deleted: ' + deletedCount);
        console.log('Modified: ' + modifiedCount);
    } catch (error) {
        console.error('Error during comparison:', error);
    }
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 4: Generate comparison report

Generate a detailed report with differences grouped by page:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}
// Generate detailed report with differences grouped by page
async function generateReport() {
    if (!viewer1 || !viewer2) {
        console.warn('Viewers not loaded');
        return;
    }

    var options = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: true
    };

    try {
        var result = await viewer1.semanticTextCompare(viewer2, options);
        var originalAnnotations = result.originalDocumentAnnotations || [];
        var modifiedAnnotations = result.modifiedDocumentAnnotations || [];
        var totalTextDiffCount = result.totalTextDiffCount || 0;

        var addedCount = 0, deletedCount = 0, modifiedCount = 0;
        var byPage = {};

        // Process all annotations
        originalAnnotations.forEach(function(pageAnnotations) {
            var pageNum = pageAnnotations.pageNumber;
            if (!byPage[pageNum]) {
                byPage[pageNum] = { deleted: 0, added: 0, modified: 0 };
            }

            if (pageAnnotations.differenceAnnotations) {
                pageAnnotations.differenceAnnotations.forEach(function(diff) {
                    var type = diff.textDiffType;
                    if (type === 'deleted') {
                        deletedCount++;
                        byPage[pageNum].deleted++;
                    } else if (type === 'added') {
                        addedCount++;
                        byPage[pageNum].added++;
                    } else if (type === 'modified') {
                        modifiedCount++;
                        byPage[pageNum].modified++;
                    }
                });
            }
        });

        modifiedAnnotations.forEach(function(pageAnnotations) {
            var pageNum = pageAnnotations.pageNumber;
            if (!byPage[pageNum]) {
                byPage[pageNum] = { deleted: 0, added: 0, modified: 0 };
            }

            if (pageAnnotations.differenceAnnotations) {
                pageAnnotations.differenceAnnotations.forEach(function(diff) {
                    var type = diff.textDiffType;
                    if (type === 'deleted') {
                        deletedCount++;
                        byPage[pageNum].deleted++;
                    } else if (type === 'added') {
                        addedCount++;
                        byPage[pageNum].added++;
                    } else if (type === 'modified') {
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
            byPage: byPage
        };

        console.log('Comparison Report:', report);
        return report;
    } catch (error) {
        console.error('Error generating report:', error);
    }
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 5: Add control buttons and synchronization

Manage synchronization, highlights, and comparison controls:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}
// Toggle synchronization
function handleToggleSync() {
    synchronizationEnabled = !synchronizationEnabled;
    var btnToggleSync = document.getElementById('btnToggleSync');
    btnToggleSync.textContent = synchronizationEnabled ? 'Disable Sync' : 'Enable Sync';

    if (viewer1 && viewer2 && viewer1.syncViewers) {
        viewer1.syncViewers(viewer2, synchronizationEnabled);
    }
}

// Toggle highlights
async function handleToggleHighlights() {
    highlightsEnabled = !highlightsEnabled;
    var btnToggleHighlights = document.getElementById('btnToggleHighlights');
    btnToggleHighlights.textContent = highlightsEnabled ? 'Disable Highlights' : 'Enable Highlights';

    if (viewersLoaded && viewer1 && viewer2) {
        var options = {
            beforeColor: '#FF0000',
            afterColor: '#00FF00',
            beforeColorOpacity: 0.4,
            afterColorOpacity: 0.4,
            enableHighlights: highlightsEnabled
        };

        try {
            // Clear previous comparison
            if (viewer1.removeSemanticTextCompare) {
                viewer1.removeSemanticTextCompare(viewer2);
            }
            // Apply new comparison with updated highlights state
            var result = await viewer1.semanticTextCompare(viewer2, options);
            console.log('Highlights updated:', result);
        } catch (error) {
            console.error('Error updating highlights:', error);
        }
    }
}

// Clear annotations
function handleClearAnnotations() {
    if (viewer1 && viewer2) {
        if (viewer1.removeSemanticTextCompare) {
            viewer1.removeSemanticTextCompare(viewer2);
        }
    }
}

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Viewing differences

![Differences panel shows all detected changes](../images/semantic-text-comparison.png)

The differences panel on the right displays all detected differences categorized by type:
- **Deleted** - Text removed from the original document (shown in red in the document)
- **Replaced** - Text that was modified or changed
- Each item shows the page number and change details

## Difference object structure

Each difference object contains:

| Property | Type | Description |
|----------|------|-------------|
| `type` | string | Type of difference: 'Added', 'Deleted', or 'Modified' |
| `text` | string | The actual text content of the difference |
| `pageNumber` | number | Page number where difference is located (1-based) |
| `bounds` | object | Position and size of the difference |
| `bounds.x` | number | X coordinate of the difference |
| `bounds.y` | number | Y coordinate of the difference |
| `bounds.width` | number | Width of the text bounding box |
| `bounds.height` | number | Height of the text bounding box |

## Common use cases

### Filter differences by type

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}
// Get differences filtered by type
async function getDifferencesByType(type) {
    if (!viewer1 || !viewer2) return [];

    var options = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: true
    };

    try {
        var result = await viewer1.semanticTextCompare(viewer2, options);
        var originalAnnotations = result.originalDocumentAnnotations || [];
        var modifiedAnnotations = result.modifiedDocumentAnnotations || [];
        var differences = [];

        // Extract differences by type from original annotations
        originalAnnotations.forEach(function(pageAnnotations) {
            if (pageAnnotations.differenceAnnotations) {
                pageAnnotations.differenceAnnotations.forEach(function(diff) {
                    if (diff.textDiffType === type.toLowerCase()) {
                        differences.push({
                            pageNumber: pageAnnotations.pageNumber,
                            type: diff.textDiffType,
                            text: diff.textDiffData,
                            bounds: diff.annotation ? diff.annotation.bounds : null,
                            color: diff.annotation ? diff.annotation.color : null
                        });
                    }
                });
            }
        });

        // Extract differences by type from modified annotations
        modifiedAnnotations.forEach(function(pageAnnotations) {
            if (pageAnnotations.differenceAnnotations) {
                pageAnnotations.differenceAnnotations.forEach(function(diff) {
                    if (diff.textDiffType === type.toLowerCase()) {
                        var exists = differences.some(function(d) {
                            return d.pageNumber === pageAnnotations.pageNumber && d.text === diff.textDiffData;
                        });
                        if (!exists) {
                            differences.push({
                                pageNumber: pageAnnotations.pageNumber,
                                type: diff.textDiffType,
                                text: diff.textDiffData,
                                bounds: diff.annotation ? diff.annotation.bounds : null,
                                color: diff.annotation ? diff.annotation.color : null
                            });
                        }
                    }
                });
            }
        });

        console.log(type + ' differences (' + differences.length + '):', differences);
        return differences;
    } catch (error) {
        console.error('Error filtering differences:', error);
        return [];
    }
}

// Usage
var addedDifferences = await getDifferencesByType('added');
var deletedDifferences = await getDifferencesByType('deleted');
var modifiedDifferences = await getDifferencesByType('modified');
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Group differences by page

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}
// Group differences by page
async function groupDifferencesByPage() {
    if (!viewer1 || !viewer2) return {};

    var options = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: true
    };

    try {
        var result = await viewer1.semanticTextCompare(viewer2, options);
        var originalAnnotations = result.originalDocumentAnnotations || [];
        var modifiedAnnotations = result.modifiedDocumentAnnotations || [];
        var grouped = {};

        // Group original document differences by page
        originalAnnotations.forEach(function(pageAnnotations) {
            var pageNum = pageAnnotations.pageNumber;
            if (!grouped[pageNum]) {
                grouped[pageNum] = { original: [], modified: [] };
            }

            if (pageAnnotations.differenceAnnotations) {
                pageAnnotations.differenceAnnotations.forEach(function(diff) {
                    grouped[pageNum].original.push({
                        type: diff.textDiffType,
                        text: diff.textDiffData,
                        bounds: diff.annotation ? diff.annotation.bounds : null,
                        color: diff.annotation ? diff.annotation.color : null
                    });
                });
            }
        });

        // Group modified document differences by page
        modifiedAnnotations.forEach(function(pageAnnotations) {
            var pageNum = pageAnnotations.pageNumber;
            if (!grouped[pageNum]) {
                grouped[pageNum] = { original: [], modified: [] };
            }

            if (pageAnnotations.differenceAnnotations) {
                pageAnnotations.differenceAnnotations.forEach(function(diff) {
                    grouped[pageNum].modified.push({
                        type: diff.textDiffType,
                        text: diff.textDiffData,
                        bounds: diff.annotation ? diff.annotation.bounds : null,
                        color: diff.annotation ? diff.annotation.color : null
                    });
                });
            }
        });

        console.log('Differences grouped by page:', grouped);
        return grouped;
    } catch (error) {
        console.error('Error grouping differences:', error);
        return {};
    }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Semantic%20Text%20Comparison/Programmatically%20get%20differences).

## Related topics

- [Overview of semantic text comparison](./overview)
- [Highlight differences in UI](./highlight-differences)