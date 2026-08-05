---
layout: post
title: Optimized Text Measuring in ASP.NET MVC DOCX Editor | Syncfusion
description: Learn here all about how to disable optimized text measuring in the Syncfusion ASP.NET MVC Document Editor component and more.
platform: document-processing
control: Disable Optimized Text Measuring
documentation: ug
---


# How to disable optimized text measuring in Document Editor component

Starting from v19.3.0.x, the accuracy of text size measurements in the Document Editor is improved to match Microsoft Word pagination for most Word documents. This improvement is included as the default behavior along with an optional API `enableOptimizedTextMeasuring` in the Document Editor settings.

If you want the Document Editor component to retain the document pagination (display page-by-page) behavior like v19.2.0.x and older versions, then you can disable this optimized text measuring improvement by setting the `enableOptimizedTextMeasuring` property to `false` in the `documentEditorSettings` of the Document Editor component.

## Disable optimized text measuring in `DocumentEditorContainer` instance

The following example code illustrates how to disable optimized text measuring in the `DocumentEditorContainer` instance.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/optimized-text/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Optimized-text.cs" %}
{% endhighlight %}
{% endtabs %}



## Disable optimized text measuring in `DocumentEditor` instance

The following example code illustrates how to disable optimized text measuring in the `DocumentEditor` instance.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/optimized-text/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Optimized-text.cs" %}
{% endhighlight %}
{% endtabs %}

