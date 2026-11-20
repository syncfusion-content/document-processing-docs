---
layout: post
title: Slide Show in JavaScript PPTX Editor | Syncfusion
description: Slide Show in JavaScript PPTX Editor starts a presentation from the beginning, from the current slide, or in Presenter View.
control: SlideShow
platform: document-processing
documentation: ug
domainurl:
---

# Slide Show in JavaScript PPTX Editor

The Slide Show tab starts a full-screen presentation of the loaded slides. It includes **From Beginning**, **From Current Slide**, and **Presenter View**.

Slide Show is available only when the `SlideShow` module is injected and `enableSlideShow` is `true`. By default, `enableSlideShow` is `true`. If the module is not injected, or `enableSlideShow` is `false`, the Slide Show actions do nothing. They also do nothing when no presentation is loaded.

N> Slides are rendered as HTML, CSS, and SVG. Slide transitions and animations are not played.

## From Beginning

**From Beginning** starts the presentation at the first slide.

The following example injects the `SlideShow` module and starts the presentation from the first slide after the presentation is created.

{% tabs %}
{% highlight js tabtitle="index.js" %}

ej.pptxeditor.PptxEditor.Inject(ej.pptxeditor.SlideShow);

var pptxeditor = new ej.pptxeditor.PptxEditor({
    enableSlideShow: true,
    documentPath: 'https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx',
    created: function () {
        setTimeout(function () {
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
    <title>Slide Show in JavaScript PPTX Editor</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <div id="pptx-editor"></div>
    <script src="index.js" type="text/javascript"></script>
</body>
</html>

{% endhighlight %}
{% endtabs %}

## From Current Slide

**From Current Slide** starts the presentation at the slide that is currently selected in the editor.

{% tabs %}
{% highlight js tabtitle="index.js" %}

ej.pptxeditor.PptxEditor.Inject(ej.pptxeditor.SlideShow);

var pptxeditor = new ej.pptxeditor.PptxEditor({
    enableSlideShow: true,
    documentPath: 'https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx',
    created: function () {
        setTimeout(function () {
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
    <title>Slide Show in JavaScript PPTX Editor</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <div id="pptx-editor"></div>
    <script src="index.js" type="text/javascript"></script>
</body>
</html>

{% endhighlight %}
{% endtabs %}

## Presenter View

**Presenter View** opens the presenter panel for the running presentation. If a presentation is not already running, the editor starts one from the current slide and then opens Presenter View.

Presenter View shows the current slide, the next slide, speaker notes when they are available, a timer, and the slide counter. It also provides previous, next, and jump actions. Closing Presenter View keeps the presentation running.

N> Presenter View is an in-page panel. It does not open a separate window.

{% tabs %}
{% highlight js tabtitle="index.js" %}

ej.pptxeditor.PptxEditor.Inject(ej.pptxeditor.SlideShow);

var pptxeditor = new ej.pptxeditor.PptxEditor({
    enableSlideShow: true,
    documentPath: 'https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx',
    created: function () {
        setTimeout(function () {
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
    <title>Slide Show in JavaScript PPTX Editor</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="description" content="Essential JS 2" />
    <meta name="author" content="Syncfusion" />
    <link rel="shortcut icon" href="resources/favicon.ico" />
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <div id="pptx-editor"></div>
    <script src="index.js" type="text/javascript"></script>
</body>
</html>

{% endhighlight %}
{% endtabs %}

