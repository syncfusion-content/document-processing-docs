---
layout: post
title: Client-Side Import in React Spreadsheet | Syncfusion
description: Learn about client-side import of Excel files in the Syncfusion React Spreadsheet component using @syncfusion/ej2-xlsx library.
platform: document-processing
control: Client-Side Import
documentation: ug
---

# Client-Side Import in React Spreadsheet

The React Spreadsheet component can import Excel files directly in the browser using the [@syncfusion/ej2-xlsx](https://www.npmjs.com/package/@syncfusion/ej2-xlsx) library. This approach processes Excel files client-side without requiring server communication.

However, it's important to note that `@syncfusion/ej2-xlsx` is a file-processing library and not designed for direct integration with the Spreadsheet UI component. For full Spreadsheet functionality, including formula calculation and advanced features, [server-side import](./server-side-import) is recommended.

## Supported File Formats

Client-side import using `@syncfusion/ej2-xlsx` supports only the following file format:
* Microsoft Excel Workbook (.xlsx)

## Prerequisites

To use client-side import, install the required package:

```bash
npm install @syncfusion/ej2-xlsx
```

## Reading Excel Files Client-Side

The `@syncfusion/ej2-xlsx` library can read and extract data from XLSX files, but does not provide direct integration with the Spreadsheet component. Below are examples of reading Excel files:

### Reading from Local File

To read an Excel file from the local file system:

```jsx
import React from 'react';
import { Workbook } from '@syncfusion/ej2-xlsx';

const App = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        Workbook.open(data).then((workbook) => {
          // Access workbook data
          const sheet = workbook.sheet(0);
          const cellValue = sheet.cell('A1').value;
          console.log('Cell A1 value:', cellValue);
          
          // Note: This does not directly integrate with Spreadsheet component
          // For full integration, use server-side import approach
        });
      };
      fileReader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".xlsx" onChange={handleFileUpload} />
      <p>Note: This reads file data but does not directly load into Spreadsheet UI</p>
    </div>
  );
};

export default App;
```

### Reading from URL

To read an Excel file directly from a URL:

```jsx
import React from 'react';
import { Workbook } from '@syncfusion/ej2-xlsx';

const App = () => {
  const readFromUrl = () => {
    fetch('https://example.com/sample.xlsx')
      .then(response => response.arrayBuffer())
      .then(data => {
        Workbook.open(data).then((workbook) => {
          // Process the workbook data
          console.log('Workbook loaded from URL:', workbook);
          // Note: Manual conversion to Spreadsheet format required
        });
      })
      .catch(error => {
        console.error('Error loading file from URL:', error);
      });
  };

  return (
    <div>
      <button onClick={readFromUrl}>Read from URL</button>
      <p>Note: This reads file data but does not directly load into Spreadsheet UI</p>
    </div>
  );
};

export default App;
```

## Limitations

Client-side import using `@syncfusion/ej2-xlsx` has the following limitations:

1. **No Direct Spreadsheet Integration**: Does not directly integrate with Spreadsheet UI component
2. **Manual Data Conversion Required**: Requires manual conversion to Spreadsheet JSON format
3. **Limited File Format Support**: Only supports XLSX format (.xlsx files)
4. **No Formula Calculation**: Formulas remain as text and are not calculated
5. **No Advanced Features**: Does not support external workbook references, advanced parsing options, or full Spreadsheet features
6. **File Size Limits**: Large files may cause browser memory issues
7. **Performance**: Processing is limited by client device capabilities

## Recommended Approach

For applications requiring full Spreadsheet functionality with proper integration, consider using [server-side import](./server-side-import) which provides:

* Complete integration with Spreadsheet UI component
* Automatic conversion to Spreadsheet-compatible JSON
* Support for multiple file formats (XLSX, XLS, CSV, XLSM, XLSB)
* Formula calculation and advanced features
* Better performance for large files

## See Also

* [Server-Side Import](./server-side-import)
* [Import from AWS S3](./from-aws-s3-bucket)
* [Import from Azure Blob Storage](./from-azure-blob-storage)
* [Import from Google Cloud Storage](./from-google-cloud-storage)
* [Import from Google Drive](./from-google-drive)