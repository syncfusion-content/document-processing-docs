---
title: Hyperlinks in JavaScript Excel Library | Syncfusion
description: Add URL, file, UNC, and workbook hyperlinks to cells and manage sheet-level links with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Hyperlinks in JavaScript Excel

Hyperlinks turn a cell into a clickable link to a web page, file, network path, or location inside the workbook. You can set the destination, the text users see, optional hover text, and an in-document location when needed.

`HyperlinkType` is a string union that identifies URL, file, network, and workbook links. When `type` is omitted, the library determines the hyperlink type from `target`.

N> Setting `displayText` on a single-cell hyperlink also updates that cell’s visible value.

## URL hyperlink

A URL hyperlink opens a web address from the cell. Use it for product pages, help topics, or any online resource related to the row.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';
import type { CellHyperlink, HyperlinkType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
const cell = sheet.cell('A1');

// Optional cell value before the link display text is applied
cell.value = 'Syncfusion';

const link: CellHyperlink = {
  target: 'https://www.syncfusion.com',
  displayText: 'Syncfusion',
  tooltip: 'Open website',
  type: 'url' as HyperlinkType,
};
cell.hyperlink = link;

// Persist the workbook (Node.js path, or omit the path to get bytes)
await workbook.save('./HyperlinkUrl.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const cell = sheet.cell('A1');

// Optional cell value before the link display text is applied
cell.value = 'Syncfusion';

cell.hyperlink = {
  target: 'https://www.syncfusion.com',
  displayText: 'Syncfusion',
  tooltip: 'Open website',
  type: 'url',
};

// Persist the workbook (Node.js path, or omit the path to get bytes)
await workbook.save('./HyperlinkUrl.xlsx');
{% endhighlight %}
{% endtabs %}

Email links follow the same URL pattern:

```ts
sheet.cell('A2').hyperlink = {
  target: 'mailto:support@example.com',
  displayText: 'Email support',
  type: 'url',
};
```

## File link

A file link points to a local path or file URL. Users can open the related document from the worksheet when the path is available on their system.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A3').value = 'Open Q1 report';
sheet.cell('A3').hyperlink = {
  target: 'file:///C:/Reports/Q1.xlsx',
  displayText: 'Q1 report',
  tooltip: 'Open local workbook',
  type: 'file',
};

await workbook.save('./HyperlinkFile.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A3').value = 'Open Q1 report';
sheet.cell('A3').hyperlink = {
  target: 'file:///C:/Reports/Q1.xlsx',
  displayText: 'Q1 report',
  tooltip: 'Open local workbook',
  type: 'file',
};

await workbook.save('./HyperlinkFile.xlsx');
{% endhighlight %}
{% endtabs %}

## UNC network path

A UNC hyperlink points to a network share path. Use it when the target file lives on a shared server location rather than a local drive or website.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A5').hyperlink = {
  target: '\\\\fileserver\\share\\Reports\\Q1.xlsx',
  displayText: 'Network report',
  tooltip: 'Open UNC path',
  type: 'unc',
};

await workbook.save('./HyperlinkUnc.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A5').hyperlink = {
  target: '\\\\fileserver\\share\\Reports\\Q1.xlsx',
  displayText: 'Network report',
  tooltip: 'Open UNC path',
  type: 'unc',
};

await workbook.save('./HyperlinkUnc.xlsx');
{% endhighlight %}
{% endtabs %}

## Internal workbook link

An internal workbook link jumps to another cell or defined location in the same file. Use it for table of contents rows, cross-sheet navigation, or jumping to a detail area.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A4').value = 'Go to summary';
sheet.cell('A4').hyperlink = {
  target: '',
  displayText: 'Go to summary',
  subAddress: 'Sheet1!A10',
  type: 'workbook',
};

await workbook.save('./HyperlinkWorkbook.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A4').value = 'Go to summary';
sheet.cell('A4').hyperlink = {
  target: '',
  displayText: 'Go to summary',
  subAddress: 'Sheet1!A10',
  type: 'workbook',
};

await workbook.save('./HyperlinkWorkbook.xlsx');
{% endhighlight %}
{% endtabs %}

## Sheet hyperlinks collection

You can manage hyperlinks for many cells from the worksheet hyperlink list. This is useful when links are added in bulk or maintained separately from other cell content.

```ts
// ref, target, displayText, tooltip, type
sheet.hyperlinks.add('A6', 'https://example.com', 'Example', 'Open site', 'url');

const count = sheet.hyperlinks.count;
const first = sheet.hyperlinks.get(0);
const all = sheet.hyperlinks.list();
```

## Remove a hyperlink

Removing a hyperlink clears the clickable link from a cell or from the sheet list. The cell value can remain even after the link is removed.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').hyperlink = {
  target: 'https://www.syncfusion.com',
  displayText: 'Syncfusion',
  type: 'url',
};

// Remove from the cell
sheet.cell('A1').hyperlink = undefined;

// Or remove from the collection after add:
// const link = sheet.hyperlinks.add('A2', 'https://example.com', 'Example');
// sheet.hyperlinks.remove(link);
// sheet.hyperlinks.removeAt(0);
// sheet.hyperlinks.clear();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').hyperlink = {
  target: 'https://www.syncfusion.com',
  displayText: 'Syncfusion',
  type: 'url',
};

// Remove from the cell
sheet.cell('A1').hyperlink = undefined;

// Or remove from the collection after add:
// const link = sheet.hyperlinks.add('A2', 'https://example.com', 'Example');
// sheet.hyperlinks.remove(link);
// sheet.hyperlinks.removeAt(0);
// sheet.hyperlinks.clear();
{% endhighlight %}
{% endtabs %}
