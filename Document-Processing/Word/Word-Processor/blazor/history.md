---
layout: post
title: Undo and redo in Blazor DocumentEditor Component | Syncfusion
description: Checkout and learn here all about Undo and redo in Syncfusion Blazor DocumentEditor component and more.
platform: document-processing
control: DocumentEditor
documentation: ug
---

# Undo and Redo in Blazor DocumentEditor Component

[Blazor Document Editor](https://www.syncfusion.com/blazor-components/blazor-word-processor) tracks the history of all editing actions done in the document, which allows undo and redo functionality.

## Enable or disable history

Inject the [`EditorHistory`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorHistoryModule.html) module into the application to enable history preservation functionality for the [`DocumentEditor`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditor.html). Refer to the following code example.

```cshtml
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" EnableToolbar=true>
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

History preservation for a Document Editor instance can be enabled or disabled at any time using the `EnableEditorHistory` property. Refer to the following sample code.

```csharp
documentEditor.EnableEditorHistory = true;
```

## Undo and redo

You can perform undo and redo by using `CTRL+Z` and `CTRL+Y` keyboard shortcuts. Document editor exposes API to do it programmatically.
To undo the last editing operation in document editor, refer to the following sample code.

```csharp
await container.DocumentEditor.EditorHistory.UndoAsync();
```

To redo the last undone action, refer to the following code example.

```csharp
await container.DocumentEditor.EditorHistory.RedoAsync();
```

## Stack size

History of editing actions will be maintained in stack, so that the last item will be reverted first. By default, document editor limits the size of undo and redo stacks to 500 each respectively. However, you can customize this limit. Refer to the following sample code.

```csharp
await container.DocumentEditor.EditorHistory.SetRedoLimitAsync(400);
```

You can also explore our [Blazor Word Processor](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/default-functionalities) example to know how to render and configure the document editor.
