---
layout: post
title: Working with Sections in JavaScript PowerPoint | Syncfusion
description: Learn how to create, insert, move, clone, and remove PowerPoint sections using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint
---

# Working with Sections in JavaScript PowerPoint

A section groups slides in a PowerPoint presentation without changing slide order. A slide belongs to at most one section. Removing a section removes only the section definition; the slides stay in the presentation.

Access sections through `presentation.sections`. Use `sections.at(index)` for a section and `sections.count` for the number of sections. A newly added section is named `Untitled` until you set `section.name`.

## Creating a Section

### Adding a New Slide to a Section

The following code example adds a section, names it, and appends a new blank slide to that section.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';
// Creates a PowerPoint presentation.
let pptxDoc = Presentation.create();
// Adds a section to the PowerPoint presentation.
let section = pptxDoc.sections.add();
// Sets a name for the created section.
section.name = 'SectionDemo';
// Adds a slide to the created section.
let slide = section.addSlide(SlideLayoutType.Blank);
// Adds a text box to the slide. Bounds are in points.
slide.shapes.addTextBox({
    bounds: { x: 10, y: 10, width: 100, height: 100 },
    text: 'Slide in SectionDemo'
});
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Creates a PowerPoint presentation.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a section to the PowerPoint presentation.
var section = pptxDoc.sections.add();
// Sets a name for the created section.
section.name = 'SectionDemo';
// Adds a slide to the created section.
var slide = section.addSlide(ej.pptx.SlideLayoutType.Blank);
// Adds a text box to the slide. Bounds are in points.
slide.shapes.addTextBox({
    bounds: { x: 10, y: 10, width: 100, height: 100 },
    text: 'Slide in SectionDemo'
});
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

### Adding an Existing Slide to a Section

An existing slide is assigned to a section with `slide.moveToSection(sectionIndex)`. The slide stays at its current index in the presentation. If the slide already belongs to another section, that section loses the slide.

The following code example creates two slides, places them in the first section, then moves the second slide into a new section.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
// Creates a PowerPoint presentation.
let pptxDoc = Presentation.create();
// Adds slides to the presentation.
let firstSlide = pptxDoc.slides.add();
let existingSlide = pptxDoc.slides.add();
// Adds a section and assigns the first slide to it.
let firstSection = pptxDoc.sections.add();
firstSection.name = 'ExistingSlides';
firstSlide.moveToSection(0);
// Adds another section and moves the existing slide into it.
let section = pptxDoc.sections.add();
section.name = 'MovedSlide';
existingSlide.moveToSection(1);
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Creates a PowerPoint presentation.
var pptxDoc = ej.pptx.Presentation.create();
// Adds slides to the presentation.
var firstSlide = pptxDoc.slides.add();
var existingSlide = pptxDoc.slides.add();
// Adds a section and assigns the first slide to it.
var firstSection = pptxDoc.sections.add();
firstSection.name = 'ExistingSlides';
firstSlide.moveToSection(0);
// Adds another section and moves the existing slide into it.
var section = pptxDoc.sections.add();
section.name = 'MovedSlide';
existingSlide.moveToSection(1);
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

### Inserting a Section

`sections.add()` always appends a section. `sections.insert(index, section)` moves a section that already belongs to the presentation to a new index. It does not copy the section, and the index must be inside the current section list.

The following code example opens a presentation, appends a section, then moves that section to the second position and removes the section left at the end.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
// data is a Uint8Array or ArrayBuffer of PPTXWithSections.pptx.
// Loads a PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Creates a new section to insert.
let section = pptxDoc.sections.add();
// Names the created section.
section.name = 'InsertedSection';
// Inserts the section at the second position.
pptxDoc.sections.insert(1, section);
// Removes the unwanted section left at the end.
pptxDoc.sections.removeAt(pptxDoc.sections.count - 1);
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or ArrayBuffer of PPTXWithSections.pptx.
// Loads a PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Creates a new section to insert.
var section = pptxDoc.sections.add();
// Names the created section.
section.name = 'InsertedSection';
// Inserts the section at the second position.
pptxDoc.sections.insert(1, section);
// Removes the unwanted section left at the end.
pptxDoc.sections.removeAt(pptxDoc.sections.count - 1);
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

