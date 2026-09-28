---
layout: post
title: Programmatically Get Differences | Syncfusion ASP.NET Core PDF Viewer
description: Learn how to programmatically access text differences between two PDF documents in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Programmatically Get Differences

The semantic text comparison feature provides programmatic access to all differences found between two PDF documents. Using the `semanticTextCompare()` method on the PDF Viewer, you can retrieve structured difference data for custom processing, reporting, or integration with other workflows.

## Overview

The comparison provides:

- **Async comparison API** - Use `semanticTextCompare()` to compare documents programmatically
- **Difference array access** - Get all detected differences with type and content
- **Structured data** - Each difference contains text, type, location, and page information
- **Categorized results** - Differences grouped by type (Added, Deleted, Modified)
- **Custom processing** - Export, filter, or analyze differences programmatically

## Prerequisites

- ASP.NET Core web application with Syncfusion tag helpers
- `ejs-pdfviewer` tag helper available
- Two PDF documents loaded for comparison
- Semantic text comparison feature enabled

## Steps

### Step 1: Create the Razor view with dual viewers

Create an ASP.NET Core Razor view with two side-by-side PDF viewers:

{% tabs %}
{% highlight html tabtitle="Index.cshtml" %}
{% raw %}
@page
@model IndexModel
@{
    ViewData["Title"] = "PDF Comparison - Semantic Text Difference";
}

<div id="app">
    <!-- Control Panel with Test Buttons -->
    <div class="control-panel">
        <button class="control-btn btn-primary" id="btnCompare">Compare Documents</button>
        <button class="control-btn btn-success" id="btnToggleHighlights">Disable Highlights</button>
        <button class="control-btn btn-warning" id="btnToggleSync">Disable Sync</button>
        <button class="control-btn btn-danger" id="btnClearAnnotations">Clear Annotations</button>

        <div class="separator"></div>

        <button class="control-btn btn-info" id="btnGetAdded">Test: Get Added</button>
        <button class="control-btn btn-info" id="btnGetDeleted">Test: Get Deleted</button>
        <button class="control-btn btn-info" id="btnGetModified">Test: Get Modified</button>
        <button class="control-btn btn-secondary" id="btnGroupByPage">Test: Group by Page</button>
        <button class="control-btn btn-secondary" id="btnGenerateReport">Test: Generate Report</button>
    </div>

    <!-- PDF Viewers Container -->
    <div class="viewers-container">
        <!-- Viewer 1 - Original Document -->
        <div class="viewer-wrapper">
            <div class="viewer-title">Original Document</div>
            <div class="viewer-content">
                <ejs-pdfviewer id="pdfViewer1"
                               documentPath="https://cdn.syncfusion.com/content/pdf/original-document.pdf"
                               resourceUrl="https://cdn.syncfusion.com/ej2/34.2.4/dist/ej2-pdfviewer-lib"
                               style="height:100%; width:100%;">
                </ejs-pdfviewer>
            </div>
        </div>

        <!-- Viewer 2 - Modified Document -->
        <div class="viewer-wrapper">
            <div class="viewer-title">Modified Document</div>
            <div class="viewer-content">
                <ejs-pdfviewer id="pdfViewer2"
                               documentPath="https://cdn.syncfusion.com/content/pdf/modified-document.pdf"
                               resourceUrl="https://cdn.syncfusion.com/ej2/34.2.4/dist/ej2-pdfviewer-lib"
                               style="height:100%; width:100%;">
                </ejs-pdfviewer>
            </div>
        </div>
    </div>
</div>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 2: Add comparison JavaScript logic

Add the JavaScript to handle comparison operations and difference retrieval:

