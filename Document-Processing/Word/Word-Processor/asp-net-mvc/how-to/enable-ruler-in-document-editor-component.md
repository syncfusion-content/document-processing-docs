---
layout: post
title: How to enable ruler in ASP.NET MVC DOCX Editor Component | Syncfusion
description: Learn how to enable the ruler in the ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Enable Ruler
documentation: ug
---

# How to enable the ruler in the ASP.NET MVC Document Editor component

To enable the ruler, set the [`showRuler`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorSettings.html) property to `true` in the `documentEditorSettings` of the Document Editor component. By default, the ruler is disabled. The ruler can be used to set specific margins, tab stops, or indentations within a document to ensure consistent formatting.

## How to enable ruler in the Document Editor component

The following example illustrates how to enable the ruler in the Document Editor.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/ruler/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/ruler/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



## How to enable ruler in the Document Editor Container component

The following example illustrates how to enable the ruler in the Document Editor Container.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/ruler/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/ruler/document-editor.cs %}
{% endhighlight %}
{% endtabs %}