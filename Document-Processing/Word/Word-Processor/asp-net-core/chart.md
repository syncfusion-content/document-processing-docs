---
layout: post
title: Charts in ASP.NET Core DOCX Editor | Syncfusion
description: Chart support in ASP.NET Core DOCX Editor ensures accurate rendering and preservation when opening Word documents.
platform: document-processing
control: Chart
documentation: ug
---

# Charts in ASP.NET Core DOCX Editor

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) provides chart preservation support. Using Document Editor, you can view charts from your Word document.

The following example shows chart preservation in the Document Editor.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/chart/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/chart/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

## Supported Chart Types

The following chart types are supported in the Document Editor:
* Scatter_Markers
* Bubble
* Area
* Area_Stacked
* Area_Stacked_100
* Bar_Clustered
* Bar_Stacked
* Bar_Stacked_100
* Column_Clustered
* Column_Stacked
* Column_Stacked_100
* Pie
* Doughnut
* Line
* Line_Markers
* Line_Markers_Stacked
* Line_Markers_Stacked_100
* Line_Stacked
* Line_Stacked_100

## Online Demo

Explore how to preserve charts in Word documents using the ASP.NET Core Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/chart#/tailwind3).