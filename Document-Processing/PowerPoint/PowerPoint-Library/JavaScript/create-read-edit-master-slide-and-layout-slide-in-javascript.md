---
layout: post
title: Master and Layout Slides in JavaScript PowerPoint | Syncfusion
description: Access master slides, change the master background, and create custom layout slides using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint
---

# Master and Layout Slides in JavaScript PowerPoint

To make all slides share the same format, apply your changes to the Slide Master or Layout Master. The changes are applied to every slide that inherits the master slide or layout slide.

The [Syncfusion PowerPoint library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) supports the following:

1. Access the master slide in a PowerPoint presentation.
2. Change the background of the master slide.
3. Add a layout slide to the master slide.
4. Customize the layout slide.
5. Add a slide with one of the pre-defined layout slides.
6. Customize the layout slides to fit your own scenarios.

## Access the MasterSlide

In a PowerPoint presentation, the master slide is the top slide that controls all information about the theme, layout, background, color, fonts, and positioning of all slides. Using this master slide, you can easily adjust the look of an existing theme or make overall changes to all your slides.

The following code example demonstrates how to access the master slide in a PowerPoint presentation. The `name` property returns the name of the shape as a string and is used here only for demonstration.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
(async () => {
// Create a PowerPoint presentation.
const pptxDoc = Presentation.create();
// Access the first master slide in the PowerPoint presentation.
const masterSlide = pptxDoc.slideMasters[0];
// Get the first shape name from the master slide.
const shapeName = masterSlide.shapes[0].name;
// Save the PowerPoint presentation to a file.
await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

## Change background of Master slide

You can change the background of the master slide, and all slides in the presentation will receive the same background settings. The following code example demonstrates how to set a solid background for a master slide. The `FillType` enumeration also supports `Gradient`, `Pattern`, and `Picture` fills.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, FillType, ColorObject } from '@syncfusion/ej2-pptx';
(async () => {
// Create a PowerPoint presentation.
const pptxDoc = Presentation.create();
// Access the first master slide in the PowerPoint presentation.
const masterSlide = pptxDoc.slideMasters[0];
// Retrieve the background instance.
const background = masterSlide.background;
// Set the fill type for the background as Solid fill.
background.fill.fillType = FillType.Solid;
// Get the instance for the solid fill.
const solidFill = background.fill.solidFill;
// Set the color for the solid fill object.
solidFill.color = ColorObject.green;
// Add a slide so the master background is applied.
pptxDoc.slides.add(masterSlide.layoutSlides[0]);
// Save the PowerPoint presentation to a file.
await pptxDoc.save('Output.pptx');
})();

{% endhighlight %}
{% endtabs %}

## Create a Custom Layout Slide

Real-world scenarios often require additional predefined templates. The JavaScript PowerPoint Library lets you build your own custom layout designs and use them to create individual slides.

The following code example demonstrates how to create a new custom layout slide in a PowerPoint presentation. The `SlideLayoutType` enumeration includes other values such as `Title`, `TitleAndContent`, `SectionHeader`, and `TwoContent`.

{% tabs %}
{% highlight js tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType, AutoShapeType, ColorObject } from '@syncfusion/ej2-pptx';
(async () => {
// Create a PowerPoint presentation.
const pptxDoc = Presentation.create();
// Add a new layout slide to the PowerPoint presentation.
const layoutSlide = pptxDoc.slideMasters[0].layoutSlides.add(SlideLayoutType.Blank, 'CustomLayout');
// Add a shape to the layout slide. Bounds are in points.
const shape = layoutSlide.shapes.addShape(AutoShapeType.Diamond, {
    x: 30, y: 20, width: 400, height: 300
});
// Set a fill color for the added shape.
shape.fill.solidFill.color = ColorObject.fromArgb(78, 89, 90);
// Change the background color for the layout slide.
layoutSlide.background.fill.solidFill.color = ColorObject.fromArgb(78, 89, 90);
// Save the PowerPoint presentation to a file.
await pptxDoc.save('LayoutSlide.pptx');
})();

{% endhighlight %}
{% endtabs %}
