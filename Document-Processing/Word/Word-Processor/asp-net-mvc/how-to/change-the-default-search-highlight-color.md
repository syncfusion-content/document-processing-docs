---
layout: post
title: How to change the search highlight color in DOCX Editor | Syncfusion
description: Learn how to change the default search highlight color in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Change The Default Search Highlight Color
documentation: ug
---

# How to change search highlight color in ASP.NET MVC Document Editor

Document Editor provides an option to change the default search highlight color using `searchHighlightColor` in Document Editor settings. The highlight color specified in [`documentEditorSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_DocumentEditorSettings) is applied to the searched text. By default, the search highlight color is `yellow`.

Similarly, you can use the `documentEditorSettings` property with the DocumentEditor control as well.

The following example code illustrates how to change the default search highlight color.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/search-highlight-color/razor %}
{% endhighlight %}
{% highlight c# tabtitle="document-editor.cs" %}
{% endhighlight %}
{% endtabs %}


Output will be like below:

![How to change the default search highlight color](../images/search-color.png)