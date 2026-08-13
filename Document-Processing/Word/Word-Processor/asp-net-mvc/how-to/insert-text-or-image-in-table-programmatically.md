---
layout: post
title: Insert Text or Image in Table in ASP.NET MVC DOCX Editor | Syncfusion
description: Insert text, paragraphs, and rich text content at the current cursor position in Syncfusion® ASP.NET MVC DOCX Editor using document editing APIs.
platform: document-processing
control: Insert Text Or Image In Table
documentation: ug
---

# How to Insert Text or Image in Table in ASP.NET MVC DOCX Editor

Using Document editor API's, you can insert [`text`] or [`image`] in [`table`] programmatically based on your requirement.

Use [`selection`] API's to navigate between rows and cells.

The following example illustrates how to create 2*2 table and then add text and image programmatically.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/insert-text-image-table/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Insert-text-image-table" %}
{% endhighlight %}{% endtabs %}

The output will be like below.
![Insert text or image in table programmatically](../images/table-image.png)
