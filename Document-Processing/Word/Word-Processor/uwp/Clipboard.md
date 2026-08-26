---
title: Clipboard in UWP DOCX Editor | Syncfusion
description: The clipboard in UWP DOCX Editor offers copy and paste support in rich text, text, and image formats, enabling flexible content transfer.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: clipboard,cut,copy,paste,cutcommand,copycommand,pastecommand,rich-text-format,clipboard-formats
---
# Clipboard in UWP DOCX Editor

SfRichTextBoxAdv supports the clipboard through the [`CutCommand`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.CutCommand.html), [`CopyCommand`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.CopyCommand.html), and [`PasteCommand`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.PasteCommand.html), enabling you to copy and paste content in the following formats.

## Supported clipboard formats

| Command | Rich text format | Text | Image |
| --- | --- | --- | --- |
| `CutCommand` | ✔ | ✔ | ✔ |
| `CopyCommand` | ✔ | ✔ | ✔ |
| `PasteCommand` | ✔ | ✔ | ✔ |

## UI commands for clipboard operations

The following code example demonstrates how to bind commands for accessing clipboard operations. 

{% tabs %}
{% highlight xaml %}
<!-- Binds the button to the CutCommand -->
<Button Content="Cut" Command="{Binding ElementName=richTextBoxAdv, Path=CutCommand, Mode=TwoWay}" />
<!-- Binds the button to the CopyCommand -->
<Button Content="Copy" Command="{Binding ElementName=richTextBoxAdv, Path=CopyCommand, Mode=TwoWay}" />
<!-- Binds the button to the PasteCommand -->
<Button Content="Paste" Command="{Binding ElementName=richTextBoxAdv, Path=PasteCommand, Mode=TwoWay}" />


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

N> You can also use the standard keyboard shortcuts CTRL + X, CTRL + C, and CTRL + V to cut, copy, or paste when `SfRichTextBoxAdv` has focus.

## See also

- [Commands in UWP RichTextBox](./Commands)
- [Document Structure in UWP RichTextBox](./Document-Structure)
- [Document Properties in UWP RichTextBox](./Document-Properties)
