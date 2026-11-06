---
title: Sort and Filter in JavaScript Excel Library | Syncfusion
description: Author worksheet sort state and AutoFilter column metadata with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Sort and Filter in JavaScript Excel Library

Sort and filter settings are stored as workbook metadata so spreadsheet applications can apply them when the file opens. Use sort state to define ordered columns and AutoFilter criteria to store which rows should be shown.

N> Calling sort or filter APIs does **not** rearrange rows or hide filtered rows inside the library. Cell values stay as stored. Excel (or another consumer) applies the persisted state.

N> The snippets on this page save the workbook with `await workbook.save('<file name>.xlsx')`, which requires Node.js. In a browser, call `workbook.save()` without arguments and download the returned bytes, as shown in [Getting started](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/getting-started).

## Configure sort state

Sort state describes how a range should be ordered when Excel applies sorting. Define the target range, the sort key, and the direction so the intended order is ready when the workbook opens.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';
import type { SortBy } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Populate data in A1:B10 first, then author sort metadata
const sorter = sheet.addDataSorter('A1:B10');
sorter.isCaseSensitive = false;
sorter.isColumnSort = false; // false = sort rows (default Excel behavior)

// add() defines the condition range; only one condition is modeled
const condition = sorter.add('A1:B10');
condition.isDescending = true;
const by: SortBy = 'value'; // 'value' | 'cellColor' | 'fontColor' | 'icon'
condition.sortBy = by;

const conditions = sorter.list();
const count = sorter.count;

const existing = sheet.dataSorter; // undefined when no sort state is present

// Save the workbook.
await workbook.save('ConfigureSortState.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Populate data in A1:B10 first, then author sort metadata
const sorter = sheet.addDataSorter('A1:B10');
sorter.isCaseSensitive = false;
sorter.isColumnSort = false; // false = sort rows (default Excel behavior)

// add() defines the condition range; only one condition is modeled
const condition = sorter.add('A1:B10');
condition.isDescending = true;
condition.sortBy = 'value'; // 'value' | 'cellColor' | 'fontColor' | 'icon'

const conditions = sorter.list();
const count = sorter.count;

const existing = sheet.dataSorter;

// Save the workbook.
await workbook.save('ConfigureSortState.xlsx');
{% endhighlight %}
{% endtabs %}

Set `condition.sortBy` to one of the `SortBy` values: `'value'`, `'cellColor'`, `'fontColor'`, or `'icon'`. A worksheet holds at most one sort-state record. Use `sorter.clear()`, `remove`, or `removeAt` to drop conditions without removing the sorter itself.

## Sort by a custom order

Sort state stores a custom order as a comma-separated list. Use it when the order is not alphabetical, such as `Low`, `Medium`, and `High`. Set `isDescending` to reverse the order, and `isCaseSensitive` to compare text with case.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C6
const rows = [
  ['Order', 'Status', 'Priority'],
  ['1001', 'Delivered', 'High'],
  ['1002', 'Pending', 'Low'],
  ['1003', 'Shipped', 'Medium'],
  ['1004', 'Pending', 'High'],
  ['1005', 'Delivered', 'Low'],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    sheet.cell(r + 1, c + 1).value = value;
  });
});

const sorter = sheet.addDataSorter('A1:C6');
sorter.isCaseSensitive = false;

const condition = sorter.add('A1:C6');
condition.sortBy = 'value';
condition.isDescending = false;
condition.customList = 'Low,Medium,High';

// Save the workbook.
await workbook.save('CustomSortOrder.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C6
const rows = [
  ['Order', 'Status', 'Priority'],
  ['1001', 'Delivered', 'High'],
  ['1002', 'Pending', 'Low'],
  ['1003', 'Shipped', 'Medium'],
  ['1004', 'Pending', 'High'],
  ['1005', 'Delivered', 'Low'],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    sheet.cell(r + 1, c + 1).value = value;
  });
});

const sorter = sheet.addDataSorter('A1:C6');
sorter.isCaseSensitive = false;

const condition = sorter.add('A1:C6');
condition.sortBy = 'value';
condition.isDescending = false;
condition.customList = 'Low,Medium,High';

