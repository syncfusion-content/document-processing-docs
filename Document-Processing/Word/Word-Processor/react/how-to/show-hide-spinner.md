---
layout: post
title: Show hide spinner in React Document editor component | Syncfusion
description: Learn here all about Show hide spinner in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Show hide spinner 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Show hide spinner in React Document editor component

Using [`spinner`](https://ej2.syncfusion.com/documentation/spinner/getting-started#create-the-spinner-globally) component, you can show/hide spinner while opening document in DocumentEditor .

Example code snippet to show/hide spinner

```ts
// showSpinner() will make the spinner visible
showSpinner(document.getElementById('container'));

// hideSpinner() method used hide spinner
hideSpinner(document.getElementById('container'));
```

Refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/spinner-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/spinner-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/spinner-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/spinner-cs1" %}

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).


N> In above example, we have used setInterval to hide spinner, just for demo purpose.
