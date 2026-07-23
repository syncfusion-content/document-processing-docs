---
layout: post
title: Show hide spinner in React DOCX Editor component | Syncfusion
description: Learn here all about Show hide spinner in Syncfusion React Document Editor component of Syncfusion Essential JS 2 and more.
control: Show hide spinner 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Show hide spinner in React Document Editor component

Using the [`spinner`](https://ej2.syncfusion.com/documentation/spinner/getting-started#create-the-spinner-globally) component, you can show or hide a spinner while opening a document in the [React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor).

Example code snippet to show or hide a spinner

```ts
// showSpinner() will make the spinner visible
showSpinner(document.getElementById('container'));

// hideSpinner() method used to hide the spinner
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

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.


N> : In the above example, we have used setInterval to hide the spinner, just for demo purposes.
