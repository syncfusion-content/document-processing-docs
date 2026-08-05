---
title: Undo Redo in UWP RichTextBox control | Syncfusion
description: Learn here all about Undo Redo support in Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: undo,redo,undo-redo,history,undocommand,redocommand,isundoenabled,canundostyle,editorsettings
---
# Undo redo in UWP RichTextBox

SfRichTextBoxAdv preserves the history of every editing operation performed on its document, so any action can be undone with ease. Undone actions are kept in a separate stack, enabling you to redo them.

N> By default, the undo and redo stacks each preserve up to 500 actions.

## UI command to perform undo and redo operations

The following code example demonstrates how to bind commands for performing undo and redo operations.

N> The `SfRichTextBoxAdv` control is referenced by `ElementName=richTextBoxAdv`. Ensure the control is declared in the same XAML scope.

{% tabs %}
{% highlight xaml %}
<!-- Binds button to the UndoCommand -->
<Button Content="Undo" Command="{Binding ElementName=richTextBoxAdv, Path=UndoCommand}" />
<!-- Binds button to the RedoCommand -->
<Button Content="Redo" Command="{Binding ElementName=richTextBoxAdv, Path=RedoCommand}" />


{% endtabs %}

The following code example demonstrates how to execute the undo and redo commands programmatically.

{% tabs %}
{% highlight c# %}
// Executes the UndoCommand on SfRichTextBoxAdv.
richTextBoxAdv.UndoCommand.Execute(null);
// Executes the RedoCommand on SfRichTextBoxAdv.
richTextBoxAdv.RedoCommand.Execute(null);


{% endtabs %}

N> You can also use the standard keyboard shortcuts Ctrl+Z and Ctrl+Y to perform undo/redo.

## Enable or disable undo and redo

N> The `IsUndoEnabled` and `CanUndoStyle` properties are available starting from Syncfusion UWP RichTextBox v18.1.0.X.

### Disable undo for all editing actions

Undo is enabled by default in SfRichTextBoxAdv. To disable it, set the `IsUndoEnabled` property of the [`EditorSettings`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.EditorSettings.html) class to `false`.

The following code example demonstrates how to disable undo on SfRichTextBoxAdv.

{% tabs %}
{% highlight xaml %}
<Syncfusion:SfRichTextBoxAdv x:Name="richTextBoxAdv" xmlns:Syncfusion="using:Syncfusion.UI.Xaml.RichTextBoxAdv">
	<Syncfusion:SfRichTextBoxAdv.EditorSettings>
		<Syncfusion:EditorSettings IsUndoEnabled="False"/>
	</Syncfusion:SfRichTextBoxAdv.EditorSettings>
</Syncfusion:SfRichTextBoxAdv>


{% endhighlight %}
{% highlight c# %}
// Initializes the SfRichTextBoxAdv control with undo disabled.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
richTextBoxAdv.EditorSettings.IsUndoEnabled = false;


{% endtabs %}

### Disable undo for style modification actions

SfRichTextBoxAdv enables undo for all editing operations by default. To disable undo only for modifications to an existing style, set the `CanUndoStyle` property of the `EditorSettings` class to `false`.

The following code example demonstrates how to disable undo for style modifications on SfRichTextBoxAdv.

{% tabs %}
{% highlight xaml %}
<Syncfusion:SfRichTextBoxAdv x:Name="richTextBoxAdv" xmlns:Syncfusion="using:Syncfusion.UI.Xaml.RichTextBoxAdv">
	<Syncfusion:SfRichTextBoxAdv.EditorSettings>
		<Syncfusion:EditorSettings CanUndoStyle="False"/>
	</Syncfusion:SfRichTextBoxAdv.EditorSettings>
</Syncfusion:SfRichTextBoxAdv>


{% endhighlight %}
{% highlight c# %}
// Initializes the SfRichTextBoxAdv control with undo for style modifications disabled.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
richTextBoxAdv.EditorSettings.CanUndoStyle = false;


{% endtabs %}

## See Also

- [SfRichTextBoxAdv API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [EditorSettings API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.EditorSettings.html)
- [Commands in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/commands)
- [Getting started with UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/getting-started)
