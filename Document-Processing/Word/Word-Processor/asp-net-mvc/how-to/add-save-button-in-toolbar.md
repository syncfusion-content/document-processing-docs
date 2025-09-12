---
layout: post
title: Add save button in ASP.NET MVC Document Editor Component | Syncfusion
description: Learn here to add save button in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Add save button tool bar 
documentation: ug
---


# Add save button in ASP.NET MVC Document editor toolbar

## To add a save button to the existing toolbar in DocumentEditorContainer

DocumentEditorContainer allows you to add a new button to the existing items in a toolbar using [`CustomToolbarItemModel`] and with existing items in [`toolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarItems) property. Newly added item click action can be defined in [`toolbarClick`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_ToolbarClick).


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/add-save-button-in-toolbar/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Add-save-button-in-toolbar.cs" %}
{% endhighlight %}{% endtabs %}



N> Default value of `ToolbarItems` is `['New', 'Open', 'Separator', 'Undo', 'Redo', 'Separator', 'Image', 'Table', 'Hyperlink', 'Bookmark', 'TableOfContents', 'Separator', 'Header', 'Footer', 'PageSetup', 'PageNumber', 'Break', 'InsertFootnote', 'InsertEndnote', 'Separator', 'Find', 'Separator', 'Comments', 'TrackChanges', 'Separator', 'LocalClipboard', 'RestrictEditing', 'Separator', 'FormFields', 'UpdateFields','ContentControl']`.