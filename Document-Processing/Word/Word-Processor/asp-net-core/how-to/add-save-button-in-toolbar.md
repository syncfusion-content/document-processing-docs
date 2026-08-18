---
layout: post
title: Add Save Button in Toolbar in ASP.NET Core DOCX Editor | Syncfusion
description: Add a custom save button to the toolbar in Syncfusion® ASP.NET Core DOCX Editor, customize toolbar items, and perform document save operations.
platform: document-processing
control: Add save button tool bar 
documentation: ug
---


# How to Add Save Button in Toolbar in ASP.NET Core DOCX Editor

## To add a save button to the existing toolbar in DocumentEditorContainer

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) Container allows you to add a new button to the existing items in a toolbar using [`CustomToolbarItemModel`] and with existing items in [`toolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarItems) property. Newly added item click action can be defined in [`toolbarClick`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarClick).


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/add-save-button-in-toolbar/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/add-save-button-in-toolbar/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


N> Default value of `ToolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.