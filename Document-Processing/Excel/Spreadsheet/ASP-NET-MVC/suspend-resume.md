---
layout: post
title: Suspend and Resume UI Refresh in ASP.NET MVC Spreadsheet | Syncfusion
description: Improve performance in Syncfusion ASP.NET MVC Spreadsheet by using suspendRefresh and resumeRefresh to group multiple updates and avoid repeated rendering.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Suspend and Resume UI Refresh in ASP.NET MVC Spreadsheet

The Spreadsheet refreshes its UI after each operation performed through public methods, such as updating a cell, applying formatting, or inserting rows. This immediate rendering works well for a few actions, but it can lead to performance issues when many operations are executed one after another.

The **suspend and resume refresh** feature lets you temporarily pause UI rendering, perform multiple operations, and then refresh the UI only once at the end. This helps reduce unnecessary re-rendering and improves the overall performance of bulk updates.

This is especially useful when the Spreadsheet is updated programmatically during initialization, data processing, or large-scale scenarios.

## When to use

Use this feature when you need to perform several actions in sequence, such as:

- Updating many cells at once
- Applying formatting to a large range
- Inserting or deleting multiple rows or columns
- Running repeated operations inside a loop
- Working with large datasets

For a few operations, this feature is usually not required.

## How to use

Use the following methods:

- [`suspendRefresh`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#suspendrefresh) — pauses UI rendering
- [`resumeRefresh`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#resumerefresh) — applies all pending visual updates

### Step 1: Suspend UI refresh

Call [`suspendRefresh`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#suspendrefresh) before starting multiple Spreadsheet operations.

### Step 2: Perform the required operations

Execute the actions you want to apply. The Spreadsheet model is updated, but the UI is not refreshed after each call.

### Step 3: Resume UI refresh

Call [`resumeRefresh`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#resumerefresh) after all operations are complete. The Spreadsheet then renders all accumulated changes in a single refresh.

### Example pattern

```js
<script>
	function created() {
		var spreadsheetObj = ej.base.getComponent(document.getElementById('spreadsheet'), 'spreadsheet');
		spreadsheetObj.suspendRefresh();
		spreadsheetObj.insertRow(0, 0);
		spreadsheetObj.updateCell({ value: 'Project Budget Tracker - Q2 2026' }, 'A1');
		spreadsheetObj.merge('A1:K1');
		spreadsheetObj.updateCell({ value: 'Reference' }, 'K2');
		spreadsheetObj.updateCell({ value: 'Total Budget' }, 'A13');
		spreadsheetObj.updateCell({ formula: '=SUM(F3:F12)' }, 'F13');
		spreadsheetObj.updateCell({ formula: '=SUM(G3:G12)' }, 'G13');
		spreadsheetObj.updateCell({ formula: '=SUM(H3:H12)' }, 'H13');
		spreadsheetObj.addHyperlink('https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-mvc/overview', 'K3:K12', 'Open Guide');
		spreadsheetObj.cellFormat({ fontWeight: 'bold', fontSize: '14pt', textAlign: 'center', verticalAlign: 'middle', backgroundColor: '#4472C4', color: '#FFFFFF' }, 'A1:K1');
		spreadsheetObj.cellFormat({ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#EAEAEA' }, 'A2:K2');
		spreadsheetObj.numberFormat('$#,##0.00', 'F3:H13');
		spreadsheetObj.addDataValidation({ type: 'WholeNumber', operator: 'Between', value1: '1', value2: '5', isHighlighted: true }, 'J3:J12');
		spreadsheetObj.wrap('A3:A12', true);
		spreadsheetObj.setBorder({ border: '1px solid #C8C8C8' }, 'A2:K13', 'Outer');
		spreadsheetObj.setRowHeight(50, 0);
		spreadsheetObj.setRowsHeight(30, ['1:13']);
		spreadsheetObj.setColWidth(220, 0);
		spreadsheetObj.setColumnsWidth(90, ['B:K']);
		spreadsheetObj.resumeRefresh();
	}
</script>
```
> Always pair each `suspendRefresh` call with a corresponding `resumeRefresh` call. If `resumeRefresh` is not called, the pending UI changes may not be displayed.

## API reference

### suspendRefresh

Suspends visual updates in the Spreadsheet.

**Behavior:**
- Prevents the UI from refreshing after each operation
- Allows multiple actions to be grouped together
- Keeps internal model updates running
- Must be paired with `resumeRefresh`

### resumeRefresh

Resumes visual updates and applies all pending changes.

**Behavior:**
- Applies all operations performed after `suspendRefresh`
- Refreshes the Spreadsheet UI once
- Improves rendering efficiency for bulk operations

## Code example

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/suspend-resume-cs1/razor %}
{% endhighlight %}
{% highlight c# tabtitle="BatchUpdate.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/suspend-resume-cs1/batchUpdate.cs %}
{% endhighlight %}
{% endtabs %}

## Supported operations

The following types of operations can be performed between `suspendRefresh` and `resumeRefresh`:

- **Cell operations:** `updateCell`, `autoFill`, `clear`
- **Row and column operations:** `insertRow`, `insertColumn`, `hideRow`, `hideColumn`, `setRowsHeight`, `setRowHeight`, `setColWidth`, `setColumnsWidth`, `autoFit`
- **Formatting:** `cellFormat`, `numberFormat`, `wrap`, `setBorder`
- **Merge operations:** `merge`, `unMerge`
- **Hyperlinks:** `addHyperlink`, `removeHyperlink`
- **Data validation:** `addDataValidation`, `removeDataValidation`, `addInvalidHighlight`, `removeInvalidHighlight`
- **Conditional formatting:** `conditionalFormat`, `clearConditionalFormat`
- **Sheet operations:** `insertSheet`, `duplicateSheet`, `moveSheet`, `delete`
- **Protection:** `protectSheet`, `unProtectSheet`
- **Freeze panes:** `freezePanes`, `unfreezePanes`
- **Clipboard operations:** `cut`, `copy`, `paste`
- **Editing and navigation:** `find`, `replace`, `selectRange`, `goTo`
- **Charts:** `insertChart`, `deleteChart`
- **Images:** `insertImage`, `deleteImage`
- **Filtering:** `applyFilter`, `clearFilter`
- **Other actions:** `sort`, `calculateNow`, `addDefinedName`, `updateRange`

## Notes

- Use suspend and resume UI refresh when multiple operations are executed together.
- Avoid using it for few or simple operations.
- Useful during initialization and large data updates.
- Data and model changes are processed during the suspended state; only visual refresh is delayed.

## See Also

* [Data Binding](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-mvc/data-binding)
* [Worksheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-mvc/worksheet)
