---
layout: post
title: Duplicate Worksheet in React Spreadsheet component | Syncfusion
description: Learn here all about how to duplicate a worksheet in React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Worksheet 
platform: document-processing
documentation: ug
---

# Duplicate Worksheet in React Spreadsheet

The Spreadsheet component allows you to create a copy of an existing worksheet, including its data, formatting, and configurations. Duplicating a sheet is useful when you want to reuse the same structure or data without manually recreating it.

While duplicating the worksheet, a new worksheet is created as an exact copy of the selected sheet and is placed next to it. The duplicated sheet will automatically be assigned a unique name to avoid conflicts with existing sheet names.

You can duplicate a worksheet in the following way,

* Right-click on the sheet tab, and then select the `Duplicate` option from the context menu.

* Duplicate a sheet programmatically using the [duplicateSheet](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#duplicatesheet) method; it copies the specified worksheet (including data, formatting and settings) and places the copy next to the original so you can reuse or edit it without affecting the source.

![Duplicate sheet](../images/spreadsheet-duplicate.png)
