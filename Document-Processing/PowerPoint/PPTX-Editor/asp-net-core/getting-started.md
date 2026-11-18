---
layout: post
title: Getting Started with ASP.NET Core PPTX Editor | Syncfusion
description: Learn how to add the Syncfusion ASP.NET Core PPTX Editor to a Razor Pages application, load a PowerPoint presentation, navigate slides, and print.
platform: document-processing
control: Getting Started Core
documentation: ug
---

# Getting Started with ASP.NET Core PPTX Editor

This article provides step-by-step instructions for building an ASP.NET Core application with the Syncfusion<sup style="font-size:70%">&reg;</sup> PPTX Editor using Razor Pages and Tag Helpers in [Visual Studio](https://visualstudio.microsoft.com/vs/) and [Visual Studio Code](https://code.visualstudio.com/). The PPTX Editor enables you to view and print PowerPoint presentations in web applications.

## Prerequisites

* [System requirements for ASP.NET Core controls](https://ej2.syncfusion.com/aspnetcore/documentation/system-requirements)
* [Browser compatibility](https://ej2.syncfusion.com/aspnetcore/documentation/browser)

## Create an ASP.NET Core Web App with Razor Pages

{% tabcontents %}

{% tabcontent Visual Studio %}

Create an **ASP.NET Core Web App** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-10.0&tabs=visual-studio#create-a-razor-pages-web-app) or the [ASP.NET Core Extension](https://ej2.syncfusion.com/aspnetcore/documentation/visual-studio-integration/create-project). For detailed instructions, refer to the [ASP.NET Core Web App Getting Started](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/razor-pages) documentation.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Run the following commands to create an ASP.NET Core Web App and open the project in Visual Studio Code.

{% tabs %}
{% highlight bash tabtitle="Terminal" %}

dotnet new webapp -o PptxEditorApp
code -r PptxEditorApp

{% endhighlight %}
{% endtabs %}

Alternatively, create an **ASP.NET Core Web App** using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-8.0&tabs=visual-studio-code#create-a-razor-pages-web-app), the [ASP.NET Core Extension](https://ej2.syncfusion.com/aspnetcore/documentation/visual-studio-code-integration/create-project), or the [C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit) extension.

{% endtabcontent %}

{% endtabcontents %}

## Install the required ASP.NET Core package

Install the **Syncfusion.AspNetCore.PptxEditor** and [Syncfusion.AspNetCore.Themes](https://www.nuget.org/packages/Syncfusion.AspNetCore.Themes/) NuGet packages. See the [NuGet packages](https://ej2.syncfusion.com/aspnetcore/documentation/nuget-packages) topic for details about Syncfusion ASP.NET Core packages.

{% tabcontents %}

{% tabcontent Visual Studio %}

1. Go to **Tools → NuGet Package Manager → Manage NuGet Packages for Solution**.
2. Search for `Syncfusion.AspNetCore.PptxEditor` and `Syncfusion.AspNetCore.Themes` and install them.

Alternatively, install the package using the Package Manager Console.

{% tabs %}
{% highlight bash tabtitle="Package Manager Console" %}

Install-Package Syncfusion.AspNetCore.PptxEditor -Version {{ site.releaseversion }}
Install-Package Syncfusion.AspNetCore.Themes -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Open the integrated terminal in the project folder containing the `.csproj` file and run the following commands.

{% tabs %}
{% highlight bash tabtitle="Terminal" %}

dotnet add package Syncfusion.AspNetCore.PptxEditor -v {{ site.releaseversion }}
dotnet add package Syncfusion.AspNetCore.Themes -v {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

## Add the ASP.NET Core Tag Helpers

After installing the packages, open `~/Pages/_ViewImports.cshtml` and import the `Syncfusion.AspNetCore.Base` and `Syncfusion.AspNetCore.PptxEditor` Tag Helpers. Keep the existing Razor Pages imports and Tag Helpers.

{% tabs %}
{% highlight cshtml tabtitle="~/Pages/_ViewImports.cshtml" %}

@addTagHelper *, Syncfusion.AspNetCore.Base
@addTagHelper *, Syncfusion.AspNetCore.PptxEditor

{% endhighlight %}
{% endtabs %}

## Register a Syncfusion license key

Before initializing the control, generate a Syncfusion license key and register it in the ASP.NET Core application.

* [Generate a Syncfusion license key](https://help.syncfusion.com/document-processing/licensing/how-to-generate)
* [Register a license key in ASP.NET Core](https://help.syncfusion.com/document-processing/licensing/how-to-register-in-an-application#aspnet-core)

## Add stylesheet and script resources

Include the [stylesheet](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme) and [script references](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references) inside the `<head>` of `~/Pages/Shared/_Layout.cshtml`. The following example uses the **Fluent 2** theme and the resources supplied by the NuGet packages.

{% tabs %}
{% highlight cshtml tabtitle="~/Pages/Shared/_Layout.cshtml" %}

<head>
    <!-- Existing head content -->
    <!-- ASP.NET Core controls styles -->
    <link rel="stylesheet" href="_content/Syncfusion.AspNetCore.Themes/styles/fluent2.css" />
    <!-- ASP.NET Core PPTX Editor script -->
    <script src="_content/Syncfusion.AspNetCore.PptxEditor/scripts/sf-pptxeditor.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

## Register the Script Manager

Open the `~/Pages/Shared/_Layout.cshtml` file and register the script manager `<ejs-scripts>` at the end of the `<body>` element as follows.


{% tabs %}
{% highlight cshtml tabtitle="~/Pages/Shared/_Layout.cshtml" %}
    <!-- Syncfusion ASP.NET Core Script Manager -->
    <ejs-scripts></ejs-scripts>
</body>

{% endhighlight %}
{% endtabs %}

## Add the ASP.NET Core PPTX Editor control

Add the ASP.NET Core PptxEditor control in the **~/Pages/Index.cshtml** file.

{% tabs %}
{% highlight cshtml tabtitle="~/Pages/Index.cshtml" %}

@page
@model IndexModel

<ejs-pptxeditor id="pptxeditor"
                documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx">
</ejs-pptxeditor>

@section Scripts {
    <script>
        ej.pptxeditor.PptxEditor.Inject(ej.pptxeditor.Toolbar, ej.pptxeditor.ThumbnailView, ej.pptxeditor.Magnification, ej.pptxeditor.Navigation, ej.pptxeditor.Print, ej.pptxeditor.SlideShow);
    </script>
}

{% endhighlight %}
{% endtabs %}

## Run the application

{% tabcontents %}

{% tabcontent Visual Studio %}

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. The ASP.NET Core PPTX Editor renders in the default web browser.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Open the integrated terminal in the project folder containing the `.csproj` file and run the following command.

{% tabs %}
{% highlight bash tabtitle="Terminal" %}

dotnet run

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

The page displays the PPTX Editor with a toolbar, a thumbnail pane, and a slide area containing `Sample.pptx`. Select a thumbnail to navigate to a slide, change the zoom level, start a slideshow, or use the print command.

## See also

* [ASP.NET Core PPTX Editor overview](./overview)
* [JavaScript PPTX Editor getting started](../javascript-es5/getting-started)
* [TypeScript PPTX Editor getting started](../javascript-es6/getting-started)
