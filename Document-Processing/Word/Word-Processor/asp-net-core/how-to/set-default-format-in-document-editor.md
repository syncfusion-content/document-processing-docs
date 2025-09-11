---
layout: post
title: Set Default Format In Document Editor in Document Editor Component
description: Learn here all about how to set default format in Document Editor in Syncfusion Document Editor component of syncfusion and more.
platform: document-processing
control: Set Default Format In Document Editor
documentation: ug
---


# How to set the default character, paragraph and section format in Document Editor component

You can set the default character format, paragraph format and section format in Document editor.

## Set the default character format

You can use `setDefaultCharacterFormat` method to set the default character format. For example, Document editor default font size is 11 and you can change it as any valid value.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/character-format-font/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Character-format-font.cs" %}
{% endhighlight %}{% endtabs %}


Similarly, you can change the required `CharacterFormatProperties` default value.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/character-format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Character-format.cs" %}
{% endhighlight %}{% endtabs %}


## Set the default paragraph format

You can use `setDefaultParagraphFormat` API to set the default paragraph format. You can change the required `ParagraphFormatProperties` default value.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/paragraph-format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Paragraph-format.cs" %}
{% endhighlight %}{% endtabs %}



## Set the default section format

You can use `setDefaultSectionFormat` API to set the default section format. You can change the required `SectionFormatProperties` default value.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/section-format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Section-format.cs" %}
{% endhighlight %}{% endtabs %}

