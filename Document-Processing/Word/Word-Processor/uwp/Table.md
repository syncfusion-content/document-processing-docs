---
title: Tables in UWP DOCX Editor | Syncfusion
description: UWP DOCX Editor allows adding tables to the rich text document, enabling insert and delete of rows and columns, and cell merging.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: table,tablecommands,mergecells,tableformat,rowformat,cellformat
---
# Tables in UWP DOCX Editor

[`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) allows you to add tables to the rich-text document. You can insert rows or columns into an existing table and delete existing rows and columns. SfRichTextBoxAdv also lets you merge the selected cells into one (both vertically and horizontally).

## Adding a table programmatically

The following code example illustrates how to add a table to the rich-text document.
{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:DocumentAdv>
    <RichTextBoxAdv:SectionAdv>
        <RichTextBoxAdv:TableAdv>
            <RichTextBoxAdv:TableRowAdv>
                <RichTextBoxAdv:TableCellAdv>
                    <RichTextBoxAdv:TableCellAdv.CellFormat>
                        <RichTextBoxAdv:CellFormat CellWidth="240"/>
                    </RichTextBoxAdv:TableCellAdv.CellFormat>
                    <RichTextBoxAdv:ParagraphAdv>
                        <RichTextBoxAdv:SpanAdv>Cell 1</RichTextBoxAdv:SpanAdv>
                    </RichTextBoxAdv:ParagraphAdv>
                </RichTextBoxAdv:TableCellAdv>
                <RichTextBoxAdv:TableCellAdv>
                    <RichTextBoxAdv:TableCellAdv.CellFormat>
                        <RichTextBoxAdv:CellFormat CellWidth="240"/>
                    </RichTextBoxAdv:TableCellAdv.CellFormat>
                    <RichTextBoxAdv:ParagraphAdv>
                        <RichTextBoxAdv:SpanAdv>Cell 2</RichTextBoxAdv:SpanAdv>
                    </RichTextBoxAdv:ParagraphAdv>
                </RichTextBoxAdv:TableCellAdv>
            </RichTextBoxAdv:TableRowAdv>
        </RichTextBoxAdv:TableAdv>
        <RichTextBoxAdv:ParagraphAdv/>
    </RichTextBoxAdv:SectionAdv>
</RichTextBoxAdv:DocumentAdv>


{% endhighlight %}

{% highlight c# %}
// Initializes a document.
DocumentAdv document = new DocumentAdv();

// Initializes a section.
SectionAdv section = new SectionAdv();

// Initializes a table.
TableAdv tableAdv = new TableAdv();

// Initializes a row.
TableRowAdv tableRowAdv = new TableRowAdv();

// Initializes a table cell.
TableCellAdv tableCellAdv = new TableCellAdv();
tableCellAdv.CellFormat.CellWidth = 240;

// Initializes a paragraph.
ParagraphAdv paragraphAdv = new ParagraphAdv();
SpanAdv spanAdv = new SpanAdv();
spanAdv.Text = "Cell 1";
paragraphAdv.Inlines.Add(spanAdv);

tableCellAdv.Blocks.Add(paragraphAdv);
// Add any number of blocks to the cell here.

tableRowAdv.Cells.Add(tableCellAdv);
// Add any number of cells to the row here.

tableAdv.Rows.Add(tableRowAdv);
// Add any number of rows to the table here.

section.Blocks.Add(tableAdv);
// Add any number of blocks to the section here.

document.Sections.Add(section);
// Add any number of sections to the document here.

// Assigns the document to the RichTextBoxAdv instance.
richTextBoxAdv.Document = document;


{% endhighlight %}

{% endtabs %}

## UI commands for accessing tables

The following XAML examples illustrate how to bind commands for table operations.

### Inserting a table

{% tabs %}
{% highlight xaml %}
<!-- Inserts a table with the default size of one row and two columns. -->
<Button Content="Insert Table" Command="{Binding ElementName=richTextBoxAdv, Path=InsertTableCommand}" />

<!-- Inserts a table with the size of two rows and three columns. -->
<Button Content="Insert Table" Command="{Binding ElementName=richTextBoxAdv, Path=InsertTableCommand}" CommandParameter="2,3" />

{% endhighlight %}

{% highlight c# %}
// InsertTableCommand accepts a comma-separated string parameter.
richTextBoxAdv.InsertTableCommand.Execute("2,3");

// InsertTableCommand accepts an int[] parameter specifying rows and columns.
richTextBoxAdv.InsertTableCommand.Execute(new int[] { 2, 3 });

{% endhighlight %}
{% endtabs %}

### Inserting rows and columns

The `InsertRowCommand` and `InsertColumnCommand` accept a string parameter specifying the placement relative to the current row or column.

| Command | Valid `CommandParameter` values |
| --- | --- |
| `InsertRowCommand` | `"Above"`, `"Below"` |
| `InsertColumnCommand` | `"Left"`, `"Right"` |

{% tabs %}
{% highlight xaml %}
<!-- Inserts one row above the current row. -->
<Button Content="Insert Row" Command="{Binding ElementName=richTextBoxAdv, Path=InsertRowCommand}" CommandParameter="Above" />

<!-- Inserts one column to the right of the current column. -->
<Button Content="Insert Column" Command="{Binding ElementName=richTextBoxAdv, Path=InsertColumnCommand}" CommandParameter="Right" />

{% endhighlight %}
{% endtabs %}

### Selecting a cell, row, column, or table

{% tabs %}
{% highlight xaml %}
<!-- Selects the cell. -->
<Button Content="Select Cell" Command="{Binding ElementName=richTextBoxAdv, Path=SelectCellCommand}" />

<!-- Selects the column. -->
<Button Content="Select Column" Command="{Binding ElementName=richTextBoxAdv, Path=SelectColumnCommand}" />

<!-- Selects the row. -->
<Button Content="Select Row" Command="{Binding ElementName=richTextBoxAdv, Path=SelectRowCommand}" />

<!-- Selects the table. -->
<Button Content="Select Table" Command="{Binding ElementName=richTextBoxAdv, Path=SelectTableCommand}" />

{% endhighlight %}
{% endtabs %}

### Merging selected cells

{% tabs %}
{% highlight xaml %}
<!-- Merges the selected cells. -->
<Button Content="Merge Cells" Command="{Binding ElementName=richTextBoxAdv, Path=MergeSelectedCellsCommand}" />

{% endhighlight %}
{% endtabs %}

### Changing cell content alignment

The `CellContentAlignmentCommand` accepts a string parameter that specifies the vertical and horizontal alignment. Use the comma-separated form (`"Top,Left"`) or the combined form (`"CenterRight"`).

{% tabs %}
{% highlight xaml %}
<!-- Cell content alignment with a comma-separated parameter (vertical, horizontal). -->
<Button Content="Cell Content Alignment" Command="{Binding ElementName=richTextBoxAdv,Path=CellContentAlignmentCommand}" CommandTarget="{Binding ElementName=richTextBoxAdv}" CommandParameter="Top,Left" />

<!-- Cell content alignment with a combined string parameter (vertical + horizontal). -->
<Button Content="Cell Content Alignment" Command="{Binding ElementName=richTextBoxAdv,Path=CellContentAlignmentCommand}" CommandTarget="{Binding ElementName=richTextBoxAdv}"  CommandParameter="CenterRight"/>

{% endhighlight %}
{% endtabs %}

### Deleting rows, columns, and tables

{% tabs %}
{% highlight xaml %}
<!-- Deletes the column. -->
<Button Content="Delete Column" Command="{Binding ElementName=richTextBoxAdv, Path=DeleteColumnCommand}" />

<!-- Deletes the row. -->
<Button Content="Delete Row" Command="{Binding ElementName=richTextBoxAdv, Path=DeleteRowCommand}" />

<!-- Deletes the table. -->
<Button Content="Delete Table" Command="{Binding ElementName=richTextBoxAdv, Path=DeleteTableCommand}" />

{% endhighlight %}
{% endtabs %}

## See also

- [Commands in UWP RichTextBox](./Commands)
- [Importing and exporting documents in UWP RichTextBox](./Import-and-Export)
- [Getting started with UWP RichTextBox](./Getting-Started)