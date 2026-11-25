---
layout: post
title: Working with Find in JavaScript PowerPoint | Syncfusion
description: Learn how to find text in a PowerPoint presentation using the Syncfusion JavaScript PowerPoint Library, including match case, whole word, and regular expressions.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, find, regex, match case, whole word
---

# Working with Find in JavaScript PowerPoint

The [JavaScript PowerPoint Library](https://www.syncfusion.com/document-sdk/javascript-powerpoint-library) allows you to search for a particular text in slide body text.

* You can find either the first occurrence or all the occurrences of the text in PowerPoint slides, including shape, text box, and table cell text.
* You can find the text in a specific slide.
* You can find the text by matching the case, whole word, and all occurrences or the first occurrence alone.
* You can find text that matches a regular expression.

N> Find searches slide body text only (shape text bodies and table cells) in slide order. Notes, master slides, and layout slides are not searched. Find does not modify the presentation.

## Find in PowerPoint presentation

You can find text in a PowerPoint presentation.

The following code example illustrates how to find all occurrences of a particular text in a PowerPoint presentation.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, TextFindMatch } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of a PowerPoint Presentation.
// Opens an existing presentation.
let pptxDoc = await Presentation.open(data);
// Finds all the occurrences of a particular text in the PowerPoint presentation.
let textSelections: ReadonlyArray<TextFindMatch> = pptxDoc.findAll('product', false, false);
for (let textSelection of textSelections) {
    // Gets the found text.
    let foundText: string = textSelection.text;
}

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// data is a Uint8Array or ArrayBuffer of a PowerPoint Presentation.
// Opens an existing presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Finds all the occurrences of a particular text in the PowerPoint presentation.
var textSelections = pptxDoc.findAll('product', false, false);
for (var i = 0; i < textSelections.length; i++) {
    var textSelection = textSelections[i];
    // Gets the found text.
    var foundText = textSelection.text;
}

{% endhighlight %}
{% endtabs %}

### Match case

You can find text by matching the case.

The following code example illustrates how to find all occurrences of a particular text by matching the case.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, TextFindMatch } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of a PowerPoint Presentation.
// Opens an existing presentation.
let pptxDoc = await Presentation.open(data);
let matchCase: boolean = true;
let wholeWord: boolean = false;
// Finds all the occurrences of a particular text which matches the given casing.
let textSelections: ReadonlyArray<TextFindMatch> = pptxDoc.findAll('product', matchCase, wholeWord);
for (let textSelection of textSelections) {
    // Gets the found text.
    let foundText: string = textSelection.text;
}

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// data is a Uint8Array or ArrayBuffer of a PowerPoint Presentation.
// Opens an existing presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
var matchCase = true;
var wholeWord = false;
// Finds all the occurrences of a particular text which matches the given casing.
var textSelections = pptxDoc.findAll('product', matchCase, wholeWord);
for (var i = 0; i < textSelections.length; i++) {
    var textSelection = textSelections[i];
    // Gets the found text.
    var foundText = textSelection.text;
}

{% endhighlight %}
{% endtabs %}

### Whole words only

You can find a whole word in a PowerPoint presentation.

The following code example illustrates how to find all occurrences of a given whole word.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, TextFindMatch } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of a PowerPoint Presentation.
// Opens an existing presentation.
let pptxDoc = await Presentation.open(data);
let matchCase: boolean = false;
let wholeWord: boolean = true;
// Finds all the occurrences of a given whole word.
let textSelections: ReadonlyArray<TextFindMatch> = pptxDoc.findAll('product', matchCase, wholeWord);
for (let textSelection of textSelections) {
    // Gets the found text.
    let foundText: string = textSelection.text;
}

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// data is a Uint8Array or ArrayBuffer of a PowerPoint Presentation.
// Opens an existing presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
var matchCase = false;
var wholeWord = true;
// Finds all the occurrences of a given whole word.
var textSelections = pptxDoc.findAll('product', matchCase, wholeWord);
for (var i = 0; i < textSelections.length; i++) {
    var textSelection = textSelections[i];
    // Gets the found text.
    var foundText = textSelection.text;
}

{% endhighlight %}
{% endtabs %}

### Find the first occurrence

You can find the first occurrence of a particular text in a PowerPoint presentation.

The following code example illustrates how to find the first occurrence of a particular text.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, TextFindMatch } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of a PowerPoint Presentation.
// Opens an existing presentation.
let pptxDoc = await Presentation.open(data);
// Finds the first occurrence of a particular text in the PowerPoint presentation.
let textSelection: TextFindMatch | undefined = pptxDoc.find('product', false, false);
if (textSelection !== undefined) {
    // Gets the found text.
    let foundText: string = textSelection.text;
}

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// data is a Uint8Array or ArrayBuffer of a PowerPoint Presentation.
// Opens an existing presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Finds the first occurrence of a particular text in the PowerPoint presentation.
var textSelection = pptxDoc.find('product', false, false);
if (textSelection !== undefined) {
    // Gets the found text.
    var foundText = textSelection.text;
}

{% endhighlight %}
{% endtabs %}

## Find using regex

You can find all the occurrences of a text pattern in a PowerPoint presentation using a regular expression.

The following code example illustrates how to find text that matches a regular expression.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, TextFindMatch } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of a PowerPoint Presentation.
// Opens an existing presentation.
let pptxDoc = await Presentation.open(data);
// Finds all the occurrences of a given pattern of text in the PowerPoint presentation using a regular expression.
let textSelections: ReadonlyArray<TextFindMatch> = pptxDoc.findAll(/\{[A-Za-z]+\}/);
for (let textSelection of textSelections) {
    // Gets the found text.
    let foundText: string = textSelection.text;
}

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// data is a Uint8Array or ArrayBuffer of a PowerPoint Presentation.
// Opens an existing presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
// Finds all the occurrences of a given pattern of text in the PowerPoint presentation using a regular expression.
var textSelections = pptxDoc.findAll(/\{[A-Za-z]+\}/);
for (var i = 0; i < textSelections.length; i++) {
    var textSelection = textSelections[i];
    // Gets the found text.
    var foundText = textSelection.text;
}

{% endhighlight %}
{% endtabs %}

## Find in a specific slide

You can find all the occurrences of a text in a specific PowerPoint slide.

The following code example illustrates how to find all the occurrences of a particular text in a specific slide.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}

import { Presentation, Slide, TextFindMatch } from '@syncfusion/ej2-pptx';

// data is a Uint8Array or ArrayBuffer of a PowerPoint Presentation.
// Opens an existing presentation.
let pptxDoc = await Presentation.open(data);
let slide: Slide = pptxDoc.slides[0];
// Finds all the occurrences of a particular text in the specific slide.
let textSelections: ReadonlyArray<TextFindMatch> = slide.findAll('product', false, false);
for (let textSelection of textSelections) {
    // Gets the found text.
    let foundText: string = textSelection.text;
}

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// data is a Uint8Array or ArrayBuffer of a PowerPoint Presentation.
// Opens an existing presentation.
var pptxDoc = await ej.pptx.Presentation.open(data);
var slide = pptxDoc.slides[0];
// Finds all the occurrences of a particular text in the specific slide.
var textSelections = slide.findAll('product', false, false);
for (var i = 0; i < textSelections.length; i++) {
    var textSelection = textSelections[i];
    // Gets the found text.
    var foundText = textSelection.text;
}

{% endhighlight %}
{% endtabs %}

## See Also

* [Working with Paragraphs](./Working-with-paragraphs)
* [Working with Slides](./Working-with-Slide)
* [Loading and Saving Presentation](./Loading-and-Saving-Presentation)
