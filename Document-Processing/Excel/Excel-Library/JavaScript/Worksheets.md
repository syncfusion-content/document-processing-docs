---
title: Worksheets in JavaScript Excel Library | Syncfusion
description: Add, remove, move, and configure worksheets with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Worksheets in JavaScript Excel

Worksheets are managed through `Workbook`. Access sheets by zero-based index or name with `sheet()`, list them with `worksheets`, and change tab order with `moveSheet`.

## Access worksheets

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();

// By index (zero-based)
const first = workbook.sheet(0);

// By name (not case sensitive)
const same = workbook.sheet('Sheet1');

// Snapshot of all sheets in tab order
const all = workbook.worksheets;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();

// By index (zero-based)
const first = workbook.sheet(0);

// By name (not case sensitive)
const same = workbook.sheet('Sheet1');

// Snapshot of all sheets in tab order
const all = workbook.worksheets;
{% endhighlight %}
{% endtabs %}

## Add, remove, and move sheets

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();

// Add with an explicit name, or omit the name for Sheet2, Sheet3, …
const sales = workbook.addSheet('Sales');
const summary = workbook.addSheet();

// Move tab order (zero-based fromIndex, toIndex)
workbook.moveSheet(0, 1);

// Remove a sheet (the last remaining sheet cannot be removed)
workbook.removeSheet(summary);
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();

// Add with an explicit name, or omit the name for Sheet2, Sheet3, …
const sales = workbook.addSheet('Sales');
const summary = workbook.addSheet();

// Move tab order (zero-based fromIndex, toIndex)
workbook.moveSheet(0, 1);

// Remove a sheet (the last remaining sheet cannot be removed)
workbook.removeSheet(summary);
{% endhighlight %}
{% endtabs %}

N> A workbook must always keep at least one worksheet. Removing the last sheet throws an error.

## Rename a worksheet

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
sheet.name = 'January';
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
sheet.name = 'January';
{% endhighlight %}
{% endtabs %}

## Visibility and view settings

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Hide the sheet tab (loaded "very hidden" sheets report false until you set visibility)
sheet.visibility = false;

sheet.isGridLinesVisible = false;
sheet.isRowColumnHeadersVisible = true;
sheet.isDisplayZeros = false;
sheet.isRightToLeft = false;
sheet.zoom = 125;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Hide the sheet tab (loaded "very hidden" sheets report false until you set visibility)
sheet.visibility = false;

sheet.isGridLinesVisible = false;
sheet.isRowColumnHeadersVisible = true;
sheet.isDisplayZeros = false;
sheet.isRightToLeft = false;
sheet.zoom = 125;
{% endhighlight %}
{% endtabs %}

## Column width and row height

Column width uses Excel character units. Row height uses points. Setting width or height does not create cells.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// 1-based column index: 1 = column A
sheet.setColumnWidth(1, 18);
const width = sheet.getColumnWidth(1);

// 1-based row index
sheet.setRowHeight(1, 22);
const height = sheet.getRowHeight(1);
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// 1-based column index: 1 = column A
sheet.setColumnWidth(1, 18);
const width = sheet.getColumnWidth(1);

// 1-based row index
sheet.setRowHeight(1, 22);
const height = sheet.getRowHeight(1);
{% endhighlight %}
{% endtabs %}

## Freeze panes

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Freeze so rows above and columns left of the anchor stay fixed
sheet.freeze.freezeAt('B2');

// Or set frozen row/column counts
sheet.freeze.freezePanes({ rows: 1, columns: 1 });

// Clear freeze
sheet.freeze.unfreeze();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Freeze so rows above and columns left of the anchor stay fixed
sheet.freeze.freezeAt('B2');

// Or set frozen row/column counts
sheet.freeze.freezePanes({ rows: 1, columns: 1 });

// Clear freeze
sheet.freeze.unfreeze();
{% endhighlight %}
{% endtabs %}
