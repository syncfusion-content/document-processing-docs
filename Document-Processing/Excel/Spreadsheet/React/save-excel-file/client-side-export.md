---
layout: post
title: Client-Side Export in React Spreadsheet | Syncfusion
description: Learn how to export workbook files directly in the browser using the Syncfusion React Spreadsheet without configuring a Save service.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Client-side export in React Spreadsheet

Client-side export generates workbook files directly in the browser without sending data to a Save service. When `saveUrl` is not configured, the Spreadsheet uses its integrated client-side file-generation functionality.

React Spreadsheet uses `@syncfusion/ej2-xlsx` internally for client-side workbook processing. Use the Spreadsheet user interface or the public `save()` method to export files. The Spreadsheet manages all file generation automatically through its public API.

## Advantages of Client-Side Export

Client-side export provides several key advantages over server-side processing:

* **No Server Dependency**: Generate Excel files directly in the browser without requiring server endpoints
* **Improved Performance**: Eliminates network latency for file generation operations
* **Enhanced Privacy**: Files never leave the client device during processing
* **Reduced Infrastructure Costs**: No need to maintain server-side processing infrastructure
* **Better User Experience**: Faster response times and offline capabilities

## How client-side export works

When `saveUrl` is not configured, the Spreadsheet component automatically uses its integrated client-side processing capabilities. The component handles file generation and downloading internally without requiring server communication.

The Spreadsheet manages all file generation automatically through its public API. `saveUrl` must not be configured for client-side export.

## Supported formats

Client-side export currently supports:
* Microsoft Excel Workbook (.xlsx)
* Portable Document Format (.pdf) - Coming soon

## Configure client-side export

To use client-side export, simply omit the `saveUrl` property from your Spreadsheet configuration:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    return (
        <SpreadsheetComponent 
            allowSave={true}
            // Note: saveUrl is omitted for client-side export
        />
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    return (
        <SpreadsheetComponent 
            allowSave={true}
            // Note: saveUrl is omitted for client-side export
        />
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-local-cs1" %}

With this configuration, the Spreadsheet will generate Excel files directly in the browser without requiring server communication. For specific export implementations, see the sections below.

## Export Excel files programmatically

Use the public `save()` method to export files programmatically. Pass export options through the `options` property:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);
    
    const handleExport = () => {
        if (spreadsheetRef.current) {
            spreadsheetRef.current.save({
                fileName: 'MyWorkbook',
                saveType: 'Xlsx'
            });
        }
    };

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} allowSave={true} />
            <button onClick={handleExport}>Export to Excel</button>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    
    const handleExport = (): void => {
        if (spreadsheetRef.current) {
            spreadsheetRef.current.save({
                fileName: 'MyWorkbook',
                saveType: 'Xlsx'
            });
        }
    };

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} allowSave={true} />
            <button onClick={handleExport}>Export to Excel</button>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-local-cs1" %}

## Export Excel files as Blob data

To export Excel files as Blob data for custom handling, set `needBlobData` to `true` in the save options:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef(null);
    
    const handleExportAsBlob = () => {
        if (spreadsheetRef.current) {
            spreadsheetRef.current.save({
                fileName: 'MyWorkbook',
                saveType: 'Xlsx',
                needBlobData: true
            }).then((blob: Blob) => {
                // Handle blob data as needed
                console.log('Blob data received:', blob);
                // Example: Create download link
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'MyWorkbook.xlsx';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            });
        }
    };

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} allowSave={true} />
            <button onClick={handleExportAsBlob}>Export as Blob</button>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    
    const handleExportAsBlob = (): void => {
        if (spreadsheetRef.current) {
            spreadsheetRef.current.save({
                fileName: 'MyWorkbook',
                saveType: 'Xlsx',
                needBlobData: true
            }).then((blob: Blob) => {
                // Handle blob data as needed
                console.log('Blob data received:', blob);
                // Example: Create download link
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'MyWorkbook.xlsx';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            });
        }
    };

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} allowSave={true} />
            <button onClick={handleExportAsBlob}>Export as Blob</button>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-blob-cs1" %}

## Feature support

Client-side export supports comprehensive Excel workbook features:

### Worksheets
* Multiple worksheet creation and management
* Worksheet renaming and visibility control
* Active worksheet selection

### Cell Data
* Text, number, and date values
* Formulas and expressions
* Cell references and ranges

### Formatting
* Font styles, sizes, and colors
* Background colors and patterns
* Borders and alignment
* Number formats and custom formatting

### Structures
* Row and column dimensions
* Hidden rows and columns
* Frozen panes and scroll positions

### Features
* Conditional formatting rules
* Data validation constraints
* Filters and sorting
* Defined names and ranges

### Objects
* Charts and images
* Hyperlinks and comments
* Notes and threaded comments

### Protection
* Workbook and worksheet protection
* Cell locking and unlocking
* Password protection options

## Considerations

1. **Format Limitation**: Client-side export currently supports XLSX format only
2. **Size Limitations**: Large workbooks may impact browser performance
3. **Feature Differences**: Some advanced features available in server-side export may not be available in client-side export
4. **No saveUrl Required**: `saveUrl` must not be configured for client-side export
5. **Browser Compatibility**: Modern browsers with adequate memory resources required

## See also

* [Server-Side Export](./server-side-export)
* [Save to AWS S3](./to-aws-s3-bucket)
* [Save to Azure Blob Storage](./to-azure-blob-storage)
* [Save to Google Cloud Storage](./to-google-cloud-storage)
* [Save to Google Drive](./to-google-drive)