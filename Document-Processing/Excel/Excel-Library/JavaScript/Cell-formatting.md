---
title: Cell Formatting in JavaScript Excel Library | Syncfusion
description: Apply fonts, fills, borders, alignment, number formats, and rich text with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Cell Formatting in JavaScript Excel Library

Cell formatting controls how values appear in Excel, including font, fill, borders, alignment, and number display. Apply formatting to individual cells to keep reports readable without changing the stored values.

The `numberFormat` property accepts standard Excel format codes, such as `#,##0.00`, `yyyy-mm-dd`, and `0%`. Colors in style objects use `{ rgb: 'RRGGBB' }` or theme-based color objects where supported.

N> The snippets on this page save the workbook with `await workbook.save('<file name>.xlsx')`, which requires Node.js. In a browser, call `workbook.save()` without arguments and download the returned bytes, as shown in [Getting started](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/getting-started).

## Apply a cell style

A cell style groups font, fill, border, and alignment settings so that values are presented consistently. A partial style update keeps any fields that you do not change.

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

// Save the workbook.
await workbook.save('CellStyle.xlsx');
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

// Save the workbook.
await workbook.save('CellStyle.xlsx');
{% endhighlight %}
{% endtabs %}

## Font options

The `font` object sets the typeface, size, emphasis, underline, strikethrough, color, and vertical position of the text. The `underline` property accepts `'single'`, `'double'`, `'singleAccounting'`, `'doubleAccounting'`, `'none'`, or a Boolean. The `vertAlign` property accepts `'baseline'`, `'superscript'`, and `'subscript'`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, BorderStyle } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const title = sheet.cell('A1');
title.value = 'Quarterly report';
title.style = {
  font: {
    name: 'Arial',
    size: 16,
    bold: true,
    italic: false,
    underline: 'double',
    color: { rgb: '1F3864' },
  },
};

const removed = sheet.cell('A2');
removed.value = 'Discontinued';
removed.style = {
  font: { strike: true, color: { rgb: '7F7F7F' } },
};

const footnote = sheet.cell('A3');
footnote.value = '1';
footnote.style = {
  font: { vertAlign: 'superscript' },
};

// Save the workbook.
await workbook.save('FontOptions.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, BorderStyle } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const title = sheet.cell('A1');
title.value = 'Quarterly report';
title.style = {
  font: {
    name: 'Arial',
    size: 16,
    bold: true,
    italic: false,
    underline: 'double',
    color: { rgb: '1F3864' },
  },
};

const removed = sheet.cell('A2');
removed.value = 'Discontinued';
removed.style = {
  font: { strike: true, color: { rgb: '7F7F7F' } },
};

const footnote = sheet.cell('A3');
footnote.value = '1';
footnote.style = {
  font: { vertAlign: 'superscript' },
};

// Save the workbook.
await workbook.save('FontOptions.xlsx');
{% endhighlight %}
{% endtabs %}

## Color values

A `Color` object can describe a color in several ways:

| Property | Description |
|---|---|
| `rgb` | An RGB value such as `'FF0000'`. |
| `theme` | An index from 0 to 11 into the theme color scheme. |
| `tint` | Lightens (positive) or darkens (negative) a theme or indexed color. |
| `indexed` | An index into the legacy indexed color palette. |
| `auto` | Lets the viewer choose the color. |

## Fill patterns

A fill is a pattern. Use `patternType: 'solid'` with `fgColor` for a flat color, or choose a pattern such as `'lightGrid'` or `'darkHorizontal'`, where `fgColor` is the pattern color and `bgColor` is the background color.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, BorderStyle } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const solid = sheet.cell('A1');
solid.value = 'Solid';
solid.style = {
  fill: { type: 'pattern', patternType: 'solid', fgColor: { rgb: 'FFF2CC' } },
};

const pattern = sheet.cell('A2');
pattern.value = 'Pattern';
pattern.style = {
  fill: {
    type: 'pattern',
    patternType: 'lightGrid',
    fgColor: { rgb: 'C00000' },
    bgColor: { rgb: 'FFFFFF' },
  },
};

