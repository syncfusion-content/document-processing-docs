---
title: Working with Images in JavaScript PowerPoint | Syncfusion
description: Learn how to add, replace, and remove images in a PowerPoint presentation using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Working with Images in JavaScript PowerPoint

The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) provides comprehensive support to add, replace, and remove images in a PowerPoint slide, enabling complete control over image management within presentations.

## Adding Images

The `JavaScript PowerPoint Library` facilitates adding images to a PowerPoint presentation. 

The following code example demonstrates how to add a new image to the presentation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

const __dirname = dirname(fileURLToPath(import.meta.url));

// The JS library expresses shape/picture bounds in EMU (914400 EMU = 1 inch).
// The original .NET snippet used points; convert with 1 pt = 12700 EMU so the
// picture renders at the intended visible size.
const PT = 12700; // EMU per point

// Creates an instance of Presentation.
const pptxDoc = Presentation.create();
// Adds a blank slide.
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Reads the picture bytes (JS has no FileStream; read the file directly).
const pictureBytes = readFileSync(resolve(__dirname, 'Data/Image.jpg'));
// Adds the picture to the slide by specifying its size and position.
const picture = slide.shapes.addPicture({
    data: pictureBytes, contentType: 'image/jpeg',
    bounds: { x: 0, y: 0, width: 250 * PT, height: 250 * PT },
});
// Saves the PowerPoint Presentation to a file.
const outputPath = resolve(__dirname, 'Data/PictureSample.pptx');
await pptxDoc.save(outputPath);
console.log('Saved:', outputPath);

{% endhighlight %}
{% endtabs %}

## Replacing Images

An existing picture on a slide can be retargeted with new embedded media while preserving its position, size, and slide layout. 

The following code example demonstrates how to replace an existing image in a slide. The `retargetEmbedded()` method accepts image data that represents the new image to be embedded.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { open } from '@syncfusion/ej2-pptx';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Opens an existing PowerPoint Presentation.
const bytes = readFileSync(resolve(__dirname, 'Data/ReplacePicInput.pptx'));
const pptxDoc = await open(bytes);
// Retrieves the first slide from the Presentation.
const slide = pptxDoc.slides[0];
// Retrieves the first picture from the slide.
const picture = slide.shapes[4]?.asPicture();
if (!picture) throw new Error('No picture on the slide.');
// Reads the new picture bytes.
const newBytes = readFileSync(resolve(__dirname, 'Data/Image.jpg'));
// Replaces the existing embedded image with the new image.
picture.retargetEmbedded({ data: newBytes, contentType: 'image/jpeg' });
// Saves the PowerPoint Presentation to a file.
const outputPath = resolve(__dirname, 'Data/PictureReplaced.pptx');
await pptxDoc.save(outputPath);
console.log('Saved:', outputPath);

{% endhighlight %}
{% endtabs %}

## Removing Images

A picture can be removed from a slide using `slide.shapes.removePicture()`. The picture instance is obtained by iterating through the shapes on the slide and narrowing each shape with `asPicture()`. 

The following code example demonstrates how to remove an existing image from a PowerPoint slide.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { open } from '@syncfusion/ej2-pptx';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Opens an existing PowerPoint Presentation.
const bytes = readFileSync(resolve(__dirname, 'Data/Sample.pptx'));
const pptxDoc = await open(bytes);
// Retrieves the first slide from the Presentation.
const slide = pptxDoc.slides[0];
// Iterates through a copy of the shape collection and removes each picture.
for (const shape of slide.shapes) {
    const picture = shape.asPicture();
    if (picture) {
        // Removes the picture from the slide.
        slide.shapes.removePicture(picture);
    }
}
// Saves the PowerPoint Presentation to a file.
const outputPath = resolve(__dirname, 'Data/PictureRemoved.pptx');
await pptxDoc.save(outputPath);
console.log('Saved:', outputPath);

{% endhighlight %}
{% endtabs %}