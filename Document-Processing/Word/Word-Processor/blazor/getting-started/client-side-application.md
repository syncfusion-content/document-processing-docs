---
layout: post
title: Getting Started with Blazor WASM DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in a Blazor WASM application using the Syncfusion® Document Editor control to create, edit, and view Word documents.
platform: document-processing
control: DocumentEditor
documentation: ug
---

# Getting Started with Blazor DOCX Editor in Blazor WASM

[Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in a Blazor WebAssembly (WASM) application. 


## Steps to create a Blazor WASM DOCX Editor

This section explains how to include the DOCX Editor component in a Blazor WebAssembly (WASM) application using Visual Studio and Visual Studio Code.

### Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)
* Browser compatibility: Chrome (latest), Firefox (latest), Safari (latest), Edge (latest)
* [Syncfusion license registration](https://help.syncfusion.com/document-processing/licensing/how-to-register-in-an-application) (required to use DOCX Editor in production; use evaluation mode for development)
* For local development: Use Visual Studio or Visual Studio Code with the .NET SDK to run the Blazor application (Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> to launch with debugging)

{% tabcontents %}

{% tabcontent Visual Studio %}

### Create a Blazor WASM App in Visual Studio

You can create a **Blazor WebAssembly App** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-7.0&pivots=vs).

### Install Document Editor Nuget packages

To add **Document Editor** component in the application, follow the steps below.
 - Open NuGet Package Manager in Visual Studio (Tools → NuGet Package Manager → Manage NuGet Packages for Solution).
 - Search and install the following packages
    - [Syncfusion.Blazor.WordProcessor](https://www.nuget.org/packages/Syncfusion.Blazor.WordProcessor)
    - [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/)
    
Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight C# tabtitle="Package Manager" %}

Install-Package Syncfusion.Blazor.WordProcessor
Install-Package Syncfusion.Blazor.Themes

{% endhighlight %}
{% endtabs %}

**Package Compatibility:**
* Syncfusion.Blazor.WordProcessor: v24.1.0 and above
* Syncfusion.Blazor.Themes: v24.1.0 and above
* .NET versions supported: .NET 6.0, .NET 7.0, .NET 8.0 and above

N> The DOCX Editor packages are available on [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). Refer to the [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) topic for the complete list of packages and component details.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

### Create a new Blazor WASM App in Visual Studio Code

You can create a **Blazor WebAssembly App** using Visual Studio Code via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-7.0&pivots=vsc).

Alternatively, create a WebAssembly application using the following terminal commands (<kbd>Ctrl</kbd>+<kbd>`</kbd>).

{% tabs %}

{% highlight c# tabtitle="Blazor WASM App" %}

```bash
dotnet new blazorwasm -o BlazorApp
cd BlazorApp
```

{% endhighlight %}

{% endtabs %}

### Install Document Editor Nuget packages

* Press <kbd>Ctrl</kbd>+<kbd>`</kbd> to open the integrated terminal in Visual Studio Code.
* Navigate to the project directory created in the previous step.
* Ensure you're in the project root directory where your `.csproj` file is located.
* Run the following command to install the required packages:
    - [Syncfusion.Blazor.WordProcessor](https://www.nuget.org/packages/Syncfusion.Blazor.WordProcessor)
    - [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/)

{% tabs %}

{% highlight c# tabtitle="Package Manager" %}

dotnet add package Syncfusion.Blazor.WordProcessor
dotnet add package Syncfusion.Blazor.Themes
dotnet restore

{% endhighlight %}
{% endtabs %}

N> The DOCX Editor packages are available on [nuget.org](https://www.nuget.org/packages?q=syncfusion.blazor). Refer to the [NuGet packages](https://blazor.syncfusion.com/documentation/nuget-packages) topic for available NuGet packages list with component details.

{% endtabcontent %}

{% endtabcontents %}

### Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Services

Open **~/_Imports.razor** file and import the `Syncfusion.Blazor` and `Syncfusion.Blazor.DocumentEditor` namespaces.

{% tabs %}
{% highlight razor tabtitle="~/_Imports.razor" %}

@using Syncfusion.Blazor
@using Syncfusion.Blazor.DocumentEditor

{% endhighlight %}
{% endtabs %}

Now register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Service in the **~/Program.cs** file of your Blazor WebAssembly App.

{% tabs %}
{% highlight C# tabtitle="Blazor WebAssembly App" hl_lines="3 11" %}

using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Syncfusion.Blazor;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

builder.Services.AddSyncfusionBlazor();
await builder.Build().RunAsync();

{% endhighlight %}
{% endtabs %}

### Add Themes and Script References

Add the following stylesheet and script to the head section of **~/index.html** file. The theme stylesheet and script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets). Reference the stylesheet and script in the `<head>` of the main page as follows:

{% tabs %}
{% highlight html tabtitle="~/index.html" %}

<!-- Add Syncfusion theme -->
<link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />
<!-- Add the DOCX Editor script -->
<script src="_content/Syncfusion.Blazor.WordProcessor/scripts/syncfusion-blazor-documenteditor.min.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

N> Check out the [Blazor Themes](https://blazor.syncfusion.com/documentation/appearance/themes) topic to discover various methods ([Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets), [CDN](https://blazor.syncfusion.com/documentation/appearance/themes#cdn-reference), and [CRG](https://blazor.syncfusion.com/documentation/common/custom-resource-generator)) for referencing themes in your Blazor application. Also, check out the [Adding Script Reference](https://blazor.syncfusion.com/documentation/common/adding-script-references) topic to learn different approaches for adding script references in your Blazor application.

### Add the DOCX Editor Component

Add the DOCX Editor component in the **~/Pages/Home.razor** file.

{% tabs %}
{% highlight razor tabtitle="~/Home.razor" %}

<SfDocumentEditorContainer EnableToolbar=true Height="590px"></SfDocumentEditorContainer>

{% endhighlight %}
{% endtabs %}

### Run the application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. This will render the DOCX Editor component in your default web browser. The output will appear as follows:

![Blazor DOCX Editor in WASM](../images/blazor-docx-editor.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/Blazor-Getting-Started-Examples/tree/main/DocumentEditor).

### Next Steps

You now have a basic DOCX Editor running in your Blazor WASM application. To extend its functionality, explore the following:

- **Load Documents** — Learn how to [open existing Word documents](https://help.syncfusion.com/document-processing/word/word-processor/blazor/opening-a-document) in the editor
- **Save Documents** — Implement [document saving functionality](https://help.syncfusion.com/document-processing/word/word-processor/blazor/saving-document) to persist changes
- **Track Changes** — Enable [track changes and revisions](https://help.syncfusion.com/document-processing/word/word-processor/blazor/track-changes) for collaborative editing
- **Available Features** — Explore the [complete DOCX Editor feature set](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor)

## Online Demo

Explore how to create, edit, and print Word documents using the Blazor DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/blazor-wasm/document-editor/default-functionalities).

N> Looking for the full Blazor DOCX Editor component overview, features, pricing, and documentation? Visit the [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) page.

## See also

- [Getting started in Blazor Web app](https://help.syncfusion.com/document-processing/word/word-processor/blazor/getting-started/web-app)
- [Open a document](https://help.syncfusion.com/document-processing/word/word-processor/blazor/opening-a-document)
- [Save a document](https://help.syncfusion.com/document-processing/word/word-processor/blazor/saving-document)
- [Track changes](https://help.syncfusion.com/document-processing/word/word-processor/blazor/track-changes)
- [Blazor DOCX Editor Features](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor)