---
layout: post
title: How to insert text or image in table programmatically in Document Editor Component
description: Learn how to insert text or image in table programmatically in Document Editor Component
platform: document-processing
control: Insert Text Or Image In Table
documentation: ug
---

# How to insert text or image in table programmatically in  Document Editor component

Using Document editor API's, you can insert [`text`] or [`image`] in [`table`] programmatically based on your requirement.

Use [`selection`] API's to navigate between rows and cells.

The following example illustrates how to create 2*2 table and then add text and image programmatically.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/insert-text-image-table/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Insert-text-image-table" %}
{% endhighlight %}{% endtabs %}


The output will be like below.
![Insert text or image in table programmatically](../images/table-image.png)
