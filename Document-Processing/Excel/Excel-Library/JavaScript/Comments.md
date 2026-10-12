---
title: Comments in JavaScript Excel Library | Syncfusion
description: Add classic notes and modern threaded comments to worksheet cells with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Comments in JavaScript Excel

Comments attach notes to cells without changing the cell value. Classic notes are single-body annotations, while threaded comments support a chain of replies for review discussions.

## Classic comments (notes)

Classic comments are single-body notes attached to a cell. They are useful for short annotations such as review feedback or reminders without changing the cell value.

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

Threaded comments support a conversation of replies on a cell. Use them when multiple reviewers need to discuss the same value over time.

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
