---
layout: post
title: Working with Shapes in JavaScript PowerPoint | Syncfusion
description: Learn how to add, iterate, and remove shapes in a PowerPoint slide using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint
appliesto: Document SDK
---

# Working with Shapes in JavaScript PowerPoint

## Adding shapes to a slide

In every slide, there is a shape collection that can contain any form of graphical objects such as AutoShape, chart, text, or picture. You can add any shape element to this collection.

The following code example demonstrates how to add an AutoShape to the shape collection of a slide.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, AutoShapeType } from '@syncfusion/ej2-pptx';
(async () => {
// Creates an instance for PowerPoint.
const pptxDoc = Presentation.create();
// Adds a blank slide to the Presentation.
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a normal shape to the slide. Bounds are in points.
slide.shapes.addShape(AutoShapeType.Rectangle, {
    x: 50, y: 200, width: 300, height: 300
});
// imageBytes is a Uint8Array of a JPEG image.
// Add picture to the shape collection.
const picture = slide.shapes.addPicture({
    data: imageBytes,
    bounds: {
        x: 373, y: 83, width: 526, height: 382
    }
});
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

## Iterating through shapes

You can iterate through the shapes in a PowerPoint slide. The following code example demonstrates how to iterate through the shapes present in a slide and detect each shape based on its type.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
// data is a Uint8Array or ArrayBuffer of an existing .pptx file.

(async () => {
// Loads or opens a PowerPoint Presentation.
const pptxDoc = await Presentation.open(data);
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
await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

## Removing the shapes

The shapes can be removed from a slide by its instance or by its index position in the shape collection. The following code example demonstrates how to remove the shapes from a slide.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of an existing .pptx file.
(async () => {
// Loads or opens a PowerPoint Presentation.
const pptxDoc = await Presentation.open(data);
const slide = pptxDoc.slides[0];
for (const shape of slide.shapes) {
    if (shape.kind === 'shape' && !shape.isPlaceholder) {
        slide.shapes.remove(shape);
        break;
    }
}
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}
