---
layout: post
title: Undo and Redo in Blazor DOCX Editor Component | Syncfusion
description: Check out and learn all about Undo and Redo in Syncfusion Blazor Document Editor component and more.
platform: document-processing
control: Document Editor
documentation: ug
---

# Undo and Redo in Blazor Document Editor Component

The [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) automatically tracks the history of all editing actions performed in a document. This history allows users to reverse (undo) their recent actions or re-apply (redo) actions that were undone.

This functionality is enabled by default through the integrated `EditorHistoryModule`.

## Enable or disable history

Inject the [`EditorHistory`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorHistoryModule.html) module to enable history tracking for the [`Document Editor`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditor.html). Refer to the following code example.

```cshtml
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar="true">
    <DocumentEditorContainerEvents Created="OnLoad"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    protected void OnLoad(object args)
    {
        container.DocumentEditor.EnableEditorHistory = true;
    }
}
```

Enable or disable history preservation for a Document Editor instance at any time using the `EnableEditorHistory` property. Refer to the following sample code.

```csharp
documentEditor.EnableEditorHistory = true;
```

## Undo and redo

You can perform undo and redo by using `Ctrl+Z` and `Ctrl+Y` keyboard shortcuts. The Document Editor exposes APIs to do this programmatically.
To undo the last editing operation in the Document Editor, refer to the following sample code.

```csharp
await container.DocumentEditor.EditorHistory.UndoAsync();
```

To redo the last undone action, refer to the following code example.

```csharp
await container.DocumentEditor.EditorHistory.RedoAsync();
```

## Stack size

History of editing actions is maintained in a stack, so that the last item is reverted first. By default, the Document Editor limits the size of the undo and redo stacks to 500 each. However, you can customize this limit. Refer to the following sample code.

```csharp
await container.DocumentEditor.EditorHistory.SetRedoLimitAsync(400);
```

Explore the [Blazor Word Processor example](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/default-functionalities) to understand how to render and configure the Document Editor.
