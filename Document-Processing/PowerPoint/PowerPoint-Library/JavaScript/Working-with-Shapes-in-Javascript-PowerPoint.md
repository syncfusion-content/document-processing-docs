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

import { Presentation, SlideLayoutType, AutoShapeType } from '@syncfusion/ej2-pptx';
 
// Creates an instance for PowerPoint.
const pptxDoc = Presentation.create();
// Adds a blank slide to the Presentation.
const slide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });
// Adds a normal shape to the slide.
slide.shapes.addShape(AutoShapeType.Rectangle, {
    x: 50, y: 200, width: 300, height: 300
});
// imageBytes is the contents of the image path to be added.
// Adds a picture to the slide's shape collection.
const picture = slide.shapes.addPicture({
    data: imageBytes, contentType: 'image/jpeg',
    bounds: {
        x: 373, y: 83, width: 526, height: 382
    }
});
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}

## Iterating through shapes

The shapes in a PowerPoint slide can be iterated through. The following code example demonstrates how to iterate through the shapes present in a slide and set the Title property of each shape based on its type. The Title is shown in PowerPoint's selection pane and helps identify the shape.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
 
// data is a Uint8Array or ArrayBuffer of an .pptx file
// Opens the presentation.
const pptxDoc = await Presentation.open(data);
// Iterates through the shapes in the first slide and detects their kind.
const slide = pptxDoc.slides[0];
for (const shape of slide.shapes) {
    if (shape.kind === 'picture') {
        // Picture shape detected.
    } else if (shape.kind === 'shape') {
        // AutoShape / text-box shape detected.
    } else {
        // Other kind (table, chart, diagram, ole, media, unknown).
    }
}

{% endhighlight %}
{% endtabs %}

## Removing the shapes

The shapes can be removed from a slide by its instance or by its index position in the shape collection. 

The following code example demonstrates how to remove the shapes from a slide.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
 
// data is a Uint8Array or ArrayBuffer of an .pptx file
// Loads or opens a PowerPoint Presentation.
const pptxDoc = await Presentation.open(data);
// Iterates through the shapes in a slide and removes the first AutoShape
// that is not a placeholder.
const slide = pptxDoc.slides[0];
for (const shape of slide.shapes) {
    if (shape.kind === 'shape' && !shape.isPlaceholder) {
        slide.shapes.remove(shape);
        break;
    }
}
// Saves the Presentation to the file system.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}