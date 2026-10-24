---
layout: post
title: Formulas and Calculations in JavaScript Spreadsheet | Syncfusion
description: Learn about formulas and calculations in the Syncfusion JavaScript Spreadsheet component, including built-in functions and custom formulas.
control: Formulas 
platform: document-processing
documentation: ug
---

# Formulas in JavaScript Spreadsheet

The JavaScript Spreadsheet component supports formulas, allowing you to perform calculations on worksheet data. Formulas can reference cells from the same sheet or from different sheets, enabling dynamic and flexible data analysis.

## Setting Formulas

- **[Formula Property](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/cell#formula)**: Set a formula or expression for a cell at initial load using the `formula` property.
- **Data Binding**: Assign formulas or expressions to cells through data binding.
- **Editing**: Enter or modify a formula directly in a cell using the cell editing.
- **[updateCell Method](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#updatecell)**: Programmatically set or update the formula of a cell using the `updateCell` method.

## Formula Behavior

Formulas in the Spreadsheet component are automatically recalculated whenever referenced cell values change. This ensures that your calculations and results always stay up to date as you edit your data. You can use built-in formulas, create custom formulas, and handle formula errors for robust data processing.

## Formula Features Overview

The JavaScript Spreadsheet component provides a variety of features for working with formulas and calculations. Below is a quick overview of each feature, with links to their respective documentation sections:

- **[Built-in Formulas](#built-in-formulas)**: Use a wide range of standard formulas for common calculations.
- **[Custom Formula Creation](#custom-formula-creation)**: Define your own formulas to meet specific calculation needs.
- **[Named Ranges](#named-ranges)**: Assign names to cell ranges for easier reference in formulas.
- **[Formula Bar](#formula-bar)**: Enter and edit formulas using the formula bar interface.
- **[Formula Error Handling](#formula-error-handling)**: Manage and troubleshoot errors that occur in formulas.
- **[Calculation Modes](#calculation-modes)**: Control when and how formulas are recalculated in the worksheet.
- **[Culture-Specific Formula Separators](#culture-specific-formula-separators)**: Use separators that match your locale for formulas.

## Built-in Formulas

The Spreadsheet includes a wide range of built-in formulas for mathematical, statistical, financial, date/time, text, and logical operations. For a complete list of supported formulas, refer to the [Supported Formulas documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es5/formulas#supported-formulas).

## Custom Formula Creation

You can define and use custom formulas (user-defined functions) in the spreadsheet using the [addCustomFunction](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#addcustomfunction) function.

## Named Ranges

Named ranges allow you to assign meaningful names to cell ranges, making formulas easier to read and maintain. Instead of using cell references like `A1:B10`, you can use a descriptive name like `SalesData`.

## Formula Bar

The formula bar displays the formula or value of the currently selected cell. You can use it to enter or edit formulas directly.

## Formula Error Handling

The Spreadsheet provides error handling for common formula errors such as `#DIV/0!`, `#REF!`, `#NAME?`, and `#VALUE!`.

## Calculation Modes

You can control when formulas are calculated using different calculation modes:

- **Automatic**: Formulas recalculate automatically when referenced cells change (default).
- **Manual**: Formulas only recalculate when explicitly requested.
- **Automatic except for data tables**: Formulas recalculate automatically except for data tables.

## Culture-Specific Formula Separators

The Spreadsheet supports culture-based argument separators for formulas. This allows you to use separators that match your locale when entering formulas.

## Note

You can refer to our [JavaScript Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) feature tour page for its feature representations.

## See Also

* [Editing](../cell-ranges-and-operations/editing)
* [Formatting](../formatting)
* [Open](../open-save#open)
* [Save](../open-save#save)
