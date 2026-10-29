---
layout: post
title: Working with Slides in JavaScript PowerPoint | Syncfusion
description: Learn how to add, remove, and access slides in a PowerPoint presentation using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint
---

# Working with Slides in JavaScript PowerPoint

## Adding a slide to a PowerPoint presentation

In a PowerPoint presentation, a slide is a container for elements such as shapes, images, charts, and text boxes. The slides may inherit the formatting and layout properties from their 'Master' and 'Layout' slides.

The following code example demonstrates how to add a blank slide to the Presentation. By default, the `slides.add()` overload adds a slide using the default layout of the master.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
// Creates a Presentation instance.
let pptxDoc = Presentation.create();
// Adds a slide to the PowerPoint presentation.
let slide = pptxDoc.slides.add();
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Creates a Presentation instance.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a slide to the PowerPoint presentation.
var slide = pptxDoc.slides.add();
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Create a slide with predefined LayoutSlide

The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) supports the following predefined slide layout types to create a slide as equivalent to Microsoft PowerPoint:

* Blank
* Comparison
* Content with caption
* Picture with caption
* Section header
* Title
* Title and content
* Title and vertical text
* Title only
* Two content
* Vertical title and text

The following example demonstrates how to access a slide from the predefined blank slide layout type.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';
// Create a new instance of PowerPoint Presentation file.
let pptxDoc = Presentation.create();
// Add a slide of title layout type.
let slide1 = pptxDoc.slides.add({ layout: SlideLayoutType.Title });
// Save the PowerPoint file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new instance of PowerPoint Presentation file.
var pptxDoc = ej.pptx.Presentation.create();
// Add a slide of title layout type.
var slide1 = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Title });
// Save the PowerPoint file.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Removing a slide

The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) provides the ability to delete a slide by its instance or by its index position in the slide collection. The following code demonstrates how to delete a slide from a presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}
import { Presentation } from '@syncfusion/ej2-pptx';

// Create a new PowerPoint presentation.
let pptxDoc = Presentation.create();
// Add a few slides.
pptxDoc.slides.add();
pptxDoc.slides.add();
pptxDoc.slides.add();
// Retrieve the slide instance to remove.
let slide = pptxDoc.slides[0];
// Remove the specified slide from the Presentation.
pptxDoc.slides.remove(slide);
// Remove the slide from the specified index.
pptxDoc.slides.removeAt(1);
// Save the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PowerPoint presentation.
var pptxDoc = ej.pptx.Presentation.create();
// Add a few slides.
pptxDoc.slides.add();
pptxDoc.slides.add();
pptxDoc.slides.add();
// Retrieve the slide instance to remove.
var slide = pptxDoc.slides[0];
// Remove the specified slide from the Presentation.
pptxDoc.slides.remove(slide);
// Remove the slide from the specified index.
pptxDoc.slides.removeAt(1);
// Save the Presentation to the file system.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
