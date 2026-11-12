---
layout: post
title: Client-Side Import in React Spreadsheet | Syncfusion
description: Learn how to import workbook files directly in the browser using the Syncfusion React Spreadsheet without configuring an Open service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Client-side import in React Spreadsheet

Client-side import processes workbook files directly in the browser without sending them to an Open service. When `openUrl` is not configured, the Spreadsheet uses its integrated client-side file-processing functionality.

React Spreadsheet uses `@syncfusion/ej2-xlsx` internally for client-side workbook processing. Customers can use the Spreadsheet user interface or public `open()` method to open files. The Spreadsheet manages all file processing automatically through its public API.

## How client-side import works

When `openUrl` is not configured, the Spreadsheet component automatically uses its integrated client-side processing capabilities. The component handles file parsing and rendering internally without requiring server communication.

The Spreadsheet manages all file processing automatically through its public API. `openUrl` must not be configured for client-side import.

## Supported format

Client-side import currently supports:
* Microsoft Excel Workbook (.xlsx)

## Configure client-side import

To use client-side import, simply omit the `openUrl` property from your Spreadsheet configuration:

```jsx
import React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

const App = () => {
    return <SpreadsheetComponent allowOpen={true} />;
};

export default App;
```

With this configuration, all standard Spreadsheet open functionality works through client-side processing.

## Supported file sources

### Open a file from the local system

You can open Excel files from the local system using the standard File > Open interface or programmatically:

```jsx
import React, { useRef } from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

const App = () => {
    const spreadsheetRef = useRef(null);

    const openFile = (event) => {
        const file = event.target.files?.[0];

        if (file) {
            spreadsheetRef.current?.open({ file });
        }
    };

    return (
        <div>
            <input type="file" accept=".xlsx" onChange={openFile} />
            <SpreadsheetComponent ref={spreadsheetRef} />
        </div>
    );
};

export default App;
```

### Open a file from a URL

To open Excel files from a URL, fetch the file and convert the response to a File object:

```jsx
const openFromUrl = async () => {
    const response = await fetch('https://example.com/sample.xlsx');

    if (!response.ok) {
        throw new Error('Unable to retrieve the Excel file.');
    }

    const blob = await response.blob();
    const file = new File([blob], 'sample.xlsx', {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    spreadsheetRef.current?.open({ file });
};
```

> When the file is hosted on a different origin, the server must allow the required cross-origin request.

### Open a file from Blob data

To open Excel files from Blob data, convert the Blob to a File object:

```jsx
const openFromBlob = (blobData) => {
    const file = new File([blobData], 'sample.xlsx', {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    spreadsheetRef.current?.open({ file });
};
```

In all cases, the workflow ends by passing a `File` object to the public Spreadsheet API:
`spreadsheetRef.current?.open({ file });`

## Considerations

- Client-side import supports the XLSX format.
- Workbook processing uses browser CPU and memory.
- Processing time depends on the workbook size and complexity and the capabilities of the browser and device.
- An Open service is not required when `openUrl` is not configured.

## See also

- [Open Excel files](../open-excel-files)
- [Server-side import](./server-side-import)