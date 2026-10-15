---
layout: post
title: Clear Cell Contents or Formats in JavaScript ES6 Spreadsheet | Syncfusion
description: Learn about clearing cell contents or formats in the Syncfusion JavaScript ES6 Spreadsheet component to reset data and formatting.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Clear Cell Contents or Formats in JavaScript ES6 Spreadsheet

The **Clear** feature enables you to remove cell contents (formulas and data), formats (including number formats, conditional formats, and borders), and hyperlinks from a spreadsheet. When you use the **Clear All** option, both the contents and formats are removed simultaneously.

## Applying the Clear feature

You can clear cell contents or formats using the following approaches:

- **Ribbon Toolbar:** Select the clear icon under the `Home` tab to access clear options.
- **Programmatically:** Use the [`clear`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#clear) method.

The available clear options are:

| Option             | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `Clear All`        | Clears all contents, formats, and hyperlinks.                               |
| `Clear Formats`    | Clears only the formats (including number formats, conditional formats, and borders) in a cell. |
| `Clear Contents`   | Clears only the contents (formulas and data) in a cell.                     |
| `Clear Hyperlinks` | Clears only the hyperlinks in a cell.                                       |

The following code example demonstrates how to clear cell contents and formats in a button click event.

```javascript
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.js';

// Initialize Spreadsheet
let spreadsheet = new Spreadsheet({
    sheets: [{
        ranges: [{ dataSource: data }],
        columns: [
            { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 },
            { width: 100 }, { width: 100 }
        ]
    }]
});

spreadsheet.appendTo('#spreadsheet');

// Clear All
document.getElementById('clearAll').addEventListener('click', () => {
    spreadsheet.clear({ type: 'All', range: spreadsheet.getActiveSheet().selectedRange });
});

// Clear Contents
document.getElementById('clearContents').addEventListener('click', () => {
    spreadsheet.clear({ type: 'Contents', range: spreadsheet.getActiveSheet().selectedRange });
});

// Clear Formats
document.getElementById('clearFormats').addEventListener('click', () => {
    spreadsheet.clear({ type: 'Formats', range: spreadsheet.getActiveSheet().selectedRange });
});
```
