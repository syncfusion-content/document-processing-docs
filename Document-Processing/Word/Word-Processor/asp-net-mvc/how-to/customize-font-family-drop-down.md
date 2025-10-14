---
layout: post
title: Customize Font Family Drop Down in ASP.NET MVC Document Editor Component
description: Learn here all about how to customize font family drop down in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize Font Family Drop Down
documentation: ug
---


# How to customize the font family drop down in React Document Editor component

Document editor provides options to customize the font family drop down list values using `fontfamilies` in Document editor settings. Fonts which are added in `fontFamilies` of `documentEditorSettings` will be displayed on font drop down list of text properties pane and font dialog.

Similarly, you can use `documentEditorSettings` property for DocumentEditor also.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/font-family/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Font-family.cs" %}
{% endhighlight %}{% endtabs %}

![Font](../images/font-family.png)