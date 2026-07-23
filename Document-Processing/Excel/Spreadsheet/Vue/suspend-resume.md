---
layout: post
title: Suspend and Resume UI Refresh in Vue Spreadsheet | Syncfusion
description: Improve performance in Syncfusion Vue Spreadsheet by using suspendRefresh and resumeRefresh to group multiple updates and avoid repeated rendering.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Suspend and Resume UI Refresh in Vue Spreadsheet

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

- `suspendRefresh` — pauses UI rendering
- `resumeRefresh` — applies all pending visual updates

### Step 1: Suspend UI refresh

Call `suspendRefresh` before starting multiple Spreadsheet operations.

### Step 2: Perform the required operations

Execute the actions you want to apply. The Spreadsheet model is updated, but the UI is not refreshed after each call.

### Step 3: Resume UI refresh

Call `resumeRefresh` after all operations are complete. The Spreadsheet then renders all accumulated changes in a single refresh.

### Example pattern

```js
created: function() {
    const spreadsheet = this.$refs.spreadsheet;
    spreadsheet.suspendRefresh();
    spreadsheet.updateCell({ value: 'Total' }, 'A1');
    spreadsheet.updateCell({ value: '1200' }, 'B1');
    spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A1:B1');
    spreadsheet.numberFormat('$#,##0.00', 'B1');
    spreadsheet.setRowsHeight(28, 0);
    spreadsheet.resumeRefresh();
};
```

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
- Applies all operations performed between `suspendRefresh` and `resumeRefresh`
- Refreshes the Spreadsheet UI once
- Improves rendering efficiency for bulk operations

## Code example

{% tabs %}
{% highlight js tabtitle="app.vue" %}
{% include code-snippet/spreadsheet/vue/suspend-resume-cs1/app.vue %}
{% endhighlight %}
{% highlight js tabtitle="app-composition.vue" %}
{% include code-snippet/spreadsheet/vue/suspend-resume-cs1/app-composition.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/vue/suspend-resume-cs1" %}

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
- This feature is useful during initialization and large data updates.
- Data and model changes are processed during the suspended state; only visual refresh is delayed.

## See Also

* [Data Binding](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/data-binding)
* [Worksheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/vue/worksheet)
