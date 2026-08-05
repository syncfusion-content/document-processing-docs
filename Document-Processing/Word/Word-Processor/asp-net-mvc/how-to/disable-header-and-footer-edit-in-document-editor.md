---
layout: post
title: Disable header and footer edit in ASP.NET MVC DOCX Editor | Syncfusion
description: Learn here all about how to disable header and footer edit in the Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Disable Header And Footer
documentation: ug
---

# How to disable header and footer edit in ASP.NET MVC Document Editor

## Disable header and footer edit in DocumentEditorContainer instance

You can use the [`restrictEditing`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditorContainer.html#Syncfusion_EJ2_DocumentEditor_DocumentEditorContainer_RestrictEditing) property to disable header and footer editing based on the selection context type. The `restrictEditing` property restricts document modification and makes the document read-only. To disable header and footer editing, handle the selection-change event of the Document Editor and set `restrictEditing` to `true` whenever the selection is inside a header or footer region.

The following example code illustrates how to disable header and footer edit in the `DocumentEditorContainer` instance.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/disable-header-footer/razor %}
{% endhighlight %}
{% highlight c# tabtitle="document-editor.cs" %}
{% endhighlight %}{% endtabs %}

### Disable header and footer edit using the closeHeaderFooter API

Otherwise, you can disable clicking inside a header or footer by using the `closeHeaderFooter` API in the selection module.

The following example code illustrates how to close the header and footer when the selection is inside a header or footer region in the `DocumentEditorContainer` instance.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/disable-header-footer-close/razor %}
{% endhighlight %}
{% highlight c# tabtitle="document-editor.cs" %}
{% endhighlight %}
{% endtabs %}

## Disable header and footer edit in DocumentEditor instance

Like `restrictEditing`, you can use the [`isReadOnly`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_IsReadOnly) property in the Document Editor to disable header and footer edit.

The following example code illustrates how to disable header and footer edit in the `DocumentEditor` instance.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/disable-header-footer-documenteditor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="document-editor.cs" %}
{% endhighlight %}
{% endtabs %}
