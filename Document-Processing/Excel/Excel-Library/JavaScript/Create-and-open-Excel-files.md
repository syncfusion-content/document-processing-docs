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

## Custom document properties

Custom document properties store your own named metadata, such as a client ID, project code, or review date, inside the workbook. They appear in Excel under **File > Info > Properties > Advanced Properties > Custom**. Use `workbook.customDocumentProperties` to add, read, update, and remove them.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const custom = workbook.customDocumentProperties;

custom.add('ClientID', 'ACME-001');          // text
custom.add('Revision', 3);                   // number
custom.add('Approved', true);                // yes/no
custom.add('ReviewDate', new Date('2025-06-30T00:00:00Z')); // date

// Read
const clientId = custom.get('ClientID');
console.log(clientId.value, clientId.type);  // 'ACME-001' 'string'

// Update an existing property
custom.get('Revision').value = 4;
custom.add('ClientID', 'ACME-002');          // add() on an existing name updates the value

// Remove
custom.remove('Approved');

// Enumerate
for (const property of custom) {
  console.log(property.name, property.value, property.type);
}

await workbook.save('./CustomProperties.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const custom = workbook.customDocumentProperties;

custom.add('ClientID', 'ACME-001');          // text
custom.add('Revision', 3);                   // number
custom.add('Approved', true);                // yes/no
custom.add('ReviewDate', new Date('2025-06-30T00:00:00Z')); // date

// Read
const clientId = custom.get('ClientID');
console.log(clientId.value, clientId.type);  // 'ACME-001' 'string'

// Update an existing property
custom.get('Revision').value = 4;
custom.add('ClientID', 'ACME-002');          // add() on an existing name updates the value

// Remove
custom.remove('Approved');

// Enumerate
for (const property of custom) {
  console.log(property.name, property.value, property.type);
}

await workbook.save('./CustomProperties.xlsx');
{% endhighlight %}
{% endtabs %}

Custom properties are saved with the workbook and loaded again by `Workbook.open`.

The `customDocumentProperties` collection provides:

* `add(name, value?)` — adds a property, or updates and returns the existing one when the name already exists. The name must be a non-empty string.
* `get(name)` — returns the property, or `undefined` when it does not exist.
* `getAt(index)` — returns the property at a zero-based index; throws `RangeError` when the index is out of range.
* `contains(name)` — returns `true` when a property with that name exists.
* `remove(name)` — removes the property and returns `true`, or `false` when it was not found.
* `clear()` — removes all custom properties.
* `length` — the number of properties. You can also iterate over the collection using `for...of`.

Each property exposes `name` (read-only), `value`, and `type` (read-only). The type is detected from the assigned value:

| Value assigned | `type` | Description |
|---|---|---|
| `string` | `'string'` | Text value. |
| `number` | `'number'` | Whole numbers are stored as integers, other numbers as floating-point values. |
| `boolean` | `'boolean'` | Yes/no value. |
| `Date` | `'date'` | Date and time value. |
| `null` / `undefined` | `'unknown'` | No value; saved as empty text. |

N> Whole numbers are stored as integers and other numbers as floating-point values. Property names are case-sensitive.

N> A property whose value is `null` or `undefined` is saved as an empty text value. When a file contains a property type the library does not read, the property is loaded with a `null` value. The `linkToContent` and `linkSource` members on a property are reserved and are not saved. If the workbook has no custom properties, no custom properties part is written.

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
