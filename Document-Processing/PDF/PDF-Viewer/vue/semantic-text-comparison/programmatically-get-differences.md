---
layout: post
title: Programmatically Get Differences | Syncfusion Vue PDF Viewer
description: Learn how to programmatically access text differences between two PDF documents in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
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

- Syncfusion Vue PDF Viewer installed
- `PdfViewerComponent` available
- Two PDF documents loaded for comparison
- Semantic text comparison feature enabled

## Steps

### Step 1: Import required components

{% tabs %}
{% highlight vue tabtitle="App.vue" %}
{% raw %}
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 2: Create the dual viewer comparison setup

Set up two side-by-side PDF viewers with semantic text comparison:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
{% raw %}
<template>
  <div style="height: 100vh; width: 100%; display: flex; flex-direction: column;">
    <!-- Control Panel -->
    <div
      style="
        display: flex;
        gap: 8px;
        padding: 12px;
        background-color: #f5f5f5;
        border-bottom: 1px solid #ddd;
        flex-wrap: wrap;
        align-items: center;
      "
    >
      <button
        @click="handleCompare"
        style="
          padding: 8px 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
        "
      >
        Compare Documents
      </button>
      <button
        @click="handleToggleHighlights"
        style="
          padding: 8px 16px;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
        "
      >
        {{ highlightsEnabled ? 'Disable Highlights' : 'Enable Highlights' }}
      </button>
      <button
        @click="handleToggleSync"
        style="
          padding: 8px 16px;
          background-color: #ffc107;
          color: black;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
        "
      >
        {{ synchronizationEnabled ? 'Disable Sync' : 'Enable Sync' }}
      </button>
      <button
        @click="handleClearAnnotations"
        style="
          padding: 8px 16px;
          background-color: #dc3545;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
        "
      >
        Clear Annotations
      </button>
    </div>

    <!-- PDF Viewers Container -->
    <div style="display: flex; flex: 1; gap: 0; overflow: hidden;">
      <!-- Viewer 1 - Original Document -->
      <div style="width: 50%; height: 100%; border-right: 1px solid #ccc;">
        <ejs-pdfviewer
          ref="viewer1Ref"
          id="pdfViewer1"
          documentPath="https://cdn.syncfusion.com/content/pdf/original-document.pdf"
          :resourceUrl="resourceUrl"
          @documentLoad="handleDocumentLoad"
          style="height: 100%; width: 100%;"
        >
        </ejs-pdfviewer>
      </div>

      <!-- Viewer 2 - Modified Document -->
      <div style="width: 50%; height: 100%;">
        <ejs-pdfviewer
          ref="viewer2Ref"
          id="pdfViewer2"
          documentPath="https://cdn.syncfusion.com/content/pdf/modified-document.pdf"
          :resourceUrl="resourceUrl"
          @documentLoad="handleDocumentLoad"
          style="height: 100%; width: 100%;"
        >
        </ejs-pdfviewer>
      </div>
    </div>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
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
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  provide() {
    return {
      PdfViewer: [
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
      ]
    };
  },
  data() {
    return {
      resourceUrl: 'https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib',
      loadedCount: 0,
      viewersLoaded: false,
      synchronizationEnabled: true,
      highlightsEnabled: true
    };
  },
  methods: {
    getViewer1() {
      return this.$refs.viewer1Ref?.ej2Instances || null;
    },

    getViewer2() {
      return this.$refs.viewer2Ref?.ej2Instances || null;
    },

    handleDocumentLoad() {
      this.loadedCount += 1;
      if (this.loadedCount === 2) {
        const viewer1 = this.getViewer1();
        const viewer2 = this.getViewer2();
        if (viewer1 && viewer2) {
          this.viewersLoaded = true;
          viewer1.syncViewers(viewer2, this.synchronizationEnabled);
        }
      }
    },

    handleToggleSync() {
      this.synchronizationEnabled = !this.synchronizationEnabled;
      const viewer1 = this.getViewer1();
      const viewer2 = this.getViewer2();
      if (viewer1 && viewer2) {
        viewer1.syncViewers(viewer2, this.synchronizationEnabled);
      }
    },

    async handleToggleHighlights() {
      this.highlightsEnabled = !this.highlightsEnabled;
      const viewer1 = this.getViewer1();
      const viewer2 = this.getViewer2();
      if (this.viewersLoaded && viewer1 && viewer2) {
        const options = {
          beforeColor: '#FF0000',
          afterColor: '#00FF00',
          beforeColorOpacity: 0.4,
          afterColorOpacity: 0.4,
          enableHighlights: this.highlightsEnabled
        };
        try {
          viewer1.removeSemanticTextCompare?.(viewer2);
          const result = await viewer1.semanticTextCompare(viewer2, options);
          console.log('Highlights updated:', result);
        } catch (error) {
          console.error('Error updating highlights:', error);
        }
      }
    },

    handleClearAnnotations() {
      const viewer1 = this.getViewer1();
      const viewer2 = this.getViewer2();
      if (viewer1 && viewer2) {
        viewer1.removeSemanticTextCompare?.(viewer2);
      }
    },

    async handleCompare() {
      const viewer1 = this.getViewer1();
      const viewer2 = this.getViewer2();
      if (!this.viewersLoaded || !viewer1 || !viewer2) {
        return;
      }

      const options = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: this.highlightsEnabled
      };

      try {
        const result = await viewer1.semanticTextCompare(viewer2, options);
        console.log('Full Comparison Result:', result);

        const originalAnnotations = result?.originalDocumentAnnotations || [];
        const modifiedAnnotations = result?.modifiedDocumentAnnotations || [];
        const totalTextDiffCount = result?.totalTextDiffCount || 0;

        console.log('Total Text Differences:', totalTextDiffCount);

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

        console.log('Added:', addedCount);
        console.log('Deleted:', deletedCount);
        console.log('Modified:', modifiedCount);
      } catch (error) {
        console.error('Error during comparison:', error);
      }
    }
  }
};
</script>

