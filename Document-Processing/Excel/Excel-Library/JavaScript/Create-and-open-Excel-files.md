---
title: Create and Open Excel Files in JavaScript | Syncfusion
description: Create, open, and save Excel workbooks with the Syncfusion JavaScript Excel Library in Node.js and browser environments.
platform: document-processing
control: Excel
documentation: ug
---

# Create and Open Excel Files in JavaScript

The [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library) creates, opens, and saves Microsoft Excel (`.xlsx`) workbooks in Node.js and browser environments. You can start from a blank workbook or load an existing file from bytes or a file path, then save the result as bytes or back to disk.

N> Open and save with a filesystem path require the Node.js file system module. In the browser, open from `Uint8Array` or `ArrayBuffer`, and save with the parameterless `save()` overload that returns bytes.

## Create a new workbook

A new workbook starts with one visible worksheet named Sheet1. You can write cells on that sheet immediately, then add more sheets as needed.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

// Create a new workbook with one sheet named Sheet1
const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Write a value
sheet.cell('A1').value = 'Hello Excel';

// Save as bytes (browser or Node.js)
const bytes: Uint8Array = await workbook.save();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

// Create a new workbook with one sheet named Sheet1
const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Write a value
sheet.cell('A1').value = 'Hello Excel';

// Save as bytes (browser or Node.js)
const bytes = await workbook.save();
{% endhighlight %}
{% endtabs %}

## Open from bytes

Opening from bytes loads an existing .xlsx file from memory. This approach works in both browser and Node.js environments when the file is already available as binary data.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

// data is a Uint8Array or ArrayBuffer of an .xlsx file
const workbook: Workbook = await Workbook.open(data);
const sheet = workbook.sheet(0);

// Read a cell value
const value = sheet.cell('A1').value;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

// data is a Uint8Array or ArrayBuffer of an .xlsx file
const workbook = await Workbook.open(data);
const sheet = workbook.sheet(0);

// Read a cell value
const value = sheet.cell('A1').value;
{% endhighlight %}
{% endtabs %}

## Open from a file path (Node.js)

In Node.js, you can open a workbook from a path on disk and save changes to a path. The parent folder must already exist when you save to a new location.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

// Open an existing workbook from disk
const workbook: Workbook = await Workbook.open('./data/Input.xlsx');

// Modify content
workbook.sheet(0).cell('A1').value = 'Updated';

// Save to a new path
await workbook.save('./data/Output.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

// Open an existing workbook from disk
const workbook = await Workbook.open('./data/Input.xlsx');

// Modify content
workbook.sheet(0).cell('A1').value = 'Updated';

// Save to a new path
await workbook.save('./data/Output.xlsx');
{% endhighlight %}
{% endtabs %}

## Save as bytes

Saving as bytes produces the complete .xlsx package in memory. Use the result for browser downloads, uploads, or any custom storage path you control.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
workbook.sheet(0).cell('A1').value = 'Report';

const bytes: Uint8Array = await workbook.save();
// Use bytes for download, storage, or further processing
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
workbook.sheet(0).cell('A1').value = 'Report';

const bytes = await workbook.save();
// Use bytes for download, storage, or further processing
{% endhighlight %}
{% endtabs %}

## Workbook author and document properties

Document properties store workbook metadata such as author, keywords, and comments. These values travel with the file and appear in Excel document information.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
workbook.author = 'Contoso';

const props = workbook.builtInDocumentProperties;
props.keywords = 'sales report';
props.comments = 'Q1 workbook';
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
workbook.author = 'Contoso';

const props = workbook.builtInDocumentProperties;
props.keywords = 'sales report';
props.comments = 'Q1 workbook';
{% endhighlight %}
{% endtabs %}

N> Some document-property fields are package-internal and are stripped from the shipped type definitions. Prefer the public properties documented on `BuiltInDocumentProperties` (for example `author`, `keywords`, `comments`, dates).

## Date system (1904)

Excel can interpret date serial numbers with the 1900 or 1904 date system. The 1900 system is the default; switch only when you need compatibility with workbooks that use 1904 dates.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
workbook.date1904 = false;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
workbook.date1904 = false;
{% endhighlight %}
{% endtabs %}

## Active sheet

The active sheet is the worksheet Excel displays first when the workbook opens. Set it when users should land on a specific tab instead of the first sheet.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sales = workbook.addSheet('Sales');
workbook.activeSheet = sales;
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sales = workbook.addSheet('Sales');
workbook.activeSheet = sales;
{% endhighlight %}
{% endtabs %}
