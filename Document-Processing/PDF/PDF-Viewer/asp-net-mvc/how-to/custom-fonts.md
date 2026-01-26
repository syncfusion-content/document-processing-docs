---
layout: post
title: Add custom fonts in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to add and load custom TTF fonts for documents displayed in the Syncfusion ASP.NET MVC PDF Viewer using the customFonts property.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Add custom fonts in the ASP.NET MVC PDF Viewer

To use custom fonts in the Syncfusion ASP.NET MVC PDF Viewer, add the custom TTF files to the resource URL directory and configure the viewer to load them. Specify font file names using the `customFonts` property as an array of names.

## Steps to add custom fonts

**Step 1:** Add custom TTF font files to the resource URL path referenced in the application. For example, place the TTF files in the ej2-pdfviewer-lib folder that serves as the resource URL path.

**Step 2:** Use the following code to configure custom fonts in the PDF Viewer.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

```html

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").CustomFonts(["arialbd.ttf", "arial.ttf", "BKANT.TTF", "calibri.ttf", "GARA.TTF", "GARAIT.TTF", "msgothic.ttc", "trebuc.ttf", "wingding.ttf"]).Render()
</div>

```
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

```html

<div id="e-pv-e-sign-pdfViewer-div">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").CustomFonts(["arialbd.ttf", "arial.ttf", "BKANT.TTF", "calibri.ttf", "GARA.TTF", "GARAIT.TTF", "msgothic.ttc", "trebuc.ttf", "wingding.ttf"]).Render()
</div>

```
{% endhighlight %}
{% endtabs %}

These steps integrate custom fonts into PDF documents displayed in the PDF Viewer.
