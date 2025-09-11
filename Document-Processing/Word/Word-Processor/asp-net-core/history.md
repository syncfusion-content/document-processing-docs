---
layout: post
title: History in Document Editor Component | Syncfusion
description: Learn here all about history in Syncfusion Document Editor component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: History
documentation: ug
---


# History in Document Editor Component

Document editor tracks the history of all editing actions done in the document, which allows undo and redo functionality.

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


You can enable or disable history preservation for a document editor instance any time using the `enableEditorHistory` property.

```typescript
editor.enableEditorHistory = false;
```

## Undo and redo

You can perform undo and redo by `CTRL+Z` and `CTRL+Y` keyboard shortcuts. Document editor exposes API to do it programmatically. To undo the last editing operation in document editor, refer to the following sample code.

```typescript
editor.editorHistory.undo();
```

To redo the last undone action, refer to the following code example.

```typescript
editor.editorHistory.redo();
```

## Stack size

History of editing actions will be maintained in stack, so that the last item will be reverted first. By default, document editor limits the size of undo and redo stacks to 500 each respectively. However, you can customize this limit.

```typescript
editor.editorHistory.undoLimit = 400;
editor.editorHistory.redoLimit = 400;
```

## See Also

* [Feature modules](../asp-net-core/feature-module)
* [Keyboard shortcuts](../asp-net-core/keyboard-shortcut)
