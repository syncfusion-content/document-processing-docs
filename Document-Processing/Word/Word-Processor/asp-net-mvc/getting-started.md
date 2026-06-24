---
layout: post
title: Getting Started with ASP.NET MVC DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in an ASP.NET MVC application using the Syncfusion® Document Editor control to create, edit, and view Word documents.
platform: document-processing
control: Getting Started
documentation: ug
---

# Getting Started with ASP.NET MVC DOCX Editor

Syncfusion<sup style="font-size:70%">&reg;</sup> [ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in a ASP.NET MVC application. 

## Steps to create an ASP.NET MVC DOCX Editor

This section briefly explains about how to include [Document Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) control in your ASP.NET MVC application using Visual Studio.

### Prerequisites

[System requirements for ASP.NET MVC controls](https://ej2.syncfusion.com/aspnetmvc/documentation/system-requirements)

### Create ASP.NET MVC application with HTML helper

* [Create a Project using Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started#create-your-first-app)


### Install Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC Nuget packages

To add **Document Editor** component in the application, follow the steps below.
- Open NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), 
- Search and install the following package
    - [Syncfusion.EJ2.MVC5](https://www.nuget.org/packages/Syncfusion.EJ2.MVC5)


Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.EJ2.MVC5 -Version {{ site.ej2version }}

{% endhighlight %}
{% endtabs %}

N> This package includes dependencies such as  [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/) for JSON serialization and [Syncfusion.Licensing](https://www.nuget.org/packages/Syncfusion.Licensing/) for license validation.

### Add namespace

Add **Syncfusion.EJ2** namespace reference in `Web.config` under `Views` folder.

{% tabs %}
{% highlight C# tabtitle="Web.config" %}

<namespaces>
    <add namespace="Syncfusion.EJ2"/>
</namespaces>

{% endhighlight %}
{% endtabs %}

### Add Themes and Script References

Here, the theme and script is referred using CDN inside the `<head>` of `~/Views/Shared/_Layout.cshtml` file as follows,

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<head>
    ...
    <!-- Syncfusion ASP.NET MVC controls styles -->
    <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/fluent.css" />
    <!-- Syncfusion ASP.NET MVC controls scripts -->
    <script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

N> Refer the [Themes topic](https://ej2.syncfusion.com/aspnetmvc/documentation/appearance/theme) to learn the different ways to include Syncfusion styles (using [CDN](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references#cdn-reference), [NPM package](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references#node-package-manager-npm), or [CRG](https://ej2.syncfusion.com/aspnetmvc/documentation/common/custom-resource-generator)) and ensure the expected appearance of Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC controls, and check the [Adding Script Reference](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references) documentation to understand the various approaches for adding required script references in your ASP.NET MVC application.

### Register Syncfusion<sup style="font-size:70%">&reg;</sup> script manager

Also, register the script manager `EJS().ScriptManager()` at the end of `<body>` in the `~/Views/Shared/_Layout.cshtml` file as follows.

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<body>
    ...
    <!-- Syncfusion ASP.NET MVC Script Manager -->
    @Html.EJS().ScriptManager()
</body>

{% endhighlight %}
{% endtabs %}

### Add the Document Editor component

Add the Document Editor control in `~/Views/Home/Index.cshtml` page.

{% tabs %}
{% highlight cshtml tabtitle="~/Index.cshtml" %}
@Html.EJS().DocumentEditorContainer("container").Height("590px").Render()
{% endhighlight %}
{% endtabs %}


### Run the application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to run the app. Then, Document Editor control will be rendered in the default web browser as shown below.

![Output of ASP.NET MVC DOCX Editor](./images/aspnetmvc-docx-editor.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-MVC-DOCX-Editor-Examples/tree/master/getting-started).

## Online Demo

Explore how to create, edit, and print Word documents using the ASP.NET MVC Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/defaultfunctionalities#/tailwind3).

## See also

- [Open a document](./import)
- [Save a document](./export)
- [Collaborative Editing](./collaborative-editing/overview)
