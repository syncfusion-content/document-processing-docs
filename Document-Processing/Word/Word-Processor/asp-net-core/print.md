---
layout: post
title: Print in DOCX Editor Control | Syncfusion
description: Learn how to print documents in the Syncfusion ASP.NET Core Document Editor, including print quality, page setup, and window-based printing.
platform: document-processing
control: Print
documentation: ug
---


# Print in ASP.NET Core Document Editor

To print the document, use the `print` method from the [ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) instance.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/print-sfdt/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/print-sfdt/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/print/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/print/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


N> To enable print for a document editor instance, set enablePrint as true.

## Improve print quality

The Document Editor provides an option to improve the print quality using `printDevicePixelRatio` in the Document Editor settings. The Document Editor uses a canvas approach to render content. The canvas is then converted to an image and processed for printing. Using the `printDevicePixelRatio` API, you can increase the image quality based on your requirements.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/print/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Print.cs" %}
{% endhighlight %}
{% endtabs %}



N> By default, printDevicePixelRatio value is 1.

## Print using window object

You can print the document in the Document Editor by passing the window instance. This is useful for implementing print in third-party frameworks such as Electron, where the window instance is not available.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/print-window/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Print-window.cs" %}
{% endhighlight %}
{% endtabs %}


## Page setup

Some browser print options (such as headers, footers, and background graphics) cannot be configured using JavaScript.

* [Chrome](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1)
* [Firefox](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox)

However, you can customize margins, paper, and layout options by modifying the section format properties using the page setup dialog.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/print-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Print-dialog.cs" %}
{% endhighlight %}
{% endtabs %}


By customizing margins, paper, and layouts, the document layout will change in the Document Editor. To modify these options during the print operation, serialize the document as SFDT using the `serialize` method on a Document Editor instance and open the SFDT data in another Document Editor instance in a separate window.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/print-doc/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/print-doc/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

## Online Demo

Explore how to print Word documents using the ASP.NET Core Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/print#/tailwind3).

## See Also

* [Feature modules](./feature-module)
* [Page Setup dialog](./dialog#page-setup-dialog)
