---
layout: post
title: Disable header and footer in Syncfusion DOCX Editor
description: Learn how to disable header and footer editing in the Syncfusion Document Editor component of Essential JS 2 and more.
platform: document-processing
control: Disable Header And Footer
documentation: ug
---

# How to disable header and footer edit in Document Editor component

## Disable header and footer edit in DocumentEditorContainer instance

You can use the [`restrictEditing`] property to disable header and footer editing based on selection context type.

RestrictEditing allows you to restrict the document modification and makes the document read-only mode. So, by using this property, and if the selection is inside header or footer, you can set this property as true.

The following example code illustrates how to disable header and footer edit in the `DocumentEditorContainer` instance.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/disable-header-footer/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="document-editor.cs" %}
{% endhighlight %}
{% endtabs %}

Otherwise, you can disable clicking inside Header or Footer by using the [`closeHeaderFooter`] API in the selection module.

The following example code illustrates how to close header and footer when the selection is inside header or footer in the `DocumentEditorContainer` instance.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/disable-header-footer-close/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="document-editor.cs" %}
{% endhighlight %}
{% endtabs %}


## Disable header and footer edit in DocumentEditor instance

Like restrictEditing, you can use the [`isReadOnly`] property in the Document Editor to disable header and footer edit.

The following example code illustrates how to disable header and footer edit in the `DocumentEditor` instance.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/document-editor-container/disable-header-footer-documenteditor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="document-editor.cs" %}
{% endhighlight %}
{% endtabs %}

