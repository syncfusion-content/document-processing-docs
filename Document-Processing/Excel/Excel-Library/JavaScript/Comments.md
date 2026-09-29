---
title: Comments in JavaScript Excel Library | Syncfusion
description: Add classic notes and modern threaded comments to worksheet cells with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Comments in JavaScript Excel

Classic Excel notes use `cell.comment` / `addComment`. Modern threaded comments use `threadedComment` / `addThreadedComment`.

## Classic comments (notes)

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
const cell = sheet.cell('A1');
cell.value = 'Reviewed';

const note = cell.addComment('Please verify totals.');
note.author = 'Analyst';

// Or assign through the property
// cell.comment = { text: 'Note text', author: 'Analyst' };

cell.removeComment();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const cell = sheet.cell('A1');
cell.value = 'Reviewed';

const note = cell.addComment('Please verify totals.');
note.author = 'Analyst';

// Or assign through the property
// cell.comment = { text: 'Note text', author: 'Analyst' };

cell.removeComment();
{% endhighlight %}
{% endtabs %}

## Threaded comments

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
const cell = sheet.cell('B2');

const thread = cell.addThreadedComment('Looks good for Q1.');
// Configure the returned ThreadedComment as needed for your scenario

const existing = cell.threadedComment;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const cell = sheet.cell('B2');

const thread = cell.addThreadedComment('Looks good for Q1.');
// Configure the returned ThreadedComment as needed for your scenario

const existing = cell.threadedComment;
{% endhighlight %}
{% endtabs %}

N> Classic comments and threaded comments are separate models. Prefer one style per cell for a clear authoring experience.
