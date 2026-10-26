---
layout: post
title: Programmatically Get Differences | Syncfusion ASP.NET Core PDF Viewer
description: Learn how to programmatically access text differences between two PDF documents in the Syncfusion ASP.NET Core PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Programmatically Get Differences in ASP.NET Core PDF Viewer

The semantic text comparison feature provides programmatic access to all differences found between two PDF documents. Using the `semanticTextCompare()` method on the PDF Viewer, you can retrieve structured difference data for custom processing, reporting, or integration with other workflows.

## Overview

The comparison provides:

- **Async comparison API** - Use `semanticTextCompare()` to compare documents programmatically
- **Difference array access** - Get all detected differences with type and content
- **Structured data** - Each difference contains text, type, location, and page information
- **Categorized results** - Differences grouped by type (Added, Deleted, Modified)
- **Custom processing** - Export, filter, or analyze differences programmatically

## Steps

### Step 1: Add required styles and HTML structure

Create an ASP.NET Core Razor view with CSS styling and two side-by-side PDF viewers:

{% tabs %}
{% highlight html tabtitle="Index.cshtml" %}
{% raw %}
@page

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

<script>
    // Global state management
    let viewer1, viewer2;
    let loadedCount = 0;
    let viewersLoaded = false;
    let synchronizationEnabled = true;
    let highlightsEnabled = true;

    // Initialize viewers when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            viewer1 = document.getElementById('pdfViewer1').ej2_instances[0];
            viewer2 = document.getElementById('pdfViewer2').ej2_instances[0];

            if (viewer1 && viewer2) {
                // Attach event handlers for document load
                viewer1.documentLoad = handleDocumentLoad;
                viewer2.documentLoad = handleDocumentLoad;

                // Attach control button event listeners
                attachEventListeners();
            }
        }, 500);
    });

    // Attach event listeners to all control buttons
    function attachEventListeners() {
        document.getElementById('btnCompare').addEventListener('click', handleCompare);
        document.getElementById('btnToggleHighlights').addEventListener('click', handleToggleHighlights);
        document.getElementById('btnToggleSync').addEventListener('click', handleToggleSync);
        document.getElementById('btnClearAnnotations').addEventListener('click', handleClearAnnotations);
        document.getElementById('btnGetAdded').addEventListener('click', () => getDifferencesByType('added'));
        document.getElementById('btnGetDeleted').addEventListener('click', () => getDifferencesByType('deleted'));
        document.getElementById('btnGetModified').addEventListener('click', () => getDifferencesByType('modified'));
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

    // Perform semantic text comparison
    async function handleCompare() {
        if (!viewersLoaded || !viewer1 || !viewer2) {
            console.warn('Viewers not loaded yet');
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
            const result = await viewer1.semanticTextCompare(viewer2, options);
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
                // Clear previous comparison
                if (viewer1.removeSemanticTextCompare) {
                    viewer1.removeSemanticTextCompare(viewer2);
                }
                // Apply new comparison with updated highlights state
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

    // Get differences filtered by type
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
    }

    // Generate detailed report with differences grouped by page
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
    }
</script>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 2: Perform semantic text comparison

Compare the documents programmatically and access differences:

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% raw %}
const handleCompare = async () => {
  if (!viewersLoaded || !viewer1 || !viewer2) {
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
    const result = await viewer1.semanticTextCompare(viewer2, options);
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

### Step 3: Generate comparison report

Generate a detailed report with differences grouped by page:

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% raw %}
const generateReport = async () => {
  if (!viewer1 || !viewer2) return;

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

### Step 4: Add control buttons and synchronization

Manage synchronization, highlights, and comparison controls:

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% raw %}
const handleToggleSync = () => {
  const newSyncState = !synchronizationEnabled;
  setSynchronizationEnabled(newSyncState);

  if (viewer1 && viewer2) {
    viewer1.syncViewers(viewer2, newSyncState);
  }
};

const handleToggleHighlights = async () => {
  const newHighlightsState = !highlightsEnabled;
  setHighlightsEnabled(newHighlightsState);

  // Re-apply comparison with updated highlight state
  if (viewersLoaded && viewer1 && viewer2) {
    const options = {
      beforeColor: '#FF0000',
      afterColor: '#00FF00',
      beforeColorOpacity: 0.4,
      afterColorOpacity: 0.4,
      enableHighlights: newHighlightsState,
    };

    try {
      // Clear previous comparison
      viewer1.removeSemanticTextCompare?.(viewer2);
      // Apply new comparison with updated highlights state
      const result = await viewer1.semanticTextCompare(viewer2, options);
      console.log('Highlights updated:', result);
    } catch (error) {
      console.error('Error updating highlights:', error);
    }
  }
};

const handleClearAnnotations = () => {
  if (viewer1 && viewer2) {
    viewer1.removeSemanticTextCompare?.(viewer2);
  }
};
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
{% highlight js tabtitle="app.js" %}
{% raw %}
const getDifferencesByType = async (type) => {
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
{% highlight js tabtitle="app.js" %}
{% raw %}
const groupDifferencesByPage = async () => {
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