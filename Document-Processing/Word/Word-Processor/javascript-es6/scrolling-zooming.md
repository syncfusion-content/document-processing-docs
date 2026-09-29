---
layout: post
title: Scrolling and Zooming in TypeScript DOCX Editor | Syncfusion
description: The scrolling and zooming in TypeScript DOCX Editor enables smooth document navigation and adjustable zoom levels for better viewing.
platform: document-processing
control: DOCX Editor
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling and Zooming in TypeScript DOCX Editor

The [TypeScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) renders the document page by page. You can scroll through the pages by mouse wheel or touch interactions. You can also scroll through the pages by using the `scrollToPage()` method of the DOCX Editor instance. Refer to the following code example.

 

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/scrolling-zooming-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/scrolling-zooming-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/scrolling-zooming-cs1" %}

N> Calling this method brings the specified page into view but doesn't move selection. Hence this method will work by default. That is, it works even if selection is not enabled.

If you wish to move the selection to any page in the DOCX Editor and bring it into view, you can use the `goToPage()` method of the selection instance. Refer to the following code example.

 

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

You can scale the contents in the DOCX Editor ranging from 10% to 500% of the actual size. You can achieve this using mouse or touch interactions. You can also use the `zoomFactor` property of the DOCX Editor instance. The value can be specified in a range from 0.1 to 5. Refer to the following code example.

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

## Page fit type

Apart from specifying the zoom factor as a value, the DOCX Editor provides an option to specify page fit options such as fit to full page or fit to page width. You can set this option using the `fitPage` method of the DOCX Editor instance. Refer to the following code example.

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

The following code example shows how to provide zoom options in the DOCX Editor.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es6/scrolling-zooming-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es6/scrolling-zooming-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es6/scrolling-zooming-cs3" %}
