---
layout: post
title: Context menu in React Spreadsheet component | Syncfusion
description: Learn here all about Context menu in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Context menu 
platform: document-processing
documentation: ug
---

# Context menu in React Spreadsheet component

The Context menu is used to improve user interaction with the Spreadsheet through a popup menu. It opens when right-clicking on a cell, column header, row header, or pager in the Spreadsheet. You can use the [`enableContextMenu`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#enablecontextmenu) property to enable or disable the context menu.

> The default value for the `enableContextMenu` property is `true`.

## Context Menu Items in Row Cell

The following table lists the default context menu items and their actions.

| Context Menu items | Action |
|-------|---------|
| [`Cut`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#cut) | Cuts the data from the selected cells to the clipboard. Select a target cell to move the data. |
| [`Copy`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#copy) | Copies the data from the selected cells to the clipboard so it can be pasted elsewhere. |
| [`Paste`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#paste) | Pastes the clipboard contents into the spreadsheet. |
| [`Paste Special`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#paste) | `Values` - Pastes only the data values from the clipboard. `Formats` - Pastes only the data formats from the clipboard. |
| [`Filter`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#filter) | Filters the selected cells based on the value of the active cell. |
| [`Sort`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#sort) | Sorts the selected range of cells in ascending or descending order. |
| [`Hyperlink`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#hyperlink) | Creates a link in the spreadsheet that navigates to a web URL or to a cell reference within the same or another sheet. |

## Context Menu Items in Row Header / Column Header

The context menu in row and column headers provides quick access to common actions for managing spreadsheet data.
Refer to the table below for the default context menu items and their actions.

| Context Menu items | Action |
|-------|---------|
| [`Cut`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#cut) | Cuts the data from the selected row or column header to the clipboard. Select a target cell to move the data. |
| [`Copy`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#copy) | Copies the data from the selected row or column header to the clipboard so it can be pasted elsewhere. |
| [`Paste`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#paste) | Pastes the clipboard contents into the spreadsheet. |
| [`Paste Special`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#paste) | `Values` - Pastes only the data values from the clipboard. `Formats` - Pastes only the data formats from the clipboard. |
| [`Insert Rows`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#insertrow) / [`Insert Columns`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#insertcolumn) | Inserts new rows or columns into the worksheet. |
| [`Delete Rows`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#delete) / [`Delete Columns`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#delete) | Deletes the selected rows or columns from the worksheet. |
| [`Hide Rows`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#hiderow) / [`Hide Columns`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#hidecolumn) | Hides the selected rows or columns. |
| [`UnHide Rows`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#hiderow) / [`UnHide Columns`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#hidecolumn) | Shows the hidden rows or columns. |

## Context Menu Items in Pager

The context menu in the pager provides quick access to actions for managing worksheet navigation and related options. The following table lists the default items and their actions.

| Context Menu items | Action |
|-------|---------|
| `Insert` | Insert a new worksheet in front of an existing worksheet in the spreadsheet. |
| `Delete` | Delete the selected worksheet from the spreadsheet. |
| `Rename` | Rename the selected worksheet. |
| [`Protect Sheet`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#protectsheet) | Prevent unwanted changes from others by limiting their ability to edit. |
| [`Hide`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#hide) |Hide the selected worksheet. |

## Note

You can refer to our [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Customize context menu](./user-interface-customization/customize-context-menu)
* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns/overview)
