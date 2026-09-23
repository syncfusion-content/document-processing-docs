---
title: Working with Cells in JavaScript Excel | Syncfusion
description: Read and write cell values, dates, errors, and clear cells with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Working with Cells in JavaScript Excel

Access cells with `sheet.cell()` using an A1 address or 1-based row and column indexes. Storage is allocated only when you set a value or other cell content.

## Get a cell

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
{% endhighlight %}
{% endtabs %}

## Set values

`value` accepts a number, string, boolean, cell error, or `null` (empty). Setting a value replaces any formula on the cell. Strings are never turned into formulas automatically.

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
{% endhighlight %}
{% endtabs %}

## Dates

`dateTime` reads and writes JavaScript `Date` values as Excel serial numbers and applies a default date-time number format when you set a date.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').dateTime = new Date(2026, 2, 25, 14, 30);
const when = sheet.cell('A1').dateTime;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').dateTime = new Date(2026, 2, 25, 14, 30);
const when = sheet.cell('A1').dateTime;
{% endhighlight %}
{% endtabs %}

N> Date serial conversion respects `workbook.date1904`.

## Cell errors

Known error codes can be stored as cell values. Use `isCellError` to detect them when reading.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, isCellError } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = { code: '#N/A' };

const v = sheet.cell('A1').value;
if (isCellError(v)) {
  console.log(v.code);
}
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, isCellError } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = { code: '#N/A' };

const v = sheet.cell('A1').value;
if (isCellError(v)) {
  console.log(v.code);
}
{% endhighlight %}
{% endtabs %}

## Clear cell content

`clear()` removes the value and formula while leaving formatting in place. It does not remove hyperlinks.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Temp';
sheet.cell('A1').clear();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Temp';
sheet.cell('A1').clear();
{% endhighlight %}
{% endtabs %}
