---
layout: post
title: Show or Hide Spinner in JavaScript (ES6) DOCX Editor control | Syncfusion
description: Learn here all about showing or hiding a spinner in Syncfusion JavaScript (ES6) Document Editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Show or Hide Spinner
documentation: ug
domainurl: ##DomainURL##
---

# Show or Hide Spinner in JavaScript (ES6) Document Editor control

You can use the [`spinner`](https://ej2.syncfusion.com/documentation/spinner/getting-started#create-the-spinner-globally) component to show/hide a spinner while opening a document in the [TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor).

The following example shows how to show/hide a spinner.

```ts
// showSpinner() will make the spinner visible
showSpinner(document.getElementById('container'));

// hideSpinner() method is used to hide the spinner
hideSpinner(document.getElementById('container'));
```

Refer to the following example.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/spinner-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/spinner-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/spinner-cs1" %}

N> In the above example, we have used `setInterval` to hide the spinner for demo purposes only.
