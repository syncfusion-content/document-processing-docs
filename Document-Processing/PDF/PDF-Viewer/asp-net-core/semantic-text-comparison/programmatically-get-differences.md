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

### Step 1: Create the Razor view with styles and dual viewers

Create an ASP.NET Core Razor view with CSS styling and two side-by-side PDF viewers:

{% tabs %}
{% highlight html tabtitle="Index.cshtml" %}
{% raw %}
@page
@model IndexModel
@{
    ViewData["Title"] = "PDF Comparison - Semantic Text Difference";
}

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    #app {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .control-panel {
        display: flex;
        gap: 8px;
        padding: 12px;
        background-color: #f5f5f5;
        border-bottom: 1px solid #ddd;
        flex-wrap: wrap;
        align-items: center;
        min-height: 50px;
    }



    .viewers-container {
        display: flex;
        flex: 1;
        gap: 0;
        overflow: hidden;
    }

    .viewer-wrapper {
        width: 50%;
        height: 100%;
        border-right: 1px solid #ccc;
    }

        .viewer-wrapper:last-child {
            border-right: none;
        }

    .viewer-title {
        padding: 8px 12px;
        background-color: #e9ecef;
        border-bottom: 1px solid #dee2e6;
        font-size: 13px;
        font-weight: 600;
        color: #333;
    }

    .viewer-content {
        height: calc(100% - 35px);
    }

    .ejs-pdfviewer {
        height: 100%;
        width: 100%;
    }
</style>

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

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            viewer1 = document.getElementById('pdfViewer1').ej2_instances[0];
            viewer2 = document.getElementById('pdfViewer2').ej2_instances[0];

            if (viewer1 && viewer2) {
                // Attach event handlers for document load
                viewer1.documentLoad = handleDocumentLoad;
                viewer2.documentLoad = handleDocumentLoad;

                // Attach control button event listeners
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
                        // Avoid duplicates
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

    // Main comparison handler
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

            // Parse the result structure
            const originalAnnotations = result?.originalDocumentAnnotations || [];
            const modifiedAnnotations = result?.modifiedDocumentAnnotations || [];
            const totalTextDiffCount = result?.totalTextDiffCount || 0;

            console.log('Total Text Differences:', totalTextDiffCount);
            console.log('Original Document Pages:', originalAnnotations.length);
            console.log('Modified Document Pages:', modifiedAnnotations.length);

            // Extract and categorize all differences
            let addedCount = 0;
            let deletedCount = 0;
            let modifiedCount = 0;

            // Process original document annotations (deletions and modifications)
            originalAnnotations.forEach((pageAnnotations) => {
                const pageNum = pageAnnotations.pageNumber;
                console.log(`\nOriginal Document - Page ${pageNum}:`);
                pageAnnotations.differenceAnnotations?.forEach((diff) => {
                    const type = diff.textDiffType;
                    const text = diff.textDiffData;
                    if (type === 'deleted') deletedCount++;
                    if (type === 'modified') modifiedCount++;
                    if (type === 'added') addedCount++;
                    console.log(`  - ${type.toUpperCase()}: "${text?.substring(0, 50)}..."`);
                });
            });

            // Process modified document annotations (additions and modifications)
            modifiedAnnotations.forEach((pageAnnotations) => {
                const pageNum = pageAnnotations.pageNumber;
                console.log(`\nModified Document - Page ${pageNum}:`);
                pageAnnotations.differenceAnnotations?.forEach((diff) => {
                    const type = diff.textDiffType;
                    const text = diff.textDiffData;
                    if (type === 'added' && !addedCount) addedCount++;
                    if (type === 'modified' && !modifiedCount) modifiedCount++;
                    console.log(`  - ${type.toUpperCase()}: "${text?.substring(0, 50)}..."`);
                });
            });

            // Summary
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

            // Process all annotations
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
</script>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 2: Customize document paths

Update the `documentPath` and `resourceUrl` attributes in the Razor view to point to your PDF documents:

```html
<ejs-pdfviewer id="pdfViewer1"
               documentPath="your-original-document-path.pdf"
               resourceUrl="https://cdn.syncfusion.com/ej2/34.2.4/dist/ej2-pdfviewer-lib"
               style="height:100%; width:100%;">
</ejs-pdfviewer>
```

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

## Key Functions

### handleCompare()
Main comparison handler - performs semantic text comparison and logs results to console.

### getDifferencesByType(type)
Filters differences by type ('Added', 'Deleted', 'Modified') and returns an array.

### groupDifferencesByPage()
Groups all differences organized by page number for easy navigation.

### generateReport()
Creates a detailed report with summary counts and page-by-page breakdown.

### handleToggleSync()
Toggles synchronization between the two PDF viewers.

### handleToggleHighlights()
Toggles visual highlighting of differences.

### handleClearAnnotations()
Clears all comparison annotations from both viewers.

## Complete Integration

For a complete working example with all comparison features, buttons, and styling included, refer to the [GitHub sample](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/Semantic%20Text%20Comparison/Programmatically%20Get%20Differences).

The sample includes:
- Complete Razor view with CSS styling
- Full comparison script with all event handlers
- Console-based results logging
- Test buttons for each comparison function
- Real-time difference highlighting

## See Also

- [Overview of semantic text comparison](./overview)
- [Highlight differences in UI](./highlight-differences)

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

N> For a complete working implementation with styling, control buttons, and all comparison features, refer to the [GitHub sample](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/Semantic%20Text%20Comparison/Programmatically%20get%20differences).

## See Also

- [Overview of semantic text comparison](./overview)
- [Highlight differences in UI](./highlight-differences)