// Save the workbook.
await workbook.save('FillPatterns.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, BorderStyle } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const solid = sheet.cell('A1');
solid.value = 'Solid';
solid.style = {
  fill: { type: 'pattern', patternType: 'solid', fgColor: { rgb: 'FFF2CC' } },
};

const pattern = sheet.cell('A2');
pattern.value = 'Pattern';
pattern.style = {
  fill: {
    type: 'pattern',
    patternType: 'lightGrid',
    fgColor: { rgb: 'C00000' },
    bgColor: { rgb: 'FFFFFF' },
  },
};

// Save the workbook.
await workbook.save('FillPatterns.xlsx');
{% endhighlight %}
{% endtabs %}

The `patternType` property accepts the following values:

| Group | Values |
|---|---|
| Flat | `none`, `solid` |
| Gray shades | `mediumGray`, `darkGray`, `lightGray`, `gray125`, `gray0625` |
| Dark patterns | `darkHorizontal`, `darkVertical`, `darkDown`, `darkUp`, `darkGrid`, `darkTrellis` |
| Light patterns | `lightHorizontal`, `lightVertical`, `lightDown`, `lightUp`, `lightGrid`, `lightTrellis` |

## Borders

The `border` object sets the `left`, `right`, `top`, and `bottom` edges and a `diagonal` line. Each edge has a `style` and a `color`. Use `diagonalUp` and `diagonalDown` to choose the direction of the diagonal line.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, BorderStyle } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Different style for each edge
const box = sheet.cell('B2');
box.value = 'Box';
box.style = {
  border: {
    left: { style: BorderStyle.Thin, color: { rgb: '000000' } },
    right: { style: BorderStyle.Thin, color: { rgb: '000000' } },
    top: { style: BorderStyle.Thick, color: { rgb: '1F3864' } },
    bottom: { style: BorderStyle.Double, color: { rgb: '1F3864' } },
  },
};

// Diagonal line from the bottom-left to the top-right corner
const crossed = sheet.cell('B4');
crossed.value = 'Crossed';
crossed.style = {
  border: {
    diagonal: { style: BorderStyle.Dashed, color: { rgb: 'C00000' } },
    diagonalUp: true,
  },
};

// Save the workbook.
await workbook.save('Borders.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, BorderStyle } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Different style for each edge
const box = sheet.cell('B2');
box.value = 'Box';
box.style = {
  border: {
    left: { style: BorderStyle.Thin, color: { rgb: '000000' } },
    right: { style: BorderStyle.Thin, color: { rgb: '000000' } },
    top: { style: BorderStyle.Thick, color: { rgb: '1F3864' } },
    bottom: { style: BorderStyle.Double, color: { rgb: '1F3864' } },
  },
};

// Diagonal line from the bottom-left to the top-right corner
const crossed = sheet.cell('B4');
crossed.value = 'Crossed';
crossed.style = {
  border: {
    diagonal: { style: BorderStyle.Dashed, color: { rgb: 'C00000' } },
    diagonalUp: true,
  },
};

// Save the workbook.
await workbook.save('Borders.xlsx');
{% endhighlight %}
{% endtabs %}

The `BorderStyle` object has the following members: `None`, `Thin`, `Medium`, `Thick`, `Double`, `Hair`, `Dashed`, `Dotted`, `MediumDashed`, `DashDot`, `MediumDashDot`, `DashDotDot`, `MediumDashDotDot`, and `SlantDashDot`.

## Alignment

The `alignment` object controls how text sits inside the cell: horizontal and vertical alignment, wrapping, indent, rotation, shrinking, and reading direction.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, BorderStyle } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const cell = sheet.cell('B2');
cell.value = 'A long heading that needs several lines';

cell.style = {
  alignment: {
    horizontal: 'center',
    vertical: 'top',
    wrapText: true,
    indent: 1,
    textRotation: 0, // degrees; use 255 for vertical stacked text
    shrinkToFit: false,
    readingOrder: 1, // 0 default, 1 left to right, 2 right to left
  },
};

// Save the workbook.
await workbook.save('Alignment.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, BorderStyle } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const cell = sheet.cell('B2');
cell.value = 'A long heading that needs several lines';

cell.style = {
  alignment: {
    horizontal: 'center',
    vertical: 'top',
    wrapText: true,
    indent: 1,
    textRotation: 0, // degrees; use 255 for vertical stacked text
    shrinkToFit: false,
    readingOrder: 1, // 0 default, 1 left to right, 2 right to left
  },
};

// Save the workbook.
await workbook.save('Alignment.xlsx');
{% endhighlight %}
{% endtabs %}

| Property | Values |
|---|---|
| `horizontal` | `general`, `left`, `center`, `right`, `fill`, `justify`, `centerContinuous`, `distributed` |
| `vertical` | `top`, `center`, `bottom`, `justify`, `distributed` |

## Cell protection

The `protection` object sets whether a cell is locked or its formula is hidden. These settings take effect only when the worksheet is protected. See [Worksheet and workbook protection](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/worksheet-and-workbook-protection) for details.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, BorderStyle } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// An input cell that users can edit on a protected sheet
const input = sheet.cell('B2');
input.value = 'Editable';
input.style = { protection: { locked: false } };

// A formula cell that is locked and hides its formula
const total = sheet.cell('B3');
total.formula = 'SUM(B1:B2)';
total.style = { protection: { locked: true, hidden: true } };

