---
title: Formulas in JavaScript Excel Library | Syncfusion
description: Store and clear Excel formulas on cells without calculation or evaluation using the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Formulas in JavaScript Excel Library

The library stores formula expressions on cells and never evaluates them. External links are not resolved. When you open a file in Microsoft Excel, Excel recalculates as usual.

N> Setting `cell.value` clears any formula. Plain text that looks like a formula is never promoted to a formula when assigned through `value` or `text`.

N> The snippets on this page save the workbook with `await workbook.save('<file name>.xlsx')`, which requires Node.js. In a browser, call `workbook.save()` without arguments and download the returned bytes, as shown in [Getting started](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/getting-started).

## Set a formula

A formula stores a calculation expression on a cell so Excel can evaluate it when the file opens. A leading equals sign is optional and is normalized when the expression is saved.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').number = 10;
sheet.cell('A2').number = 20;
sheet.cell('A3').formula = 'SUM(A1:A2)';

// Save the workbook.
await workbook.save('SetAFormula.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').number = 10;
sheet.cell('A2').number = 20;
sheet.cell('A3').formula = 'SUM(A1:A2)';

// Save the workbook.
await workbook.save('SetAFormula.xlsx');
{% endhighlight %}
{% endtabs %}

## Read a formula and cached result

Formula cells keep both the expression and any last saved calculated result. The library stores these values and does not recalculate; Excel updates results when the workbook is opened.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFile } from 'node:fs/promises';
import { Workbook } from '@syncfusion/ej2-xlsx';

const data = await readFile('./data/Input.xlsx');
const workbook: Workbook = await Workbook.open(data);
const sheet = workbook.sheet(0);

const expression = sheet.cell('B2').formula;
const cached = sheet.cell('B2').value;

// Save the workbook.
await workbook.save('ReadAFormulaAndCachedResult.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { readFile } from 'node:fs/promises';
import { Workbook } from '@syncfusion/ej2-xlsx';

const data = await readFile('./data/Input.xlsx');
const workbook = await Workbook.open(data);
const sheet = workbook.sheet(0);

const expression = sheet.cell('B2').formula;
const cached = sheet.cell('B2').value;

// Save the workbook.
await workbook.save('ReadAFormulaAndCachedResult.xlsx');
{% endhighlight %}
{% endtabs %}

## Formulas that use other sheets and names

A formula can refer to cells on other worksheets and to defined names. Quote a sheet name that contains spaces or special characters.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sales = workbook.sheet(0);
sales.name = 'Sales';
sales.cell('A1').number = 120;
sales.cell('A2').number = 80;

const summary = workbook.addSheet('Q1 Summary');
workbook.names.add('SalesRange', 'Sales!$A$1:$A$2');

// Cell on another sheet
summary.cell('A1').formula = 'Sales!A1+Sales!A2';

// Defined name
summary.cell('A2').formula = 'SUM(SalesRange)';

// Sheet name with a space needs quotes
sales.cell('C1').formula = "'Q1 Summary'!A1*2";

// Save the workbook.
await workbook.save('FormulasAcrossSheets.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sales = workbook.sheet(0);
sales.name = 'Sales';
sales.cell('A1').number = 120;
sales.cell('A2').number = 80;

const summary = workbook.addSheet('Q1 Summary');
workbook.names.add('SalesRange', 'Sales!$A$1:$A$2');

// Cell on another sheet
summary.cell('A1').formula = 'Sales!A1+Sales!A2';

// Defined name
summary.cell('A2').formula = 'SUM(SalesRange)';

// Sheet name with a space needs quotes
sales.cell('C1').formula = "'Q1 Summary'!A1*2";

// Save the workbook.
await workbook.save('FormulasAcrossSheets.xlsx');
{% endhighlight %}
{% endtabs %}

## Array formulas

An array formula calculates over a range of cells. Use `setFormula` with `type: 'array'` and pass the range that the formula fills in `ref`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').number = 1;
sheet.cell('A2').number = 2;
sheet.cell('A3').number = 3;
sheet.cell('B1').number = 10;
sheet.cell('B2').number = 20;
sheet.cell('B3').number = 30;

// Multiply the two columns and sum the result in one cell
sheet.cell('D1').setFormula('SUM(A1:A3*B1:B3)', { type: 'array', ref: 'D1' });

// Save the workbook.
await workbook.save('ArrayFormulas.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').number = 1;
sheet.cell('A2').number = 2;
sheet.cell('A3').number = 3;
sheet.cell('B1').number = 10;
sheet.cell('B2').number = 20;
sheet.cell('B3').number = 30;

// Multiply the two columns and sum the result in one cell
sheet.cell('D1').setFormula('SUM(A1:A3*B1:B3)', { type: 'array', ref: 'D1' });

// Save the workbook.
await workbook.save('ArrayFormulas.xlsx');
{% endhighlight %}
{% endtabs %}

## Formula options and cached values

By default, setting a formula clears the cached calculated value so that Excel recalculates it when the file opens. Pass `clearCachedValue: false` to keep an existing cached value, and use `getFormula()` to read the formula type and range.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').number = 5;
sheet.cell('B1').setFormula('A1*2', { clearCachedValue: false });

// Read the formula details
const details = sheet.cell('B1').getFormula();
const expression = details ? details.expression : undefined;
const type = details ? details.type : undefined; // 'normal'

// Remove the formula and keep the cached value
// Remove the formula and the cached value

// Save the workbook.
await workbook.save('FormulaOptions.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').number = 5;
sheet.cell('B1').setFormula('A1*2', { clearCachedValue: false });

// Read the formula details
const details = sheet.cell('B1').getFormula();
const expression = details ? details.expression : undefined;
const type = details ? details.type : undefined; // 'normal'

// Remove the formula and keep the cached value
// Remove the formula and the cached value

// Save the workbook.
await workbook.save('FormulaOptions.xlsx');
{% endhighlight %}
{% endtabs %}

The formula `type` is one of `normal`, `array`, `shared`, or `dataTable`.

## Clear a formula

Clearing a formula removes the expression while keeping any cached calculated value on the cell. Use this when the stored result should remain but the formula should no longer recalculate in Excel.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').formula = 'A2+1';
sheet.cell('A1').formula = undefined;

// Save the workbook.
await workbook.save('ClearAFormula.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').formula = 'A2+1';
sheet.cell('A1').formula = undefined;

// Save the workbook.
await workbook.save('ClearAFormula.xlsx');
{% endhighlight %}
{% endtabs %}

N> By default, assigning a new formula clears the cached calculated value so Excel recalculates when the file is opened.
