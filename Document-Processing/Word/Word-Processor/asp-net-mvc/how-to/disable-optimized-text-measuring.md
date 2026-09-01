---
layout: post
title: Disable Optimized Measuring in ASP.NET MVC DOCX Editor | Syncfusion
description: Disable optimized text measuring in Syncfusion® ASP.NET MVC DOCX Editor to retain document pagination behavior and maintain layout consistency.
platform: document-processing
control: Disable Optimized Text Measuring
documentation: ug
---


# How to Disable Optimized Text Measuring in ASP.NET MVC DOCX Editor

Starting from v19.3.0.x, the accuracy of text size measurements in the DOCX Editor is improved to match Microsoft Word pagination for most Word documents. This improvement is included as the default behavior along with an optional API `enableOptimizedTextMeasuring` in the Document Editor settings.

If you want the DOCX Editor component to retain the document pagination (display page-by-page) behavior like v19.2.0.x and older versions, then you can disable this optimized text measuring improvement by setting the `enableOptimizedTextMeasuring` property to `false` in the `documentEditorSettings` of the DOCX Editor component.

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

