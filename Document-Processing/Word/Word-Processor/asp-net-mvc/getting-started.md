---
layout: post
title: Getting Started with ASP.NET MVC DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in an ASP.NET MVC application using the Syncfusion® DOCX Editor component to create, edit, and view Word documents.
platform: document-processing
control: Getting Started
documentation: ug
---

# Getting Started with ASP.NET MVC DOCX Editor

Syncfusion<sup style="font-size:70%">&reg;</sup> [ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in an ASP.NET MVC application. 

## Prerequisites

* [System requirements for ASP.NET MVC controls](https://ej2.syncfusion.com/aspnetmvc/documentation/system-requirements)
* [Browser compatibility](https://ej2.syncfusion.com/aspnetmvc/documentation/browser)


## Create ASP.NET MVC application with HTML helper

* [Create a Project using Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started#create-your-first-app)


## Install Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC NuGet packages

To add the DOCX Editor component in the application, follow the steps below.
- Open NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), 
- Search and install the following package
    - [Syncfusion.EJ2.MVC5](https://www.nuget.org/packages/Syncfusion.EJ2.MVC5)


Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.EJ2.MVC5

{% endhighlight %}
{% endtabs %}

N> This package includes dependencies such as [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/) for JSON serialization and [Syncfusion.Licensing](https://www.nuget.org/packages/Syncfusion.Licensing/) for license validation.

## Add namespace

Add the **Syncfusion.EJ2** namespace reference to the `<namespaces>` section in the `~/Views/Web.config` file.

{% tabs %}
{% highlight C# tabtitle="Web.config" %}

<add namespace="Syncfusion.EJ2"/>

{% endhighlight %}
{% endtabs %}

## Register a Syncfusion License Key

Before initializing the ASP.NET MVC DOCX Editor control, generate a Syncfusion license key and register it in your application.

- [Generate a Syncfusion License Key](https://help.syncfusion.com/document-processing/licensing/how-to-generate)
- [Register a Syncfusion License Key in an ASP.NET Core Application](https://help.syncfusion.com/document-processing/licensing/how-to-register-in-an-application#aspnet-mvc)

## Add Themes and Script References

To render Syncfusion ASP.NET MVC controls with the expected appearance, reference the theme stylesheet and the control scripts via CDN inside the `<head>` of the `~/Views/Shared/_Layout.cshtml` file as follows,

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<!-- Syncfusion ASP.NET MVC controls styles -->
<link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/fluent.css" />
<!-- Syncfusion ASP.NET MVC controls scripts -->
<script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>

{% endhighlight %}
{% endtabs %}

N> Refer the [Themes topic](https://ej2.syncfusion.com/aspnetmvc/documentation/appearance/theme) to learn the different ways to include Syncfusion styles (using [CDN](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references#cdn-reference), [NPM package](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references#node-package-manager-npm), or [CRG](https://ej2.syncfusion.com/aspnetmvc/documentation/common/custom-resource-generator)) and ensure the expected appearance of Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC controls, and check the [Adding Script Reference](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references) documentation to understand the various approaches for adding required script references in your ASP.NET MVC application.

## Register Syncfusion<sup style="font-size:70%">&reg;</sup> script manager

Register the Script Manager at the end of the `<body>` tag in the `~/Views/Shared/_Layout.cshtml` file, as shown below.

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<!-- Syncfusion ASP.NET MVC Script Manager -->
@Html.EJS().ScriptManager()

{% endhighlight %}
{% endtabs %}

## Add the DOCX Editor Component

Add the DOCX Editor component in `~/Views/Home/Index.cshtml` page.

{% tabs %}
{% highlight cshtml tabtitle="~/Index.cshtml" %}
@Html.EJS().DocumentEditorContainer("container").Height("590px").Render()
{% endhighlight %}
{% endtabs %}

## Run the application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> to run the app. The DOCX Editor component will then be rendered in the default web browser as shown below.

![Output of ASP.NET MVC DOCX Editor](./images/aspnetmvc-docx-editor.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-MVC-DOCX-Editor-Examples/tree/master/getting-started).

## Troubleshooting

If the DOCX Editor control does not render as expected, use the following checklist to resolve the most common setup and configuration issues.
 
**DOCX Editor not rendering**
- Confirm that `@Html.EJS().ScriptManager()` is included before the closing `</body>` tag and check the browser console for JavaScript errors.
 
**Licensing errors at runtime**
- Ensure that you have registered your [Syncfusion license](https://help.syncfusion.com/document-processing/licensing/how-to-register-in-an-application#aspnet-mvc) before deploying the application to production.

## Online Demo

Explore how to create, edit, and print Word documents using the ASP.NET MVC DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/defaultfunctionalities#/tailwind3).

N> Looking for the full ASP.NET MVC DOCX Editor component overview, features, pricing, and documentation? Visit the [ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) page.

## See also

- [Open a document](./import)
- [Save a document](./export)
- [Collaborative Editing](./collaborative-editing/overview)

