---
layout: post
title: how to change the default search highlight color | Syncfusion
description: Learn how to change the default search highlight color in ASP.NET Core Syncfusion Document Editor component.
platform: document-processing
control: Change The Default Search Highlight Color
documentation: ug
---

# How to change the default search highlight color in Document Editor

Document editor provides an options to change the default search highlight color using [`searchHighlightColor`] in Document editor settings. The highlight color which is given in [`documentEditorSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_DocumentEditorSettings) will be highlighted on the searched text. By default, search highlight color is `yellow`.

Similarly, you can use [`documentEditorSettings`] property for DocumentEditor also.

The following example code illustrates how to change the default search highlight color.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/search-highlight-color/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/search-highlight-color/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


Output will be like below:

![How to change the default search highlight color](../images/search-color.png)