---
layout: post
title: Custom AI Service Integration with Syncfusion Smart PDF Viewer
description: Learn how to use IChatInferenceService to integrate custom AI services with Syncfusion Smart PDF Viewer
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---

# Custom AI Service Integration

## Overview

Syncfusion Smart PDF Viewer provides built-in support for OpenAI and Azure OpenAI services. It can also connect to other AI providers through the `IChatInferenceService` interface, which acts as a bridge between the viewer and a custom AI service.


## IChatInferenceService Interface

The `IChatInferenceService` interface defines a simple contract for AI service integration:

```csharp
public interface IChatInferenceService
{
    Task<string> GenerateResponseAsync(ChatParameters options);
}
```

This interface enables:
- Consistent communication between components and AI services.
- Easy switching between different AI providers.


## Implemented AI Services

The following examples demonstrate AI services integrated using the `IChatInferenceService` interface:

| Service | Documentation |
|---------|---------------|
| DeepSeek | [DeepSeek Integration](deepseek-service) |
| Gemini | [Gemini Integration](gemini-service) |
| Groq | [Groq Integration](groq-service) |


## Service Registration

Register the custom implementation in `Program.cs`:

```csharp
using Syncfusion.Blazor.AI;
builder.Services.AddSingleton<IChatInferenceService, YourCustomService>();
```

## Handling Error in Custom AI Service

Because a custom AI service operates independently of the built-in providers, error popups must be handled at the sample level. Capture errors with try-catch in the request/response flow, propagate the message to the Smart PDF Viewer component, and display it in a dialog to mirror the built-in behavior. For production scenarios, surface user-friendly messages while logging technical details.

### Capture Error in CustomService

Use try-catch to capture exceptions during request creation or response handling. Assign the message to the `DialogMessage` property and raise `OnDialogOpen` to notify listening components to render the dialog. Consider mapping low-level exceptions to localized, user-friendly text.

## Step 1: Create a ErrorDialog Service

1. Create a new class file named ErrorDialogService.cs in the project.
2. Add the following implementation:

```cs
public class ErrorDialogService 
{
    public event Action OnDialogOpen;

    public string DialogMessage { get; set; }

    internal void RaiseDialogOpen()
    {
        OnDialogOpen?.Invoke();
    }
}
```
## Step 2: Add the ErrorDialogService in MyCustomService class

{% tabs %}
{% highlight c# tabtitle="~/MyCustomService.cs" hl_lines="1 3 6 18 19 20" %}

 private readonly ErrorDialogService _errorDialogService;

 public MyCustomService(IChatClient client,ErrorDialogService errorDialogService)
 {
    // initialize your chat client instance
    this._errorDialogService = errorDialogService ?? throw new ArgumentNullException(nameof(errorDialogService));
 }

 public async Task<string> GenerateResponseAsync(ChatParameters options)
    {
        //Add completion request
        try
        {
            // Add the request logic for the Custom AI service.
        }
        catch (Exception ex)
        {
            _errorDialogService.DialogMessage = ex.Message; // Set the value
            _errorDialogService.RaiseDialogOpen();
            return "";
        }
    }

{% endhighlight %}
{% endtabs %}


### Step 3: Configure the Dialog Service

Configure services in `Program.cs` to enable error display when a request or response to the custom AI service fails. This setup ensures any errors encountered during communication can be surfaced via a dialog component.

{% tabs %}
{% highlight c# tabtitle="~/Program.cs" hl_lines="1 2 5 6" %}

builder.Services.AddScoped<ErrorDialogService>();
builder.Services.AddScoped<SfDialogService>();
builder.Services.AddScoped<IChatInferenceService, MyCustomService>(sp =>
{
    ErrorDialogService errorDialogService = sp.GetRequiredService<ErrorDialogService>();
    return new MyCustomService( "YourChatclient" ,errorDialogService );
});

{% endhighlight %}
{% endtabs %}

### step 4: Add the SfDialogProvider in the **~Pages/Home.razor** file.

{% tabs %}
{% highlight razor tabtitle="~/Home.razor" %}

@page "/"

<Syncfusion.Blazor.Popups.SfDialogProvider/>
@* Add Smart PDF Viewer Component *@

{% endhighlight %}
{% endtabs %}

### Step 5: Show the Error Dialog

In Smart PDF Viewer, error messages are displayed using `SfDialogService`. The component subscribes to `OnDialogOpen` from the custom service and, when triggered, `OpenDialog` computes a dialog size based on message length and shows it. The subscription is disposed when the component is no longer in use.

1. Create a new class file named Home.razor.cs by right-clicking the Pages folder, then selecting Add → Class.
2. Add the following implementation:

{% tabs %}
{% highlight cs tabtitle="~/Home.razor.cs" %}

using Microsoft.AspNetCore.Components;
using Syncfusion.Blazor.Popups;

public partial class Home : IDisposable
{
    [Inject]
    public ErrorDialogService? ErrorDialogService { get; set; }

    [Inject]
    public SfDialogService? DialogService { get; set; }

    private string? DialogText { get; set; }

    public async void OpenDialog()
    {
        DialogText = ErrorDialogService!.DialogMessage;
        int fontSize = 16; // px
        int charWidth = (int)(fontSize * 0.6); // Approximate width per character in px
        int baseWidth = 48; // Common addition to width
        int baseHeight = 140; // Additional height

        int textLength = DialogText?.Length ?? 0;
        int calculatedWidth = (textLength * charWidth) + baseWidth;
        int calculatedHeight = fontSize * 2 + baseHeight; // 2 lines minimum + base

        int minWidth = 400;
        int maxWidth = 500;

        string width = $"{Math.Clamp(calculatedWidth, minWidth, maxWidth)}px";
        string height = calculatedWidth > maxWidth ? $"{calculatedHeight + 19.2}px" : $"{calculatedHeight}px";

        await DialogService.AlertAsync(DialogText, "Custom service exception", new DialogOptions()
        {
            ShowCloseIcon = true,
            Width = width,
            Height = height
        });
    }

    protected override void OnInitialized()
    {
        ErrorDialogService!.OnDialogOpen += OpenDialog;
    }

    public void Dispose()
    {
        ErrorDialogService!.OnDialogOpen -= OpenDialog;
    }
}

{% endhighlight %}
{% endtabs %}

N> [View sample in GitHub](https://github.com/SyncfusionExamples/blazor-smart-pdf-viewer-examples/tree/master/Custom%20Services/GeminiService)

## See also

* [Gemini AI Service in Blazor Smart PDF Viewer](./gemini-service)
* [Groq AI Service in Blazor Smart PDF Viewer](./groq-service)