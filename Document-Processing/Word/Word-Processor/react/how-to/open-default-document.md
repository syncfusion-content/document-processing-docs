---
layout: post
title: Open default document in React Document editor component | Syncfusion
description: Learn here all about Open default document in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Open default document 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Open default document in React Document editor component

In this article, we are going to see how to open a default document when Document Editor & Document Editor Container is initialized.

## Opening a default document in DocumentEditor

By default, Document Editor will open blank document. You can use [`open`](https://ej2.syncfusion.com/react/documentation/api/document-editor#open) API in Document Editor to open the sfdt content.

Document editor have [`created`](https://ej2.syncfusion.com/react/documentation/api/document-editor#created) event which gets triggered once Document editor control created. So, if you want to open the document by default, you can use [`open`](https://ej2.syncfusion.com/react/documentation/api/document-editor#open) and [`created`](https://ej2.syncfusion.com/react/documentation/api/document-editor#created) API.

The following example illustrates how to open the default SFDT content once Document editor control gets created.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/open-default-document-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/open-default-document-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/open-default-document-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/open-default-document-cs1" %}

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

## Opening a default document in DocumentEditorContainer

By default, Document Editor Container will open a blank document. You can use [`open`](https://ej2.syncfusion.com/react/documentation/api/document-editor#open) API in Document Editor to open the SFDT content.

Document editor Container have [`created`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#created) event which gets triggered once Document editor container control created. So, if you want to open the document by default, you can use `open` and `created` API.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/open-default-document-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/open-default-document-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/open-default-document-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/open-default-document-cs2" %}

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).