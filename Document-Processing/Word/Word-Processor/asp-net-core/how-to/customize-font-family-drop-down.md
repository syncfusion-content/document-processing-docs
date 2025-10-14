---
layout: post
title: Customize FontFamily DropDown in Document Editor | Syncfusion
description: Learn here all about how to customize font family drop down in Syncfusion Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize Font Family Drop Down
documentation: ug
---


# How to customize the font family dropdown in Document Editor

Document editor provides options to customize the font family drop down list values using `fontFamilies` in Document editor settings. Fonts which are added in `fontFamilies` of `documentEditorSettings` will be displayed on font drop down list of text properties pane and font dialog.

Similarly, you can use `documentEditorSettings` property for DocumentEditor also.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/font-family/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/font-family/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


![Font](../images/font-family.png)