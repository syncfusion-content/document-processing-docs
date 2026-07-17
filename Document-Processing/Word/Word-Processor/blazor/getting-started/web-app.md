---
layout: post
title: Getting Started with Blazor Web App DOCX Editor | Syncfusion
description: Learn how to create a DOCX Editor in a Blazor Web App application using the Syncfusion® Document Editor control to create, edit, and view Word documents.
component: DocumentEditor
documentation: ug
---

# Getting Started with Blazor DOCX Editor in Web App

[Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) enables you to create, edit, view, and print Word documents in web applications. This section guides you through the steps to get started and create a DOCX Editor in a Blazor WebAssembly (WASM) application.

## Steps to create a Blazor Web App DOCX Editor

### Prerequisites

* [System requirements for Blazor components](https://blazor.syncfusion.com/documentation/system-requirements)
* **.NET version**: .NET 8.0 SDK or later
* **Syncfusion packages**: Syncfusion.Blazor.WordProcessor v24.1.0 or later
* **Syncfusion license**: Free community license or commercial license (required for production use)

This section explains about how to include the [Document Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) component in a Blazor Web App using [Visual Studio](https://visualstudio.microsoft.com/vs/) and Visual Studio Code.

{% tabcontents %}

{% tabcontent Visual Studio %}

### Create a new Blazor Web App in Visual Studio

You can create a **Blazor Web App** using Visual Studio 2022 via [Microsoft Templates](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=vs).

You need to configure the corresponding [Interactive render mode](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes?view=aspnetcore-8.0#render-modes) and [Interactivity location](https://learn.microsoft.com/en-us/aspnet/core/blazor/tooling?view=aspnetcore-8.0&pivots=vs) while creating the Blazor Web App.

### Install Document Editor Nuget packages

To add **Document Editor** component in the application, follow the steps below.
 - Open NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), 
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

### Install Document Editor Nuget packages

If you utilize `WebAssembly` or `Auto` render modes in the Blazor Web App, you need to install Document Editor NuGet packages within the client project.

* Press <kbd>Ctrl</kbd>+<kbd>`</kbd> to open the integrated terminal in Visual Studio Code.
* Ensure the terminal is in the project root directory (where the `.csproj` file is located).
* Run the following command to install 
    - [Syncfusion.Blazor.WordProcessor](https://www.nuget.org/packages/Syncfusion.Blazor.WordProcessor)
    - [Syncfusion.Blazor.Themes](https://www.nuget.org/packages/Syncfusion.Blazor.Themes/)

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

Add the following import statements to the **`~/_Imports.razor`** file:

{% tabs %}
{% highlight C# tabtitle="~/_Imports.razor" %}

@using Syncfusion.Blazor
@using Syncfusion.Blazor.DocumentEditor

{% endhighlight %}
{% endtabs %}

### Register Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor Services

Register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor service in the **`Program.cs`** file of your Blazor Web App.

{% tabs %}
{% highlight c# tabtitle="Program.cs" %}

// Other code Snippet

using Syncfusion.Blazor;

// Register Syncfusion Blazor services along with other service registrations
builder.Services.AddSyncfusionBlazor();

// Other code Snippet

{% endhighlight %}
{% endtabs %}

N> If the **Interactive Render Mode** is set to `WebAssembly` or `Auto`, register the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor service in **`Program.cs`** files of both the server and client projects in your Blazor Web App.

#### About Render Modes and Program.cs

When you use the `@rendermode` directive in a component (e.g., `@rendermode InteractiveAuto`), it overrides the global interactivity setting configured in `Program.cs`. 

- If you set `@rendermode InteractiveWebAssembly`, the component will render client-side using WebAssembly, even if your app is configured for server-side rendering.
- You must register Syncfusion services in **all** `Program.cs` files that correspond to your render modes (both server and client for Auto/WebAssembly modes).
- For Global interactivity (no `@rendermode` on components), configure the render mode once in `Program.cs` and it applies to all components.

### Licensing and Service Configuration

The Document Editor requires both a **valid Syncfusion license** and a **configured Document Editor service URL**.

#### Service URL Configuration

The Document Editor requires a backend service to handle document operations. You have two options:

| Environment | Service URL | Usage |
| --- | --- | --- |
| Development/Evaluation | `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` | Free cloud-hosted service for testing (evaluation only) |
| Production | Self-hosted service backend | Required for production applications |

To configure the service URL in your component, set the `ServiceUrl` property on `SfDocumentEditorContainer`:

```razor
<SfDocumentEditorContainer 
    ServiceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
    EnableToolbar=true 
    Height="590px">
</SfDocumentEditorContainer>
```

N> **Important**: The evaluation service URL has usage limits and is for development only. For production applications, you must [host your own Document Editor service backend](https://help.syncfusion.com/document-processing/word/word-processor/web-services/document-editor). Obtain a [Syncfusion license](https://www.syncfusion.com/products/licensing) to unlock production capabilities.

### Add Themes and Script References

The theme stylesheet and script can be accessed from NuGet through [Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets). 

Include the stylesheet reference in the `<head>` section of the **`~/Components/App.razor`** file as shown below:

{% tabs %}
{% highlight razor tabtitle="~/App.razor" %}

<!-- Add Syncfusion theme -->
<link href="_content/Syncfusion.Blazor.Themes/bootstrap5.css" rel="stylesheet" />

{% endhighlight %}
{% endtabs %}

Include the script reference at the end of the `<body>` section in the **`~/Components/App.razor`** file. In the default Blazor Web App template, add it just before the closing `</body>` tag or after the `<Routes>` component definition.

{% tabs %}
{% highlight razor tabtitle="~/App.razor" %}

<!-- Add the DOCX Editor script -->
<script src="_content/Syncfusion.Blazor.WordProcessor/scripts/syncfusion-blazor-documenteditor.min.js" type="text/javascript"></script>

{% endhighlight %}
{% endtabs %}

N> Check out the [Blazor Themes](https://blazor.syncfusion.com/documentation/appearance/themes) topic to discover various methods ([Static Web Assets](https://blazor.syncfusion.com/documentation/appearance/themes#static-web-assets), [CDN](https://blazor.syncfusion.com/documentation/appearance/themes#cdn-reference), and [CRG](https://blazor.syncfusion.com/documentation/common/custom-resource-generator)) for referencing themes in your Blazor application. Also, check out the [Adding Script Reference](https://blazor.syncfusion.com/documentation/common/adding-script-references) topic to learn different approaches for adding script references in your Blazor application.

### Add the Document Editor component

Add the Document Editor component to a new `.razor` file in the **`~/Components/Pages/`** folder (for example, `DocumentEditor.razor` or modify `Home.razor` if it exists in your project).

**Choose your render mode based on your interactivity location:**

N> If the interactivity location is set to **Global** in your Blazor Web App, you do not need to add a render mode directive. For detailed guidance, check out [Blazor Render Modes](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes?view=aspnetcore-8.0).

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@* desired render mode define here *@
@rendermode InteractiveAuto

@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer 
    @ref="documentEditor"
    ServiceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
    EnableToolbar=true 
    Height="590px">
</SfDocumentEditorContainer>

@code {
    private SfDocumentEditorContainer documentEditor;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && documentEditor != null)
        {
            // Load a sample document
            await documentEditor.OpenAsync(new byte[] { /* DOCX file bytes */ });
        }
    }
}

{% endhighlight %}
{% endtabs %}


### Run the application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application. This launches the application and displays the Document Editor in your default web browser. The output will appear as follows:

![Blazor DOCX Editor in Web app](../images/blazor-docx-editor.png)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/Blazor-Getting-Started-Examples/tree/main/DocumentEditor).

## Online Demo

Explore how to create, edit, and print Word documents using the Blazor Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/default-functionalities).

N> Looking for the full Blazor DOCX Editor component overview, features, pricing, and documentation? Visit the [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) page.

## See also

- [Getting started in Blazor WASM app](https://help.syncfusion.com/document-processing/word/word-processor/blazor/getting-started/client-side-application)
- [Open a document](https://help.syncfusion.com/document-processing/word/word-processor/blazor/opening-a-document)
- [Save a document](https://help.syncfusion.com/document-processing/word/word-processor/blazor/saving-document)


