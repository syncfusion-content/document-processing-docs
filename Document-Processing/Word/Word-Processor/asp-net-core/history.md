---
layout: post
title: History in ASP.NET Core DOCX Editor | Syncfusion
description: History in ASP.NET Core DOCX Editor tracks editing actions to enable undo and redo operations for efficient document editing.
platform: document-processing
control: History
documentation: ug
---


# History in ASP.NET Core DOCX Editor

[ASP.NET Core DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/asp-net-core-docx-editor) (Document Editor) tracks the history of all editing actions done in the document, which allows undo and redo functionality.

## Enable or disable history

Inject the `EditorHistory` module in your application to provide history preservation functionality for `DocumentEditor`.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/document-editor/asp-net-core/history/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Document-editor.cs" %}
{% include code-snippet/document-editor/asp-net-core/history/document-editor.cs %}
{% endhighlight %}
{% endtabs %}


You can enable or disable history preservation for a Document Editor instance any time using the `enableEditorHistory` property.

```typescript
editor.enableEditorHistory = false;
```

## Undo and redo

You can perform undo and redo by `CTRL+Z` and `CTRL+Y` keyboard shortcuts. Document Editor exposes API to do it programmatically. To undo the last editing operation in Document Editor, refer to the following sample code.

```typescript
editor.editorHistory.undo();
```

To redo the last undone action, refer to the following code example.

```typescript
editor.editorHistory.redo();
```

## Stack size

History of editing actions will be maintained in stack, so that the last item will be reverted first. By default, Document Editor limits the size of undo and redo stacks to 500 each respectively. However, you can customize this limit.

```typescript
editor.editorHistory.undoLimit = 400;
editor.editorHistory.redoLimit = 400;
```

## See Also

* [Feature modules](../asp-net-core/feature-module)
* [Keyboard shortcuts](../asp-net-core/keyboard-shortcut)
