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
  <div style="height: 100%; width: 100%;">
    <!-- PDF Viewers Container -->
    <div style="display: flex; height: 600px; gap: 0;">
      <!-- Viewer 1 - Original Document -->
      <div style="width: 50%; height: 100%; border-right: 1px solid #ccc;">
        <ejs-pdfviewer
          ref="viewer1"
          id="pdfViewer1"
          :documentPath="'https://cdn.syncfusion.com/content/pdf/original-document.pdf'"
          resourceUrl="https://cdn.syncfusion.com/ej2/34.2.4/dist/ej2-pdfviewer-lib"
          @documentLoad="handleDocumentLoad"
          style="height: 100%; width: 100%;">
        </ejs-pdfviewer>
      </div>

      <!-- Viewer 2 - Modified Document -->
      <div style="width: 50%; height: 100%;">
        <ejs-pdfviewer
          ref="viewer2"
          id="pdfViewer2"
          :documentPath="'https://cdn.syncfusion.com/content/pdf/modified-document.pdf'"
          resourceUrl="https://cdn.syncfusion.com/ej2/34.2.4/dist/ej2-pdfviewer-lib"
          @documentLoad="handleDocumentLoad"
          style="height: 100%; width: 100%;">
        </ejs-pdfviewer>
      </div>
    </div>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      loadedCount: 0,
      viewersLoaded: false,
      synchronizationEnabled: true,
      highlightsEnabled: true
    };
  },
  methods: {
    handleDocumentLoad() {
      this.loadedCount += 1;
      if (this.loadedCount === 2 && this.$refs.viewer1 && this.$refs.viewer2) {
        this.viewersLoaded = true;
        this.$refs.viewer1.syncViewers(this.$refs.viewer2, this.synchronizationEnabled);
      }
    }
  }
};
</script>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 3: Perform semantic text comparison

Compare the documents programmatically and access differences:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
{% raw %}
<script>
methods: {
  async handleCompare() {
    if (!this.viewersLoaded || !this.$refs.viewer1 || !this.$refs.viewer2) {
      return;
    }

    const options = {
      beforeColor: '#FF0000',      // Red for original
      afterColor: '#00FF00',       // Green for modified
      beforeColorOpacity: 0.4,
      afterColorOpacity: 0.4,
      enableHighlights: this.highlightsEnabled,
    };

    try {
      const result = await this.$refs.viewer1.semanticTextCompare(this.$refs.viewer2, options);
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
}
</script>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 4: Generate comparison report

Generate a detailed report with differences grouped by page:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
{% raw %}
<script>
methods: {
  async generateReport() {
    if (!this.$refs.viewer1 || !this.$refs.viewer2) return;

    const options = {
      beforeColor: '#FF0000',
      afterColor: '#00FF00',
      beforeColorOpacity: 0.4,
      afterColorOpacity: 0.4,
      enableHighlights: true,
    };

    try {
      const result = await this.$refs.viewer1.semanticTextCompare(this.$refs.viewer2, options);

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
}
</script>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 5: Add control buttons and synchronization

Manage synchronization, highlights, and comparison controls:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
{% raw %}
<script>
methods: {
  handleToggleSync() {
    this.synchronizationEnabled = !this.synchronizationEnabled;

    if (this.$refs.viewer1 && this.$refs.viewer2) {
      this.$refs.viewer1.syncViewers(this.$refs.viewer2, this.synchronizationEnabled);
    }
  },

  async handleToggleHighlights() {
    this.highlightsEnabled = !this.highlightsEnabled;

    // Re-apply comparison with updated highlight state
    if (this.viewersLoaded && this.$refs.viewer1 && this.$refs.viewer2) {
      const options = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: this.highlightsEnabled,
      };

      try {
        // Clear previous comparison
        this.$refs.viewer1.removeSemanticTextCompare?.(this.$refs.viewer2);
        // Apply new comparison with updated highlights state
        const result = await this.$refs.viewer1.semanticTextCompare(this.$refs.viewer2, options);
        console.log('Highlights updated:', result);
      } catch (error) {
        console.error('Error updating highlights:', error);
      }
    }
  },

  handleClearAnnotations() {
    if (this.$refs.viewer1 && this.$refs.viewer2) {
      this.$refs.viewer1.removeSemanticTextCompare?.(this.$refs.viewer2);
    }
  }
}
</script>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Step 6: Add control buttons UI

Create UI buttons for comparison, highlights, and synchronization controls:

{% tabs %}
{% highlight html tabtitle="App.vue" %}
{% raw %}
<template>
  <div style="height: 100%; width: 100%;">
    <!-- Control Panel -->
    <div style="display: flex; gap: 8px; padding: 12px; background-color: #f5f5f5; border-bottom: 1px solid #ddd;">
      <button @click="handleCompare" style="padding: 8px 16px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Compare Documents
      </button>
      <button @click="handleToggleHighlights" style="padding: 8px 16px; background-color: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">
        {{ highlightsEnabled ? 'Disable Highlights' : 'Enable Highlights' }}
      </button>
      <button @click="handleToggleSync" style="padding: 8px 16px; background-color: #ffc107; color: black; border: none; border-radius: 4px; cursor: pointer;">
        {{ synchronizationEnabled ? 'Disable Sync' : 'Enable Sync' }}
      </button>
      <button @click="handleClearAnnotations" style="padding: 8px 16px; background-color: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Clear Annotations
      </button>
    </div>
  </div>
</template>
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
{% highlight html tabtitle="App.vue" %}
{% raw %}
<script>
methods: {
  async getDifferencesByType(type) {
    if (!this.$refs.viewer1 || !this.$refs.viewer2) return [];

    const options = {
      beforeColor: '#FF0000',
      afterColor: '#00FF00',
      beforeColorOpacity: 0.4,
      afterColorOpacity: 0.4,
      enableHighlights: true,
    };

    try {
      const result = await this.$refs.viewer1.semanticTextCompare(this.$refs.viewer2, options);

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
}

// Usage in component method
// const addedDifferences = await this.getDifferencesByType('added');
// const deletedDifferences = await this.getDifferencesByType('deleted');
// const modifiedDifferences = await this.getDifferencesByType('modified');
</script>
{% endraw %}
{% endhighlight %}
{% endtabs %}

### Group differences by page

{% tabs %}
{% highlight html tabtitle="App.vue" %}
{% raw %}
<script>
methods: {
  async groupDifferencesByPage() {
    if (!this.$refs.viewer1 || !this.$refs.viewer2) return {};

    const options = {
      beforeColor: '#FF0000',
      afterColor: '#00FF00',
      beforeColorOpacity: 0.4,
      afterColorOpacity: 0.4,
      enableHighlights: true,
    };

    try {
      const result = await this.$refs.viewer1.semanticTextCompare(this.$refs.viewer2, options);

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
}
</script>
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Related topics

- [Overview of semantic text comparison](./overview)
- [Highlight differences in UI](./highlight-differences)