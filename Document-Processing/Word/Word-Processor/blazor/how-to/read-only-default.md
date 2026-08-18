---
layout: post
title: How to Open Blazor DOCX Editor in Read-Only Mode | Syncfusion
description: Open Syncfusion® Blazor DOCX Editor in read-only mode to prevent document modifications while allowing users to view content.
platform: document-processing
control: Document Editor
documentation: ug
---

# How to Open Blazor DOCX Editor in Read-Only Mode

In this article, we are going to see how to open a document in read-only mode by default in the [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) component.

The following code example illustrates how to open a document in read-only mode.

```csharp

@using Syncfusion.Blazor.DocumentEditor
@using System.IO
@using System.Net
@using System.Text.Json

<SfDocumentEditorContainer @ref="container" EnableToolbar="true" Height="590px">
    <DocumentEditorContainerEvents Created="OnLoad" DocumentChanged="OnDocumentChanged"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    string sfdtString;

    protected override void OnInitialized()
    {
        string fileUrl = "https://www.syncfusion.com/downloads/support/directtrac/general/doc/Getting_Started1018066633.docx";
        WebClient webClient = new WebClient();
        byte[] byteArray = webClient.DownloadData(fileUrl);
        Stream stream = new MemoryStream(byteArray);
        //To free memory, null out the reference of byteArray variable.
        byteArray = null;
        WordDocument document = WordDocument.Load(stream, ImportFormatType.Docx);
        stream.Dispose();
        //To free memory, null out the reference of stream variable.
        stream = null;
        sfdtString = JsonSerializer.Serialize(document);
        document.Dispose();
        //To free memory, null out the reference of document variable.
        document = null;
    }
    public void OnLoad(object args)
    {
        SfDocumentEditor editor = container.DocumentEditor;
        editor.OpenAsync(sfdtString);
        //To observe the memory go down, null out the reference of sfdtString variable.
        sfdtString = null;

    }
    public void OnDocumentChanged()
    {
        //Enable read-only mode inside the `documentChange` event.
        container.RestrictEditing = true;
    }
}
```
N> Use the [`RestrictEditing`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditorContainer.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditorContainer_RestrictEditing) property in the Document Editor Container or [`IsReadOnly`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditor.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditor_IsReadOnly) property in the Document Editor to change the component to read-only mode based on your requirement.