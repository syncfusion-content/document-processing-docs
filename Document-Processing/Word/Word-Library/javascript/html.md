---
title: HTML conversion in JavaScript Word | Syncfusion
description: Learn how to convert HTML files to Word document in JavaScript Word Library without Microsoft Word.
platform: document-processing
control: Word Library
documentation: UG
---

# HTML Conversions in JavaScript Word

Syncfusion<sup>&reg;</sup> JavaScript Word Library allows you to convert an HTML file into a Word document (DOCX, DOTX, DOCM, and DOTM).

In the Word library, the content from the input HTML is parsed using XML parsing APIs. So, the input HTML should meet the XML standard (have proper open and close tags).

N> Exporting to the HTML format is not supported. However, you can import HTML documents and export them to other supported Word file formats.

The following code example shows how to convert the HTML file into a Word document.

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
