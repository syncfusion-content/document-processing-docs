---
title: How to paste DocIO Word content in SfRichTextBoxAdv? | Syncfusion
description: Learn here all about how to paste WordDocument from .NET Word library (DocIO) in Syncfusion UWP SfRichTextBoxAdv and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: paste-WordDocument-from-DocIO,paste,worddocument,docio,pastecommand,iwtable,iwsection,bookmark
---

# Paste WordDocument from DocIO in the UWP SfRichTextBoxAdv

The [`PasteCommand`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#pastecommand) accepts a [`WordDocument`](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html) as a parameter, allowing you to paste the contents of a Word document into the current selection of the [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html) control. This provides a convenient way to transfer and display complex document structures from Word documents directly within SfRichTextBoxAdv.

Using this feature, you can achieve the following by pasting a `WordDocument` into SfRichTextBoxAdv at the current selection:

* Perform all the document manipulation features of the [.NET Word library (DocIO)](https://help.syncfusion.com/file-formats/docio/overview) and then finally insert the result into SfRichTextBoxAdv.

* Insert an existing [Word document](https://help.syncfusion.com/file-formats/docio/word-file-formats) (DOC, DOCX) or [HTML](https://help.syncfusion.com/file-formats/docio/html) document from DocIO.

* Insert part of another Word document by retrieving a range of content using the [bookmark functionality](https://help.syncfusion.com/file-formats/docio/working-with-bookmarks) in DocIO.

* Create new elements from scratch with the desired formatting, such as [text](https://help.syncfusion.com/file-formats/docio/working-with-paragraph#working-with-text), [images](https://help.syncfusion.com/file-formats/docio/working-with-paragraph#working-with-images), and [tables](https://help.syncfusion.com/file-formats/docio/working-with-tables), using DocIO and paste that `WordDocument` instance.

N> This FAQ requires the Syncfusion DocIO UWP package (`Syncfusion.DocIO.UWP`) to be referenced by the UWP application, in addition to the Syncfusion UWP RichTextBox package.

N> The XAML snippet in this FAQ assumes the `RichTextBoxAdv` namespace is mapped to `clr-namespace:Syncfusion.UI.Xaml.RichTextBoxAdv;assembly=Syncfusion.SfRichTextBoxAdv.UWP` and that the host `SfRichTextBoxAdv` is declared as `<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" />`.

## Pasting a WordDocument

The following code example illustrates how to design a table with applied formatting using DocIO and paste it into the SfRichTextBoxAdv using `WordDocument`.

{% tabs %}
{% highlight c# %}
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.UI.Xaml.RichTextBoxAdv;

// Pastes the WordDocument into SfRichTextBoxAdv.
WordDocument document = CreateTable();
richTextBoxAdv.PasteCommand.Execute(document);

/// <summary>
/// The following helper method illustrates how to create a table in DocIO.
/// </summary>
private WordDocument CreateTable()
{
    // Creates an instance of the WordDocument class.
    WordDocument document = new WordDocument();
    // Adds a section to the Word document.
    IWSection section = document.AddSection();
    // Adds a new table to the Word document.
    IWTable table = section.AddTable();
    // Specifies the total number of rows and columns.
    table.ResetCells(10, 6);
    // Iterates the rows of the table.
    for (int i = 0; i < table.Rows.Count; i++)
    {
        WTableRow wTableRow = table.Rows[i];
        // Iterates the cells of the row.
        for (int j = 0; j < wTableRow.Cells.Count; j++)
        {
            WTableCell wTableCell = wTableRow.Cells[j];
            // Specifies the left, right, top, and bottom padding of the cell (in points).
            wTableCell.CellFormat.Paddings.Left = 7.5f;
            wTableCell.CellFormat.Paddings.Top = 7.5f;
            wTableCell.CellFormat.Paddings.Right = 7.5f;
            wTableCell.CellFormat.Paddings.Bottom = 7.5f;
            // Sets the background color for the cell.
            wTableCell.CellFormat.BackColor = Color.Blue;
            // Sets the border type for the table cell borders.
            wTableCell.CellFormat.Borders.BorderType = BorderStyle.Single;
            // Sets the color for the table cell borders.
            wTableCell.CellFormat.Borders.Color = Color.Red;
            // Sets the line width for the table cell borders.
            wTableCell.CellFormat.Borders.LineWidth = 7.5f;
        }
    }
    return document;
}

{% endhighlight %}
{% endtabs %}

> **Limitation:** History (undo/redo) is not maintained when content is pasted using `WordDocument` as a parameter. The paste is recorded as a single history entry, so undoing the paste removes the inserted content and redoing re-inserts it as a single step. The content is created outside of SfRichTextBoxAdv, so internal history is not generated for the individual formatting steps.

N> The `PasteCommand.Execute(WordDocument)` overload is supported from Syncfusion UWP RichTextBox v17.4.0.X onwards.

## See Also

- [SfRichTextBoxAdv API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [DocIO overview](https://help.syncfusion.com/file-formats/docio/overview)
- [Working with bookmarks in DocIO](https://help.syncfusion.com/file-formats/docio/working-with-bookmarks)
- [Table support in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/table)