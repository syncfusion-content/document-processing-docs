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

React Spreadsheet uses `@syncfusion/ej2-xlsx` internally for client-side workbook processing. Use the Spreadsheet user interface or the public `open()` method to open files. The Spreadsheet manages all file processing automatically through its public API.

## Advantages of Client-Side Import

Client-side import provides several key advantages over server-side processing:

* **No Server Dependency**: Process Excel files directly in the browser without requiring server endpoints
* **Improved Performance**: Eliminates network latency for file processing operations
* **Enhanced Privacy**: Files never leave the client device during processing
* **Reduced Infrastructure Costs**: No need to maintain server-side processing infrastructure
* **Better User Experience**: Faster response times and offline capabilities

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
    
    const handleFileOpen = (event) => {
        const file = event.target.files[0];
        if (file) {
            spreadsheetRef.current?.open({ file });
        }
    };

    return (
        <div>
            <input type="file" accept=".xlsx" onChange={handleFileOpen} />
            <SpreadsheetComponent ref={spreadsheetRef} allowOpen={true} />
        </div>
    );
};

export default App;
```

### Open a file from a URL

To open Excel files from a URL, fetch the file and convert the response to a File object:

```jsx
import React, { useRef } from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

const App = () => {
    const spreadsheetRef = useRef(null);
    
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

    return (
        <div>
            <button onClick={openFromUrl}>Open from URL</button>
            <SpreadsheetComponent ref={spreadsheetRef} allowOpen={true} />
        </div>
    );
};

export default App;
```

Note: Cross-origin requests require appropriate CORS headers from the remote server.

### Open a file from Blob data

To open Excel files from Blob data, convert the Blob to a File object:

```jsx
import React, { useRef } from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

const App = () => {
    const spreadsheetRef = useRef(null);
    
    const openFromBlob = (blobData) => {
        const file = new File([blobData], 'sample.xlsx', { type: blobData.type });
        spreadsheetRef.current?.open({ file });
    };

    return (
        <SpreadsheetComponent ref={spreadsheetRef} allowOpen={true} />
    );
};

export default App;
```

In all cases, the workflow ends by passing a `File` object to the public Spreadsheet API:
`spreadsheetRef.current?.open({ file });`

## Feature Support

Client-side import supports comprehensive Excel workbook features:

* **Worksheets**: Multiple worksheets with custom names and visibility states
* **Cell Data**: Text, numbers, dates, formulas, and error values
* **Formatting**: Fonts, colors, alignment, borders, and number formats
* **Formulas**: Mathematical, logical, text, date/time, and lookup formulas
* **References**: Cell references, range references, and cross-sheet formulas
* **Structures**: Merged cells, frozen panes, hidden rows/columns
* **Features**: Filters, data validation, conditional formatting, hyperlinks
* **Objects**: Comments, notes, and basic image support
* **Protection**: Worksheet-level protection options

## Considerations

1. **Format Limitation**: Client-side import currently supports XLSX format only
2. **Size Limitations**: Large files may impact browser performance
3. **Feature Differences**: Some advanced features available in server-side import may have limitations in client-side processing
4. **No openUrl Required**: `openUrl` must not be configured for client-side import
5. **Browser Compatibility**: Modern browsers with adequate JavaScript support required

## See also

* [Server-Side Import](./server-side-import)
* [Import from AWS S3](./from-aws-s3-bucket)