---
layout: post
title: How to Disable the Context Menu in ASP.NET Core PDF | Syncfusion
description: Disable the right-click context menu in the ASP.NET Core PDF Viewer to prevent users from accessing context menu actions on PDF content.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Disable the Context Menu in ASP.NET Core PDF Viewer

Prevent users from accessing the context menu by setting the [**ContextMenuOption**](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ContextMenuOption) property to `'None'`. This hides all context menu options on right-click. The default value is `'RightClick'`.

Use the following example to disable the context menu in the PDF Viewer:

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

This configuration hides the context menu entirely, preventing users from accessing it when right-clicking on the PDF document.
