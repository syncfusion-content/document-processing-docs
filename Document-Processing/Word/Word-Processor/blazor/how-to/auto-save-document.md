---
layout: post
title: How to Auto Save Document in Blazor DOCX Editor | Syncfusion
description: Automatically save edited documents to the server at regular intervals in Syncfusion® Blazor DOCX Editor to prevent data loss.
platform: document-processing
control: Document Editor
documentation: ug
---
# How to Auto Save Document in Blazor DOCX Editor

In this article, you will learn how to automatically save the document to the server. You can save the edited content at regular intervals. This helps reduce the risk of data loss by saving an open document automatically at customized intervals.

The following example illustrates how to auto-save the document to the server.

* On the client side, use the content change event to save the edited content at regular intervals. Based on the `contentChanged` boolean, the document is sent as DOCX format to the server side using the [`SaveAsBlobAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditor.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditor_SaveAsBlobAsync_System_Nullable_Syncfusion_Blazor_DocumentEditor_FormatType__) method.

```cshtml
@using Syncfusion.Blazor.DocumentEditor
@using System.IO
@using System.Timers

<SfDocumentEditorContainer @ref="container" EnableToolbar="true">
<DocumentEditorContainerEvents ContentChanged="OnContentChange"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    private Timer autoSaveTimer;
    private bool isDocumentChanged = false;

    protected override void OnInitialized()
    {
        // Set up the timer to trigger the callback every 1 second (1000 milliseconds)
        autoSaveTimer = new Timer(AutoSaveDocument, null, 1000, 1000);
    }

    private void OnContentChange()
    {
        isDocumentChanged = true; // Mark the document as changed
    }

    private async void AutoSaveDocument(object state)
    {
        if (isDocumentChanged)
        {
            await OnSave();
            isDocumentChanged = false; // Reset the flag after saving
        }
    }

    public async Task OnSave()
    {
        SfDocumentEditor editor = container.DocumentEditor;
        string base64Data = await editor.SaveAsBlobAsync(FormatType.Docx);
        byte[] data = Convert.FromBase64String(base64Data);
        // To allow the garbage collector to reclaim memory, set the reference to null.
        base64Data = null;
        // Word document file stream
        Stream stream = new MemoryStream(data);
        // To allow the garbage collector to reclaim memory, set the reference to null.
        data = null;
        using (var fileStream = new FileStream(@"wwwroot/data/GettingStarted.docx", FileMode.Create, FileAccess.Write))
        {
            // Saving the new file in the root path of the application
            await stream.CopyToAsync(fileStream);
        }
        stream.Close();
        // To allow the garbage collector to reclaim memory, set the reference to null.
        stream = null;
    }

    public void Dispose()
    {
        autoSaveTimer?.Dispose(); // Dispose of the timer when the component is disposed
    }
}
```

## Online demo

Explore how to automatically save Word documents using the Blazor Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/default-functionalities).