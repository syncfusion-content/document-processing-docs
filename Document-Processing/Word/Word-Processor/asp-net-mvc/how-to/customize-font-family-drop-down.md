---
layout: post
title: How to Customize Font Family in ASP.NET MVC DOCX Editor | Syncfusion
description: Customize the font family drop down list in Syncfusion® ASP.NET MVC DOCX Editor by configuring available font families and controlling font selection options.
platform: document-processing
control: Customize Font Family Drop Down
documentation: ug
---


# How to Customize Font Family in ASP.NET MVC DOCX Editor

DOCX Editor provides options to customize the font family drop-down list values using `fontFamilies` in Document Editor settings. Fonts added in `fontFamilies` of `documentEditorSettings` will be displayed in the font drop-down list of the text properties pane and font dialog.

Similarly, you can use the `documentEditorSettings` property with the DocumentEditor control as well.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/font-family/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Font-family.cs" %}
{% endhighlight %}
{% endtabs %}

![Font](../images/font-family.png)