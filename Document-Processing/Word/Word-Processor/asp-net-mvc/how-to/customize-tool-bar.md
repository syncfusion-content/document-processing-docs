---
layout: post
title: Customize Tool Bar in ASP.NET MVC Document Editor Component | Syncfusion
description: Learn here all about how to customize Tool Bar in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize Tool Bar
documentation: ug
---


# Customize existing toolbar

## How to customize existing toolbar in DocumentEditorContainer

DocumentEditorContainer allows to customize (add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can be defined by `CustomToolbarItemModel` and with existing items in [`ToolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarItems) property. Newly added item click action can be defined in [`Toolbarclick`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarClick).
* Show, Hide - Existing items can be shown or hidden using the [`ToolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarItems) property. Pre-defined toolbar items are available with `ToolbarItem`.
* Enable, Disable - Toolbar items can be enabled or disabled using `enableItems`


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/custom-toolbar/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Custom-toolbar.cs" %}
{% endhighlight %}{% endtabs %}


N> Default value of `ToolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.