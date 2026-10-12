---
title: Cell Formatting in JavaScript Excel | Syncfusion
description: Apply fonts, fills, borders, alignment, number formats, and rich text with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Cell Formatting in JavaScript Excel

Cell formatting controls how values look in Excel, including font, fill, borders, alignment, and number display. Apply formatting on individual cells so reports stay readable without changing the stored values.

`numberFormat` accepts standard Excel format codes (for example `#,##0.00`, `yyyy-mm-dd`, `0%`). Colors on style objects use `{ rgb: 'RRGGBB' }` or theme-based color objects where supported.

## Apply a cell style

A cell style groups font, fill, border, and alignment settings so you can present values consistently. Partial style updates keep any fields you do not change.

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

Number formats control how values appear as currency, percent, date, or custom display patterns when the workbook opens in Excel. The stored value stays the same; only the display pattern changes.

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

Clearing formatting removes the cell style while leaving the cell value in place. Use this when you need a plain appearance without deleting the data.

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

Rich text applies different font settings to parts of the same cell value. Use it when a single cell needs mixed emphasis, such as bold keywords inside a longer label.

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