{% tabs %}
{% highlight javascript tabtitle="comparison.js" %}
{% raw %}
// Global state management
let viewer1, viewer2;
let loadedCount = 0;
let viewersLoaded = false;
let synchronizationEnabled = true;
let highlightsEnabled = true;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        viewer1 = document.getElementById('pdfViewer1').ej2_instances[0];
        viewer2 = document.getElementById('pdfViewer2').ej2_instances[0];

        if (viewer1 && viewer2) {
            viewer1.documentLoad = handleDocumentLoad;
            viewer2.documentLoad = handleDocumentLoad;

            document.getElementById('btnCompare').addEventListener('click', handleCompare);
            document.getElementById('btnToggleHighlights').addEventListener('click', handleToggleHighlights);
            document.getElementById('btnToggleSync').addEventListener('click', handleToggleSync);
            document.getElementById('btnClearAnnotations').addEventListener('click', handleClearAnnotations);
            document.getElementById('btnGetAdded').addEventListener('click', () => getDifferencesByType('Added'));
            document.getElementById('btnGetDeleted').addEventListener('click', () => getDifferencesByType('Deleted'));
            document.getElementById('btnGetModified').addEventListener('click', () => getDifferencesByType('Modified'));
            document.getElementById('btnGroupByPage').addEventListener('click', groupDifferencesByPage);
            document.getElementById('btnGenerateReport').addEventListener('click', generateReport);
        }
    }, 500);
});

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

// Toggle synchronization
function handleToggleSync() {
    synchronizationEnabled = !synchronizationEnabled;
    const btnToggleSync = document.getElementById('btnToggleSync');
    btnToggleSync.textContent = synchronizationEnabled ? 'Disable Sync' : 'Enable Sync';

    if (viewer1 && viewer2 && viewer1.syncViewers) {
        viewer1.syncViewers(viewer2, synchronizationEnabled);
    }
}

