---
layout: post
title: Formulas in React Spreadsheet component | Syncfusion
description: Learn here all about Formulas in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Formulas 
platform: document-processing
documentation: ug
---

# Formulas in React Spreadsheet Component

The [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) component supports formulas, allowing you to perform calculations on worksheet data. Formulas can reference cells from the same sheet or from different sheets, enabling dynamic and flexible data analysis.

- **[Formula Property](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cell#formula)**: Set a formula or expression for a cell at initial load using the `formula` property.
- **Data Binding**: Assign formulas or expressions to cells through data binding.
- **[Editing](./editing)**: Enter or modify a formula directly in a cell using the cell editing.
- **[updateCell Method](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#updatecell)**: Programmatically set or update the formula of a cell using the `updateCell` method.

## Formula Behavior

Formulas in the Spreadsheet component are automatically recalculated whenever referenced cell values change. This ensures that your calculations and results always stay up to date as you edit your data. You can use built-in formulas, create custom formulas, and handle formula errors for robust data processing.

## Formula Features Overview

The React Spreadsheet Editor component provides a variety of features for working with formulas and calculations. Below is a quick overview of each feature, with links to their respective documentation sections:

- **[Built-in Formulas](./formula-and-calculation/built-in-formulas)**: Use a wide range of standard formulas for common calculations.
- **[Custom Formula Creation](./formula-and-calculation/create-custom-formulas)**: Define your own formulas to meet specific calculation needs.
- **[Named Ranges](./formula-and-calculation/named-ranges)**: Assign names to cell ranges for easier reference in formulas.
- **[Formula Bar](./formula-and-calculation/formula-bar)**: Enter and edit formulas using the formula bar interface.
- **[Formula Error Handling](./formula-and-calculation/formula-error-handling)**: Manage and troubleshoot errors that occur in formulas.
- **[Calculation Modes](./formula-and-calculation/calculation-mode)**: Control when and how formulas are recalculated in the worksheet.
- **[Culture-Specific Formula Separators](./formula-and-calculation/culture-specific-formula-separators)**: Use separators that match your locale for formulas.

## Note

You can refer to our [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Editing](./cell-ranges-and-operations/editing)
* [Formatting](./formatting)
* [Open](./open-save#open)
* [Save](./open-save#save)