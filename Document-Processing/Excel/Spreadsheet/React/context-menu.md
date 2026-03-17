---
layout: post
title: Context menu in React Spreadsheet component | Syncfusion
description: Learn here all about Context menu in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Context menu 
platform: document-processing
documentation: ug
---

# Context menu in React Spreadsheet component

Context Menu is used to improve user interaction with Spreadsheet using the popup menu. This will open when right-clicking on Cell/Column Header/Row Header/ Pager in the Spreadsheet. You can use [`enableContextMenu`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#enablecontextmenu) property to enable/disable context menu.

> The default value for the `enableContextMenu` property is `true`.

## Context Menu Items in Row Cell

Please find the table below for default context menu items and their actions.

| Context Menu items | Action |
|-------|---------|
| [`Cut`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#cut) | Cut the selected cells data to the clipboard, you can select a cell where you want to move the data. |
| [`Copy`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#copy) | Copy the selected cells data to the clipboard, so that you can paste it to somewhere else. |
| [`Paste`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#paste) | Paste the data from clipboard to spreadsheet. |
| [`Paste Special`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#paste) | `Values` - Paste the data values from clipboard to spreadsheet.  `Formats` - Paste the data formats from  <br/> clipboard to spreadsheet. |
| [`Filter`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#filter) | Perform filtering to the selected cells based on an active cell’s value. |
| [`Sort`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#sort) | Perform sorting to the selected range of cells by ascending or descending. |
| [`Hyperlink`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#hyperlink) | Create a link in the spreadsheet to navigate to web links or cell reference within the sheet or other sheets  <br/> in the Spreadsheet. |

## Context Menu Items in Row Header / Column Header

Please find the table below for default context menu items and their actions.

| Context Menu items | Action |
|-------|---------|
| [`Cut`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#cut) | Cut the selected row/column header data to the clipboard, you can select a cell where you want to move the data. |
| [`Copy`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#copy) | Copy the selected row/column header data to the clipboard, so that you can paste it to somewhere else. |
| [`Paste`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#paste) | Paste the data from clipboard to spreadsheet. |
| [`Paste Special`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#paste) | `Values` - Paste the data values from clipboard to spreadsheet. `Formats` - Paste the data formats from  <br/> clipboard to spreadsheet. |
| [`Insert Rows`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#insertrow) / [`Insert Columns`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#insertcolumn) | Insert new rows or columns into the worksheet. |
| [`Delete Rows`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#delete) / [`Delete Columns`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#delete) | Delete existing rows or columns from the worksheet. |
| [`Hide Rows`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#hiderow) / [`Hide Columns`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#hidecolumn) | Hide the rows or columns. |
| [`UnHide Rows`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#hiderow) / [`UnHide Columns`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#hidecolumn) | Show the hidden rows or columns. |

## Context Menu Items in Pager

Please find the table below for default context menu items and their actions.

| Context Menu items | Action |
|-------|---------|
| `Insert` | Insert a new worksheet in front of an existing worksheet in the spreadsheet. |
| `Delete` | Delete the selected worksheet from the spreadsheet. |
| `Rename` | Rename the selected worksheet. |
| [`Protect Sheet`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#protectsheet) | Prevent unwanted changes from others by limiting their ability to edit. |
| [`Hide`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#hide) |Hide the selected worksheet. |

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Customize context menu](./user-interface-customization/customize-context-menu)
* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns)