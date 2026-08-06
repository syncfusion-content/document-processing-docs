---
layout: post
title: View in ASP.NET Core DOCX Editor Control | Syncfusion
description: Learn how to use view options in the Syncfusion ASP.NET Core Document Editor, including web layout, ruler, and navigation pane features.
platform: document-processing
control: View
documentation: ug
---

# View in ASP.NET Core Document Editor Component

## Web layout

[ASP.NET Core Document Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) allows you to change the view to either web layout or print using the [`LayoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_LayoutType) property with the supported [`LayoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.LayoutType.html) enum.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/web-layout/tagHelper %}
{% endhighlight %}
{% endtabs %}

### Online demo

Explore how to view Word documents in web layout using the ASP.NET Core Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/weblayout#/tailwind3).

## Ruler

The ruler helps you set specific margins, tab stops, or indentations within a document to ensure consistent formatting in the Document Editor.

The following example illustrates how to enable the ruler in the Document Editor.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/ruler/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/ruler/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

### Online demo

Explore how to use the ruler in the ASP.NET Core Document Editor for working with Word documents in this [live demo](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/ruler#/tailwind3).

## Navigation pane

The heading navigation pane allows users to swiftly navigate documents by heading, enhancing their ability to move through the document efficiently.

The following example illustrates how to enable the heading navigation pane in the Document Editor.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/heading-navigation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="heading-navigation.cs" %}
{% include code-snippet/document-editor/asp-net-core/heading-navigation/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

### Online demo

Explore how to navigate through headings in Word documents using the ASP.NET Core Document Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/asp-net-core/documenteditor/headingnavigation#/tailwind3).