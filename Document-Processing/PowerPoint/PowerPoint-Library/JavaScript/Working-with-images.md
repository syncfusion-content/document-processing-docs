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
// pictureBytes is a base64 string of a PNG, JPEG, or GIF image.
let pictureBytes = '/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z';
// Creates an instance of Presentation.
let pptxDoc = Presentation.create();
// Adds a blank slide.
let slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds the picture to the slide by specifying its size and position (points).
let picture = slide.shapes.addPicture({
    data: pictureBytes,
    bounds: { x: 0, y: 0, width: 250, height: 250 }
});
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// pictureBytes is a base64 string of a PNG, JPEG, or GIF image.
var pictureBytes = '/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z';
// Creates an instance of Presentation.
var pptxDoc = ej.pptx.Presentation.create();
// Adds a blank slide.
var slide = pptxDoc.slides.add({ layout: ej.pptx.SlideLayoutType.Blank });
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

The following code example demonstrates how to replace an existing image in a slide. Get the picture from the slide and pass the new image to `replaceImageData`. The new image is stored as a new media part. PNG, JPEG, and GIF are supported.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, PictureShape } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or Base64 string of an existing .pptx file.
// newImageBytes is a base64 string of a PNG, JPEG, or GIF image.
let newImageBytes = '/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z';
// Opens an existing PowerPoint Presentation.
let pptxDoc = await Presentation.open(data);
// Retrieves the first slide from the Presentation.
let slide = pptxDoc.slides[0];
// Gets the picture from the slide.
let picture = slide.shapes[4] as PictureShape;
// Replaces the existing embedded image with the new image.
picture.replaceImageData({ data: newImageBytes });
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or Base64 string of an existing .pptx file.
// newImageBytes is a base64 string of a PNG, JPEG, or GIF image.
var newImageBytes = '/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z';
// Opens an existing PowerPoint Presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Retrieves the first slide from the Presentation.
var slide = pptxDoc.slides[0];
// Gets the picture from the slide.
var picture = slide.shapes[4];
// Replaces the existing embedded image with the new image.
picture.replaceImageData({ data: newImageBytes });
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}

## Removing Images

You can remove an image from a slide by passing its instance to `slide.shapes.remove`. The following code example demonstrates how to remove an image from a slide.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, PictureShape } from '@syncfusion/ej2-pptx';
// data is a Uint8Array or ArrayBuffer of an existing .pptx file.
// Opens an existing PowerPoint Presentation.
let pptxDoc = await Presentation.open(data);
// Retrieves the first slide from the Presentation.
let slide = pptxDoc.slides[0];
// Gets the picture from the slide.
let picture = slide.shapes[4] as PictureShape;
// Removes the picture from the slide.
slide.shapes.remove(picture);
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// data is a Uint8Array or ArrayBuffer of an existing .pptx file.

// Opens an existing PowerPoint Presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Retrieves the first slide from the Presentation.
var slide = pptxDoc.slides[0];
// Gets the picture from the slide.
var picture = slide.shapes[4];
// Removes the picture from the slide.
slide.shapes.remove(picture);
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');
{% endhighlight %}
{% endtabs %}
