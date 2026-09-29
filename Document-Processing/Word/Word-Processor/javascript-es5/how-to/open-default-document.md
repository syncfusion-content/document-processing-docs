---
layout: post
title: How to Open a Default Document in JavaScript DOCX Editor | Syncfusion
description: Open a default document in Syncfusion® JavaScript DOCX Editor during initialization to provide predefined content and streamline document editing workflows.
platform: document-processing
control: Open a Default Document
documentation: ug
domainurl: ##DomainURL##
---

# How to Open a Default Document in JavaScript DOCX Editor

In this article, we are going to see how to open a default document when DocumentEditor and DocumentEditorContainer are initialized.

## Opening a Default Document in DocumentEditor

By default, [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) will open a blank document. You can use the [`open`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#open) API in the DOCX Editor to open the SFDT content.

The DOCX Editor has a [`created`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#created) event which is triggered once the DOCX Editor control is created. To open the document by default, use the [`open`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#open) and [`created`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#created) APIs.

The following example illustrates how to open the default SFDT content once the DOCX Editor control is created.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/open-default-document-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/open-default-document-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/open-default-document-cs1" %}

## Opening a Default Document in DocumentEditorContainer

By default, the Document Editor Container will open a blank document. You can use the [`open`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#open) API in the DOCX Editor to open the SFDT content.

The Document Editor Container has a [`created`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#created) event which is triggered once the Document Editor Container control is created. To open the document by default, use the [`open`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#open) and [`created`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#created) APIs.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/open-default-document-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/open-default-document-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/open-default-document-cs2" %}
