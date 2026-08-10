---
layout: post
title: Move to selection position in Blazor DOCX Editor | Syncfusion
description: Learn how to move the selection to a specific position in the Syncfusion Blazor Document Editor component and much more.
platform: document-processing
control: Document Editor
documentation: ug
---

# Move selection to a specific position in Blazor Document Editor

The [`SelectAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_SelectAsync_System_String_System_String_) API in the selection module can be used to set the cursor position anywhere in the document.

## Select content based on start and end hierarchical index

The hierarchical index will be in the following format.

`sectionIndex;blockIndex;offset`

The following code snippet illustrates how to select using the hierarchical index.

```csharp
<button @onclick="SelectText">Select Text</button>
<SfDocumentEditorContainer @ref="container" EnableToolbar="true"  Height="590px" >
</SfDocumentEditorContainer>
@code {
    SfDocumentEditorContainer container;

    // It will select the specified position
    public async void SelectText()
    {
        // Selection will occur between the provided start and end offset
        await container.DocumentEditor.Editor.InsertTextAsync("Welcome");
        // The following code will select the letters "We" from the inserted text "Welcome"
        await container.DocumentEditor.Selection.SelectAsync("0;0;0", "0;0;2");
    }
}
```

The following table illustrates the hierarchical index in detail.

| Element | Hierarchical Format | Explanation |
|-----------------|-------------|----|
| Move selection to paragraph | sectionIndex;blockIndex;offset <br>**Ex:** 0;0;0 | It moves the cursor to the start of the paragraph. |
| Move selection to table | sectionIndex;tableIndex;rowIndex;cellIndex;blockIndex;offset <br>**Ex:** 0;0;0;0;1;0 | It moves the cursor to the second paragraph which is inside the first row and cell of the table. |
| Move selection to header | pageIndex;H;sectionIndex;blockIndex;offset<br>**Ex:** 1;H;0;0;0 | It moves the cursor to the header on the second page. |
| Move selection to footer | pageIndex;F;sectionIndex;blockIndex;offset<br>**Ex:** 1;F;0;0;0 | It moves the cursor to the footer on the second page. |

## Get the selection start and end hierarchical index

Using [`GetStartOffsetAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetStartOffsetAsync), you can get the start hierarchical index which denotes the start index of the current selection. Similarly, using [`GetEndOffsetAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.SelectionModule.html#Syncfusion_Blazor_DocumentEditor_SelectionModule_GetEndOffsetAsync), you can get the end hierarchical index which denotes the end index of the current selection.

The following code snippet illustrates how to get the selection start and end offset on selection changes in the document.

```csharp
<SfDocumentEditorContainer @ref="container" EnableToolbar="true"  Height="590px" SelectionChanged="selectionChange">
</SfDocumentEditorContainer>
@code {
    SfDocumentEditorContainer container;
    private string startOffset;
    private string endOffset;

    // Event gets triggered on selection change in the document
    public async void selectionChange()
    {
        // Get the start index of the current selection
        startOffset = await container.DocumentEditor.Selection.GetStartOffsetAsync();
        // Get the end index of the current selection
        endOffset = await container.DocumentEditor.Selection.GetEndOffsetAsync();
    }
}
```