---
title: Excel Tables in JavaScript Excel Library | Syncfusion
description: Create and manage Excel tables, styles, columns, and totals rows with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Tables in JavaScript Excel

Tables turn a cell range into a named, structured data region. Optional header and totals rows, plus table styles, make related records easier to read and maintain in Excel.

## Create a table

A table turns a cell range into a structured data region with optional header and totals rows. Table styles make related rows easier to read and maintain.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Product';
sheet.cell('B1').value = 'Qty';
sheet.cell('A2').value = 'Laptop';
sheet.cell('B2').number = 5;
sheet.cell('A3').value = 'Phone';
sheet.cell('B3').number = 12;

const table = sheet.tables.add('SalesTable', 'A1:B3', 1);

// Optional named style and totals row
table.style = { name: 'TableStyleMedium9' };
table.totalsRowEnabled = true;
table.totalsRowShown = true;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Product';
sheet.cell('B1').value = 'Qty';
sheet.cell('A2').value = 'Laptop';
sheet.cell('B2').number = 5;
sheet.cell('A3').value = 'Phone';
sheet.cell('B3').number = 12;

const table = sheet.tables.add('SalesTable', 'A1:B3', 1);

table.style = { name: 'TableStyleMedium9' };
table.totalsRowEnabled = true;
table.totalsRowShown = true;
{% endhighlight %}
{% endtabs %}

`style` is a `TableStyle` object (`name` plus optional banding flags). Authored tables are ordinary worksheet tables.

## Access and remove tables

After tables exist on a sheet, you can find them by name, list every table, or remove tables you no longer need without clearing the underlying cell values unless you choose to.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
const table = sheet.tables.add('SalesTable', 'A1:B3', 1);

const count = sheet.tables.count;
const all = sheet.tables.list();
const first = sheet.tables.get(0);
const exists = sheet.tables.has('SalesTable');

sheet.tables.remove(table);
// sheet.tables.removeAt(0);
// sheet.tables.clear();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const table = sheet.tables.add('SalesTable', 'A1:B3', 1);

const count = sheet.tables.count;
const all = sheet.tables.list();
const first = sheet.tables.get(0);
const exists = sheet.tables.has('SalesTable');

sheet.tables.remove(table);
{% endhighlight %}
{% endtabs %}
