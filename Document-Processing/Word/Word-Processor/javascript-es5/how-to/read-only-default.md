---
layout: post
title: Read-Only by Default in JavaScript (ES5) DOCX Editor | Syncfusion
description: Learn how to open a document in read-only mode by default in Syncfusion JavaScript (ES5) Document Editor using the restrictEditing and isReadOnly APIs.
platform: document-processing
control: Read-Only by Default
documentation: ug
domainurl: ##DomainURL##
---

# Read-Only by Default in JavaScript (ES5) Document Editor

In this article, we are going to see how to open a document in read-only mode by default in DocumentEditor and DocumentEditorContainer.

## Opening a Document in Read-Only Mode by Default in DocumentEditor

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/read-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/read-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/read-cs1" %}

## Opening a Document in Read-Only Mode by Default in DocumentEditorContainer

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/read-container-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/read-container-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/read-container-cs1" %}

N> You can use the [`restrictEditing`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#restrictediting) in the DocumentEditorContainer and [`isReadOnly`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#isreadonly) in the DocumentEditor based on your requirement to change the component to read-only mode.