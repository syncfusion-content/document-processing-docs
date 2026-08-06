---
layout: post
title: Print in ASP.NET MVC DOCX Editor Control | Syncfusion
description: Learn here all about print in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Print
documentation: ug
---


# Print in Document Editor Control

To print the document, use the `print` method from the document editor instance.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/print-sfdt/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/print-sfdt/document-editor.cs %}
{% endhighlight %}
{% endtabs %}




{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/print/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/print/document-editor.cs %}
{% endhighlight %}
{% endtabs %}



N> To enable print for a document editor instance, set enablePrint as true.

## Improve print quality

Document editor provides an option to improve the print quality using `printDevicePixelRatio` in Document editor settings. Document editor uses a canvas approach to render content. Then, the canvas is converted to an image and it is processed for print. Using the printDevicePixelRatio API, you can increase the image quality based on your requirement.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/print/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Print.cs" %}
{% endhighlight %}
{% endtabs %}



N> By default, the printDevicePixelRatio value is 1.

## Print using window object

You can print the document in document editor by passing the window instance. This is useful to implement print in third-party frameworks such as Electron, where the window instance will not be available.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/print-window/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Print-window.cs" %}
{% endhighlight %}
{% endtabs %}



## Page setup

Some of the print options cannot be configured using JavaScript.

* [`Chrome`](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1)
* [`Firefox`](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox)

However, you can customize margins, paper, and layout options by modifying the section format properties using the page setup dialog.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/print-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Print-dialog.cs" %}
{% endhighlight %}
{% endtabs %}



By customizing margins, paper, and layouts, the layout of the document will be changed in the document editor. To modify these options during the print operation, serialize the document as SFDT using the `serialize` method in the document editor instance and open the SFDT data in another instance of the document editor in a separate window.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/print-doc/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/print-doc/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

## Online Demo

Explore how to print Word documents using the ASP.NET MVC Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/print#/tailwind3).

## See Also

* [Feature modules](./feature-module)
* [Page Setup dialog](./dialog#page-setup-dialog)
