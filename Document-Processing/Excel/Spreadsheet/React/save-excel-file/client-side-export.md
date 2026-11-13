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

## Export a file programmatically

To export a file programmatically, use the public `save()` method without specifying a `saveUrl`:

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
            <button onClick={handleExport}>Export to Excel</button>
            <SpreadsheetComponent 
                ref={spreadsheetRef}
                allowSave={true} />
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
            <button onClick={handleExport}>Export to Excel</button>
            <SpreadsheetComponent 
                ref={spreadsheetRef}
                allowSave={true} />
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-local-cs1" %}

## Export as Blob data

To export as Blob data for custom handling, use the `needBlobData` option:

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
                // Handle the blob data as needed
                console.log('Blob data generated:', blob);
                // Example: Upload to a custom service
                // const formData = new FormData();
                // formData.append('file', blob, 'MyWorkbook.xlsx');
                // fetch('/upload', { method: 'POST', body: formData });
            });
        }
    };

    return (
        <div>
            <button onClick={handleExportAsBlob}>Export as Blob</button>
            <SpreadsheetComponent 
                ref={spreadsheetRef}
                allowSave={true} />
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
                // Handle the blob data as needed
                console.log('Blob data generated:', blob);
                // Example: Upload to a custom service
                // const formData = new FormData();
                // formData.append('file', blob, 'MyWorkbook.xlsx');
                // fetch('/upload', { method: 'POST', body: formData });
            });
        }
    };

    return (
        <div>
            <button onClick={handleExportAsBlob}>Export as Blob</button>
            <SpreadsheetComponent 
                ref={spreadsheetRef}
                allowSave={true} />
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-local-cs1" %}

## Feature Support

Client-side export supports comprehensive Excel workbook features:

### Worksheets
* Multiple worksheets with custom names
* Worksheet visibility (visible, hidden, very hidden)
* Worksheet protection with password
* Freeze panes and split views
* Print area and print titles
* Tab color customization

### Cell Data
* Text, numbers, dates, and Boolean values
* Formulas with cell references and functions
* Cross-worksheet references
* Array formulas
* Dynamic formulas

### Formatting
* Font properties (family, size, weight, style, color)
* Fill patterns and colors
* Borders with various styles
* Number formatting (currency, percentage, date, custom)
* Text alignment (horizontal, vertical)
* Text control (wrap text, shrink to fit, merge cells)
* Cell protection (locked, hidden)

### Structures
* Rows and columns with custom heights and widths
* Hidden rows and columns
* Grouping and outlining
* Headers and footers
* Page setup (orientation, margins, paper size)

### Features
* Conditional formatting (color scales, data bars, icon sets, cell rules)
* Data validation (list, whole number, decimal, date, time, text length)
* Filtering and sorting
* Pivot tables
* Tables with custom styles
* Defined names and scoped names

### Objects
* Charts (column, bar, line, pie, area, scatter, doughnut)
* Images with positioning and sizing
* Shapes and drawing objects
* Hyperlinks (internal and external)
* Comments and threaded comments
* Notes

### Protection
* Workbook protection with password
* Worksheet protection with granular permissions
* Cell-level protection
* Scenario protection
* Structure and window protection

## Considerations

1. **Format Limitation**: Client-side export currently supports XLSX format with PDF support coming soon
2. **Size Limitations**: Large workbooks may impact browser performance
3. **Feature Differences**: Some advanced features available in server-side export may not be available in client-side export
4. **No saveUrl Required**: `saveUrl` must not be configured for client-side export
5. **Browser Compatibility**: Modern browsers with JavaScript enabled are required

## See also

* [Server-Side Export](./server-side-export)
* [Export to AWS S3](./to-aws-s3-bucket)
* [Export to Azure Blob Storage](./to-azure-blob-storage)
* [Export to Google Cloud Storage](./to-google-cloud-storage)
* [Export to Google Drive](./to-google-drive)