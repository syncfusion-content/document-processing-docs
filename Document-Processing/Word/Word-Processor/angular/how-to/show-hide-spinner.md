---
layout: post
title: How to Show and Hide Spinner in Angular DOCX Editor | Syncfusion
description: Show or hide loading indicators in Syncfusion® Angular DOCX Editor when opening documents and processing content.
platform: document-processing
control: Show hide spinner 
documentation: ug
domainurl: ##DomainURL##
---

# How to Show and Hide Spinner in Angular DOCX Editor

Using the [`spinner`](https://ej2.syncfusion.com/documentation/spinner/getting-started#create-the-spinner-globally) component, you can show or hide a spinner while opening a document in the [Angular DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) (Document Editor).

Example code snippet to show or hide a spinner:

```typescript
// showSpinner() will make the spinner visible
showSpinner(document.getElementById('container'));

// hideSpinner() method is used to hide the spinner
hideSpinner(document.getElementById('container'));
```

Refer to the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/document-editor-container-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/document-editor-container-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/document-editor/angular/document-editor-container-cs5" %}

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.


N> In the above example, we have used setInterval to hide the spinner, just for demo purposes.
