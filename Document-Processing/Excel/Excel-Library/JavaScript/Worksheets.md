---
title: Worksheets in JavaScript Excel Library | Syncfusion
description: Add, remove, move, rename, and configure worksheets in a workbook with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Worksheets in JavaScript Excel

Worksheets are the tabs inside a workbook where cells, charts, and other content live. You can open a sheet by order or name, list every sheet, and change tab order as the workbook structure grows.

## Access worksheets

Worksheets can be opened by tab order or by name so you can target the correct sheet for reading or editing. Listing worksheets shows every sheet currently in the workbook.

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

## Add, remove, and reorder sheets

You can add new worksheets, reorder tabs, and remove sheets you no longer need. A workbook must always keep at least one worksheet.

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

Renaming a worksheet updates the tab caption users see in Excel. Names must be unique in the workbook and follow Excel sheet-naming rules.

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

Visibility and view settings control whether a sheet tab is shown and how the grid appears while editing. Gridlines, headers, zero display, layout direction, and zoom shape the on-screen experience without changing cell data.

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

Column width and row height control how much space each column and row occupies on the sheet. Width uses Excel character units and height uses points; changing size does not create cell content by itself.

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

## Freeze rows and columns

Freezing rows or columns keeps selected worksheet areas visible while the remaining content is scrolled. This is useful for keeping headings or labels visible in large worksheets.

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
