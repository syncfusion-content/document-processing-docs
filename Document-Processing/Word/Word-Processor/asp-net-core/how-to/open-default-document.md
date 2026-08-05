---
layout: post
title: Open Default Document in DOCX Editor | Syncfusion
description: Learn here all about how to open a default document in the Syncfusion DOCX Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Open Default Document
documentation: ug
---


# How to open default document in the Document Editor when initialized

This section explains how to open a default document when the Document Editor and Document Editor Container are initialized.

## Opening a default document in the Document Editor

Using the `open` method in the [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) allows you to open the document in SFDT format. To open the document by default, call the `open` method in the `created` event of the Document Editor, which is triggered once the control is created.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/open-default-document/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/open-default-document/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



## Opening a default document in the Document Editor Container

To open the document by default, call the `open` method in the `created` event of the Document Editor Container, which is triggered once the control is created.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/open-default-document/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/open-default-document/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


