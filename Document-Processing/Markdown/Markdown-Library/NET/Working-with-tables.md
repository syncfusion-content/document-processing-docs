---
title: Working with Tables in .NET Markdown library | Syncfusion
description: Learn to create, format, and modify tables in a Markdown document using Syncfusion .NET Markdown library without any third-party dependencies.
platform: document-processing
control: Markdown
documentation: UG
---

# Working with Tables in the Syncfusion<sup>&reg;</sup> .NET Markdown Library

Tables are essential components in Markdown documents used to organize and present data in a structured format of rows and columns. The Syncfusion<sup>&reg;</sup> .NET Markdown library provides comprehensive support for creating, modifying, and managing tables programmatically in a Markdown document.

A table is represented by the following DOM types:

* **Table**: Represented by `MdTable`, which is the root container for rows.
* **Rows**: Represented by `MdTableRow`, which contains a collection of cells. A table must contain at least one row (typically the header row).
* **Cells**: Represented by `MdTableCell`, which contains inline content such as text, links, and formatted text.

The first row in a Markdown table is typically treated as the header row, followed by a separator row that defines column alignments, and then data rows.

## Adding a table

You can add a table to a `MarkdownDocument` by using the `AddTable` method. The alignment for each column can be specified using the `ColumnAlignments` property. The supported alignment options are `Left`, `Center`, and `Right`.

The following code example demonstrates how to create a table 

N> Refer to the appropriate tabs in the code snippets section: ***C#*** for ASP.NET Core, Blazor, ASP.NET MVC, UWP, .NET MAUI, WinUI, WinForms and WPF; ***VB.NET*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C#" %}

 // Creates a new MarkdownDocument instance
 MarkdownDocument markdownDocument = new MarkdownDocument();
 // Adds a new table to the document
 MdTable table = markdownDocument.AddTable();
 // Adds header row to the table
 MdTableRow headerRow = table.AddTableRow();
 headerRow.AddTableCell().Items.Add(new MdTextRange { Text = "Product" });
 // Sets column alignments (left, center, right)
 table.ColumnAlignments.Add(MdColumnAlignment.Left);
 headerRow.AddTableCell().Items.Add(new MdTextRange { Text = "Price" });
 // Sets column alignments (left, center, right)
 table.ColumnAlignments.Add(MdColumnAlignment.Left);
 headerRow.AddTableCell().Items.Add(new MdTextRange { Text = "Stock" });
 // Sets column alignments (left, center, right)
 table.ColumnAlignments.Add(MdColumnAlignment.Left);
 // Defines data for multiple rows
 string[][] data = {
     new[] { "Widget", "$10", "50" },
     new[] { "Gadget", "$20", "30" },
     new[] { "Tool", "$15", "40" }
 };
 // Adds data rows to the table
 foreach (string[] rowData in data)
 {
     // Creates a new data row
     MdTableRow dataRow = table.AddTableRow();
     foreach (string value in rowData)
     {
         // Adds each cell value to the row
         dataRow.AddTableCell().Items.Add(new MdTextRange { Text = value });
     }
 }
 // Saves the Markdown document to the file system
 markdownDocument.Save("Output.md");
 // Disposes the document
 markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

    ' Creates a new MarkdownDocument instance
    Dim markdownDocument As MarkdownDocument = New MarkdownDocument()
    'Adds a new table to the document
    Dim table As MdTable = markdownDocument.AddTable()
    ' Adds header row to the table
    Dim headerRow As MdTableRow = table.AddTableRow()
    headerRow.AddTableCell().Items.Add(New MdTextRange With {.Text = "Product"})
    ' Sets column alignments (left, center, right)
    table.ColumnAlignments.Add(MdColumnAlignment.Left)
    headerRow.AddTableCell().Items.Add(New MdTextRange With {.Text = "Price"})
    ' Sets column alignments (left, center, right)
    table.ColumnAlignments.Add(MdColumnAlignment.Left)
    headerRow.AddTableCell().Items.Add(New MdTextRange With {.Text = "Stock"})
    ' Sets column alignments (left, center, right)
    table.ColumnAlignments.Add(MdColumnAlignment.Left)
    ' Defines data for multiple rows
    Dim data As String()() = {
    New String() {"Widget", "$10", "50"},
    New String() {"Gadget", "$20", "30"},
    New String() {"Tool", "$15", "40"}
}
    ' Adds data rows to the table
    For Each rowData As String() In data
        ' Creates a new data row
        Dim dataRow As MdTableRow = table.AddTableRow()
        For Each value As String In rowData
            ' Adds each cell value to the row
            dataRow.AddTableCell().Items.Add(New MdTextRange With {.Text = value})
        Next
    Next
    ' Saves the Markdown document to the file system
    markdownDocument.Save("Output.md")
    ' Disposes the document
    markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Tables/Add-an-table/.NET).

