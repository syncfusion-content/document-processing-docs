---
layout: post
title: Events in Blazor Spreadsheet | Syncfusion
description: Learn about the available events in the Syncfusion Blazor Spreadsheet and handle user interactions programmatically.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Events in Blazor Spreadsheet

The [Blazor Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/blazor-spreadsheet-editor) component provides various events that allow you to interact with the component and customize its behavior.

| Event Name | Description |
|---|---|
| [ActionBeginning](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.ActionBeginningEventArgs.html) | Triggers before a Spreadsheet action is executed and allows it to be cancelled. |
| [ActionCompleted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.ActionCompletedEventArgs.html) | Triggers after a Spreadsheet action is successfully completed. |
| [ActionFailed](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.ActionFailedEventArgs.html) | Triggers when a Spreadsheet action fails during execution. |
| [AutofillActionBegin](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.AutofillActionBeginEventArgs.html) | Triggers when an autofill operation starts. To know more about this event, refer [here](./cell-range#autofillactionbegin). |
| [AutofillActionEnd](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.AutofillActionEndEventArgs.html) | Triggers when an autofill operation completes. To know more about this event, refer [here](./cell-range#autofillactionend). |
| [BeforeSave](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.BeforeSaveEventArgs.html) | Triggers just before the workbook is saved. |
| [CellEditing](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.CellEditingEventArgs.html) | Triggers when a cell enters edit mode. To know more about this event, refer [here](./editing#cellediting). |
| [CellFormatting](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.CellFormattingEventArgs.html) | Triggers before a cell style or number format is applied to a cell or range. |
| [CellSaved](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.CellSavedEventArgs.html) | Triggers when a cell's value is saved. To know more about this event, refer [here](./editing#cellsaved). |
| [ColumnResizing](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.ColumnResizingEventArgs.html) | Triggers when a column is being resized. |
| [ConditionalFormatting](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.ConditionalFormattingEventArgs.html) | Triggers before a conditional formatting rule is applied to a range. |
| [ContextMenuOpenClose](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.ContextMenuOpenCloseEventArgs.html) | Triggers before the context menu is opened or closed. |
| [Created](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.Created.html) | Triggers after the Spreadsheet component is created and initialized. |
| [CutCopyActionBegin](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.CutCopyActionBeginEventArgs.html) | Triggers when a cut or copy operation starts. To know more about this event, refer [here](./clipboard#cutcopyactionbegin). |
| [FileMenuOpenClose](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.FileMenuOpenCloseEventArgs.html) | Triggers before the file menu popup is opened or closed. |
| [HyperlinkClick](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.HyperlinkClickEventArgs.html) | Triggers when a hyperlink is clicked. To know more about this event, refer [here](./hyperlink#hyperlinkclick). |
| [HyperlinkCreated](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.HyperlinkCreatedEventArgs.html) | Triggers when a hyperlink is successfully added. To know more about this event, refer [here](./hyperlink#hyperlinkcreated). |
| [HyperlinkCreating](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.HyperlinkCreatingEventArgs.html) | Triggers when a hyperlink is being created. To know more about this event, refer [here](./hyperlink#hyperlinkcreating). |
| [Pasting](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.PastingEventArgs.html) | Triggers when a paste operation starts. To know more about this event, refer [here](./clipboard#pasting). |
| [RowResizing](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.RowResizingEventArgs.html) | Triggers when a row is being resized. |
| [Selected](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SelectedEventArgs.html) | Triggers when a cell or range of cells is selected. |
| [WorksheetAdding](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.WorksheetAddingEventArgs.html) | Triggers before a new worksheet is added. |
