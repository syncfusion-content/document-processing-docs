---
title: Page Setup in JavaScript Excel Library | Syncfusion
description: Configure print page setup with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Page Setup in JavaScript Excel

Use `sheet.pageSetup` to control paper size, orientation, margins, headers and footers, fit-to-page scaling, and print area.

N> Page margins are authored in **points** (72 points = 1 inch), the same unit used for chart and shape sizes. SpreadsheetML stores margins in inches on save.

## Paper, orientation, and margins

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, PaperSize } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
const setup = sheet.pageSetup;

setup.paperSize = PaperSize.A4;
setup.orientation = 'landscape';

// Nested margin writes (points)
setup.margins.top = 72; // 1 inch
setup.margins.left = 54;

// Or assign a partial object
setup.margins = { bottom: 72, right: 54 };

setup.centerHorizontally = true;
setup.printGridlines = false;
setup.printHeadings = true;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, PaperSize } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const setup = sheet.pageSetup;

setup.paperSize = PaperSize.A4;
setup.orientation = 'landscape';

setup.margins.top = 72;
setup.margins.left = 54;
setup.margins = { bottom: 72, right: 54 };

setup.centerHorizontally = true;
setup.printGridlines = false;
setup.printHeadings = true;
{% endhighlight %}
{% endtabs %}

`orientation` is `'default' | 'portrait' | 'landscape'`.

## Fit to page and print area

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
const setup = sheet.pageSetup;

setup.isFitToPage = true;
setup.fitToWidth = 1;
setup.fitToHeight = 0; // no height limit

setup.printArea = 'A1:G40';
setup.printTitleRows = '1:1';
setup.printTitleColumns = 'A:A';
setup.pageOrder = 'downThenOver';
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const setup = sheet.pageSetup;

setup.isFitToPage = true;
setup.fitToWidth = 1;
setup.fitToHeight = 0;

setup.printArea = 'A1:G40';
setup.printTitleRows = '1:1';
setup.printTitleColumns = 'A:A';
setup.pageOrder = 'downThenOver';
{% endhighlight %}
{% endtabs %}

## Headers and footers

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
const setup = sheet.pageSetup;

setup.leftHeader = 'Contoso';
setup.centerHeader = 'Q1 Report';
setup.rightHeader = '&D';
setup.centerFooter = 'Page &P of &N';
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const setup = sheet.pageSetup;

setup.leftHeader = 'Contoso';
setup.centerHeader = 'Q1 Report';
setup.rightHeader = '&D';
setup.centerFooter = 'Page &P of &N';
{% endhighlight %}
{% endtabs %}

Use `firstPage` / `evenPage` (and related flags) when first or odd/even headers differ. Prefer section properties over raw `&L` / `&C` / `&R` strings when possible.
