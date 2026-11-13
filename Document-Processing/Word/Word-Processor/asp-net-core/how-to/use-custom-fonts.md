---
layout: post
title: How to Use Custom Fonts in ASP.NET Core DOCX Editor | Syncfusion
description: Register and use custom fonts in Syncfusion® ASP.NET Core DOCX Editor so documents render with fonts not installed on the user's machine.
platform: document-processing
control: Use custom fonts
documentation: ug
---

# How to Use Custom Fonts in ASP.NET Core DOCX Editor

The [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) supports custom fonts so that you can use fonts that are not installed on the user's machine. This is helpful when the document contains a specific font, such as a company-branded font, a regional language font, or any other font that is not available by default in the browser.

To use a custom font in the Document Editor, register the font using the `setCustomFonts` API and add the font family name to the `fontFamilies` collection in the `documentEditorSettings` property. The fonts added to the `fontFamilies` collection are displayed in the font family drop-down list and can be applied within the document.

The following example code illustrates how to register a custom font and add it to the font family drop-down list.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/use-custom-fonts/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/use-custom-fonts/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

