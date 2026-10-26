---
title: Tables in JavaScript Excel Library | Syncfusion
description: Create and manage Excel tables, styles, columns, and totals rows with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Tables in JavaScript Excel Library

Tables turn a cell range into a named, structured data region. Optional header and totals rows, plus table styles, make related records easier to read and maintain in Excel.

N> The snippets on this page save the workbook with `await workbook.save('<file name>.xlsx')`, which requires Node.js. In a browser, call `workbook.save()` without arguments and download the returned bytes, as shown in [Getting started](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/getting-started).

## Create a table

A table turns a cell range into a structured data region with an optional header row and totals row. Table styles make related rows easier to read and maintain.

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

// Optional named style
table.style = { name: 'TableStyleMedium9' };

// Save the workbook.
await workbook.save('CreateATable.xlsx');
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

// Save the workbook.
await workbook.save('CreateATable.xlsx');
{% endhighlight %}
{% endtabs %}

`style` is a `TableStyle` object (`name` plus optional banding flags). Authored tables are ordinary worksheet tables.

## Table styles and banding

A table style sets the color scheme. Use the style options to emphasize the first or last column and to turn row or column stripes on or off. Set `style` to `undefined` to leave the table unstyled.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Product', 'Region', 'Qty'],
  ['Laptop', 'North', 5],
  ['Phone', 'South', 12],
  ['Tablet', 'East', 7],
  ['Monitor', 'West', 3],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

// Light style with stripes
const light = sheet.tables.add('LightTable', 'A1:C5');
light.style = {
  name: 'TableStyleLight9',
  showFirstColumn: false,
  showLastColumn: false,
  showRowStripes: true,
  showColumnStripes: false,
};

// Dark style that emphasizes the first and last columns
const dark = sheet.tables.add('DarkTable', 'E1:G5');
dark.style = {
  name: 'TableStyleDark3',
  showFirstColumn: true,
  showLastColumn: true,
  showRowStripes: true,
  showColumnStripes: false,
};

// Save the workbook.
await workbook.save('TableStyles.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Product', 'Region', 'Qty'],
  ['Laptop', 'North', 5],
  ['Phone', 'South', 12],
  ['Tablet', 'East', 7],
  ['Monitor', 'West', 3],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

// Light style with stripes
const light = sheet.tables.add('LightTable', 'A1:C5');
light.style = {
  name: 'TableStyleLight9',
  showFirstColumn: false,
  showLastColumn: false,
  showRowStripes: true,
  showColumnStripes: false,
};

// Dark style that emphasizes the first and last columns
const dark = sheet.tables.add('DarkTable', 'E1:G5');
dark.style = {
  name: 'TableStyleDark3',
  showFirstColumn: true,
  showLastColumn: true,
  showRowStripes: true,
  showColumnStripes: false,
};

// Save the workbook.
await workbook.save('TableStyles.xlsx');
{% endhighlight %}
{% endtabs %}

The `name` property accepts the built-in Excel table style names:

| Family | Names |
|---|---|
| Light | `TableStyleLight1` to `TableStyleLight21` |
| Medium | `TableStyleMedium1` to `TableStyleMedium28` |
| Dark | `TableStyleDark1` to `TableStyleDark11` |

It also accepts the name of a custom table style that exists in the workbook.

## Header rows and totals row

By default, the first row of the range is the header row. Pass `headerRowCount` to `tables.add` to change the number of header rows. Turn on the totals row to reserve a row below the data for totals. Include the totals row in the table range.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Product', 'Region', 'Qty'],
  ['Laptop', 'North', 5],
  ['Phone', 'South', 12],
  ['Tablet', 'East', 7],
  ['Monitor', 'West', 3],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

// Include one extra row (row 6) for the totals row
sheet.cell('A6').value = 'Total';
sheet.cell('C6').formula = 'SUBTOTAL(109,SalesTable[Qty])';

const table = sheet.tables.add('SalesTable', 'A1:C6', 1);
table.style = { name: 'TableStyleMedium2' };
table.totalsRowEnabled = true;
table.totalsRowShown = true;

// Save the workbook.
await workbook.save('TableTotalsRow.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Product', 'Region', 'Qty'],
  ['Laptop', 'North', 5],
  ['Phone', 'South', 12],
  ['Tablet', 'East', 7],
  ['Monitor', 'West', 3],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

// Include one extra row (row 6) for the totals row
sheet.cell('A6').value = 'Total';
sheet.cell('C6').formula = 'SUBTOTAL(109,SalesTable[Qty])';

const table = sheet.tables.add('SalesTable', 'A1:C6', 1);
table.style = { name: 'TableStyleMedium2' };
table.totalsRowEnabled = true;
table.totalsRowShown = true;

// Save the workbook.
await workbook.save('TableTotalsRow.xlsx');
{% endhighlight %}
{% endtabs %}

## Multiple tables on a sheet

A worksheet can contain several tables. Each table needs a name that is unique on the worksheet, and tables must not overlap. Adding a table with a name that already exists throws an error.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Product', 'Region', 'Qty'],
  ['Laptop', 'North', 5],
  ['Phone', 'South', 12],
  ['Tablet', 'East', 7],
  ['Monitor', 'West', 3],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const first = sheet.tables.add('ProductsTable', 'A1:C5');
first.style = { name: 'TableStyleMedium2' };

// A second table in a different range, with a different name
sheet.cell('F1').value = 'Region';
sheet.cell('G1').value = 'Manager';
sheet.cell('F2').value = 'North';
sheet.cell('G2').value = 'Ana';

const second = sheet.tables.add('RegionsTable', 'F1:G2');
second.style = { name: 'TableStyleMedium4' };

const count = sheet.tables.count;
const hasProducts = sheet.tables.has('ProductsTable');

// Save the workbook.
await workbook.save('MultipleTables.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Product', 'Region', 'Qty'],
  ['Laptop', 'North', 5],
  ['Phone', 'South', 12],
  ['Tablet', 'East', 7],
  ['Monitor', 'West', 3],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const first = sheet.tables.add('ProductsTable', 'A1:C5');
first.style = { name: 'TableStyleMedium2' };

// A second table in a different range, with a different name
sheet.cell('F1').value = 'Region';
sheet.cell('G1').value = 'Manager';
sheet.cell('F2').value = 'North';
sheet.cell('G2').value = 'Ana';

const second = sheet.tables.add('RegionsTable', 'F1:G2');
second.style = { name: 'TableStyleMedium4' };

const count = sheet.tables.count;
const hasProducts = sheet.tables.has('ProductsTable');

// Save the workbook.
await workbook.save('MultipleTables.xlsx');
{% endhighlight %}
{% endtabs %}

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

// Save the workbook.
await workbook.save('AccessAndRemoveTables.xlsx');
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

// Save the workbook.
await workbook.save('AccessAndRemoveTables.xlsx');
{% endhighlight %}
{% endtabs %}
