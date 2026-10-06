---
title: Working with Sections in JavaScript Word | Syncfusion
description: Configure page setup, columns, headers, footers, page numbers, borders, line numbers, and manage sections in Word documents.
platform: document-processing
control: Word Library
documentation: ug
keywords: javascript, word, sections, page setup, headers, footers, page numbers, columns
---

# Working with Sections in JavaScript Word Library

A Word document is a flow document in which content is preserved sequentially section by section. Each section may extend across multiple pages based on its content, and each section can have its own page setup, headers and footers, page numbers, columns, and borders.

The JavaScript Word library exposes the `WordDocument.sections` collection, the `lastSection` shortcut, and the per-section `pageSetup`, `headersFooters`, and `body` APIs. The following topics show how to use them with `@syncfusion/ej2-docx`.

## Specifying Page Properties

The following code example shows how to create a Word document and set the page properties of its section, including orientation, margins, page borders, and printer paper tray assignments for the first page and other pages.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {
  BorderStyle,
  PageOrientation,
  PrinterPaperTray,
  WordDocument,
} from '@syncfusion/ej2-docx';

// Creates a new Word document
let document = WordDocument.create();

// Get the last section
let section = document.lastSection;

// Sets page setup options
section.pageSetup.orientation = PageOrientation.Landscape;
section.pageSetup.margins.all = 72;
section.pageSetup.borders.borderType = BorderStyle.Single;
section.pageSetup.borders.lineWidth = 2;

// Sets the PrinterPaperTray value for FirstPageTray in page setup options
section.pageSetup.firstPageTray = PrinterPaperTray.EnvelopeFeed;

// Sets the PrinterPaperTray value for OtherPagesTray in page setup options
section.pageSetup.otherPagesTray = PrinterPaperTray.MiddleBin;

// Adds a paragraph to the created section
let paragraph = section.body.appendParagraph();

// Appends the text to the created paragraph
paragraph.appendText(
  'AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.'
);

// Saves the Word document
document.save('PageProperties.docx');
{% endhighlight %}
{% endtabs %}

## Creating a Multi-column Document

The following code example shows how to add multiple columns to a section and insert a column break between paragraphs so that the content flows from one column to the next.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { BreakType, WordDocument } from '@syncfusion/ej2-docx';

// Creates a new Word document
let document = WordDocument.create();

// Get the last section
let section = document.lastSection;

// Adds three equal-width columns with a 20-point spacing between them
section.addColumn(150, 20);
section.addColumn(150, 20);
section.addColumn(150, 20);

// Adds a paragraph to the created section
let paragraph = section.body.appendParagraph();
let paraText =
  'AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.';

// Appends the text to the created paragraph
paragraph.appendText(paraText);

// Adds a column break to push the next paragraph to the next column
paragraph.appendBreak(BreakType.ColumnBreak);

// Adds the second paragraph
paragraph = section.body.appendParagraph();
paragraph.appendText(paraText);
paragraph.appendBreak(BreakType.ColumnBreak);

// Adds the third paragraph
paragraph = section.body.appendParagraph();
paragraph.appendText(paraText);

// Saves the Word document
document.save('MultiColumn.docx');
{% endhighlight %}
{% endtabs %}

## Creating a document with different page settings

The following code example shows how to create a Word document with a single section, set its page size to A4, and use the portrait orientation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {
  PageOrientation,
  PageSize,
  WordDocument,
} from '@syncfusion/ej2-docx';

// Creates a new Word document
let document = WordDocument.create();

// Get the last section
let section = document.lastSection;

// Sets the page size and orientation for the section
section.pageSetup.pageSize = PageSize.A4;
section.pageSetup.orientation = PageOrientation.Portrait;

// Adds a paragraph to the section
let paragraph = section.body.appendParagraph();

// Appends the text to the created paragraph
paragraph.appendText(
  'AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.'
);

// Saves the Word document
document.save('DifferentPageSettings.docx');
{% endhighlight %}
{% endtabs %}

## Working with Headers and Footers

The following code example shows how to add a default header and a default footer to a section. The example builds a three-page document by setting `pageBreakAfter` on each paragraph, then appends a header and a footer to the section.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Creates a new Word document
let document = WordDocument.create();

// Adds the first section to the document
let section = document.addSection();

// Adds a paragraph to the section
let paragraph = section.body.appendParagraph();
let paraText =
  'AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.';

// Appends text to the first page in the document
paragraph.appendText('\r\r[ First Page ] \r\r' + paraText);
paragraph.paragraphFormat.pageBreakAfter = true;

// Appends text to the second page in the document
paragraph = section.body.appendParagraph();
paragraph.appendText('\r\r[ Second Page ] \r\r' + paraText);
paragraph.paragraphFormat.pageBreakAfter = true;

// Appends text to the third page in the document
paragraph = section.body.appendParagraph();
paragraph.appendText('\r\r[ Third Page ] \r\r' + paraText);

