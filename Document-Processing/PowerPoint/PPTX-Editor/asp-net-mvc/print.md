---
layout: post
title: Print in ASP.NET MVC PPTX Editor | Syncfusion
description: Print feature in ASP.NET MVC PPTX Editor prints every slide of a loaded presentation through the browser print dialog using HTML, CSS, and SVG.
control: Print
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Print in ASP.NET MVC PPTX Editor

To print the loaded presentation, use the `print` method from the PPTX Editor instance. The method opens a print window that contains every slide, one slide per page, and invokes the browser print dialog.

Printing is available only when the `Print` module is injected and `enablePrint` is `true`. By default, `enablePrint` is `true`. If the module is not injected, or `enablePrint` is `false`, `print()` does nothing. `print()` also does nothing when no presentation is loaded.

N> The PPTX Editor prints slide content only. Speaker notes are not included in the print output.

## Print a loaded presentation

The following example injects the `Print` module, loads a presentation from `documentPath`, and prints it.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

@Html.EJS().PptxEditor("container").EnablePrint(true).DocumentPath("https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx").Created("onCreated").Render()

<script>
    function onCreated() {
        var pptxeditor = document.getElementById('container').ej2_instances[0];
        // Print the loaded presentation.
        pptxeditor.print();
    }
</script>

{% endhighlight %}
{% highlight c# tabtitle="HomeController.cs" %}

public ActionResult Index()
{
    return View();
}

{% endhighlight %}
{% endtabs %}

You can also print from the File menu. When the `Print` module is injected and `enablePrint` is `true`, the File menu includes a **Print** item that calls `print()` for the loaded presentation. The item is disabled when print is not available.

## Disable print

Set `enablePrint` to `false` to hide the print workflow. The File menu **Print** item is disabled, and calling `print()` does nothing.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

@Html.EJS().PptxEditor("container").EnablePrint(false).DocumentPath("https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx").Render()

{% endhighlight %}
{% highlight c# tabtitle="HomeController.cs" %}

public ActionResult Index()
{
    return View();
}

{% endhighlight %}
{% endtabs %}

## Print using a window object

You can print the presentation by passing a window instance. This is useful in hosts such as Electron, where a window instance is already available. Open the window from a user action so the browser does not treat it as a blocked popup. If the window cannot be opened, `print()` returns without printing.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}

@Html.EJS().Button("print").Content("Print").Render()
@Html.EJS().PptxEditor("container").EnablePrint(true).DocumentPath("https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx").Render()

<script>
    var pptxeditor;
    document.addEventListener('DOMContentLoaded', function () {
        pptxeditor = document.getElementById('container').ej2_instances[0];
        document.getElementById('print').addEventListener('click', function () {
            var printWindow = window.open('', 'print', 'height=452,width=1024,tabbar=no');
            if (printWindow) {
                pptxeditor.print(printWindow);
            }
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

## Page setup

Some print options cannot be configured from JavaScript. Use the browser's print dialog to choose the printer, copies, and related options:

* [Chrome](https://support.google.com/chrome/answer/1069693)
* [Firefox](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox)

The PPTX Editor sizes each printed page to the rendered slide. Slide size, margins, and layout come from the presentation. There is no page-setup dialog, and print does not change the loaded presentation.

N> The editor renders slides as HTML, CSS, and SVG, then prints that markup. It does not use a canvas or a device-pixel-ratio setting to control print quality. Colors are printed with `print-color-adjust: exact` so backgrounds and theme colors are preserved where the browser allows it.
