---
layout: post
title: Get Selected Content in ASP.NET MVC Document Editor Component | Syncfusion
description: Learn here all about get the selected content in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Get The Selected Content
documentation: ug
---


# How to get the selected content in Document Editor component

You can get the selected content from the React Document Editor component as plain text and SFDT (rich text).

## Get the selected content as plain text

You can use `text` API to get the selected content as plain text from React Document Editor component.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/get-text/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Get-text.cs" %}
{% endhighlight %}
{% endtabs %}


You can add the following custom options using this API,

* Save or export the selected text as text file.
* Search the selected text in Google or other search engines.
* Show synonyms for the selected word in context menu and replace with selected synonym using the setter method of same API.

## Get the selected content as SFDT (rich text)

You can use `sfdt` API to get the selected content as rich text from React Document Editor component.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/get-sfdt/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Get-sfdt.cs" %}
{% endhighlight %}
{% endtabs %}



You can add the following custom options using this API,

* Save or export the selected content as SFDT file.
* Get the content of a bookmark in Word document as SFDT by selecting a bookmark using `select bookmark` API.
* Create template content that can be inserted to multiple documents in cursor position using `paste` API.