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

The semantic text comparison feature provides programmatic access to all differences found between two PDF documents. You can retrieve structured difference data for custom processing, reporting, or integration with other workflows through the `PdfComparer` instance.

## Overview

The comparison provides:

- **Difference list access** - All detected differences with type and content
- **Structured data** - Each difference contains text, type, location, and page information
- **Categorized results** - Differences grouped by type (Added, Deleted, Modified)
- **Custom processing** - Export, filter, or analyze differences programmatically

## Prerequisites

- Syncfusion React PDF Viewer installed
- `PdfComparer` component initialized
- Two PDF documents loaded for comparison

## Steps

### Step 1: Initialize the PdfComparer component

```jsx
import React from 'react';
import { PdfComparer, TextComparisonOptions } from '@syncfusion/ej2-react-pdfviewer';

function SemanticTextComparison() {
    const pdfComparerRef = React.useRef<PdfComparer | null>(null);

    const comparisonOptions: TextComparisonOptions = {
        beforeColor: '#FF0000',
        afterColor: '#00FF00',
        beforeColorOpacity: 0.4,
        afterColorOpacity: 0.4,
        enableHighlights: true
    } as TextComparisonOptions;

    React.useEffect(() => {
        initializeComparer();
    }, []);

    const initializeComparer = async (): Promise<void> => {
        pdfComparerRef.current = new PdfComparer(
            'https://cdn.syncfusion.com/content/pdf/original-document.pdf',
            'https://cdn.syncfusion.com/content/pdf/modified-document.pdf',
            'https://cdn.syncfusion.com/ej2/34.2.4/dist/ej2-pdfviewer-lib',
            comparisonOptions,
            true,
            true
        );
        await pdfComparerRef.current.appendTo('#comparer-container');
    };

    return (
        <div id="comparer-container" style={{ height: 'calc(100vh - 330px)' }}></div>
    );
}
```

### Step 2: Access the differences panel

The `PdfComparer` automatically displays a differences panel with categorized results. To access differences programmatically:

```jsx
const getDifferencesData = (): void => {
    if (pdfComparerRef.current) {
        // Access the differences from the comparer instance
        const comparerElement = pdfComparerRef.current;
        const differencesList = (comparerElement as any).getDifferences?.();
        
        if (differencesList) {
            console.log('Total differences:', differencesList.length);
            
            // Categorize by type
            const added = differencesList.filter((d: any) => d.type === 'Added');
            const deleted = differencesList.filter((d: any) => d.type === 'Deleted');
            const modified = differencesList.filter((d: any) => d.type === 'Modified');
            
            console.log('Added:', added.length);
            console.log('Deleted:', deleted.length);
            console.log('Modified:', modified.length);
        }
    }
};
```

### Step 3: Process and export differences

Filter and process differences for custom workflows:

```jsx
const generateReport = (): void => {
    if (!pdfComparerRef.current) return;

    const comparerElement = (pdfComparerRef.current as any);
    const differencesList = comparerElement.getDifferences?.();

    if (differencesList) {
        const report = {
            totalDifferences: differencesList.length,
            added: differencesList.filter((d: any) => d.type === 'Added').length,
            deleted: differencesList.filter((d: any) => d.type === 'Deleted').length,
            modified: differencesList.filter((d: any) => d.type === 'Modified').length,
            byPage: {} as any
        };

        // Group by page
        differencesList.forEach((diff: any) => {
            const pageNum = diff.pageNumber || 1;
            if (!report.byPage[pageNum]) {
                report.byPage[pageNum] = [];
            }
            report.byPage[pageNum].push(diff);
        });

        console.log('Comparison Report:', report);
        return report;
    }
};
```

### Step 4: Display comparison summary

Create a summary component showing difference counts:

```jsx
const ComparisonSummary = (): JSX.Element => {
    const [summary, setSummary] = React.useState<any>(null);

    const handleShowSummary = (): void => {
        if (pdfComparerRef.current) {
            const comparerElement = (pdfComparerRef.current as any);
            const differencesList = comparerElement.getDifferences?.();
            
            if (differencesList) {
                setSummary({
                    total: differencesList.length,
                    added: differencesList.filter((d: any) => d.type === 'Added').length,
                    deleted: differencesList.filter((d: any) => d.type === 'Deleted').length,
                    modified: differencesList.filter((d: any) => d.type === 'Modified').length
                });
            }
        }
    };

    if (!summary) {
        return <button onClick={handleShowSummary}>Show Summary</button>;
    }

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '4px' }}>
            <h4>Comparison Summary</h4>
            <p><strong>Total Differences:</strong> {summary.total}</p>
            <ul>
                <li><span style={{ color: '#FF0000' }}>●</span> Deleted: {summary.deleted}</li>
                <li><span style={{ color: '#00FF00' }}>●</span> Added: {summary.added}</li>
                <li><span style={{ color: '#FFA500' }}>●</span> Modified: {summary.modified}</li>
            </ul>
        </div>
    );
};
```

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

### Export differences to CSV

```jsx
const exportToCSV = (): void => {
    const comparerElement = (pdfComparerRef.current as any);
    const differencesList = comparerElement.getDifferences?.();
    
    if (!differencesList) return;

    let csv = 'Page,Type,Text\n';
    
    differencesList.forEach((diff: any) => {
        const text = (diff.text || '').replace(/"/g, '""');
        csv += `${diff.pageNumber || 1},"${diff.type}","${text}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'differences.csv';
    link.click();
    window.URL.revokeObjectURL(url);
};
```

### Filter differences by type

```jsx
const getDifferencesByType = (type: string): any[] => {
    const comparerElement = (pdfComparerRef.current as any);
    const differencesList = comparerElement.getDifferences?.();
    
    return differencesList?.filter((d: any) => d.type === type) || [];
};

// Usage
const addedDifferences = getDifferencesByType('Added');
const deletedDifferences = getDifferencesByType('Deleted');
const modifiedDifferences = getDifferencesByType('Modified');
```

### Group differences by page

```jsx
const groupDifferencesByPage = (): any => {
    const comparerElement = (pdfComparerRef.current as any);
    const differencesList = comparerElement.getDifferences?.();
    
    const grouped: any = {};
    
    differencesList?.forEach((diff: any) => {
        const pageNum = diff.pageNumber || 1;
        if (!grouped[pageNum]) {
            grouped[pageNum] = [];
        }
        grouped[pageNum].push(diff);
    });
    
    return grouped;
};
```

## Error handling

Handle comparison errors gracefully:

```jsx
const handleComparison = async (): Promise<void> => {
    try {
        if (!pdfComparerRef.current) {
            throw new Error('PdfComparer not initialized');
        }

        const comparerElement = (pdfComparerRef.current as any);
        const differencesList = comparerElement.getDifferences?.();
        
        if (!differencesList) {
            throw new Error('No differences found or comparison not completed');
        }

        console.log(`Found ${differencesList.length} differences`);
    } catch (error) {
        console.error('Comparison error:', (error as Error).message);
        // Display error to user
    }
};
```

## Performance notes

For large documents:

- **Comparison is asynchronous** - Wait for comparison to complete before accessing differences
- **Results are built incrementally** - The differences panel updates as results become available
- **Efficient processing** - Filter and process differences based on specific needs
- **Memory optimization** - Export and clear large difference sets when done

## Related topics

- [Overview of semantic text comparison](./overview)
- [Highlight differences in UI](./highlight-differences)