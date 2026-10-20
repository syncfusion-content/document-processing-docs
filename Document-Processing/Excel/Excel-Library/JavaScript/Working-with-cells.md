---
title: Working with Cells in JavaScript Excel | Syncfusion
description: Read and write cell values, dates, errors, and clear cells with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Working with Cells in JavaScript Excel

Cells hold values, formulas, and formatting on a worksheet. You can address a cell by A1 notation or by 1-based row and column position; reading an empty address still gives you a cell you can write to.

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

Date values are stored as Excel serial numbers and shown with a date-time display format. Reading and writing dates this way keeps calendar values compatible with Excel.

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

Cells can store known Excel error codes such as #N/A. Detecting error values when reading helps you handle missing or invalid results without treating them as ordinary text.

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

Clearing a cell removes its value and formula while leaving formatting in place. Hyperlinks are not removed by a content clear, so links must be cleared separately when needed.

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
