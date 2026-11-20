---
layout: post
title: Slide Show in ASP.NET Core PPTX Editor | Syncfusion
description: Slide Show in ASP.NET Core PPTX Editor starts a presentation from the beginning, from the current slide, or in Presenter View.
control: SlideShow
platform: document-processing
documentation: ug
domainurl:
---

# Slide Show in ASP.NET Core PPTX Editor

The Slide Show tab starts a full-screen presentation of the loaded slides. It includes **From Beginning**, **From Current Slide**, and **Presenter View**.

Slide Show is available only when the `SlideShow` module is injected and `enableSlideShow` is `true`. By default, `enableSlideShow` is `true`. If the module is not injected, or `enableSlideShow` is `false`, the Slide Show actions do nothing. They also do nothing when no presentation is loaded.

N> Slides are rendered as HTML, CSS, and SVG. Slide transitions and animations are not played.

## From Beginning

**From Beginning** starts the presentation at the first slide.

The following example injects the `SlideShow` module and starts the presentation from the first slide after the presentation is created.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

<ejs-pptxeditor id="pptxeditor"
                height="590px"
                enableSlideShow="true"
                documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx">
</ejs-pptxeditor>

@section Scripts {

<script>

    ej.pptxeditor.PptxEditor.Inject(
        ej.pptxeditor.SlideShow
    );

    window.onload = function () {

        setTimeout(function () {

            var pptxeditor =
                document.getElementById('pptxeditor').ej2_instances[0];

            console.log(pptxeditor);

            pptxeditor.startSlideShowFromBeginning();

        }, 1000);

    };

</script>

}

{% endhighlight %}
{% highlight c# tabtitle="HomeController.cs" %}

public IActionResult Index()
{
    return View();
}

{% endhighlight %}
{% endtabs %}

## From Current Slide

**From Current Slide** starts the presentation at the slide that is currently selected in the editor.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pptxeditor id="pptxeditor"
                height="590px"
                enableSlideShow="true"
                documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx">
</ejs-pptxeditor>

@section Scripts {

<script>

    ej.pptxeditor.PptxEditor.Inject(
        ej.pptxeditor.SlideShow
    );

    window.onload = function () {

        setTimeout(function () {

            var pptxeditor =
                document.getElementById('pptxeditor').ej2_instances[0];

            console.log(pptxeditor);

            pptxeditor.startSlideShowFromCurrent();

        }, 1000);

    };

</script>

}

{% endhighlight %}
{% highlight c# tabtitle="HomeController.cs" %}

public IActionResult Index()
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

<ejs-pptxeditor id="pptxeditor"
                height="590px"
                enableSlideShow="true"
                documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx">
</ejs-pptxeditor>

@section Scripts {

<script>

    ej.pptxeditor.PptxEditor.Inject(
        ej.pptxeditor.SlideShow
    );

    window.onload = function () {

        setTimeout(function () {

            var pptxeditor =
                document.getElementById('pptxeditor').ej2_instances[0];

            console.log(pptxeditor);

            pptxeditor.startPresenterView();

        }, 1000);

    };

</script>

}

{% endhighlight %}
{% highlight c# tabtitle="HomeController.cs" %}

public IActionResult Index()
{
    return View();
}

{% endhighlight %}
{% endtabs %}

