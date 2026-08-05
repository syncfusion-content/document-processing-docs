---
title: Clipboard in UWP RichTextBox control | Syncfusion
description: Learn here all about Clipboard support in Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: clipboard,cut,copy,paste,cutcommand,copycommand,pastecommand,rich-text-format,clipboard-formats
---
# Clipboard support in UWP RichTextBox

SfRichTextBoxAdv supports the clipboard through the [`CutCommand`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#cutcommand), [`CopyCommand`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#copycommand), and [`PasteCommand`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#pastecommand), enabling you to copy and paste content in the following formats.

## Supported clipboard formats

| Command | Rich text | Text | Image |
| --- | --- | --- | --- |
| `CutCommand` | ✔ | ✔ | ✔ |
| `CopyCommand` | ✔ | ✔ | ✔ |
| `PasteCommand` | ✔ | ✔ | ✔ |

* Rich text format.

* Text.

* Image.

N> Image paste is supported when the clipboard contains a bitmap (e.g., a screenshot or copied image from Paint). The image is inserted at the current selection as an inline picture.

## UI commands for clipboard operations


The following code example demonstrates how to bind commands for accessing clipboard operations. The methods shown are members of the page or view-model that hosts `SfRichTextBoxAdv`.

N> The `ElementName=richTextBoxAdv` binding in the XAML sample targets an `SfRichTextBoxAdv` declared in the same XAML scope, e.g.:

```xaml
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" />
```

{% tabs %}
{% highlight xaml %}
<!-- Binds the button to the CutCommand -->
<Button Content="Cut" Command="{Binding ElementName=richTextBoxAdv, Path=CutCommand}" />
<!-- Binds the button to the CopyCommand -->
<Button Content="Copy" Command="{Binding ElementName=richTextBoxAdv, Path=CopyCommand}" />
<!-- Binds the button to the PasteCommand -->
<Button Content="Paste" Command="{Binding ElementName=richTextBoxAdv, Path=PasteCommand}" />


{% endhighlight %}
{% highlight c# %}
using Syncfusion.UI.Xaml.RichTextBoxAdv;

/// <summary>
/// Cuts the selected content of SfRichTextBoxAdv.
/// </summary>
public void Cut()
{
    // Executes the cut command.
    if (richTextBoxAdv.CutCommand.CanExecute(null))
        richTextBoxAdv.CutCommand.Execute(null);
}
/// <summary>
/// Copies the selected content of SfRichTextBoxAdv.
/// </summary>
public void Copy()
{
    // Executes the copy command.
    if (richTextBoxAdv.CopyCommand.CanExecute(null))
        richTextBoxAdv.CopyCommand.Execute(null);
}
/// <summary>
/// Pastes the clipboard contents into SfRichTextBoxAdv at the current selection.
/// </summary>
public void Paste()
{
    // Executes the paste command.
    if (richTextBoxAdv.PasteCommand.CanExecute(null))
        richTextBoxAdv.PasteCommand.Execute(null);
}
{% endhighlight %}
{% highlight VB %}
Imports Syncfusion.UI.Xaml.RichTextBoxAdv

' Initializes a new instance of SfRichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()

''' <summary>
''' Cuts the selected content of SfRichTextBoxAdv.
''' </summary>
Public Sub Cut()
    ' Executes the cut command.
    If richTextBoxAdv.CutCommand.CanExecute(Nothing) Then
        richTextBoxAdv.CutCommand.Execute(Nothing)
    End If
End Sub

''' <summary>
''' Copies the selected content of SfRichTextBoxAdv.
''' </summary>
Public Sub Copy()
    ' Executes the copy command.
    If richTextBoxAdv.CopyCommand.CanExecute(Nothing) Then
        richTextBoxAdv.CopyCommand.Execute(Nothing)
    End If
End Sub

''' <summary>
''' Pastes the clipboard contents into SfRichTextBoxAdv at the current selection.
''' </summary>
Public Sub Paste()
    ' Executes the paste command.
    If richTextBoxAdv.PasteCommand.CanExecute(Nothing) Then
        richTextBoxAdv.PasteCommand.Execute(Nothing)
    End If
End Sub
{% endhighlight %}
{% endtabs %}

N> `CutCommand` and `CopyCommand` return `CanExecute = false` when there is no selection in the document; `PasteCommand` returns `false` when the clipboard does not contain a supported format. The `if` checks in the samples above guard against invoking the commands in those states.

N> You can also use the standard keyboard shortcuts CTRL + X, CTRL + C, and CTRL + V to cut, copy, or paste. Make sure that `SfRichTextBoxAdv` (or the bound button) has focus for the shortcuts to apply.

## Customizing clipboard behavior

If you need to intercept or extend the default clipboard behavior, derive a custom command from `CutCommand`, `CopyCommand`, or `PasteCommand`, or wire a handler to the `CanExecute` and `Executed` callbacks. Refer to the [Commands](https://help.syncfusion.com/uwp/richtextbox/commands) topic for a worked example of overriding built-in commands.

N> The clipboard APIs (`CutCommand`, `CopyCommand`, and `PasteCommand`) are supported from Syncfusion UWP RichTextBox v17.4.0.X onwards.

## See Also

- [Commands in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/commands)
- [SfRichTextBoxAdv API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [CutCommand](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#cutcommand)
- [CopyCommand](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#copycommand)
- [PasteCommand](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#pastecommand)
- [Keyboard shortcuts and key bindings](https://help.syncfusion.com/uwp/richtextbox/keyboard-shortcuts)
