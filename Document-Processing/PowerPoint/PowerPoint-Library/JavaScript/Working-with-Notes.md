---
layout: post
title: Working with Notes in JavaScript PowerPoint | Syncfusion
description: Learn how to add, read, and modify speaker notes in a PowerPoint presentation using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, notes, speaker notes, notes slide
---

# Working with Notes in JavaScript PowerPoint

Notes are the contents associated with each slide and are visible only to the presenter when monitors are shared in "Presenter View". They provide useful guidance to the speaker during a presentation and are often referred to as "Speaker Notes". The presenter can optionally add key points, reminders, and additional information to notes to support the presentation. You can create, modify, read, and remove notes slides in a PowerPoint presentation using the Syncfusion<sup>&reg;</sup> JavaScript PowerPoint Library.

N> Refer to the appropriate tabs in the code snippet section: **TypeScript** for TypeScript applications and **JavaScript** for JavaScript applications.

## Prerequisites

Before you begin, make sure the following npm package is installed in your application.

```sh
npm install @syncfusion/ej2-pptx
```

For more information on package setup for each platform, refer to [Getting Started](./Getting-Started).

## Adding Notes to a Slide

The following code example demonstrates how to add notes to a PowerPoint slide.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

// Creates a Presentation instance.
let pptxDoc = Presentation.create();
// Adds a slide with blank layout type.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a notes slide to the slide and writes the notes text.
let notesSlide = slide.addNotesSlide();
// Adds text content into the Notes Slide.
notesSlide.notesTextBody.addParagraph('Notes content');
// Saves the Presentation to the file system.
await pptxDoc.save('PresentationWithNotesSlide.pptx');


