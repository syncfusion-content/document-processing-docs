---
title: List in JavaScript Word | Syncfusion
description: Learn how to create and customize numbered and bulleted lists in Word documents using the Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---

# List in JavaScript Word Library

Lists help organize and format document content in a hierarchical structure. A list can contain up to nine levels, ranging from level 0 to level 8. The JavaScript Word library supports both numbered and bulleted lists.

The following list types are supported:

* Numbered list
* Bulleted list

## Create Bulleted List

The following example shows how to create a simple bulleted list.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Creates a new Word document.
let document = WordDocument.create();

// Access section of document.
let section = document.sections[0];

// Adds the first paragraph at level 0.
let paragraph = section.body.paragraphs[0];

// Applies the default bulleted list style.
paragraph.listFormat.applyDefBulletStyle();

// Adds text to the first list item.
paragraph.appendText('List item 1');

// Adds the second paragraph.
paragraph = section.body.appendParagraph();

// Adds text to the second list item.
paragraph.appendText('List item 2');

// Continues the previously defined bullet list.
paragraph.listFormat.continueListNumbering();

// Adds the third paragraph.
paragraph = section.body.appendParagraph();

// Adds text to the third list item.
paragraph.appendText('List item 3');

// Continues the previously defined bullet list.
paragraph.listFormat.continueListNumbering();

// Saves the Word document.
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Create Numbered List

The following example shows how to create a simple numbered list.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Creates a new Word document.
let document = WordDocument.create();
// Access section of document.
let section = document.sections[0];

// Adds the first paragraph at level 0.
let paragraph = section.body.paragraphs[0];
// Applies the default numbered list style.
paragraph.listFormat.applyDefNumberedStyle();
// Adds text to the first list item.
paragraph.appendText('List item 1');

// Adds the second paragraph.
paragraph = section.body.appendParagraph();
// Adds text to the second list item.
paragraph.appendText('List item 2');
// Continues the previously defined list.
paragraph.listFormat.continueListNumbering();

// Adds the third paragraph.
paragraph = section.body.appendParagraph();
// Adds text to the third list item.
paragraph.appendText('List item 3');
// Continues the previously defined list.
paragraph.listFormat.continueListNumbering();

// Saves the Word document.
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Create Multilevel Bulleted List

The following example shows how to create a multilevel bulleted list.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Creates a new Word document.
let document = WordDocument.create();

// Access section of document.
let section = document.sections[0];

// Adds the first paragraph at level 0.
let paragraph = section.body.paragraphs[0];
paragraph.appendText('List item 1 - Level 0');
paragraph.listFormat.applyDefBulletStyle();

// Adds the second paragraph and continues the previous list.
paragraph = section.body.appendParagraph();
paragraph.appendText('List item 2 - Level 1');
paragraph.listFormat.continueListNumbering();
paragraph.listFormat.increaseIndentLevel();

// Adds the third paragraph and continues at the next level.
paragraph = section.body.appendParagraph();
paragraph.appendText('List item 3 - Level 2');
paragraph.listFormat.continueListNumbering();
paragraph.listFormat.increaseIndentLevel();

// Saves the Word document.
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Create Multilevel Numbered List

The following example shows how to create a multilevel numbered list.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Creates a new Word document.
let document = WordDocument.create();

// Access section of document.
let section = document.sections[0];

// Adds the first paragraph at level 0.
let paragraph = section.body.paragraphs[0];
paragraph.appendText('List item 1 - Level 0');
paragraph.listFormat.applyDefNumberedStyle();

// Adds the second paragraph and continues the numbered list.
paragraph = section.body.appendParagraph();
paragraph.appendText('List item 2 - Level 1');
paragraph.listFormat.continueListNumbering();
paragraph.listFormat.increaseIndentLevel();

// Adds the third paragraph and continues at the next level.
paragraph = section.body.appendParagraph();
paragraph.appendText('List item 3 - Level 2');
paragraph.listFormat.continueListNumbering();
paragraph.listFormat.increaseIndentLevel();

// Saves the Word document.
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## List Number Format

The following example shows how to create numbered list styles with different pattern types and apply them to paragraphs.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { ListPatternType, ListType, WordDocument } from '@syncfusion/ej2-docx';

// Creates a new Word document.
let document = WordDocument.create();

// Creates a numbered list style with the CardinalText pattern.
let listStyle = document.addListStyle(ListType.Numbered, 'CardinalText');
let levelOne = listStyle.levels.getItem(0);
levelOne.patternType = ListPatternType.CardinalText;
levelOne.startAt = 1;

// Gets the first section of the document.
let section = document.sections[0];

// Gets the first paragraph in the section.
let paragraph = section.body.paragraphs[0];
paragraph.appendText('List pattern Cardinal Text');

// Adds the first list item.
paragraph = section.body.appendParagraph();
paragraph.appendText('List item 1');
paragraph.listFormat.applyStyle('CardinalText');

