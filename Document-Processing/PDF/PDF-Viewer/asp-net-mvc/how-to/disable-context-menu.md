---
layout: post
title: Disable context menu in ASP.NET MVC Pdfviewer control | Syncfusion
description: Learn here all about Disable context menu in Syncfusion ASP.NET MVC Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Disable context menu
publishingplatform: ASP.NET MVC
documentation: ug
---

# Disable context menu in ASP.NET MVC Pdfviewer control

To disable the context menu in the Syncfusion PDF viewer control, you can use the [**ContextMenuOption**](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ContextMenuOption) property as `'None'` to hide all context menu options. Default value of the **ContextMenuOption** is `'RightClick'`.

Here is an example of how you can use the **ContextMenuOption** to disable context menu in the PDF Viewer:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ContextMenuOption(Syncfusion.EJ2.PdfViewer.ContextMenuAction.None).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ContextMenuOption(Syncfusion.EJ2.PdfViewer.ContextMenuAction.None).Render()
</div>

{% endhighlight %}
{% endtabs %}

This will hide the context menu and prevent the user from right-clicking on the PDF viewer.
