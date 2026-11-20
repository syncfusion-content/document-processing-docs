---
title: Bookmarks in JavaScript Word | Syncfusion
description: Learn how to add, obtain, and remove bookmarks in a Word document using the Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---

# Bookmarks in JavaScript Word Library

A bookmark identifies a location or a selection of text within a document that you can name and identify for future reference.

In the Syncfusion<sup>&reg;</sup> JavaScript Word library, a bookmark is represented by a `Bookmark` instance that is a pair of `BookmarkStart` and `BookmarkEnd`. `BookmarkStart` represents the start point of a bookmark and `BookmarkEnd` represents the end point of a bookmark. Every Word document contains a collection of bookmarks that are accessible through the `bookmarks` property of the `WordDocument` class.

## Adding a bookmark

The following code example shows how to add a bookmark in a Word document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, BookmarkStart, BookmarkEnd } from '@syncfusion/ej2-docx';

// Create an empty document
let document = WordDocument.create();

// Get the last paragraph
let paragraph = document.lastParagraph;

// Add bookmark start
let bookmarkStart = new BookmarkStart('Northwind');
paragraph.items.add(bookmarkStart);

// Add text inside bookmark
paragraph.appendText(
  'The Northwind sample database (Northwind.mdb) is included with all versions of Access. It provides data you can experiment with and database objects that demonstrate features you might want to implement in your own databases.'
);

// Add bookmark end
let bookmarkEnd = new BookmarkEnd('Northwind');
paragraph.items.add(bookmarkEnd);

// Add text after bookmark
paragraph.appendText(
  ' Using Northwind, you can become familiar with how a relational database is structured and how the database objects work together to help you enter, store, manipulate, and print your data.'
);

// Save
document.save('Output.docx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create an empty document
let document = ej.docx.WordDocument.create();

// Get the last paragraph
let paragraph = document.lastParagraph;

// Add bookmark start
let bookmarkStart = new ej.docx.BookmarkStart('Northwind');
paragraph.items.add(bookmarkStart);

// Add text inside bookmark
paragraph.appendText(
  'The Northwind sample database (Northwind.mdb) is included with all versions of Access. It provides data you can experiment with and database objects that demonstrate features you might want to implement in your own databases.'
);

// Add bookmark end
let bookmarkEnd = new ej.docx.BookmarkEnd('Northwind');
paragraph.items.add(bookmarkEnd);

// Add text after bookmark
paragraph.appendText(
  ' Using Northwind, you can become familiar with how a relational database is structured and how the database objects work together to help you enter, store, manipulate, and print your data.'
);

// Save
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Obtaining a bookmark instance

The following code example shows how to retrieve an instance of a bookmark from a Word document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument, Color } from '@syncfusion/ej2-docx';

let document = WordDocument.open(data);

// Get bookmark by name
let bookmark = document.bookmarks.findByName('Northwind');

if (bookmark) {
  // Change paragraph background color
  bookmark.bookmarkStart.ownerParagraph.paragraphFormat.backColor = Color.AliceBlue;
}
document.save('Output.docx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
let document = ej.docx.WordDocument.open(data);

// Get bookmark by name
let bookmark = document.bookmarks.findByName('Northwind');

if (bookmark) {
  // Change paragraph background color
  bookmark.bookmarkStart.ownerParagraph.paragraphFormat.backColor = ej.docx.Color.AliceBlue;
}
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Removing a bookmark from a Word document

The following code example shows how to remove a bookmark from a Word document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

let document = WordDocument.open(data);

// Get bookmark by name
let bookmark = document.bookmarks.findByName('Northwind');

if (bookmark) {
  // Removes the bookmark named "Northwind" from Word document.
  document.bookmarks.remove(bookmark);
}
document.save('Output.docx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
let document = ej.docx.WordDocument.open(data);

// Get bookmark by name
let bookmark = document.bookmarks.findByName('Northwind');

if (bookmark) {
  // Removes the bookmark named "Northwind" from Word document.
  document.bookmarks.remove(bookmark);
}
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}
