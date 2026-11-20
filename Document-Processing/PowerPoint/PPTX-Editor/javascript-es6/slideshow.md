---
layout: post
title: Slide Show in TypeScript PPTX Editor | Syncfusion
description: Slide Show in TypeScript PPTX Editor starts a presentation from the beginning, from the current slide, or in Presenter View.
control: SlideShow
platform: document-processing
documentation: ug
domainurl:
---

# Slide Show in TypeScript PPTX Editor

The Slide Show tab starts a full-screen presentation of the loaded slides. It includes **From Beginning**, **From Current Slide**, and **Presenter View**.

Slide Show is available only when the `SlideShow` module is injected and `enableSlideShow` is `true`. By default, `enableSlideShow` is `true`. If the module is not injected, or `enableSlideShow` is `false`, the Slide Show actions do nothing. They also do nothing when no presentation is loaded.

N> Slides are rendered as HTML, CSS, and SVG. Slide transitions and animations are not played.

## From Beginning

**From Beginning** starts the presentation at the first slide.

The following example injects the `SlideShow` module and starts the presentation from the first slide after the presentation is created.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { PptxEditor, SlideShow } from '@syncfusion/ej2-pptxeditor';

PptxEditor.Inject(SlideShow);

let pptxeditor: PptxEditor = new PptxEditor({
    enableSlideShow: true,
    documentPath: 'https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx',
    created: (): void => {
        setTimeout((): void => {
            pptxeditor.startSlideShowFromBeginning();
        }, 1000);
    }
});
pptxeditor.appendTo('#pptx-editor');

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Slide Show in TypeScript PPTX Editor</title>
   <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div id="pptx-editor"></div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

## From Current Slide

**From Current Slide** starts the presentation at the slide that is currently selected in the editor.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { PptxEditor, SlideShow } from '@syncfusion/ej2-pptxeditor';

PptxEditor.Inject(SlideShow);

let pptxeditor: PptxEditor = new PptxEditor({
    enableSlideShow: true,
    documentPath: 'https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx',
    created: (): void => {
        setTimeout((): void => {
            pptxeditor.startSlideShowFromCurrent();
        }, 1000);
    }
});
pptxeditor.appendTo('#pptx-editor');

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Slide Show in TypeScript PPTX Editor</title>
   <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div id="pptx-editor"></div>
</body>

</html>

{% endhighlight %}
{% endtabs %}

## Presenter View

**Presenter View** opens the presenter panel for the running presentation. If a presentation is not already running, the editor starts one from the current slide and then opens Presenter View.

Presenter View shows the current slide, the next slide, speaker notes when they are available, a timer, and the slide counter. It also provides previous, next, and jump actions. Closing Presenter View keeps the presentation running.

N> Presenter View is an in-page panel. It does not open a separate window.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { PptxEditor, SlideShow } from '@syncfusion/ej2-pptxeditor';

PptxEditor.Inject(SlideShow);

let pptxeditor: PptxEditor = new PptxEditor({
    enableSlideShow: true,
    documentPath: 'https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx',
    created: (): void => {
        setTimeout((): void => {
            pptxeditor.startPresenterView();
        }, 1000);
    }
});
pptxeditor.appendTo('#pptx-editor');

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Slide Show in TypeScript PPTX Editor</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div id="pptx-editor"></div>
</body>

</html>

{% endhighlight %}
{% endtabs %}


## Disable Slide Show

`enableSlideShow` controls whether Slide Show is available. The default value is `true`, so Slide Show works when the `SlideShow` module is injected. Set `enableSlideShow` to `false` to disable it. Slide Show actions then do nothing.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { PptxEditor, SlideShow } from '@syncfusion/ej2-pptxeditor';

PptxEditor.Inject(SlideShow);

let pptxeditor: PptxEditor = new PptxEditor({
    enableSlideShow: false,
    documentPath: 'https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx'
});
pptxeditor.appendTo('#pptx-editor');

{% endhighlight %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Slide Show in TypeScript PPTX Editor</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body>
    <div id="pptx-editor"></div>
</body>

</html>

{% endhighlight %}
{% endtabs %}
