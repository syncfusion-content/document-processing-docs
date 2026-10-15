---
layout: post
title: Custom Function Creation in JavaScript ES6 Spreadsheet | Syncfusion
description: Learn about creating custom functions in the Syncfusion JavaScript ES6 Spreadsheet component to extend formula capabilities.
control: Formulas 
platform: document-processing
documentation: ug
---

# Custom Function Creation in JavaScript ES6 Spreadsheet

The Spreadsheet includes a set of built-in formulas. For convenience, you can find the list of supported formulas [here](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/formulas#supported-formulas).

You can also define and use formulas that are not supported by default, known as **user defined/custom formulas**, by using the [addCustomFunction](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#addcustomfunction) function. Keep in mind that a user defined/custom formula should return only a single value. If the formula returns an array, updating adjacent cell values will take more time and may affect performance.

The following code example shows how to use an unsupported formula in the Spreadsheet.

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

// Add custom function
spreadsheet.addCustomFunction((args) => {
    // Custom function implementation
    return args[0] * 2 + args[1];
}, 'CUSTOMFUNC');
```

To directly compute a formula or expression, use the [computeExpression](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#computeexpression) method. This method will work for both built-in and used-defined/custom formula.

The following code example shows how to use `computeExpression` method in the spreadsheet.

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

// Compute expression directly
document.getElementById('compute').addEventListener('click', () => {
    let result = spreadsheet.computeExpression('=SUM(A1:A10)');
    console.log('Result:', result);
});
```
