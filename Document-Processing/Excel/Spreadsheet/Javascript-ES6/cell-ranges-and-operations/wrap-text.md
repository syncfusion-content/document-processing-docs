---
layout: post
title: Wrap Text in JavaScript ES6 Spreadsheet | Syncfusion
description: Learn about text wrapping in the Syncfusion JavaScript ES6 Spreadsheet component to display lengthy content within cells.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Wrap text in JavaScript ES6 Spreadsheet

Wrap text allows you to display large content as multiple lines in a single cell. By default, wrap text support is enabled in the Spreadsheet. Use the [`allowWrap`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#allowwrap) property to enable or disable wrap text support.

You can apply or remove wrap text to a cell or range of cells in any of the following ways:

* Using the `wrap` property in a `cell`, you can enable or disable wrap text to a cell at initial load.
* Select or deselect the **Wrap Text** button from the ribbon **Home** tab to apply or remove wrap text for the selected range.
* Using the [`wrap`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#wrap) method, you can apply or remove the wrap text once the component is loaded.

The following code example shows the wrap text functionality in the Spreadsheet.

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
        ],
        cells: [
            { index: 0, wrap: true }  // Enable wrap text for first row
        ]
    }],
    allowWrap: true
});

spreadsheet.appendTo('#spreadsheet');

// Apply wrap text to selected range
document.getElementById('wrap').addEventListener('click', () => {
    spreadsheet.wrap('A1:D10');
});

// Remove wrap text from selected range
document.getElementById('unwrap').addEventListener('click', () => {
    spreadsheet.wrap('A1:D10', false);
});
```

## Limitations

The following features have some limitations when using wrap text:

- Sorting with wrap text applied data.
- Merge with wrap text
