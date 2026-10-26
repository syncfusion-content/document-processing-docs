---
layout: post
title: How to Customize Toolbar in ASP.NET MVC DOCX Editor | Syncfusion
description: Customize the toolbar in Syncfusion® ASP.NET MVC DOCX Editor by adding, removing, showing, hiding, enabling, and disabling toolbar items.
platform: document-processing
control: Customize Tool Bar
documentation: ug
---


# How to Customize Toolbar in ASP.NET MVC DOCX Editor

## How to customize existing toolbar in DocumentEditorContainer

DocumentEditorContainer allows you to customize (add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can be defined using `CustomToolbarItemModel` and added alongside existing items in the [`ToolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarItems) property. Newly added item click action can be defined in [`ToolbarClick`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarClick).
* Show, Hide - Existing items can be shown or hidden using the [`ToolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarItems) property. Pre-defined toolbar items are available with `ToolbarItem`.
* Enable, Disable - Toolbar items can be enabled or disabled using `enableItems`.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/custom-toolbar/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-toolbar.cs" %}
{% endhighlight %}
{% endtabs %}


N> Default value of `ToolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.

## Online Demo

Explore the live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/toolbarcustomization#/tailwind3) to see how to customize the toolbar in the ASP.NET MVC DOCX Editor.
