---
title: Merge Cells in JavaScript Excel Library | Syncfusion
description: Merge and unmerge cell ranges and inspect merged regions with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Merge Cells in JavaScript Excel

Merging combines a rectangular block of adjacent cells into one display area. You can merge or unmerge ranges and review every merged region on the worksheet.

## Merge and unmerge a range

Merging combines adjacent cells into a single cell area. The value and formatting of the top-left cell are retained for the merged area. Unmerging restores the individual cells.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Title';
sheet.range('A1:C1').merge();

// Split the merged area again
sheet.range('A1:C1').unmerge();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Title';
sheet.range('A1:C1').merge();

// Split the merged area again
sheet.range('A1:C1').unmerge();
{% endhighlight %}
{% endtabs %}

## Work with the merges collection

Merged cells combine two or more adjacent cells into a single area. You can inspect merged regions to understand how cells are grouped within a worksheet.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.range('A1:B2').merge();
sheet.range('D1:E1').merge();

// Inspect merged areas on the sheet
const areas = sheet.merges;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.range('A1:B2').merge();
sheet.range('D1:E1').merge();

// Inspect merged areas on the sheet
const areas = sheet.merges;
{% endhighlight %}
{% endtabs %}
