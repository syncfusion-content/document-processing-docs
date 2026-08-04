---
layout: post
title: Customize Font Family Drop Down in ASP.NET Core DOCX Editor Component | Syncfusion
description: Learn here all about how to customize the font family drop down in Syncfusion ASP.NET Core Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Document Editor
documentation: ug
---


# How to Customize the Font Family Dropdown in ASP.NET Core Document Editor

[ASP.NET Core Document Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) provides options to customize the font family dropdown list using `fontFamilies` in `DocumentEditorSettings`. Fonts that are added in `fontFamilies` of `documentEditorSettings` will be displayed on the font dropdown list of the Text Properties pane and the Font dialog.

Similarly, you can use the `documentEditorSettings` property for the Document Editor as well.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/font-family/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/font-family/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


![Font family dropdown customization](../images/font-family.png)