---
layout: post
title: History in ASP.NET MVC DOCX Editor Component | Syncfusion
description: Learn here all about history in Syncfusion ASP.NET MVC Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: History
documentation: ug
---


# History in ASP.NET MVC Document Editor

The [ASP.NET MVC DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-mvc-docx-editor) (Document Editor) tracks the history of all editing actions done in the document, which allows undo and redo functionality.

## Enable or disable history

Inject the `EditorHistory` module in your application to provide history preservation functionality for `DocumentEditor`.



{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-mvc/history/razor %}
{% endhighlight %}
{% highlight c# tabtitle="History.cs" %}
{% endhighlight %}
{% endtabs %}




You can enable or disable history preservation for a Document Editor instance at any time using the `enableEditorHistory` property.

```typescript
editor.enableEditorHistory = false;
```

## Undo and redo

You can perform undo and redo by using the `Ctrl+Z` and `Ctrl+Y` keyboard shortcuts. The Document Editor exposes APIs to do it programmatically. To undo the last editing operation in the Document Editor, refer to the following sample code.

```typescript
editor.editorHistory.undo();
```

To redo the last undone action, refer to the following code example.

```typescript
editor.editorHistory.redo();
```

## Stack size

The history of editing actions will be maintained in a stack, so that the last item will be reverted first. By default, the Document Editor limits the size of the undo and redo stacks to 500 each, respectively. However, you can customize this limit.

```typescript
editor.editorHistory.undoLimit = 400;
editor.editorHistory.redoLimit = 400;
```

## See Also

* [Feature modules](./feature-module)
* [Keyboard shortcuts](./keyboard-shortcut)
