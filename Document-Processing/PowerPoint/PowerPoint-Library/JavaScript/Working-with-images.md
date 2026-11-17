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

The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) facilitates adding or modifying the images in a PowerPoint Presentation. The following code example demonstrates how to add a new image to the presentation.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';
// Creates an instance of Presentation.
let pptxDoc = Presentation.create();
// Adds a blank slide.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// pictureBytes is a Uint8Array of a JPEG image.
// Adds the picture to the slide by specifying its size and position (points).
let picture = slide.shapes.addPicture({
    data: pictureBytes,
    bounds: { x: 0, y: 0, width: 250, height: 250 }
});
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Creates an instance of Presentation.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a blank slide.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
// pictureBytes is a Uint8Array of a JPEG image.
// Adds the picture to the slide by specifying its size and position (points).
var picture = slide.shapes.addPicture({
    data: pictureBytes,
    bounds: { x: 0, y: 0, width: 250, height: 250 }
});
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Replacing Images

The following code example demonstrates how to replace an existing image in a slide. Reach a picture with `Shape.asPicture()` (it returns a picture only when the shape kind is `pic`), then pass the new image bytes to `Picture.replaceImageData`. The new image is stored as a new media part; the content type is inferred from the payload (PNG, JPEG, or GIF).

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or Base64 string of an existing .pptx file.
// newImageBytes is a Uint8Array of the replacement PNG, JPEG, or GIF image.
// Opens an existing PowerPoint Presentation.
let pptxDoc = await Presentation.open(data);
// Retrieves the first slide from the Presentation.
let slide = pptxDoc.slides[0];
// Binds the first shape as a picture. asPicture returns undefined for non-picture shapes.
let picture = slide.shapes[0].asPicture();
if (picture) {
    // Replaces the existing embedded image with the new image.
    picture.replaceImageData({ data: newImageBytes });
}
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or Base64 string of an existing .pptx file.
// newImageBytes is a Uint8Array of the replacement PNG, JPEG, or GIF image.
// Opens an existing PowerPoint Presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Retrieves the first slide from the Presentation.
var slide = pptxDoc.slides[0];
// Binds the first shape as a picture. asPicture returns undefined for non-picture shapes.
var picture = slide.shapes[0].asPicture();
if (picture) {
    // Replaces the existing embedded image with the new image.
    picture.replaceImageData({ data: newImageBytes });
}
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Removing Images

The following code example demonstrates how to remove an existing image in a PowerPoint slide.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
// data is a Uint8Array or ArrayBuffer of an existing .pptx file.

// Opens an existing PowerPoint Presentation.
let pptxDoc = await Presentation.open(data);
// Retrieves the first slide from the Presentation.
let slide = pptxDoc.slides[0];
// Iterates through the shape collection and removes each picture.
for (let shape of slide.shapes) {
    let picture = shape.asPicture();
    if (picture) {
        // Removes the picture from the slide.
        slide.shapes.removePicture(picture);
    }
}
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or ArrayBuffer of an existing .pptx file.

// Opens an existing PowerPoint Presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Retrieves the first slide from the Presentation.
var slide = pptxDoc.slides[0];
// Iterates through the shape collection and removes each picture.
for (var i = 0; i < slide.shapes.length; i++) {
    var shape = slide.shapes[i];
    var picture = shape.asPicture();
    if (picture) {
        // Removes the picture from the slide.
        slide.shapes.removePicture(picture);
    }
}
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
