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

{% highlight js tabtitle="app.jsx" %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    return (
        <SpreadsheetComponent allowOpen={true} />
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
        <SpreadsheetComponent allowOpen={true} />
    );
};

export default App;

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
{% endhighlight %}

With this configuration, all standard Spreadsheet open functionality works through client-side processing.

## Supported file sources

### Open a file from the local system

You can open Excel files from the local system using the standard File > Open interface or programmatically:

{% highlight js tabtitle="app.jsx" %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, Uploader } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    let spreadsheet;
    
    const onCreated = () => {
        spreadsheet = spreadsheet;
    };
    
    const onSuccess = (args) => {
        // Upload complete, open the file in spreadsheet
        spreadsheet.open({ file: args.file });
    };
    
    return (
        <div>
            {/* File uploader for local file selection */}
            <Uploader 
                autoUpload={false} 
                success={onSuccess} 
                allowedExtensions='.xlsx' />
            
            {/* Spreadsheet component with client-side import enabled */}
            <SpreadsheetComponent 
                ref={(scope) => { spreadsheet = scope; }}
                allowOpen={true}
                created={onCreated} />
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
import { SpreadsheetComponent, Uploader } from '@syncfusion/ej2-react-spreadsheet';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
    private spreadsheet: SpreadsheetComponent | null = null;

    onCreated = (): void => {
        // Spreadsheet created event handler
    };
    
    onSuccess = (args: any): void => {
        // Upload complete, open the file in spreadsheet
        if (this.spreadsheet) {
            this.spreadsheet.open({ file: args.file });
        }
    };

    render() {
        return (
            <div>
                {/* File uploader for local file selection */}
                <UploaderComponent 
                    autoUpload={false} 
                    success={this.onSuccess} 
                    allowedExtensions='.xlsx' />
                
                {/* Spreadsheet component with client-side import enabled */}
                <SpreadsheetComponent 
                    ref={(scope) => { this.spreadsheet = scope; }}
                    allowOpen={true}
                    created={this.onCreated} />
            </div>
        );
    }
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
{% endhighlight %}

### Open a file from a URL

To open Excel files from a URL, fetch the file and convert the response to a File object:

{% highlight js tabtitle="app.jsx" %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    let spreadsheet;
    
    const onCreated = () => {
        // Fetch Excel file from URL and open in spreadsheet
        fetch('https://cdn.syncfusion.com/downloads/spreadsheet/Sample.xlsx')
            .then((response) => response.blob())
            .then((fileBlob) => {
                const file = new File([fileBlob], 'Sample.xlsx');
                spreadsheet.open({ file });
            })
            .catch((error) => {
                console.error('Error loading file from URL:', error);
            });
    };
    
    return (
        <SpreadsheetComponent 
            ref={(scope) => { spreadsheet = scope; }}
            allowOpen={true}
            created={onCreated} />
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

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
    private spreadsheet: SpreadsheetComponent | null = null;

    onCreated = (): void => {
        // Fetch Excel file from URL and open in spreadsheet
        fetch('https://cdn.syncfusion.com/downloads/spreadsheet/Sample.xlsx')
            .then((response) => response.blob())
            .then((fileBlob) => {
                const file = new File([fileBlob], 'Sample.xlsx');
                if (this.spreadsheet) {
                    this.spreadsheet.open({ file });
                }
            })
            .catch((error) => {
                console.error('Error loading file from URL:', error);
            });
    };

    render() {
        return (
            <SpreadsheetComponent 
                ref={(scope) => { this.spreadsheet = scope; }}
                allowOpen={true}
                created={this.onCreated} />
        );
    }
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
{% endhighlight %}

> When fetching files from a different domain, ensure the server allows cross-origin requests (CORS).

### Open a file from Blob data

To open Excel files from Blob data, convert the Blob to a File object:

{% highlight js tabtitle="app.jsx" %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    let spreadsheet;
    
    const handleBlobData = () => {
        // Example: Creating a Blob from string data (in real scenario, this could be from an API response)
        const excelData = 'UEsDBAoAAAAAALJdHFYAAAAA...'; // Base64 encoded Excel data
        const byteCharacters = atob(excelData);
        const byteNumbers = new Array(byteCharacters.length);
        
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const file = new File([blob], 'Sample.xlsx');
        
        // Open the Blob data as a file in the spreadsheet
        spreadsheet.open({ file });
    };
    
    return (
        <div>
            <button onClick={handleBlobData}>Load Excel from Blob Data</button>
            <SpreadsheetComponent 
                ref={(scope) => { spreadsheet = scope; }}
                allowOpen={true} />
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

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
    private spreadsheet: SpreadsheetComponent | null = null;

    handleBlobData = (): void => {
        // Example: Creating a Blob from string data (in real scenario, this could be from an API response)
        const excelData = 'UEsDBAoAAAAAALJdHFYAAAAA...'; // Base64 encoded Excel data
        const byteCharacters = atob(excelData);
        const byteNumbers = new Array(byteCharacters.length);
        
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const file = new File([blob], 'Sample.xlsx');
        
        // Open the Blob data as a file in the spreadsheet
        if (this.spreadsheet) {
            this.spreadsheet.open({ file });
        }
    };

    render() {
        return (
            <div>
                <button onClick={this.handleBlobData}>Load Excel from Blob Data</button>
                <SpreadsheetComponent 
                    ref={(scope) => { this.spreadsheet = scope; }}
                    allowOpen={true} />
            </div>
        );
    }
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
{% endhighlight %}

In all cases, the workflow ends by passing a `File` object to the public Spreadsheet API:
`spreadsheetRef.current?.open({ file });`

## Feature support

Client-side import provides comprehensive support for Excel workbook features:

### Worksheets
* Multiple worksheet support
* Worksheet renaming and manipulation
* Hidden worksheets
* Tab color customization

### Cell Data and Formatting
* Text, numbers, dates, and Boolean values
* Rich text formatting
* Font customization (size, style, color)
* Cell background and border styling
* Number formatting
* Alignment options

### Formulas and References
* Basic arithmetic formulas
* Built-in Excel functions
* Cell and range references
* Cross-worksheet references

### Structures and Features
* Merged cells
* Cell comments
* Hyperlinks
* Data validation rules
* Conditional formatting
* Filters and sorting

### Objects
* Charts (basic chart types)
* Images and pictures
* Shapes and drawing objects

### Protection
* Worksheet protection
* Cell locking and hiding
* Password protection for sheets

## Considerations

1. **Format Limitation**: Client-side import currently supports XLSX format only
2. **Size Limitations**: Large files may impact browser performance
3. **Feature Differences**: Some advanced features available in server-side import may not be available in client-side import
4. **No openUrl Required**: `openUrl` must not be configured for client-side import

## See also

* [Server-Side Import](./server-side-import)
* [Import from AWS S3](./from-aws-s3-bucket)
* [Import from Azure Blob Storage](./from-azure-blob-storage)