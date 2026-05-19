---
layout: post
title: How to Trigger Formula Calculations in Manual Mode in Spreadsheet | Syncfusion
description: Learn how to trigger formula calculations when the Syncfusion Spreadsheet React component is rendered in manual calculation mode.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# How do I trigger formula calculations when spreadsheet is rendered in manual mode?

This FAQ explains how to manually trigger formula calculations when the Syncfusion Spreadsheet React component is set to manual calculation mode. This ensures formulas are recalculated as needed for accurate results.

## Steps to trigger formula calculations in manual mode

1. Set the Spreadsheet component's calculation mode to 'Manual' using the [`calculationMode`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#calculationmode) property.

2. To trigger formula calculations programmatically, use the [`calculateNow()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#calculatenow) method provided by the Spreadsheet instance. This method allows you to:
	- Recalculate all formulas in the spreadsheet.
	- Trigger calculations for a specific sheet by passing `'Sheet'` as the scope and the sheet name or index.
	- Trigger calculations across the entire workbook by passing `'Workbook'` as the scope.


```js
// Set calculation mode to manual
<SpreadsheetComponent calculationMode='Manual' ref={spreadsheetRef} />

// Trigger formula calculation for a specific sheet by name
spreadsheetRef.current?.calculateNow('Sheet', 'Sheet1');

// Trigger formula calculation for a specific sheet by index
spreadsheetRef.current?.calculateNow('Sheet', 0); // 0-based index

// Trigger formula calculation for the entire workbook
spreadsheetRef.current?.calculateNow('Workbook');
```

Call the `calculateNow()` method after making changes to cell values or formulas to ensure results are up to date. Specify the appropriate scope and sheet name or index as needed.

For more information, refer to the [formula calculation](../formulas#calculation-mode) section of the documentation.
