---
title: Getting Started with JavaScript PowerPoint Library | Syncfusion
description: Learn how to create a simple PowerPoint presentation with basic elements from scratch using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Getting Started with JavaScript PowerPoint Library

The `JavaScript PowerPoint Library` facilitates the creation of a simple PowerPoint presentation with basic elements from scratch. The library supports both Node.js and browser environments for programmatic generation of PowerPoint presentations.

## Creating a simple PowerPoint Presentation with basic elements from scratch

Include the following imports in your TypeScript code as shown below.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';

{% endhighlight %}
{% endtabs %}

An entire PowerPoint Presentation is represented by an instance of `Presentation` and it is the root element of the JavaScript PowerPoint Library's DOM.

The following code example demonstrates how to create an instance of the `Presentation`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

// Creates a new instance of PowerPoint presentation.
const pptxDoc = Presentation.create();

{% endhighlight %}
{% endtabs %}

A `Presentation` instance has a slide collection that represents the individual slides present within a PowerPoint presentation. A slide may contain textual and other graphics contents like shapes, images, charts etc.

The following code example demonstrates how to add a blank slide to a PowerPoint Presentation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

// Adds a slide to the PowerPoint Presentation.
const firstSlide = pptxDoc.slides.add({ layout: SlideLayoutType.Blank });

{% endhighlight %}
{% endtabs %}

N> The 'Point' typographic units are used to add or manipulate any element in a Presentation. Position and size values passed to methods such as `addTextBox` and `addPicture` are specified in points.

All the textual contents in a Presentation document are represented by paragraphs. Within the paragraph, textual contents are grouped into one or more child elements as `TextParts`. Each `TextPart` represents a region of text with a common set of formatted text.

The following code example demonstrates how to add text into a presentation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

// EMU per point
const PT = 12700; 
// Adds a textbox in a slide by specifying its position and size.
const textShape = firstSlide.shapes.addTextBox({
    bounds: { x: 100 * PT, y: 75 * PT, width: 756 * PT, height: 200 * PT }
});
// Adds a paragraph into the textShape.
const paragraph = textShape.textBody.addParagraph();
// Adds a textPart in the paragraph.
const textPart = paragraph.addTextPart('');
// Applies font formatting to the text.
textPart.text = 'Hello Presentation';

{% endhighlight %}
{% endtabs %}

A picture can be added to a slide by specifying its position and size. The following code example demonstrates how to add an image in a presentation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

// Adds a picture to the slide by specifying its size and position.
const picture = firstSlide.shapes.addPicture({
    data: readFileSync('Image.jpg'),
    contentType: 'image/jpeg',
    bounds: { x: 300 * PT, y: 270 * PT, width: 410 * PT, height: 250 * PT }
});

{% endhighlight %}
{% endtabs %}

The presentation is then saved to a file. The following code example demonstrates how to save a PowerPoint Presentation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

// Saves the Presentation to a file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}