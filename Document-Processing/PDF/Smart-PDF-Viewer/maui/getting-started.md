---
layout: post
title: Getting Started with .NET MAUI Smart PDF Viewer | Syncfusion
description: Learn how to get started with the Syncfusion .NET MAUI Smart PDF Viewer control, including package installation, AI service configuration, and loading your first PDF document.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
keywords: .net maui smart pdf viewer, maui smart pdf viewer getting started, ai pdf viewer maui, smart redaction maui, smart fill maui
---

# Getting Started with .NET MAUI Smart PDF Viewer

This section guides you through setting up and configuring the Smart PDF Viewer in your .NET MAUI application. Follow the steps below to add the Smart PDF Viewer to your project, configure the AI service, and load a PDF document.

{% tabcontents %}
{% tabcontent Visual Studio %}

## Prerequisites

Before proceeding, ensure the following are in place:

1.  Install [.NET 9 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/9.0) or later.
2.  Set up a .NET MAUI environment with Visual Studio 2022 (v17.3 or later).

## Step 1: Create a New MAUI Project

1.  Go to **File > New > Project** and choose the **.NET MAUI App** template.
2.  Name the project and choose a location, then click **Next**.
3.  Select the .NET Framework version and click **Create**.

## Step 2: Install the Syncfusion<sup>&reg;</sup> MAUI Smart PDF Viewer NuGet Package