// Save the workbook.
await workbook.save('CellProtection.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, BorderStyle } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// An input cell that users can edit on a protected sheet
const input = sheet.cell('B2');
input.value = 'Editable';
input.style = { protection: { locked: false } };

// A formula cell that is locked and hides its formula
const total = sheet.cell('B3');
total.formula = 'SUM(B1:B2)';
total.style = { protection: { locked: true, hidden: true } };

// Save the workbook.
await workbook.save('CellProtection.xlsx');
{% endhighlight %}
{% endtabs %}

## Number formats

Number formats control how values appear as currency, percentages, dates, or custom patterns when the workbook is opened in Excel. The stored value stays the same; only the display pattern changes.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').number = 1234.5;
sheet.cell('A1').numberFormat = '#,##0.00';

sheet.cell('B1').dateTime = new Date(2026, 0, 15);
sheet.cell('B1').numberFormat = 'yyyy-mm-dd';

// Save the workbook.
await workbook.save('NumberFormats.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').number = 1234.5;
sheet.cell('A1').numberFormat = '#,##0.00';

sheet.cell('B1').dateTime = new Date(2026, 0, 15);
sheet.cell('B1').numberFormat = 'yyyy-mm-dd';

// Save the workbook.
await workbook.save('NumberFormats.xlsx');
{% endhighlight %}
{% endtabs %}

## Common number format codes

Set `numberFormat` to a format code to control how numbers, dates, and times are displayed. The cell keeps the original value.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').number = 1234.5;
sheet.cell('A1').numberFormat = '$#,##0.00'; // currency

sheet.cell('A2').number = 0.256;
sheet.cell('A2').numberFormat = '0.0%'; // percentage

sheet.cell('A3').dateTime = new Date(2026, 0, 15, 14, 30);
sheet.cell('A3').numberFormat = 'dddd, mmmm d, yyyy'; // long date

sheet.cell('A4').dateTime = new Date(2026, 0, 15, 14, 30);
sheet.cell('A4').numberFormat = 'h:mm AM/PM'; // time

sheet.cell('A5').number = 12345678;
sheet.cell('A5').numberFormat = '0.00E+00'; // scientific

sheet.cell('A6').number = 42;
sheet.cell('A6').numberFormat = '000000'; // leading zeros

sheet.cell('A7').number = 0.75;
sheet.cell('A7').numberFormat = '# ?/?'; // fraction

// Save the workbook.
await workbook.save('NumberFormatCodes.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').number = 1234.5;
sheet.cell('A1').numberFormat = '$#,##0.00'; // currency

sheet.cell('A2').number = 0.256;
sheet.cell('A2').numberFormat = '0.0%'; // percentage

sheet.cell('A3').dateTime = new Date(2026, 0, 15, 14, 30);
sheet.cell('A3').numberFormat = 'dddd, mmmm d, yyyy'; // long date

sheet.cell('A4').dateTime = new Date(2026, 0, 15, 14, 30);
sheet.cell('A4').numberFormat = 'h:mm AM/PM'; // time

sheet.cell('A5').number = 12345678;
sheet.cell('A5').numberFormat = '0.00E+00'; // scientific

sheet.cell('A6').number = 42;
sheet.cell('A6').numberFormat = '000000'; // leading zeros

sheet.cell('A7').number = 0.75;
sheet.cell('A7').numberFormat = '# ?/?'; // fraction

// Save the workbook.
await workbook.save('NumberFormatCodes.xlsx');
{% endhighlight %}
{% endtabs %}

| Display | Format code | Example result |
|---|---|---|
| Number with thousands separator | `#,##0.00` | 1,234.50 |
| Currency | `$#,##0.00` | $1,234.50 |
| Percentage | `0.0%` | 25.6% |
| Short date | `yyyy-mm-dd` | 2026-01-15 |
| Long date | `dddd, mmmm d, yyyy` | Thursday, January 15, 2026 |
| Time | `h:mm AM/PM` | 2:30 PM |
| Scientific | `0.00E+00` | 1.23E+07 |
| Leading zeros | `000000` | 000042 |
| Fraction | `# ?/?` | 3/4 |
| Text | `@` | Displays the value as text |

## Clear cell formatting

Clearing formatting removes the cell style and keeps the cell value. Use this when you need a plain appearance without deleting the data.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Total';
sheet.cell('A1').style = { font: { bold: true } };

// Remove the style. The value is retained.
sheet.cell('A1').style = undefined;

// Save the workbook.
await workbook.save('ClearFormatting.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Total';
sheet.cell('A1').style = { font: { bold: true } };

// Remove the style. The value is retained.
sheet.cell('A1').style = undefined;

// Save the workbook.
await workbook.save('ClearFormatting.xlsx');
{% endhighlight %}
{% endtabs %}

## Rich text

Rich text applies different font settings to parts of the same cell value. Use it when a single cell needs mixed emphasis, such as bold keywords inside a longer label. The `characters(start, end)` method uses zero-based indexes, and both indexes are inclusive.

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
cell.richText.characters(0, 4).font = bold;

// Save the workbook.
await workbook.save('RichText.xlsx');
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
cell.richText.characters(0, 4).font = bold;

// Save the workbook.
await workbook.save('RichText.xlsx');
{% endhighlight %}
{% endtabs %}

N> `createFont()` builds a rich-text run font. It does not insert a shared style-table font entry by itself.
