---
layout: post
title: Slide Show in ASP.NET MVC PPTX Editor | Syncfusion
description: Slide Show in ASP.NET MVC PPTX Editor starts a presentation from the beginning, from the current slide, or in Presenter View.
control: SlideShow
platform: document-processing
documentation: ug
domainurl:
---

# Slide Show in ASP.NET MVC PPTX Editor

The Slide Show tab starts a full-screen presentation of the loaded slides. It includes **From Beginning**, **From Current Slide**, and **Presenter View**.

Slide Show is available only when the `SlideShow` module is injected and `enableSlideShow` is `true`. By default, `enableSlideShow` is `true`. If the module is not injected, or `enableSlideShow` is `false`, the Slide Show actions do nothing. They also do nothing when no presentation is loaded.

N> Slides are rendered as HTML, CSS, and SVG. Slide transitions and animations are not played.

## From Beginning

**From Beginning** starts the presentation at the first slide.

The following example injects the `SlideShow` module and starts the presentation from the first slide after the presentation is created.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

<button id="slideShowBtn">Start Slide Show</button>
@Html.EJS().PptxEditor("container").EnableSlideShow(true).DocumentPath("https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx").Render()

<script>
    document.addEventListener('DOMContentLoaded', function () {

        var pptxeditor = document.getElementById('container').ej2_instances[0];

        document.getElementById('slideShowBtn').addEventListener('click', function () {

            pptxeditor.startSlideShowFromBeginning();

        });

    });
</script>

{% endhighlight %}
{% highlight c# tabtitle="HomeController.cs" %}

public ActionResult Index()
{
    return View();
}

{% endhighlight %}
{% endtabs %}

## From Current Slide

**From Current Slide** starts the presentation at the slide that is currently selected in the editor.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

<button id="slideShowBtn">Current Slide Show</button>
@Html.EJS().PptxEditor("container").EnableSlideShow(true).DocumentPath("https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx").Render()

<script>
    document.addEventListener('DOMContentLoaded', function () {

        var pptxeditor = document.getElementById('container').ej2_instances[0];

        document.getElementById('slideShowBtn').addEventListener('click', function () {

            pptxeditor.startSlideShowFromCurrent();

        });

    });
</script>

{% endhighlight %}
{% highlight c# tabtitle="HomeController.cs" %}

public ActionResult Index()
{
    return View();
}

{% endhighlight %}
{% endtabs %}

## Presenter View

**Presenter View** opens the presenter panel for the running presentation. If a presentation is not already running, the editor starts one from the current slide and then opens Presenter View.

Presenter View shows the current slide, the next slide, speaker notes when they are available, a timer, and the slide counter. It also provides previous, next, and jump actions. Closing Presenter View keeps the presentation running.

N> Presenter View is an in-page panel. It does not open a separate window.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

<button id="slideShowBtn">Presenter View</button>
@Html.EJS().PptxEditor("container").EnableSlideShow(true).DocumentPath("https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx").Render()

<script>
    document.addEventListener('DOMContentLoaded', function () {

        var pptxeditor = document.getElementById('container').ej2_instances[0];

        document.getElementById('slideShowBtn').addEventListener('click', function () {

            pptxeditor.startPresenterView();

        });

    });
</script>
{% endhighlight %}
{% highlight c# tabtitle="HomeController.cs" %}

public ActionResult Index()
{
    return View();
}

{% endhighlight %}
{% endtabs %}