// Adds the second list item and continues numbering.
paragraph = section.body.appendParagraph();
paragraph.appendText('List item 2');
paragraph.listFormat.applyStyle('CardinalText');
paragraph.listFormat.continueListNumbering();

// Adds the third list item and continues numbering.
paragraph = section.body.appendParagraph();
paragraph.appendText('List item 3');
paragraph.listFormat.applyStyle('CardinalText');
paragraph.listFormat.continueListNumbering();

// Adds an empty paragraph as a separator.
section.body.appendParagraph();

// Creates a numbered list style with the HindiLetter1 pattern.
listStyle = document.addListStyle(ListType.Numbered, 'HindiLetter1');
levelOne = listStyle.levels.getItem(0);
levelOne.patternType = ListPatternType.HindiLetter1;
levelOne.startAt = 1;

// Adds a heading paragraph for the Hindi letter list.
paragraph = section.body.appendParagraph();
paragraph.appendText('List pattern Hindi Letter');

// Adds the first list item.
paragraph = section.body.appendParagraph();
paragraph.appendText('List item 1');
paragraph.listFormat.applyStyle('HindiLetter1');

// Adds the second list item and continues numbering.
paragraph = section.body.appendParagraph();
paragraph.appendText('List item 2');
paragraph.listFormat.applyStyle('HindiLetter1');
paragraph.listFormat.continueListNumbering();

// Adds the third list item and continues numbering.
paragraph = section.body.appendParagraph();
paragraph.appendText('List item 3');
paragraph.listFormat.applyStyle('HindiLetter1');
paragraph.listFormat.continueListNumbering();

// Adds an empty paragraph as a separator.
section.body.appendParagraph();

// Creates a numbered list style with the Hebrew1 pattern.
listStyle = document.addListStyle(ListType.Numbered, 'Hebrew1');
levelOne = listStyle.levels.getItem(0);
levelOne.patternType = ListPatternType.Hebrew1;
levelOne.startAt = 1;

// Adds a heading paragraph for the Hebrew list.
paragraph = section.body.appendParagraph();
paragraph.appendText('List pattern Hebrew');

// Adds the first list item.
paragraph = section.body.appendParagraph();
paragraph.appendText('List item 1');
paragraph.listFormat.applyStyle('Hebrew1');

// Adds the second list item and continues numbering.
paragraph = section.body.appendParagraph();
paragraph.appendText('List item 2');
paragraph.listFormat.applyStyle('Hebrew1');
paragraph.listFormat.continueListNumbering();

// Adds the third list item and continues numbering.
paragraph = section.body.appendParagraph();
paragraph.appendText('List item 3');
paragraph.listFormat.applyStyle('Hebrew1');
paragraph.listFormat.continueListNumbering();

// Saves the Word document.
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Customize List

The following example shows how to create a custom numbered list style with follow character, prefix, suffix, alignment, and pattern settings.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { FollowCharacterType, ListNumberAlignment, ListPatternType, ListType, WordDocument } from '@syncfusion/ej2-docx';

// Creates a new Word document
let document = WordDocument.create();

// Adds new list style to the document
let listStyle = document.addListStyle(ListType.Numbered, 'UserDefinedList');

let levelOne = listStyle.levels.getItem(0);
// Defines the follow character, prefix, suffix, start index for level 0
levelOne.followCharacter = FollowCharacterType.Tab;
levelOne.numberPrefix = '(';
levelOne.numberSuffix = ')';
levelOne.patternType = ListPatternType.RomanLow;
levelOne.startAt = 1;
levelOne.tabSpaceAfter = 5;
levelOne.numberAlignment = ListNumberAlignment.Center;

let levelTwo = listStyle.levels.getItem(1);
// Defines the follow character, suffix, pattern, start index for level 1
levelTwo.followCharacter = FollowCharacterType.Tab;
levelTwo.numberSuffix = '}';
levelTwo.patternType = ListPatternType.LetterLow;
levelTwo.startAt = 2;

// Access section of document.
let section = document.sections[0];

// Adds the first paragraph at level 0.
let paragraph = section.body.paragraphs[0];
paragraph.appendText('User defined list - Level 0');
paragraph.listFormat.applyStyle('UserDefinedList');

// Level 1 item: continue prior list, then increase indent
paragraph = section.body.appendParagraph();
paragraph.appendText('User defined list - Level 1');
paragraph.listFormat.continueListNumbering();
paragraph.listFormat.increaseIndentLevel();

// Saves the Word document.
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Change List Levels

You can change list levels with `increaseIndentLevel()` and `decreaseIndentLevel()`. The following example demonstrates how to change list levels within the same numbered list.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Creates a new Word document.
let document = WordDocument.create();

// Access section of document.
let section = document.sections[0];

// Adds the first paragraph at level 0.
let paragraph = section.body.paragraphs[0];

paragraph.appendText('Multilevel numbered list - Level 0');
paragraph.listFormat.applyDefNumberedStyle();

// Adds the second paragraph at level 1.
paragraph = section.body.appendParagraph();

