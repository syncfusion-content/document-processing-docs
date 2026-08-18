---
layout: post
title: Scrolling and Zooming in ASP.NET Core DOCX Editor | Syncfusion
description: The scrolling and zooming in ASP.NET Core DOCX Editor enables smooth document navigation and adjustable zoom levels for better viewing.
platform: document-processing
control: Scrolling and Zooming
documentation: ug
---


# Scrolling and Zooming in ASP.NET Core DOCX Editor

The [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) renders the document page by page. You can scroll through the pages by mouse wheel or touch interactions. You can also scroll to a specific page by using the [`scrollToPage()`] method of the Document Editor instance.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/scrolling-page/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/scrolling-page/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


N> Calling this method brings the specified page into view but doesn’t move the selection. This method works even if selection is not enabled.

To move the selection to a specific page in the Document Editor and bring it into view, you can use the [`goToPage()`] method of the selection instance.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/scrolling-goto-page/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/scrolling-goto-page/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



## Zooming

You can scale the contents in the Document Editor from 10% to 500% of the actual size. You can achieve this using mouse or touch interactions. You can also use the [`zoomFactor`] property of the Document Editor instance. The value ranges from 0.1 to 5 (10% to 500%).


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/scrolling-zooming/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Scrolling-zooming.cs" %}
{% endhighlight %}
{% endtabs %}


## Page fit

Apart from specifying the zoom factor as a value, the Document Editor provides an option to specify page fit options such as fit to full page or fit to page width. You can set this option using the [`fitPage()`] method of the Document Editor instance.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/scrolling-page-fit/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Scrolling-page-fit.cs" %}
{% endhighlight %}
{% endtabs %}


## Zoom option using UI


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/scrolling-status-bar/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/scrolling-status-bar/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

