---
layout: post
title: How to Use Custom Fonts in ASP.NET MVC DOCX Editor | Syncfusion
description: Register and use custom fonts in Syncfusion® ASP.NET MVC DOCX Editor so documents render with fonts not installed on the user's machine.
platform: document-processing
control: Use custom fonts
documentation: ug
---


# How to Use Custom Fonts in ASP.NET MVC DOCX Editor

The [ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) (Document Editor) supports custom fonts so that you can use fonts that are not installed on the user's machine. This is helpful when the document contains a specific font, such as a company-branded font, a regional language font, or any other font that is not available by default in the browser.

To use a custom font in the Document Editor, register the font using the `setCustomFonts` API and add the font family name to the `fontFamilies` collection in the `documentEditorSettings` property. The fonts added to the `fontFamilies` collection are displayed in the font family drop-down list and can be applied within the document.

The following example code illustrates how to register a custom font and add it to the font family drop-down list.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/use-custom-fonts/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/use-custom-fonts/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
