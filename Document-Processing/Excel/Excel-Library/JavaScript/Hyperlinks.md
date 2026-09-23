---
title: Hyperlinks in JavaScript Excel Library | Syncfusion
description: Add URL, file, UNC, and workbook hyperlinks to cells and manage sheet-level links with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Hyperlinks in JavaScript Excel

Attach a hyperlink to a cell with `cell.hyperlink`, or manage sheet-level links through `sheet.hyperlinks`.

`HyperlinkType` is `'url' | 'file' | 'unc' | 'workbook'`. There is no separate `'email'` type — use a `mailto:` address with `type: 'url'`.

## URL hyperlink

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
const cell = sheet.cell('A1');

cell.value = 'Syncfusion';
cell.hyperlink = {
  target: 'https://www.syncfusion.com',
  label: 'Syncfusion',
  tooltip: 'Open website',
  type: 'url',
};
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const cell = sheet.cell('A1');

cell.value = 'Syncfusion';
cell.hyperlink = {
  target: 'https://www.syncfusion.com',
  label: 'Syncfusion',
  tooltip: 'Open website',
  type: 'url',
};
{% endhighlight %}
{% endtabs %}

## Email, file, and UNC links

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Email uses type 'url' with a mailto: target
sheet.cell('A2').hyperlink = {
  target: 'mailto:support@example.com',
  type: 'url',
};

sheet.cell('A3').hyperlink = {
  target: 'file:///C:/Reports/Q1.xlsx',
  type: 'file',
};

sheet.cell('A5').hyperlink = {
  target: '\\\\server\\share\\report.xlsx',
  type: 'unc',
};
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A2').hyperlink = {
  target: 'mailto:support@example.com',
  type: 'url',
};

sheet.cell('A3').hyperlink = {
  target: 'file:///C:/Reports/Q1.xlsx',
  type: 'file',
};

sheet.cell('A5').hyperlink = {
  target: '\\\\server\\share\\report.xlsx',
  type: 'unc',
};
{% endhighlight %}
{% endtabs %}

## Internal workbook link

Use `type: 'workbook'` with `subAddress` (for example `Sheet1!A10`) for navigation inside the same workbook. Do not use a UNC-style link for in-workbook locations.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A4').value = 'Go to summary';
sheet.cell('A4').hyperlink = {
  target: '',
  subAddress: 'Sheet1!A10',
  type: 'workbook',
};
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A4').value = 'Go to summary';
sheet.cell('A4').hyperlink = {
  target: '',
  subAddress: 'Sheet1!A10',
  type: 'workbook',
};
{% endhighlight %}
{% endtabs %}

You can also add links through the collection:

```ts
sheet.hyperlinks.add('A6', 'https://example.com', 'Example', 'Open site', 'url');
```

## Remove a hyperlink

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').hyperlink = undefined;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').hyperlink = undefined;
{% endhighlight %}
{% endtabs %}
