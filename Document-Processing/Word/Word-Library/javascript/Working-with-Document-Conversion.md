---
title: Document Conversions in JavaScript Word | Syncfusion
description: Learn how to convert Word documents and HTML files using the Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---

# Document Conversions in JavaScript Word Library

## Working with document conversion

Syncfusion<sup>&reg;</sup> JavaScript Word Library allows you to convert documents between supported file formats. Each file format document can be categorized as a flow layout document.

**Flow layout document**

* A flow document is designed to reflow content depending on the application.
* Does not contain information about the absolute position of its content on a page.
* Dynamically renders content at run time based on the display medium.
* Example: DOCX and HTML file formats.

The JavaScript Word Library supports loading an HTML file and converting it into a Word document (DOCX).

## HTML conversion

Syncfusion<sup>&reg;</sup> JavaScript Word Library supports converting an HTML file into a Word document. You can open an HTML document and save it as a Word document (.docx).

The following code example shows how to convert an HTML file into a Word document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

const response = await fetch('HTMLToWord.html');
const bytes = new Uint8Array(await response.arrayBuffer());
let document = WordDocument.openSync(bytes);

// Save
document.save('HTMLToWord.docx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
const response = await fetch('HTMLToWord.html');
const bytes = new Uint8Array(await response.arrayBuffer());
let document = ej.docx.WordDocument.openSync(bytes);

// Save
document.save('HTMLToWord.docx');
{% endhighlight %}
{% endtabs %}
