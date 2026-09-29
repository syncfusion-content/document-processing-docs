---
layout: post
title: Print in Blazor DOCX Editor | Syncfusion
description: Print feature in Blazor DOCX Editor enables printing documents with page setup and quality settings for accurate document output.
platform: document-processing
control: DOCX Editor
documentation: ug
---

# Print in Blazor DOCX Editor

To print the document, use the [`PrintAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditor.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditor_PrintAsync) method on the DOCX Editor instance.

Refer to the following example to print a document.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<button @onclick="OnPrint">Print</button>
<SfDocumentEditorContainer @ref="container" EnableToolbar="true"></SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    protected async void OnPrint(object args)
    {
        await container.DocumentEditor.PrintAsync();
    }
}
```

## Improving print quality

The DOCX Editor provides an option to improve the print quality using [`PrintDevicePixelRatio`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.DocumentEditorSettingsModel.html#Syncfusion_Blazor_DocumentEditor_DocumentEditorSettingsModel_PrintDevicePixelRatio) in the Document Editor settings. The DOCX Editor uses a canvas approach to render content. Then, the canvas is converted to an image and processed for printing. Using the [`PrintDevicePixelRatio`] API, the image quality can be increased based on specific requirements.

The following example code illustrates how to improve the print quality in the Document Editor container.

```csharp
<SfDocumentEditorContainer ID="cont" @ref="container" EnableToolbar="true" [DocumentEditorSettings]="settings" Height="590px">
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    DocumentEditorSettingsModel settings = new DocumentEditorSettingsModel() { PrintDevicePixelRatio = 2 };
}
```

N> The default `PrintDevicePixelRatio` value is 1.