// Save the workbook.
await workbook.save('CustomSortOrder.xlsx');
{% endhighlight %}
{% endtabs %}

## Sort columns instead of rows

By default, the sort state describes sorting rows from top to bottom. Set `isColumnSort` to `true` to describe sorting columns from left to right.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C6
const rows = [
  ['Order', 'Status', 'Priority'],
  ['1001', 'Delivered', 'High'],
  ['1002', 'Pending', 'Low'],
  ['1003', 'Shipped', 'Medium'],
  ['1004', 'Pending', 'High'],
  ['1005', 'Delivered', 'Low'],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    sheet.cell(r + 1, c + 1).value = value;
  });
});

const sorter = sheet.addDataSorter('A1:C6');
sorter.isColumnSort = true;

const condition = sorter.add('A1:C6');
condition.sortBy = 'value';

// Save the workbook.
await workbook.save('SortColumns.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C6
const rows = [
  ['Order', 'Status', 'Priority'],
  ['1001', 'Delivered', 'High'],
  ['1002', 'Pending', 'Low'],
  ['1003', 'Shipped', 'Medium'],
  ['1004', 'Pending', 'High'],
  ['1005', 'Delivered', 'Low'],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    sheet.cell(r + 1, c + 1).value = value;
  });
});

const sorter = sheet.addDataSorter('A1:C6');
sorter.isColumnSort = true;

const condition = sorter.add('A1:C6');
condition.sortBy = 'value';

// Save the workbook.
await workbook.save('SortColumns.xlsx');
{% endhighlight %}
{% endtabs %}

## Configure AutoFilter criteria

AutoFilter criteria define the filtering settings stored in the workbook. Spreadsheet applications can use these settings when displaying worksheet data.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Header row + data in A1:D20 first
const filter = sheet.addAutoFilter('A1:D20');

// columnIndex is zero-based within the filter range (0 = column A here)
const statusCol = filter.addFilterColumn(0);
statusCol.addValue('Delivered');
statusCol.addValues(['Pending', 'Shipped']);
statusCol.isBlank = false;
statusCol.isButtonVisible = true;

const byIndex = filter.getByColumnIndex(0);
const all = filter.list();

const current = sheet.autoFilter;

// Save the workbook.
await workbook.save('ConfigureAutoFilterCriteria.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Header row + data in A1:D20 first
const filter = sheet.addAutoFilter('A1:D20');

// columnIndex is zero-based within the filter range (0 = column A here)
const statusCol = filter.addFilterColumn(0);
statusCol.addValue('Delivered');
statusCol.addValues(['Pending', 'Shipped']);
statusCol.isBlank = false;
statusCol.isButtonVisible = true;

const byIndex = filter.getByColumnIndex(0);
const all = filter.list();

const current = sheet.autoFilter;

// Save the workbook.
await workbook.save('ConfigureAutoFilterCriteria.xlsx');
{% endhighlight %}
{% endtabs %}

N> Table-embedded auto filters follow the tables model and are separate from the worksheet-level `autoFilter` record.

## Filter several columns

Add a filter column for each column that you want to filter. The `columnIndex` is zero-based within the filter range, so `0` is the first column of the range.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C6
const rows = [
  ['Order', 'Status', 'Priority'],
  ['1001', 'Delivered', 'High'],
  ['1002', 'Pending', 'Low'],
  ['1003', 'Shipped', 'Medium'],
  ['1004', 'Pending', 'High'],
  ['1005', 'Delivered', 'Low'],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    sheet.cell(r + 1, c + 1).value = value;
  });
});

const filter = sheet.addAutoFilter('A1:C6');

// Column B (index 1): Status is Delivered or Shipped
const status = filter.addFilterColumn(1);
status.addValues(['Delivered', 'Shipped']);

// Column C (index 2): Priority is High
const priority = filter.addFilterColumn(2);
priority.addValue('High');

// Save the workbook.
await workbook.save('FilterSeveralColumns.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C6
const rows = [
  ['Order', 'Status', 'Priority'],
  ['1001', 'Delivered', 'High'],
  ['1002', 'Pending', 'Low'],
  ['1003', 'Shipped', 'Medium'],
  ['1004', 'Pending', 'High'],
  ['1005', 'Delivered', 'Low'],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    sheet.cell(r + 1, c + 1).value = value;
  });
});

