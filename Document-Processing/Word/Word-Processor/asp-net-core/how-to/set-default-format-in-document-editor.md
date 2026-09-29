---
layout: post
title: How to Set Default Format in ASP.NET Core DOCX Editor | Syncfusion
description: Set default character, paragraph, and section formatting in Syncfusion® ASP.NET Core DOCX Editor for consistent document styling across documents.
platform: document-processing
control: Set Default Format In DOCX Editor
documentation: ug
---


# How to Set Default Format in ASP.NET Core DOCX Editor

You can set the default character format, paragraph format and section format in [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor).

## Set the default character format

You can use the `setDefaultCharacterFormat` method to set the default character format. For example, the DOCX Editor default font size is 11 and you can change it to any valid value.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/character-format-font/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Character-format-font.cs" %}
{% endhighlight %}
{% endtabs %}


Similarly, you can change the required `CharacterFormatProperties` default value.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/character-format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Character-format.cs" %}
{% endhighlight %}
{% endtabs %}


## Set the default paragraph format

You can use the `setDefaultParagraphFormat` API to set the default paragraph format. You can change the required `ParagraphFormatProperties` default value.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/paragraph-format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Paragraph-format.cs" %}
{% endhighlight %}
{% endtabs %}



## Set the default section format

You can use the `setDefaultSectionFormat` API to set the default section format. You can change the required `SectionFormatProperties` default value.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/section-format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Section-format.cs" %}
{% endhighlight %}
{% endtabs %}

