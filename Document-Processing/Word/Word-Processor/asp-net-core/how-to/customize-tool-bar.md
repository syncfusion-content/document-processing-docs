---
layout: post
title: Customize Tool Bar in ASP.NET Core DOCX Editor Component | Syncfusion
description: Learn here all about how to customize the toolbar in Syncfusion ASP.NET Core Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Document Editor
documentation: ug
---


# Customize the Existing Toolbar in ASP.NET Core Document Editor Component

## How to Customize the Existing Toolbar in ASP.NET Core Document Editor Container

[ASP.NET Core Document Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) Container allows you to customize (add, show, hide, enable, and disable) existing items in a toolbar.

* **Add** - New items can be defined using `CustomToolbarItemModel` and combined with existing items in the [`ToolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarItems) property. The click action for a newly added item can be defined in [`ToolbarClick`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarClick).
* **Show, Hide** - Existing items can be shown or hidden using the [`ToolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarItems) property. Predefined toolbar items are available in `ToolbarItem`.
* **Enable, Disable** - Toolbar items can be enabled or disabled using the `enableItems` API.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/custom-toolbar/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/custom-toolbar/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



N> The default value of `ToolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.

## Online Demo

Explore how to customize the toolbar in the ASP.NET Core Document Editor for working with Word documents in this live [ASP.NET Core Toolbar Customization demo](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/toolbarcustomization#/tailwind3).