---
title: Working with Images in JavaScript PowerPoint | Syncfusion
description: Learn how to add, replace, and remove images in a PowerPoint presentation using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Working with Images in JavaScript PowerPoint

The `JavaScript PowerPoint Library` provides comprehensive support to add, replace, and remove images in a PowerPoint slide, enabling complete control over image management within presentations.

## Adding Images

The `JavaScript PowerPoint Library` facilitates adding images to a PowerPoint presentation. 

The following code example demonstrates how to add a new image to the presentation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
 
// data is a Uint8Array or ArrayBuffer of an .pptx file
// Opens the presentation.
const pptxDoc = await Presentation.open(data);
// Retrieves the first slide from the Presentation.
const slide = pptxDoc.slides[0];
// Retrieves the picture from the slide.
const picture = slide.shapes[3]?.asPicture();
// newBytes is the bytes of new picture to be replaced
// Replaces the existing embedded image with a new image.
picture.replaceImageData({ data: newBytes });
// Saves the PowerPoint Presentation to a file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Replacing Images

An existing picture in a slide can be replaced with a new image while preserving its position, size, and slide layout. 

The following code example demonstrates how to replace an existing image in a slide. The `retargetEmbedded()` method accepts image data that represents the new image to be embedded.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
 
// data is a Uint8Array or ArrayBuffer of an .pptx file
// Opens the presentation.
const pptxDoc = await Presentation.open(data);
// Retrieves the first slide from the Presentation.
const slide = pptxDoc.slides[0];
// Retrieves the picture from the slide.
const picture = slide.shapes[3]?.asPicture();
// newBytes is the bytes of new picture to be replaced
// Replaces the existing embedded image with a new image.
picture.replaceImageData({ data: newBytes });
// Saves the PowerPoint Presentation to a file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Removing Images

A picture can be removed from a slide using `slide.shapes.removePicture()`. The picture instance is obtained by iterating through the shapes on the slide and narrowing each shape with `asPicture()`. 

The following code example demonstrates how to remove an existing image from a PowerPoint slide.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of an .pptx file
// Opens an existing PowerPoint Presentation.
const pptxDoc = await Presentation.open(bytes);
// Retrieves the first slide from the Presentation.
const slide = pptxDoc.slides[0];
// Fetches the picture shape.
const shape = slide.shapes[3];
const picture = shape.asPicture();
if (picture) {
    // Removes the picture from the slide.
    slide.shapes.removePicture(picture);
}
// Saves the PowerPoint Presentation to a file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}