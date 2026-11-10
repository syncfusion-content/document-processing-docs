---
layout: post
title: Working with PowerPoint Presentation in JavaScript PowerPoint | Syncfusion
description: Learn how to read and modify the built-in document properties and add, access, and update the custom document properties of a PowerPoint presentation using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, presentation properties, document properties, custom properties
---

# Working with PowerPoint Presentation in JavaScript PowerPoint

The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) provides support to read and write the document properties stored in a PowerPoint presentation. Document properties, also known as metadata, are the details about a file that describe or identify it. The library classifies document properties into two categories:

* **Built-in document properties** — include details such as title, author, subject, and keywords that identify the document's topic or contents.
* **Custom document properties** — define the user-defined document properties.

Document properties are exposed through two property views on a `Presentation` instance:

* `builtInProperties` — a read/write view of the core and extended document properties stored in `docProps/core.xml` and `docProps/app.xml`.
* `customProperties` — a read/write view of the custom document properties stored in `docProps/custom.xml`.

N> Refer to the appropriate tabs in the code snippet section: **TypeScript** for TypeScript applications and **JavaScript** for JavaScript applications.

## Working with PowerPoint presentation properties

A property view is lazy: the library parses the underlying property part only when a property is first read or written. Changes made through the property views are written back to the presentation when the presentation is saved, and any unknown or unsupported property elements in the parts are preserved unchanged.

### Built-in document properties

The built-in document properties of a presentation are represented by the `BuiltInProperties` type. You read one property with `get(name)` and write one with `set(name, value)`. Absence of a property is reported as `undefined` — the library never substitutes an inherited default value.

The following table lists the available built-in property names and the types the library reads and writes for each.

| Property | Type |
| --- | --- |
| `title` | `string` |
| `creator` | `string` |
| `subject` | `string` |
| `keywords` | `string` |
| `description` | `string` |
| `category` | `string` |
| `comments` | `string` |
| `contentStatus` | `string` |
| `identifier` | `string` |
| `language` | `string` |
| `version` | `string` |
| `revision` | `string` |
| `lastModifiedBy` | `string` |
| `created` | `Date` |
| `modified` | `Date` |
| `lastPrinted` | `Date` |
| `Template` | `string` |
| `Manager` | `string` |
| `Company` | `string` |
| `PresentationFormat` | `string` |
| `Application` | `string` |
| `AppVersion` | `string` |
| `HyperlinkBase` | `string` |
| `Pages` | `number` |
| `Words` | `number` |
| `Characters` | `number` |
| `Lines` | `number` |
| `Paragraphs` | `number` |
| `Slides` | `number` |
| `Notes` | `number` |
| `TotalTime` | `number` |
| `HiddenSlides` | `number` |
| `MMClips` | `number` |
| `CharactersWithSpaces` | `number` |
| `DocSecurity` | `number` |
| `ScaleCrop` | `boolean` |
| `LinksUpToDate` | `boolean` |
| `SharedDoc` | `boolean` |
| `HyperlinksChanged` | `boolean` |

N> `comments` and `description` refer to the same stored element (`dc:description`), so writing one changes the value read from the other.

#### Reading built-in document properties

The following code example demonstrates how to open an existing presentation and read its built-in document properties.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array, ArrayBuffer, or base64 string of an .pptx file.
// Loads or opens a PowerPoint presentation.
let pptxDoc = await Presentation.open(data);

// Reads the built-in document properties.
// Absence is undefined, not an inherited default.
let title = pptxDoc.builtInProperties.get('title');
let author = pptxDoc.builtInProperties.get('creator');

// Saves the presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// data is a Uint8Array, ArrayBuffer, or base64 string of an .pptx file.
// Loads or opens a PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);

// Reads the built-in document properties.
// Absence is undefined, not an inherited default.
var title = pptxDoc.builtInProperties.get('title');
var author = pptxDoc.builtInProperties.get('creator');

// Saves the presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

#### Modifying built-in document properties

