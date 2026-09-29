---
layout: post
title: How to Customize Font Family in ASP.NET Core DOCX Editor | Syncfusion
description: Customize the font family drop down list in Syncfusion® ASP.NET Core DOCX Editor by configuring available font families and controlling font selection options.
platform: document-processing
control: DOCX Editor
documentation: ug
---


# How to Customize Font Family in ASP.NET Core DOCX Editor

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) provides options to customize the font family dropdown list using `fontFamilies` in `DocumentEditorSettings`. Fonts that are added in `fontFamilies` of `documentEditorSettings` will be displayed on the font dropdown list of the Text Properties pane and the Font dialog.

Similarly, you can use the `documentEditorSettings` property for the DOCX Editor as well.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/font-family/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/font-family/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


![Font family dropdown customization](../images/font-family.png)