---
layout: post
title: Form Controls in React Spreadsheet | Syncfusion
description: Learn about form controls feature in the Syncfusion React Spreadsheet component, including checkboxes, radio buttons, and dropdown lists.
control: Form Controls
platform: document-processing
documentation: ug
---

# Form Controls in React Spreadsheet

The [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) component includes built-in form controls that enable users to add interactive controls directly into a worksheet for data entry and selection scenarios. Form controls are worksheet-level objects and are associated with individual worksheets rather than the workbook.

## Supported Form Controls

The Spreadsheet currently supports the following form controls:

- **[Check Box](./check-box)**: Allows users to toggle a binary choice (checked/unchecked) within a cell.
- **[Radio Button](./radio-button)**: Provides a single-selection option from a group of mutually exclusive choices.
- **[Drop Down](./drop-down)**: Presents a list of predefined values that users can select from, useful for standardizing entries and reducing typos.

## Inserting Form Controls

Users can insert form controls through the ribbon menu:

**Ribbon → Insert → Form Controls**

The Form Controls dropdown provides options to select:
- Check Box
- Radio Button
- Drop Down

Users should select the required control type to place it in the worksheet. Once selected, users can click on the desired cell location to insert the form control.

## General Form Control Operations

All form controls support the following common operations:

### Movement and Resizing
- **Drag and Move**: Form controls can be dragged and moved to different locations within the worksheet after creation.
- **Resizing**: Form controls can be resized after insertion.
- **Undo/Redo Support**: Undo and Redo support is available for resize operations.

### Deletion
- **Delete**: Form controls can be deleted from the worksheet.
- **Undo/Redo Support**: Undo and Redo support is available for delete operations.

### Clipboard Operations
- **Cut, Copy, and Paste**: Cut, Copy, and Paste operations are supported for all form control types (Check Box, Radio Button, and Drop Down).

## Worksheet-Based Behavior

Form controls are worksheet-specific. A form control created in one worksheet belongs only to that worksheet and does not automatically apply to other worksheets within the workbook. This allows for worksheet-level customization and independent form control configurations across multiple sheets.

## Key Features

- **Interactive Data Entry**: Form controls provide an intuitive way for users to input data with predefined options.
- **Data Consistency**: Predefined options ensure that entries follow expected formats and values.
- **Error Reduction**: By providing selection options, form controls minimize manual entry errors.
- **Cell Link Integration**: Form controls can be linked to cells to store and synchronize their state values.
- **Import/Export Support**: Form control configurations are fully preserved during spreadsheet import and export operations.
- **RTL Support**: Form controls provide full Right-to-Left (RTL) support for proper rendering and interaction in RTL layouts.
- **Accessibility**: Form controls are accessible and support keyboard navigation for seamless interaction.

## Feature Summary

The Form Controls feature in React Spreadsheet includes:

- Worksheet-based form controls
- Check Box support with mixed state capability
- Radio Button support with mutual exclusion
- Drop Down support with input ranges
- Drag and drop support for repositioning
- Resize support for controls
- Delete support with undo/redo
- Undo and Redo support for all operations
- Cell Link integration for state synchronization
- Input Range support for Drop Down
- Import and Export support
- RTL support
- Editable control captions for Check Box and Radio Button
- Cut, Copy, and Paste support for all form control types

## See Also

* [Check Box](./check-box)
* [Radio Button](./radio-button)
* [Drop Down](./drop-down)
* [Data Validation](../data-validation)
* [Formatting Overview](../formatting-overview)
* [Events](../events)
