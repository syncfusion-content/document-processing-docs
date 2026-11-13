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

To use client-side import, simply omit the `openUrl` property from your Spreadsheet configuration. When `openUrl` is not configured, the Spreadsheet automatically uses client-side processing for all file operations.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    return (
        <SpreadsheetComponent 
            allowOpen={true}
            // Note: openUrl is omitted for client-side import
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
            allowOpen={true}
            // Note: openUrl is omitted for client-side import
        />
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-local-cs1" %}

With this configuration, the Spreadsheet will process all Excel files directly in the browser without requiring server communication. For specific file-source implementations (local system, URL, or Blob data), see the sections below.

## Supported file sources

### Open a file from the local system

You can open Excel files from the local system using the standard File > Open interface or programmatically:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/client-side-local-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/client-side-local-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-local-cs1" %}

### Open a file from a URL

To open Excel files from a URL, fetch the file and convert the response to a File object:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/client-side-url-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/client-side-url-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-url-cs1" %}

Cross-origin resource sharing (CORS) restrictions may prevent opening files from some URLs. Ensure CORS policies are properly configured on the target server.

### Open a file from Blob data

To open Excel files from Blob data, convert the Blob to a File object:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/client-side-blob-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/client-side-blob-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/client-side-blob-cs1" %}

In all cases, the workflow ends by passing a `File` object to the public Spreadsheet API:
`spreadsheetRef.current?.open({ file });`

## Feature support

Client-side import supports comprehensive Excel workbook features:

### Worksheets
* Worksheet names and visibility
* Tab color and positioning
* Frozen panes and gridlines
* Print titles and print areas

### Cell Data
* Text, numbers, dates, and Boolean values
* Formulas with operators (+, -, *, /, =, <, >, <=, >=, <>, &, :)
* Cell references (A1, $A$1, A$1, $A1)
* Range references (A1:B2, Sheet1!A1:B2)
* Cross-worksheet references (Sheet2!A1)

### Formatting
* Font family, size, style, weight, color, and effects
* Fill color, pattern, and gradient
* Borders (style, weight, color)
* Alignment (horizontal, vertical, text direction, indent, shrink to fit, text wrap)
* Number formatting (currency, accounting, percentage, scientific, fraction, date/time)
* Cell protection and locked states

### Formulas and References
* Arithmetic operators (+, -, *, /, =, <, >, <=, >=, <>, &, :)
* Comparison operators (=, <, >, <=, >=, <>)
* Text concatenation (&)
* Cell references (A1, $A$1, A$1, $A1)
* Range references (A1:B2, Sheet1!A1:B2)
* Cross-worksheet references (Sheet2!A1)
* Named ranges (local and global)
* Formula calculation engine (R1C1-style formulas converted to A1-style)

### Structures
* Tables with headers, totals, and styles
* Pivot tables with fields, filters, and layouts
* Charts (column, bar, line, pie, area, scatter, combo, radar, surface, bubble, stock)
* Images (positioning, sizing, aspect ratio)
* Comments and notes (positioning, sizing, rich text)
* Data validation (list, whole number, decimal, date, time, text length, custom)
* Conditional formatting (color scales, data bars, icon sets, formula-based rules)
* Filters (autofilter, custom filter, advanced filter)
* Protection (workbook, worksheet, range, sheet elements)
* Grouping and outlining (row/column grouping, summary rows/columns)

### Objects
* Shapes (rectangles, circles, lines, arrows, callouts)
* Text boxes (positioning, sizing, rotation, text formatting)
* Hyperlinks (internal, external, email, file)
* Headers and footers (left, center, right sections with images/text)

### Protection
* Workbook protection (structure, windows)
* Worksheet protection (elements, scenarios)
* Range protection (locked/unlocked cells)
* Sheet element protection (objects, scenarios)

## Considerations

1. **Format Limitation**: Client-side import currently supports XLSX format only
2. **Size Limitations**: Large files may impact browser performance
3. **Feature Differences**: Some advanced features available in server-side import may not be available in client-side import
4. **No openUrl Required**: `openUrl` must not be configured for client-side import

## See also

* [Server-Side Import](./server-side-import)