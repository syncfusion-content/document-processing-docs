---
title: Undo Redo in UWP DOCX Editor | Syncfusion
description: The undo redo feature in UWP DOCX Editor offers history preservation support, enabling editing actions to be preserved in undo and redo stacks.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: undo,redo,undo-redo,history,undocommand,redocommand,isundoenabled,canundostyle,editorsettings
---
# Undo Redo in UWP DOCX Editor

SfRichTextBoxAdv preserves the history of every editing operation performed on its document, so any action can be undone with ease. Undone actions are kept in a separate stack, enabling you to redo them.

N> By default, the undo and redo stacks each preserve up to 500 actions.

## UI command to perform undo and redo operations

The following code example demonstrates how to bind commands for performing undo and redo operations.

{% tabs %}
{% highlight xaml %}
<!-- Binds button to the UndoCommand -->
<Button Content="Undo" Command="{Binding ElementName=richTextBoxAdv, Path=UndoCommand, Mode=TwoWay}" />
<!-- Binds button to the RedoCommand -->
<Button Content="Redo" Command="{Binding ElementName=richTextBoxAdv, Path=RedoCommand, Mode=TwoWay}" />

{% endhighlight %}
{% endtabs %}

The following code example demonstrates how to execute the undo and redo commands programmatically.

{% tabs %}
{% highlight c# %}
// Executes the UndoCommand on SfRichTextBoxAdv.
richTextBoxAdv.UndoCommand.Execute(null);
// Executes the RedoCommand on SfRichTextBoxAdv.
richTextBoxAdv.RedoCommand.Execute(null);

{% endhighlight %}
{% endtabs %}

N> You can also use the standard keyboard shortcuts Ctrl+Z and Ctrl+Y to perform undo/redo.

## Enable or disable undo and redo

### Disable undo for all editing actions

Undo is enabled by default in SfRichTextBoxAdv. To disable it, set the `IsUndoEnabled` property of the [`EditorSettings`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_UI_Xaml_RichTextBoxAdv_SfRichTextBoxAdv_EditorSettings) class to `false`.

The following code example demonstrates how to disable undo on SfRichTextBoxAdv.

{% tabs %}
{% highlight xaml %}

<Syncfusion:SfRichTextBoxAdv x:Name="richTextBoxAdv">
	<Syncfusion:SfRichTextBoxAdv.EditorSettings>
		<Syncfusion:EditorSettings IsUndoEnabled="False"/>
	</Syncfusion:SfRichTextBoxAdv.EditorSettings>
</Syncfusion:SfRichTextBoxAdv>

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}
// Initializes the SfRichTextBoxAdv control with undo disabled.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
richTextBoxAdv.EditorSettings.IsUndoEnabled = false;

{% endhighlight %}
{% endtabs %}

### Disable undo for style modification actions

SfRichTextBoxAdv enables undo for all editing operations by default. To disable undo only for modifications to an existing style, set the `CanUndoStyle` property of the `EditorSettings` class to `false`.

The following code example demonstrates how to disable undo for style modifications on SfRichTextBoxAdv.

{% tabs %}
{% highlight xaml %}
<Syncfusion:SfRichTextBoxAdv x:Name="richTextBoxAdv">
	<Syncfusion:SfRichTextBoxAdv.EditorSettings>
		<Syncfusion:EditorSettings CanUndoStyle="False"/>
	</Syncfusion:SfRichTextBoxAdv.EditorSettings>
</Syncfusion:SfRichTextBoxAdv>


{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}

// Initializes the SfRichTextBoxAdv control with undo for style modifications disabled.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
richTextBoxAdv.EditorSettings.CanUndoStyle = false;

{% endhighlight %}
{% endtabs %}

N> The `IsUndoEnabled` and `CanUndoStyle` properties are available starting from Syncfusion UWP RichTextBox v18.1.0.X.

## See also

- [Commands in UWP RichTextBox](./Commands)
- [Selection in UWP RichTextBox](./Selection)
- [Getting started with UWP RichTextBox](./Getting-Started)