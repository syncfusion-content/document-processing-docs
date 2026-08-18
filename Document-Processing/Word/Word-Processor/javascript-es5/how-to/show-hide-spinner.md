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

Using the [`spinner`](https://ej2.syncfusion.com/documentation/spinner/getting-started#create-the-spinner-globally) component, you can show or hide a spinner while opening a document in the [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor).

Example code snippet to show or hide a spinner

```ts
// showSpinner() will make the spinner visible
showSpinner(document.getElementById('container'));

// hideSpinner() method used to hide the spinner
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

N> In the above example, we have used setInterval to hide the spinner, just for demo purposes.