// Toggle highlights
async function handleToggleHighlights() {
    highlightsEnabled = !highlightsEnabled;
    const btnToggleHighlights = document.getElementById('btnToggleHighlights');
    btnToggleHighlights.textContent = highlightsEnabled ? 'Disable Highlights' : 'Enable Highlights';

    if (viewersLoaded && viewer1 && viewer2) {
        const options = {
            beforeColor: '#FF0000',
            afterColor: '#00FF00',
            beforeColorOpacity: 0.4,
            afterColorOpacity: 0.4,
            enableHighlights: highlightsEnabled,
        };

        try {
            if (viewer1.removeSemanticTextCompare) {
                viewer1.removeSemanticTextCompare(viewer2);
            }
            const result = await viewer1.semanticTextCompare(viewer2, options);
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

// Get differences by type
async function getDifferencesByType(type) {
    if (!viewer1 || !viewer2) return [];

    const options = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: true,
    };

    try {
        const result = await viewer1.semanticTextCompare(viewer2, options);
        const originalAnnotations = result?.originalDocumentAnnotations || [];
        const modifiedAnnotations = result?.modifiedDocumentAnnotations || [];
        const differences = [];

        originalAnnotations.forEach((pageAnnotations) => {
            pageAnnotations.differenceAnnotations?.forEach((diff) => {
                if (diff.textDiffType === type.toLowerCase()) {
                    differences.push({
                        pageNumber: pageAnnotations.pageNumber,
                        type: diff.textDiffType,
                        text: diff.textDiffData,
                        bounds: diff.annotation?.bounds,
                        color: diff.annotation?.color
                    });
                }
            });
        });

        modifiedAnnotations.forEach((pageAnnotations) => {
            pageAnnotations.differenceAnnotations?.forEach((diff) => {
                if (diff.textDiffType === type.toLowerCase()) {
                    const exists = differences.find(d =>
                        d.pageNumber === pageAnnotations.pageNumber &&
                        d.text === diff.textDiffData
                    );
                    if (!exists) {
                        differences.push({
                            pageNumber: pageAnnotations.pageNumber,
                            type: diff.textDiffType,
                            text: diff.textDiffData,
                            bounds: diff.annotation?.bounds,
                            color: diff.annotation?.color
                        });
                    }
                }
            });
        });

        console.log(`${type} differences (${differences.length}):`, differences);
        return differences;
    } catch (error) {
        console.error('Error filtering differences:', error);
        return [];
    }
}

// Group differences by page
async function groupDifferencesByPage() {
    if (!viewer1 || !viewer2) return {};

    const options = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: true,
    };

    try {
        const result = await viewer1.semanticTextCompare(viewer2, options);
        const originalAnnotations = result?.originalDocumentAnnotations || [];
        const modifiedAnnotations = result?.modifiedDocumentAnnotations || [];
        const grouped = {};

        originalAnnotations.forEach((pageAnnotations) => {
            const pageNum = pageAnnotations.pageNumber;
            if (!grouped[pageNum]) {
                grouped[pageNum] = { original: [], modified: [] };
            }
            pageAnnotations.differenceAnnotations?.forEach((diff) => {
                grouped[pageNum].original.push({
                    type: diff.textDiffType,
                    text: diff.textDiffData,
                    bounds: diff.annotation?.bounds,
                    color: diff.annotation?.color
                });
            });
        });

        modifiedAnnotations.forEach((pageAnnotations) => {
            const pageNum = pageAnnotations.pageNumber;
            if (!grouped[pageNum]) {
                grouped[pageNum] = { original: [], modified: [] };
            }
            pageAnnotations.differenceAnnotations?.forEach((diff) => {
                grouped[pageNum].modified.push({
                    type: diff.textDiffType,
                    text: diff.textDiffData,
                    bounds: diff.annotation?.bounds,
                    color: diff.annotation?.color
                });
            });
        });

        console.log('Differences grouped by page:', grouped);
        return grouped;
    } catch (error) {
        console.error('Error grouping differences:', error);
        return {};
    }
}

// Main comparison handler
async function handleCompare() {
    if (!viewersLoaded || !viewer1 || !viewer2) {
        console.warn('Viewers not loaded yet');
        return;
    }

    const options = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: highlightsEnabled,
    };

    try {
        const result = await viewer1.semanticTextCompare(viewer2, options);
        console.log('Full Comparison Result:', result);

        const originalAnnotations = result?.originalDocumentAnnotations || [];
        const modifiedAnnotations = result?.modifiedDocumentAnnotations || [];
        const totalTextDiffCount = result?.totalTextDiffCount || 0;

        console.log('Total Text Differences:', totalTextDiffCount);
        console.log('Original Document Pages:', originalAnnotations.length);
        console.log('Modified Document Pages:', modifiedAnnotations.length);

        let addedCount = 0;
        let deletedCount = 0;
        let modifiedCount = 0;

        originalAnnotations.forEach((pageAnnotations) => {
            pageAnnotations.differenceAnnotations?.forEach((diff) => {
                const type = diff.textDiffType;
                if (type === 'deleted') deletedCount++;
                if (type === 'modified') modifiedCount++;
                if (type === 'added') addedCount++;
            });
        });

        console.log('\n=== COMPARISON SUMMARY ===');
        console.log(`Total Differences: ${totalTextDiffCount}`);
        console.log(`Deleted: ${deletedCount}`);
        console.log(`Added: ${addedCount}`);
        console.log(`Modified: ${modifiedCount}`);
    } catch (error) {
        console.error('Error during comparison:', error);
    }
}