1.  In **Solution Explorer**, right-click the project and choose **Manage NuGet Packages**.
2.  Search for [Syncfusion.Maui.SmartPdfViewer](https://www.nuget.org/packages/Syncfusion.Maui.SmartPdfViewer) and install the latest version.
3.  Ensure the dependencies ([Syncfusion.Maui.PdfViewer](https://www.nuget.org/packages/Syncfusion.Maui.PdfViewer), [Syncfusion.Maui.SmartComponents](https://www.nuget.org/packages/Syncfusion.Maui.SmartComponents), [Syncfusion.Maui.Core](https://www.nuget.org/packages/Syncfusion.Maui.Core)) are installed and the project is restored.

Alternatively, you can utilize the following package manager command to achieve the same.

{% tabs %}
{% highlight c# tabtitle="Package Manager" %}

Install-Package Syncfusion.Maui.SmartPdfViewer -Version {{ site.releaseversion }}

{% endhighlight %}
{% endtabs %}

## Step 3: Register the Syncfusion<sup>&reg;</sup> Core Handler

[Syncfusion.Maui.Core](https://www.nuget.org/packages/Syncfusion.Maui.Core/) is automatically installed as a dependency when the [Syncfusion.Maui.SmartPdfViewer](https://www.nuget.org/packages/Syncfusion.Maui.SmartPdfViewer) NuGet is installed.

1. Add the following namespace in your `MauiProgram.cs` file.
   {% tabs %}
   {% highlight c# tabtitle="MauiProgram.cs" %}
   using Syncfusion.Maui.Core.Hosting;
   {% endhighlight %}
   {% endtabs %}

2. Register the Syncfusion core handler in your `MauiProgram.cs` file to use Syncfusion controls.
   {% tabs %}
   {% highlight c# tabtitle="MauiProgram.cs" hl_lines="11" %}

   public static MauiApp CreateMauiApp()
   {
       var builder = MauiApp.CreateBuilder();
       builder
           .UseMauiApp<App>()
           .ConfigureFonts(fonts =>
           {
               fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
           });

       builder.ConfigureSyncfusionCore();
       return builder.Build();
   }

   {% endhighlight %}
   {% endtabs %}

## Step 4: Configure the AI Service

The AI-powered features of the Smart PDF Viewer (document summarization, smart redaction, and smart fill) require a chat client registered in the dependency injection container. This step is not required for basic PDF rendering.

N> You can refer to [Configure Chat Client](https://help.syncfusion.com/maui/common/configure-ai-service) for services like `Azure`, `OpenAI`, and `Ollama`. You can also refer to the [Custom AI Service](https://help.syncfusion.com/maui/common/custom-ai-service) section to configure your own services, such as `Claude`, `Gemini`, `DeepSeek`, `Groq`, etc. If you are using a custom AI service, there is no need to register `ConfigureSyncfusionAIServices()` in `MauiProgram`.

* Install the following NuGet packages to your project:

{% tabs %}
{% highlight c# tabtitle="Package Manager" %}

Install-Package Microsoft.Extensions.AI
Install-Package Microsoft.Extensions.AI.OpenAI
Install-Package Azure.AI.OpenAI

{% endhighlight %}
{% endtabs %}

* To configure the Azure OpenAI service, add the following settings to the `MauiProgram.cs` file.

{% tabs %}
{% highlight c# tabtitle="MauiProgram.cs" hl_lines="2 15 21" %}

using Azure.AI.OpenAI;
using Microsoft.Extensions.AI;
using Syncfusion.Maui.Core.Hosting;
using Syncfusion.Maui.SmartComponents.Hosting;
using System.ClientModel;

public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
        var builder = MauiApp.CreateBuilder();
        builder
            .UseMauiApp<App>()
            .ConfigureFonts(fonts =>
            {
                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
            });

        builder.ConfigureSyncfusionCore();

        // Azure OpenAI configuration values
        string azureOpenAIKey = "AZURE_OPENAI_KEY";
        string azureOpenAIEndpoint = "AZURE_OPENAI_ENDPOINT";
        string azureOpenAIModel = "AZURE_OPENAI_MODEL";
        AzureOpenAIClient azureOpenAIClient = new AzureOpenAIClient(
            new Uri(azureOpenAIEndpoint),
            new ApiKeyCredential(azureOpenAIKey));
        IChatClient azureOpenAIChatClient = azureOpenAIClient.GetChatClient(azureOpenAIModel).AsIChatClient();

        // Register the chat client used by the Smart PDF Viewer.
        builder.Services.AddChatClient(azureOpenAIChatClient);
        builder.ConfigureSyncfusionAIServices();

        return builder.Build();
    }
}

{% endhighlight %}
{% endtabs %}

Here,

* **azureOpenAIKey**: Azure OpenAI API key.
* **azureOpenAIEndpoint**: Azure OpenAI deployment endpoint URL.
* **azureOpenAIModel**: Azure OpenAI deployment name.

For **Azure OpenAI**, first [deploy an Azure OpenAI Service resource and model](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource), then the values for `azureOpenAIKey`, `azureOpenAIEndpoint`, and `azureOpenAIModel` will all be provided to you.

N> The chat client registered using `AddChatClient` is resolved by the Smart PDF Viewer through dependency injection. The same chat client can be shared across other AI-powered Smart Components in your application.

## Step 5: Add the Smart PDF Viewer

Open the `MainPage.xaml` file and follow the steps below.

1. Add the following namespace in your `MainPage.xaml` file.
   {% tabs %}
   {% highlight xaml tabtitle="MainPage.xaml" %}

   xmlns:syncfusion="clr-namespace:Syncfusion.Maui.SmartPdfViewer;assembly=Syncfusion.Maui.SmartPdfViewer"
   {% endhighlight %}
   {% endtabs %}

2. Add the [SfSmartPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.SmartPdfViewer.SfSmartPdfViewer.html) control.
   {% tabs %}
   {% highlight xaml tabtitle="MainPage.xaml" %}

   <syncfusion:SfSmartPdfViewer x:Name="pdfViewer" />
   {% endhighlight %}
   {% endtabs %}

## Step 6: Load a PDF Document

1.  From the solution explorer of the project, add a new folder to the project named `Assets` and add the PDF document you need to load into the PDF viewer. Here, a PDF document named `PDF_Succinctly.pdf` is used.
2.  In Visual Studio, right-click the added PDF document and set its `Build Action` as `Embedded Resource`.
3.  In this example, the PDF document is loaded using MVVM binding. Create a new C# file named `PdfViewerViewModel.cs` and add the following code snippet.

    {% tabs %}
    {% highlight c# tabtitle="PdfViewerViewModel.cs" %}

    using System.ComponentModel;
    using System.Reflection;

    public class PdfViewerViewModel : INotifyPropertyChanged
    {
        private Stream pdfDocumentStream;

        /// <summary>
        /// Occurs when a property value changes.
        /// </summary>
        public event PropertyChangedEventHandler? PropertyChanged;

        /// <summary>
        /// Gets or sets the stream of the currently loaded PDF document.
        /// </summary>
        public Stream PdfDocumentStream
        {
            get
            {
                return pdfDocumentStream;
            }
            set
            {
                pdfDocumentStream = value;
                OnPropertyChanged(nameof(PdfDocumentStream));
            }
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="PdfViewerViewModel"/> class.
        /// </summary>
        public PdfViewerViewModel()
        {
            // Load the embedded PDF document stream.
            // Replace 'SmartPdfViewerExample' with your project's default namespace in the resource path. Verify that the namespace matches your project name.
            pdfDocumentStream = typeof(App).GetTypeInfo().Assembly.GetManifestResourceStream("SmartPdfViewerExample.Assets.PDF_Succinctly.pdf");
        }

        /// <summary>
        /// Raises the <see cref="PropertyChanged"/> event for the specified property name.
        /// </summary>
        /// <param name="name">The name of the property that changed.</param>
        public void OnPropertyChanged(string name)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
        }
    }

    {% endhighlight %}
    {% endtabs %}

4.  Open the `MainPage.xaml` file again and add the namespace `SmartPdfViewerExample` and name it as `local`.
    {% tabs %}
    {% highlight xaml tabtitle="MainPage.xaml" %}

    xmlns:local="clr-namespace:SmartPdfViewerExample"
    {% endhighlight %}
    {% endtabs %}

5.  Set an instance of the `PdfViewerViewModel` class as the `BindingContext`. Bind the Smart PDF viewer's [DocumentSource](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_DocumentSource) to the `PdfDocumentStream` property of the `PdfViewerViewModel` class.
    {% tabs %}
    {% highlight xaml tabtitle="MainPage.xaml" %}

    <ContentPage.BindingContext>
        <local:PdfViewerViewModel x:Name="viewModel" />
    </ContentPage.BindingContext>

    <syncfusion:SfSmartPdfViewer x:Name="pdfViewer" DocumentSource="{Binding PdfDocumentStream}"/>

    {% endhighlight %}
    {% endtabs %}

N> * While changing or opening different documents on the same page, the previously loaded document will be unloaded automatically by the [SfSmartPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.SmartPdfViewer.SfSmartPdfViewer.html).
N> * If you are using multiple pages in your application, then make sure to unload the document from the [SfSmartPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.SmartPdfViewer.SfSmartPdfViewer.html) while leaving the page that has it to release the memory and resources consumed by the PDF document that is loaded. The unloading of documents can be done by calling the [UnloadDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_UnloadDocument) method.
N> * The [SfSmartPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.SmartPdfViewer.SfSmartPdfViewer.html) also implements `IDisposable`. Call the `Dispose` method when the viewer is no longer needed (for example, when leaving the page) to dispose the Smart PDF Viewer and its associated resources and dependencies, including the AI panels and settings event handlers. Calling `Dispose` more than once has no effect.

    {% tabs %}
    {% highlight c# tabtitle="MainPage.xaml.cs" %}

    protected override void OnDisappearing()
    {
        pdfViewer.Dispose();
        base.OnDisappearing();
    }

    {% endhighlight %}
    {% endtabs %}

## Step 7: Enable the AI-Powered Features

The Smart PDF Viewer exposes three settings classes to enable and configure the AI features. Add them in your `MainPage.xaml` file as needed.

### Document summarization

Use the [AssistViewSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.SmartPdfViewer.AssistViewSettings.html) class to configure the AI Assist panel used for document summarization and Q&A.

{% tabs %}
{% highlight xaml tabtitle="MainPage.xaml" %}

<syncfusion:SfSmartPdfViewer x:Name="pdfViewer" 
                             DocumentSource="{Binding PdfDocumentStream}"
                             IsAIAssistViewVisible="True">
    <syncfusion:SfSmartPdfViewer.AssistViewSettings>
        <syncfusion:AssistViewSettings Prompt="Summarize this document."
                                        Placeholder="Enter your query..."
                                        ShowPromptSuggestions="True" />
    </syncfusion:SfSmartPdfViewer.AssistViewSettings>
</syncfusion:SfSmartPdfViewer>

{% endhighlight %}
{% highlight c# tabtitle="MainPage.xaml.cs" %}

using Syncfusion.Maui.SmartPdfViewer;

SfSmartPdfViewer pdfViewer = new SfSmartPdfViewer
{
    IsAIAssistViewVisible = true,
    AssistViewSettings = new AssistViewSettings
    {
        Prompt = "Summarize this document.",
        Placeholder = "Enter your query...",
        ShowPromptSuggestions = true
    }
};

{% endhighlight %}
{% endtabs %}

Here,

* **IsAIAssistViewVisible**: Shows or hides the AI Assist View panel.
* **Prompt**: The prompt used to guide AI-generated responses.
* **Placeholder**: The placeholder text displayed in the Assist View input area.
* **ShowPromptSuggestions**: Shows or hides prompt suggestions in the Assist View panel.

### Smart redaction

Use the [SmartRedactSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.SmartPdfViewer.SmartRedactSettings.html) class to enable AI-assisted redaction of sensitive information.

{% tabs %}
{% highlight xaml tabtitle="MainPage.xaml" %}

<syncfusion:SfSmartPdfViewer x:Name="pdfViewer" 
                             DocumentSource="{Binding PdfDocumentStream}"
                             IsSmartRedactViewVisible="True">
    <syncfusion:SfSmartPdfViewer.SmartRedactSettings>
        <syncfusion:SmartRedactSettings IsEnabled="True">
            <x:Array Type="{x:Type x:String}">
                <x:String>Person Names</x:String>
                <x:String>Organization Names</x:String>
                <x:String>Email Addresses</x:String>
                <x:String>Phone Numbers</x:String>
                <x:String>Credit Card Numbers</x:String>
            </x:Array>
        </syncfusion:SmartRedactSettings>
    </syncfusion:SfSmartPdfViewer.SmartRedactSettings>
</syncfusion:SfSmartPdfViewer>

{% endhighlight %}
{% highlight c# tabtitle="MainPage.xaml.cs" %}

using Syncfusion.Maui.SmartPdfViewer;

SfSmartPdfViewer pdfViewer = new SfSmartPdfViewer
{
    IsSmartRedactViewVisible = true,
    SmartRedactSettings = new SmartRedactSettings
    {
        IsEnabled = true,
        RedactPatterns = new string[]
        {
            "Person Names",
            "Organization Names",
            "Email Addresses",
            "Phone Numbers",
            "Credit Card Numbers"
        }
    }
};

{% endhighlight %}
{% endtabs %}

Here,

* **IsSmartRedactViewVisible**: Shows or hides the Smart Redaction panel.
* **IsEnabled**: Enables or disables the Smart Redaction feature.
* **RedactPatterns**: The collection of patterns used to identify sensitive information, such as names, phone numbers, email addresses, identification numbers, and financial information. Custom patterns can be added to detect organization-specific confidential content.

### Smart fill

Use the [SmartFillSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.SmartPdfViewer.SmartFillSettings.html) class to enable AI-assisted form filling.

{% tabs %}
{% highlight xaml tabtitle="MainPage.xaml" %}

<syncfusion:SfSmartPdfViewer x:Name="pdfViewer" 
                             DocumentSource="{Binding PdfDocumentStream}">
    <syncfusion:SfSmartPdfViewer.SmartFillSettings>
        <syncfusion:SmartFillSettings IsEnabled="True" />
    </syncfusion:SfSmartPdfViewer.SmartFillSettings>
</syncfusion:SfSmartPdfViewer>

{% endhighlight %}
{% highlight c# tabtitle="MainPage.xaml.cs" %}

using Syncfusion.Maui.SmartPdfViewer;

SfSmartPdfViewer pdfViewer = new SfSmartPdfViewer
{
    SmartFillSettings = new SmartFillSettings
    {
        IsEnabled = true
    }
};

{% endhighlight %}
{% endtabs %}

Here,

* **IsEnabled**: Enables or disables the Smart Fill feature, which intelligently populates form fields based on context.

## Step 8: Register the Syncfusion license

Register your Syncfusion license key in the `MauiProgram.cs` file before using the Smart PDF Viewer. For more details, see [Licensing](https://help.syncfusion.com/maui/licensing/overview).

{% tabs %}
{% highlight c# tabtitle="MauiProgram.cs" %}

public static MauiApp CreateMauiApp()
{
    ...
    builder.ConfigureSyncfusionCore();
    Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
    return builder.Build();
}

{% endhighlight %}
{% endtabs %}

## Step 9: Running the Application

1.  Select the target framework, device, or emulator.
2.  Press `F5` to run the application.
3.  The PDF document will be loaded in the Smart PDF Viewer, and the AI-powered features can be accessed from the built-in toolbar and the AI Assist, Smart Redaction, and Smart Fill panels.

N> To run the AI features on **Android**, an additional semantic-search model setup (`model.onnx` and `vocab.txt`) may be required. Refer to the platform-specific notes in the [Smart Components documentation](https://help.syncfusion.com/maui/common/configure-ai-service) for details on copying the local embeddings model to the app data directory at startup.

{% endtabcontent %}
{% tabcontent JetBrains Rider %}

## Prerequisites

Before proceeding, ensure the following are set up:

1. Ensure you have the latest version of JetBrains Rider.
2. Install [.NET 9 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/9.0) or later.
3. Make sure the MAUI workloads are installed and configured as described [here](https://www.jetbrains.com/help/rider/MAUI.html#before-you-start).

## Step 1: Create a new .NET MAUI Project

1. Go to **File > New Solution,** Select .NET (C#) and choose the **.NET MAUI App** template.
2. Enter the Project Name, Solution Name, and Location.
3. Select the .NET framework version and click Create.

## Step 2: Install the Syncfusion<sup>&reg;</sup> MAUI Smart PDF Viewer NuGet Package

1. In **Solution Explorer,** right-click the project and choose **Manage NuGet Packages**.
2. Search for [Syncfusion.Maui.SmartPdfViewer](https://www.nuget.org/packages/Syncfusion.Maui.SmartPdfViewer) and install the latest version.
3. Ensure the necessary dependencies are installed correctly, and the project is restored. If not, open the Terminal in Rider and manually run: `dotnet restore`

Alternatively, you can utilize the following dotnet CLI command to achieve the same.

{% tabs %}
{% highlight c# tabtitle=".NET CLI" %}

dotnet add package Syncfusion.Maui.SmartPdfViewer

{% endhighlight %}
{% endtabs %}

## Step 3: Register the handler

The [Syncfusion.Maui.Core](https://www.nuget.org/packages/Syncfusion.Maui.Core/) NuGet is a dependent package for all Syncfusion<sup>&reg;</sup> controls of .NET MAUI. In the **MauiProgram.cs** file, register the handler for Syncfusion<sup>&reg;</sup> core.

{% tabs %}
{% highlight C# tabtitle="MauiProgram.cs" hl_lines="1 10" %}

using Syncfusion.Maui.Core.Hosting;
namespace GettingStarted
{
    public static class MauiProgram
    {
        public static MauiApp CreateMauiApp()
        {
            var builder = MauiApp.CreateBuilder();

            builder.ConfigureSyncfusionCore();
            builder
            .UseMauiApp<App>()
            .ConfigureFonts(fonts =>
            {
                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
            });

            return builder.Build();
        }
    }
}

{% endhighlight %}
{% endtabs %}

## Step 4: Configure the AI Service

To configure the AI services, you must register a chat client and call the `ConfigureSyncfusionAIServices()` method in the `MauiProgram.cs` file.

{% tabs %}
{% highlight c# tabtitle="MauiProgram.cs" hl_lines="6 26 27" %}

using Azure.AI.OpenAI;
using Microsoft.Extensions.AI;
using Syncfusion.Maui.Core.Hosting;
using Syncfusion.Maui.SmartComponents.Hosting;
using System.ClientModel;

namespace GettingStarted
{
    public class MauiProgram
    {
        public static MauiApp CreateMauiApp()
        {
            var builder = MauiApp.CreateBuilder();
            builder
                .UseMauiApp<App>()
                .ConfigureFonts(fonts =>
                {
                    fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                });

            string azureOpenAIKey = "AZURE_OPENAI_KEY";
            string azureOpenAIEndpoint = "AZURE_OPENAI_ENDPOINT";
            string azureOpenAIModel = "AZURE_OPENAI_MODEL";

            // Configure Azure AI service for the Smart PDF Viewer.
            AzureOpenAIClient azureOpenAIClient = new AzureOpenAIClient(new Uri(azureOpenAIEndpoint), new ApiKeyCredential(azureOpenAIKey));
            IChatClient azureOpenAIChatClient = azureOpenAIClient.GetChatClient(azureOpenAIModel).AsIChatClient();

            builder.Services.AddChatClient(azureOpenAIChatClient);
            builder.ConfigureSyncfusionAIServices();

            return builder.Build();
        }
    }
}
{% endhighlight %}
{% endtabs %}

N>
- You can refer to [Configure Chat Client](https://help.syncfusion.com/maui/common/configure-ai-service) for services like `Azure`, `OpenAI`, and `Ollama`.
- You can also refer to the [Custom AI Service](https://help.syncfusion.com/maui/common/custom-ai-service) section to configure your own services, such as `Claude`, `Gemini`, `DeepSeek`, `Groq`, etc.
- If you are using a custom AI service, there is no need to register `ConfigureSyncfusionAIServices()` in `MauiProgram`.

## Step 5: Add the Smart PDF Viewer control

1. To initialize the control, import the `Syncfusion.Maui.SmartPdfViewer` namespace into your code.
2. Initialize [SfSmartPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.SmartPdfViewer.SfSmartPdfViewer.html).

{% tabs %}
{% highlight xaml tabtitle="XAML" hl_lines="3 5" %}

<ContentPage   
    . . .
    xmlns:syncfusion="clr-namespace:Syncfusion.Maui.SmartPdfViewer;assembly=Syncfusion.Maui.SmartPdfViewer">

    <syncfusion:SfSmartPdfViewer />
</ContentPage>

{% endhighlight %}
{% highlight c# tabtitle="C#" hl_lines="1 9 10" %}

using Syncfusion.Maui.SmartPdfViewer;
. . .

public partial class MainPage : ContentPage
{
    public MainPage()
    {
        InitializeComponent();
        SfSmartPdfViewer pdfViewer = new SfSmartPdfViewer();
        this.Content = pdfViewer;
    }
}

{% endhighlight %}
{% endtabs %}

3. Bind the [DocumentSource](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_DocumentSource) property to load a PDF document from a stream, and enable the AI features as shown in the Visual Studio tab above ([Step 6](#step-6-load-a-pdf-document) and [Step 7](#step-7-enable-the-ai-powered-features)).

## Step 6: Running the Application

1. Select the target framework, device, or emulator.
2. Run the application. The PDF document will be loaded in the Smart PDF Viewer, and the AI-powered features can be accessed from the built-in toolbar and the AI Assist, Smart Redaction, and Smart Fill panels.

{% endtabcontent %}
{% endtabcontents %}

## See also

* [.NET MAUI Smart PDF Viewer Overview](./overview)
* [Document Summaries in .NET MAUI Smart PDF Viewer](./document-summarizer)
* [Smart Redaction in .NET MAUI Smart PDF Viewer](./smart-redaction)
* [Smart Fill in .NET MAUI Smart PDF Viewer](./smart-fill)
* [Localization in .NET MAUI Smart PDF Viewer](./localization)
* [.NET MAUI PDF Viewer Overview](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/overview)
* [Configure Chat Client with AI-Powered Components](https://help.syncfusion.com/maui/common/configure-ai-service)
* [Custom AI Service](https://help.syncfusion.com/maui/common/custom-ai-service)