---
title: Working with Hyperlinks in JavaScript Word | Syncfusion
description: Learn how to create and manage web, email, file, bookmark, and image hyperlinks in a Word document using the Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---

# Working with Hyperlinks in JavaScript Word Library

Hyperlinks have two parts: the address and the display content. The Syncfusion<sup>&reg;</sup> JavaScript Word library supports the following hyperlink types:

* Web hyperlink
* Email hyperlink
* File hyperlink
* Bookmark hyperlink

## Web hyperlink

The following code example shows how to insert a web hyperlink.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, HyperlinkType } from '@syncfusion/ej2-docx';

// Create a new Word document
let document = WordDocument.create();

// Access the default section
let section = document.sections[0];

// Access the default paragraph
let paragraph = section.body.paragraphs[0];
paragraph.appendText('Web hyperlink:  ');

paragraph = section.body.appendParagraph();

// Append a web hyperlink to the paragraph
paragraph.appendHyperlink(
    'http://www.syncfusion.com',
    'Syncfusion',
    HyperlinkType.WebLink,
);

// Save the Word document
document.save('WebHyperlink.docx');
{% endhighlight %}
{% endtabs %}

## Email hyperlink

The following code example shows how to add an email hyperlink.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, HyperlinkType } from '@syncfusion/ej2-docx';

// Create a new Word document
let document = WordDocument.create();

// Access the default section
let section = document.sections[0];

// Access the default paragraph
let paragraph = section.body.paragraphs[0];
paragraph.appendText('Email hyperlink:  ');

paragraph = section.body.appendParagraph();

// Append an email hyperlink to the paragraph
paragraph.appendHyperlink(
    'mailto:sales@syncfusion.com',
    'Sales',
    HyperlinkType.EmailLink,
);

// Save the Word document
document.save('EmailHyperlink.docx');
{% endhighlight %}
{% endtabs %}

## File hyperlink

The following code example shows how to add a file hyperlink.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, HyperlinkType } from '@syncfusion/ej2-docx';

// Create a new Word document
let document = WordDocument.create();

// Access the default section
let section = document.sections[0];

// Access the default paragraph
let paragraph = section.body.paragraphs[0];
paragraph.appendText('File hyperlink:  ');

paragraph = section.body.appendParagraph();

// Append a file hyperlink to the paragraph
paragraph.appendHyperlink(
    'Template.docx',
    'File',
    HyperlinkType.FileLink,
);

// Save the Word document
document.save('FileHyperlink.docx');
{% endhighlight %}
{% endtabs %}

## Bookmark hyperlink

The following code example shows how to add a bookmark hyperlink.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, HyperlinkType } from '@syncfusion/ej2-docx';

// Create a new Word document
let document = WordDocument.create();

// Access the default section
let section = document.sections[0];

// Access the default paragraph
let paragraph = section.body.paragraphs[0];

// Create a bookmark
let bookmarkStart = paragraph.appendBookmarkStart('Introduction');
paragraph.appendText('Hyperlink');
paragraph.appendBookmarkEnd(bookmarkStart);
paragraph.appendText(
    '\nA hyperlink is a reference or navigation element in a document to another section of the same document or to another document that may be on or part of a (different) domain.',
);

paragraph = section.body.appendParagraph();
paragraph.appendText('Bookmark hyperlink: ');

paragraph = section.body.appendParagraph();

// Append a bookmark hyperlink to the paragraph
paragraph.appendHyperlink(
    'Introduction',
    'Bookmark',
    HyperlinkType.Bookmark,
);

// Save the Word document
document.save('BookmarkHyperlink.docx');
{% endhighlight %}
{% endtabs %}