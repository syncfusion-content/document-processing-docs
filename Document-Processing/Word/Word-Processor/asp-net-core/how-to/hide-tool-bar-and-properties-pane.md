---
layout: post
title: Hide toolbar and properties pane in DOCX Editor | Syncfusion
description: Learn how to hide the default toolbar and properties pane from the Syncfusion DOCX Editor component.
platform: document-processing
control: Hide The Default Tool Bar And Properties Pane
documentation: ug
---

# Hide toolbar and properties pane in Document Editor component

The **Document Editor container** provides the main document view area along with the built-in toolbar and properties pane.

**[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor)** provides just the main document view area. Here, the user can compose, view, and edit Word documents. You may prefer to use this component when you want to design your own UI options for your application.

## Hide the properties pane

By default, the Document Editor container has a built-in properties pane which contains options for formatting text, tables, images, and the header and footer. You can use the [`showPropertiesPane`] API in `DocumentEditorContainer` to hide the properties pane.

The following example code illustrates how to hide the properties pane.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/hide-the-default-propertiespane/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Hide-the-default-propertiespane.cs" %}
{% endhighlight %}
{% endtabs %}


N> Positioning and customizing the properties pane in the Document Editor container is not possible. Instead, you can hide the existing properties pane and create your own pane using public APIs.

## Hide the toolbar

You can use the [`enableToolbar`] API in `DocumentEditorContainer` to hide the existing toolbar.

The following example code illustrates how to hide the existing toolbar.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/hide-the-default-toolbar/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Hide-the-default-toolbar.cs" %}
{% endhighlight %}
{% endtabs %}


## See Also

* [How to customize the toolbar](./customize-tool-bar)