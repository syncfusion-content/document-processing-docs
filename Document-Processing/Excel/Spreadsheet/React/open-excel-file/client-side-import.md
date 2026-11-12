---
layout: post
title: Client-Side Import in React Spreadsheet | Syncfusion
description: Learn about client-side import of Excel files in the Syncfusion React Spreadsheet component.
platform: document-processing
control: Client-Side Import
documentation: ug
---

# Client-Side Import in React Spreadsheet

Client-side import processes workbook files directly in the browser without sending them to an Open service. When `openUrl` is not configured, the Spreadsheet uses its integrated client-side file-processing functionality.

Customers continue using the Spreadsheet user interface or public `open()` method. The Spreadsheet internally handles file processing without requiring manual conversion or direct library usage.

## How Client-Side Import Works

When `openUrl` is not configured, the Spreadsheet component automatically uses its integrated client-side processing capabilities. The component handles file parsing and rendering internally without requiring server communication.

Customers do not need to manually call `Workbook.open()` or perform any direct processing with `@syncfusion/ej2-xlsx`. The Spreadsheet manages all file processing automatically through its public API.

## Supported Formats

Client-side import currently supports:
* Microsoft Excel Workbook (.xlsx)

## Configure Client-Side Import

To use client-side import, simply omit the `openUrl` property from your Spreadsheet configuration:

```js
import React, { useRef } from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

const App = () => {
  const spreadsheetRef = useRef(null);
  
  return (
    <SpreadsheetComponent
      ref={spreadsheetRef}
      // Note: No openUrl configured for client-side import
    />
  );
};

export default App;
```

With this configuration, all standard Spreadsheet open functionality works through client-side processing.

## Supported File Sources

### Open Excel Files from the Local System

You can open Excel files from the local system using the standard File > Open interface or programmatically:

```js
// Programmatic open from local file input
const handleFileOpen = (event) => {
  const file = event.target.files[0];
  if (file) {
    spreadsheetRef.current?.open({ file });
  }
};

// In your JSX:
// <input type="file" accept=".xlsx" onChange={handleFileOpen} />
```

### Open Excel Files from a URL

To open Excel files from a URL, fetch the file and convert the response to a File object:

```js
const openFromUrl = () => {
  fetch('https://example.com/sample.xlsx')
    .then(response => response.blob())
    .then(blob => {
      const file = new File([blob], 'sample.xlsx', { type: blob.type });
      spreadsheetRef.current?.open({ file });
    })
    .catch(error => {
      console.error('Error loading file from URL:', error);
    });
};
```

### Open Excel Files from Blob Data

To open Excel files from Blob data, convert the Blob to a File object:

```js
const openFromBlob = (blobData) => {
  const file = new File([blobData], 'sample.xlsx', { type: blobData.type });
  spreadsheetRef.current?.open({ file });
};
```

In all cases, the workflow ends by passing a `File` object to the public Spreadsheet API:

`spreadsheetRef.current?.open({ file });`

## Considerations

1. **Format Limitation**: Client-side import currently supports XLSX format only
2. **Size Limitations**: Large files may impact browser performance
3. **Feature Differences**: Some advanced features available in server-side import may not be available in client-side import
4. **No Manual Processing Required**: Customers should not manually call `Workbook.open()` or process `Uint8Array` data

## See Also

* [Server-Side Import](./server-side-import)
* [Import from AWS S3](./from-aws-s3-bucket)
* [Import from Azure Blob Storage](./from-azure-blob-storage)
* [Import from Google Cloud Storage](./from-google-cloud-storage)
* [Import from Google Drive](./from-google-drive)