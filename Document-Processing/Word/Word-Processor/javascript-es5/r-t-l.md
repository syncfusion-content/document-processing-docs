---
layout: post
title: Right to Left in TypeScript DOCX Editor | Syncfusion
description: Right-to-left support in JavaScript DOCX Editor enables RTL user interfaces, including menus, dialogs, and text direction for RTL languages.
platform: document-processing
control: Right to Left
documentation: ug
domainurl: ##DomainURL##
---

# Right to Left in JavaScript DOCX Editor

[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) provides RTL (right-to-left) support. This can be enabled using the `enableRtl` property.

## Enable right-to-left layout

Set the [`enableRtl`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documenteditormodel#enablertl) property to `true` to render the DOCX Editor user interface — including the toolbar or ribbon, menus, dialogs, and property pane - in a right-to-left layout.

```javascript
var container = new ej.documenteditor.DocumentEditorContainer({
    enableToolbar: true, 
    enableRtl: true,
    height: '590px'
});

ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
```

## Localize the DOCX Editor for RTL languages

To fully localize the DOCX Editor for right-to-left languages such as Arabic, set the [`locale`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documenteditormodel#locale) property to a right-to-left culture and load the localized strings. This translates the built-in texts of the toolbar, dialogs, and context menus into the specified language.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/rtl-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/rtl-cs1" %}

## Online Demo

Explore how to enable right-to-left layout in Word documents using the JavaScript (ES5) DOCX Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/javascript-es5/#/material3/document-editor/right-to-left.html).