N> `insert` reorders a section that is already in the presentation. The destination index must be from `0` through `sections.count - 1`.

## Moving the Sections within a PowerPoint Presentation

`section.move(index)` moves that section to a new index. The section currently at the destination index shifts right. The following code example moves the section at index 2 to index 3.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
// data is a Uint8Array or ArrayBuffer of PPTXWithSections.pptx.
// Loads a PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Moves the section at index 2 to index 3.
pptxDoc.sections.at(2).move(3);
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or ArrayBuffer of PPTXWithSections.pptx.
// Loads a PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Moves the section at index 2 to index 3.
pptxDoc.sections.at(2).move(3);
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Moving a Slide within Sections

`slide.moveToSection(sectionIndex)` assigns the slide to the section at that index. The slide is removed from its previous section, if any, and keeps its place in the slide collection. The following code example moves the first slide of the second section into the first section.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
// data is a Uint8Array or ArrayBuffer of PPTXWithSections.pptx.
// Loads a PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Gets the first slide of the second section.
let slide = pptxDoc.sections.at(1).slides[0];
// Moves the slide to the first section.
slide.moveToSection(0);
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or ArrayBuffer of PPTXWithSections.pptx.
// Loads a PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Gets the first slide of the second section.
var slide = pptxDoc.sections.at(1).slides[0];
// Moves the slide to the first section.
slide.moveToSection(0);
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Cloning Slides from a Section

`section.clone()` returns detached copies of the slides in that section, in section order. The copies are not members of the source presentation. Add each copy with `slides.add(slide)` on the destination presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
// data is a Uint8Array or ArrayBuffer of PPTXWithSections.pptx.
// Loads a PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Clones the slides in the third section.
let slides = pptxDoc.sections.at(2).clone();
// Creates a destination PowerPoint presentation. An existing presentation can also be used here.
let destinationPptx = Presentation.create();
// Adds each cloned slide to the destination presentation.
for (let slide of slides) {
    destinationPptx.slides.add(slide);
}
// Saves the destination PowerPoint presentation.
await destinationPptx.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or ArrayBuffer of PPTXWithSections.pptx.
// Loads a PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Clones the slides in the third section.
var slides = pptxDoc.sections.at(2).clone();
// Creates a destination PowerPoint presentation. An existing presentation can also be used here.
var destinationPptx = ej.pptx.Presentation.create();
// Adds each cloned slide to the destination presentation.
for (var i = 0; i < slides.length; i++) {
    destinationPptx.slides.add(slides[i]);
}
// Saves the destination PowerPoint presentation.
await destinationPptx.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Removing a Section

`sections.remove(section)` and `sections.removeAt(index)` remove a section definition. Slides that belonged to the section remain in the presentation. The following code example removes the second section.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
// data is a Uint8Array or ArrayBuffer of PPTXWithSections.pptx.
// Loads a PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Removes the second section from the PowerPoint presentation.
pptxDoc.sections.remove(pptxDoc.sections.at(1));
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or ArrayBuffer of PPTXWithSections.pptx.
// Loads a PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Removes the second section from the PowerPoint presentation.
pptxDoc.sections.remove(pptxDoc.sections.at(1));
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Remove All Sections

`sections.clear()` removes every section definition. Slides stay in the presentation. The following code example clears all sections.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
// data is a Uint8Array or ArrayBuffer of PPTXWithSections.pptx.
// Loads a PowerPoint presentation.
let pptxDoc = await Presentation.open(data);
// Removes all sections from the PowerPoint presentation.
pptxDoc.sections.clear();
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or ArrayBuffer of PPTXWithSections.pptx.
// Loads a PowerPoint presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Removes all sections from the PowerPoint presentation.
pptxDoc.sections.clear();
// Saves the PowerPoint presentation.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
