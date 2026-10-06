---
layout: post
title: Programmatically Get Differences | Syncfusion React PDF Viewer
description: Learn how to programmatically access text differences between two PDF documents in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
appliesto: PDF Viewer SDK
---

# Programmatically Get Differences

The semantic text comparison feature provides programmatic access to all differences found between two PDF documents. Using the `semanticTextCompare()` method on `PdfViewerComponent`, you can retrieve structured difference data for custom processing, reporting, or integration with other workflows.

## Overview

The comparison provides:

- **Async comparison API** - Use `semanticTextCompare()` to compare documents programmatically
- **Difference array access** - Get all detected differences with type and content
- **Structured data** - Each difference contains text, type, location, and page information
- **Categorized results** - Differences grouped by type (Added, Deleted, Modified)
- **Custom processing** - Export, filter, or analyze differences programmatically

## Prerequisites

- Syncfusion React PDF Viewer installed
- `PdfViewerComponent` available
- Two PDF documents loaded for comparison
- Semantic text comparison feature enabled

## Steps

### Step 1: Import required components

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { PdfViewerComponent, Inject, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-react-pdfviewer';
import React, { useRef, useState } from 'react';
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 2: Create the dual viewer comparison setup

Set up two side-by-side PDF viewers with semantic text comparison:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
export default function App() {
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

## Related topics

- [Overview of semantic text comparison](./overview)
- [Highlight differences in UI](./highlight-differences)