<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/pdfviewer/index.css';
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 3: Add test buttons for difference analysis

Add buttons to test and retrieve specific differences:

{% tabs %}
{% highlight html tabtitle="App.vue - Add test buttons to control panel" %}
{% raw %}
<!-- Add to control panel after the main control buttons -->
<div style="width: 1px; height: 24px; background-color: #ccc; margin: 0 8px;"></div>

<!-- Test Buttons -->
<button
  @click="getDifferencesByType('Added')"
  style="
    padding: 8px 16px;
    background-color: #17a2b8;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
  "
>
  Test: Get Added
</button>
<button
  @click="getDifferencesByType('Deleted')"
  style="
    padding: 8px 16px;
    background-color: #17a2b8;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
  "
>
  Test: Get Deleted
</button>
<button
  @click="groupDifferencesByPage"
  style="
    padding: 8px 16px;
    background-color: #6c757d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
  "
>
  Test: Group by Page
</button>
<button
  @click="generateReport"
  style="
    padding: 8px 16px;
    background-color: #6c757d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
  "
>
  Test: Generate Report
</button>
{% endraw %}
{% endhighlight %}
{% endtabs %}

Add these helper methods to the `<script>` section:

{% tabs %}
{% highlight js tabtitle="App.vue - Add helper methods" %}
{% raw %}
async getDifferencesByType(type) {
  const viewer1 = this.getViewer1();
  const viewer2 = this.getViewer2();
  if (!viewer1 || !viewer2) return [];

  const options = {
    beforeColor: '#FF0000',
    afterColor: '#00FF00',
    beforeColorOpacity: 0.4,
    afterColorOpacity: 0.4,
    enableHighlights: true
  };

  try {
    const result = await viewer1.semanticTextCompare(viewer2, options);
    const originalAnnotations = result?.originalDocumentAnnotations || [];
    const modifiedAnnotations = result?.modifiedDocumentAnnotations || [];
    const differences = [];

    // Extract differences by type
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
          const exists = differences.find(
            (d) => d.pageNumber === pageAnnotations.pageNumber && d.text === diff.textDiffData
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
},

async groupDifferencesByPage() {
  const viewer1 = this.getViewer1();
  const viewer2 = this.getViewer2();
  if (!viewer1 || !viewer2) return {};

  const options = {
    beforeColor: '#FF0000',
    afterColor: '#00FF00',
    beforeColorOpacity: 0.4,
    afterColorOpacity: 0.4,
    enableHighlights: true
  };

  try {
    const result = await viewer1.semanticTextCompare(viewer2, options);
    const originalAnnotations = result?.originalDocumentAnnotations || [];
    const modifiedAnnotations = result?.modifiedDocumentAnnotations || [];
    const grouped = {};

    // Group by page
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
},

async generateReport() {
  const viewer1 = this.getViewer1();
  const viewer2 = this.getViewer2();
  if (!viewer1 || !viewer2) return;

  const options = {
    beforeColor: '#FF0000',
    afterColor: '#00FF00',
    beforeColorOpacity: 0.4,
    afterColorOpacity: 0.4,
    enableHighlights: true
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

    // Process annotations
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

    console.log('=== COMPARISON REPORT ===');
    console.log(`Total Differences: ${report.totalDifferences}`);
    console.log(`Added: ${report.summary.added}`);
    console.log(`Deleted: ${report.summary.deleted}`);
    console.log(`Modified: ${report.summary.modified}`);
    console.log(report);
    return report;
  } catch (error) {
    console.error('Error generating report:', error);
  }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Key features

- **Side-by-side comparison** - View original and modified documents simultaneously
- **Synchronized navigation** - Zoom, scroll, and page navigation stay in sync
- **Color-coded differences** - Visual differentiation of deleted (red) and added (green) text
- **Type-specific filtering** - Programmatically retrieve differences by category
- **Page-based grouping** - Organize differences by page for analysis
- **Detailed reporting** - Generate comprehensive comparison reports

## Viewing differences

![Differences panel shows all detected changes](../images/semantic-text-comparison.png)

The differences panel displays all detected differences categorized by type:
- **Deleted** - Text removed from the original document (shown in red)
- **Added** - Text added in the modified document (shown in green)
- **Modified** - Text that changed between documents

## Comparison result structure

The `semanticTextCompare()` method returns data with this structure:

```js
{
  totalTextDiffCount: number,
  originalDocumentAnnotations: [
    {
      pageNumber: number,
      differenceAnnotations: [
        {
          textDiffType: 'added|deleted|modified',
          textDiffData: string,
          annotation: { bounds, color }
        }
      ]
    }
  ],
  modifiedDocumentAnnotations: [ /* same structure */ ]
}
```

## Usage examples

The methods `getDifferencesByType()`, `groupDifferencesByPage()`, and `generateReport()` are already included in the code from **Step 3**. These methods demonstrate how to:

- **Filter by type** - Get all added, deleted, or modified differences
- **Group by page** - Organize differences by page number
- **Generate reports** - Create detailed comparison summaries with breakdown by page

All methods are accessible via the test buttons in the control panel for quick testing and validation.

## Related topics

- [Overview of semantic text comparison](./overview)
- [Highlight differences in UI](./highlight-differences)