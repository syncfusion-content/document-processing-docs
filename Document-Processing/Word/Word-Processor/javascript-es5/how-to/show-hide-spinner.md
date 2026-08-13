---
layout: post
title: How to Show and Hide Spinner in JavaScript DOCX Editor | Syncfusion
description: Show or hide loading indicators in Syncfusion® JavaScript DOCX Editor when opening documents and processing content.
platform: document-processing
control: Show hide spinner 
documentation: ug
domainurl: ##DomainURL##
---

# How to Show and Hide Spinner in JavaScript DOCX Editor

Using [`spinner`](https://ej2.syncfusion.com/documentation/spinner/getting-started#create-the-spinner-globally) component, you can show/hide spinner while opening document in [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor).

Example code snippet to show/hide spinner

```ts
// showSpinner() will make the spinner visible
showSpinner(document.getElementById('container'));

// hideSpinner() method used hide spinner
hideSpinner(document.getElementById('container'));
```

Refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/spinner-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/spinner-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/spinner-cs1" %}

>Note: In above example, we have used setInterval to hide spinner, just for demo purpose.
