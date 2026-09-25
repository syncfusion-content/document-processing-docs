---
title: Loading and Saving in JavaScript PowerPoint | Syncfusion
description: Learn how to load, save, and modify PowerPoint presentations using the Syncfusion JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Loading and Saving in JavaScript PowerPoint

The `JavaScript PowerPoint Library` provides support to open existing presentations, modify their content, and save the result. The library accepts presentation data as `Uint8Array` from any source (file system, network, or in-memory buffer) and supports saving to the file system.

## Opening an existing presentation

An existing PowerPoint presentation can be opened by reading its bytes from the file system and passing them to the `open()` function. The following code example demonstrates how to open a PowerPoint presentation from the file system.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
 
// data is a Uint8Array or ArrayBuffer of an .pptx file
// Loads or opens a PowerPoint Presentation.
const pptxDoc = await Presentation.open(data);

{% endhighlight %}
{% endtabs %}

Once the presentation is opened, its slides, shapes, paragraphs, and other content can be modified using the same APIs used to build a presentation from scratch. The following code example demonstrates how to add a slide to an opened presentation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';
 
// data is a Uint8Array or ArrayBuffer of an .pptx file
// Loads or opens a PowerPoint Presentation.
const pptxDoc = await Presentation.open(data);
// Adds a new slide to the opened presentation.
pptxDoc.slides.add();

{% endhighlight %}
{% endtabs %}

## Open the encrypted document

A password-protected PowerPoint presentation can be opened by providing the password along with the file bytes to the `open()` function. The following code example demonstrates how to open a password-protected PowerPoint presentation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

{% endhighlight %}
{% endtabs %}

## Save the document

A modified PowerPoint presentation can be saved to the file system by passing the destination path to the `save()` function. The following code example demonstrates how to save a PowerPoint presentation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation } from '@syncfusion/ej2-pptx';

// Creates a Presentation instance.
const pptxDoc = Presentation.create();
// Adds a slide to the presentation.
pptxDoc.slides.add();
// Saves the Presentation to a file.
await pptxDoc.save('Output.pptx');

{% endhighlight %}
{% endtabs %}