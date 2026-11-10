---
title: Comments in JavaScript Excel Library | Syncfusion
description: Add classic notes and modern threaded comments to worksheet cells with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Comments in JavaScript Excel Library

Comments attach notes to cells without changing the cell value. Classic notes are single-body annotations, while threaded comments support a chain of replies for review discussions.

N> The snippets on this page save the workbook with `await workbook.save('<file name>.xlsx')`, which requires Node.js. In a browser, call `workbook.save()` without arguments and download the returned bytes, as shown in [Getting started](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/getting-started).

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

// Save the workbook.
await workbook.save('ClassicComments.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const cell = sheet.cell('A1');
cell.value = 'Reviewed';

const note = cell.addComment('Please verify totals.');
note.author = 'Analyst';

// Save the workbook.
await workbook.save('ClassicComments.xlsx');
{% endhighlight %}
{% endtabs %}

## Comment size and visibility

A classic comment is hidden until the user points to the cell. Set `isVisible` to show it all the time, and set the width and height of the comment box.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const cell = sheet.cell('B2');
cell.value = 'Budget';

const note = cell.addComment('Confirm with finance.');
note.author = 'Analyst';
note.isVisible = true;
note.width = 220;
note.height = 90;

// Save the workbook.
await workbook.save('CommentSizeAndVisibility.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const cell = sheet.cell('B2');
cell.value = 'Budget';

const note = cell.addComment('Confirm with finance.');
note.author = 'Analyst';
note.isVisible = true;
note.width = 220;
note.height = 90;

// Save the workbook.
await workbook.save('CommentSizeAndVisibility.xlsx');
{% endhighlight %}
{% endtabs %}

## Add and find comments on a worksheet

You can also add comments through the worksheet. Identify the cell with `ref` or with `row` and `column`. Then look up comments by address, check whether a cell has a comment, and loop over all comments.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Identify the cell by address
sheet.addComment({ ref: 'A1', text: 'Check the total.', author: 'Ana' });

// Or by 1-based row and column
sheet.addComment({ row: 3, column: 2, text: 'Needs approval.', author: 'Ben' });

const hasNote = sheet.hasComment('A1');
const note = sheet.getComment('B3');
const count = sheet.comments.length;

for (const comment of sheet.comments) {
  console.log(comment.address, comment.author, comment.text);
}

// Remove a comment by reference, address, or index

// Save the workbook.
await workbook.save('WorksheetComments.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Identify the cell by address
sheet.addComment({ ref: 'A1', text: 'Check the total.', author: 'Ana' });

// Or by 1-based row and column
sheet.addComment({ row: 3, column: 2, text: 'Needs approval.', author: 'Ben' });

const hasNote = sheet.hasComment('A1');
const note = sheet.getComment('B3');
const count = sheet.comments.length;

for (const comment of sheet.comments) {
  console.log(comment.address, comment.author, comment.text);
}

// Remove a comment by reference, address, or index

// Save the workbook.
await workbook.save('WorksheetComments.xlsx');
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

const existing = cell.threadedComment;

// Save the workbook.
await workbook.save('ThreadedComments.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const cell = sheet.cell('B2');

const thread = cell.addThreadedComment('Looks good for Q1.');

const existing = cell.threadedComment;

// Save the workbook.
await workbook.save('ThreadedComments.xlsx');
{% endhighlight %}
{% endtabs %}

N> Classic comments and threaded comments are separate models. Prefer one style per cell for a clear authoring experience.

## Threaded replies and resolution

A threaded comment can have replies and can be marked as resolved. Pass the author when you add a comment or a reply.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const cell = sheet.cell('B2');
cell.value = 'Q1 total';

const thread = cell.addThreadedComment('Does this include returns?', 'Ana');
thread.addReply('Yes, returns are included.', 'Ben');
thread.addReply('Thanks, resolving.', 'Ana');
thread.isResolved = true;

const replies = thread.replies.length;

// Save the workbook.
await workbook.save('ThreadedReplies.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const cell = sheet.cell('B2');
cell.value = 'Q1 total';

const thread = cell.addThreadedComment('Does this include returns?', 'Ana');
thread.addReply('Yes, returns are included.', 'Ben');
thread.addReply('Thanks, resolving.', 'Ana');
thread.isResolved = true;

const replies = thread.replies.length;

// Save the workbook.
await workbook.save('ThreadedReplies.xlsx');
{% endhighlight %}
{% endtabs %}

## Manage threaded comments

List the threaded comments on a worksheet, read a thread from a cell, and remove one thread or all threads.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').addThreadedComment('First thread', 'Ana');
sheet.cell('B2').addThreadedComment('Second thread', 'Ben');

const count = sheet.threadedComments.length;
const thread = sheet.cell('B2').threadedComment;

// Remove one thread by reference or by zero-based index
sheet.removeThreadedComment(0);

// Remove every thread

// Save the workbook.
await workbook.save('ManageThreadedComments.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').addThreadedComment('First thread', 'Ana');
sheet.cell('B2').addThreadedComment('Second thread', 'Ben');

const count = sheet.threadedComments.length;
const thread = sheet.cell('B2').threadedComment;

// Remove one thread by reference or by zero-based index
sheet.removeThreadedComment(0);

// Remove every thread

// Save the workbook.
await workbook.save('ManageThreadedComments.xlsx');
{% endhighlight %}
{% endtabs %}
