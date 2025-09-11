---
layout: post
title: View in ASP.NET MVC Document Editor Control | Syncfusion
description: Learn here all about View in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: View
documentation: ug
---

# View in DocumentEditor

## Web Layout

DocumentEditor allows to change the view to web layout and print using the [`layoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_LayoutType) property with the supported [`LayoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.LayoutType.html)


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/web-layout/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Web-layout.cs" %}
{% endhighlight %}{% endtabs %}

## Ruler

Using ruler we can refer to setting specific margins, tab stops, or indentations within a document to ensure consistent formatting in Document Editor.

The following example illustrates how to enable ruler in Document Editor


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/ruler/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/ruler/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

## Navigation Pane

Using the heading navigation pane allows users to swiftly navigate documents by heading, enhancing their ability to move through the document efficiently.

The following example illustrates how to enable heading navigation pane in Document Editor


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/heading-navigation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="heading-navigation.cs" %}
{% include code-snippet/document-editor/asp-net-mvc/heading-navigation/document-editor.cs %}
{% endhighlight %}
{% endtabs %}