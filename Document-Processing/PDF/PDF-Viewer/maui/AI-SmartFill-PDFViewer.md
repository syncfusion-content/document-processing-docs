---
layout: post
title: AI Smart PDF Form Filling .NET MAUI PDF Viewer control | Syncfusion
description: Learn here all about Integrating AI-powered smart pdf form Filling in Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control and its uses.
platform: MAUI
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# AI-Driven Smart PDF Form Filling in .NET MAUI PDF Viewer

This document provides a comprehensive guide to implementing smart PDF form filling functionality within the Syncfusion [.NET MAUI PDFViewer](https://www.syncfusion.com/maui-controls/maui-pdfviewer) control. By integrating Azure OpenAI, this solution enables an intelligent, AI-powered smart PDF form filling. 

## Integrating Azure OpenAI with the .NET MAUI app

First unlocking the power of AI to locate specific places effortlessly, ensure that you have access to [Azure OpenAI](https://azure.microsoft.com/en-in/products/ai-services/openai-service) and have set up a deployment in the Azure portal. You can find the [Azure.AI.OpenAI](https://www.nuget.org/packages/Azure.AI.OpenAI/1.0.0-beta.12) NuGet package in the [NuGet Gallery](https://www.nuget.org/) and install it in the project.

Once you get your key and endpoint, follow these steps:

### Step 1: Set up Azure OpenAI

To configure Azure OpenAI, we’ll use the GPT-4O model for text. Set up the `AzureOpenAIClient ` as shown in the following code example

```
internal class AzureOpenAIService
{
    const string endpoint = "https://{YOUR_END_POINT}.openai.azure.com";
    const string deploymentName = "GPT-4O";
    const string imageDeploymentName = "DALL-E";
    string key = "API key";
    IChatClient? client;

    internal AzureOpenAIService()
    {
        // Constructor logic if needed
    }
}

```

### Step 2: Connect to the Azure OpenAI

To set up the connection to Azure OpenAI. Refer the following code

```
IChatClient Client = new AzureOpenAIClient(new Uri("https://yourendpoint.com/"),new AzureKeyCredential("API_KEY")).AsChatClient(modelId: "DEPLOYMENT_NAME");

```

### Step 3: Get the result from the AI service

Implement the ` GetAnswerFromGPT ` methods to retrieve responses from the Azure OpenAI API based on user input.

```
public async Task GetAnswerFromGPT(string userPrompt)
{
    try
    {
        if (IsCredentialValid && Client != null)
        {
            ChatHistory = string.Empty;
            ChatHistory += userPrompt;
            var response = await Client.CompleteAsync(ChatHistory);
            return response.ToString();
        }
        else
        {
            return string.Empty;
        }
    }
    catch
    {
        // Return an empty string if an exception occurs
        return string.Empty;   
     }
}

```

The AIHelper class now offers a convenient way to interact with the Azure OpenAI API and retrieve completion results based on the provided prompt.

## Integrating AI-powered smart pdf form Filling in .NET MAUI PDFViewer

To design automatically fill PDF forms using the [.NET MAUI PDFViewer](https://www.syncfusion.com/maui-controls/maui-pdfviewer), you can use AI to generate XFDF (XML Forms Data Format) files containing the required form data. This process involves several steps, from exporting form data to AI for intelligent data mapping and finally importing the data back into the PDF form using the .NET MAUI PDF Viewer.

### Export form data from the PDF

First, [export the form data](https://help.syncfusion.com/maui/pdf-viewer/form-filling#export-form-data) from the PDF using the .NET MAUI PDF Viewer and convert to string. Refer the following code.

```
private string GetXFDFAsString()
{
    using (MemoryStream stream = new MemoryStream())
    {
        // Export form data in XFDF format to the stream
        PdfViewer.ExportFormData(stream, DataFormat.XFdf);
        // Reset the stream position to the beginning before reading
        stream.Position = 0;
        using (StreamReader reader = new StreamReader(stream))
        {
            return reader.ReadToEnd(); // Read and return the XFDF content as string
        }
    }
}

```

### Copy text to populate the form fields

Copy the required text information from any source to your clipboard. This text content should contain all the relevant information needed to populate the form fields.

The clipboard event triggers when clipboard data changes, and it only works on the Windows platform. Refer below code 

```
Clipboard.ClipboardContentChanged += Clipboard_ClipboardContentChanged;

private async void Clipboard_ClipboardContentChanged(object? sender, EventArgs e)
{
          string? copiedText = await Clipboard.GetTextAsync();
}

```

if we need to add text to copy clipboard using below code

```
Clipboard.SetTextAsync(“Form data in clipboard”);
```

### Generate XFDF content with AI

Now provide the exported form data and copied text to the AI, prompting it to generate XFDF content by intelligently mapping extracted values to form fields. Refer the following code.

```
using Microsoft.Extentions.AI;

public async Task<String> GenerateXFDFContent(string exportedFormData, string copiedTextContent, IChatClient client)
{
    // Create a prompt for the AI model.
    string prompt = $"Merge the copied text content into the XFDF file content. Hint text: {CustomValues}. " +
              $"Ensure the copied text content matches the appropriate field names. " +
              $"Here are the details: " +
              $"Copied text content: {copiedTextContent}, " +
              $"XFDF information: {exportedFormData}. " +
              $"Provide the resultant XFDF directly. " +
              $"Please follow these conditions: " +
              $"1. The input data is not directly provided as the field name; you need to think and merge appropriately. " +
              $"2. When comparing input data and field names, ignore case sensitivity. " +
              $"3. First, determine the best match for the field name. If there isn’t an exact match, use the input data to find a close match. " +
              $"4. Remove ```xml and ``` if they are present in the code.";
    // Get the AI response.
    string xfdfContent = await client.CompleteAsync(prompt);
    return xfdfContent;
}

```

### Convert XFDF content to file stream and import in the .NET MAUI PDF Viewer

Convert the generated XFDF content to an XFDF file stream. This file stream can then be used to fill the PDF form automatically by importing it using the PDF Viewer.

Refer to the following code.

```
string resultantXfdfFileStream = await _smartAI.GetAnswerFromGPT(mergePrompt);
var inputFileStream = new MemoryStream();
// Write the merged XFDF content to the MemoryStream
using (var writer = new StreamWriter(inputFileStream, leaveOpen: true))
{
    await writer.WriteAsync(resultantXfdfFileStream);
    await writer.FlushAsync();
}
// Reset stream position before importing
inputFileStream.Position = 0;
// Import the XFDF form data into the PDF Viewer
PdfViewer.ImportFormData(inputFileStream, DataFormat.XFdf, true);

```

By following these steps, you can create XFDF form contents with AI and automatically fill PDF forms using the .NET MAUI PDF Viewer.

### Desktop Smart PDF form fields

![Smart fill for desktop](Images/AISamples/Desktop_AISmartFill.gif)

### Mobile Smart Fill form fields

![Smart fill for mobile](Images/AISamples/Mobile_AISmartFill.gif)

