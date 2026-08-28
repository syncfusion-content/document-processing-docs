---
layout: post
title: Print in ASP.NET MVC DOCX Editor | Syncfusion
description: Print feature in ASP.NET MVC DOCX Editor enables printing documents with page setup and quality settings for accurate document output.
platform: document-processing
control: Print
documentation: ug
---


# Print in ASP.NET MVC DOCX Editor

To print the document, use the `print` method from the DOCX Editor instance.


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



N> To enable print for a DOCX Editor instance, set enablePrint as true.

## Improve print quality

DOCX Editor provides an option to improve the print quality using `printDevicePixelRatio` in Document editor settings. DOCX Editor uses a canvas approach to render content. Then, the canvas is converted to an image and it is processed for print. Using the printDevicePixelRatio API, you can increase the image quality based on your requirement.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/print/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Print.cs" %}
{% endhighlight %}
{% endtabs %}



N> By default, the printDevicePixelRatio value is 1.

## Print using window object

You can print the document in DOCX Editor by passing the window instance. This is useful to implement print in third-party frameworks such as Electron, where the window instance will not be available.


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



By customizing margins, paper, and layouts, the layout of the document will be changed in the DOCX Editor. To modify these options during the print operation, serialize the document as SFDT using the `serialize` method in the DOCX Editor instance and open the SFDT data in another instance of the DOCX Editor in a separate window.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/print-doc/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/print-doc/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

## Online Demo

Explore how to print Word documents using the ASP.NET MVC DOCX Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-mvc/documenteditor/print#/tailwind3).

## See Also

* [Feature modules](./feature-module)
* [Page Setup dialog](./dialog#page-setup-dialog)
