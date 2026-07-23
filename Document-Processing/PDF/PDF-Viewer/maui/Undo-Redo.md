---
layout: post
title: Undo and Redo actions in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to undo and redo annotation changes using the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Undo and Redo in .NET MAUI PDF Viewer (SfPdfViewer)

If you performed any undesired actions when adding, removing, moving, resizing, or editing annotations, you can undo and redo the action to restore the previous state. This section explains how to undo and redo changes made to annotations.

For desktop platforms such as Windows and macOS, you can also use the following shortcut keys to perform the actions.

<table>
<tr>
<th>Action & Shortcut keys</th>
<th>Windows</th>
<th>macOS</th>
</tr>
<tr>
<th>Undo</th>
<td><code>Ctrl</code> + <code>z</code></td>
<td><code>Command</code> + <code>z</code></td>
</tr>
<tr>
<th>Redo</th>
<td><code>Ctrl</code> + <code>y</code></td>
<td><code>Command</code> + <code>y</code></td>
</tr>
</table>

## Undo

You can undo the most recent action performed on the annotations using the [UndoCommand](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_UndoCommand) of the [SfPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html). The following code examples show how to bind the command to a button in XAML to perform the action on button click, and how to execute the command programmatically.

{% tabs %}
{% highlight XAML %}
<syncfusion:SfPdfViewer x:Name="PdfViewer"/>
<Button x:Name="Undo" Command="{Binding Path=UndoCommand,Source={x:Reference PdfViewer}}"/>
{% endhighlight %}
{% highlight C# %}
void PerformUndo()
{
    // Undo the last operation using the UndoCommand of `SfPdfViewer` instance.
    PdfViewer.UndoCommand.Execute(true);
}
{% endhighlight %}
{% endtabs %}

## Redo

You can redo the last undone action using the [RedoCommand](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_RedoCommand) of the [SfPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html). The following code examples show how to bind the command to a button in XAML to perform the action on button click, and how to execute the command programmatically.

{% tabs %}
{% highlight XAML %}
<syncfusion:SfPdfViewer x:Name="PdfViewer"/>
<Button x:Name="Redo" Command="{Binding Path=RedoCommand,Source={x:Reference PdfViewer}}"/>
{% endhighlight %}
{% highlight C# %}
void PerformRedo()
{
    // Redo the last operation using the RedoCommand of `SfPdfViewer` instance.
    PdfViewer.RedoCommand.Execute(true);
}
{% endhighlight %}
{% endtabs %}

## Limitations

The undo and redo history covers annotation changes only. The following operations **cannot** be undone:

* Saving a document using [SaveDocumentAsync](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_SaveDocumentAsync).
* Applying redaction using [RedactAsync](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_RedactAsync_System_Threading_CancellationToken_).
* Unloading a document using [UnloadDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_UnloadDocument). Unloading clears the undo/redo history entirely.

N> The undo/redo stack is also cleared when a new document is loaded.

## See Also

- [Annotations Overview](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/annotations-overview)
- [Add, Remove, and Edit Annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/add-remove-modify-annotations)
- [Keyboard Shortcuts](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/keyboard-shortcuts)
- [Redaction](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/redaction)
- [Save a Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/save-a-document)
- [Toolbar Customization](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/toolbar-customization)
