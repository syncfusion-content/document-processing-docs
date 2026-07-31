---
layout: post
title: Get Selected Content in Syncfusion DOCX Editor Component | Syncfusion
description: Learn here all about getting the selected content in the Syncfusion DOCX Editor component of Essential JS 2 and more.
platform: document-processing
control: Get The Selected Content
documentation: ug
---


# How to get the selected content in DOCX Editor component

You can get the selected content from the [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) component as plain text and SFDT (rich text).

## Get the selected content as plain text

You can use the `text` API to get the selected content as plain text from the ASP.NET Core DOCX Editor component.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/get-text/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Get-text.cs" %}
{% endhighlight %}
{% endtabs %}


You can add the following custom options using this API:

* Save or export the selected text as a text file.
* Search the selected text in Google or other search engines.
* Show synonyms for the selected word in the context menu and replace with the selected synonym using the setter method of the same API.

## Get the selected content as SFDT (rich text)

You can use the `sfdt` API to get the selected content as rich text from the ASP.NET Core DOCX Editor component.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/get-sfdt/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Get-sfdt.cs" %}
{% endhighlight %}
{% endtabs %}


You can add the following custom options using this API:

* Save or export the selected content as an SFDT file.
* Get the content of a bookmark in a Word document as SFDT by selecting a bookmark using the `select bookmark` API.
* Create template content that can be inserted into multiple documents at the cursor position using the `paste` API.