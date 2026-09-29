---
title: Commands in UWP DOCX Editor | Syncfusion
description: The commands in UWP DOCX Editor offer a loosely coupled way to handle UI actions, enabling character and paragraph formatting, clipboard, and table operations.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: commands,boldcommand,italiccommand,underlinecommand,table-commands,paragraph-commands,clipboard-commands,command-parameter
---
# Commands in UWP DOCX Editor

Commands are a way to handle user interface (UI) actions. They are a loosely coupled way to bind the UI to the logic that performs the action. The [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) supports commands for the most commonly used operations, classified below.

* Character Formatting – Bold, Italic, Underline, Strikethrough, Baseline Alignment, Font Family, Font Size, Font Color and Highlight Color.

* Paragraph Formatting – Left Indent, Right Indent, First line Indent, Text Alignment, Before Spacing, After Spacing, Line Spacing, Line Spacing Type, Increase Indent, Decrease Indent and Change List Type.

* Clipboard – Cut, Copy and Paste.

* History – Undo and Redo.

* Import and Export – Open Document, Save Document and New Document.

* Comments – New Comment, Delete Comment, Delete All Comments, Previous Comment, Next Comment and Show Comments.

* Table – Insert table, Insert row, Insert column, Delete table, Delete row, Delete column and Merge selected cells, Select cell, Select column, Select row, Select table and Align cell content.

* UI options – Show Hyperlink Dialog and Show Options Pane.

* Other – Insert Picture, Insert Hyperlink, and Change Layout Type.

## UI commands to access character formatting


The following code example demonstrates how to bind commands for applying character format.
{% tabs %}
{% highlight xaml %}
<!-- Binds the button to the BoldCommand -->
<Button Content="Bold" Command="{Binding ElementName=richTextBoxAdv, Path=BoldCommand}" />
<!-- Binds the button to the ItalicCommand -->
<Button Content="Italic" Command="{Binding ElementName=richTextBoxAdv, Path=ItalicCommand}" />

{% endhighlight %}

