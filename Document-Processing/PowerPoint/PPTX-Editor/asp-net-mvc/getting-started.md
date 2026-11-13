---
layout: post
title: Getting Started with ASP.NET MVC PPTX Editor | Syncfusion
description: Learn how to host the Syncfusion JavaScript PPTX Editor in an ASP.NET MVC Razor view, open PowerPoint presentations, navigate slides, and print.
platform: document-processing
control: Getting Started
documentation: ug
---

# Getting Started with ASP.NET MVC PPTX Editor

Syncfusion<sup style="font-size:70%">&reg;</sup> PPTX Editor enables you to view and print PowerPoint presentations in web applications. This section guides you through hosting the JavaScript PPTX Editor in an ASP.NET MVC 5 Razor view and opening a PPTX file.

N> The `Syncfusion.EJ2.MVC5` package at version `35.1.46` does not include a PPTX Editor HTML helper. This guide uses JavaScript initialization in an MVC view, not `@Html.EJS().PptxEditor(...)`. The MVC NuGet package, namespace registration, and `@Html.EJS().ScriptManager()` are not required for this JavaScript integration.

## Prerequisites

* [System requirements for ASP.NET MVC controls](https://ej2.syncfusion.com/aspnetmvc/documentation/system-requirements)
* [Browser compatibility](https://ej2.syncfusion.com/aspnetmvc/documentation/browser)
* Visual Studio with ASP.NET MVC 5 project support.

## Create an ASP.NET MVC application

Create an **ASP.NET Web Application (.NET Framework)** project and select the **MVC** template. Follow the [Microsoft MVC project tutorial](https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started#create-your-first-app).

Use the template's `HomeController` and its `Index` action to display `~/Views/Home/Index.cshtml`.

## Add stylesheet and script resources

Add the following resources inside the `<head>` of `~/Views/Shared/_Layout.cshtml`. This example uses version `35.1.46` and the **Tailwind 3** theme. Keep all resources on the same version, and avoid loading another copy of EJ2 scripts through bundles or other layout references.

{% tabs %}
{% highlight cshtml tabtitle="~/Views/Shared/_Layout.cshtml" %}

<!-- PPTX Editor and dependency styles -->
<link href="https://cdn.syncfusion.com/ej2/35.1.46/ej2-base/styles/tailwind3.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/35.1.46/ej2-buttons/styles/tailwind3.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/35.1.46/ej2-inputs/styles/tailwind3.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/35.1.46/ej2-popups/styles/tailwind3.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/35.1.46/ej2-lists/styles/tailwind3.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/35.1.46/ej2-navigations/styles/tailwind3.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/35.1.46/ej2-splitbuttons/styles/tailwind3.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/35.1.46/ej2-dropdowns/styles/tailwind3.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/35.1.46/ej2-pptxeditor/styles/tailwind3.css" rel="stylesheet" />
<!-- PPTX Editor and dependency scripts -->
<script src="https://cdn.syncfusion.com/ej2/35.1.46/ej2-base/dist/global/ej2-base.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/35.1.46/ej2-data/dist/global/ej2-data.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/35.1.46/ej2-buttons/dist/global/ej2-buttons.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/35.1.46/ej2-popups/dist/global/ej2-popups.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/35.1.46/ej2-splitbuttons/dist/global/ej2-splitbuttons.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/35.1.46/ej2-inputs/dist/global/ej2-inputs.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/35.1.46/ej2-lists/dist/global/ej2-lists.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/35.1.46/ej2-navigations/dist/global/ej2-navigations.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/35.1.46/ej2-dropdowns/dist/global/ej2-dropdowns.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/35.1.46/ej2-charts/dist/global/ej2-charts.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/35.1.46/ej2-pptxeditor/dist/global/ej2-pptxeditor.min.js"></script>

{% endhighlight %}
{% endtabs %}

N> To use local resources instead, see [Add PPTX Editor resources](../javascript-es5/getting-started#add-pptx-editor-resources). For other themes, see the [themes documentation](https://ej2.syncfusion.com/documentation/appearance/theme).

## Register a Syncfusion license key

Generate a license key and register it after loading `ej2-base.min.js` and before initializing the editor. This JavaScript integration uses client-side license registration.

* [Generate a Syncfusion license key](https://help.syncfusion.com/document-processing/licensing/how-to-generate)
* [Register a license key in JavaScript ES5](https://help.syncfusion.com/document-processing/licensing/how-to-register-in-an-application#javascript-es5)

{% tabs %}
{% highlight html tabtitle="~/Views/Shared/_Layout.cshtml" %}

<script>
    ej.base.registerLicense('YOUR SYNCFUSION LICENSE KEY');
</script>

{% endhighlight %}
{% endtabs %}

Replace the placeholder with your generated license key.

## Add the PPTX Editor and open a presentation

Place a sample presentation at `~/Content/presentations/sample.pptx`. This file is served as public static content, so use a presentation intended for public viewing.

Replace the content of `~/Views/Home/Index.cshtml` with the following code. The modules provide the toolbar, thumbnail pane, zoom, navigation, printing, and slideshow features. The presentation is fetched as a blob after the component is attached to its host element.

{% tabs %}
{% highlight cshtml tabtitle="~/Views/Home/Index.cshtml" %}

@{
    ViewBag.Title = "PPTX Editor";
}

<style>
    #pptxeditor {
        width: 100%;
        height: 620px;
    }
</style>

<div id="pptxeditor"></div>
<p id="presentation-status" role="status"></p>

@section scripts {
    <script>
        ej.pptxeditor.PptxEditor.Inject(
            ej.pptxeditor.Toolbar,
            ej.pptxeditor.ThumbnailView,
            ej.pptxeditor.Magnification,
            ej.pptxeditor.Navigation,
            ej.pptxeditor.Print,
            ej.pptxeditor.SlideShow
        );

        var editor = new ej.pptxeditor.PptxEditor({});
        editor.appendTo('#pptxeditor');

        fetch('@Url.Content("~/Content/presentations/sample.pptx")')
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Unable to load the presentation.');
                }
                return response.blob();
            })
            .then(function (blob) {
                return editor.openFromBlob(blob, 'sample.pptx');
            })
            .catch(function () {
                document.getElementById('presentation-status').textContent =
                    'The presentation could not be opened. Check the file URL and try again.';
            });
    </script>
}

{% endhighlight %}
{% endtabs %}

Ensure that the layout renders the `scripts` section before the closing `</body>` tag. The standard MVC template already includes this section; do not add it twice.

{% tabs %}
{% highlight cshtml tabtitle="~/Views/Shared/_Layout.cshtml" %}

    @RenderSection("scripts", required: false)
</body>

{% endhighlight %}
{% endtabs %}

## Verify the result

Start the application from Visual Studio. The Home page displays the PPTX Editor with a toolbar, a thumbnail pane, and a slide area containing `sample.pptx`. Select thumbnails to navigate between slides, change the zoom level, start a slideshow, or use the print command.

## Troubleshooting

**The editor does not render**
* Confirm that the layout renders the `scripts` section and that all EJ2 dependency scripts load before the view's initialization script.
* Check the browser console and network requests for missing resources, duplicate EJ2 scripts, or mismatched versions.

**The presentation does not open**
* Confirm that the file exists under `Content/presentations`, is included when publishing the application, and is served successfully by IIS.
* Ensure that the file is a valid PPTX presentation. `@Url.Content` resolves the file URL correctly when the application is hosted in a virtual directory.

**A licensing warning appears**
* Confirm that the client-side license key is registered before initializing the JavaScript component.

## See also

* [ASP.NET MVC PPTX Editor overview](./overview)
* [JavaScript PPTX Editor getting started](../javascript-es5/getting-started)
* [TypeScript PPTX Editor getting started](../javascript-es6/getting-started)
