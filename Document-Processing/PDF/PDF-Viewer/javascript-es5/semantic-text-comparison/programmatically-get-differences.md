---
layout: post
title: Programmatically Get Differences | Syncfusion ES5 JavaScript PDF Viewer
description: Learn how to programmatically access text differences between two PDF documents in the Syncfusion ES5 JavaScript PDF Viewer.
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

- Updated `ej2.min.js` from CDN or CRG
- Two PDF documents loaded for comparison
- Semantic text comparison feature enabled

## Steps

### Step 1: Create the HTML structure

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
  <div id="pdfViewer1"></div>
  <div id="pdfViewer2"></div>
  <script src="index.js" type="text/javascript"></script>
</body>
</html>

{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 2: Initialize viewers and perform comparison

Create `index.js` to initialize dual PDF viewers and perform semantic text comparison:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% raw %}

var viewer1 = null;
var viewer2 = null;

function handleDocumentLoad() {
    // Wait for both viewers to load
    if (viewer1 && viewer2 && viewer1.isDocumentLoaded && viewer2.isDocumentLoaded) {
        performComparison();
    }
}

async function performComparison() {
    try {
        var options = {
            beforeColor: '#FF0000',
            afterColor: '#00FF00',
            beforeColorOpacity: 0.4,
            afterColorOpacity: 0.4,
            enableHighlights: true
        };

        var result = await viewer1.semanticTextCompare(viewer2, options);
        
        var originalAnnotations = result.originalDocumentAnnotations || [];
        var totalTextDiffCount = result.totalTextDiffCount || 0;

        var addedCount = 0, deletedCount = 0, modifiedCount = 0;

        originalAnnotations.forEach(function(pageAnnotations) {
            if (pageAnnotations.differenceAnnotations) {
                pageAnnotations.differenceAnnotations.forEach(function(diff) {
                    if (diff.textDiffType === 'deleted') deletedCount++;
                    if (diff.textDiffType === 'added') addedCount++;
                    if (diff.textDiffType === 'modified') modifiedCount++;
                });
            }
        });

        console.log('Comparison Results:');
        console.log('Total Differences: ' + totalTextDiffCount);
        console.log('Added: ' + addedCount);
        console.log('Deleted: ' + deletedCount);
        console.log('Modified: ' + modifiedCount);

    } catch (error) {
        console.error('Error during comparison:', error);
    }
}

async function getDifferencesByType(type) {
    try {
        var options = {
            beforeColor: '#FF0000',
            afterColor: '#00FF00',
            beforeColorOpacity: 0.4,
            afterColorOpacity: 0.4,
            enableHighlights: true
        };

        var result = await viewer1.semanticTextCompare(viewer2, options);
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

    } catch (error) {
        console.error('Error filtering differences:', error);
        return [];
    }
}

document.addEventListener('DOMContentLoaded', function() {
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
});

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Accessing Comparison Results

The comparison provides structured data through the result object returned by `semanticTextCompare()`:

```javascript
{
    totalTextDiffCount: 5,
    originalDocumentAnnotations: [ /* page-by-page differences */ ],
    modifiedDocumentAnnotations: [ /* page-by-page differences */ ],
}
```

Each annotation contains:
- `pageNumber` - Page where the difference was found
- `differenceAnnotations` - Array of differences on that page
- Each difference has `textDiffType` ('added', 'deleted', 'modified'), `textDiffData` (the text), and `annotation.bounds` (location)

## How to Get Differences

### Retrieve added text differences

```javascript
var added = await getDifferencesByType('Added');
```

### Retrieve deleted text differences

```javascript
var deleted = await getDifferencesByType('Deleted');
```

### Retrieve modified text differences

```javascript
var modified = await getDifferencesByType('Modified');
```

## Related topics

- [Overview of semantic text comparison](./overview)
- [Highlight differences in UI](./highlight-differences)

N> For complete production implementation with custom reporting, refer to the [GitHub sample](https://github.com/SyncfusionExamples/pdf-viewer-examples).
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

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Semantic%20Text%20Comparison/Programmatically%20get%20differences).

## Related topics

- [Overview of semantic text comparison](./overview)
- [Highlight differences in UI](./highlight-differences)