// Generate detailed report
async function generateReport() {
    if (!viewer1 || !viewer2) {
        console.warn('Viewers not loaded');
        return;
    }

    const options = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: true,
    };

    try {
        const result = await viewer1.semanticTextCompare(viewer2, options);
        const originalAnnotations = result?.originalDocumentAnnotations || [];
        const modifiedAnnotations = result?.modifiedDocumentAnnotations || [];
        const totalTextDiffCount = result?.totalTextDiffCount || 0;

        let addedCount = 0;
        let deletedCount = 0;
        let modifiedCount = 0;
        const byPage = {};

        originalAnnotations.forEach((pageAnnotations) => {
            const pageNum = pageAnnotations.pageNumber;
            if (!byPage[pageNum]) {
                byPage[pageNum] = { deleted: 0, added: 0, modified: 0, details: [] };
            }
            pageAnnotations.differenceAnnotations?.forEach((diff) => {
                const type = diff.textDiffType;
                if (type === 'deleted') {
                    deletedCount++;
                    byPage[pageNum].deleted++;
                }
                else if (type === 'added') {
                    addedCount++;
                    byPage[pageNum].added++;
                }
                else if (type === 'modified') {
                    modifiedCount++;
                    byPage[pageNum].modified++;
                }
                byPage[pageNum].details.push({
                    type,
                    text: diff.textDiffData?.substring(0, 100),
                    color: diff.annotation?.color
                });
            });
        });

        modifiedAnnotations.forEach((pageAnnotations) => {
            const pageNum = pageAnnotations.pageNumber;
            if (!byPage[pageNum]) {
                byPage[pageNum] = { deleted: 0, added: 0, modified: 0, details: [] };
            }
            pageAnnotations.differenceAnnotations?.forEach((diff) => {
                const type = diff.textDiffType;
                if (type === 'deleted') {
                    deletedCount++;
                    byPage[pageNum].deleted++;
                }
                else if (type === 'added') {
                    addedCount++;
                    byPage[pageNum].added++;
                }
                else if (type === 'modified') {
                    modifiedCount++;
                    byPage[pageNum].modified++;
                }
                byPage[pageNum].details.push({
                    type,
                    text: diff.textDiffData?.substring(0, 100),
                    color: diff.annotation?.color
                });
            });
        });

        const report = {
            totalDifferences: totalTextDiffCount,
            summary: {
                added: addedCount,
                deleted: deletedCount,
                modified: modifiedCount
            },
            byPage: byPage
        };

        console.log('=== DETAILED COMPARISON REPORT ===');
        console.log(`Total Text Differences: ${report.totalDifferences}`);
        console.log(`Added: ${report.summary.added}`);
        console.log(`Deleted: ${report.summary.deleted}`);
        console.log(`Modified: ${report.summary.modified}`);
        console.log('\nBreakdown by Page:');
        Object.entries(byPage).forEach(([pageNum, data]) => {
            console.log(`  Page ${pageNum}: +${data.added} -${data.deleted} ~${data.modified}`);
        });
        console.log('\nFull Report:', report);
        return report;
    } catch (error) {
        console.error('Error generating report:', error);
    }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## API Reference

### Comparison Options

The `semanticTextCompare()` method accepts comparison options:

| Option | Type | Description |
|--------|------|-------------|
| `beforeColor` | string | Color for deleted text (hex format) |
| `afterColor` | string | Color for added text (hex format) |
| `beforeColorOpacity` | number | Transparency for deleted (0-1) |
| `afterColorOpacity` | number | Transparency for added (0-1) |
| `enableHighlights` | boolean | Enable/disable visual highlighting |

### Result Structure

The comparison result contains:

```javascript
{
    totalTextDiffCount: number,
    originalDocumentAnnotations: Array<PageAnnotations>,
    modifiedDocumentAnnotations: Array<PageAnnotations>
}
```

## Complete Integration Example

For a complete working implementation with styling, control buttons, and all comparison features, refer to the [GitHub sample](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/Semantic%20Text%20Comparison/Programmatically%20get%20differences).

The GitHub sample includes:

- Full Razor view with dual PDF viewers
- Complete comparison JavaScript logic
- Control panel with test buttons
- Difference retrieval by type
- Page grouping functionality
- Detailed report generation
- Proper styling and layout

## See Also

