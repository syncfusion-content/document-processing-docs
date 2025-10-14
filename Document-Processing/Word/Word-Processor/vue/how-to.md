---
layout: post
title: How to in Vue Document editor component | Syncfusion
description: Learn here all about How to in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: How to 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# How to in Vue Document editor component

Document Editor triggers the [`keyDown`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documentEditorKeyDownEventArgs/) event every time when any key is entered and provides an instance of `DocumentEditorKeyDownEventArgs`. You can use the `isHandled` property to override the keyboard shortcut behavior.

## Preventing default keyboard shortcut

The following code shows how to prevent the `CTRL + C` keyboard shortcut for copying selected content in Document Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/export-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/export-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/export-cs4" %}

## Override or define the keyboard shortcut

Override or define a new keyboard shortcut behavior instead of preventing the keyboard shortcut.

For example, `Ctrl + S` keyboard shortcut saves the document in SFDT format by default, and there is no behavior for `Ctrl + Alt + S`. The following code demonstrates how to override the `Ctrl + S` shortcut to save a document in DOCX format and define `Ctrl + Alt + S` to save the document in SFDT format.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/export-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/export-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/export-cs5" %}