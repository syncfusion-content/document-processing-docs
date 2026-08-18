---
layout: post
title: How to Set Default Format in ASP.NET MVC DOCX Editor | Syncfusion
description: Set default character, paragraph, and section formatting in Syncfusion® ASP.NET MVC DOCX Editor for consistent document styling across documents.
platform: document-processing
control: Set Default Format in the Document Editor
documentation: ug
---


# How to Set Default Format in ASP.NET MVC DOCX Editor

You can set the default character format, paragraph format, and section format in the Document Editor.

## Set the default character format

You can use the `setDefaultCharacterFormat` method to set the default character format. For example, the default font size of the Document Editor is `11`, and you can change it to any valid value.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/character-format-font/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Character-format-font.cs" %}
{% endhighlight %}
{% endtabs %}



Similarly, you can change the required `CharacterFormatProperties` default values.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/character-format/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Character-format.cs" %}
{% endhighlight %}
{% endtabs %}



## Set the default paragraph format

You can use the `setDefaultParagraphFormat` API to set the default paragraph format. You can change the required `ParagraphFormatProperties` default values.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/paragraph-format/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Paragraph-format.cs" %}
{% endhighlight %}
{% endtabs %}



## Set the default section format

You can use the `setDefaultSectionFormat` API to set the default section format. You can change the required `SectionFormatProperties` default values.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/section-format/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Section-format.cs" %}
{% endhighlight %}
{% endtabs %}