- [Overview of semantic text comparison](./overview)
- [Highlight differences in UI](./highlight-differences)
  const viewer1Ref = useRef(null);
  const viewer2Ref = useRef(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [viewersLoaded, setViewersLoaded] = useState(false);
  const [synchronizationEnabled, setSynchronizationEnabled] = useState(true);
  const [highlightsEnabled, setHighlightsEnabled] = useState(true);

  const handleDocumentLoad = () => {
    setLoadedCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 2 && viewer1Ref.current && viewer2Ref.current) {
        setViewersLoaded(true);
        viewer1Ref.current.syncViewers(viewer2Ref.current, synchronizationEnabled);
      }
      return newCount;
    });
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      {/* PDF Viewers Container */}
      <div style={{
        display: 'flex',
        height: '600px',
        gap: 0
      }}>
        {/* Viewer 1 - Original Document */}
        <div style={{ width: '50%', height: '100%', borderRight: '1px solid #ccc' }}>
          <PdfViewerComponent
            ref={viewer1Ref}
            id="pdfViewer1"
            documentPath="https://cdn.syncfusion.com/content/pdf/original-document.pdf"
            resourceUrl="https://cdn.syncfusion.com/ej2/34.2.4/dist/ej2-pdfviewer-lib"
            documentLoad={handleDocumentLoad}
            style={{ height: '100%', width: '100%' }}
          >
            <Inject services={[
              Toolbar,
              Magnification,
              Navigation,
              Annotation,
              LinkAnnotation,
              BookmarkView,
              ThumbnailView,
              Print,
              TextSelection,
              TextSearch,
              FormFields,
              FormDesigner,
              PageOrganizer
            ]} />
          </PdfViewerComponent>
        </div>

        {/* Viewer 2 - Modified Document */}
        <div style={{ width: '50%', height: '100%' }}>
          <PdfViewerComponent
            ref={viewer2Ref}
            id="pdfViewer2"
            documentPath="https://cdn.syncfusion.com/content/pdf/modified-document.pdf"
            resourceUrl="https://cdn.syncfusion.com/ej2/34.2.4/dist/ej2-pdfviewer-lib"
            documentLoad={handleDocumentLoad}
            style={{ height: '100%', width: '100%' }}
          >
            <Inject services={[
              Toolbar,
              Magnification,
              Navigation,
              Annotation,
              LinkAnnotation,
              BookmarkView,
              ThumbnailView,
              Print,
              TextSelection,
              TextSearch,
              FormFields,
              FormDesigner,
              PageOrganizer
            ]} />
          </PdfViewerComponent>
        </div>
      </div>
    </div>
  );
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 3: Perform semantic text comparison

Compare the documents programmatically and access differences:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
const handleCompare = async () => {
  if (!viewersLoaded || !viewer1Ref.current || !viewer2Ref.current) {
    return;
  }

  const options = {
    beforeColor: '#FF0000',      // Red for original
    afterColor: '#00FF00',       // Green for modified
    beforeColorOpacity: 0.4,
    afterColorOpacity: 0.4,
    enableHighlights: highlightsEnabled,
  };

  try {
    const result = await viewer1Ref.current.semanticTextCompare(viewer2Ref.current, options);
    console.log('Full Comparison Result:', result);

    // Access annotations from both documents
    const originalAnnotations = result?.originalDocumentAnnotations || [];
    const modifiedAnnotations = result?.modifiedDocumentAnnotations || [];
    const totalTextDiffCount = result?.totalTextDiffCount || 0;

    console.log('Total Text Differences:', totalTextDiffCount);

    // Extract and categorize all differences
    let addedCount = 0;
    let deletedCount = 0;
    let modifiedCount = 0;

    // Process original document annotations (deletions and modifications)
    originalAnnotations.forEach((pageAnnotations) => {
      pageAnnotations.differenceAnnotations?.forEach((diff) => {
        const type = diff.textDiffType;
        if (type === 'deleted') deletedCount++;
        if (type === 'modified') modifiedCount++;
        if (type === 'added') addedCount++;
      });
    });

    console.log('Added:', addedCount);
    console.log('Deleted:', deletedCount);
    console.log('Modified:', modifiedCount);
  } catch (error) {
    console.error('Error during comparison:', error);
  }
};
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 4: Generate comparison report

