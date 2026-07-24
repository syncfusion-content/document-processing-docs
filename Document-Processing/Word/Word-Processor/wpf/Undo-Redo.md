---
title: Undo Redo in WPF RichTextBox control | Syncfusion
description: Learn here all about Undo Redo support in Syncfusion WPF RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: undo-redo,history,undo,redo,editor-settings,is-undo-enabled
---
# Undo Redo in WPF RichTextBox (SfRichTextBoxAdv)

The [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) (SfRichTextBoxAdv) provides history preservation support, which means each editing operation performed on its document content will be preserved in history. The undo and redo behavior is configured through the [EditorSettings](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.EditorSettings.html) class. You can easily undo any editing action. The undone actions will also be preserved in a separate stack enabling you to redo the action.

N> Currently, the number of actions that can be preserved in both undo and redo stacks is limited to 500.

## UI Command to perform undo/redo operations

The following code example demonstrates how to bind the [UndoCommand](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_UndoCommand) and [RedoCommand](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_RedoCommand) commands for performing undo and redo operations.
{% tabs %}
{% highlight xaml %}
<!-- Binds button to the UndoCommand -->
<Button Content="Undo" Command="RichTextBoxAdv:SfRichTextBoxAdv.UndoCommand" CommandTarget="{Binding ElementName=richTextBoxAdv}" />
<!-- Binds button to the RedoCommand -->
<Button Content="Redo" Command="RichTextBoxAdv:SfRichTextBoxAdv.RedoCommand" CommandTarget="{Binding ElementName=richTextBoxAdv}" />


{% endhighlight %}

{% endtabs %}

N> In order to perform undo/redo, the standard keyboard shortcuts such as CTRL + Z, CTRL + Y can also be used.

## Enable/Disable Undo Redo

### Disable Undo for all the editing actions

In SfRichTextBoxAdv, the Undo functionality is enabled by default. You can disable it by using the [IsUndoEnabled](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.EditorSettings.html#Syncfusion_Windows_Controls_RichTextBoxAdv_EditorSettings_IsUndoEnabled) property of the `EditorSettings` class.

The following code example demonstrates how to disable the Undo functionality in `SfRichTextBoxAdv`.
{% tabs %}
{% highlight xaml %}
<Syncfusion:SfRichTextBoxAdv x:Name="richTextBoxAdv">
	<Syncfusion:SfRichTextBoxAdv.EditorSettings>
		<Syncfusion:EditorSettings IsUndoEnabled="False"/>
	</Syncfusion:SfRichTextBoxAdv.EditorSettings>
</Syncfusion:SfRichTextBoxAdv>


{% endhighlight %}
{% highlight c# %}
// Defines the SfRichTextBoxAdv control with undo operation disabled.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
richTextBoxAdv.EditorSettings.IsUndoEnabled = false;


{% endhighlight %}
{% highlight VB %}
' Defines the SfRichTextBoxAdv control with undo operation disabled.
Dim richTextBoxAdv As New SfRichTextBoxAdv()
richTextBoxAdv.EditorSettings.IsUndoEnabled = false


{% endhighlight %}

{% endtabs %}

N> This API is supported starting from release version v18.1.0.X.

### Disable Undo for style modification actions

In SfRichTextBoxAdv, the Undo functionality is enabled by default for all the editing operations. If you want to disable the Undo functionality for modifying an existing style only, you can disable it by using the [CanUndoStyle](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.EditorSettings.html#Syncfusion_Windows_Controls_RichTextBoxAdv_EditorSettings_CanUndoStyle) property of the `EditorSettings` class.

The following code example demonstrates how to disable the Undo support for modifying an existing style in `SfRichTextBoxAdv`.
{% tabs %}
{% highlight xaml %}
<Syncfusion:SfRichTextBoxAdv x:Name="richTextBoxAdv">
	<Syncfusion:SfRichTextBoxAdv.EditorSettings>
		<Syncfusion:EditorSettings CanUndoStyle="False"/>
	</Syncfusion:SfRichTextBoxAdv.EditorSettings>
</Syncfusion:SfRichTextBoxAdv>


{% endhighlight %}
{% highlight c# %}
// Defines the SfRichTextBoxAdv control with document style undo operation disabled.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
richTextBoxAdv.EditorSettings.CanUndoStyle = false;


{% endhighlight %}
{% highlight VB %}
' Defines the SfRichTextBoxAdv control with document style undo operation disabled.
Dim richTextBoxAdv As New SfRichTextBoxAdv()
richTextBoxAdv.EditorSettings.CanUndoStyle = False


{% endhighlight %}

{% endtabs %}

N> This API is supported starting from release version v18.1.0.X.

N> You can refer to our [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) feature tour page for its groundbreaking feature representations. You can also explore our [WPF RichTextBox example](https://github.com/syncfusion/docx-editor-sdk-wpf-demos) to know how to render and configure the editing tool.

## See Also

- [Commands in WPF RichTextBox](Commands)
- [Document Structure in WPF RichTextBox](Document-Structure)
- [Document Properties in WPF RichTextBox](Document-Properties)