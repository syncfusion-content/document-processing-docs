---
layout: post
title: Getting Started with ASP.NET MVC DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in an ASP.NET MVC application using the Syncfusion® DOCX Editor component to create, edit, and view Word documents.
platform: document-processing
control: Getting Started
documentation: ug
---

# Getting Started with ASP.NET MVC DOCX Editor

Syncfusion<sup style="font-size:70%">&reg;</sup> [ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in an ASP.NET MVC application. 

## Steps to create an ASP.NET MVC DOCX Editor

This section explains how to include the DOCX Editor component in your ASP.NET MVC application using Visual Studio.

### Prerequisites

* [System requirements for ASP.NET MVC controls](https://ej2.syncfusion.com/aspnetmvc/documentation/system-requirements)
* **.NET Framework versions**: 4.6.1 and above
* **ASP.NET MVC versions**: MVC 5.0 and above
* **Browser compatibility**: Chrome (latest), Firefox (latest), Safari (latest), Edge (latest)
* [Syncfusion license registration](https://help.syncfusion.com/document-processing/licensing/how-to-register) (required for production; evaluation mode available for development)

### Create ASP.NET MVC application with HTML helper

* [Create a Project using Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/mvc/overview/getting-started/introduction/getting-started#create-your-first-app)


### Install Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC NuGet packages

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

**Package Compatibility:**
* Syncfusion.EJ2.MVC5: v24.1.0 and above
* .NET Framework: 4.6.1 and above
* ASP.NET MVC: 5.0 and above

**Verify Installation:**
After installing the package, verify it was added successfully by checking the `.csproj` file (should contain `<PackageReference Include="Syncfusion.EJ2.MVC5" ...`) or use Package Manager Console: `Get-Package | findstr Syncfusion`

N> This package includes dependencies such as [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/) for JSON serialization and [Syncfusion.Licensing](https://www.nuget.org/packages/Syncfusion.Licensing/) for license validation.

### Add namespace

Add the **Syncfusion.EJ2** namespace reference to the `<namespaces>` section in the `~/Views/Web.config` file.

{% tabs %}
{% highlight C# tabtitle="Web.config" %}

<add namespace="Syncfusion.EJ2"/>

{% endhighlight %}
{% endtabs %}

### Configure Service URL (Optional)

The DOCX Editor requires backend services for advanced features (spell checking, collaborative editing, importing from URL). The default demo service is available at `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/`.

For production deployments, [host your own service](./how-to-host-the-spell-check-service) to avoid latency and ensure data privacy. Configure the service URL in your component:

```csharp
@Html.EJS().DocumentEditorContainer("container")
    .Height("620px")
    .ServiceUrl("https://your-service-url/api/documenteditor/")
    .Render()
```

N> The demo service URL is for evaluation only. For production applications, you must host your own service instance.

### Add Themes and Script References

Here, the theme and script is referred using CDN inside the `<head>` of `~/Views/Shared/_Layout.cshtml` file as follows,

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<!-- Syncfusion ASP.NET MVC controls styles -->
<link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/fluent.css" />
<!-- Syncfusion ASP.NET MVC controls scripts -->
<script src="https://cdn.syncfusion.com/ej2/{{ site.ej2version }}/dist/ej2.min.js"></script>

{% endhighlight %}
{% endtabs %}

**Version Information:**
Replace `{{ site.ej2version }}` with the current Syncfusion version. Common versions include:
* Latest: `24.1.48` or higher
* Find current version at [Syncfusion CDN](https://cdn.syncfusion.com/ej2/)

**Available Themes:**
Replace `fluent.css` with any of the following theme options:
* `fluent.css` — Fluent theme (default)
* `fluent-dark.css` — Fluent dark theme
* `bootstrap5.css` — Bootstrap 5 theme
* `bootstrap5-dark.css` — Bootstrap 5 dark theme
* `bootstrap4.css` — Bootstrap 4 theme
* `material.css` — Material theme
* `tailwind.css` — Tailwind theme
* `fabric.css` — Fabric theme

N> Refer the [Themes topic](https://ej2.syncfusion.com/aspnetmvc/documentation/appearance/theme) to learn the different ways to include Syncfusion styles (using [CDN](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references#cdn-reference), [NPM package](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references#node-package-manager-npm), or [CRG](https://ej2.syncfusion.com/aspnetmvc/documentation/common/custom-resource-generator)) and ensure the expected appearance of Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET MVC controls, and check the [Adding Script Reference](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references) documentation to understand the various approaches for adding required script references in your ASP.NET MVC application.

### Register Syncfusion<sup style="font-size:70%">&reg;</sup> script manager

Also, register the script manager `EJS().ScriptManager()` at the end of `<body>` in the `~/Views/Shared/_Layout.cshtml` file as follows.

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<!-- Syncfusion ASP.NET MVC Script Manager -->
@Html.EJS().ScriptManager()

{% endhighlight %}
{% endtabs %}

### Add the DOCX Editor Component

Add the DOCX Editor component in `~/Views/Home/Index.cshtml` page.

{% tabs %}
{% highlight cshtml tabtitle="~/Index.cshtml" %}
@Html.EJS().DocumentEditorContainer("container").Height("590px").Render()
{% endhighlight %}
{% endtabs %}

**HTML Helper Syntax:**
The `DocumentEditorContainer` HTML helper uses a fluent API for configuration:
* `DocumentEditorContainer("container")` — Creates the component with unique ID "container"
* `.Height("590px")` — Sets the container height (default: "620px")
* `.EnableToolbar(true)` — Shows/hides the toolbar (default: true)
* `.ShowPropertiesPane(false)` — Shows/hides the properties panel (default: false)
* `.Render()` — Renders the component to HTML

**Example with additional properties:**
```csharp
@Html.EJS().DocumentEditorContainer("container")
    .Height("620px")
    .Width("100%")
    .EnableToolbar(true)
    .ShowPropertiesPane(false)
    .Render()
```

Refer to [API Reference - DocumentEditorContainer](./api-documenteditorcontainer) for the complete list of available HTML helper methods.

**What is the blank editor?**

When the component first loads, it displays a blank document ready for editing. This is the default state. To load an existing Word document (.docx) from a file or URL, refer to the [opening a document](./import) documentation for implementation examples using the `DocumentEditor.open()` method.

### Run the application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to run the app. The DOCX Editor component will then be rendered in the default web browser as shown below.

![Output of ASP.NET MVC DOCX Editor](./images/aspnetmvc-docx-editor.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-MVC-DOCX-Editor-Examples/tree/master/getting-started).

### Troubleshooting Common Issues

If you encounter issues when running the application, refer to these solutions:

**CSS and Scripts not loading (component appears without styling)**
- Verify that `{{ site.ej2version }}` in `_Layout.cshtml` is replaced with the correct version number (e.g., `24.1.48`)
- Check browser console (F12) for 404 errors on CDN resources
- Ensure internet connectivity for CDN-hosted resources, or [use local NuGet packages](https://ej2.syncfusion.com/aspnetmvc/documentation/common/adding-script-references#using-npm-packages) instead

**Licensing errors at runtime**
- Ensure you have [registered your Syncfusion license](https://help.syncfusion.com/document-processing/licensing/how-to-register) before deploying to production
- For development, evaluation mode is available without registration

**Component not rendering**
- Verify `@Html.EJS().ScriptManager()` is placed at the end of `<body>` in `_Layout.cshtml`
- Check that `<add namespace="Syncfusion.EJ2"/>` is present in `Web.config`
- Open browser developer console to check for JavaScript errors
- Clear browser cache and rebuild the solution

**Port conflicts or application won't start**
- The default port might be in use; try using a different port by modifying the project properties

### Next Steps

You now have a basic DOCX Editor running in your ASP.NET MVC application. To extend its functionality, explore the following:

- **Load Documents** — Learn how to [open existing Word documents](./import) in the editor
- **Save Documents** — Implement [document saving functionality](./export) to persist changes
- **Track Changes** — Enable [track changes and revisions](./track-changes) for collaborative editing
- **Component Properties** — Configure [HTML helper methods](./api-properties) for advanced customization
- **Licensing** — [Register your Syncfusion license](https://help.syncfusion.com/document-processing/licensing/overview) for production use

## Online Demo

Explore how to create, edit, and print Word documents using the ASP.NET MVC DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/defaultfunctionalities#/tailwind3).

N> Looking for the full ASP.NET MVC DOCX Editor component overview, features, pricing, and documentation? Visit the [ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) page.

## See also

- [Open a document](./import)
- [Save a document](./export)
- [Collaborative Editing](./collaborative-editing/overview)
- [Track Changes](./track-changes)
- [Insert elements](./insert)
- [API Reference - DocumentEditorContainer](./api-documenteditorcontainer)
- [Component properties](./api-properties)
- [Licensing Overview](https://help.syncfusion.com/document-processing/licensing/overview)
- [ASP.NET MVC DOCX Editor Features](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor)
