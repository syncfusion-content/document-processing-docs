---
layout: post
title: How to disable header and footer edit in ##Platform_Name## Document Editor Component
description: Learn how to to disable header and footer edit in Document from the Syncfusion ##Platform_Name## Document Editor component of Syncfusion Essential JS2 and more.
platform: document-processing
control: Disable Header And Footer
publishingplatform: ##Platform_Name##
documentation: ug
---

# How to disable header and footer edit in  Document Editor component

## Disable header and footer edit in DocumentEditorContainer instance

You can use [`restrictEditing`] property to disable header and footer editing based on selection context type.

RestrictEditing allows you to restrict the document modification and makes the Document read only mode. So, by using this property, and if selection inside header or footer, you can set this property as true.

The following example code illustrates how to header and footer edit in `DocumentEditorContainer` instance.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/disable-header-footer/razor %}
{% endhighlight %}
{% highlight c# tabtitle="document-editor.cs" %}
{% endhighlight %}{% endtabs %}

Otherwise, you can disable clicking inside Header or Footer by using [`closeHeaderFooter`] API in selection module.

The following example code illustrates how to close header and footer when selection is inside header or footer in `DocumentEditorContainer` instance.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/disable-header-footer-close/razor %}
{% endhighlight %}
{% highlight c# tabtitle="document-editor.cs" %}
{% endhighlight %}{% endtabs %}

## Disable header and footer edit in DocumentEditor instance

Like restrictEditing, you can use [`isReadOnly`] property in Document editor to disable header and footer edit.

The following example code illustrates how to header and footer edit in `DocumentEditor` instance.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/document-editor-container/disable-header-footer-documenteditor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="document-editor.cs" %}
{% endhighlight %}{% endtabs %}
