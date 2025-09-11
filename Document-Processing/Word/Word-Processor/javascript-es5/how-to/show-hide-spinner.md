---
layout: post
title: Show hide spinner in JavaScript (ES5) Document editor control | Syncfusion
description: Learn here all about Show hide spinner in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Show hide spinner 
documentation: ug
domainurl: ##DomainURL##
---

# Show hide spinner in JavaScript (ES5) Document editor control

Using [`spinner`](https://ej2.syncfusion.com/documentation/spinner/getting-started#create-the-spinner-globally) component, you can show/hide spinner while opening document in DocumentEditor.

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
{% include code-snippet/document-editor/javascript-es5/document-editor/spinner-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/document-editor/spinner-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/spinner-cs1" %}

>Note: In above example, we have used setInterval to hide spinner, just for demo purpose.
