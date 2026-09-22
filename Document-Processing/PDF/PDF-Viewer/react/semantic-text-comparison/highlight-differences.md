---
layout: post
title: Highlight Differences in UI | Syncfusion React PDF Viewer
description: Learn how to highlight text differences in the Syncfusion React PDF Viewer using visual highlighting with customizable colors and opacity.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Highlight Differences in UI

The semantic text comparison feature highlights differences between two PDF documents with customizable colors and opacity, making it easy to identify changes at a glance.

## Overview

When you compare two PDF documents using the semantic text comparison feature, differences are highlighted with:

- **Deleted text** - Highlighted in one color (default: red)
- **Added text** - Highlighted in another color (default: green)
- **Synchronized viewers** - Both documents remain aligned during comparison

## Prerequisites

- Syncfusion React PDF Viewer installed
- `PdfComparer` component available
- Button and Uploader components from Syncfusion
- Two PDF documents ready for comparison

## Steps

### Step 1: Import required components

```jsx
import React from 'react';
import { PdfComparer, TextComparisonOptions } from '@syncfusion/ej2-react-pdfviewer';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
```

### Step 2: Create the semantic text comparison component

Set up the comparison with file upload capabilities:

```jsx
function SemanticTextComparison() {
    const pdfComparerRef = React.useRef<PdfComparer | null>(null);
    const originalUploaderRef = React.useRef<UploaderComponent | null>(null);
    const modifiedUploaderRef = React.useRef<UploaderComponent | null>(null);
    const [originalFile, setOriginalFile] = React.useState<File | null>(null);
    const [modifiedFile, setModifiedFile] = React.useState<File | null>(null);
    const [originalFilePath, setOriginalFilePath] = React.useState<string>(
        'https://cdn.syncfusion.com/content/pdf/original-document.pdf'
    );
    const [modifiedFilePath, setModifiedFilePath] = React.useState<string>(
        'https://cdn.syncfusion.com/content/pdf/modified-document.pdf'
    );

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
        try {
            pdfComparerRef.current = new PdfComparer(
                originalFilePath,
                modifiedFilePath,
                'https://cdn.syncfusion.com/ej2/34.2.4/dist/ej2-pdfviewer-lib',
                comparisonOptions,
                true,
                true
            );
            await pdfComparerRef.current.appendTo('#comparer-container');
        } catch (error) {
            console.error('Error initializing PdfComparer:', error);
        }
    };

    return (
        <div id="comparer-container" style={{ height: 'calc(100vh - 330px)' }}></div>
    );
}

export default SemanticTextComparison;
```

### Step 3: Configure highlight colors and options

Define the `TextComparisonOptions` interface to customize highlighting:

```jsx
const comparisonOptions: TextComparisonOptions = {
    beforeColor: '#FF0000',        // Color for deleted text (red)
    afterColor: '#00FF00',         // Color for added text (green)
    beforeColorOpacity: 0.4,       // Transparency for deleted (0-1)
    afterColorOpacity: 0.4,        // Transparency for added (0-1)
    enableHighlights: true         // Enable visual highlighting
};
```

### Step 4: Add file upload functionality

Handle file uploads for custom PDFs:

```jsx
const handleFileChange = (args: any, isOriginal: boolean): void => {
    const file = args.filesData?.[0]?.rawFile as File | undefined;
    if (!file) return;

    // Validate PDF file
    if (!file.name.toLowerCase().endsWith('.pdf')) {
        alert('Please select a valid PDF file.');
        (isOriginal ? originalUploaderRef : modifiedUploaderRef).current?.clearAll();
        return;
    }

    // Create file URL
    const fileUrl = URL.createObjectURL(file);

    if (isOriginal) {
        setOriginalFile(file);
        setOriginalFilePath(fileUrl);
    } else {
        setModifiedFile(file);
        setModifiedFilePath(fileUrl);
    }
};

const handleCompare = async (): Promise<void> => {
    if (!originalFile || !modifiedFile) {
        alert('Please select both Original and Modified PDF files.');
        return;
    }

    try {
        if (pdfComparerRef.current) {
            (pdfComparerRef.current as any).compare?.(
                originalFilePath,
                modifiedFilePath
            );
        }
    } catch (error) {
        console.error('Error comparing documents:', error);
        alert('Error comparing the PDF documents. Please try again.');
    }
};
```

## Highlight customization

The highlight appearance is controlled by these options:

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `beforeColor` | string | Color for deleted text (hex format) | `#FF0000` |
| `afterColor` | string | Color for added text (hex format) | `#00FF00` |
| `beforeColorOpacity` | number | Transparency for deleted (0-1) | `0.4` |
| `afterColorOpacity` | number | Transparency for added (0-1) | `0.4` |
| `enableHighlights` | boolean | Enable/disable visual highlighting | `true` |

### Accessibility color recommendations

Use high-contrast colors for better visibility:

```jsx
const accessibleOptions: TextComparisonOptions = {
    beforeColor: '#E31937',      // Strong red for deleted
    afterColor: '#0070C0',       // Strong blue for added
    beforeColorOpacity: 0.5,
    afterColorOpacity: 0.5,
    enableHighlights: true
};
```

## Features

![Semantic text comparison interface](../images/semantic-text-comparison.png)

- **Side-by-side viewers** - Compare original and modified documents simultaneously
- **Synchronized navigation** - Zoom, scroll, and page navigation synchronized between viewers
- **Color-coded highlighting** - Visual differentiation of added and deleted text (red for deleted, green for added)
- **Differences panel** - Consolidated list on the right showing all detected differences categorized by type
- **File upload support** - Upload custom PDFs for comparison

## Expected result

- Deleted text highlighted with the `beforeColor` (default: red)
- Added text highlighted with the `afterColor` (default: green)
- Both viewers remain synchronized during navigation
- Differences panel displays all changes categorized by type

## Related topics

- [Overview of semantic text comparison](./overview)
- [Programmatically get differences](./programmatically-get-differences)