{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Creates a Presentation instance.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a slide with blank layout type.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a notes slide to the slide and writes the notes text.
var notesSlide = slide.addNotesSlide();
// Adds text content into the Notes Slide.
notesSlide.notesTextBody.addParagraph('Notes content');
// Saves the Presentation to the file system.
await pptxDoc.save('PresentationWithNotesSlide.pptx');


{% endhighlight %}
{% endtabs %}

N> addNotesSlide() returns the newly created NotesSlide for the specified slide. If a notes slide already exists for that slide, the existing notes slide is returned. The notes slide can also be accessed through the slide's notes slide reference after it has been created.

## Adding Text into the Notes

The following code example demonstrates how to add formatted text to notes.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

// Creates a Presentation instance.
let pptxDoc = Presentation.create();
// Adds a slide with blank layout type.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a notes slide to the slide.
let notesSlide = slide.addNotesSlide();
// Adds a paragraph to the notes slide.
let paragraph = notesSlide.notesTextBody.addParagraph();
// Adds a text part to the paragraph.
let textpart = paragraph.addTextPart();
textpart.text ='The notes slide represents the contents and key notes of the corresponding slide. It is more useful when we use Presenter View while presenting the seminars through SlideShow.';
// Sets Bold format for text content.
textpart.font.bold = true;
// Sets font style using font name.
textpart.font.fontName = 'Times New Roman';
// Sets text content size using FontSize property.
textpart.font.fontSize = 20;
// Saves the Presentation
await pptxDoc.save('PresentationWithNotesText.pptx');


{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Creates a Presentation instance.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a slide with blank layout type.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a notes slide to the slide.
var notesSlide = slide.addNotesSlide();
// Adds a paragraph with formatted text to the notes slide.
var paragraph = notesSlide.notesTextBody.addParagraph();
var textpart = paragraph.addTextPart();
textpart.text ='The notes slide represents the contents and key notes of the corresponding slide. It is more useful when we use Presenter View while presenting the seminars through SlideShow.';
// Sets Bold format for text content.
textpart.font.bold = true;
// Sets font style using font name.
textpart.font.fontName = 'Times New Roman';
// Sets text content size using FontSize property.
textpart.font.fontSize = 20;
// Saves the Presentation to the file system.
await pptxDoc.save('PresentationWithNotesText.pptx');

{% endhighlight %}
{% endtabs %}

N> Use the notesTextBody property to add and manage the notes content. You can add paragraphs using the addParagraph() method and create formatted text runs using the addTextPart() method. This approach supports rich text formatting such as font name, font size, bold, italic, and other text formatting options within the notes slide.

## Adding a Numbered List to Notes

The following code example demonstrates how to create a simple numbered list as notes.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import {Presentation, SlideLayoutType, ListType, NumberedListStyle} from '@syncfusion/ej2-pptx';

// Creates a Presentation instance.
let pptxDoc = Presentation.create();
// Adds a slide with blank layout type.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a notes slide to the slide.
let notesSlide = slide.addNotesSlide();
// Adds the first numbered list item.
let paragraph1 = notesSlide.notesTextBody.addParagraph('The Northwind sample database (Northwind.mdb) is included with all versions of Access.');
// Sets the list type as Numbered
paragraph1.listFormat.type = ListType.Numbered;
// Sets the numbered style (list numbering) as Arabic number following by period.
paragraph1.listFormat.numberStyle = NumberedListStyle.ArabicPeriod;
// Sets the starting value as 1
paragraph1.listFormat.startValue = 1;
// Sets the list level as 1
paragraph1.indentLevelNumber = 1;
// Sets the hanging value
paragraph1.firstLineIndent = -20;
// Sets the bullet character size. Here, 100 means 100% of its text. Possible values can range from 25 to 400.
paragraph1.listFormat.size = 100;
// Adds another paragraph with the text in the left hand side textbox.
let paragraph2 = notesSlide.notesTextBody.addParagraph('It provides data you can experiment with and database objects that demonstrate features you might want to implement in your own databases.');
// Sets the list type as bulleted
paragraph2.listFormat.type = ListType.Numbered;
// Sets the numbered style (list numbering) as Arabic number following by period.
paragraph2.listFormat.numberStyle = NumberedListStyle.ArabicPeriod;
// Sets the list level as 1
paragraph2.indentLevelNumber = 1;
// Sets the hanging value
paragraph2.firstLineIndent = -20;
// Sets the bullet character size. Here, 100 means 100% of its text. Possible values can range from 25 to 400.
paragraph2.listFormat.size = 100;
// Adds another paragraph with the text in the left hand side textbox.
let paragraph3 = notesSlide.notesTextBody.addParagraph('Using Northwind, you can become familiar with how a relational database is structured and how the database objects work together to help you enter, store, manipulate, and print your data.');
// Sets the list type as bulleted
paragraph3.listFormat.type = ListType.Numbered;
// Sets the numbered style (list numbering) as Arabic number following by period.
paragraph3.listFormat.numberStyle = NumberedListStyle.ArabicPeriod;
// Sets the list level as 1
paragraph3.indentLevelNumber = 1;
// Sets the hanging value
paragraph3.firstLineIndent = -20;
// Sets the bullet character size. Here, 100 means 100% of its text. Possible values can range from 25 to 400.
paragraph3.listFormat.size = 100;
// Save the PowerPoint Presentation as Uint8Array
let data = await pptxDoc.save();



{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Creates a Presentation instance.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a slide with blank layout type.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a notes slide to the slide.
var notesSlide = slide.addNotesSlide();
// Adds the first numbered list item.
var paragraph = notesSlide.notesTextBody.addParagraph('The Northwind sample database (Northwind.mdb) is included with all versions of Access.');
// Sets the list type as Numbered.
paragraph.listFormat.type = ej.pptx.ListType.Numbered;
// Sets the numbered style (list numbering) as Arabic number followed by period.
paragraph.listFormat.numberStyle = ej.pptx.NumberedListStyle.ArabicPeriod;
// Sets the starting value as 1.
paragraph.listFormat.startValue = 1;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Sets the bullet character size. Here, 100 means 100% of its text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 100;
// Adds another paragraph.
paragraph = notesSlide.notesTextBody.addParagraph('It provides data you can experiment with and database objects that demonstrate features you might want to implement in your own databases.');
// Sets the list type as Numbered.
paragraph.listFormat.type = ej.pptx.ListType.Numbered;
// Sets the numbered style (list numbering) as Arabic number followed by period.
paragraph.listFormat.numberStyle = ej.pptx.NumberedListStyle.ArabicPeriod;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Sets the bullet character size. Here, 100 means 100% of its text.Possible values can range from 25 to 400.
paragraph.listFormat.size = 100;
// Adds another paragraph.
paragraph = notesSlide.notesTextBody.addParagraph('Using Northwind, you can become familiar with how a relational database is structured and how the database objects work together to help you enter, store, manipulate, and print your data.');
// Sets the list type as Numbered.
paragraph.listFormat.type = ej.pptx.ListType.Numbered;
// Sets the numbered style (list numbering) as Arabic number followed by period.
paragraph.listFormat.numberStyle = ej.pptx.NumberedListStyle.ArabicPeriod;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Sets the bullet character size. Here, 100 means 100% of its text.Possible values can range from 25 to 400.
paragraph.listFormat.size = 100;
// Save the PowerPoint Presentation as Uint8Array.
var data = await pptxDoc.save();

{% endhighlight %}
{% endtabs %}


## Removing Notes from a Slide

The following code example demonstrates how to remove the notes slide from a PowerPoint slide.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// Opens an existing PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Gets the instance of the first slide from the presentation.
let slide = pptxDoc.slides[0];
// Removes the notes slide from the corresponding slide.
slide.removeNotesSlide();
// Saves the Presentation to the file system.
await pptxDoc.save('PresentationWithNotesSlide.pptx');


{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Opens an existing PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Gets the instance of the first slide from the presentation.
var slide = pptxDoc.slides[0];
// Removes the notes slide from the corresponding slide.
slide.removeNotesSlide();

// Saves the Presentation to the file system.
await pptxDoc.save('PresentationWithNotesSlide.pptx');;

{% endhighlight %}
{% endtabs %}


## See Also

* [Working with Slides](./Working-with-Slide)
* [Working with Paragraphs](./Working-with-paragraphs)
* [Working with PowerPoint Presentation](./Working-with-PowerPoint-presentation)
