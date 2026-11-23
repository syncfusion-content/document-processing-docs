---
title: Word file format conversions in JavaScript Word | Syncfusion
description: This section illustrates Word file format conversion capabilities supported by the Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---

# Word file format conversions in JavaScript Word

The [Microsoft Word's](https://en.wikipedia.org/wiki/Microsoft_Word#) native file formats are DOCX, DOTX, DOCM, and DOTM. The Syncfusion<sup>&reg;</sup> JavaScript Word Library supports the following major native file formats.

* Word Open XML formats (2007 & later)

## Word Open XML formats (2007 & later)

[Office Open XML](http://en.wikipedia.org/wiki/Office_Open_XML#) (OOXML or Microsoft Open XML (MOX)) is a zipped, XML-based file format introduced by Microsoft in Office 2007 applications. WordprocessingML is the markup language used by Microsoft Office Word to store its DOCX documents.

The JavaScript Word Library supports the following WordprocessingML formats:

* Microsoft Word 2007
* Microsoft Word 2010
* Microsoft Word 2013
* Microsoft Word 2016
* Microsoft Word 2019

The following code example explains how to create a new Word document (DOCX) with a few lines of code.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Create an instance of the WordDocument (Empty Word Document).
let document = WordDocument.create();
// Append text to the last paragraph of the document.
document.lastParagraph.appendText("Hello World");
// Save and download the Word document.
document.save("Sample.docx");
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create an instance of the WordDocument (Empty Word Document).
let document = ej.docx.WordDocument.create();
// Append text to the last paragraph of the document.
document.lastParagraph.appendText("Hello World");
// Save and download the Word document.
document.save("Sample.docx");
{% endhighlight %}
{% endtabs %}

### Templates (DOTX)

DOTX is a Word document template. The following code sample shows how to create a Word document template with a few lines of code.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Create an instance of the WordDocument (Empty Word Document).
let document = WordDocument.create();
// Append text to the last paragraph of the document.
document.lastParagraph.appendText("Hello World");
// Save and download the Word document template.
document.save("Sample.dotx");
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create an instance of the WordDocument (Empty Word Document).
let document = ej.docx.WordDocument.create();
// Append text to the last paragraph of the document.
document.lastParagraph.appendText("Hello World");
// Save and download the Word document template.
document.save("Sample.dotx");
{% endhighlight %}
{% endtabs %}

### Macros (DOCM, DOTM)

DOCM and DOTM are macro-enabled Word Open XML formats. DOCM represents a macro-enabled Word document, while DOTM represents a macro-enabled Word template. These formats are structurally similar to DOCX and DOTX, but additionally contain embedded macros and scripts.

The JavaScript Word Library provides preservation support for macros. The following code shows how to load and save a macro-enabled document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Load the macro-enabled template.
let document = WordDocument.open(data);
// Save and download the macro-enabled document.
document.save("Sample.docm");
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load the macro-enabled template.
let document = ej.docx.WordDocument.open(data);
// Save and download the macro-enabled document.
document.save("Sample.docm");
{% endhighlight %}
{% endtabs %}

The following code shows how to load and save a macro-enabled template (DOTM).

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Load the macro-enabled template.
let document = WordDocument.open(data);
// Save and download the macro-enabled template.
document.save("Sample.dotm");
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load the macro-enabled template.
let document = ej.docx.WordDocument.open(data);
// Save and download the macro-enabled template.
document.save("Sample.dotm");
{% endhighlight %}
{% endtabs %}

## See Also

* [Supported File Formats in JavaScript Word Library](https://help.syncfusion.com/document-processing/word/word-library/javascript/Support-File-Formats)
* Document Conversions in JavaScript Word
