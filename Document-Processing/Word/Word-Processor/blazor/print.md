---
layout: post
title: Printing a Document in Blazor DocumentEditor | Syncfusion
description: Learn how to print a document and improve print quality in the Syncfusion Blazor DocumentEditor component.
platform: document-processing
control: DocumentEditor
documentation: ug
---

# Printing a Document in Blazor DocumentEditor

To print the document, use the [`PrintAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditor.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditor_PrintAsync) method from document editor instance.

Refer to the following example for print.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<button @onclick="OnPrint">Print</button>
<SfDocumentEditorContainer @ref="container" EnableToolbar=true></SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    protected async void OnPrint(object args)
    {
        await container.DocumentEditor.PrintAsync();
    }
}
```

## Improving print quality

Document editor provides an option to improve the print quality using [`PrintDevicePixelRatio`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.DocumentEditorSettingsModel.html#Syncfusion_Blazor_DocumentEditor_DocumentEditorSettingsModel_PrintDevicePixelRatio) in Document editor settings. Document editor using canvas approach to render content. Then, canvas are converted to image and it process for print. Using the PrintDevicePixelRatio API, the image quality can be increased based on specific requirements.

The following example code illustrates how to improve the print quality in Document editor container.

```csharp
<SfDocumentEditorContainer ID="cont" @ref="container" EnableToolbar="true" DocumentEditorSettings="settings" Height="590px">
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    DocumentEditorSettingsModel settings = new DocumentEditorSettingsModel() { PrintDevicePixelRatio = 2 };
}
```

N> By default, printDevicePixelRatio value is 1.