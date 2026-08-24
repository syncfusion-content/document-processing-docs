---
title: How to Paste a WordDocument from DocIO in UWP DOCX Editor | Syncfusion
description: Paste a WordDocument from the .NET Word library (DocIO) into the Syncfusion® UWP DOCX Editor at the current selection using the PasteCommand.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: paste-WordDocument-from-DocIO,paste,worddocument,docio,pastecommand
---

# How to Paste a WordDocument from DocIO in UWP DOCX Editor

The [`PasteCommand`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_UI_Xaml_RichTextBoxAdv_SfRichTextBoxAdv_PasteCommand) accepts a [`WordDocument`](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html) as a parameter, allowing you to paste the contents of a Word document into the current selection of the [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) control. This provides a convenient way to transfer and display complex document structures from Word documents directly within SfRichTextBoxAdv.

Using this feature, you can achieve the following by pasting a `WordDocument` into SfRichTextBoxAdv at the current selection:

* Perform all the document manipulation features of the [.NET Word library (DocIO)](https://help.syncfusion.com/document-processing/word/word-library/net/overview) and then finally insert the result into SfRichTextBoxAdv.

* Insert another [Word document](https://help.syncfusion.com/document-processing/word/conversions/word-file-formats-conversions) (DOC, DOCX) and [HTML](https://help.syncfusion.com/document-processing/word/conversions/html-conversions) document from DocIO.

* Insert part of another Word document by retrieving a range of content using the [bookmark functionality](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-bookmarks) in DocIO.

* Create new elements from scratch with the desired formatting, such as [text](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-paragraph#working-with-text), [images](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-paragraph#working-with-images), and [tables](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-tables), using DocIO and paste that `WordDocument` instance.

## Pasting a WordDocument

The following code example illustrates how to design a table with applied formatting using DocIO and paste it into the SfRichTextBoxAdv using `WordDocument`.

{% tabs %}
{% highlight c# %}
///Paste the WordDocument into SfRichTextBoxAdv.
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
            // Specifies the left, right, top, and bottom padding of the cell.
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
            wTableCell.CellFormat.Borders.Top.Color = Color.Red;
            wTableCell.CellFormat.Borders.Bottom.Color = Color.Red;
            wTableCell.CellFormat.Borders.Right.Color = Color.Red;
            wTableCell.CellFormat.Borders.Left.Color = Color.Red;
            ///Set line width for tablecell borders.
            wTableCell.CellFormat.Borders.LineWidth = 7.5f;
        }
    }
    return document;
}

{% endhighlight %}
{% endtabs %}

## Limitation
When the document content is pasted into the SfRichTextBoxAdv control using WordDocument as a parameter, the history will not be maintained. That is, if a table is created using WordDocument, with multiple formats applied, and then table is pasted into the SfRichTextBoxAdv control, performing Undo will remove the inserted table, and performing Redo will insert the table again. Since, we are creating table outside of SfRichTextBoxAdv and it will not maintain history.

N> This feature is supported from v22.2.5.

## See also

- [PasteCommand API Reference](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_UI_Xaml_RichTextBoxAdv_SfRichTextBoxAdv_PasteCommand)
- [.NET Word Library (DocIO) Documentation](https://help.syncfusion.com/file-formats/docio/overview)
- [UWP RichTextBox Feature Tour](https://www.syncfusion.com/docx-editor-sdk/uwp-docx-editor)
- [UWP RichTextBox Examples](https://github.com/syncfusion/docx-editor-sdk-uwp-demos)