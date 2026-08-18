---
layout: post
title: How to Open a Default Document in ASP.NET MVC DOCX Editor | Syncfusion
description: Open a default document in Syncfusion® ASP.NET MVC DOCX Editor during initialization to provide predefined content and streamline document editing workflows.
platform: document-processing
control: Open Default Document
documentation: ug
---


# How to Open a Default Document in ASP.NET MVC DOCX Editor

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

