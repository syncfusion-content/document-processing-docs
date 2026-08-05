---
layout: post
title: Hide Default Toolbar and Properties Pane in ASP.NET MVC DOCX Editor
description: Learn how to hide the default tool bar properties pane from the Syncfusion ASP.NET MVC DOCX Editor Component
platform: document-processing
control: Hide The Default Tool Bar And Properties Pane
documentation: ug
---

# How to hide the default tool bar and properties pane in DOCX Editor

**Document Editor Container** provides the main document view area along with the built-in toolbar and properties pane.

**Document Editor** provides just the main document view area. Here, the user can compose, view, and edit Word documents. You may prefer to use this component when you want to design your own UI options for your application.

## Hide the properties pane

By default, the Document Editor Container has a built-in properties pane that contains options for formatting text, tables, images, headers, and footers. You can use the [`showPropertiesPane`] API in `DocumentEditorContainer` to hide the properties pane.

The following example code illustrates how to hide the properties pane.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/hide-the-default-propertiespane/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Hide-the-default-propertiespane.cs" %}
{% endhighlight %}
{% endtabs %}

N> Positioning and customizing the properties pane in Document Editor Container is not possible. Instead, you can hide the existing properties pane and create your own pane using public APIs.

## Hide the toolbar

You can use the [`enableToolbar`] API in `DocumentEditorContainer` to hide the existing toolbar.

The following example code illustrates how to hide the existing toolbar.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/hide-the-default-toolbar/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Hide-the-default-toolbar.cs" %}
{% endhighlight %}
{% endtabs %}

## See Also

* [How to customize the toolbar](../how-to/customize-tool-bar)