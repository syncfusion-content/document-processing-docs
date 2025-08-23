---
layout: post
title: Scrolling Zooming in ##Platform_Name## Document Editor Component
description: Learn here all about scrolling zooming in Syncfusion ##Platform_Name## Document Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-asp-core-mvc
control: Scrolling Zooming
publishingplatform: ##Platform_Name##
documentation: ug
---


# Scrolling

The Document editor renders the document page by page. You can scroll through the pages by mouse wheel or touch interactions. You can also scroll through the page by using ‘scrollToPage()’ method of document editor instance.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor/scrolling-page/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor/scrolling-page/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


N> Calling this method brings the specified page into view but doesn’t move selection. Hence this method will work by default. That is, it works even if selection is not enabled.

In case, if you wish to move the selection to any page in document editor and bring it into view, you can use ‘goToPage()’ method of selection instance.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor/scrolling-goto-page/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor/scrolling-goto-page/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



## Zooming

You can scale the contents in document editor ranging from 10% to 500% of the actual size. You can achieve this using mouse or touch interactions. You can also use ‘zoomFactor’ property of document editor instance. The value can be specified in a range from 0.1 to 5.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor/scrolling-zooming/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Scrolling-zooming.cs" %}
{% endhighlight %}{% endtabs %}


## Page Fit Type

Apart from specifying the zoom factor as value, the Document editor provides option to specify page fit options such as fit to full page or fit to page width. You can set this option using ‘fitPage’ method of document editor instance.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor/scrolling-page-fit/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Scrolling-page-fit.cs" %}
{% endhighlight %}{% endtabs %}


## Zoom option using UI


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor/scrolling-status-bar/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/document-editor/scrolling-status-bar/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

