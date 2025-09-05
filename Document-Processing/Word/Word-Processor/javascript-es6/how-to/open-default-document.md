---
layout: post
title: Open default document in EJ2 TypeScript Document editor control | Syncfusion
description: Learn here all about Open default document in Syncfusion EJ2 TypeScript Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Open default document 
publishingplatform: EJ2 TypeScript
documentation: ug
domainurl: ##DomainURL##
---

# Open default document in EJ2 TypeScript Document editor control

In this article, we are going to see how to open a default document when DocumentEditor & DocumentEditorContainer is initialized.

## Opening a default document in DocumentEditor

By default, Document Editor will open blank document. You can use [`open`](https://ej2.syncfusion.com/documentation/api/document-editor#open) API in Document Editor to open the sfdt content.

Document editor have [`created`](https://ej2.syncfusion.com/documentation/api/document-editor#created) event which gets triggered once Document editor control created. So, if you want to open the document by default, you can use [`open`](https://ej2.syncfusion.com/documentation/api/document-editor#open) and [`created`](https://ej2.syncfusion.com/documentation/api/document-editor#created) API.

The following example illustrates how to open the default SFDT content once Document editor control gets created.

 

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/document-editor/open-default-document-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/document-editor/open-default-document-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/document-editor/open-default-document-cs1" %}



## Opening a default document in DocumentEditorContainer

By default, Document Editor Container will open a blank document. You can use [`open`](https://ej2.syncfusion.com/documentation/api/document-editor#open) API in Document Editor to open the SFDT content.

Document editor Container have [`created`](https://ej2.syncfusion.com/documentation/api/document-editor-container#created) event which gets triggered once Document editor container control created. So, if you want to open the document by default, you can use [`open`](https://ej2.syncfusion.com/documentation/api/document-editor#open) and [`created`](https://ej2.syncfusion.com/documentation/api/document-editor-container#created) API.

 

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/document-editor/open-default-document-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/document-editor/open-default-document-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/document-editor/open-default-document-cs2" %}


