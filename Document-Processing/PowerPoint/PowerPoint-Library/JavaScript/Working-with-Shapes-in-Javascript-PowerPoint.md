---
title: Working with Shapes in JavaScript PowerPoint | Syncfusion
description: Learn how to add, iterate through, and remove shapes in a PowerPoint presentation using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Working with Shapes in JavaScript PowerPoint

The `JavaScript PowerPoint Library` provides comprehensive support to add, iterate through, and remove shapes in a PowerPoint slide, enabling complete control over the graphical elements within slides.

## Adding shapes to a slide

In every slide, there is a shape collection that can contain any form of graphical objects such as AutoShape, chart, text, or picture. Any shape element can be added to this collection.

The following code example demonstrates how to add an AutoShape to the shape collection of a slide.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { readFileSync } from 'node:fs';
import { Presentation, SlideLayoutType, AutoShapeType } from '@syncfusion/ej2-pptx';

// EMU per point
const PT = 12700; 
// Creates an instance for PowerPoint.
const pptxDoc = Presentation.create();
// Adds a blank slide to the Presentation.
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a normal shape to the slide.
slide.shapes.addShape(AutoShapeType.Rectangle, {
    x: 50 * PT, y: 200 * PT, width: 300 * PT, height: 300 * PT
});
// Reads the image bytes.
const imageBytes = readFileSync('temp/Data/Image.jpg');
// Add picture to the shape collection.
const picture = slide.shapes.addPicture({
    data: imageBytes, contentType: 'image/jpeg',
    bounds: {
        x: 373 * PT, y: 83 * PT, width: 526 * PT, height: 382 * PT
    }
});
// Saves the Presentation to the file system.
await pptxDoc.save('temp/Data/ShapeSample.pptx');

{% endhighlight %}
{% endtabs %}

## Iterating through shapes

The shapes in a PowerPoint slide can be iterated through. The following code example demonstrates how to iterate through the shapes present in a slide and set the Title property of each shape based on its type. The Title is shown in PowerPoint's selection pane and helps identify the shape.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { readFileSync, writeFileSync } from 'node:fs';
import { open } from '@syncfusion/ej2-pptx';

// Loads or opens a PowerPoint Presentation.
const bytes = readFileSync('temp/Data/Sample.pptx');
const pptxDoc = await open(bytes);
// Iterates through the shapes in a slide and detects their type.
const slide = pptxDoc.slides[0];
for (const shape of slide.shapes) {
    if (shape.kind === 'picture') {
        // Picture shape detected.
    } else if (shape.kind === 'shape') {
        // AutoShape detected.
    }
}
// Saves the Presentation to the file system.
await pptxDoc.save('ShapeOutput1.pptx');

{% endhighlight %}
{% endtabs %}

## Removing the shapes

The shapes can be removed from a slide by its instance or by its index position in the shape collection. 

The following code example demonstrates how to remove the shapes from a slide.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { readFileSync } from 'node:fs';
import { open } from '@syncfusion/ej2-pptx';

// Loads or opens a PowerPoint Presentation.
const bytes = readFileSync('temp/Data/Sample.pptx');
const pptxDoc = await open(bytes);
// Iterates through the shapes in a slide and removes the first AutoShape that is not a placeholder
const slide = pptxDoc.slides[0];
for (const shape of slide.shapes) {
    if (shape.kind === 'shape' && !shape.isPlaceholder) {
        slide.shapes.remove(shape);
        break;
    }
}
// Saves the Presentation to the file system.
await pptxDoc.save('ShapeOutput2.pptx');

{% endhighlight %}
{% endtabs %}