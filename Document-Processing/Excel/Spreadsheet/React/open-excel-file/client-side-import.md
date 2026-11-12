---
layout: post
title: Client-Side Import in React Spreadsheet | Syncfusion
description: Learn about client-side import of Excel files in the Syncfusion React Spreadsheet component using @syncfusion/ej2-xlsx library.
platform: document-processing
control: Client-Side Import
documentation: ug
---

# Client-Side Import in React Spreadsheet

The React Spreadsheet component supports client-side import of Excel files using the [@syncfusion/ej2-xlsx](https://www.npmjs.com/package/@syncfusion/ej2-xlsx) library. This approach processes Excel files directly in the browser without requiring server communication.

Client-side import supports only XLSX file format and offers faster processing for smaller files since it eliminates network latency. However, for larger files or when advanced processing is required, consider using [server-side import](./server-side-import).

## Supported File Formats

Client-side import supports only the following file format:
* Microsoft Excel Workbook (.xlsx)

## Prerequisites

To use client-side import, install the required package:

```bash
npm install @syncfusion/ej2-xlsx
```

## Import Methods

### Import from Local File

To import an Excel file from the local file system, you can use the HTML file input element to select a file and then process it using the `@syncfusion/ej2-xlsx` library.

```jsx
import React, { useRef } from 'react';
import { Workbook } from '@syncfusion/ej2-xlsx';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

const App = () => {
  const spreadsheetRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        Workbook.open(data).then((workbook) => {
          // Convert workbook to JSON format compatible with Spreadsheet
          // This is a simplified example - actual implementation would depend on your needs
          console.log('Workbook loaded:', workbook);
        });
      };
      fileReader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".xlsx" onChange={handleFileUpload} />
      <SpreadsheetComponent ref={spreadsheetRef} />
    </div>
  );
};

export default App;
```

### Import from URL

You can import an Excel file directly from a URL by fetching the file and processing it with the `@syncfusion/ej2-xlsx` library.

```jsx
import React, { useRef } from 'react';
import { Workbook } from '@syncfusion/ej2-xlsx';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

const App = () => {
  const spreadsheetRef = useRef(null);

  const importFromUrl = () => {
    fetch('https://example.com/sample.xlsx')
      .then(response => response.arrayBuffer())
      .then(data => {
        Workbook.open(data).then((workbook) => {
          // Process the workbook and convert to Spreadsheet JSON
          console.log('Workbook loaded from URL:', workbook);
        });
      })
      .catch(error => {
        console.error('Error loading file from URL:', error);
      });
  };

  return (
    <div>
      <button onClick={importFromUrl}>Import from URL</button>
      <SpreadsheetComponent ref={spreadsheetRef} />
    </div>
  );
};

export default App;
```

### Import from Blob

To import an Excel file from a Blob object, you can convert the Blob to an ArrayBuffer and process it with the `@syncfusion/ej2-xlsx` library.

```jsx
import React, { useRef } from 'react';
import { Workbook } from '@syncfusion/ej2-xlsx';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

const App = () => {
  const spreadsheetRef = useRef(null);

  const importFromBlob = (blob) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      Workbook.open(data).then((workbook) => {
        // Process the workbook and convert to Spreadsheet JSON
        console.log('Workbook loaded from Blob:', workbook);
      });
    };
    fileReader.readAsArrayBuffer(blob);
  };

  return (
    <div>
      <SpreadsheetComponent ref={spreadsheetRef} />
    </div>
  );
};

export default App;
```

## Limitations

Client-side import has the following limitations compared to server-side import:

1. **File Format Support**: Only supports XLSX format (.xlsx files)
2. **File Size Limits**: Large files may cause browser memory issues
3. **Performance**: Processing is limited by client device capabilities
4. **No Advanced Features**: Does not support features like external workbook references or advanced parsing options

For applications requiring broader format support or handling of large files, consider using [server-side import](./server-side-import).

## See Also

* [Server-Side Import](./server-side-import)
* [Import from AWS S3](./from-aws-s3-bucket)
* [Import from Azure Blob Storage](./from-azure-blob-storage)
* [Import from Google Cloud Storage](./from-google-cloud-storage)
* [Import from Google Drive](./from-google-drive)