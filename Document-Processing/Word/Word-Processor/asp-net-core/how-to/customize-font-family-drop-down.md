---
layout: post
title: Customize FontFamily DropDown in DOCX Editor | Syncfusion
description: Learn here all about how to customize font family drop down in Syncfusion DOCX Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Customize Font Family Drop Down
documentation: ug
---


# How to customize the font family drop-down in ASP.NET Core DOCX Editor

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) provides options to customize the font family drop-down list values using `fontFamilies` in the DOCX Editor settings. The `fontFamilies` property accepts an array of font name strings; the default value is Syncfusion's built-in font list. Fonts added to `fontFamilies` in `documentEditorSettings` will be displayed in the font drop-down list of the text properties pane and the font dialog.

Similarly, you can use the `documentEditorSettings` property for the Document Editor also.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/font-family/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/font-family/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


The following screenshot shows the customized font family drop-down list:

![Font](../images/font-family.png)

Run the application to see the customized font family drop-down list in the DOCX Editor.