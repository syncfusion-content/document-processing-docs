---
layout: post
title: How to Trigger Formula Calculations in Manual Mode in Spreadsheet | Syncfusion
description: Learn how to trigger formula calculations when the Syncfusion Spreadsheet React component is rendered in manual calculation mode.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Triggering Formula Calculations in Manual Calculation Mode

Manually trigger formula calculations in the Syncfusion Spreadsheet React component when it is set to manual calculation mode. This approach ensures formulas are recalculated as needed for accurate results, and you have full control over when calculations occur.

## Steps to Trigger Formula Calculations in Manual Mode

1. Configure the Spreadsheet component to use manual calculation mode by setting the [`calculationMode`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#calculationmode) property to `'Manual'`.

2. Trigger formula calculations as needed using either of the following approaches:
	- **Via the UI:** Use the **Calculate Sheet** and **Calculate Workbook** options under the **Formulas** tab in the Ribbon to manually recalculate formulas for the active sheet or the entire workbook.
	- **Programmatically:** Call the [`calculateNow()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#calculatenow) method on the Spreadsheet instance. This method allows you to:
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

Call the `calculateNow()` method after making changes to cell values or formulas to ensure results are up to date. Specify the appropriate scope and sheet name or index as needed. This gives you flexibility to trigger calculations whenever required, not just when using manual mode.

For more information, refer to the [formula calculation](../formulas#calculation-mode) section of the documentation.
