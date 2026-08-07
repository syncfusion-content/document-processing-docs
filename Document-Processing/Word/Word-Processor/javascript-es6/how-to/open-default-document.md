---
layout: post
title: Open a Default Document in JavaScript (ES6) DOCX Editor control | Syncfusion
description: Learn here all about opening a default document in Syncfusion JavaScript (ES6) Document Editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Open a Default Document
documentation: ug
domainurl: ##DomainURL##
---

# Open a Default Document in JavaScript (ES6) Document Editor control

In this article, we are going to see how to open a default document when the DocumentEditor and DocumentEditorContainer are initialized.

## Opening a default document in DocumentEditor

By default, the [TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) will open a blank document. You can use the [`open`](https://ej2.syncfusion.com/documentation/api/document-editor#open) API in the Document Editor to open the SFDT content.

The Document Editor has a [`created`](https://ej2.syncfusion.com/documentation/api/document-editor#created) event which gets triggered once the Document Editor control is created. So, if you want to open the document by default, you can use the [`open`](https://ej2.syncfusion.com/documentation/api/document-editor#open) and [`created`](https://ej2.syncfusion.com/documentation/api/document-editor#created) APIs.

The following example illustrates how to open the default SFDT content once the Document Editor control is created.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/open-default-document-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/open-default-document-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/open-default-document-cs1" %}



## Opening a default document in DocumentEditorContainer

By default, the Document Editor Container will open a blank document. You can use the [`open`](https://ej2.syncfusion.com/documentation/api/document-editor#open) API in the Document Editor to open the SFDT content.

The Document Editor Container has a [`created`](https://ej2.syncfusion.com/documentation/api/document-editor-container#created) event which gets triggered once the Document Editor Container control is created. So, if you want to open the document by default, you can use the [`open`](https://ej2.syncfusion.com/documentation/api/document-editor#open) and [`created`](https://ej2.syncfusion.com/documentation/api/document-editor-container#created) APIs.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/open-default-document-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/open-default-document-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/open-default-document-cs2" %}


