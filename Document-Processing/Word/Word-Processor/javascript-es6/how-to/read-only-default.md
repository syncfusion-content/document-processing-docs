---
layout: post
title: Read-Only by Default in JavaScript (ES6) DOCX Editor | Syncfusion
description: Learn how to open a document in read-only mode by default in Syncfusion JavaScript (ES6) DOCX Editor for DocumentEditor and DocumentEditorContainer.
platform: document-processing
control: Read-Only by Default
documentation: ug
domainurl: ##DomainURL##
---

# Read-Only by Default in JavaScript (ES6) Document Editor

In this article, we are going to see how to open a document in read-only mode by default in the DocumentEditor and DocumentEditorContainer.

## Opening a document in read-only mode by default in the DocumentEditor

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/read-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/read-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/read-cs1" %}

## Opening a document in read-only mode by default in the DocumentEditorContainer

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/read-container-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/read-container-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/read-container-cs1" %}

N> You can use the [`restrictEditing`](https://ej2.syncfusion.com/documentation/api/document-editor-container#restrictediting) in DocumentEditorContainer and [`isReadOnly`](https://ej2.syncfusion.com/documentation/api/document-editor#isreadonly) in DocumentEditor based on your requirement to change the component to read-only mode.