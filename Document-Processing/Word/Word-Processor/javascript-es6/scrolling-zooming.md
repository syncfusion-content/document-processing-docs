---
layout: post
title: Scrolling zooming in JavaScript (ES6) Document editor control | Syncfusion
description: Learn here all about Scrolling zooming in Syncfusion JavaScript (ES6) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Scrolling zooming 
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling zooming in JavaScript (ES6) Document editor control

The Document Editor renders the document as page by page. You can scroll through the pages by mouse wheel or touch interactions. You can also scroll through the page by using ‘scrollToPage()’ method of Document Editor instance. Refer to the following code example.

 

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/scrolling-zooming-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/scrolling-zooming-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/scrolling-zooming-cs1" %}

> Calling this method brings the specified page into view but doesn’t move selection. Hence this method will work by default. That is, it works even if selection is not enabled.

In case, if you wish to move the selection to any page in Document Editor and bring it into view, you can use ‘goToPage()’ method of selection instance. Refer to the following code example.

 

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/scrolling-zooming-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/scrolling-zooming-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/scrolling-zooming-cs2" %}

## Zooming

You can scale the contents in Document Editor ranging from 10% to 500% of the actual size. You can achieve this using mouse or touch interactions. You can also use ‘zoomFactor’ property of Document Editor instance. The value can be specified in a range from 0.1 to 5. Refer to the following code example.

```ts
import { DocumentEditor } from '@syncfusion/ej2-documenteditor';

//Initialize the Document Editor module.
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false, serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});

// Enable all the built in modules.
documenteditor.enableAllModules();

documenteditor.appendTo('#DocumentEditor');
//set zoom factor.
documenteditor.zoomFactor = 3;
```

## Page Fit Type

Apart from specifying the zoom factor as value, the Document Editor provides option to specify page fit options such as fit to full page or fit to page width. You can set this option using ‘fitPage’ method of Document Editor instance. Refer to the following code example.

```ts
import { DocumentEditor } from '@syncfusion/ej2-documenteditor';
//Initialize the Document Editor module.
let documenteditor: DocumentEditor = new DocumentEditor({
    isReadOnly: false, serviceUrl: 'https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/'
});

// Enable all the built in modules.
documenteditor.enableAllModules();

documenteditor.appendTo('#DocumentEditor');
//Set zoom factor to fit page width.
documenteditor.fitPage('FitPageWidth');
```

## Zoom option using UI

The following code example shows how to provide zoom options in Document Editor.
 

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/scrolling-zooming-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/scrolling-zooming-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/scrolling-zooming-cs3" %}
