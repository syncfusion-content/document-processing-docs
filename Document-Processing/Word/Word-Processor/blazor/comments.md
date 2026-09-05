---
layout: post
title: Comments in Blazor DOCX Editor | Syncfusion
description: The comments feature in Blazor DOCX Editor enables users to add, review, navigate, reply to, and manage comments within documents.
platform: document-processing
control: DOCX Editor
documentation: ug
---

# Comments in Blazor DOCX Editor

The [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) provides comprehensive support for adding, navigating, and managing comments within a document. These features facilitate collaborative review and feedback cycles. Operations can be performed both through the built-in user interface and programmatically using APIs.

## Add a new comment

Use the [`InsertCommentAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_InsertCommentAsync_System_String_) method to insert a comment for the selected text.

```csharp
await container.DocumentEditor.Editor.InsertCommentAsync("Test comment");
```

## Comment navigation

Navigate to the next or previous comment using the following code snippet.

```csharp
//Navigate to next comment
await container.DocumentEditor.Selection.NavigateNextCommentAsync();

//Navigate to previous comment
await container.DocumentEditor.Selection.NavigatePreviousCommentAsync();
```

## Delete comment

You can delete the current comment in the document using the [`DeleteCommentAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_DeleteCommentAsync) method as shown in the following code snippet.

```csharp
await container.DocumentEditor.Editor.DeleteCommentAsync();
```

## Delete all comments

You can delete all the comments in the document using [`DeleteAllCommentsAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_DeleteAllCommentsAsync) method as shown in the following code snippet.

```csharp
await container.DocumentEditor.Editor.DeleteAllCommentsAsync();
```

## Highlight comments by author

When `HighlightCommentsByAuthor' is enabled, each comment marker and pane border is displayed in the author’s avatar color. 
Selecting a comment highlights the corresponding text in that color. If multiple comments appear on the same line, the marker retains the first author’s avatar color.

The following example illustrates how to enable comment highlights in the DOCX Editor


```csharp

@using Syncfusion.Blazor.DocumentEditor;

<SfDocumentEditorContainer @ref="container" EnableToolbar=true DocumentEditorSettings="settings"> 
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    DocumentEditorSettingsModel settings = new DocumentEditorSettingsModel() {  HighlightCommentsByAuthor : true };
}
```

## Protect the document in comments-only mode

The DOCX Editor supports a special protection mode that restricts user actions to adding or editing comments only. When `CommentsOnly` protection is active, users cannot change the document content.

The DOCX Editor provides APIs to protect and unprotect the document using [`EnforceProtectionAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_EnforceProtectionAsync_System_String_Syncfusion_Blazor_DocumentEditor_ProtectionType_) and [`StopProtectionAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_StopProtectionAsync_System_String_).

The following example code illustrates how to enforce and stop protection in the Document Editor container.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<button @onclick="protectDocument">Protection</button>
<SfDocumentEditorContainer @ref="container" EnableToolbar="true"></SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    protected async void protectDocument(object args)
    {
        //enforce protection
        await container.DocumentEditor.Editor.EnforceProtectionAsync("123", ProtectionType.CommentsOnly);
        //stop the document protection
        await container.DocumentEditor.Editor.StopProtectionAsync("123");
    }
}
```

Comment only protection can be enabled in UI by using `Restrict Editing pane`

![Enable comments-only protection](images/commentsonly.png)

N> In the `EnforceProtection` method, the first parameter is the password and the second parameter is the protection type. Possible values of protection type are `NoProtection | ReadOnly | FormFieldsOnly | CommentsOnly`. In the `StopProtection` method, the parameter is the password.

## Online demo

Explore how to add, view, and manage comments in Word documents using the Blazor DOCX Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/comments?theme=fluent2).