// Inserts the default page header
paragraph = section.headersFooters.oddHeader.appendParagraph();
paragraph.appendText('[ Default Page Header ]');

// Inserts the default page footer
paragraph = section.headersFooters.oddFooter.appendParagraph();
paragraph.appendText('[ Default Page Footer ]');

// Saves the Word document
document.save('headerFooter.docx');
{% endhighlight %}
{% endtabs %}

### Remove Headers and Footers

The following code example shows how to iterate through every section in a document and clear the first-page, odd, and even headers and footers.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Open an existing Word document
let response = await fetch('Input.docx');
let arrayBuffer = await response.arrayBuffer();
let document = await WordDocument.openAsync(arrayBuffer);

// Iterate through every section in the Word document
for (let section of document.sections) {
  // Remove the first page header
  section.headersFooters.firstPageHeader.items.clear();

  // Remove the first page footer
  section.headersFooters.firstPageFooter.items.clear();

  // Remove the odd footer
  section.headersFooters.oddFooter.items.clear();

  // Remove the odd header
  section.headersFooters.oddHeader.items.clear();

  // Remove the even header
  section.headersFooters.evenHeader.items.clear();

  // Remove the even footer
  section.headersFooters.evenFooter.items.clear();
}

// Saves the Word document
document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

## Adding Page Numbers

The following code example shows how to enable page numbering for a section and add a footer that combines custom text with a `Page` field. The tab stop in the footer aligns the page number to the right margin.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import {
  FieldType,
  PageNumberStyle,
  WordDocument,
} from '@syncfusion/ej2-docx';

// Create a new Word document
let document = WordDocument.create();

// Get the last section
let section = document.lastSection;

section.pageSetup.pageStartingNumber = 1;
section.pageSetup.restartPageNumbering = true;
section.pageSetup.pageNumberStyle = PageNumberStyle.Arabic;

// Adds a footer paragraph to the document
let paragraph = section.headersFooters.oddFooter.appendParagraph();
paragraph.paragraphFormat.tabs.addTab(523, 'right', 'none');

// Adds text for the footer paragraph
paragraph.appendText('Copyright Northwind Inc. 2001 - 2015');

// Adds the page number field to the document
paragraph.appendText('\tPage ');
paragraph.appendField('Page', FieldType.Page);

// Adds a paragraph to the body of the section
paragraph = section.body.appendParagraph();

// Appends the text to the created paragraph
paragraph.appendText(
  'AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.'
);

// Saves the Word document
document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

## Apply Page Borders

The following code example shows how to apply a colored page border to a section and set a uniform margin between the page edge and the border on all four sides.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { BorderStyle, Color, WordDocument } from '@syncfusion/ej2-docx';

// Create a new Word document
let document = WordDocument.create();

// Get the last section
let section = document.lastSection;

// Set the borders style
section.pageSetup.borders.borderType = BorderStyle.Single;

// Set the color of the borders
section.pageSetup.borders.color = Color.Blue;

// Set the line width of the borders
section.pageSetup.borders.lineWidth = 0.75;

// Set the page border margins
section.pageSetup.borders.top.space = 5;
section.pageSetup.borders.bottom.space = 5;
section.pageSetup.borders.right.space = 5;
section.pageSetup.borders.left.space = 5;

// Adds a paragraph to the section
let paragraph = section.body.appendParagraph();

// Appends the text to the created paragraph
paragraph.appendText(
  'AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.'
);

// Saves the Word document
document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

## Add Line Numbers

The following code example shows how to configure line numbering for every section in a document. The numbering mode, starting value, step, and the distance from the text are all set on `section.pageSetup`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { LineNumberingMode, WordDocument } from '@syncfusion/ej2-docx';

// Open an existing Word document
let response = await fetch('Input.docx');
let arrayBuffer = await response.arrayBuffer();
let document = await WordDocument.openAsync(arrayBuffer);

// Iterate through every section in the Word document
for (let section of document.sections) {
  // Set the line number distance from the text
  section.pageSetup.lineNumberingDistanceFromText = 10;

  // Set the numbering mode
  section.pageSetup.lineNumberingMode = LineNumberingMode.Continuous;

  // Set the starting line number value
  section.pageSetup.lineNumberingStartValue = 1;

  // Set the increment value for line numbering
  section.pageSetup.lineNumberingStep = 2;
}

// Saves the Word document
document.save('Result.docx');
{% endhighlight %}
{% endtabs %}

## Removing a Section

The following code example shows how to remove a specific section from a document by index using `sections.removeAt`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Open an existing Word document
let response = await fetch('Input.docx');
let arrayBuffer = await response.arrayBuffer();
let document = await WordDocument.openAsync(arrayBuffer);

// Removes the second section from the collection
document.sections.removeAt(1);

// Saves the Word document
document.save('Result.docx');
{% endhighlight %}
{% endtabs %}
