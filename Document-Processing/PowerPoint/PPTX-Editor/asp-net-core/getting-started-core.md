---
layout: post
title: Getting Started with ASP.NET Core PPTX Editor | Syncfusion
description: Learn how to add the Syncfusion ASP.NET Core PPTX Editor to a Razor Pages application, load a PowerPoint presentation, navigate slides, and print.
platform: document-processing
control: Getting Started Core
documentation: ug
---

# Getting Started with ASP.NET Core PPTX Editor

Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PPTX Editor enables you to view and print PowerPoint presentations in web applications. This section guides you through adding the PPTX Editor to an ASP.NET Core Razor Pages application and opening a PPTX file.

## Prerequisites

* [System requirements for ASP.NET Core controls](https://ej2.syncfusion.com/aspnetcore/documentation/system-requirements)
* [Browser compatibility](https://ej2.syncfusion.com/aspnetcore/documentation/browser)
* The PPTX Editor Tag Helper is available in `Syncfusion.EJ2.AspNet.Core` version `35.1.46`. This guide uses that version for both the NuGet package and client resources.

{% tabcontents %}

{% tabcontent Visual Studio %}

## Create an ASP.NET Core Web App in Visual Studio

Create an **ASP.NET Core Web App (Razor Pages)** using Visual Studio 2022 by following the [Microsoft tutorial](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=visualstudio).

## Install the ASP.NET Core NuGet package

Open **Tools → NuGet Package Manager → Manage NuGet Packages for Solution**, search for [Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core/), and install version `35.1.46`.

Alternatively, use the Package Manager Console:

{% tabs %}
{% highlight bash tabtitle="Package Manager" %}

Install-Package Syncfusion.EJ2.AspNet.Core -Version 35.1.46

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

## Create an ASP.NET Core Web App in Visual Studio Code

Create an **ASP.NET Core Web App (Razor Pages)** project, then open its project folder in Visual Studio Code. Refer to the [Microsoft tutorial](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=visualstudio) for the application structure.

## Install the ASP.NET Core NuGet package

Open the integrated terminal in the folder containing the `.csproj` file and install [Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core/):

{% tabs %}
{% highlight bash tabtitle="Terminal" %}

dotnet add package Syncfusion.EJ2.AspNet.Core --version 35.1.46

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

N> The NuGet package includes dependencies such as [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/) for JSON serialization and [Syncfusion.Licensing](https://www.nuget.org/packages/Syncfusion.Licensing/) for license validation.

## Add the Syncfusion ASP.NET Core Tag Helper

Add the following line to `~/Pages/_ViewImports.cshtml`. Keep the existing Razor Pages imports and Tag Helpers.

{% tabs %}
{% highlight cshtml tabtitle="~/Pages/_ViewImports.cshtml" %}

@addTagHelper *, Syncfusion.EJ2

{% endhighlight %}
{% endtabs %}

## Register a Syncfusion license key

Before initializing the control, generate a Syncfusion license key and register it in the ASP.NET Core application.

* [Generate a Syncfusion license key](https://help.syncfusion.com/document-processing/licensing/how-to-generate)
* [Register a license key in ASP.NET Core](https://help.syncfusion.com/document-processing/licensing/how-to-register-in-an-application#aspnet-core)

## Add stylesheet and script resources

Add the following PPTX Editor theme and dependency resources inside the `<head>` of `~/Pages/Shared/_Layout.cshtml`. This example uses the **Tailwind 3** theme. Use matching versions for the NuGet package and all client resources, and do not load a second copy of the same EJ2 scripts elsewhere in the layout.

{% tabs %}
{% highlight cshtml tabtitle="~/Pages/Shared/_Layout.cshtml" %}

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

N> To use local resources instead of CDN references, see [Add PPTX Editor resources](../javascript-es5/getting-started#add-pptx-editor-resources). For other themes, see the [ASP.NET Core themes documentation](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme).

## Inject the required modules

After the script references in the layout, register the modules used by the viewer. Perform this registration before the Script Manager initializes the component.

{% tabs %}
{% highlight html tabtitle="~/Pages/Shared/_Layout.cshtml" %}

<script>
    ej.pptxeditor.PptxEditor.Inject(
        ej.pptxeditor.Toolbar,
        ej.pptxeditor.ThumbnailView,
        ej.pptxeditor.Magnification,
        ej.pptxeditor.Navigation,
        ej.pptxeditor.Print,
        ej.pptxeditor.SlideShow
    );
</script>

{% endhighlight %}
{% endtabs %}

These modules provide the toolbar, slide thumbnails, zoom, navigation, printing, and slideshow features.

## Register the Syncfusion Script Manager

Add `<ejs-scripts>` at the end of `<body>` in `~/Pages/Shared/_Layout.cshtml`, after the page content and any page script section. This ensures that the page's event handlers are defined before the component is initialized.

{% tabs %}
{% highlight cshtml tabtitle="~/Pages/Shared/_Layout.cshtml" %}

    @RenderBody()
    @await RenderSectionAsync("Scripts", required: false)
    <ejs-scripts></ejs-scripts>
</body>

{% endhighlight %}
{% endtabs %}

N> Keep the existing layout content and scripts. Do not duplicate `@RenderBody()` or the `Scripts` section if they are already present.

## Add the PPTX Editor and open a presentation

Place a sample PPTX file at `~/wwwroot/presentations/sample.pptx`. Files in `wwwroot` are publicly accessible, so use a presentation intended for public viewing. Ensure that static file serving is enabled in the application.

Replace the content of `~/Pages/Index.cshtml` with the following code. The `created` event loads the presentation only after the editor has initialized. The URL is resolved relative to the application root, including when the application is hosted under a virtual directory.

{% tabs %}
{% highlight cshtml tabtitle="~/Pages/Index.cshtml" %}

@page

<style>
    #pptxeditor {
        width: 100%;
        height: 620px;
    }
</style>

<ejs-pptxeditor id="pptxeditor" created="onPptxCreated"></ejs-pptxeditor>
<p id="presentation-status" role="status"></p>

<script>
    function onPptxCreated() {
        var editor = this;

        fetch('@Url.Content("~/presentations/sample.pptx")')
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
    }
</script>

{% endhighlight %}
{% endtabs %}

## Verify the result

Start the application from your IDE. The page displays the PPTX Editor with a toolbar, a thumbnail pane, and a slide area containing `sample.pptx`. Select a thumbnail to navigate to a slide, change the zoom level, start a slideshow, or use the print command.

## Troubleshooting

**The Tag Helper is not recognized**
* Confirm that `Syncfusion.EJ2.AspNet.Core` version `35.1.46` is installed and that `@addTagHelper *, Syncfusion.EJ2` is in `~/Pages/_ViewImports.cshtml`.
* Rebuild the project after installing the package.

**The editor does not render or its toolbar is missing**
* Confirm that all dependency scripts load before module injection, and that `<ejs-scripts>` appears after the page's event handler.
* Check the browser console and network requests for missing resources, JavaScript errors, or mixed EJ2 versions.

**The presentation does not open**
* Confirm that `sample.pptx` exists under `wwwroot/presentations`, static files are served, and the file request succeeds.
* Ensure that the file is a valid PPTX presentation and that `openFromBlob` is called after initialization.

## See also

* [ASP.NET Core PPTX Editor overview](./overview)
* [JavaScript PPTX Editor getting started](../javascript-es5/getting-started)
* [TypeScript PPTX Editor getting started](../javascript-es6/getting-started)
