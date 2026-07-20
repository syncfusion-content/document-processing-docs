---
layout: post
title: Getting Stared with ASP.NET Core DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in an ASP.NET Core application using the Syncfusion® Document Editor control to create, edit, and view Word documents.
platform: document-processing
control: Getting Started Core
documentation: ug
---

# Getting Started with ASP.NET Core DOCX Editor

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in a ASP.NET Core application. enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in a ASP.NET Core application. 

## Steps to create an ASP.NET Core DOCX Editor

This section briefly explains how to include [Document Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) control in your ASP.NET Core application using Visual Studio.

### Prerequisites

[System requirements for ASP.NET Core controls](https://ej2.syncfusion.com/aspnetcore/documentation/system-requirements)

### Create ASP.NET Core web application with Razor pages

Create a new ASP.NET Core web application using the following method:

* [Create a Project using Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-8.0&tabs=visual-studio#create-a-razor-pages-web-app)


### Install Document Editor NuGet packages

To add **Document Editor** component in the application, follow the steps below.
 - Open NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), 
 - Search and install the following package
    - [Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core/)
    
Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.EJ2.AspNet.Core

{% endhighlight %}
{% endtabs %}

N> This package includes dependencies such as  [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/) for JSON serialization and [Syncfusion.Licensing](https://www.nuget.org/packages/Syncfusion.Licensing/) for license validation.

### Add Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core Tag Helper

Open `~/Pages/_ViewImports.cshtml` file and import the `Syncfusion.EJ2` TagHelper.

{% tabs %}
{% highlight C# tabtitle="~/_ViewImports.cshtml" %}

@addTagHelper *, Syncfusion.EJ2

{% endhighlight %}
{% endtabs %}

### Add Themes and Script References

Include the required stylesheet and script references in the `<head>` section  of `~/Pages/Shared/_Layout.cshtml` file to apply proper layout and theme styling.

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<!-- Syncfusion ASP.NET Core controls styles -->
<link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/fluent.css" />
<!-- Syncfusion ASP.NET Core controls scripts -->
<script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>

{% endhighlight %}
{% endtabs %}

N> Refer the [Themes topic](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme) to learn the different ways to include Syncfusion styles (using [CDN](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#cdn-reference), [NPM package](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#node-package-manager-npm), or [CRG](https://ej2.syncfusion.com/aspnetcore/documentation/common/custom-resource-generator)) and ensure the expected appearance of Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core controls, and check the [Adding Script Reference](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references) documentation to understand the various approaches for adding required script references in your ASP.NET Core application.

### Register Syncfusion<sup style="font-size:70%">&reg;</sup> Script Manager

Also, register the script manager `<ejs-scripts>` at the end of `<body>` in the `~/Pages/Shared/_Layout.cshtml` file as follows.

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<!-- Syncfusion ASP.NET Core Script Manager -->
<ejs-scripts></ejs-scripts>

{% endhighlight %}
{% endtabs %}

### Add the Document Editor component

Add the Document Editor control in `~/Pages/Index.cshtml` page.

{% tabs %}
{% highlight cshtml tabtitle="~/Index.cshtml" %}

<ejs-documenteditorcontainer id="container" height="620px"></ejs-documenteditorcontainer>

{% endhighlight %}
{% endtabs %}

### Run the application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to run the app. Then, the Document Editor control will be rendered in the default web browser as shown below.

![Output of ASP.NET Core DOCX Editor](./images/aspnetcore-docx-editor.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-DOCX-Editor-Examples/tree/master/getting-started).

## Online Demo

Explore how to create, edit, and print Word documents using the ASP.NET Core Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/default#/tailwind3).

## See also

- [Open a document](./import)
- [Save a document](./export)
- [Collaborative Editing](./collaborative-editing/overview)