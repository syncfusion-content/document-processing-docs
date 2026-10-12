---
title: Named Ranges in JavaScript Excel Library | Syncfusion
description: Add, look up, update, and remove defined names (named ranges) with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Named Ranges in JavaScript Excel

Named ranges and named formulas give friendly labels to cell areas or expressions. Names make formulas easier to read and can be scoped to the whole workbook or to one worksheet.

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
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
workbook.names.add('LocalTotal', 'Sheet1!$C$1', 0);
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
// workbook.names.clear();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
workbook.names.add('TaxRate', 'Sheet1!$B$1');

const entry = workbook.names.get('TaxRate');
const all = workbook.names.list();

workbook.names.remove('TaxRate');
// workbook.names.clear();
{% endhighlight %}
{% endtabs %}
