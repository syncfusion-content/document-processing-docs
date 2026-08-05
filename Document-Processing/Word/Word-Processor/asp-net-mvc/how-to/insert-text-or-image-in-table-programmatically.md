---
layout: post
title: Insert text or images into tables in DOCX Editor | Syncfusion
description: Learn how to insert text or image in a table programmatically in the ASP.NET MVC DOCX Editor Component
platform: document-processing
control: Insert Text Or Image In Table
documentation: ug
---

# How to add text or images to tables programmatically in Document Editor

Using the [ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) (Document Editor) APIs, you can insert [`text`] or [`image`] in a [`table`] programmatically based on your requirement.

Use [`selection`] APIs to navigate between rows and cells.

The following example illustrates how to create a 2*2 table and then add text and image programmatically.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/insert-text-image-table/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Insert-text-image-table" %}
{% endhighlight %}
{% endtabs %}

The output will be as follows.
![Insert text or image in table programmatically](../images/table-image.png)
