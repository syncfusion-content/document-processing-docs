---
layout: post
title: Customize FontFamily DropDown in Document Editor | Syncfusion
description: Learn here all about how to customize font family drop down in Syncfusion Document Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-asp-core-mvc
control: Customize Font Family Drop Down
publishingplatform: ##Platform_Name##
documentation: ug
---


# How to customize the font family dropdown in Document Editor

Document editor provides options to customize the font family drop down list values using `fontfamilies` in Document editor settings. Fonts which are added in `fontFamilies` of `documentEditorSettings` will be displayed on font drop down list of text properties pane and font dialog.

Similarly, you can use `documentEditorSettings` property for DocumentEditor also.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/font-family/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Font-family.cs" %}
{% endhighlight %}{% endtabs %}


![Font](../images/font-family.png)