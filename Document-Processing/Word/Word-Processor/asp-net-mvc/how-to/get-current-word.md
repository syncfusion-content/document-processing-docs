---
layout: post
title: Get current Word/Para in ASP.NET MVC DOCX Editor | Syncfusion
description: Learn how to select and retrieve current word and Paragraph from the Syncfusion ASP.NET MVC DOCX Editor Component
platform: document-processing
control: Get The Current Word And Paragrapgh
documentation: ug 
---

# Select and Retrieve Word and Paragraph at Cursor in DOCX Editor

You can get the current word or paragraph content from the DOCX Editor component as plain text and SFDT (rich text).

## Select and get the word in current cursor position

You can use [`selectCurrentWord`] API in selection module to select the current word at cursor position and use [`text`] API to get the selected content as plain text from DOCX Editor component.

The following example code illustrates how to select and get the current word as plain text.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/get-word/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Get-word.cs" %}
{% endhighlight %}
{% endtabs %}

## Select and get the paragraph in current cursor position

You can use [`selectParagraph`] API in selection module to select the current paragraph at cursor position and use [`text`] API or [`sfdt`] API to get the selected content as plain text or SFDT from DOCX Editor component.

The following example code illustrates how to select and get the current paragraph as SFDT.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/get-paragraph/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Get-paragraph.cs" %}
{% endhighlight %}
{% endtabs %}