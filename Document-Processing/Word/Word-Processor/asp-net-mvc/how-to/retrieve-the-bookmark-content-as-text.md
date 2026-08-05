---
layout: post
title: Retrieve Document and Bookmark Text in DOCX Editor | Syncfusion 
description: Learn how to retrieve the whole document and bookmark content as text from the Syncfusion ASP.NET MVC DOCX Editor Component
platform: document-processing
control: Retrieve the Whole Document and Bookmark Content as Text
documentation: ug
---

# How to retrieve document and bookmark text in the Document Editor

You can get the bookmark or whole document content from the Document Editor component as plain text and SFDT (rich text).

## Get the bookmark content as plain text

You can use the [`selectBookmark`] API to navigate to the bookmark and use the [`text`] API to get the bookmark content as plain text from the Document Editor component.

The following example code illustrates how to get the bookmark content as plain text.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/get-text/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Get-text.cs" %}
{% endhighlight %}
{% endtabs %}

To get the bookmark content as SFDT (rich text), check this [`link`](../how-to/get-the-selected-content#get-the-selected-content-as-sfdt-rich-text).

## Get the whole document content as text

You can use the [`text`] API to get the whole document content as plain text from the Document Editor component.

The following example code illustrates how to get the whole document content as plain text.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/get-text/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Get-text.cs" %}
{% endhighlight %}
{% endtabs %}

## Get the whole document content as SFDT (rich text)

You can use the [`serialize`] API to get the whole document content as SFDT string from the Document Editor component.

The following example code illustrates how to get the whole document content as SFDT.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/get-text/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Get-text.cs" %}
{% endhighlight %}{% endtabs %}

## Get the header content as text

You can use the [`goToHeader`] API to navigate the selection to the header and then use the [`text`] API to get the content as plain text.

The following example code illustrates how to get the header content as plain text.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/get-text/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Get-text.cs" %}
{% endhighlight %}
{% endtabs %}

Similarly, you can use the [`goToFooter`] API to navigate the selection to the footer and then use the [`text`] API to get the content as plain text.