const filter = sheet.addAutoFilter('A1:C6');

// Column B (index 1): Status is Delivered or Shipped
const status = filter.addFilterColumn(1);
status.addValues(['Delivered', 'Shipped']);

// Column C (index 2): Priority is High
const priority = filter.addFilterColumn(2);
priority.addValue('High');

// Save the workbook.
await workbook.save('FilterSeveralColumns.xlsx');
{% endhighlight %}
{% endtabs %}

## Filter blanks and the filter button

Set `isBlank` to include blank cells in a column filter. Set `isButtonHidden` to hide the filter button on the header cell of a column, which is useful when a column should keep its filter but not offer it to users.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C6
const rows = [
  ['Order', 'Status', 'Priority'],
  ['1001', 'Delivered', 'High'],
  ['1002', 'Pending', 'Low'],
  ['1003', 'Shipped', 'Medium'],
  ['1004', 'Pending', 'High'],
  ['1005', 'Delivered', 'Low'],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    sheet.cell(r + 1, c + 1).value = value;
  });
});

const filter = sheet.addAutoFilter('A1:C6');

const status = filter.addFilterColumn(1);
status.addValue('Pending');
status.isBlank = true;

// Keep the filter on column C but hide its button
const priority = filter.addFilterColumn(2);
priority.addValue('High');
priority.isButtonHidden = true;

// Save the workbook.
await workbook.save('FilterBlanksAndButtons.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C6
const rows = [
  ['Order', 'Status', 'Priority'],
  ['1001', 'Delivered', 'High'],
  ['1002', 'Pending', 'Low'],
  ['1003', 'Shipped', 'Medium'],
  ['1004', 'Pending', 'High'],
  ['1005', 'Delivered', 'Low'],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    sheet.cell(r + 1, c + 1).value = value;
  });
});

const filter = sheet.addAutoFilter('A1:C6');

const status = filter.addFilterColumn(1);
status.addValue('Pending');
status.isBlank = true;

// Keep the filter on column C but hide its button
const priority = filter.addFilterColumn(2);
priority.addValue('High');
priority.isButtonHidden = true;

// Save the workbook.
await workbook.save('FilterBlanksAndButtons.xlsx');
{% endhighlight %}
{% endtabs %}

## Change and remove filter values

Change the values of a column filter after you create it. You can remove one value by name or position, clear all values, or remove the whole column filter.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C6
const rows = [
  ['Order', 'Status', 'Priority'],
  ['1001', 'Delivered', 'High'],
  ['1002', 'Pending', 'Low'],
  ['1003', 'Shipped', 'Medium'],
  ['1004', 'Pending', 'High'],
  ['1005', 'Delivered', 'Low'],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    sheet.cell(r + 1, c + 1).value = value;
  });
});

const filter = sheet.addAutoFilter('A1:C6');

const status = filter.addFilterColumn(1);
status.addValues(['Delivered', 'Pending', 'Shipped']);

// Read the values
const values = status.values();

// Remove one value by name or by zero-based position
status.removeValue('Pending');
status.removeValueAt(0);

// Remove all values from the column, or remove the column filter

// Save the workbook.
await workbook.save('ChangeFilterValues.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C6
const rows = [
  ['Order', 'Status', 'Priority'],
  ['1001', 'Delivered', 'High'],
  ['1002', 'Pending', 'Low'],
  ['1003', 'Shipped', 'Medium'],
  ['1004', 'Pending', 'High'],
  ['1005', 'Delivered', 'Low'],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    sheet.cell(r + 1, c + 1).value = value;
  });
});

const filter = sheet.addAutoFilter('A1:C6');

const status = filter.addFilterColumn(1);
status.addValues(['Delivered', 'Pending', 'Shipped']);

// Read the values
const values = status.values();

// Remove one value by name or by zero-based position
status.removeValue('Pending');
status.removeValueAt(0);

// Remove all values from the column, or remove the column filter

// Save the workbook.
await workbook.save('ChangeFilterValues.xlsx');
{% endhighlight %}
{% endtabs %}
