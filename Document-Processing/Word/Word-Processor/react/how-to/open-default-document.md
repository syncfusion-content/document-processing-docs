---
layout: post
title: How to Open a Default Document in React DOCX Editor | Syncfusion
description: Open a default document in Syncfusion® React DOCX Editor during initialization to provide predefined content and streamline document editing workflows.
control: Open default document
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Open a Default Document in React DOCX Editor

In this article, we are going to see how to open a default document when DOCX Editor & Document Editor Container are initialized.

## Opening a default document in DocumentEditor

By default, [React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) will open a blank document. You can use [`open`](https://ej2.syncfusion.com/react/documentation/api/document-editor#open) API in DOCX Editor to open the SFDT content.

DOCX Editor has [`created`](https://ej2.syncfusion.com/react/documentation/api/document-editor#created) event which gets triggered once DOCX Editor control is created. So, if you want to open the document by default, you can use the [`open`](https://ej2.syncfusion.com/react/documentation/api/document-editor#open) and [`created`](https://ej2.syncfusion.com/react/documentation/api/document-editor#created) APIs.

The following example illustrates how to open the default SFDT content once DOCX Editor control gets created.

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

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Opening a default document in DocumentEditorContainer

By default, Document Editor Container will open a blank document. You can use [`open`](https://ej2.syncfusion.com/react/documentation/api/document-editor#open) API in DOCX Editor to open the SFDT content.

Document Editor Container has [`created`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container#created) event which gets triggered once Document Editor Container control is created. So, if you want to open the document by default, you can use the `open` and `created` APIs.

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

N> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the DOCX Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
