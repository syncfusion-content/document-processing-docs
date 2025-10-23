---
layout: post
title: Form Designer Toolbar Customization in ASP.NET MVC PDF Viewer Component | Syncfusion
description: Learn here all about form designer toolbar customization in Syncfusion ASP.NET MVC PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Form Designer Toolbar Customization

The form designer toolbar can be customized by showing or hiding default items and by controlling the order in which the items appear.

## Show or hide the form designer toolbar

Show or hide the form designer toolbar programmatically during initialization or at runtime.

Use the [EnableFormDesigner](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormDesigner) property or the [showFormDesignerToolbar](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbar/#showformdesignertoolbar) method to toggle visibility.

The following code snippet explains how to show or hide the toolbar using the `EnableFormDesigner` property.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
```html
<div style="width:100%;height:600px">
     @Html.EJS().PdfViewer("pdfviewer").EnableFormDesigner(false).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
</div>
```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
```html
    <div style="width:100%;height:600px">
         @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).EnableFormDesigner(false).DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
    </div>
```
{% endhighlight %}
{% endtabs %}

## How to customize the form designer toolbar

Choose which tools appear and control their order in the form designer toolbar.

Use [`PdfViewerToolbarSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html/) with the [`FormDesignerToolbarItems`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_FormDesignerToolbarItems) property to choose which form design tools are available. The property accepts a list of [`FormDesignerToolbarItem`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_FormDesignerToolbarItems/) values. The items you include are both displayed and rendered in the order listed; any items you omit are hidden. This provides a streamlined, user-friendly form design experience across devices.

The following example demonstrates how to customize the form designer toolbar by configuring specific tools using `FormDesignerToolbarItem`.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ToolbarSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings { ShowTooltip = true, FormDesignerToolbarItems = "TextboxTool PasswordTool CheckBoxTool RadioButtonTool DropdownTool ListboxTool DrawSignatureTool DeleteTool" }).Render()
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ToolbarSettings(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings { ShowTooltip = true, FormDesignerToolbarItems = "TextboxTool PasswordTool CheckBoxTool RadioButtonTool DropdownTool ListboxTool DrawSignatureTool DeleteTool" }).Render()
</div>

{% endhighlight %}
{% endtabs %}