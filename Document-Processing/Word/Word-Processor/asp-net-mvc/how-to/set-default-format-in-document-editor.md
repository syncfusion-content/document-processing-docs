---
layout: post
title: Set the Default Format in Syncfusion ASP.NET MVC DOCX Editor Component
description: Learn here all about how to set the default character, paragraph, and section format in the Syncfusion ASP.NET MVC DOCX Editor component
platform: document-processing
control: Set Default Format in the Document Editor
documentation: ug
---


# Set Default Format in the ASP.NET MVC Document Editor Component

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

