---
title: Named Ranges in JavaScript Excel Library | Syncfusion
description: Add, look up, update, and remove defined names (named ranges) with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Named Ranges in JavaScript Excel Library

Named ranges and named formulas give friendly labels to cell areas or expressions. Names make formulas easier to read and can be scoped to the whole workbook or to one worksheet.

N> The snippets on this page save the workbook with `await workbook.save('<file name>.xlsx')`, which requires Node.js. In a browser, call `workbook.save()` without arguments and download the returned bytes, as shown in [Getting started](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/getting-started).

## Add a workbook-scoped name

A workbook-scoped name is a friendly label for a range or formula that every sheet can use. Named references make formulas easier to read and maintain than raw cell addresses.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
sheet.name = 'Sales';
sheet.cell('A1').number = 100;

// Leading '=' on content is optional
workbook.names.add('TaxRate', 'Sales!$B$1');
workbook.names.add('SalesData', 'Sales!$A$1:$A$10');

// Save the workbook.
await workbook.save('AddAWorkbookScopedName.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
sheet.name = 'Sales';
sheet.cell('A1').number = 100;

// Leading '=' on content is optional
workbook.names.add('TaxRate', 'Sales!$B$1');
workbook.names.add('SalesData', 'Sales!$A$1:$A$10');

// Save the workbook.
await workbook.save('AddAWorkbookScopedName.xlsx');
{% endhighlight %}
{% endtabs %}

## Sheet-scoped names

A sheet-scoped name belongs to one worksheet only. Use it when the same label should mean different ranges on different sheets.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
// Third argument: zero-based sheet index for sheet-scoped names
workbook.names.add('LocalTotal', 'Sheet1!$C$1', 0);

// Save the workbook.
await workbook.save('SheetScopedNames.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
workbook.names.add('LocalTotal', 'Sheet1!$C$1', 0);

// Save the workbook.
await workbook.save('SheetScopedNames.xlsx');
{% endhighlight %}
{% endtabs %}

## Named constants and formulas

A name can refer to a constant value or to a formula, not only to a range. Use a named constant for a value that several formulas share, such as a tax rate.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Named constant
workbook.names.add('TaxRate', '0.2');

// Named formula
workbook.names.add('CurrentYear', 'YEAR(TODAY())');

// Use the names in cell formulas
sheet.cell('A1').number = 100;
sheet.cell('B1').formula = 'A1*(1+TaxRate)';
sheet.cell('C1').formula = 'CurrentYear';

// Save the workbook.
await workbook.save('NamedConstantsAndFormulas.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Named constant
workbook.names.add('TaxRate', '0.2');

// Named formula
workbook.names.add('CurrentYear', 'YEAR(TODAY())');

// Use the names in cell formulas
sheet.cell('A1').number = 100;
sheet.cell('B1').formula = 'A1*(1+TaxRate)';
sheet.cell('C1').formula = 'CurrentYear';

// Save the workbook.
await workbook.save('NamedConstantsAndFormulas.xlsx');
{% endhighlight %}
{% endtabs %}

## Use a name in a formula

After you define a name for a range, use it in formulas in place of the cell address.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
sheet.name = 'Sales';

sheet.cell('A1').number = 10;
sheet.cell('A2').number = 20;
sheet.cell('A3').number = 30;

workbook.names.add('SalesData', 'Sales!$A$1:$A$3');

sheet.cell('B1').formula = 'SUM(SalesData)';
sheet.cell('B2').formula = 'AVERAGE(SalesData)';

// Save the workbook.
await workbook.save('UseNameInFormula.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
sheet.name = 'Sales';

sheet.cell('A1').number = 10;
sheet.cell('A2').number = 20;
sheet.cell('A3').number = 30;

workbook.names.add('SalesData', 'Sales!$A$1:$A$3');

sheet.cell('B1').formula = 'SUM(SalesData)';
sheet.cell('B2').formula = 'AVERAGE(SalesData)';

// Save the workbook.
await workbook.save('UseNameInFormula.xlsx');
{% endhighlight %}
{% endtabs %}

## Hidden names and sheet-scoped lookups

Pass `true` as the fourth argument to hide a name from Excel's Name Manager. Pass the zero-based sheet index to `get` or `remove` to work with a sheet-scoped name. Omit the index for a workbook-wide name.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const second = workbook.addSheet('Summary');

// Arguments: name, content, sheetIndex, hidden
workbook.names.add('InternalFlag', 'Sheet1!$Z$1', undefined, true);
workbook.names.add('Total', 'Summary!$B$10', 1);

// Workbook-wide name
const flag = workbook.names.get('InternalFlag');

// Name that belongs to the second sheet (index 1)
const total = workbook.names.get('Total', 1);
const hidden = flag ? flag.hidden : undefined;

// Remove returns true when a name was removed

// Save the workbook.
await workbook.save('HiddenAndScopedNames.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const second = workbook.addSheet('Summary');

// Arguments: name, content, sheetIndex, hidden
workbook.names.add('InternalFlag', 'Sheet1!$Z$1', undefined, true);
workbook.names.add('Total', 'Summary!$B$10', 1);

// Workbook-wide name
const flag = workbook.names.get('InternalFlag');

// Name that belongs to the second sheet (index 1)
const total = workbook.names.get('Total', 1);
const hidden = flag ? flag.hidden : undefined;

// Remove returns true when a name was removed

// Save the workbook.
await workbook.save('HiddenAndScopedNames.xlsx');
{% endhighlight %}
{% endtabs %}

## Look up and remove names

After names are defined, you can look them up, list every definition, or remove outdated entries so name references stay accurate across the workbook.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
workbook.names.add('TaxRate', 'Sheet1!$B$1');

const entry = workbook.names.get('TaxRate');
const all = workbook.names.list();

workbook.names.remove('TaxRate');

// Save the workbook.
await workbook.save('LookUpAndRemoveNames.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
workbook.names.add('TaxRate', 'Sheet1!$B$1');

const entry = workbook.names.get('TaxRate');
const all = workbook.names.list();

workbook.names.remove('TaxRate');

// Save the workbook.
await workbook.save('LookUpAndRemoveNames.xlsx');
{% endhighlight %}
{% endtabs %}
