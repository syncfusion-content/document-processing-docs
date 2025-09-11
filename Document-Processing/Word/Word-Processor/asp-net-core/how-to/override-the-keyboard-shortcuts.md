---
layout: post
title: Override The Keyboard Shortcuts in Document Editor Component
description: Learn here all about override the keyboard shortcuts in Syncfusion Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Override The Keyboard Shortcuts
documentation: ug
---


# How to override the keyboard shortcuts in document editor

Document editor triggers the [`keyDown`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_KeyDown) event every time when any key is entered and provides an instance of `DocumentEditorKeyDownEventArgs`. You can use the `isHandled` property to override the keyboard shortcut behavior.

## Preventing default keyboard shortcut

The following code shows how to prevent the `CTRL + C` keyboard shortcut for copying selected content in document editor.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/prevent-default/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Prevent-default.cs" %}
{% endhighlight %}{% endtabs %}


## Override or define the keyboard shortcut

Override or define a new keyboard shortcut behavior instead of preventing the keyboard shortcut.

For example, `Ctrl + S` keyboard shortcut saves the document in SFDT format by default, and there is no behavior for `Ctrl + Alt + S`. The following code demonstrates how to override the `Ctrl + S` shortcut to save a document in DOCX format and define `Ctrl + Alt + S` to save the document in SFDT format.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/override/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Override.cs" %}
{% endhighlight %}{% endtabs %}

