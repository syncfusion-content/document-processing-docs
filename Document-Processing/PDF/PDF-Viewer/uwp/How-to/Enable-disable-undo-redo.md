---
layout: post
title: How to Support to disable the undo and redo operations | Syncfusion
description: Learn how to support to disable the undo and redo operations in Syncfusion UWP PDF Viewer with examples and implementation details.
platform: document-processing
control: PDF viewer
documentation: ug
---

# How to Support disable undo and redo in UWP PDF Viewer

The undo operation using both the `UndoCommand` and keyboard shortcut Ctrl+Z can be enabled or disabled using the `IsUndoEnabled` property. The default value of this property is true.
{% tabs %}
{% highlight c# %}

PdfViewer.IsUndoEnabled = false;

{% endhighlight %}
{% endtabs %}
     
N>Redo can be performed only if undo is enabled. So, enabling or disabling undo, effectively enables and disables redo as well.

## See Also
- [Annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/working-with-annotations)
- [Text selection](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/select-and-copy-text)
- [Custom toolbar](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/creating-custom-toolbar)