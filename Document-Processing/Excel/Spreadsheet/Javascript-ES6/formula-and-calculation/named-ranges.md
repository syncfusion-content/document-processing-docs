---
layout: post
title: Named Ranges in JavaScript ES6 Spreadsheet | Syncfusion
description: Learn about named ranges in the Syncfusion JavaScript ES6 Spreadsheet component for referencing cells and ranges efficiently.
control: Formulas 
platform: document-processing
documentation: ug
---

# Named Ranges in JavaScript ES6 Spreadsheet

You can assign a meaningful name to a cell range and then use that name in formulas for calculation. This makes formulas easier to read, understand, and maintain. Named ranges can be added to the Spreadsheet in several ways:

* Use the [`definedNames`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#definednames) collection to add multiple named ranges during the initial load.  
* Use the [`addDefinedName`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#adddefinedname) method to add a named range dynamically at runtime.  
* Remove a named range dynamically using the [`removeDefinedName`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#removedefinedname) method.  
* Select a range of cells and enter a name for the selected range directly in the **Name Box**.  

The following code example demonstrates how named ranges can be defined and used in formulas within the Spreadsheet.

```javascript
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { data } from './datasource.js';

// Initialize Spreadsheet with named ranges
let spreadsheet = new Spreadsheet({
    sheets: [{
        ranges: [{ dataSource: data }],
        columns: [
            { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 },
            { width: 100 }, { width: 100 }
        ]
    }],
    definedNames: [
        { name: 'SalesData', refersTo: 'Sheet1!A1:D10' },
        { name: 'Q1Sales', refersTo: 'Sheet1!B2:B4' },
        { name: 'Q2Sales', refersTo: 'Sheet1!C2:C4' }
    ]
});

spreadsheet.appendTo('#spreadsheet');

// Add a named range dynamically
document.getElementById('addName').addEventListener('click', () => {
    spreadsheet.addDefinedName({ name: 'TotalSales', refersTo: 'Sheet1!D1:D10' });
});

// Remove a named range dynamically
document.getElementById('removeName').addEventListener('click', () => {
    spreadsheet.removeDefinedName('TotalSales', 0);
});
```
