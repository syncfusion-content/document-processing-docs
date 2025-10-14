---
layout: post
title: Override the keyboard shortcuts in JavaScript (ES5) Document editor control | Syncfusion
description: Learn here all about Override the keyboard shortcuts in Syncfusion JavaScript (ES5) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Override the keyboard shortcuts 
documentation: ug
domainurl: ##DomainURL##
---

# Override the keyboard shortcuts in JavaScript (ES5) Document editor control

Document Editor triggers the [`keyDown`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#keydown) event every time when any key is entered and provides an instance of [`DocumentEditorKeyDownEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documentEditorKeyDownEventArgs/). You can use the [`isHandled`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documentEditorKeyDownEventArgs#ishandled) property to override the keyboard shortcut behavior.

## Preventing default keyboard shortcut

The following code shows how to prevent the `CTRL + C` keyboard shortcut for copying selected content in Document Editor.

{% tabs %}
{% highlight js tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es5/document-editor/prevent-keyboard-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/document-editor/prevent-keyboard-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/prevent-keyboard-cs2" %}

## Override or define the keyboard shortcut

Override or define a new keyboard shortcut behavior instead of preventing the keyboard shortcut.

For example, `Ctrl + S` keyboard shortcut saves the document in SFDT format by default, and there is no behavior for `Ctrl + Alt + S`. The following code demonstrates how to override the `Ctrl + S` shortcut to save a document in DOCX format and define `Ctrl + Alt + S` to save the document in SFDT format.

{% tabs %}
{% highlight js tabtitle="index.ts" %}
{% include code-snippet/document-editor/javascript-es5/document-editor/override-keyboard-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/document-editor/override-keyboard-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/override-keyboard-cs2" %}