The `set(name, value)` method upserts a built-in property: it updates the value when the property exists and creates the property when it does not. Any sibling property elements in the same part are kept unchanged. Date properties are written as ISO-8601 UTC, integers as their schema text, and booleans as `true` or `false`.

The following code example demonstrates how to modify the built-in document properties of an existing presentation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array, ArrayBuffer, or base64 string of an .pptx file.
// Loads or opens a PowerPoint presentation.
let pptxDoc = await Presentation.open(data);

// Modifies the built-in document properties.
pptxDoc.builtInProperties.set('category', 'Sales reports');
pptxDoc.builtInProperties.set('Company', 'Northwind traders');
pptxDoc.builtInProperties.set('modified', new Date());

// Saves the modified presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// data is a Uint8Array, ArrayBuffer, or base64 string of an .pptx file.
// Loads or opens a PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);

// Modifies the built-in document properties.
pptxDoc.builtInProperties.set('category', 'Sales reports');
pptxDoc.builtInProperties.set('Company', 'Northwind traders');
pptxDoc.builtInProperties.set('modified', new Date());

// Saves the modified presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

N> The extended `Slides` property is refreshed from the slide count when the presentation is saved. A value written with `set` is replaced by the actual slide count on the next save.

## Custom document properties

Custom document properties are the user-defined name/value pairs stored in `docProps/custom.xml`. They are represented by the `CustomProperties` type, which you obtain from the `customProperties` view of a `Presentation` instance. Each property value supports the `string`, `number`, `boolean`, or `Date` representations.

A newly added property is stored with the user-defined FMTID and the next free property id; existing `fmtid` and `pid` values are never rewritten. Vector and array variants in the part are preserve-only: the library keeps their bytes unchanged but returns `undefined` for them from `get`.

### Adding custom document properties

The `add(name, value)` method adds a custom property. It fails when a property with the same name already exists; use `contains(name)` to check first, or `set(name, value)` to replace the value of an existing property.

The following code example demonstrates how to add custom document properties to a presentation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// Creates a new PowerPoint presentation.
let pptxDoc = Presentation.create();

// Adds custom document properties.
pptxDoc.customProperties.add('PropertyA', '@!123');
pptxDoc.customProperties.add('PropertyB', 'B');

// Saves the presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Creates a new PowerPoint presentation.
var pptxDoc = ej.pptx.Presentation.create();

// Adds custom document properties.
pptxDoc.customProperties.add('PropertyA', '@!123');
pptxDoc.customProperties.add('PropertyB', 'B');

// Saves the presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

### Accessing and modifying custom document properties

The `get(name)` method reads one custom property by name and returns `undefined` when the property is absent or preserve-only. The `set(name, value)` method replaces the value of an existing property, and `remove(name)` deletes a property while leaving its sibling properties unchanged.

The following code example demonstrates how to access, modify, and remove an existing custom document property.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array, ArrayBuffer, or base64 string of an .pptx file.
// Loads or opens a PowerPoint presentation.
let pptxDoc = await Presentation.open(data);

// Checks and reads an existing custom document property.
if (pptxDoc.customProperties.contains('PropertyA')) {
  let property = pptxDoc.customProperties.get('PropertyA');
}

// Updates the value of an existing custom document property.
pptxDoc.customProperties.set('PropertyA', 'Hello world');

// Removes a custom document property.
pptxDoc.customProperties.remove('PropertyB');

// Saves the modified presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// data is a Uint8Array, ArrayBuffer, or base64 string of an .pptx file.
// Loads or opens a PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);

// Checks and reads an existing custom document property.
if (pptxDoc.customProperties.contains('PropertyA')) {
  var property = pptxDoc.customProperties.get('PropertyA');
}

// Updates the value of an existing custom document property.
pptxDoc.customProperties.set('PropertyA', 'Hello world');

// Removes a custom document property.
pptxDoc.customProperties.remove('PropertyB');

// Saves the modified presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

N> A type change is allowed on update: passing a `number` where a `string` was stored rewrites the variant element to the number representation.