{% highlight c# %}
/// <summary>
/// Applies bold style to the selected content of SfRichTextBoxAdv.
/// </summary>
public void Bold()
{
    // Executes the bold command.
    if (richTextBoxAdv.BoldCommand.CanExecute(null))
        richTextBoxAdv.BoldCommand.Execute(null);
}
/// <summary>
/// Applies italic style to the selected content of SfRichTextBoxAdv.
/// </summary>
public void Italic()
{
    // Executes the italic command.
    if (richTextBoxAdv.ItalicCommand.CanExecute(null))
        richTextBoxAdv.ItalicCommand.Execute(null);
}
{% endhighlight %}
{% endtabs %}

The following code example demonstrates how to bind commands with parameter.
{% tabs %}
{% highlight xaml %}
<Button Content="TextAlignment" Command="{Binding ElementName=richTextBoxAdv, Path=TextAlignmentCommand, Mode=TwoWay}" CommandParameter="Right" />
{% endhighlight %}
{% endtabs %}

## List of available Commands

The following table contains the list of available UI Commands in SfRichTextBoxAdv.

| Command Name | Description | Command parameter (optional) |
| --- | --- | --- |
| AddToDictionaryCommand | Represents the command to add the selected or specified custom word into the custom dictionary. | The custom word to be added. |
| AfterSpacingCommand | Represents the command to apply after spacing for the selected paragraphs. | The after spacing value to be applied. |
| AutoFitTableCommand | Represents the command that fits the columns width of selected table based on the specified `AutoFitType`. | The `AutoFitType` to fit the columns of the table. |
| BaselineAlignmentCommand | Represents the command to apply `BaselineAlignment` for the selected text. | The baseline alignment value to be applied. |
| BeforeSpacingCommand | Represents the command to apply before spacing for the selected paragraphs. | The before spacing value to be applied. |
| BoldCommand | Represents the command to toggle bold style for the selected text. | NA |
| CellBottomMarginCommand | Represents the command to apply bottom margin for the selected table cells. | The bottom margin value to be applied. |
| CellContentAlignmentCommand | Represents the command to apply content alignment for the selected table cells. | The cell content alignment value to be applied. |
| CellLeftMarginCommand | Represents the command to apply left margin for the selected table cells. | The left margin value to be applied. |
| CellRightMarginCommand | Represents the command to apply right margin for the selected table cells. | The right margin value to be applied. |
| CellSpacingCommand | Represents the command to apply cell spacing for the selected table. | The cell spacing value to be applied. |
| CellTopMarginCommand | Represents the command to apply top margin for the selected table cells. | The top margin value to be applied. |
| CellVerticalAlignmentCommand | Represents the command to apply vertical alignment for the selected table cells. | The vertical alignment value to be applied. |
| ChangeAllSpellingCommand | Represents the command that changes all occurrences of a selected misspelled word. | The word to be replaced. |
| ChangeSpellingCommand | Represents the command that changes the selected misspelled word. | The word to be replaced. |
| CheckSpellingCommand | Represents the command that checks spelling mistakes in the document of `SfRichTextBoxAdv` control. | NA |
| CopyCommand | Represents the command that copies the selected contents to clipboard. | NA |
| CopyHyperlinkCommand | Represents the command that copies the selected hyperlink to clipboard. | NA |
| CutCommand | Represents the command that removes the selected contents from `SfRichTextBoxAdv` control and copies the same to clipboard. | NA |
| DecreaseIndentCommand | Represents the command to decrease left indent for the selected paragraphs. | NA |
| DefaultCellBottomMarginCommand | Represents the command to apply bottom margin for the selected table. | The cell bottom margin value to be applied. |
| DefaultCellLeftMarginCommand | Represents the command to apply left margin for the selected table. | The cell left margin value to be applied. |
| DefaultCellRightMarginCommand | Represents the command to apply right margin for the selected table. | The cell right margin value to be applied. |
| DefaultCellTopMarginCommand | Represents the command to apply top margin for the selected table. | The cell top margin value to be applied. |
| DeleteAllCommentsCommand | Represents the command to delete all the comments in the document. | NA |
| DeleteColumnCommand | Represents the command to delete the selected column of a table. | NA |
| DeleteCommentCommand | Represents the command that deletes the selected comment. | NA |
| DeleteCommand | Represents the command that performs action for "DELETE" key. | NA |
| DeleteRowCommand | Represents the command to delete the selected row of a table. | NA |
| DeleteTableCommand | Represents the command to delete the selected table. | NA |
| EnterKeyCommand | Represents the command that performs action for "ENTER" key. | NA |
| FontColorCommand | Represents the command to apply font color for the selected text. | The font color value to be applied. |
| FontFamilyCommand | Represents the command to apply font family for the selected text. | The font family value to be applied. |
| FontSizeCommand | Represents the command to apply font size for the selected text. | The font size value to be applied. |
| HighlightColorCommand | Represents the command to apply `HighlightColor` for the selected text. | The highlight color value to be applied. |
| IgnoreAllSpellingErrorsCommand | Represents the command that ignores all the occurrence of a selected misspelled word. | The misspelled word to be ignored. |
| IncreaseIndentCommand | Represents the command to increase indent for the selected paragraphs. | NA |
| InsertBreakCommand | Represents the command that inserts a break at selection. | The break type to be inserted |
| InsertColumnCommand | Represents the command that inserts a column to the selected table. | The `ColumnPlacement` value to insert column. |
| InsertHyperlinkCommand | Represents the command that inserts a hyperlink at selection. | The hyperlink to be inserted. |
| InsertPictureCommand | Represents the command that inserts a picture at selection. | The picture to be inserted. |
| InsertRowCommand | Represents the command that inserts a row to the selected table. | The `RowPlacement` value to insert row. |
| InsertTableCommand | Represents the command that inserts a table at selection. | The row and column count of the table. |
| ItalicCommand | Represents the command that toggles italic style for the selected text. | NA |
| LayoutTypeCommand | Represents the command to change layout type of the `SfRichTextBoxAdv` control. | The layout type to set for the `SfRichTextBoxAdv` control. |
| LeftIndentCommand | Represents the command to apply left indent for the selected paragraphs. | The left indent value to be applied. |
| LineSpacingCommand | Represents the command to apply line spacing for the selected paragraphs. | The line spacing value to be applied. |
| LineSpacingTypeCommand | Represents the command to apply `LineSpacingType` for the selected paragraphs. | The `LineSpacingType` value to be applied. |
| MergeSelectedCellsCommand | Represents the command that merges the selected table cells. | NA |
| NewCommentCommand | Represents the command that adds a comment at the selection. | NA |
| NewDocumentCommand | Represents the command that creates a new document in `SfRichTextBoxAdv` control. | NA |
| NextCommentCommand | Represents the command that performs navigation to next comment in the document. | NA |
| OpenDocumentCommand | Represents the command that opens an existing document in the `SfRichTextBoxAdv` control. | NA |
| PageFitCommand | Represents the command to apply `PageFitType` for the `SfRichTextBoxAdv` control. | The `PageFitType` value to be applied. |
| PasteAsyncCommand | Represents the command that pastes the clipboard contents into the `SfRichTextBoxAdv` control asynchronously. | NA |
| PasteCommand | Represents the command that pastes the content from clipboard to `SfRichTextBoxAdv` control. | NA |
| PreviousCommentCommand | Represents the command that performs navigation to previous comment in the document. | NA |
| PrintDocumentCommand | Represents the command that prints the document of `SfRichTextBoxAdv` control. | NA |
| RedoCommand | Represents the command that redoes the last undo operation in the `SfRichTextBoxAdv` control. | NA |
| RemoveHyperlinkCommand | Represents the command that removes the selected hyperlink. | NA |
| RightIndentCommand | Represents the command to apply right indent for the selected paragraphs. | The right indent value to be applied. |
| SaveAsDocumentCommand | Represents the command that saves the document of `SfRichTextBoxAdv` control. | NA |
| SaveDocumentCommand | Represents the command that saves the document of `SfRichTextBoxAdv` control. | NA |
| SelectAllCommand | Represents the command that selects all the content of `SfRichTextBoxAdv` control. | NA |
| SelectCellCommand | Represents the command that selects the table cell. | NA |
| SelectColumnCommand | Represents the command that selects the entire column of a table. | NA |
| SelectRowCommand | Represents the command that selects the entire row of a table. | NA |
| SelectTableCommand | Represents the command that selects the table. | NA |
| ShowCommentsCommand | Represents the command to show or hide comments in the `SfRichTextBoxAdv` control. | NA |
| ShowHyperlinkDialogCommand | Represents the command that shows the hyperlink dialog. | NA |
| ShowOptionsPaneCommand | Represents the command that shows the options pane. | NA |
| ShowSpellingPaneCommand | Represents the command that shows the spelling pane. | NA |
| StrikeThroughCommand | Represents the command to apply `StrikeThrough` for the selected text. | The strike through value to be applied. |
| TableAlignmentCommand | Represents the command to apply table alignment for the selected table. | The table alignment value to be applied. |
| TableLeftIndentCommand | Represents the command to apply left indent for the selected table. | The left indent value to be applied. |
| TextAlignmentCommand | Represents the command to apply text alignment for the selected paragraphs. | The text alignment value to be applied. |
| UnderlineCommand | Represents the command to apply underline for the selected text. | The `Underline` value to be applied. |
| UndoCommand | Represents the command that undoes the last edit operation in the `SfRichTextBoxAdv` control. | NA |

## See also

- [Clipboard support in UWP DOCX Editor](./Clipboard)
- [Table support in UWP DOCX Editor](./Table)
- [Comments in UWP DOCX Editor](./Comment)
