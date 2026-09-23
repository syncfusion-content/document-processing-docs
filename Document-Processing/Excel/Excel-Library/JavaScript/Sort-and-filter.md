---
title: Sort and Filter in JavaScript Excel Library | Syncfusion
description: Author worksheet sort state and AutoFilter column metadata with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Sort and Filter in JavaScript Excel

The JavaScript Excel Library authors **sort state** and **AutoFilter criteria** as workbook metadata so Excel can apply them when the file is opened.

N> Calling sort or filter APIs does **not** rearrange rows or hide filtered rows inside the library. Cell values stay as stored. Excel (or another consumer) applies the persisted state.

## Sort state (`DataSorter`)

Add sort state with `sheet.addDataSorter(range)`, then define a condition with `sorter.add(range)`. Authored sort state keeps one modeled condition (`add` replaces prior conditions). Configure direction and comparison on the returned `SortCondition`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';
import type { SortBy } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Populate data in A1:B10 …
const sorter = sheet.addDataSorter('A1:B10');
sorter.isCaseSensitive = false;
sorter.isColumnSort = false;

const condition = sorter.add('A1:B10');
condition.isDescending = true;
const by: SortBy = 'value';
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

const sorter = sheet.addDataSorter('A1:B10');
sorter.isCaseSensitive = false;
sorter.isColumnSort = false;

const condition = sorter.add('A1:B10');
condition.isDescending = true;
condition.sortBy = 'value';

const conditions = sorter.list();
const count = sorter.count;

const existing = sheet.dataSorter;
sheet.removeDataSorter();
{% endhighlight %}
{% endtabs %}

`SortBy` is `'value' | 'cellColor' | 'fontColor' | 'icon'`. A worksheet holds at most one sort-state record. Use `sorter.clear()`, `remove`, or `removeAt` to drop conditions without removing the sorter itself.

## AutoFilter

Add a worksheet AutoFilter with `sheet.addAutoFilter(range)`, then configure columns with `addFilterColumn(columnIndex)` (zero-based within the filter range).

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Header row + data in A1:D20 …
const filter = sheet.addAutoFilter('A1:D20');

const statusCol = filter.addFilterColumn(0); // first column of the filter range
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

const filter = sheet.addAutoFilter('A1:D20');

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
