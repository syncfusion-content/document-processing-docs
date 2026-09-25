---
title: Formulas in JavaScript Excel Library | Syncfusion
description: Store and clear Excel formulas on cells without calculation or evaluation using the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Formulas in JavaScript Excel

The library stores formula expressions on cells and never evaluates them. External links are not resolved. When you open a file in Microsoft Excel, Excel recalculates as usual.

N> Setting `cell.value` clears any formula. Plain text that looks like a formula is never promoted to a formula when assigned through `value` or `text`.

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
// Or: sheet.cell('A3').formula = '=SUM(A1:A2)';
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').number = 10;
sheet.cell('A2').number = 20;
sheet.cell('A3').formula = 'SUM(A1:A2)';
// Or: sheet.cell('A3').formula = '=SUM(A1:A2)';
{% endhighlight %}
{% endtabs %}

## Read a formula and cached result

Formula cells keep both the expression and any last saved calculated result. The library stores these values and does not recalculate; Excel updates results when the workbook is opened.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = await Workbook.open(data);
const sheet = workbook.sheet(0);

const expression = sheet.cell('B2').formula;
const cached = sheet.cell('B2').value;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = await Workbook.open(data);
const sheet = workbook.sheet(0);

const expression = sheet.cell('B2').formula;
const cached = sheet.cell('B2').value;
{% endhighlight %}
{% endtabs %}

## Clear a formula

Clearing a formula removes the expression while keeping any cached calculated value on the cell. Use this when the stored result should remain but the formula should no longer recalculate in Excel.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').formula = 'A2+1';
sheet.cell('A1').formula = undefined;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').formula = 'A2+1';
sheet.cell('A1').formula = undefined;
{% endhighlight %}
{% endtabs %}

N> By default, assigning a new formula clears the cached calculated value so Excel recalculates when the file is opened.
