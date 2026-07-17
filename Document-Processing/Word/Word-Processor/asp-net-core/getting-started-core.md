---
layout: post
title: Getting Started with ASP.NET Core DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in an ASP.NET Core application using the Syncfusion® DOCX Editor component to create, edit, and view Word documents.
platform: document-processing
control: Getting Started Core
documentation: ug
---

# Getting Started with ASP.NET Core DOCX Editor

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in an ASP.NET Core application. 

## Steps to create an ASP.NET Core DOCX Editor

This section explains how to include the DOCX Editor component in your ASP.NET Core application using Visual Studio.

### Prerequisites

* [System requirements for ASP.NET Core controls](https://ej2.syncfusion.com/aspnetcore/documentation/system-requirements)
* Browser compatibility: Chrome (latest), Firefox (latest), Safari (latest), Edge (latest)
* [Syncfusion license registration](https://help.syncfusion.com/document-processing/licensing/how-to-register) (required to use DOCX Editor in production; evaluation mode is available for development)

### Create ASP.NET Core web application with Razor pages

Create a new ASP.NET Core web application using the following method:

* [Create a Project using Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-8.0&tabs=visual-studio#create-a-razor-pages-web-app)


### Install DOCX Editor NuGet packages

To add the DOCX Editor component in the application, follow the steps below.
 - Open NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), 
 - Search and install the following package
    - [Syncfusion.EJ2.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.AspNet.Core/)
    
Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.EJ2.AspNet.Core

{% endhighlight %}
{% endtabs %}

**Package Compatibility:**
* Syncfusion.EJ2.AspNet.Core: v24.1.0 and above
* .NET versions supported: .NET 6.0, .NET 7.0, .NET 8.0 and above

**Verify Installation:**
After installing the package, verify it was added successfully by checking the `.csproj` file (should contain `<PackageReference Include="Syncfusion.EJ2.AspNet.Core" ...`) or use Package Manager Console: `Get-Package | findstr Syncfusion`

N> This package includes dependencies such as [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/) for JSON serialization and [Syncfusion.Licensing](https://www.nuget.org/packages/Syncfusion.Licensing/) for license validation.

**Configure Service URL (Optional)**
The DOCX Editor requires backend services for advanced features (spell checking, collaborative editing, importing from URL). The default demo service is available at `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/`. 

For production deployments, [host your own service](./how-to-host-the-spell-check-service) to avoid latency and ensure data privacy. Configure the service URL in your component:

```html
<ejs-documenteditorcontainer id="container" 
    height="620px"
    service-url="https://your-service-url/api/documenteditor/">
</ejs-documenteditorcontainer>
```

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

**Version Information:**
Replace `{{ site.ej2version }}` with the current Syncfusion version. Common versions include:
* Latest: `24.1.48` or higher
* Find current version at [Syncfusion CDN](https://cdn.syncfusion.com/ej2/)

N> Refer the [Themes topic](https://ej2.syncfusion.com/aspnetcore/documentation/appearance/theme) to learn the different ways to include Syncfusion styles (using [CDN](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#cdn-reference), [NPM package](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#node-package-manager-npm), or [CRG](https://ej2.syncfusion.com/aspnetcore/documentation/common/custom-resource-generator)) and ensure the expected appearance of Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core controls, and check the [Adding Script Reference](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references) documentation to understand the various approaches for adding required script references in your ASP.NET Core application.

### Register Syncfusion<sup style="font-size:70%">&reg;</sup> Script Manager

Also, register the script manager `<ejs-scripts>` at the end of `<body>` in the `~/Pages/Shared/_Layout.cshtml` file as follows.

{% tabs %}
{% highlight cshtml tabtitle="~/_Layout.cshtml" %}

<!-- Syncfusion ASP.NET Core Script Manager -->
<ejs-scripts></ejs-scripts>

{% endhighlight %}
{% endtabs %}

### Add the DOCX Editor Component

Add the DOCX Editor component in `~/Pages/Index.cshtml` page.

{% tabs %}
{% highlight cshtml tabtitle="~/Index.cshtml" %}

<ejs-documenteditorcontainer id="container" height="620px"></ejs-documenteditorcontainer>

{% endhighlight %}
{% endtabs %}

**What is the blank editor?**
When the component first loads, it displays a blank document ready for editing. This is the default state. To load an existing Word document (.docx) from a file or URL, refer to the [opening a document](./import) documentation for implementation examples using the `DocumentEditor.open()` method.

**Component Properties:**
* `height` — Sets the height of the editor container. Default: `"620px"`. You can specify any CSS-valid value (px, %, em, etc.)
* `width` — Sets the width of the editor container. Default: `"100%"`
* `id` — Unique identifier for the component used in server-side code-behind and JavaScript interactions
* `enable-toolbar` — Boolean property that shows/hides the toolbar. Default: `true`
* `enable-spell-check` — Boolean property that enables spell checking. Default: `false`
* `show-properties-pane` — Boolean property that displays the properties panel. Default: `false`

**Example with additional properties:**
```html
<ejs-documenteditorcontainer id="container" 
    height="620px" 
    width="100%" 
    enable-toolbar="true"
    show-properties-pane="false">
</ejs-documenteditorcontainer>
```

Refer to [API Reference - DocumentEditorContainer](./api-documenteditorcontainer) for the complete list of properties and methods.

### Run the application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to run the app. The DOCX Editor component will be rendered in the default web browser as shown below.

![Output of ASP.NET Core DOCX Editor](./images/aspnetcore-docx-editor.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/ASP-NET-Core-DOCX-Editor-Examples/tree/master/getting-started).

### Troubleshooting Common Issues

If you encounter issues when running the application, refer to these solutions:

**CSS and Scripts not loading (component appears without styling)**
- Verify that `{{ site.ej2version }}` in `_Layout.cshtml` is replaced with the correct version number (e.g., `24.1.48`)
- Check browser console (F12) for 404 errors on CDN resources
- Ensure internet connectivity for CDN-hosted resources, or [use local NuGet packages](https://ej2.syncfusion.com/aspnetcore/documentation/common/adding-script-references#using-npm-packages) instead

**Port conflicts or application won't start**
- The default HTTPS port might be in use; try running `dotnet run --urls https://localhost:7001` to use a different port
- Clear browser cache and try again

**Licensing errors at runtime**
- Ensure you have [registered your Syncfusion license](https://help.syncfusion.com/document-processing/licensing/how-to-register) before deploying to production
- For development, evaluation mode is available without registration

**Component not rendering**
- Verify `<ejs-scripts></ejs-scripts>` is placed at the end of `<body>` in `_Layout.cshtml`
- Check that `@addTagHelper *, Syncfusion.EJ2` is present in `_ViewImports.cshtml`
- Open browser developer console to check for JavaScript errors

### Next Steps

You now have a basic DOCX Editor running in your ASP.NET Core application. To extend its functionality, explore the following:

- **Load Documents** — Learn how to [open existing Word documents](./import) in the editor
- **Save Documents** — Implement [document saving functionality](./export) to persist changes
- **Track Changes** — Enable [track changes and revisions](./track-changes) for collaborative editing
- **Properties and Formatting** — Configure [component properties](./api-documenteditorcontainer) for advanced customization
- **Licensing** — [Register your Syncfusion license](https://help.syncfusion.com/document-processing/licensing/overview) for production use

## Online Demo

Explore how to create, edit, and print Word documents using the ASP.NET Core DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/default#/tailwind3).

N> Looking for the full ASP.NET Core DOCX Editor component overview, features, pricing, and documentation? Visit the [ASP.NET Core Docx Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) page.
## See also

- [Open a document](./import)
- [Save a document](./export)
- [Collaborative Editing](./collaborative-editing/overview)
- [Track Changes](./track-changes)
- [Insert elements](./insert)
- [API Reference - DocumentEditorContainer](./api-documenteditorcontainer)
- [Component properties](./api-properties)
- [Licensing Overview](https://help.syncfusion.com/document-processing/licensing/overview)
- [ASP.NET Core DOCX Editor Features](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor)