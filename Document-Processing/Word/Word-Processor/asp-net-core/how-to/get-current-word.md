---
layout: post
title: Get current Word/Para in Syncfusion DOCX Editor control | Syncfusion
description: Learn how to select and retrieve the current word and paragraph from the Syncfusion DOCX Editor component.
platform: document-processing
control: Get The Current Word And Paragraph
documentation: ug
---

# Get current word and paragraph in Document Editor component

You can get the current word or paragraph content from the [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) component as plain text and SFDT (rich text).

## Select and get the word in current cursor position

You can use the [`selectCurrentWord`] API in the selection module to select the current word at the cursor position and use the [`text`] API to get the selected content as plain text from the Document Editor component.

The following example code illustrates how to select and get the current word as plain text.



{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/get-word/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Get-word.cs" %}
{% endhighlight %}
{% endtabs %}


## Select and get the paragraph in current cursor position

You can use the [`selectParagraph`] API in the selection module to select the current paragraph at the cursor position and use the [`text`] API or the [`sfdt`] API to get the selected content as plain text or SFDT from the Document Editor component.

The following example code illustrates how to select and get the current paragraph as SFDT.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/get-paragraph/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Get-paragraph.cs" %}
{% endhighlight %}
{% endtabs %}
