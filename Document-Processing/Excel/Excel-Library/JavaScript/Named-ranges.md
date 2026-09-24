---
title: Named Ranges in JavaScript Excel Library | Syncfusion
description: Add, look up, update, and remove defined names (named ranges) with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Named Ranges in JavaScript Excel

Defined names (named ranges and named formulas) are available on `workbook.names`.

## Add a workbook-scoped name

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

Pass the zero-based sheet index as the third argument to scope a name to one worksheet.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
workbook.names.add('LocalTotal', 'Sheet1!$C$1', 0);
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
workbook.names.add('LocalTotal', 'Sheet1!$C$1', 0);
{% endhighlight %}
{% endtabs %}

## Look up and remove names

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
