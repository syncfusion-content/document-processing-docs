---
layout: post
title: Getting Started with Blazor Web App DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in a Blazor Web App application using the Syncfusion® DOCX Editor control to create, edit, and view Word documents.
component: DocumentEditor
documentation: ug
---

# Getting Started with Blazor DOCX Editor in Web App

[Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in a Blazor WebAssembly (WASM) application.

### Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)
* [Browser compatibility](https://blazor.syncfusion.com/documentation/browser-support)

{% tabcontents %}

{% tabcontent Visual Studio %}

### Create a new Blazor Web App in Visual Studio

You can create a **Blazor Web App** using Visual Studio 2022 via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=vs).

You need to configure the corresponding [Interactive render mode](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes?view=aspnetcore-8.0#render-modes) and [Interactivity location](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=vs) while creating the Blazor Web App.

### Install DOCX Editor NuGet packages

To add **Syncfusion Blazor DOCX Editor** component in the app, open the NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), search and install:

- [Syncfusion.Blazor.WordProcessor](https://www.NuGet.org/packages/Syncfusion.Blazor.WordProcessor)
- [Syncfusion.Blazor.Themes](https://www.NuGet.org/packages/Syncfusion.Blazor.Themes/)
    
Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.Blazor.WordProcessor
Install-Package Syncfusion.Blazor.Themes

{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

### Create a new Blazor Web App in Visual Studio Code

You can create a **Blazor Web App** using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=vsc).

You need to configure the corresponding [Interactive render mode](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes?view=aspnetcore-8.0#render-modes) and [Interactivity location](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=vsc) while creating a Blazor Web Application.

For example, in a Blazor Web App with the `Auto` interactive render mode, use the following commands.

{% tabs %}
{% highlight c# tabtitle="Blazor Web App" %}

dotnet new blazor -o BlazorWebApp -int Auto
cd BlazorWebApp
cd BlazorWebApp.Client

{% endhighlight %}
{% endtabs %}

N> For more information on creating a **Blazor Web App** with various interactive modes and locations, refer to this [link](https://blazor.syncfusion.com/documentation/getting-started/blazor-web-app?tabcontent=visual-studio-code#render-interactive-modes).

### Install DOCX Editor NuGet packages

If you utilize `WebAssembly` or `Auto` render modes in the Blazor Web App, you need to install DOCX Editor NuGet packages within the client project.

* Press <kbd>Ctrl</kbd>+<kbd>`</kbd> to open the integrated terminal in Visual Studio Code.
* Ensure the terminal is in the project root directory (where the `.csproj` file is located).
* Run the following command to install 
    - [Syncfusion.Blazor.WordProcessor](https://www.NuGet.org/packages/Syncfusion.Blazor.WordProcessor)
    - [Syncfusion.Blazor.Themes](https://www.NuGet.org/packages/Syncfusion.Blazor.Themes/)

{% tabs %}

{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.WordProcessor
dotnet add package Syncfusion.Blazor.Themes
dotnet restore

{% endhighlight %}

{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}


### Add import namespaces

Open the **`~/_Imports.razor`** file based on your interactive render mode and add the following namespaces:

| Interactive Render Mode | File Location |
| -- | -- |
| WebAssembly or Auto | `~/_Imports.razor` in the **client project** |
| Server | `~/_Imports.razor` in the **`Components`** folder |

Add the following import statement to the **`~/_Imports.razor`** file:

{% tabs %}
{% highlight C# tabtitle="~/_Imports.razor" %}

@using Syncfusion.Blazor

{% endhighlight %}
{% endtabs %}

### Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Services

Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor service in the **`Program.cs`** file of your Blazor Web App. Place the registration after the host builder is created and before `await builder.Build().RunAsync();`.

{% tabs %}
{% highlight c# tabtitle="Program.cs" %}

// Other code Snippet

using Syncfusion.Blazor;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

// Register Syncfusion Blazor services along with other service registrations
builder.Services.AddSyncfusionBlazor();
await builder.Build().RunAsync();

// Other code Snippet

{% endhighlight %}
{% endtabs %}

### Register a Syncfusion License Key

Before initializing the Blazor DOCX Editor control, generate a Syncfusion license key and register it in your application.

- [Generate a Syncfusion License Key](https://blazor.syncfusion.com/documentation/getting-started/license-key/how-to-generate)
- [Register a Syncfusion License Key in Blazor Web Application](https://blazor.syncfusion.com/documentation/getting-started/license-key/how-to-register-in-an-application)

### Add stylesheet

The theme stylesheet can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets). Include the stylesheet reference in the `<head>` section of your `Components/App.razor` file.

{% tabs %}
{% highlight razor tabtitle="Components/App.razor" % }

<head>
    <!-- Add Syncfusion theme -->
    <link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />
</head>

{% endhighlight %}
{% endtabs %}

### Add Script Resources

Include the script reference at the end of the `<body>` section in the **~/Components/App.razor**  file.

{% tabs %}
{% highlight razor tabtitle="~/Components/App.razor" %}

<head>
    <!-- Add the DOCX Editor script -->
    <script src="_content/Syncfusion.Blazor.WordProcessor/scripts/syncfusion-blazor-documenteditor.min.js" type="text/javascript"></script>
</head>

{% endhighlight %}
{% endtabs %}

N> Check out the [Blazor Themes](https://blazor.syncfusion.com/documentation/appearance/themes) topic to discover various methods ([Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets), [CDN](https://blazor.syncfusion.com/documentation/appearance/themes#cdn-reference), and [CRG](https://blazor.syncfusion.com/documentation/common/custom-resource-generator)) for referencing themes in your Blazor application. Also, check out the [Adding Script Reference](https://blazor.syncfusion.com/documentation/common/adding-script-references) topic to learn different approaches for adding script references in your Blazor application.

### Add the Document Editor component

Add the Document Editor component in the `~/Components/Pages/*.razor` file. If the interactivity location is set to `Per page/component`, define a render mode at the top of the component, as follows:

| Interactivity location | RenderMode | Code |
| --- | --- | --- |
| Per page/component | Auto | @rendermode InteractiveAuto |
|  | WebAssembly | @rendermode InteractiveWebAssembly |
|  | Server | @rendermode InteractiveServer |
|  | None | --- |

N> If the interactivity location is set to **Global** in your Blazor Web App, you do not need to add a render mode directive. For detailed guidance, check out [Blazor Render Modes](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes?view=aspnetcore-8.0).

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@* desired render mode define here *@
@rendermode InteractiveAuto

@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer EnableToolbar=true Height="590px"></SfDocumentEditorContainer>

{% endhighlight %}
{% endtabs %}

### Run the application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. This launches the application and displays the DOCX Editor in your default web browser. The output will appear as follows:

![Blazor DOCX Editor in Web app](../images/blazor-docx-editor.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/Blazor-Getting-Started-Examples/tree/main/DocumentEditor).

## Online Demo

Explore how to create, edit, and print Word documents using the Blazor DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/default-functionalities).

N> Looking for the full Blazor DOCX Editor component overview, features, pricing, and documentation? Visit the [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) page.

## See also

- [Getting started in Blazor WASM app](https://help.syncfusion.com/document-processing/word/word-processor/blazor/getting-started/client-side-application)
- [Open a document](https://help.syncfusion.com/document-processing/word/word-processor/blazor/opening-a-document)
- [Save a document](https://help.syncfusion.com/document-processing/word/word-processor/blazor/saving-document)