Generate a detailed report with differences grouped by page:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
const generateReport = async () => {
  if (!viewer1Ref.current || !viewer2Ref.current) return;

  const options = {
    beforeColor: '#FF0000',
    afterColor: '#00FF00',
    beforeColorOpacity: 0.4,
    afterColorOpacity: 0.4,
    enableHighlights: true,
  };

  try {
    const result = await viewer1Ref.current.semanticTextCompare(viewer2Ref.current, options);

    const originalAnnotations = result?.originalDocumentAnnotations || [];
    const modifiedAnnotations = result?.modifiedDocumentAnnotations || [];
    const totalTextDiffCount = result?.totalTextDiffCount || 0;

    let addedCount = 0;
    let deletedCount = 0;
    let modifiedCount = 0;
    const byPage = {};

    // Process all annotations
    originalAnnotations.forEach((pageAnnotations) => {
      const pageNum = pageAnnotations.pageNumber;
      if (!byPage[pageNum]) {
        byPage[pageNum] = { deleted: 0, added: 0, modified: 0 };
      }

      pageAnnotations.differenceAnnotations?.forEach((diff) => {
        const type = diff.textDiffType;
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
    });

    modifiedAnnotations.forEach((pageAnnotations) => {
      const pageNum = pageAnnotations.pageNumber;
      if (!byPage[pageNum]) {
        byPage[pageNum] = { deleted: 0, added: 0, modified: 0 };
      }

      pageAnnotations.differenceAnnotations?.forEach((diff) => {
        const type = diff.textDiffType;
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
    });

    const report = {
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
};
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 5: Add control buttons and synchronization

Manage synchronization, highlights, and comparison controls:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
const handleToggleSync = () => {
  const newSyncState = !synchronizationEnabled;
  setSynchronizationEnabled(newSyncState);

  if (viewer1Ref.current && viewer2Ref.current) {
    viewer1Ref.current.syncViewers(viewer2Ref.current, newSyncState);
  }
};

const handleToggleHighlights = async () => {
  const newHighlightsState = !highlightsEnabled;
  setHighlightsEnabled(newHighlightsState);

  // Re-apply comparison with updated highlight state
  if (viewersLoaded && viewer1Ref.current && viewer2Ref.current) {
    const options = {
      beforeColor: '#FF0000',
      afterColor: '#00FF00',
      beforeColorOpacity: 0.4,
      afterColorOpacity: 0.4,
      enableHighlights: newHighlightsState,
    };

    try {
      // Clear previous comparison
      viewer1Ref.current.removeSemanticTextCompare?.(viewer2Ref.current);
      // Apply new comparison with updated highlights state
      const result = await viewer1Ref.current.semanticTextCompare(viewer2Ref.current, options);
      console.log('Highlights updated:', result);
    } catch (error) {
      console.error('Error updating highlights:', error);
    }
  }
};

const handleClearAnnotations = () => {
  if (viewer1Ref.current && viewer2Ref.current) {
    viewer1Ref.current.removeSemanticTextCompare?.(viewer2Ref.current);
  }
};

// Control Buttons
const ControlPanel = () => (
  <div style={{
    display: 'flex',
    gap: '8px',
    padding: '12px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd'
  }}>
    <button onClick={handleCompare} style={{
      padding: '8px 16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}>
      Compare Documents
    </button>
    <button onClick={handleToggleHighlights} style={{
      padding: '8px 16px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}>
      {highlightsEnabled ? 'Disable Highlights' : 'Enable Highlights'}
    </button>
    <button onClick={handleToggleSync} style={{
      padding: '8px 16px',
      backgroundColor: '#ffc107',
      color: 'black',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}>
      {synchronizationEnabled ? 'Disable Sync' : 'Enable Sync'}
    </button>
    <button onClick={handleClearAnnotations} style={{
      padding: '8px 16px',
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}>
      Clear Annotations
    </button>
  </div>
);
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
{% highlight js tabtitle="App.jsx" %}
{% raw %}
const getDifferencesByType = async (type) => {
    if (!viewer1Ref.current || !viewer2Ref.current) return [];

    const options = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: true,
    };

    try {
        const result = await viewer1Ref.current.semanticTextCompare(viewer2Ref.current, options);

        const originalAnnotations = result?.originalDocumentAnnotations || [];
        const modifiedAnnotations = result?.modifiedDocumentAnnotations || [];
        const differences = [];

        // Extract differences by type from original annotations
        originalAnnotations.forEach((pageAnnotations) => {
          pageAnnotations.differenceAnnotations?.forEach((diff) => {
            if (diff.textDiffType === type.toLowerCase()) {
              differences.push({
                pageNumber: pageAnnotations.pageNumber,
                type: diff.textDiffType,
                text: diff.textDiffData,
                bounds: diff.annotation?.bounds,
                color: diff.annotation?.color
              });
            }
          });
        });

        // Extract differences by type from modified annotations
        modifiedAnnotations.forEach((pageAnnotations) => {
          pageAnnotations.differenceAnnotations?.forEach((diff) => {
            if (diff.textDiffType === type.toLowerCase()) {
              const exists = differences.find(d =>
                d.pageNumber === pageAnnotations.pageNumber &&
                d.text === diff.textDiffData
              );
              if (!exists) {
                differences.push({
                  pageNumber: pageAnnotations.pageNumber,
                  type: diff.textDiffType,
                  text: diff.textDiffData,
                  bounds: diff.annotation?.bounds,
                  color: diff.annotation?.color
                });
              }
            }
          });
        });

        console.log(`${type} differences (${differences.length}):`, differences);
        return differences;
    } catch (error) {
        console.error('Error filtering differences:', error);
        return [];
    }
};

// Usage
const addedDifferences = await getDifferencesByType('added');
const deletedDifferences = await getDifferencesByType('deleted');
const modifiedDifferences = await getDifferencesByType('modified');
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Group differences by page

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
const groupDifferencesByPage = async () => {
    if (!viewer1Ref.current || !viewer2Ref.current) return {};

    const options = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: true,
    };

    try {
        const result = await viewer1Ref.current.semanticTextCompare(viewer2Ref.current, options);

        const originalAnnotations = result?.originalDocumentAnnotations || [];
        const modifiedAnnotations = result?.modifiedDocumentAnnotations || [];
        const grouped = {};

        // Group original document differences by page
        originalAnnotations.forEach((pageAnnotations) => {
          const pageNum = pageAnnotations.pageNumber;
          if (!grouped[pageNum]) {
            grouped[pageNum] = { original: [], modified: [] };
          }

          pageAnnotations.differenceAnnotations?.forEach((diff) => {
            grouped[pageNum].original.push({
              type: diff.textDiffType,
              text: diff.textDiffData,
              bounds: diff.annotation?.bounds,
              color: diff.annotation?.color
            });
          });
        });

        // Group modified document differences by page
        modifiedAnnotations.forEach((pageAnnotations) => {
          const pageNum = pageAnnotations.pageNumber;
          if (!grouped[pageNum]) {
            grouped[pageNum] = { original: [], modified: [] };
          }

          pageAnnotations.differenceAnnotations?.forEach((diff) => {
            grouped[pageNum].modified.push({
              type: diff.textDiffType,
              text: diff.textDiffData,
              bounds: diff.annotation?.bounds,
              color: diff.annotation?.color
            });
          });
        });

        console.log('Differences grouped by page:', grouped);
        return grouped;
    } catch (error) {
        console.error('Error grouping differences:', error);
        return {};
    }
};
{% endraw %}
{% endhighlight %}
{% endtabs %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/Semantic%20Text%20Comparison/Programmatically%20get%20differences).

## Related topics

- [Overview of semantic text comparison](./overview)
- [Highlight differences in UI](./highlight-differences)