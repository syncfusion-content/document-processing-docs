---
layout: post
title: Working with Images in JavaScript PowerPoint | Syncfusion
description: Learn how to add, replace, and remove images in a PowerPoint presentation using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint
---

# Working with Images in JavaScript PowerPoint

## Adding Images

The JavaScript PowerPoint Library facilitates adding or modifying the images in a PowerPoint Presentation. The following code example demonstrates how to add a new image to the presentation.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

// Creates an instance of Presentation.
const pptxDoc = Presentation.create();

// Adds a blank slide.
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });

// pictureBytes is a Uint8Array of a JPEG image.
// Adds the picture to the slide by specifying its size and position (points).
const picture = slide.shapes.addPicture({
    data: pictureBytes,
    bounds: { x: 0, y: 0, width: 250, height: 250 }
});

// Saves the Presentation to the file system.
await pptxDoc.save('PictureSample.pptx');

{% endhighlight %}
{% endtabs %}

## Replacing Images

The following code example demonstrates how to replace an existing image in a slide. The `Picture.replaceImageData` method accepts image data that represents the new image.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of an existing .pptx file.
// Opens an existing PowerPoint Presentation.
const pptxDoc = await Presentation.open(data);

// Retrieves the first slide from the Presentation.
const slide = pptxDoc.slides[0];

// Retrieves the picture from the slide.
const picture = slide.shapes[4].asPicture();
if (!picture) {
    throw new Error('No picture on the slide.');
}

// newBytes is a Uint8Array of the replacement JPEG image.
// Replaces the existing embedded image with the new image.
picture.replaceImageData({ data: newBytes });

// Saves the Presentation to the file system.
await pptxDoc.save('PictureReplaced.pptx');

{% endhighlight %}
{% endtabs %}

## Removing Images

The following code example demonstrates how to remove an existing image in a PowerPoint slide.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of an existing .pptx file.
// Opens an existing PowerPoint Presentation.
const pptxDoc = await Presentation.open(data);

// Retrieves the first slide from the Presentation.
const slide = pptxDoc.slides[0];

// Iterates through the shape collection and removes each picture.
for (const shape of slide.shapes) {
    const picture = shape.asPicture();
    if (picture) {
        // Removes the picture from the slide.
        slide.shapes.removePicture(picture);
    }
}

// Saves the Presentation to the file system.
await pptxDoc.save('PictureRemoved.pptx');

{% endhighlight %}
{% endtabs %}
