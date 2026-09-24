---
title: Sort and Filter in JavaScript Excel Library | Syncfusion
description: Author worksheet sort state and AutoFilter column metadata with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Sort and Filter in JavaScript Excel

Sort and filter settings are stored as workbook metadata so spreadsheet applications can apply them when the file opens. Use sort state to define ordered columns and AutoFilter criteria to store which rows should be shown.

N> Calling sort or filter APIs does **not** rearrange rows or hide filtered rows inside the library. Cell values stay as stored. Excel (or another consumer) applies the persisted state.

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
// Optional custom order, for example:
// condition.customList = 'Low,Medium,High';

const conditions = sorter.list();
const count = sorter.count;

const existing = sheet.dataSorter; // undefined when no sort state is present
sheet.removeDataSorter();
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
sheet.removeDataSorter();
{% endhighlight %}
Set `condition.sortBy` to `'value'`, `'cellColor'`, `'fontColor'`, or `

`SortBy` is `'value' | 'cellColor' | 'fontColor' | 'icon'`. A worksheet holds at most one sort-state record. Use `sorter.clear()`, `remove`, or `removeAt` to drop conditions without removing the sorter itself.

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
sheet.removeAutoFilter();
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
sheet.removeAutoFilter();
{% endhighlight %}
{% endtabs %}

N> Table-embedded auto filters follow the tables model and are separate from the worksheet-level `autoFilter` record.
