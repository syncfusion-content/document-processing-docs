---
layout: post
title: Insert Text or Image in Table in ASP.NET Core DOCX Editor | Syncfusion
description: Insert text, paragraphs, and rich text content at the current cursor position in Syncfusion® ASP.NET Core DOCX Editor using document editing APIs.
platform: document-processing
control: Insert Text Or Image In Table
documentation: ug
---

# How to Insert Text or Image in Table in ASP.NET Core DOCX Editor

Using the [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) APIs, you can insert [`text`] or [`image`] in a [`table`] programmatically based on your requirement.

Use the [`selection`] APIs to navigate between rows and cells.

The following example illustrates how to create a 2x2 table and then add text and an image programmatically.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/insert-text-image-table/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Insert-text-image-table" %}
{% endhighlight %}
{% endtabs %}


The output will be as shown below.

![Insert text or image in table programmatically](../images/table-image.png)
