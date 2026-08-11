---
layout: post
title: Disable Optimized Text Measuring in Syncfusion DOCX Editor Component
description: Learn here all about disabling optimized text measuring in the Syncfusion Document Editor component and more.
platform: document-processing
control: Disable Optimized Text Measuring
documentation: ug
---


# Disable optimized text measuring in Document Editor

Starting from v19.3.0.x, the accuracy of text size measurements in the Document Editor is improved to match Microsoft Word pagination for most Word documents. This improvement is included as the default behavior along with an optional API `enableOptimizedTextMeasuring` in the Document Editor settings.

If you want the [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) component to retain the document pagination (display page-by-page) behavior like v19.2.0.x and older versions, then you can disable this optimized text measuring improvement by setting the `enableOptimizedTextMeasuring` property of the Document Editor component to `false`.

## Disable optimized text measuring in `DocumentEditorContainer` instance

The following example code illustrates how to disable the optimized text measuring improvement in the `DocumentEditorContainer` instance.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/optimized-text/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Optimized-text.cs" %}
{% endhighlight %}
{% endtabs %}



## Disable optimized text measuring in `DocumentEditor` instance

The following example code illustrates how to disable the optimized text measuring improvement in the `DocumentEditor` instance.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/optimized-text/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Optimized-text.cs" %}
{% endhighlight %}
{% endtabs %}

