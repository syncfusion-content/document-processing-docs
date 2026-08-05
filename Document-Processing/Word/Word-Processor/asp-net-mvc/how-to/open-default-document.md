---
layout: post
title: Open Default Document in ASP.NET MVC DOCX Editor | Syncfusion
description: Learn here all about how to open a default document in the Syncfusion ASP.NET MVC DOCX Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Open Default Document
documentation: ug
---


# How to Open a Default Document When Initializing DocumentEditor

This article explains how to open a default document when DocumentEditor and DocumentEditorContainer are initialized.

## Opening a default document in DocumentEditor

Using the `open` method in Document Editor allows you to open the document in SFDT format. To open the document by default, call the open method in the `created` event of the Document Editor, which gets triggered once the control is created.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/open-default-document/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/open-default-document/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



## Opening a default document in DocumentEditorContainer

To open the document by default, call the open method in the `created` event of the Document Editor container, which gets triggered once the control is created.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/open-default-document/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/open-default-document/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

