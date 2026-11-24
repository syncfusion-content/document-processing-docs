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

Notes are the contents associated with each slide and are visible only to the presenter in "Presenter View". They show hints for the speaker, so they are often called "Speaker Notes". The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) can create a notes slide for a slide, replace its body text, and read the notes of an existing presentation.

Notes are exposed through two helper functions that take a slide and the presentation's live package part access:

* `ensureNotes(slide, access)` — returns the existing notes slide of the slide, or creates and associates a new notes slide part when none exists. A second call on the same slide is idempotent.
* `getNotes(slide, access)` — returns the notes slide only when the slide already has a notes part. It never creates notes.

The returned handle is a `NotesSlide`. It exposes the notes body placeholder (`getBodyShape`, `bodyTextBody`), the concatenated body text (`getBodyText`), and a whole-body text replacement (`setBodyText`).

N> Refer to the appropriate tabs in the code snippet section: **TypeScript** for TypeScript applications and **JavaScript** for JavaScript applications.

## Prerequisites

Before you begin, make sure the following npm package is installed in your application.

```sh
npm install @syncfusion/ej2-pptx
```

For more information on package setup for each platform, refer to [Getting Started](./Getting-Started).

## Adding Notes to a Slide

The following code example demonstrates how to add notes to a PowerPoint slide. `ensureNotes` creates the notes slide part when it does not exist, and `setBodyText` writes the speaker notes into the body placeholder of the notes slide.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, ensureNotes } from '@syncfusion/ej2-pptx';

// Creates a Presentation instance.
let pptxDoc = Presentation.create();
// Adds a slide with blank layout type.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a notes slide to the slide and writes the notes text.
let notesSlide = ensureNotes(slide, pptxDoc.packagePartAccess());
notesSlide.setBodyText('Notes content');
// Saves the Presentation to the file system.
await pptxDoc.save('PresentationWithNotesSlide.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Creates a Presentation instance.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a slide with blank layout type.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a notes slide to the slide and writes the notes text.
var notesSlide = ej.pptx.ensureNotes(slide, pptxDoc.packagePartAccess());
notesSlide.setBodyText('Notes content');
// Saves the Presentation to the file system.
await pptxDoc.save('PresentationWithNotesSlide.pptx');

{% endhighlight %}
{% endtabs %}

N> `ensureNotes` returns the existing notes slide when the slide already has one; it does not create a second notes part. Use `getNotes` instead when you want to read notes without ever creating them.

## Adding Text into the Notes

The `setBodyText` function replaces the body placeholder text with a single paragraph and a single text run. When the notes body already contains text, the first run is set to the new value and the remaining body runs are cleared, so the visible body becomes exactly `value`.

The following code example demonstrates how to add text into the notes of a slide.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, ensureNotes } from '@syncfusion/ej2-pptx';

// Creates a Presentation instance.
let pptxDoc = Presentation.create();
// Adds a slide with blank layout type.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a notes slide to the slide.
let notesSlide = ensureNotes(slide, pptxDoc.packagePartAccess());
// Writes the notes text into the body placeholder of the notes slide.
notesSlide.setBodyText('The notes slide represents the contents and key notes of the corresponding slide. It is more useful when we use Presenter View while presenting the seminars through SlideShow.');
// Saves the Presentation to the file system.
await pptxDoc.save('PresentationWithNotesText.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Creates a Presentation instance.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a slide with blank layout type.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// Adds a notes slide to the slide.
var notesSlide = ej.pptx.ensureNotes(slide, pptxDoc.packagePartAccess());
// Writes the notes text into the body placeholder of the notes slide.
notesSlide.setBodyText('The notes slide represents the contents and key notes of the corresponding slide. It is more useful when we use Presenter View while presenting the seminars through SlideShow.');
// Saves the Presentation to the file system.
await pptxDoc.save('PresentationWithNotesText.pptx');

{% endhighlight %}
{% endtabs %}

N> `setBodyText` replaces the whole body text. It does not append paragraphs, and per-run font formatting cannot be applied through this function. The notes body placeholder must exist; writing to a notes slide without a body placeholder throws a `NotesError`.

## Adding a Numbered List to Notes

The JavaScript PowerPoint Library does not currently support adding numbered lists (or bulleted lists) to notes. The notes API replaces the body placeholder text through `setBodyText`, and there is no API to set paragraph numbering properties such as `buAutoNum` on the notes paragraphs. Numbered-list numbering has to be added by editing the presentation in Microsoft PowerPoint.

## Removing Notes from a Slide

The JavaScript PowerPoint Library does not currently support removing a notes slide from a slide. There is no `removeNotes` API in the notes feature, and the notes part is preserved as-is on save. To remove notes, delete the notes slide in Microsoft PowerPoint.

## Reading Notes from a Slide

`getNotes` returns the notes slide when the slide has a notes part, and `undefined` otherwise. `getBodyText` returns the concatenated text of all paragraphs and runs of the body placeholder.

The following code example demonstrates how to read the notes of a slide.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, getNotes } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or base64 string of a .pptx file.
// Opens an existing PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Gets the first slide.
let slide = pptxDoc.slides[0];
// Returns the notes slide when the slide has one, otherwise undefined.
let notesSlide = getNotes(slide, pptxDoc.packagePartAccess());
if (notesSlide) {
  // Reads the notes body text.
  let notesText = notesSlide.getBodyText();
}

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// data is a Uint8Array or base64 string of a .pptx file.
// Opens an existing PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Gets the first slide.
var slide = pptxDoc.slides[0];
// Returns the notes slide when the slide has one, otherwise undefined.
var notesSlide = ej.pptx.getNotes(slide, pptxDoc.packagePartAccess());
if (notesSlide) {
  // Reads the notes body text.
  var notesText = notesSlide.getBodyText();
}

{% endhighlight %}
{% endtabs %}

## See Also

* [Working with Slides](./Working-with-Slide)
* [Working with Paragraphs](./Working-with-paragraphs)
* [Working with PowerPoint Presentation](./Working-with-PowerPoint-presentation)
