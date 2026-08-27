---
layout: post
title: How to Override Keyboard Shortcuts in Vue DOCX Editor | Syncfusion
description: Override default keyboard shortcuts in Syncfusion® Vue DOCX Editor to customize user interactions and implement application-specific commands.
control: Override the keyboard shortcuts 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to Override Keyboard Shortcuts in Vue DOCX Editor

[Vue DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/vue-docx-editor) (Document Editor) triggers the [`keyDown`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#keydown) event every time any key is entered and provides an instance of [`DocumentEditorKeyDownEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documentEditorKeyDownEventArgs). You can use the [`isHandled`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documentEditorKeyDownEventArgs#ishandled) property to override the keyboard shortcut behavior.

## Prevent the default keyboard shortcut

The following code shows how to prevent the `CTRL + C` keyboard shortcut for copying selected content in the Document Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/export-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/export-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/export-cs6" %}

## Override or define a keyboard shortcut

You can override or define a new keyboard shortcut behavior instead of preventing the default behavior.

For example, `Ctrl + S` keyboard shortcut saves the document in SFDT format by default, and there is no behavior for `Ctrl + Alt + S`. The following code demonstrates how to override the `Ctrl + S` shortcut to save a document in DOCX format and define `Ctrl + Alt + S` to save the document in SFDT format.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/export-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/export-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/export-cs7" %}