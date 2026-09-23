---
title: Create and Open Excel Files in JavaScript | Syncfusion
description: Create, open, and save Excel workbooks with the Syncfusion JavaScript Excel Library in Node.js and browser environments.
platform: document-processing
control: Excel
documentation: ug
---

# Create and Open Excel Files in JavaScript

The [JavaScript Excel Library](https://www.syncfusion.com/document-sdk/javascript-excel-library) creates, opens, and saves Microsoft Excel (`.xlsx`) workbooks through the `Workbook` class. Use `Workbook.create()` for a new workbook and `Workbook.open()` to load an existing file from bytes or a filesystem path.

N> Open and save with a filesystem path require Node.js `fs`. In the browser, open from `Uint8Array` or `ArrayBuffer`, and save with the parameterless `save()` overload that returns bytes.

## Create a new workbook

`Workbook.create()` returns a workbook with one visible worksheet named `Sheet1`.

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

Pass a `Uint8Array` or `ArrayBuffer` to `Workbook.open()`. This path works in both browser and Node.js environments.

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

In Node.js, pass a path string to `Workbook.open()`. The parent directory must exist when saving to a path.

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

The parameterless `save()` method returns a `Promise<Uint8Array>` that you can download in the browser, upload to a server, or write with your own file API.

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

Set metadata through `builtInDocumentProperties` or the `author` shortcut.

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

`date1904` controls how date serial numbers are interpreted. The default is `false` (1900 date system).

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

`activeSheet` is the worksheet Excel shows when the file opens.

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
