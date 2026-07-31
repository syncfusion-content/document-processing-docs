---
layout: post
title: Track Changes in Blazor DOCX Editor Component | Syncfusion
description: Learn here all about Track Changes in Syncfusion Blazor Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Document Editor
documentation: ug
---

# Track Changes in Blazor Document Editor Component

Track Changes allows you to keep a record of changes or edits made to a document. You can then choose to accept or reject the modifications. It is a useful tool for managing changes made by several reviewers to the same document. If the track changes option is enabled, all editing operations are preserved as revisions in [Blazor Document Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor).

## Enable track changes in Document Editor

The following example demonstrates how to enable track changes.

```csharp
<SfDocumentEditorContainer ID="cont" @ref="container" EnableTrackChanges="true" EnableToolbar="true">
</SfDocumentEditorContainer>
```
N> Track changes are document level settings. When opening a document, if the document does not have track changes enabled, then `EnableTrackChanges` is reset to `false` even if we set `EnableTrackChanges="true"` in the initial rendering. If you want to enable track changes for all the documents, we recommend enabling track changes inside the `DocumentChanged` event. The following example demonstrates how to enable Track Changes for all the documents while opening.

```csharp
<SfDocumentEditorContainer @ref="container" Height="590px" EnableToolbar=true>
    <DocumentEditorContainerEvents  DocumentChanged="OnDocumentChange" >
    </DocumentEditorContainerEvents>
</SfDocumentEditorContainer>
 
@code { 
    SfDocumentEditorContainer container; 
     public void OnDocumentChange()
    {
        if(container != null){
            container.EnableTrackChanges = true;
        }
    }
};
```

## Show or Hide Revisions Pane

The Show or Hide Revisions Pane feature in the Document Editor allows users to toggle the visibility of the revisions pane, providing flexibility in managing tracked changes within the document.

The following example code illustrates how to show or hide the revisions pane.

```csharp
@using Syncfusion.Blazor.DocumentEditor
<SfDocumentEditorContainer @ref="container" EnableToolbar=true EnableTrackChanges=true>
    <DocumentEditorContainerEvents Created="OnLoad"></DocumentEditorContainerEvents>
</SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    public async void OnLoad(object args)
    {
        container.DocumentEditor.ShowRevisions=true; // To show revisions pane
        container.DocumentEditor.ShowRevisions=false; // To hide revisions pane
    }
}
```


## Navigate Between Tracked Changes

The following example demonstrates how to navigate tracked revisions programmatically.

```csharp
/**
 * Navigate to next tracked change from the current selection.
 */
await container.DocumentEditor.Selection.NavigateNextRevisionAsync();

/**
 * Navigate to previous tracked change from the current selection.
 */
await container.DocumentEditor.Selection.NavigatePreviousRevisionAsync();
```

## Filter Changes by User

In the Document Editor, we have a built-in review panel in which we have provided support for filtering changes based on the user.

![Track changes in Blazor Document Editor](images/track-changes.png)

## Add Custom Metadata with the Author

The Document Editor provides options to customize revisions using [`RevisionSettings`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.DocumentEditorSettingsModel.html#Syncfusion_Blazor_DocumentEditor_DocumentEditorSettingsModel_RevisionSettings). The `CustomData` property allows you to attach additional metadata to tracked revisions in the Word Processor. This metadata can represent roles, tags, or any custom identifier for the revision. To display this metadata along with the author name in the Track Changes pane, you must enable the `ShowCustomDataWithAuthor` property.

The following example code illustrates how to enable and update custom metadata for track changes revisions.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<SfDocumentEditorContainer @ref="container" Height="590px" DocumentEditorSettings="@settings" EnableTrackChanges="true"></SfDocumentEditorContainer> 

@code {
    SfDocumentEditorContainer container; 
    DocumentEditorSettingsModel settings = new DocumentEditorSettingsModel() 
    { RevisionSettings= { CustomData = "Developer", ShowCustomDataWithAuthor = true }};
}
```

The Track Changes pane will display the author name along with the custom metadata, as shown in the screenshot below.

![Custom metadata along with author](images/track-changes-customData.png)

N> When you export the document as SFDT, the customData value is stored in the revision collection. When you reopen the SFDT, the custom data is automatically restored and displayed in the Track Changes pane.

N> Other than SFDT export (e.g., DOCX and others), the customData is not preserved, as it is specific to the Document Editor component.

## Protect the Document in Track Changes Only Mode

Document Editor provides support for protecting the document with `RevisionsOnly` protection. In this protection, users can view the document and make their corrections, but they cannot accept or reject any tracked changes in the document. Later, the author can view their corrections and accept or reject the changes.

Document Editor provides an option to protect and unprotect the document using [`EnforceProtectionAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_EnforceProtectionAsync_System_String_Syncfusion_Blazor_DocumentEditor_ProtectionType_) and [`StopProtectionAsync`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DocumentEditor.EditorModule.html#Syncfusion_Blazor_DocumentEditor_EditorModule_StopProtectionAsync_System_String_) APIs.

The following example code illustrates how to enforce and stop protection in the Document Editor container.

```csharp
@using Syncfusion.Blazor.DocumentEditor

<button @onclick="protectDocument">Protection</button>
<SfDocumentEditorContainer @ref="container" EnableToolbar=true></SfDocumentEditorContainer>

@code {
    SfDocumentEditorContainer container;
    protected async void protectDocument(object args)
    {
        //enforce protection
        await container.DocumentEditor.Editor.EnforceProtectionAsync("123", ProtectionType.RevisionsOnly);
        //stop the document protection
        await container.DocumentEditor.Editor.StopProtectionAsync("123");
    }
}
```

Tracked changes only protection can be enabled in UI by using [Restrict Editing pane](./restrict-editing)

![Enable track changes only protection](images/tracked-changes.png)

N> In enforce Protection method, first parameter denotes password and second parameter denotes protection type. Possible values of protection type are `NoProtection |ReadOnly |FormFieldsOnly |CommentsOnly |RevisionsOnly`. In stop protection method, parameter denotes the password.

## Online Demo

Explore how to track and review changes in Word documents using the Blazor Document Editor in this live [Blazor Track Changes demo](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/track-changes?theme=fluent2).
