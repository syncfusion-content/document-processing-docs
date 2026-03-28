---
layout: post
title: Events in React Spreadsheet component | Syncfusion
description: Learn here all about the events in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Events 
platform: document-processing
documentation: ug
---

# Events in React Spreadsheet Component

The Spreadsheet component triggers events for user actions including data binding, selection, editing, clipboard operations, sorting, filtering, formatting, row/column operations, context menu, ribbon interactions, and import/export. These events allow you to integrate custom logic into your application workflow.

## Action Events

The `actionBegin` and `actionComplete` events are the primary action events in the Spreadsheet.

### actionBegin event

Triggers when any action begins in the Spreadsheet. Use this event to:
* Identify the action type using `args.action`
* Prevent specific actions from executing
* Apply custom logic at action initiation

### actionComplete event

Triggers when any action completes successfully in the Spreadsheet. Use this event to:
* Identify the action type using `args.action`
* Apply custom logic after an action completes

### Supported actions

The following table shows action names triggered by `actionBegin` and `actionComplete` events:

| **Action** | **actionBegin** | **actionComplete** |
|--------|:---:|:---:|
| Add Data Validation | ✓ | ✓ |
| Add Defined Name | - | ✓ |
| Autofill | ✓ | ✓ |
| Autofit | ✓ | ✓ |
| Cell Delete | ✓ | ✓ |
| Cell Save (Edit) | ✓ | ✓ |
| Chart Design | ✓ | ✓ |
| Chart Deletion | ✓ | ✓ |
| Chart Insertion | ✓ | ✓ |
| Chart Refresh (Resize/Drag) | - | ✓ |
| Clear | ✓ | ✓ |
| Clear Conditional Formatting | - | ✓ |
| Clear Validation | ✓ | ✓ |
| Clear Highlight | ✓ | ✓ |
| Copy | ✓ | - |
| Cut | ✓ | - |
| Paste | ✓ | ✓ |
| Comment | ✓ | ✓ |
| Conditional Formatting | ✓ | ✓ |
| Delete | ✓ | ✓ |
| Delete Comment | ✓ | ✓ |
| Delete Rows/Columns | ✓ | ✓ |
| Filter | ✓ | ✓ |
| Formatting (Cell/Number) | ✓ | ✓ |
| Freeze Panes | ✓ | ✓ |
| Gridlines | ✓ | ✓ |
| Headers | ✓ | ✓ |
| Hide Row/Column | ✓ | ✓ |
| Highlight Invalid Data | ✓ | ✓ |
| Hyperlink | ✓ | ✓ |
| Delete Image | ✓ | ✓ |
| Insert Image | ✓ | ✓ |
| Image Refresh (Resize/Drag) | - | ✓ |
| Insert Row/Column/Sheet | ✓ | ✓ |
| Merge | ✓ | ✓ |
| Open | ✓ | ✓ |
| Protect Sheet | ✓ | ✓ |
| Read-Only | ✓ | ✓ |
| Remove Defined Name | - | ✓ |
| Replace | ✓ | ✓ |
| Replace All | ✓ | ✓ |
| Resize Row/Column | - | ✓ |
| Save | ✓ | - |
| Sort | ✓ | ✓ |
| Sheet Duplicate | ✓ | ✓ |
| Sheet Hide | ✓ | ✓ |
| Sheet Move | ✓ | ✓ |
| Sheet Rename | ✓ | ✓ |
| Wrap | ✓ | ✓ |


The following code example demonstrates how to bind the `actionBegin` and `actionComplete` events in the Spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/events/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/events/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/events" %}

## Clipboard

When performing clipboard operations such as **Cut**, **Copy**, or **Paste**, the Spreadsheet triggers specific events that allow you to monitor and manage these actions effectively. The following sections outline the event sequence and their roles.

### Cut / Copy

For **Cut** or **Copy** actions, only the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) event is triggered. You can identify the action type and access the copied range by using the following properties:

*   `args.action === 'cut'` → Indicates a Cut action
*   `args.action === 'copy'` → Indicates a Copy action
*   `args.args.copiedRange` → Provides the range of copied cells

### Paste

During a **Paste** operation, events are triggered in the following sequence:

> actionBegin → beforeCellUpdate → cellSave → actionComplete

The table below describes each event and its role in the paste process:

| **Event** | **Description** | **Event Arguments** |
|-----------|------------------|----------------------|
| [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) | Triggers when the paste action starts. | [`ActionBeginEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) |
| [`beforeCellUpdate`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforecellupdate) | Triggers for each cell in the pasted range before it is updated, allowing you to modify cell properties or cancel the `paste` action. | [`BeforeCellUpdateArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/beforecellupdateargs) |
| [`cellSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#cellsave) | Triggers for each cell in the pasted range after the modified cell is saved. | [`CellSaveEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellsaveeventargs) |
| [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actioncomplete) | Triggers after all pasted cells are fully saved. | [`ActionCompleteEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actioncomplete) |

### Accessing copied and pasted ranges

You can access the copied and pasted ranges during paste operations by using the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) and [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actioncomplete) events. Verify the action type using:

*   `args.action === 'clipboard'` → Indicates a paste action

Once verified, you can access the following properties:

*   `args.eventArgs.copiedRange` → The range of cells that were copied
*   `args.eventArgs.pastedRange` → The range of cells where content was pasted

## Editing

When a cell is edited manually—such as by **double-clicking the cell**, **pressing the F2 key**, or **modifying it through the formula bar**—the Spreadsheet triggers a series of events. These events allow you to monitor and manage the entire editing process, from initiation to completion.

The sequence of events during manual cell editing is:

> cellEdit → cellEditing → actionBegin → beforeCellUpdate → beforeCellSave → cellSave → cellEdited → actionComplete

The table below describes each event and its role in the editing process:

| **Event** | **Description** | **Event Arguments** |
|-----------|------------------|----------------------|
| [`cellEdit`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#celledit) | Triggers before the cell enters edit mode. | [`CellEditEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellediteventargs) |
| [`cellEditing`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#cellediting) | Triggers while editing is in progress; fires for each change made to the cell content. | [`CellEditingEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellediteventargs) |
| [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) | Triggers when the edit action starts. | [`ActionBeginEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) |
| [`beforeCellUpdate`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforecellupdate) | Triggers before any cell property (style, value, formula, etc.) is modified. | [`BeforeCellUpdateArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/beforecellupdateargs)  |
| [`beforeCellSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforecellsave) | Triggers before the cell value is saved. | [`BeforeCellSaveEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellediteventargs) |
| [`cellSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#cellsave) | Triggers when the modified cell value is saved. | [`CellSaveEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellsaveeventargs) |
| [`cellEdited`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#celledited) | Triggers after the editing process completes. | [`CellEditedEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/cellediteventargs) |
| [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actioncomplete) | Triggers once the entire edit operation is completed. | [`ActionCompleteEventArgs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actioncomplete) |

## See Also

* [Editing](./editing.md)
* [Clipboard](./clipboard.md)