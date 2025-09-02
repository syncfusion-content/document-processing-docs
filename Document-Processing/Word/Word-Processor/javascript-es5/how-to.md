---
layout: post
title: How to in ##Platform_Name## Document editor control | Syncfusion
description: Learn here all about How to in Syncfusion ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: How to 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to in ##Platform_Name## Document editor control

Document Editor triggers the [`keyDown`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documentEditorKeyDownEventArgs/) event every time when any key is entered and provides an instance of `DocumentEditorKeyDownEventArgs`. You can use the `isHandled` property to override the keyboard shortcut behavior.

## Preventing default keyboard shortcut

The following code shows how to prevent the `CTRL + C` keyboard shortcut for copying selected content in Document Editor.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/document-editor/prevent-keyboard-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/document-editor/prevent-keyboard-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/javascript-es5/document-editor/prevent-keyboard-cs1" %}

## Override or define the keyboard shortcut

Override or define a new keyboard shortcut behavior instead of preventing the keyboard shortcut.

For example, `Ctrl + S` keyboard shortcut saves the document in SFDT format by default, and there is no behavior for `Ctrl + Alt + S`. The following code demonstrates how to override the `Ctrl + S` shortcut to save a document in DOCX format and define `Ctrl + Alt + S` to save the document in SFDT format.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/document-editor/override-keyboard-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/document-editor/override-keyboard-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/document-editor/javascript-es5/document-editor/override-keyboard-cs1" %}