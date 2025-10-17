---
layout: post
title: Disable context menu in ASP.NET Core Pdfviewer control | Syncfusion
description: Learn here all about Disable context menu in Syncfusion ASP.NET Core Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Disable context menu
publishingplatform: ASP.NET Core
documentation: ug
---

# Disable context menu in ASP.NET Core Pdfviewer control

To disable the context menu in the Syncfusion PDF viewer control, you can use the [**ContextMenuOption**](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ContextMenuOption) property as `'None'` to hide all context menu options. Default value of the **ContextMenuOption** is `'RightClick'`.

Here is an example of how you can use the **ContextMenuOption** to disable context menu in the PDF Viewer:

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib"
                   contextMenuOption="None">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf"
                   serviceUrl="/api/PdfViewer"
                   contextMenuOption="None">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

This will hide the context menu and prevent the user from right-clicking on the PDF viewer.
