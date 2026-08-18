---
layout: post
title: How to Open JavaScript DOCX Editor in Read-Only Mode | Syncfusion
description: Open Syncfusion® JavaScript DOCX Editor in read-only mode to prevent document modifications while allowing users to view content.
platform: document-processing
control: Read only default 
documentation: ug
domainurl: ##DomainURL##
---

# How to Open JavaScript DOCX Editor in Read-Only Mode

In this article, we are going to see how to open a document in read only mode by default in DocumentEditor & DocumentEditorContainer.

## Opening a document in read only mode by default in DocumentEditor

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/read-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/read-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/read-cs1" %}

## Opening a document in ready only mode by default in DocumentEditorContainer

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/read-container-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/read-container-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/read-container-cs1" %}

>Note: You can use the [`restrictEditing`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/#restrictediting) in DocumentEditorContainer and [`isReadOnly`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/#isreadonly) in DocumentEditor based on your requirement to change component to read only mode.