paragraph.appendText('Multilevel numbered list - Level 1');
paragraph.listFormat.continueListNumbering();
paragraph.listFormat.increaseIndentLevel();

// Adds the third paragraph at level 0.
paragraph = section.body.appendParagraph();

paragraph.appendText('Multilevel numbered list - Level 0');
paragraph.listFormat.continueListNumbering();
paragraph.listFormat.decreaseIndentLevel();

// Adds the fourth paragraph at level 1.
paragraph = section.body.appendParagraph();

paragraph.appendText('Multilevel numbered list - Level 1');
paragraph.listFormat.continueListNumbering();
paragraph.listFormat.increaseIndentLevel();

// Saves the Word document.
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Custom Bulleted List

The following example shows how to create a custom bulleted list style with bullet characters and fonts.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { ListPatternType, ListType, WordDocument } from '@syncfusion/ej2-docx';

// Create a new Word document.
let document = WordDocument.create();

// Add a new list style to the document.
let listStyle = document.addListStyle(ListType.Bulleted, 'UserDefinedList');

let levelOne = listStyle.levels.getItem(0);
// Define the pattern, bullet character, and start index for level 0.
levelOne.patternType = ListPatternType.Bullet;
levelOne.bulletCharacter = '*';
levelOne.startAt = 1;

let levelTwo = listStyle.levels.getItem(1);
// Define the pattern, bullet character, and start index for level 1.
levelTwo.patternType = ListPatternType.Bullet;
levelTwo.bulletCharacter = '\u00A9';
levelTwo.characterFormat.fontName = 'Wingdings';
levelTwo.startAt = 1;

let levelThree = listStyle.levels.getItem(2);
// Define the pattern, bullet character, and start index for level 2.
levelThree.patternType = ListPatternType.Bullet;
levelThree.bulletCharacter = '\u0076';
levelThree.characterFormat.fontName = 'Wingdings';
levelThree.startAt = 1;

// Access section of document.
let section = document.sections[0];

// Adds the first paragraph at level 0.
let paragraph = section.body.paragraphs[0];
paragraph.appendText('User defined list - Level 0');
paragraph.listFormat.applyStyle('UserDefinedList');

// Level 1
paragraph = section.body.appendParagraph();
paragraph.appendText('User defined list - Level 1');
paragraph.listFormat.continueListNumbering();
paragraph.listFormat.increaseIndentLevel();

// Level 2
paragraph = section.body.appendParagraph();
paragraph.appendText('User defined list - Level 2');
paragraph.listFormat.continueListNumbering();
paragraph.listFormat.increaseIndentLevel();

// Saves the Word document.
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Number List with Prefixes

The following example shows how to create a custom multilevel numbered list that includes previous level numbers in the prefix.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { FollowCharacterType, ListPatternType, ListType, WordDocument } from '@syncfusion/ej2-docx';

// Create a new Word document.
let document = WordDocument.create();

// Add a new list style to the document.
let listStyle = document.addListStyle(ListType.Numbered, 'UserDefinedList');

let levelOne = listStyle.levels.getItem(0);
// Define the follow character, pattern, and start index for level 0.
levelOne.followCharacter = FollowCharacterType.Nothing;
levelOne.patternType = ListPatternType.Arabic;
levelOne.startAt = 1;

let levelTwo = listStyle.levels.getItem(1);
// Define the follow character, prefix from previous level, pattern, and start index for level 1.
levelTwo.followCharacter = FollowCharacterType.Nothing;
levelTwo.numberPrefix = '\u0000.';
levelTwo.patternType = ListPatternType.Arabic;
levelTwo.startAt = 1;

let levelThree = listStyle.levels.getItem(2);
// Define the follow character, prefix from previous level, pattern, and start index for level 2.
levelThree.followCharacter = FollowCharacterType.Nothing;
levelThree.numberPrefix = '\u0000.\u0001.';
levelThree.patternType = ListPatternType.Arabic;
levelThree.startAt = 1;

// Access section of document.
let section = document.sections[0];

// Level 0
let paragraph = section.body.paragraphs[0];
paragraph.appendText('User defined list - Level 0');
paragraph.listFormat.applyStyle('UserDefinedList');

// Level 1
paragraph = section.body.appendParagraph();
paragraph.appendText('User defined list - Level 1');
paragraph.listFormat.continueListNumbering();
paragraph.listFormat.increaseIndentLevel();

// Level 2
paragraph = section.body.appendParagraph();
paragraph.appendText('User defined list - Level 2');
paragraph.listFormat.continueListNumbering();
paragraph.listFormat.increaseIndentLevel();

// Saves the Word document.
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Get List Value

The following example shows how to get the display string of a list value for a paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { WordDocument } from '@syncfusion/ej2-docx';

// Load an existing Word document.
let document = WordDocument.open(data);

// Get the string that represents the appearance of the list value of the last paragraph.
let listString = document.lastParagraph.listString;
console.log('listString:', JSON.stringify(listString));

// Saves the Word document.
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}