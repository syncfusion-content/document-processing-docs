---
layout: post
title: Working with Lists in JavaScript PowerPoint | Syncfusion
description: Learn how to create and format numbered, bulleted, picture, and multi-level lists in PowerPoint presentations using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, list, numbered list, bulleted list, picture list, multilevel list
---

# Working with Lists in JavaScript PowerPoint

The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) allows you to create simple and multi-level lists that make the content easier to read. In PowerPoint, Presentation lists consist of the following types:

1. [Numbered List](#numbered-list)
2. [Bulleted List](#bulleted-list)
3. [Picture List](#picture-list)
4. [Multilevel List](#creating-a-multilevel-list)

List formatting is exposed on each paragraph through `paragraph.listFormat`, with the indent level and hanging indent on the paragraph itself (`indentLevelNumber`, `firstLineIndent`).

N> Refer to the appropriate tabs in the code snippet section: **TypeScript** for TypeScript applications and **JavaScript** for JavaScript applications.

## Creating a Simple List

### Numbered List

N> - `indentLevelNumber` accepts values from `0` to `8`, where `0` indicates no indent.
N> - `listFormat.size` is expressed as a percentage of the text size (range `25` to `400`).

The following code example illustrates how to create a numbered list.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, ListType, NumberedListStyle } from '@syncfusion/ej2-pptx';

// Creates a PowerPoint presentation.
let pptxDoc = Presentation.create();
// Adds a blank slide to the presentation.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a textbox to hold the list. Bounds are in points.
let textBoxShape = slide.shapes.addTextBox({ bounds: { x: 65, y: 140, width: 410, height: 270 } });
let textBody = textBoxShape.textBody;
// Adds a new paragraph with the text in the left hand side textbox.
let paragraph = textBody.addParagraph('AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.');
// Sets the list type as Numbered.
paragraph.listFormat.type = ListType.Numbered;
// Sets the numbered style (list numbering) as Arabic number followed by period.
paragraph.listFormat.numberStyle = NumberedListStyle.ArabicPeriod;
// Sets the starting value as 1.
paragraph.listFormat.startValue = 1;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Sets the bullet character size. Here, 100 means 100% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 100;
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets.');
// Sets the list type as Numbered.
paragraph.listFormat.type = ListType.Numbered;
// Sets the numbered style (list numbering) as Arabic number followed by period.
paragraph.listFormat.numberStyle = NumberedListStyle.ArabicPeriod;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Sets the bullet character size. Here, 100 means 100% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 100;
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('While its base operation is located in Washington with 290 employees, several regional sales teams are located throughout their market base.');
// Sets the list type as Numbered.
paragraph.listFormat.type = ListType.Numbered;
// Sets the numbered style (list numbering) as Arabic number followed by period.
paragraph.listFormat.numberStyle = NumberedListStyle.ArabicPeriod;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Sets the bullet character size. Here, 100 means 100% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 100;
// Saves the presentation to the file system.
await pptxDoc.save('Sample.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Creates a PowerPoint presentation.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a blank slide to the presentation.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a textbox to hold the list. Bounds are in points.
var textBoxShape = slide.shapes.addTextBox({ bounds: { x: 65, y: 140, width: 410, height: 270 } });
var textBody = textBoxShape.textBody;
// Adds a new paragraph with the text in the left hand side textbox.
var paragraph = textBody.addParagraph('AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.');
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
// Sets the bullet character size. Here, 100 means 100% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 100;
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets.');
// Sets the list type as Numbered.
paragraph.listFormat.type = ej.pptx.ListType.Numbered;
// Sets the numbered style (list numbering) as Arabic number followed by period.
paragraph.listFormat.numberStyle = ej.pptx.NumberedListStyle.ArabicPeriod;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Sets the bullet character size. Here, 100 means 100% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 100;
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('While its base operation is located in Washington with 290 employees, several regional sales teams are located throughout their market base.');
// Sets the list type as Numbered.
paragraph.listFormat.type = ej.pptx.ListType.Numbered;
// Sets the numbered style (list numbering) as Arabic number followed by period.
paragraph.listFormat.numberStyle = ej.pptx.NumberedListStyle.ArabicPeriod;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Sets the bullet character size. Here, 100 means 100% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 100;
// Saves the presentation to the file system.
await pptxDoc.save('Sample.pptx');
{% endhighlight %}
{% endtabs %}

### Bulleted List

N> - `String.fromCharCode(183)` represents the middle dot (`·`) used as the bullet character in this sample.
N> - `ListType.Bulleted` requires a `bulletCharacter` and `fontName` to render the bullet glyph.

The following code example demonstrates how to create a simple bulleted list.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, ListType } from '@syncfusion/ej2-pptx';

// Creates a PowerPoint presentation.
let pptxDoc = Presentation.create();
// Adds a blank slide to the presentation.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a textbox to hold the list. Bounds are in points.
let textBoxShape = slide.shapes.addTextBox({ bounds: { x: 65, y: 140, width: 410, height: 250 } });
let textBody = textBoxShape.textBody;
// Adds a new paragraph with the text in the left hand side textbox.
let paragraph = textBody.addParagraph('AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.');
// Sets the list type as Bulleted.
paragraph.listFormat.type = ListType.Bulleted;
// Sets the bullet character for this list.
paragraph.listFormat.bulletCharacter = String.fromCharCode(183);
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the font for the bullet character.
paragraph.listFormat.fontName = 'Symbol';
// Sets the bullet character size. Here, 100 means 100% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 100;
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets.');
// Sets the list type as Bulleted.
paragraph.listFormat.type = ListType.Bulleted;
// Sets the bullet character for this list.
paragraph.listFormat.bulletCharacter = String.fromCharCode(183);
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the font for the bullet character.
paragraph.listFormat.fontName = 'Symbol';
// Sets the bullet character size. Here, 100 means 100% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 100;
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('While its base operation is located in Washington with 290 employees, several regional sales teams are located throughout their market base.');
// Sets the list type as Bulleted.
paragraph.listFormat.type = ListType.Bulleted;
// Sets the bullet character for this list.
paragraph.listFormat.bulletCharacter = String.fromCharCode(183);
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the font for the bullet character.
paragraph.listFormat.fontName = 'Symbol';
// Sets the bullet character size. Here, 100 means 100% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 100;
// Saves the presentation to the file system.
await pptxDoc.save('Sample.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Creates a PowerPoint presentation.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a blank slide to the presentation.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a textbox to hold the list. Bounds are in points.
var textBoxShape = slide.shapes.addTextBox({ bounds: { x: 65, y: 140, width: 410, height: 250 } });
var textBody = textBoxShape.textBody;
// Adds a new paragraph with the text in the left hand side textbox.
var paragraph = textBody.addParagraph('AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.');
// Sets the list type as Bulleted.
paragraph.listFormat.type = ej.pptx.ListType.Bulleted;
// Sets the bullet character for this list.
paragraph.listFormat.bulletCharacter = String.fromCharCode(183);
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the font for the bullet character.
paragraph.listFormat.fontName = 'Symbol';
// Sets the bullet character size. Here, 100 means 100% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 100;
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets.');
// Sets the list type as Bulleted.
paragraph.listFormat.type = ej.pptx.ListType.Bulleted;
// Sets the bullet character for this list.
paragraph.listFormat.bulletCharacter = String.fromCharCode(183);
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the font for the bullet character.
paragraph.listFormat.fontName = 'Symbol';
// Sets the bullet character size. Here, 100 means 100% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 100;
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('While its base operation is located in Washington with 290 employees, several regional sales teams are located throughout their market base.');
// Sets the list type as Bulleted.
paragraph.listFormat.type = ej.pptx.ListType.Bulleted;
// Sets the bullet character for this list.
paragraph.listFormat.bulletCharacter = String.fromCharCode(183);
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the font for the bullet character.
paragraph.listFormat.fontName = 'Symbol';
// Sets the bullet character size. Here, 100 means 100% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 100;
// Saves the presentation to the file system.
await pptxDoc.save('Sample.pptx');
{% endhighlight %}
{% endtabs %}

### Picture List

N> - `ListType.Picture` replaces the bullet glyph with a custom image supplied through `ListFormat.picture(data)`.
N> - The image data is a `Uint8Array` or base64 string of a PNG, JPEG, or GIF image. A URL is never fetched.
N> - `listFormat.size` for a picture list is expressed as a percentage of the text size (range `25` to `400`).

The following code example demonstrates how to create a simple picture list.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, ListType } from '@syncfusion/ej2-pptx';

// pictureBytes is a Uint8Array of the bullet image.
// Creates a PowerPoint presentation.
let pptxDoc = Presentation.create();
// Adds a blank slide to the presentation.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a textbox to hold the list. Bounds are in points.
let textBoxShape = slide.shapes.addTextBox({ bounds: { x: 65, y: 140, width: 410, height: 270 } });
let textBody = textBoxShape.textBody;
// Adds a new paragraph with the text in the left hand side textbox.
let paragraph = textBody.addParagraph('AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.');
// Sets the list type as Picture.
paragraph.listFormat.type = ListType.Picture;
// Sets the image for the list.
paragraph.listFormat.picture(pictureBytes);
// Sets the picture size. Here, 150 means 150% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 150;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets.');
// Sets the list type as Picture.
paragraph.listFormat.type = ListType.Picture;
// Sets the image for the list.
paragraph.listFormat.picture(pictureBytes);
// Sets the picture size. Here, 150 means 150% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 150;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Saves the presentation to the file system.
await pptxDoc.save('Sample.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// pictureBytes is a Uint8Array of the bullet image.
// Creates a PowerPoint presentation.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a blank slide to the presentation.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a textbox to hold the list. Bounds are in points.
var textBoxShape = slide.shapes.addTextBox({ bounds: { x: 65, y: 140, width: 410, height: 270 } });
var textBody = textBoxShape.textBody;
// Adds a new paragraph with the text in the left hand side textbox.
var paragraph = textBody.addParagraph('AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.');
// Sets the list type as Picture.
paragraph.listFormat.type = ej.pptx.ListType.Picture;
// Sets the image for the list.
paragraph.listFormat.picture(pictureBytes);
// Sets the picture size. Here, 150 means 150% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 150;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets.');
// Sets the list type as Picture.
paragraph.listFormat.type = ej.pptx.ListType.Picture;
// Sets the image for the list.
paragraph.listFormat.picture(pictureBytes);
// Sets the picture size. Here, 150 means 150% of the text. Possible values can range from 25 to 400.
paragraph.listFormat.size = 150;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Saves the presentation to the file system.
await pptxDoc.save('Sample.pptx');
{% endhighlight %}
{% endtabs %}

## Creating a Multilevel List

N> - When a paragraph jumps to a deeper `indentLevelNumber`, the numbering for the previous level pauses and resumes at the same value when the level returns.
N> - The valid `indentLevelNumber` range is `0` to `8`, matching Microsoft PowerPoint.

You can create a multi-level list by setting the indentation levels. By default, the level begins at 0 and increments by 1 for each level. A list can be incremented or decremented from levels 0 to 8, as in Microsoft PowerPoint.

The following code example demonstrates how to create a multilevel list.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, ListType, NumberedListStyle } from '@syncfusion/ej2-pptx';

// Creates a PowerPoint presentation.
let pptxDoc = Presentation.create();
// Adds a blank slide to the presentation.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a textbox to hold the list. Bounds are in points.
let textBoxShape = slide.shapes.addTextBox({ bounds: { x: 65, y: 140, width: 410, height: 250 } });
let textBody = textBoxShape.textBody;
// Adds a new paragraph with the text in the left hand side textbox.
let paragraph = textBody.addParagraph('AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.');
// Sets the list type as Numbered.
paragraph.listFormat.type = ListType.Numbered;
// Sets the numbered style (list numbering) as Arabic number followed by period.
paragraph.listFormat.numberStyle = NumberedListStyle.ArabicPeriod;
// Sets the starting value as 1.
paragraph.listFormat.startValue = 1;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets.');
// Sets the list type as Numbered.
paragraph.listFormat.type = ListType.Numbered;
// Sets the numbered style (list numbering) as lower case alphabet followed by period.
paragraph.listFormat.numberStyle = NumberedListStyle.AlphaLcPeriod;
// Sets the list level as 2.
paragraph.indentLevelNumber = 2;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('While its base operation is located in Washington with 290 employees, several regional sales teams are located throughout their market base.');
// Sets the list type as Numbered.
paragraph.listFormat.type = ListType.Numbered;
// Sets the numbered style (list numbering) as roman number lower casing followed by period.
paragraph.listFormat.numberStyle = NumberedListStyle.RomanLcPeriod;
// Sets the list level as 3.
paragraph.indentLevelNumber = 3;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('These subcomponents are shipped to another location for final product assembly');
// Sets the list type as Numbered.
paragraph.listFormat.type = ListType.Numbered;
// Sets the numbered style (list numbering) as Arabic number followed by period.
paragraph.listFormat.numberStyle = NumberedListStyle.ArabicPeriod;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Saves the presentation to the file system.
await pptxDoc.save('MultiLevelList.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Creates a PowerPoint presentation.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a blank slide to the presentation.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a textbox to hold the list. Bounds are in points.
var textBoxShape = slide.shapes.addTextBox({ bounds: { x: 65, y: 140, width: 410, height: 250 } });
var textBody = textBoxShape.textBody;
// Adds a new paragraph with the text in the left hand side textbox.
var paragraph = textBody.addParagraph('AdventureWorks Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company.');
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
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets.');
// Sets the list type as Numbered.
paragraph.listFormat.type = ej.pptx.ListType.Numbered;
// Sets the numbered style (list numbering) as lower case alphabet followed by period.
paragraph.listFormat.numberStyle = ej.pptx.NumberedListStyle.AlphaLcPeriod;
// Sets the list level as 2.
paragraph.indentLevelNumber = 2;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('While its base operation is located in Washington with 290 employees, several regional sales teams are located throughout their market base.');
// Sets the list type as Numbered.
paragraph.listFormat.type = ej.pptx.ListType.Numbered;
// Sets the numbered style (list numbering) as roman number lower casing followed by period.
paragraph.listFormat.numberStyle = ej.pptx.NumberedListStyle.RomanLcPeriod;
// Sets the list level as 3.
paragraph.indentLevelNumber = 3;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Adds another paragraph with the text in the left hand side textbox.
paragraph = textBody.addParagraph('These subcomponents are shipped to another location for final product assembly');
// Sets the list type as Numbered.
paragraph.listFormat.type = ej.pptx.ListType.Numbered;
// Sets the numbered style (list numbering) as Arabic number followed by period.
paragraph.listFormat.numberStyle = ej.pptx.NumberedListStyle.ArabicPeriod;
// Sets the list level as 1.
paragraph.indentLevelNumber = 1;
// Sets the hanging value.
paragraph.firstLineIndent = -20;
// Saves the presentation to the file system.
await pptxDoc.save('MultiLevelList.pptx');
{% endhighlight %}
{% endtabs %}

## See Also

* [Working with Paragraphs](./Working-with-paragraphs)
* [Working with Shapes](./Working-with-shapes)
* [Working with Tables](./Working-with-Tables)
