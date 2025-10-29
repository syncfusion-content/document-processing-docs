---
layout: post
title: ASP.NET Core PDF Viewer – Organize Toolbar Customization | Syncfusion
description: Learn here all about Organize Page Toolbar Customization in Syncfusion ASP.NET Core PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer

documentation: ug
---

# Organize Page Toolbar Customization in ASP.NET Core PDF Viewer control

The PDF Viewer allows you to customize the toolbar for the organize pages feature, enabling you to show or hide specific tools based on your application's requirements. The `pageOrganizerSettings` API provides properties to control the visibility of each tool in the organize pages dialog.

## Show or hide the insert option

The `canInsert` property controls the visibility of the insert tool. When set to `false`, the insert tool will be hidden from the toolbar.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   pageOrganizerSettings="@(new { CanInsert= false })">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   pageOrganizerSettings="@(new { CanInsert= false })">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Show or hide the delete option

The `canDelete` property controls the visibility of the delete tool. When set to `false`, the delete tool will be hidden.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   pageOrganizerSettings="@(new { CanDelete= false })">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   pageOrganizerSettings="@(new { CanDelete= false })">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Show or hide the rotate option

The `canRotate` property controls the visibility of the rotate tool. When set to `false`, the rotate tool will be hidden.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   pageOrganizerSettings="@(new { CanRotate= false })">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   serviceUrl='/Index'
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   pageOrganizerSettings="@(new { CanRotate= false })">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Show or hide the copy option

The `canCopy` property controls the visibility of the copy tool. When set to `false`, the copy tool will be hidden.

## Show or hide the import option

The `canImport` property controls the visibility of the import tool. When set to `false`, the import tool will be hidden.

## Show or hide the rearrange option

The `canRearrange` property controls the ability to rearrange pages. When set to `false`, pages cannot be rearranged.
