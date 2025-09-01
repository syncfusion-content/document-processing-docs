---
layout: post
title: Handling Error Dialogs Triggered by Custom AI Service | Syncfusion
description: Learn how to manage error popups when integrating the Custom AI service with the Syncfusion Blazor SfSmartPdfViewer component.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---

# Handling Exceptions in Custom AI Service

## Overview

Since the Custom AI service operates independently from the built-in AI service, error popups must be handled at the sample level. To capture error details, use a try-catch block within the request and response logic of the Custom AI service. Once an error message is received, pass it to the Smart PDF Viewer component, where it should be displayed in a dialog—replicating the behavior of the default built-in error popup.

## Capture Error in CustomService

Exceptions that occur while creating a request to the custom AI service are captured using try-catch blocks. The resulting error message is assigned to the DialogMessage property, and the OnDialogOpen event is triggered to notify other components such as Home so they can display the error in a dialog appropriately.

```cs
public class GeminiService
{
    public event Action OnDialogOpen;

    public string DialogMessage { get; private set; }

    private void RaiseDialogOpen()
    {
        OnDialogOpen?.Invoke();
    }

    public async Task<string> CompleteAsync(IList<ChatMessage> chatMessages)
    {
        try
        {
            // Add the request logic for the Custom AI service.
        }
        catch (Exception ex)
        {
            DialogMessage = ex.Message; // Set the value
            RaiseDialogOpen();
            return "";
        }
    }
}
```

## Configure the Dialog Service

Configure the dialog service in `Program.cs` to enable error display functionality when a request or response to the Custom AI service fails. This setup ensures that any errors encountered during communication with the service can be shown in a dialog component.

```cs

builder.Services.AddScoped<SfDialogService>();

```

## Show the Error Dialog

In the Smart PDF Viewer, error messages are displayed using SfDialogService. The component listens for the OnDialogOpen event from CustomService, and when triggered, the OpenDialog method calculates the dialog size dynamically based on the length of the error message and presents it accordingly. To ensure efficient resource management, the event subscription is properly disposed of when the component is no longer in use.

```C#

public partial class Home : IDisposable
{
    [Inject]
    public GeminiService? GeminiService { get; set; }

    [Inject]
    public SfDialogService? DialogService { get; set; }

    private string? DialogText { get; set; }

    public async void OpenDialog()
    {
        DialogText = GeminiService!.DialogMessage;
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
        GeminiService!.OnDialogOpen += OpenDialog;
    }

    public void Dispose()
    {
        GeminiService!.OnDialogOpen -= OpenDialog;
    }
}

```

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-smart-pdf-viewer-examples/tree/master/Custom%20Services/GeminiService)