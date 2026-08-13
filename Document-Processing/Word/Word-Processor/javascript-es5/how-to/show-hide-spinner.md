---
layout: post
title: Show hide spinner in JavaScript (ES5) Document editor | Syncfusion
description: Learn here all about Show hide spinner in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Show hide spinner 
documentation: ug
domainurl: ##DomainURL##
---

# Show hide spinner in JavaScript (ES5) Document editor

Using the [`spinner`](https://ej2.syncfusion.com/documentation/spinner/getting-started#create-the-spinner-globally) component, you can show or hide the spinner while opening a document in [JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor).

The following example shows how to show or hide the spinner.

```js
// showSpinner() will make the spinner visible
showSpinner(document.getElementById('container'));

// hideSpinner() method used to hide spinner
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

N> In the above example, `setInterval` is used to hide the spinner, just for demo purposes.
