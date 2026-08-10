---
layout: post
title: Scrolling and Zooming in ASP.NET MVC DOCX Editor | Syncfusion
description: Learn here all about scrolling and zooming in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Scrolling Zooming
documentation: ug
---


# Scrolling and Zooming

The Document Editor renders the document page by page. You can scroll through the pages by using the mouse wheel or touch interactions. You can also scroll to a specific page by using the `scrollToPage()` method of the Document Editor instance.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/scrolling-page/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/scrolling-page/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



N> Calling this method brings the specified page into view but does not move the selection. Hence, this method works by default; that is, it works even if the selection is not enabled.

To move the selection to a page and bring it into view, use the `goToPage()` method of the selection instance.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/scrolling-goto-page/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/scrolling-goto-page/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



## Zooming

You can scale the contents in the Document Editor, ranging from 10% to 500% of the actual size. You can achieve this using the mouse or touch interactions. You can also use the `zoomFactor` property of the Document Editor instance. The value can be specified in a range from 0.1 to 5.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/scrolling-zooming/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Scrolling-zooming.cs" %}
{% endhighlight %}
{% endtabs %}



## Page Fit Type

Apart from specifying the zoom factor as a value, the Document Editor provides an option to specify page fit options such as fit to full page or fit to page width. You can set this option using the `fitPage()` method of the Document Editor instance.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/scrolling-page-fit/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Scrolling-page-fit.cs" %}
{% endhighlight %}
{% endtabs %}



## Zoom option using UI


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/scrolling-status-bar/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/scrolling-status-bar/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

