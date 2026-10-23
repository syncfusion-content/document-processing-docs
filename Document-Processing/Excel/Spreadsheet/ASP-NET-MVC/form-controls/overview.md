---
layout: post
title: Form Controls in ASP.NET MVC Spreadsheet | Syncfusion
description: Learn about form controls feature in the Syncfusion ASP.NET MVC Spreadsheet component, including checkboxes, radio buttons, and dropdown lists.
control: Form Controls
platform: document-processing
documentation: ug
---

# Form Controls in ASP.NET MVC Spreadsheet

The Spreadsheet component provides built-in form controls that allow users to add interactive controls within a worksheet. Form controls are worksheet-level objects and are associated with individual worksheets rather than the workbook.

## Supported Form Controls

The Spreadsheet supports the following form controls:

- **[Check Box](./check-box)**: Allows toggling between checked and unchecked states.
- **[Radio Button](./radio-button)**: Allows selecting a single option from a group of choices.
- **[Combo Box (Dropdown)](./combo-box)**: Allows selecting from a predefined list of values.

## Inserting Form Controls

Form controls can be inserted through the ribbon menu:

**Ribbon → Insert → Form Controls**

Select the required control type (Check Box, Radio Button, or Combo Box (Dropdown)) and click on the desired cell location to place the control.

## General Form Control Operations

All form controls support the following operations:

- **Drag and Move**: Form controls can be moved to different locations within the worksheet.
- **Resize**: Form controls can be resized after insertion.
- **Undo/Redo**: Undo and Redo operations are supported for resize and deletion.
- **Delete**: Form controls can be deleted from the worksheet.
- **Cut, Copy, Paste**: Cut, Copy, and Paste operations are supported for all form control types.

## Worksheet-Based Behavior

Form controls are worksheet-specific. A form control created in one worksheet exists only in that worksheet and does not appear in other worksheets within the workbook.

## Supported Features

- Worksheet-based form controls
- Check Box with mixed state
- Radio Button selection
- Combo Box (Dropdown) with input ranges
- Cell Link integration
