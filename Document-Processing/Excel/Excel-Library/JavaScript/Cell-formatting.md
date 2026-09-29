---
title: Cell Formatting in JavaScript Excel | Syncfusion
description: Apply fonts, fills, borders, alignment, number formats, and rich text with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Cell Formatting in JavaScript Excel

Format cells through `cell.style` and `cell.numberFormat`. Prefer these APIs over the internal workbook styles table.

## Apply a cell style

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, BorderStyle } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
const cell = sheet.cell('A1');
cell.value = 'Total';

cell.style = {
  font: {
    name: 'Calibri',
    size: 12,
    bold: true,
    color: { rgb: 'FFFFFF' },
  },
  fill: {
    patternType: 'solid',
    fgColor: { rgb: '4472C4' },
  },
  alignment: {
    horizontal: 'center',
    vertical: 'center',
    wrapText: true,
  },
  border: {
    top: { style: BorderStyle.Thin, color: { rgb: '000000' } },
    bottom: { style: BorderStyle.Thin, color: { rgb: '000000' } },
    left: { style: BorderStyle.Thin, color: { rgb: '000000' } },
    right: { style: BorderStyle.Thin, color: { rgb: '000000' } },
  },
};
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, BorderStyle } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const cell = sheet.cell('A1');
cell.value = 'Total';

cell.style = {
  font: {
    name: 'Calibri',
    size: 12,
    bold: true,
    color: { rgb: 'FFFFFF' },
  },
  fill: {
    patternType: 'solid',
    fgColor: { rgb: '4472C4' },
  },
  alignment: {
    horizontal: 'center',
    vertical: 'center',
    wrapText: true,
  },
  border: {
    top: { style: BorderStyle.Thin, color: { rgb: '000000' } },
    bottom: { style: BorderStyle.Thin, color: { rgb: '000000' } },
    left: { style: BorderStyle.Thin, color: { rgb: '000000' } },
    right: { style: BorderStyle.Thin, color: { rgb: '000000' } },
  },
};
{% endhighlight %}
{% endtabs %}

## Number formats

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').number = 1234.5;
sheet.cell('A1').numberFormat = '#,##0.00';

sheet.cell('B1').dateTime = new Date(2026, 0, 15);
sheet.cell('B1').numberFormat = 'yyyy-mm-dd';
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').number = 1234.5;
sheet.cell('A1').numberFormat = '#,##0.00';

sheet.cell('B1').dateTime = new Date(2026, 0, 15);
sheet.cell('B1').numberFormat = 'yyyy-mm-dd';
{% endhighlight %}
{% endtabs %}

## Clear formatting

Assign `undefined` to `style` to clear the cell style without changing the value.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').style = undefined;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').style = undefined;
{% endhighlight %}
{% endtabs %}

## Rich text

Use `workbook.createFont()` and `cell.richText.characters()` to format parts of the cell text.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
const cell = sheet.cell('A1');

cell.value = 'Hello World';
const bold = workbook.createFont();
bold.bold = true;
bold.color = { rgb: 'C00000' };
cell.richText.characters(0, 5).font = bold;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const cell = sheet.cell('A1');

cell.value = 'Hello World';
const bold = workbook.createFont();
bold.bold = true;
bold.color = { rgb: 'C00000' };
cell.richText.characters(0, 5).font = bold;
{% endhighlight %}
{% endtabs %}

N> `createFont()` builds a rich-text run font. It does not insert a shared style-table font entry by itself.
