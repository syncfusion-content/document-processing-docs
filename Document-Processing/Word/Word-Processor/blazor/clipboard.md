---
layout: post
title: Clipboard in Blazor DocumentEditor Component | Syncfusion
description: Learn how to perform cut, copy, and paste clipboard operations in the Syncfusion Blazor Document Editor component, both programmatically and through the UI.
platform: document-processing
control: DocumentEditor
documentation: ug
---

# Clipboard in Blazor DocumentEditor Component

The [Blazor Word Processor](https://www.syncfusion.com/blazor-components/blazor-word-processor) (Document Editor) provides built-in support for clipboard operations, including cut, copy, and paste. These actions can be performed through the toolbar, context menus, standard keyboard shortcuts, or programmatically via the component's APIs.

## Local vs. System Clipboard

The Document Editor supports two clipboard modes to handle content transfer:

*   **Local Clipboard (Default)**: This is a built-in clipboard that is optimized for performance when cutting, copying, and pasting content **within** the editor itself. It is enabled by default.
*   **System Clipboard**: This is the operating system's standard clipboard, which allows for transferring content between the Document Editor and other applications.

To use the system clipboard, set the [`EnableLocalPaste`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SfDocumentEditor.html#Syncfusion_Blazor_DocumentEditor_SfDocumentEditor_EnableLocalPaste) property to `false`. When this property is false, all clipboard operations will use the system clipboard.

## Programmatic Clipboard Operations

You can programmatically invoke clipboard operations using the editor's API methods. The following example demonstrates how to call the `CutAsync`, `CopyAsync`, and `PasteAsync` methods.

```cshtml
@using Syncfusion.Blazor.DocumentEditor

<button @onclick="CopyClick">Copy</button>
<button @onclick="CutClick">Cut</button>
<button @onclick="PasteClick">Paste</button>

<SfDocumentEditorContainer @ref="container" EnableToolbar=true>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;

    protected async void CopyClick()
    {
        // Copies the selected content to the clipboard.
        await container.DocumentEditor.Selection.CopyAsync();
    }

    protected async void CutClick()
    {
        // Cuts the selected content and moves it to the clipboard.
        await container.DocumentEditor.Editor.CutAsync();
    }

    protected async void PasteClick()
    {
        // Pastes content from the clipboard to the current cursor position.
        // This will use the local or system clipboard based on the EnableLocalPaste property.
        await container.DocumentEditor.Editor.PasteAsync();
    }
}
```

### Copy

The [`CopyAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_CopyAsync) method copies the currently selected content in the editor to the clipboard.

### Cut

The [`CutAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_CutAsync) method removes the currently selected content from the editor and moves it to the clipboard.

### Paste

The [`PasteAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_PasteAsync) method inserts the content from the clipboard at the current cursor position. Its behavior depends on the `EnableLocalPaste` property:
*   If `true` (default), it pastes from the editor's local clipboard.
*   If `false`, it pastes from the system clipboard.

Explore the [Blazor Word Processor example](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/default-functionalities) to see how to render and configure the Document Editor.