N> Column alignment is set at the table level using the `ColumnAlignments` property and applies to the entire column, not individual cells.

## Changing column alignment in existing tables

You can modify the column alignment of existing tables by updating the `ColumnAlignments` property. The following code example demonstrates how to change column alignments.

{% tabs %}

{% highlight c# tabtitle="C#" %}

// Opens an existing Markdown document
MarkdownDocument markdownDocument = new MarkdownDocument(Path.GetFullPath("Input.md"));
// Iterates through the blocks of the document
foreach (IMdBlock block in markdownDocument.Blocks)
{
    // Checks if the current block is a table
    if (block is MdTable)
    {
        MdTable table = block as MdTable;
        // Ensures the table has at least one row
        if (table.Rows.Count > 0)
        {
            // Creates a list to store column alignments
            List<MdColumnAlignment> alignments = new List<MdColumnAlignment>();
            // Iterates through all cells in the first row
            for (int i = 0; i < table.Rows[0].Cells.Count; i++)
            {
                // Sets each column alignment to center
                alignments.Add(MdColumnAlignment.Center);
            }
            // Applies the new column alignments to the table
            table.ColumnAlignments = alignments;
            break;
        }                    
    }
}
// Saves the Markdown document to the file system
markdownDocument.Save("Output.md");
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

' Opens an existing Markdown document
Dim markdownDocument As MarkdownDocument = New MarkdownDocument(Path.GetFullPath("Input.md"))
' Iterates through the blocks of the document
For Each block As IMdBlock In markdownDocument.Blocks
    ' Checks if the current block is a table
    If TypeOf block Is MdTable Then
        Dim table As MdTable = TryCast(block, MdTable)
        ' Ensures the table has at least one row
        If table.Rows.Count > 0 Then
            ' Creates a list to store column alignments
            Dim alignments As List(Of MdColumnAlignment) = New List(Of MdColumnAlignment)()
            ' Iterates through all cells in the first row
            For i As Integer = 0 To table.Rows(0).Cells.Count - 1
                ' Sets each column alignment to center
                alignments.Add(MdColumnAlignment.Center)
            Next
            ' Applies the new column alignments to the table
            table.ColumnAlignments = alignments
            Exit For
        End If
    End If
Next
' Saves the Markdown document to the file system
markdownDocument.Save("Output.md")
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Tables/Changing-column-alignment-in-existing-table/.NET).

## Removing tables

You can remove tables from a Markdown document by removing them from the `Blocks` collection. The following code example demonstrates how to remove all tables from a document.

{% tabs %}

{% highlight c# tabtitle="C#" %}

//Opens an existing Markdown document
MarkdownDocument markdownDocument = new MarkdownDocument(Path.GetFullPath("Input.md"));
// Iterates through all blocks in the document
for (int i = 0; i < markdownDocument.Blocks.Count; i++)
{
    // Gets the current block
    IMdBlock mdBlock = markdownDocument.Blocks[i];
    // Checks if the block is a table
    if (mdBlock is MdTable)
    {
        // Removes the table block from the document
        markdownDocument.Blocks.Remove(mdBlock);
        // Adjusts the loop index after removing a block
        i--;
    }
}
// Saves the Markdown document to the file system
markdownDocument.Save("Output.md");
// Disposes the document
markdownDocument.Dispose();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

'Opens an existing Markdown document
Dim markdownDocument As MarkdownDocument = New MarkdownDocument(Path.GetFullPath("Input.md"))
' Iterates through all blocks in the document
For i As Integer = 0 To markdownDocument.Blocks.Count - 1
    ' Gets the current block
    Dim mdBlock As IMdBlock = markdownDocument.Blocks(i)
    ' Checks if the block is a table
    If TypeOf mdBlock Is MdTable Then
        ' Removes the table block from the document
        markdownDocument.Blocks.Remove(mdBlock)
        ' Adjusts the loop index after removing a block
        i -= 1
    End If
Next
' Saves the Markdown document to the file system
markdownDocument.Save("Output.md")
' Disposes the document
markdownDocument.Dispose()

{% endhighlight %}

{% endtabs %}

A complete working sample is available on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Tables/Remove-an-table/.NET).
