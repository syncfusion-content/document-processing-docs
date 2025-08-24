---
layout: post
title: Show hide spinner in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about Show hide spinner in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Show hide spinner 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Show hide spinner in ##Platform_Name## Document editor control

Using [`spinner`](https://ej2.syncfusion.com/documentation/spinner/getting-started/#create-the-spinner-globally) component, you can show/hide spinner while opening document in DocumentEditor .

Example code snippet to show/hide spinner

```ts
// showSpinner() will make the spinner visible
showSpinner(document.getElementById('container'));

// hideSpinner() method used hide spinner
hideSpinner(document.getElementById('container'));
```

Refer to the following example.

 

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/spinner-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/spinner-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/spinner-cs1" %}



>Note: In above example, we have used setInterval to hide spinner, just for demo purpose.
