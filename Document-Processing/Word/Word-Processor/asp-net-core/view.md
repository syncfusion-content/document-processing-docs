---
layout: post
title: View in Document Editor Control | Syncfusion
description: Learn here all about View in Syncfusion Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: View
documentation: ug
---

# View in DocumentEditor

## Web Layout

DocumentEditor allows to change the view to web layout and print using the [`layoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_LayoutType) property with the supported [`LayoutType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.LayoutType.html)


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/web-layout/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Web-layout.cs" %}
{% endhighlight %}{% endtabs %}


## Ruler

Using ruler we can refer to setting specific margins, tab stops, or indentations within a document to ensure consistent formatting in Document Editor.

The following example illustrates how to enable ruler in Document Editor


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/ruler/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/ruler/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


## Navigation Pane

Using the heading navigation pane allows users to swiftly navigate documents by heading, enhancing their ability to move through the document efficiently.

The following example illustrates how to enable heading navigation pane in Document Editor


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/heading-navigation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="heading-navigation.cs" %}
{% include code-snippet/document-editor/asp-net-core/heading-navigation/document-editor.cs %}
{% endhighlight %}
{% endtabs %}

