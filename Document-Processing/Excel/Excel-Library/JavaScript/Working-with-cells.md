---
title: Working with Cells in JavaScript Excel Library | Syncfusion
description: Read and write cell values, dates, errors, and clear cells with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Working with Cells in JavaScript Excel Library

Cells hold values, formulas, and formatting on a worksheet. You can address a cell by A1 notation or by 1-based row and column position; reading an empty address still gives you a cell you can write to.

N> The snippets on this page save the workbook with `await workbook.save('<file name>.xlsx')`, which requires Node.js. In a browser, call `workbook.save()` without arguments and download the returned bytes, as shown in [Getting started](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/getting-started).

## Get a cell

You can address any cell by A1 notation or by row and column position. Reading an empty address still gives you a cell to work with so you can set values or formatting as needed.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// A1 address
const a1 = sheet.cell('A1');

// 1-based row, column (row 2, column 3 = C2)
const c2 = sheet.cell(2, 3);

// Alias
const b2 = sheet.getCell('B2');

console.log(a1.address); // 'A1'

// Save the workbook.
await workbook.save('GetACell.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// A1 address
const a1 = sheet.cell('A1');

// 1-based row, column (row 2, column 3 = C2)
const c2 = sheet.cell(2, 3);

// Alias
const b2 = sheet.getCell('B2');

console.log(a1.address); // 'A1'

// Save the workbook.
await workbook.save('GetACell.xlsx');
{% endhighlight %}
{% endtabs %}

## Set values

Cell values can be text, numbers, booleans, errors, or empty. Setting a value replaces any formula on that cell, and plain text is not treated as a formula unless you set a formula explicitly.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Product';
sheet.cell('B1').value = 42;
sheet.cell('C1').value = true;
sheet.cell('D1').value = null; // clear

// Typed helpers
sheet.cell('A2').text = 'Name';
sheet.cell('B2').number = 19.5;

// Save the workbook.
await workbook.save('SetValues.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Product';
sheet.cell('B1').value = 42;
sheet.cell('C1').value = true;
sheet.cell('D1').value = null; // clear

// Typed helpers
sheet.cell('A2').text = 'Name';
sheet.cell('B2').number = 19.5;

// Save the workbook.
await workbook.save('SetValues.xlsx');
{% endhighlight %}
{% endtabs %}

## Dates

Date values are stored as Excel serial numbers and shown with a date-time display format. Reading and writing dates this way keeps calendar values compatible with Excel.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').dateTime = new Date(2026, 2, 25, 14, 30);
const when = sheet.cell('A1').dateTime;

// Save the workbook.
await workbook.save('Dates.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').dateTime = new Date(2026, 2, 25, 14, 30);
const when = sheet.cell('A1').dateTime;

// Save the workbook.
await workbook.save('Dates.xlsx');
{% endhighlight %}
{% endtabs %}

N> Date serial conversion respects `workbook.date1904`.

## Cell errors

Cells can store known Excel error codes, such as `#N/A`. Detecting error values when you read a cell helps you handle missing or invalid results without treating them as ordinary text.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, isCellError } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = { type: 'error', code: '#N/A' };

const v = sheet.cell('A1').value;
if (isCellError(v)) {
  console.log(v.code);
}

// Save the workbook.
await workbook.save('CellErrors.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, isCellError } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = { type: 'error', code: '#N/A' };

const v = sheet.cell('A1').value;
if (isCellError(v)) {
  console.log(v.code);
}

// Save the workbook.
await workbook.save('CellErrors.xlsx');
{% endhighlight %}
{% endtabs %}

## Ranges

A range is a block of cells that you address as `A1:C3`. Use `sheet.range()` to read its bounds, check whether it is merged, and merge or unmerge it. Row and column numbers in the bounds are 1-based.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const range = sheet.range('B2:D4');

const address = range.address; // 'B2:D4'
const firstRow = range.firstRow; // 2
const lastRow = range.lastRow; // 4
const firstColumn = range.firstColumn; // 2
const lastColumn = range.lastColumn; // 4

// Merge the range, then check it
range.merge();
const merged = range.isMerged;

// Save the workbook.
await workbook.save('Ranges.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const range = sheet.range('B2:D4');

const address = range.address; // 'B2:D4'
const firstRow = range.firstRow; // 2
const lastRow = range.lastRow; // 4
const firstColumn = range.firstColumn; // 2
const lastColumn = range.lastColumn; // 4

// Merge the range, then check it
range.merge();
const merged = range.isMerged;

// Save the workbook.
await workbook.save('Ranges.xlsx');
{% endhighlight %}
{% endtabs %}

## Cell properties

A cell reports its address, its merge span, and whether it is locked. Use `text`, `number`, and `dateTime` to read a value as a specific type, and `value` to read any value. A typed getter returns `null` when the cell does not hold that type.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Report';
sheet.cell('B1').number = 42;
sheet.range('A3:C3').merge();

const cell = sheet.cell('B1');
const address = cell.address; // 'B1'
const asNumber = cell.number; // 42
const asText = cell.text; // null, because the cell holds a number
const locked = cell.isLocked;

const merged = sheet.cell('A3');
const columns = merged.colSpan; // 3
const rows = merged.rowSpan; // 1

// Save the workbook.
await workbook.save('CellProperties.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Report';
sheet.cell('B1').number = 42;
sheet.range('A3:C3').merge();

const cell = sheet.cell('B1');
const address = cell.address; // 'B1'
const asNumber = cell.number; // 42
const asText = cell.text; // null, because the cell holds a number
const locked = cell.isLocked;

const merged = sheet.cell('A3');
const columns = merged.colSpan; // 3
const rows = merged.rowSpan; // 1

// Save the workbook.
await workbook.save('CellProperties.xlsx');
{% endhighlight %}
{% endtabs %}

## Clear cell content

Clearing a cell removes its value and formula while leaving formatting in place. Hyperlinks are not removed by a content clear, so links must be cleared separately when needed.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Temp';
sheet.cell('A1').clear();

// Save the workbook.
await workbook.save('ClearCellContent.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Temp';
sheet.cell('A1').clear();

// Save the workbook.
await workbook.save('ClearCellContent.xlsx');
{% endhighlight %}
{% endtabs %}
