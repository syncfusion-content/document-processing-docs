---
title: Selection in UWP DOCX Editor | Syncfusion
description: The selection in UWP DOCX Editor supports selecting a portion of the document, enabling selection through mouse, touch, keyboard, or supported APIs.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: selection,text-position,hierarchy-index,multi-selection,selection-ranges,lost-focus-behavior,editing-context
---
# Selection in UWP DOCX Editor

[`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) supports selecting a portion of the document either through UI interactions using the mouse, touch, or keyboard, or through the supported APIs.

## Retrieving a text position

The following sample code demonstrates how to retrieve a text position from a document using a paragraph instance and an offset value.
{% tabs %}
{% highlight c# %}
// Gets the first section of the document.
SectionAdv sectionAdv = richTextBoxAdv.Document.Sections[0];

// Gets the first block from the section, which is a paragraph.
ParagraphAdv paragraphAdv = sectionAdv.Blocks[0] as ParagraphAdv;
// Gets the text position of the specified paragraph at offset 24.
// TextPosition is returned as null if no such paragraph or offset exists in the document.
TextPosition startPosition = richTextBoxAdv.Document.GetTextPosition(paragraphAdv, 24);

// Gets the third block of a section, which is a table.
TableAdv tableAdv = sectionAdv.Blocks[2] as TableAdv;
// Gets the third block from the second row, second cell of the table, which is a paragraph.
ParagraphAdv paragraphInTable = tableAdv.Rows[1].Cells[1].Blocks[2] as ParagraphAdv;
TextPosition position = richTextBoxAdv.Document.GetTextPosition(paragraphInTable, 12);

{% endhighlight %}

{% endtabs %}

The following sample code demonstrates how to retrieve a text position from the document using a hierarchical index.
{% tabs %}
{% highlight c# %}
// The hierarchical index is "section-index;block-index;offset-in-paragraph".
// If the block at the index is a paragraph, the next value is treated as the offset.
// For example, "0;0;1" gets the text position of the first block of the first section at offset = 1.
// If the block is a table, the next value is the row index, then the cell index, then a block index.
// "table-index;row-index;cell-index;block-index;"
// For example, "0;2;1;1;0;21" gets the text position of the first block of the second cell of the second row of the third block of the first section at offset = 21.
// If the offset value is followed by "C" (comment), the comment is retrieved; the next value is the block index within the comment.
// "paragraph-index;offset-in-paragraph;C;block-index;offset-in-paragraph"
// For example, "0;3;16;C;2;6" gets the text position of the third block of the comment at offset = 6, where the comment is at offset = 16 in the third block of the first section.
// Retrieves the text position from the document based on a hierarchical index.
TextPosition position = richTextBoxAdv.Document.GetTextPosition("0;0;24");
// The returned text position is the first section's first block (which is a paragraph) at offset = 24.


{% endhighlight %}

{% endtabs %}

## Selecting portions of the document

The following sample code demonstrates how to move selection start and selection end both at a specific text position.

{% tabs %}
{% highlight c# %}
// Makes an empty (collapsed) selection at the specified text position.
richTextBoxAdv.Selection.Select(position, position);

{% endhighlight %}

{% endtabs %}

### Selecting a range of text

The following sample code demonstrates how to select a portion of the document.

{% tabs %}
{% highlight c# %}
// Retrieves the start position of the first paragraph.
TextPosition startPosition = richTextBoxAdv.Document.GetTextPosition("0;0;0");
// Retrieves the position of the first paragraph at offset = 20.
TextPosition endPosition = richTextBoxAdv.Document.GetTextPosition("0;0;20");
// Selects the text positions in the forward direction.
richTextBoxAdv.Selection.Select(startPosition, endPosition);

// Selects the text positions in the reverse direction.
richTextBoxAdv.Selection.Select(endPosition, startPosition);

{% endhighlight %}

{% endtabs %}

N> You can only select a range where both endpoints lie within the same comment. It is not possible to select a range where one endpoint lies inside a comment and the other lies outside of that comment.

## Multi selection

SfRichTextBoxAdv supports selecting different portions of the document at the same time. The following code example demonstrates how to perform multi-selection in the SfRichTextBoxAdv control.
{% tabs %}
{% highlight c# %}
// Retrieves the position of the first paragraph start.
TextPosition startPosition1 = richTextBoxAdv.Document.GetTextPosition("0;0;0");
// Retrieves the position of the first paragraph at offset=20.
TextPosition endPosition1 = richTextBoxAdv.Document.GetTextPosition("0;0;20");
// Retrieves the position of the third paragraph start.
TextPosition startPosition2 = richTextBoxAdv.Document.GetTextPosition("0;2;0");
// Retrieves the position of the third paragraph at offset=20.
TextPosition endPosition2 = richTextBoxAdv.Document.GetTextPosition("0;2;20");
// Selects the first and third paragraphs at the same time, leaving the second paragraph unselected.
richTextBoxAdv.Selection.SelectionRanges.Add(startPosition1, endPosition1);
richTextBoxAdv.Selection.SelectionRanges.Add(startPosition2, endPosition2);


{% endhighlight %}

{% endtabs %}

## Applying formatting to a selection

SfRichTextBoxAdv supports the following format properties that can be applied to the selected content.

* **Character format** – Bold, italic, font size, font family, font color, highlight color, underline, strikethrough, subscript, and superscript.
* **Paragraph format** – Before and after spacing, first-line indent, left and right indents, text justification, line spacing, and multilevel list.
* **Section format** – Page size and page margin.

The following sample code demonstrates how to apply subscript format to the selected content.
{% tabs %}
{% highlight c# %}
// Applies subscript format for the selected text contents.
richTextBoxAdv.Selection.CharacterFormat.BaselineAlignment = Syncfusion.UI.Xaml.RichTextBoxAdv.BaselineAlignment.Subscript;


{% endhighlight %}

{% endtabs %}

The following sample code demonstrates how to apply after spacing for the selected paragraphs.
{% tabs %}
{% highlight c# %}
// Applies after spacing for the selected paragraphs.
richTextBoxAdv.Selection.ParagraphFormat.AfterSpacing = 24;


{% endhighlight %}

{% endtabs %}

The following sample code demonstrates how to apply page margin for the selected sections.
{% tabs %}
{% highlight c# %}
// Applies page margin for the selected sections.
richTextBoxAdv.Selection.SectionFormat.PageMargin = new Thickness(96, 48, 96, 48);


{% endhighlight %}

{% endtabs %}

## Binding selection format properties

The SfRichTextBoxAdv provides support to bind the rich-text format options of selection content. 
The following code sample demonstrates how to bind the bold format option of SfRichTextBoxAdv.
{% tabs %}
{% highlight xaml %}
<!-- Binds the toggle button to Selection bold character format -->
<ToggleButton x:Name="toggleButton" Content="Bold" IsChecked="{Binding Path=Selection.CharacterFormat.Bold, Mode=TwoWay, ElementName=richTextBoxAdv}" />


{% endhighlight %}
{% highlight c# %}
// Initializes the new binding for toggle bold.
Binding binding = new Binding() { Source = richTextBoxAdv, Path = new PropertyPath("Selection.CharacterFormat.Bold"), Mode = BindingMode.TwoWay };

// Binds the IsChecked property to Selection.CharacterFormat.Bold property of RichTextBoxAdv.
toggleButton.SetBinding(ToggleButton.IsCheckedProperty, binding);

{% endhighlight %}

{% endtabs %}

The following code sample demonstrates how to bind the bold format option of SfRichTextBoxAdv.
{% tabs %}
{% highlight xaml %}
<!-- Binds the IsChecked property of the toggle button to the selection's text-alignment paragraph format. -->
<ToggleButton x:Name="toggleButton" Content="Left" IsChecked="{Binding ElementName=richTextBoxAdv,Path=Selection.ParagraphFormat.TextAlignment,Converter={StaticResource LeftAlignmentToggleConverter}}"/>



{% endhighlight %}
{% highlight c# %}
// Initializes a new binding for toggling the text alignment.
Binding binding = new Binding() { Source = richTextBoxAdv, Path = new PropertyPath("Selection.ParagraphFormat.TextAlignment"), Mode = BindingMode.TwoWay, Converter = new LeftAlignmentToggleConverter() };

// Binds the IsChecked property to the Selection.ParagraphFormat.TextAlignment property of SfRichTextBoxAdv.
toggleButton.SetBinding(ToggleButton.IsCheckedProperty, binding);



{% endhighlight %}

{% endtabs %}

## Keyboard shortcuts for navigation and selection

The following keyboard shortcuts are supported by SfRichTextBoxAdv for navigation.

| Navigation shortcut | Description |
| --- | --- |
| Right arrow | Navigates one position forward. |
| Left arrow | Navigates one position backward. |
| Down arrow | Navigates to the same position on the next line. |
| Up arrow | Navigates to the same position on the previous line. |
| Home | Navigates to the start of the current line. |
| End | Navigates to the end of the current line. |
| CTRL + Home | Navigates to the start of the document. |
| CTRL + End | Navigates to the end of the document. |
| CTRL + Right | Navigates to the start of the next word. |
| CTRL + Left | Navigates to the start of the current word. |
| CTRL + Down | Navigates to the start of the next paragraph. |
| CTRL + Up | Navigates to the start of the current paragraph. |

The following keyboard shortcuts are supported by SfRichTextBoxAdv for selection.

| Selection shortcut | Description |
| --- | --- |
| CTRL + Right arrow | Extends selection one position forward. |
| CTRL + Left arrow | Extends selection one position backward. |
| CTRL + Down arrow | Extends selection to the same position on the next line. |
| CTRL + Up arrow | Extends selection to the same position on the previous line. |
| SHIFT + Home | Extends selection to the start of the current line. |
| SHIFT + End | Extends selection to the end of the current line. |
| CTRL + SHIFT + Home | Extends selection to the start of the document. |
| CTRL + SHIFT + End | Extends selection to the end of the document. |
| CTRL + SHIFT + Right | Extends selection to the end of the current word. |
| CTRL + SHIFT + Left | Extends selection to the start of the current word. |
| CTRL + SHIFT + Down | Extends selection to the end of the current paragraph. |
| CTRL + SHIFT + Up | Extends selection to the start of the current paragraph. |
| CTRL + A | Selects the entire document. |

## Showing the caret and selection when the control is unfocused

SfRichTextBoxAdv lets you show the blinking cursor and selection highlight even when the control does not have focus. You can choose any of the following [`LostFocusBehavior`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.LostFocusBehavior.html) values.

| Value | Description |
| --- | --- |
| `None` | Do not display either the caret or the selection highlight when the control is unfocused. |
| `ShowCaret` | Display the caret (blinking cursor) when the control is unfocused. |
| `ShowSelection` | Display the selection highlight when the control is unfocused. |

The following code example demonstrates how to display the selection highlight when the control is unfocused.

{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" LostFocusBehavior="ShowSelection"  xmlns:RichTextBoxAdv="clr-namespace:Syncfusion.Windows.Controls.RichTextBoxAdv;assembly=Syncfusion.SfRichTextBoxAdv.Wpf" />

{% endhighlight %}
{% highlight c# %}
// Initializes a new instance of SfRichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
// Displays the selection highlight when the control is unfocused.
richTextBoxAdv.LostFocusBehavior = LostFocusBehavior.ShowSelection;

{% endhighlight %}
{% endtabs %}

N> The `LostFocusBehavior` API is supported from Syncfusion UWP RichTextBox v17.4.0.X onwards.

## Determining the editing context type

SfRichTextBoxAdv lets you determine the editing context type based on the selected content. The following are the [`EditingContextType`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.EditingContextType.html) values.

| Value | Description |
| --- | --- |
| `Text` | The editing context is a text range. |
| `Image` | The editing context is an image. |
| `Table` | The editing context is a table. |

The following code example demonstrates how to determine the editing context type based on the selection.

{% tabs %}
{% highlight c# %}
// Initializes a new instance of SfRichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
if (richTextBoxAdv.Selection.EditingContext.Type == EditingContextType.Text)
{
}

{% endhighlight %}
{% endtabs %}

## Deleting the selected content

SfRichTextBoxAdv supports deleting the selected portion of the document either through the UI command, the keyboard, or the supported APIs.

The following code sample demonstrates how to delete the selected portion of the document using the `DeleteCommand`.

{% tabs %}
{% highlight xaml %}
<!-- Binds the button to the DeleteCommand. -->
<Button Content="Delete" Command="{Binding ElementName=richTextBoxAdv, Path=DeleteCommand, Mode=TwoWay}" />

{% endhighlight %}
{% endtabs %}

The following code sample demonstrates how to delete the selected portion of the document using the `Delete` method. This method is valid only when the selection is non-empty. It returns `true` if the selected content is deleted; otherwise, it returns `false`.

{% tabs %}
{% highlight c# %}
//Deletes the selected content in SfRichTextBoxAdv control.
bool isDeleted = richTextBoxAdv.Selection.Delete();

{% endhighlight %}
{% highlight VB %}
' Deletes the selected content in the SfRichTextBoxAdv control.
Dim isDeleted As Boolean = richTextBoxAdv.Selection.Delete()

{% endhighlight %}
{% endtabs %}

N> The `Delete` method is supported from Syncfusion UWP RichTextBox v18.2.0.X onwards.

## See also

- [Commands in UWP RichTextBox](./Commands)
- [Find and Replace in UWP RichTextBox](./Find-and-Replace)
- [Getting started with UWP RichTextBox](./Getting-Started)