---
title: Worksheets in JavaScript Excel Library | Syncfusion
description: Add, remove, move, rename, and configure worksheets in a workbook with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Worksheets in JavaScript Excel Library

Worksheets are the tabs inside a workbook where cells, charts, and other content live. You can open a sheet by order or name, list every sheet, and change tab order as the workbook structure grows.

N> The snippets on this page save the workbook with `await workbook.save('<file name>.xlsx')`, which requires Node.js. In a browser, call `workbook.save()` without arguments and download the returned bytes, as shown in [Getting started](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/getting-started).

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

// Save the workbook.
await workbook.save('AccessWorksheets.xlsx');
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

// Save the workbook.
await workbook.save('AccessWorksheets.xlsx');
{% endhighlight %}
{% endtabs %}

## Add, remove, and reorder sheets

You can add new worksheets, reorder tabs, and remove sheets you no longer need.

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

// Save the workbook.
await workbook.save('AddRemoveAndReorderSheets.xlsx');
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

// Save the workbook.
await workbook.save('AddRemoveAndReorderSheets.xlsx');
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

// Save the workbook.
await workbook.save('RenameAWorksheet.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
sheet.name = 'January';

// Save the workbook.
await workbook.save('RenameAWorksheet.xlsx');
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

// Save the workbook.
await workbook.save('VisibilityAndViewSettings.xlsx');
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

// Save the workbook.
await workbook.save('VisibilityAndViewSettings.xlsx');
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

// Save the workbook.
await workbook.save('ColumnWidthAndRowHeight.xlsx');
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

// Save the workbook.
await workbook.save('ColumnWidthAndRowHeight.xlsx');
{% endhighlight %}
{% endtabs %}

## Hide and show rows and columns

Hide a row or column without deleting its data, and show it again later. Row and column indexes are 1-based.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Visible';
sheet.cell('B1').value = 'Hidden column';
sheet.cell('A2').value = 'Hidden row';
sheet.cell('A3').value = 'Visible';

// Hide column B and row 2
sheet.setColumnHidden(2, true);
sheet.setRowHidden(2, true);

// Check whether they are hidden
const columnHidden = sheet.isColumnHidden(2);
const rowHidden = sheet.isRowHidden(2);

// Show them again

// Save the workbook.
await workbook.save('HideRowsAndColumns.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Visible';
sheet.cell('B1').value = 'Hidden column';
sheet.cell('A2').value = 'Hidden row';
sheet.cell('A3').value = 'Visible';

// Hide column B and row 2
sheet.setColumnHidden(2, true);
sheet.setRowHidden(2, true);

// Check whether they are hidden
const columnHidden = sheet.isColumnHidden(2);
const rowHidden = sheet.isRowHidden(2);

// Show them again

// Save the workbook.
await workbook.save('HideRowsAndColumns.xlsx');
{% endhighlight %}
{% endtabs %}

## Used range and selected range

The used range reports the area from cell A1 to the last cell that contains data, which is useful before you loop over cells. You can also set the range that is selected when the workbook opens.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('B2').value = 'Start';
sheet.cell('D5').value = 'End';

// Area from A1 to the last cell that contains data
const used = sheet.usedRange;
const address = used ? used.address : undefined; // 'A1:D5'
const lastRow = sheet.lastRow; // 5
const lastColumn = sheet.lastColumn; // 4

// Select a range when the workbook opens
sheet.selectedRange = 'B2:D5';

// Save the workbook.
await workbook.save('UsedRangeAndSelection.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('B2').value = 'Start';
sheet.cell('D5').value = 'End';

// Area from A1 to the last cell that contains data
const used = sheet.usedRange;
const address = used ? used.address : undefined; // 'A1:D5'
const lastRow = sheet.lastRow; // 5
const lastColumn = sheet.lastColumn; // 4

// Select a range when the workbook opens
sheet.selectedRange = 'B2:D5';

// Save the workbook.
await workbook.save('UsedRangeAndSelection.xlsx');
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

// Save the workbook.
await workbook.save('FreezeRowsAndColumns.xlsx');
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

// Save the workbook.
await workbook.save('FreezeRowsAndColumns.xlsx');
{% endhighlight %}
{% endtabs %}
