---
layout: post
title: Override Keyboard Shortcuts in JavaScript DOCX Editor | Syncfusion
description: Override default keyboard shortcuts in Syncfusion® JavaScript DOCX Editor to customize user interactions and implement application-specific commands.
platform: document-processing
control: Override Keyboard Shortcuts
documentation: ug
domainurl: ##DomainURL##
---

# How to Override Keyboard Shortcuts in JavaScript DOCX Editor

[JavaScript DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/javascript-docx-editor) (Document Editor) triggers the [`keyDown`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor#keydown) event every time a key is pressed and provides an instance of [`DocumentEditorKeyDownEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documentEditorKeyDownEventArgs) as the event arguments. You can use the [`isHandled`](https://ej2.syncfusion.com/javascript/documentation/api/document-editor/documentEditorKeyDownEventArgs#ishandled) property to override the keyboard shortcut behavior.

## Preventing the Default Keyboard Shortcut

The following code shows how to prevent the `Ctrl + C` keyboard shortcut for copying selected content in the DOCX Editor.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/prevent-keyboard-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/prevent-keyboard-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/prevent-keyboard-cs2" %}

## Override or Define the Keyboard Shortcut

Override or define a new keyboard shortcut behavior instead of preventing the keyboard shortcut.

For example, the `Ctrl + S` keyboard shortcut saves the document in SFDT format by default, and there is no behavior for `Ctrl + Alt + S`. The following code demonstrates how to override the `Ctrl + S` shortcut to save a document in DOCX format and define `Ctrl + Alt + S` to save the document in SFDT format.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/document-editor/javascript-es5/override-keyboard-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/javascript-es5/override-keyboard-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/document-editor/javascript-es5/override-keyboard-cs2" %}