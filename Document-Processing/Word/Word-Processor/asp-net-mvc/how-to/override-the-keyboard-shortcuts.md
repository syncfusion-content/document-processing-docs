---
layout: post
title: Override Keyboard Shortcuts in ASP.NET MVC DOCX Editor | Syncfusion
description: Override default keyboard shortcuts in Syncfusion® ASP.NET MVC DOCX Editor to customize user interactions and implement application-specific commands.
platform: document-processing
control: Override the Keyboard Shortcuts
documentation: ug
---


# How to Override Keyboard Shortcuts in ASP.NET MVC DOCX Editor

The [ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) (Document Editor) triggers the [`keyDown`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.DocumentEditor.DocumentEditor.html#Syncfusion_EJ2_DocumentEditor_DocumentEditor_KeyDown) event every time a key is entered and provides an instance of `DocumentEditorKeyDownEventArgs`. You can use the `isHandled` property to override the keyboard shortcut behavior.

## Preventing the default keyboard shortcut

The following code shows how to prevent the `CTRL + C` keyboard shortcut for copying the selected content in the Document Editor.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/prevent-default/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Prevent-default.cs" %}
{% endhighlight %}
{% endtabs %}



## Override or define a keyboard shortcut

Override or define a new keyboard shortcut behavior instead of preventing the keyboard shortcut.

For example, `Ctrl + S` keyboard shortcut saves the document in SFDT format by default, and there is no behavior for `Ctrl + Alt + S`. The following code demonstrates how to override the `Ctrl + S` shortcut to save a document in DOCX format and define `Ctrl + Alt + S` to save the document in SFDT format.


{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/override/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Override.cs" %}
{% endhighlight %}
{% endtabs %}

