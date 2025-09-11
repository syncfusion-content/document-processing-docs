---
layout: post
title: Read only default in JavaScript (ES6) Document editor control | Syncfusion
description: Learn here all about Read only default in Syncfusion JavaScript (ES6) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Read only default 
documentation: ug
domainurl: ##DomainURL##
---

# Read only default in JavaScript (ES6) Document editor control

In this article, we are going to see how to open a document in read only mode by default in DocumentEditor & DocumentEditorContainer.

## Opening a document in read only mode by default in DocumentEditor

 

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/read-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/read-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/read-cs1" %}



## Opening a document in ready only mode by default in DocumentEditorContainer

 

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/read-container-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/read-container-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/read-container-cs1" %}



>Note: You can use the [`restrictEditing`](https://ej2.syncfusion.com/documentation/api/document-editor-container#restrictediting) in DocumentEditorContainer and [`isReadOnly`](https://ej2.syncfusion.com/documentation/api/document-editor#isreadonly) in DocumentEditor based on your requirement to change component to read only mode.