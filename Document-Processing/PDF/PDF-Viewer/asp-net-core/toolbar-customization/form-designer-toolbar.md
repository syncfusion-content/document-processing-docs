---
layout: post
title: Form Designer Toolbar in ASP.NET Core PDF Viewer | Syncfusion
description: Customize the Form Designer toolbar in the ASP.NET Core PDF Viewer to show, hide, or replace the default form design actions for your users.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize the Form Designer Toolbar in ASP.NET Core PDF Viewer

## Overview

This guide shows how to show or hide the form designer toolbar, and how to configure which tools appear and their order.

**Outcome**: A working ASP.NET Core example customizing the form designer toolbar.

## Prerequisites

- EJ2 ASP.NET Core PDF Viewer installed and added to your project. See [getting started guide](../getting-started)
- A valid [`resourceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResourceUrl) or [`serviceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ServiceUrl) for accessing PDF Viewer assets

## Steps

### 1. Show or hide Form Designer toolbar at initialization

Toggle the form designer toolbar programmatically during initialization or at runtime.

Use the [`enableFormDesigner`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormDesigner) property or the [`showFormDesignerToolbar`](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/toolbar#showformdesignertoolbar) method to change visibility.

**Example using the `enableFormDesigner` property:**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableFormDesigner="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

### 2. Show or hide Form Designer toolbar at runtime

Set the [`enableFormDesigner`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormDesigner) property on the viewer's instance to toggle form designer visibility at runtime.

### 3. Show or hide form designer toolbar items

Use [`formDesignerToolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_FormDesignerToolbarItems) and supply an ordered list of [`FormDesignerToolbarItem`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html) values.

Configure the [`toolbarSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html) property to specify which form design tools are available. The property accepts a list of `FormDesignerToolbarItem` values; included items are displayed and rendered in the order listed while omitted items are hidden. This yields a streamlined form-design experience across devices.

**Example customizing the form designer toolbar:**

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   toolbarSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings { FormDesignerToolbarItems = "TextboxTool PasswordTool CheckBoxTool RadioButtonTool DropdownTool ListboxTool DrawSignatureTool DeleteTool" })">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Expected result

- The form designer toolbar appears (or is hidden) according to [`enableFormDesigner`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormDesigner).
- Only the listed tools appear.

## Troubleshooting

- **Toolbar or form designer tools do not appear**
    - **Cause**: [`FormDesigner`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.FormDesigner.html) or [`Toolbar`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.Toolbar.html) service not injected or enabled.
    - **Solution**: Ensure [`enableFormDesigner`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableFormDesigner) is set to `true` and the Toolbar service is enabled in the PDF Viewer.

- **Form designer tools not responding to clicks**
    - **Cause**: Form designer module not fully loaded or document doesn't support form fields.
    - **Solution**: Ensure the document is loaded before enabling form designer mode, and verify the PDF supports form fields.

## Related topics

- [Customize primary toolbar](./primary-toolbar)
- [Customize annotation toolbar](./annotation-toolbar)
- [Customize mobile toolbar](./mobile-toolbar)