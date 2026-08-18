---
layout: post
title: How to Override Keyboard Shortcuts in Angular DOCX Editor | Syncfusion
description: Override default keyboard shortcuts in Syncfusion® Angular DOCX Editor to customize user interactions and implement application-specific commands.
platform: document-processing
control: Override the keyboard shortcuts
documentation: ug
domainurl: ##DomainURL##
---

# How to Override Keyboard Shortcuts in Angular DOCX Editor

[Angular Document Editor](https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor) triggers the [`keyDown`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#keydown) event every time any key is entered and provides an instance of [`DocumentEditorKeyDownEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documentEditorKeyDownEventArgs). You can use the [`isHandled`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documentEditorKeyDownEventArgs#ishandled) property to override the keyboard shortcut behavior.

## Prevent the default keyboard shortcut

The following code shows how to prevent the `CTRL + C` keyboard shortcut for copying selected content in the Document Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/prevent-keyboard-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/prevent-keyboard-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/document-editor/angular/prevent-keyboard-cs2" %}

## Override or define a keyboard shortcut

You can override or define a new keyboard shortcut behavior instead of preventing the default behavior.

For example, `Ctrl + S` keyboard shortcut saves the document in SFDT format by default, and there is no behavior for `Ctrl + Alt + S`. The following code demonstrates how to override the `Ctrl + S` shortcut to save a document in DOCX format and define `Ctrl + Alt + S` to save the document in SFDT format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/angular/override-keyboard-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/angular/override-keyboard-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/document-editor/angular/override-keyboard-cs2" %}