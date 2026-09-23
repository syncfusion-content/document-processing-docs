---
title: Working with Slides in JavaScript PowerPoint | Syncfusion
description: Learn how to add, remove, and access slides in a PowerPoint presentation using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Working with Slides in JavaScript PowerPoint

The `JavaScript PowerPoint Library` provides comprehensive support to create, access, and manage slides in a PowerPoint presentation, enabling complete control over slide operations.

## Adding a slide to a PowerPoint presentation

In a PowerPoint presentation, a slide is a container for elements such as shapes, images, charts, and text boxes. The slides may inherit the formatting and layout properties from their 'Master' and 'Layout' slides.

The following code example demonstrates how to add a blank slide to the Presentation. By default, the `slides.add()` overload adds a slide using the default layout of the master.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// Creates a Presentation instance.
const pptxDoc = Presentation.create();
// Adds a slide to the PowerPoint presentation.
const slide = pptxDoc.slides.add();
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Create a slide with predefined layout slide

The `JavaScript PowerPoint Library` supports the following predefined slide layout types to create a slide equivalent to Microsoft PowerPoint:

- Blank
- Comparison
- Content with caption
- Picture with caption
- Section header
- Title
- Title and content
- Title and vertical text
- Title only
- Two content
- Vertical title and text

The following code example demonstrates how to create a slide using the predefined blank layout type.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// Create a new instance of PowerPoint Presentation file.
const pptxDoc = Presentation.create();
// Add a slide of blank layout type.
const slide1 = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Save the PowerPoint file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Removing a slide

The `JavaScript PowerPoint Library` provides the ability to delete a slide by its instance or by its index position in the slide collection.

The following code example demonstrates how to delete a slide from a presentation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// Create a new PowerPoint presentation.
const pptxDoc = Presentation.create();
// Add a few slides.
pptxDoc.slides.add();
pptxDoc.slides.add();
pptxDoc.slides.add();
// Retrieve the slide instance to remove.
const slide = pptxDoc.slides[0];
// Remove the specified slide from the Presentation.
pptxDoc.slides.remove(slide);
// Remove the slide from the specified index.
pptxDoc.slides.removeAt(1);
// Save the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Access the Master slide

In a PowerPoint presentation, the master slide is the top slide that controls all information about the theme, layout, background, colors, fonts, and positioning of all slides. Using the MasterSlide, you can easily adjust the look of an existing theme or make overall changes to all your slides.

The following code example demonstrates how to access the MasterSlide in a PowerPoint presentation. The `name` property returns the name of the shape as a string and is used here only for demonstration.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// Create a PowerPoint presentation.
const pptxDoc = Presentation.create();
// Access the first master slide in the PowerPoint presentation.
const masterSlide = pptxDoc.slideMasters[0];
// Get the first shape name from the master slide.
const shapeName = masterSlide.shapes[0].name;
// Save the PowerPoint presentation to a file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}