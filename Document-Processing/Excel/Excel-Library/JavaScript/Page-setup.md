---
title: Page Setup in JavaScript Excel Library | Syncfusion
description: Configure print page setup, margins, orientation, and print areas with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Page Setup in JavaScript Excel Library

Page setup controls how a worksheet prints, including paper size, orientation, margins, headers and footers, fit-to-page scaling, and the print area. These settings travel with the workbook and apply when users print from Excel.

N> Page margins are authored in **points** (72 points = 1 inch), the same unit used for chart and shape sizes. SpreadsheetML stores margins in inches on save.

N> The snippets on this page save the workbook with `await workbook.save('<file name>.xlsx')`, which requires Node.js. In a browser, call `workbook.save()` without arguments and download the returned bytes, as shown in [Getting started](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/getting-started).

## Paper, orientation, and margins

Paper size, orientation, and margins control how a worksheet prints on the page. Centering, gridlines, and row or column headings refine the printed layout without changing cell content.

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

// Save the workbook.
await workbook.save('PaperOrientationAndMargins.xlsx');
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

// Save the workbook.
await workbook.save('PaperOrientationAndMargins.xlsx');
{% endhighlight %}
{% endtabs %}

Set `orientation` to `'default'`, `'portrait'`, or `'landscape'` to control print layout.

## Paper sizes

Set `paperSize` to one of the `PaperSize` constants. Use the constants instead of raw numbers so that the intent is clear.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, PaperSize } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// A4 on the first sheet
sheet.pageSetup.paperSize = PaperSize.A4;

// US Letter on a second sheet
const second = workbook.addSheet('Letter');
second.pageSetup.paperSize = PaperSize.Letter;
second.pageSetup.orientation = 'portrait';

// Save the workbook.
await workbook.save('PaperSizes.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, PaperSize } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// A4 on the first sheet
sheet.pageSetup.paperSize = PaperSize.A4;

// US Letter on a second sheet
const second = workbook.addSheet('Letter');
second.pageSetup.paperSize = PaperSize.Letter;
second.pageSetup.orientation = 'portrait';

// Save the workbook.
await workbook.save('PaperSizes.xlsx');
{% endhighlight %}
{% endtabs %}

Common `PaperSize` constants include:

| Group | Constants |
|---|---|
| US sizes | `Letter`, `Legal`, `Tabloid`, `Ledger`, `Statement`, `Executive`, `Note` |
| ISO A sizes | `A2`, `A3`, `A4`, `A5` |
| ISO and JIS B sizes | `B4`, `B5`, `IsoB4` |
| Envelopes | `Envelope9`, `Envelope10`, `Envelope11`, `Envelope12`, `Envelope14`, `EnvelopeDL`, `EnvelopeC5`, `EnvelopeC4`, `EnvelopeMonarch` |
| Other | `Folio`, `Quarto`, `Size10x14`, `Size11x17`, `JapanesePostcard` |

The `PaperSize` object also has transverse, extra, and fanfold variants, such as `A4Transverse`, `A4Extra`, and `UsStandardFanfold`.

## Fit to page and print area

Fit-to-page scaling shrinks content to a set number of printed pages. A print area limits what prints, and repeating title rows or columns keeps labels visible on every page.

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

// Save the workbook.
await workbook.save('FitToPageAndPrintArea.xlsx');
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

// Save the workbook.
await workbook.save('FitToPageAndPrintArea.xlsx');
{% endhighlight %}
{% endtabs %}

## Headers and footers

Headers and footers print text at the top and bottom of each page. Place content on the left, center, or right, including dynamic items such as the date and page numbers.

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

// Save the workbook.
await workbook.save('HeadersAndFooters.xlsx');
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

// Save the workbook.
await workbook.save('HeadersAndFooters.xlsx');
{% endhighlight %}
{% endtabs %}

Use `firstPage` / `evenPage` (and related flags) when first or odd/even headers differ. Prefer section properties over raw `&L` / `&C` / `&R` strings when possible.

## First page and odd and even page headers

Use `firstPage`, `oddPage`, and `evenPage` to set a different header and footer for the first page, or for odd and even pages. Writing a section on `firstPage` turns on `differentFirstPage`, and writing a section on `evenPage` turns on `oddAndEvenPagesHeaderFooter`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
const setup = sheet.pageSetup;

// Different header and footer on the first page
setup.firstPage.centerHeader = 'Annual Report';
setup.firstPage.centerFooter = 'Confidential';

// Different headers on odd and even pages
setup.oddPage.rightHeader = 'Contoso';
setup.oddPage.leftFooter = '&P';
setup.evenPage.leftHeader = 'Annual Report';
setup.evenPage.rightFooter = '&P';

// Save the workbook.
await workbook.save('FirstPageAndOddEvenHeaders.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const setup = sheet.pageSetup;

// Different header and footer on the first page
setup.firstPage.centerHeader = 'Annual Report';
setup.firstPage.centerFooter = 'Confidential';

// Different headers on odd and even pages
setup.oddPage.rightHeader = 'Contoso';
setup.oddPage.leftFooter = '&P';
setup.evenPage.leftHeader = 'Annual Report';
setup.evenPage.rightFooter = '&P';

// Save the workbook.
await workbook.save('FirstPageAndOddEvenHeaders.xlsx');
{% endhighlight %}
{% endtabs %}

## Page numbers and page order

Set the number of the first printed page, and choose whether pages are ordered across and then down or down and then across when a sheet spans several pages.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
const setup = sheet.pageSetup;

// Start numbering at page 5
setup.firstPageNumber = 5;

// 'overThenDown' prints across first; 'downThenOver' prints down first
setup.pageOrder = 'overThenDown';

// Footer shows "Page 5 of 8" and so on
setup.centerFooter = 'Page &P of &N';

// Save the workbook.
await workbook.save('PageNumbersAndOrder.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const setup = sheet.pageSetup;

// Start numbering at page 5
setup.firstPageNumber = 5;

// 'overThenDown' prints across first; 'downThenOver' prints down first
setup.pageOrder = 'overThenDown';

// Footer shows "Page 5 of 8" and so on
setup.centerFooter = 'Page &P of &N';

// Save the workbook.
await workbook.save('PageNumbersAndOrder.xlsx');
{% endhighlight %}
{% endtabs %}
