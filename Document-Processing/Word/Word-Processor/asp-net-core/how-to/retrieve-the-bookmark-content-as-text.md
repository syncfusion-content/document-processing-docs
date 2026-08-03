---
layout: post
title: Retrieve the document and bookmark content as text in DOCX Editor
description: Learn how to retrieve the whole document and bookmark content as text from the Syncfusion DOCX Editor Component
platform: document-processing
control: Retrieve The Whole Document And Bookmark Content As Text
documentation: ug
---

# How to retrieve the whole document and bookmark text in DOCX Editor

You can get the bookmark or whole document content from the [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) component as plain text and SFDT (rich text).

## Get the bookmark content as plain text

You can use the [`selectBookmark`] API to navigate to the bookmark and use the [`text`] API to get the bookmark content as plain text from the Document Editor component.

The following example code illustrates how to get the bookmark content as plain text.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/get-text/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Get-text.cs" %}
{% endhighlight %}
{% endtabs %}


To get the bookmark content as SFDT (rich text), check this [`link`](../../asp-net-core/how-to/get-the-selected-content#get-the-selected-content-as-sfdt-rich-text).

## Get the whole document content as text

You can use the [`text`] API to get the whole document content as plain text from the Document Editor component.

The following example code illustrates how to get the whole document content as plain text.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/get-text/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Get-text.cs" %}
{% endhighlight %}
{% endtabs %}


## Get the whole document content as SFDT (rich text)

You can use the [`serialize`] API to get the whole document content as an SFDT string from the Document Editor component.

The following example code illustrates how to get the whole document content as SFDT.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/get-text/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Get-text.cs" %}
{% endhighlight %}
{% endtabs %}


## Get the header content as text

You can use the [`goToHeader`] API to navigate the selection to the header and then use the [`text`] API to get the content as plain text.

The following example code illustrates how to get the header content as plain text.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/get-text/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Get-text.cs" %}
{% endhighlight %}
{% endtabs %}


Similarly, you can use the [`goToFooter`] API to navigate the selection to the footer and then use the [`text`] API to get the content as plain text.