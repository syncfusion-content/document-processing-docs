---
layout: post
title: Keyboard Shortcuts in Vue Document Editor Component | Syncfusion
description: Learn here all about override the keyboard shortcuts in Syncfusion Essential Vue Document Editor component, it's elements and more.
control: Override the keyboard shortcuts 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Override the Keyboard Shortcuts in Vue Document Editor Component

Document Editor triggers the [`keyDown`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#keydown) event every time when any key is entered and provides an instance of [`DocumentEditorKeyDownEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documentEditorKeyDownEventArgs/). You can use the [`isHandled`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documentEditorKeyDownEventArgs#ishandled) property to override the keyboard shortcut behavior.

## Preventing default keyboard shortcut

The following code shows how to prevent the `CTRL + C` keyboard shortcut for copying selected content in Document Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/export-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/document-editor/vue/export-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/vue/export-cs6" %}

## Override or define the keyboard shortcut

Override or define a new keyboard shortcut behavior instead of preventing the keyboard shortcut.

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