---
layout: post
title: Programmatically Get Differences | Syncfusion TypeScript PDF Viewer
description: Learn how to programmatically access text differences between two PDF documents in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Programmatically Get Differences in TypeScript PDF Viewer

The semantic text comparison feature provides programmatic access to all differences found between two PDF documents. Using the [`semanticTextCompare()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#semantictextcompare) method on `PdfViewer`, you can retrieve structured difference data for custom processing, reporting, or integration with other workflows.

## Overview

The comparison provides:

- **Async comparison API** - Use [`semanticTextCompare()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#semantictextcompare) to compare documents programmatically
- **Difference array access** - Get all detected differences with type and content
- **Structured data** - Each difference contains text, type, location, and page information
- **Categorized results** - Differences grouped by type (Added, Deleted, Modified)
- **Custom processing** - Export, filter, or analyze differences programmatically

## Prerequisites

- Syncfusion TypeScript PDF Viewer installed
- `PdfViewer` class available
- Two PDF documents loaded for comparison
- Semantic text comparison feature enabled

## Steps

### Step 1: Import required components

{% tabs %}
{% highlight typescript tabtitle="app.ts" %}
{% raw %}

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-pdfviewer';

{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 2: Create the dual viewer comparison setup

Set up two side-by-side PDF viewers with semantic text comparison:

{% tabs %}
{% highlight typescript tabtitle="app.ts" %}
{% raw %}

interface AppState {
    viewer1: PdfViewer | null;
    viewer2: PdfViewer | null;
    loadedCount: number;
    viewersLoaded: boolean;
}

const appState: AppState = {
    viewer1: null,
    viewer2: null,
    loadedCount: 0,
    viewersLoaded: false
};

const RESOURCE_URL = 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib';
const ORIGINAL_PDF = 'https://cdn.syncfusion.com/content/pdf/original-document.pdf';
const MODIFIED_PDF = 'https://cdn.syncfusion.com/content/pdf/modified-document.pdf';

PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer);

function handleDocumentLoad(): void {
    appState.loadedCount++;
    if (appState.loadedCount === 2 && appState.viewer1 && appState.viewer2) {
        appState.viewersLoaded = true;
        appState.viewer1.syncViewers(appState.viewer2, true);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    appState.viewer1 = new PdfViewer({
        documentPath: ORIGINAL_PDF,
        resourceUrl: RESOURCE_URL,
        documentLoad: handleDocumentLoad
    });
    appState.viewer1.appendTo('#pdfViewer1');

    appState.viewer2 = new PdfViewer({
        documentPath: MODIFIED_PDF,
        resourceUrl: RESOURCE_URL,
        documentLoad: handleDocumentLoad
    });
    appState.viewer2.appendTo('#pdfViewer2');
});

{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 3: Perform semantic text comparison

Compare the documents programmatically and access differences:

{% tabs %}
{% highlight typescript tabtitle="app.ts" %}
{% raw %}

async function handleCompare(): Promise<void> {
  if (!appState.viewersLoaded || !appState.viewer1 || !appState.viewer2) {
    console.warn('Viewers not ready');
    return;
  }

  const options: any = {
    beforeColor: '#FF0000',      // Red for original
    afterColor: '#00FF00',       // Green for modified
    beforeColorOpacity: 0.4,
    afterColorOpacity: 0.4,
    enableHighlights: true
  };

  try {
    const result = await appState.viewer1.semanticTextCompare(appState.viewer2, options);
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
    originalAnnotations.forEach((pageAnnotations: any) => {
      pageAnnotations.differenceAnnotations?.forEach((diff: any) => {
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

{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 4: Generate comparison report

Generate a detailed report with differences grouped by page:

{% tabs %}
{% highlight typescript tabtitle="app.ts" %}
{% raw %}

async function generateReport(): Promise<void> {
  if (!appState.viewer1 || !appState.viewer2) {
    console.warn('Viewers not ready');
    return;
  }

  const options: any = {
    beforeColor: '#FF0000',
    afterColor: '#00FF00',
    beforeColorOpacity: 0.4,
    afterColorOpacity: 0.4,
    enableHighlights: true
  };

  try {
    const result = await appState.viewer1.semanticTextCompare(appState.viewer2, options);

    const originalAnnotations = result?.originalDocumentAnnotations || [];
    const modifiedAnnotations = result?.modifiedDocumentAnnotations || [];
    const totalTextDiffCount = result?.totalTextDiffCount || 0;

    let addedCount = 0;
    let deletedCount = 0;
    let modifiedCount = 0;
    const byPage: any = {};

    // Process all annotations
    originalAnnotations.forEach((pageAnnotations: any) => {
      const pageNum = pageAnnotations.pageNumber;
      if (!byPage[pageNum]) {
        byPage[pageNum] = { deleted: 0, added: 0, modified: 0 };
      }

      pageAnnotations.differenceAnnotations?.forEach((diff: any) => {
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

    modifiedAnnotations.forEach((pageAnnotations: any) => {
      const pageNum = pageAnnotations.pageNumber;
      if (!byPage[pageNum]) {
        byPage[pageNum] = { deleted: 0, added: 0, modified: 0 };
      }

      pageAnnotations.differenceAnnotations?.forEach((diff: any) => {
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

    const report: any = {
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

// Export functions to global scope
declare global {
    interface Window {
        handleCompare: typeof handleCompare;
        generateReport: typeof generateReport;
    }
}

window.handleCompare = handleCompare;
window.generateReport = generateReport;

{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 5: HTML Structure

Create the HTML structure with two viewers:

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% raw %}

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Semantic Text Comparison</title>
    <link href="https://cdn.syncfusion.com/ej2/31.2.2/material.css" rel="stylesheet" />
</head>
<body>
    <div style="display: flex; height: 100vh; gap: 0;">
        <div id="pdfViewer1" style="width: 50%; height: 100%; border-right: 1px solid #ccc;"></div>
        <div id="pdfViewer2" style="width: 50%; height: 100%;"></div>
    </div>
    <button onclick="handleCompare()" style="position: fixed; bottom: 20px; left: 20px; padding: 10px 20px;">Compare</button>
    <button onclick="generateReport()" style="position: fixed; bottom: 20px; left: 150px; padding: 10px 20px;">Generate Report</button>
    <script src="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2.min.js"></script>
    <script src="app.js"></script>
</body>
</html>

{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 6: Add control buttons and synchronization

Manage synchronization, highlights, and comparison controls:

{% tabs %}
{% highlight typescript tabtitle="app.ts" %}
{% raw %}

function handleToggleSync(): void {
  const newSyncState = !appState.viewersLoaded;
  if (appState.viewer1 && appState.viewer2) {
    appState.viewer1.syncViewers(appState.viewer2, newSyncState);
  }
}

function handleToggleHighlights(): void {
  if (appState.viewersLoaded && appState.viewer1 && appState.viewer2) {
    const options: any = {
      beforeColor: '#FF0000',
      afterColor: '#00FF00',
      beforeColorOpacity: 0.4,
      afterColorOpacity: 0.4,
      enableHighlights: true
    };

    try {
      appState.viewer1.removeSemanticTextCompare?.(appState.viewer2);
      appState.viewer1.semanticTextCompare(appState.viewer2, options);
      console.log('Highlights updated');
    } catch (error) {
      console.error('Error updating highlights:', error);
    }
  }
}

function handleClearAnnotations(): void {
  if (appState.viewer1 && appState.viewer2) {
    (appState.viewer1 as any).removeSemanticTextCompare?.(appState.viewer2);
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

### Filter differences by type

{% tabs %}
{% highlight typescript tabtitle="app.ts" %}
{% raw %}

async function getDifferencesByType(type: string): Promise<any[]> {
    if (!appState.viewer1 || !appState.viewer2) return [];

    const options: any = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: true
    };

    try {
        const result = await appState.viewer1.semanticTextCompare(appState.viewer2, options);
        const originalAnnotations = result?.originalDocumentAnnotations || [];
        const modifiedAnnotations = result?.modifiedDocumentAnnotations || [];
        const differences: any[] = [];

        originalAnnotations.forEach((pageAnnotations: any) => {
          pageAnnotations.differenceAnnotations?.forEach((diff: any) => {
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

        modifiedAnnotations.forEach((pageAnnotations: any) => {
          pageAnnotations.differenceAnnotations?.forEach((diff: any) => {
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

// Usage
const addedDifferences = await getDifferencesByType('added');
const deletedDifferences = await getDifferencesByType('deleted');
const modifiedDifferences = await getDifferencesByType('modified');

{% endraw %}
{% endhighlight %}
{% endtabs %}

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/Semantic%20Text%20Comparison/Programmatically%20get%20differences).

## Related topics

- [Overview of semantic text comparison](./overview)
- [Highlight differences in UI](./highlight-differences)