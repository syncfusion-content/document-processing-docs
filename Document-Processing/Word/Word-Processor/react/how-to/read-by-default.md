---
layout: post
title: Read by default in React Document editor component | Syncfusion
description: Learn here all about Read by default in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Read by default 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Read by default in React Document editor component

In this article, we are going to see how to open a document in read only mode by default in Document Editor & Document  Editor Container.

## Opening a document in read only mode by default in DocumentEditor

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/base-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/base-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/base-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/base-cs4" %}

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

## Opening a document in ready only mode by default in DocumentEditorContainer

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/base-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/base-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/base-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/base-cs5" %}

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

N> You can use the `restrictEditing` in `DocumentEditorContainerComponent` and `isReadOnly` in `DocumentEditorComponent` based on your requirement to change component to read only mode.