---
layout: post
title: Events in React Spreadsheet component | Syncfusion
description: Learn here all about the events in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Events 
platform: document-processing
documentation: ug
---

# Events in React Spreadsheet Component

The Spreadsheet component triggers events for creation, data binding, selection, editing, clipboard actions, sorting, filtering, formatting, row and column insertion or deletion, context menu and ribbon interactions, and import/export operations—enabling integration of custom logic into application workflows.

## Action Events

The `actionBegin` and `actionComplete` events are the primary action events in the Spreadsheet.

The `actionBegin` event triggers when any action begins in the Spreadsheet and fires for all user-initiated actions, enabling you to identify the action type, prevent specific actions from executing, and apply custom logic at the initiation of an action.

The `actionComplete` event triggers when any action completes in the Spreadsheet and fires for all user-initiated actions, enabling you to identify the action type and apply custom logic after an action has successfully completed.

You can identify the type of action being triggered by using the `args.action` property during both the action events.

The following table represents the action names for which the `actionBegin` and `actionComplete` events are triggered in the Spreadsheet:

| **Action** | **ActionBegin** | **ActionComplete** |
|--------|-------------|----------------|
| Add Data Validation | validation | validation |
| Add Defined Name | - | addDefinedName |
| Autofill | autofill | autofill |
| Autofit | resizeToFit | resizeToFit |
| Cell Delete | cellDelete | cellDelete |
| Cell Save (Edit) | cellSave | cellSave |
| Chart Design | chartDesign | chartDesign |
| Chart Deletion | deleteChart | deleteChart |
| Chart Insertion | beforeInsertChart | insertChart |
| Chart (Resize/Drag and Drop) | - | chartRefresh |
| Clear | beforeClear | clear |
| Clear Conditional Formatting | - | clearCF |
| Clear Validation | removeValidation | removeValidation |
| Clear Highlight | removeHighlight | removeHighlight |
| Clipboard (Copy) | copy | - |
| Clipboard (Cut) | cut | - |
| Clipboard (Paste) | clipboard | clipboard |
| Comment | addComment | addComment |
| Conditional Formatting | conditionalFormat | conditionalFormat |
| Delete | delete | delete |
| Delete Comment | deleteComment | deleteComment |
| Delete (Rows/Columns) | delete | delete |
| Filter | filter | filter |
| Formatting (Cell/Number) | format | format |
| Freeze Panes | freezePanes | freezePanes |
| Gridlines | gridlines | gridlines |
| Headers | headers | headers |
| Hide (Row/Column) | hideShow | hideShow |
| Highlight Invalid Data | addHighlight | addHighlight |
| Hyperlink | hyperlink | hyperlink |
| Image Deletion | deleteImage | deleteImage |
| Image Insertion | beforeInsertImage | insertImage |
| Image (Resize/Drag and Drop) | - | imageRefresh |
| Insert (Row/Column/Sheet) | insert | insert |
| Merge | merge | merge |
| Open | beforeOpen | import |
| Protect Sheet | protectSheet | protectSheet |
| Read-Only | readonly | readonly |
| Remove Defined Name | - | removeDefinedName |
| Replace | beforeReplace | replace |
| Replace All | beforeReplaceAll | replaceAll |
| Resize (Row/Column) | - | resize |
| Save | beforeSave | - |
| Sort | beforeSort | sorting |
| Sheet Duplicate | duplicateSheet | duplicateSheet |
| Sheet Hide | hideSheet | hideSheet |
| Sheet Move | moveSheet | moveSheet |
| Sheet Rename | renameSheet | renameSheet |
| Wrap | beforeWrap | wrap |


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