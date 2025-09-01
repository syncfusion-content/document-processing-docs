---
layout: post
title: how to change the default search highlight color ##Platform_Name## Document Editor Component
description: Learn how to change the default search highlight color in Syncfusion ##Platform_Name## Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Change The Default Search Highlight Color
publishingplatform: ##Platform_Name##
documentation: ug
---

# How to change the default search highlight color in Document Editor component

Document editor provides an options to change the default search highlight color using [`searchHighlightColor`] in Document editor settings. The highlight color which is given in [`documentEditorSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_DocumentEditorSettings) will be highlighted on the searched text. By default, search highlight color is `yellow`.

Similarly, you can use [`documentEditorSettings`] property for DocumentEditor also.

The following example code illustrates how to change the default search highlight color.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/search-highlight-color/razor %}
{% endhighlight %}
{% highlight c# tabtitle="document-editor.cs" %}
{% endhighlight %}{% endtabs %}


Output will be like below:

![How to change the default search highlight color](../images/search-color.png)