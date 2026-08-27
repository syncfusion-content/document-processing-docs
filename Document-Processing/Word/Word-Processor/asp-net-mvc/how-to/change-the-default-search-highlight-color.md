---
layout: post
title: Change Search Highlight Color in ASP.NET MVC DOCX Editor | Syncfusion
description: Change the default search highlight color in Syncfusion® ASP.NET MVC DOCX Editor using search highlight color property to customize search result highlighting.
platform: document-processing
control: Change The Default Search Highlight Color
documentation: ug
---

# How to Change Search Highlight Color in ASP.NET MVC DOCX Editor

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