---
layout: post
title: Customize Tool Bar in DOCX Editor Component | Syncfusion
description: Learn here all about how to customize Tool Bar in Syncfusion DOCX Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize Tool Bar
documentation: ug
---


# Customize existing toolbar in ASP.NET Core DOCX Editor

## How to customize existing toolbar in DocumentEditorContainer

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) Container allows you to customize (add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can be defined as objects conforming to `CustomToolbarItemModel` and added along with existing items in the [`ToolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarItems) property. Newly added item click action can be defined in [`ToolbarClick`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarClick).
* Show, Hide - Existing items can be shown or hidden using the [`ToolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarItems) property. Pre-defined toolbar items are available with `ToolbarItem`.
* Enable, Disable - Toolbar items can be enabled or disabled using the `enableItems`


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/custom-toolbar/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/custom-toolbar/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



N> Default value of `ToolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.

## Online Demo

Explore how to customize the toolbar in the ASP.NET Core DOCX Editor for working with Word documents in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/toolbarcustomization#/tailwind3).