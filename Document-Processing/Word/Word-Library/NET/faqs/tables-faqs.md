---
title: FAQ about Tables | DocIO | Syncfusion
description: Learn about the frequently asked questions about tables in Word document in the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Frequently asked questions about tables in Word document

The frequently asked questions about working with tables in Word documents using DocIO are listed below.

## How to insert a DataTable in a Word document?

You can create new table in a Word document and copy the contents from data table. The following code illustrates how to insert a data table as table in a Word document.

{% tabs %}  

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates new Word document
WordDocument document = new WordDocument();
//Creates new data set and data table
DataSet dataset = new DataSet();
GetDataTable(dataset);
DataTable datatable = new DataTable();
datatable = dataset.Tables[0];
//Adds new section
IWSection section = document.AddSection();
//Adds new table
IWTable table = section.AddTable();
//Adds new row to the table
WTableRow row = table.AddRow();
foreach (DataColumn datacolumn in datatable.Columns)
{
    //Sets the column names for the table from the data table column names and cell width
    WTableCell cell = row.AddCell();
    cell.AddParagraph().AppendText(datacolumn.ColumnName);
    cell.Width = 150;
}
//Iterates through data table rows
foreach (DataRow datarow in datatable.Rows)
{
    //Adds new row to the table
    row = table.AddRow(true, false);
    foreach (object datacolumn in datarow.ItemArray)
    {
        //Adds new cell
        WTableCell cell = row.AddCell();
        //Adds contents from the data table to the table cell
        cell.AddParagraph().AppendText(datacolumn.ToString());
    }
}
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates new Word document
Dim document As New WordDocument()
'Creates new data set and data table
Dim dataset As New DataSet()
GetDataTable(dataset)
Dim datatable As New DataTable()
datatable = dataset.Tables(0)
'Adds new section
Dim section As IWSection = document.AddSection()
'Adds new table
Dim table As IWTable = section.AddTable()
'Adds new row to the table
Dim row As WTableRow = table.AddRow()
For Each datacolumn As DataColumn In datatable.Columns
    'Sets the column names for the table from the data table column names and cell width
    Dim cell As WTableCell = row.AddCell()
    cell.AddParagraph().AppendText(datacolumn.ColumnName)
    cell.Width = 150
Next
'Iterates through data table rows
For Each datarow As DataRow In datatable.Rows
    'Adds new row to the table
    row = table.AddRow(True, False)
    For Each datacolumn As Object In datarow.ItemArray
        'Adds new cell
        Dim cell As WTableCell = row.AddCell()
        'Adds contents from the data table to the table cell
        cell.AddParagraph().AppendText(datacolumn.ToString())
    Next
Next
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %} 

{% endtabs %}  

The following code illustrates the method to get data table.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private void GetDataTable(DataSet dataset)
{
    // List of syncfusion products.
    string[] products = { "DocIO", "PDF", "XlsIO" };
    // Adds new Tables to the data set.
    DataRow row;
    dataset.Tables.Add();
    // Adds fields to the Products table.
    dataset.Tables[0].TableName = "Products";
    dataset.Tables[0].Columns.Add("ProductName");
    dataset.Tables[0].Columns.Add("Binary");
    dataset.Tables[0].Columns.Add("Source");
    // Inserts values to the tables.
    foreach (string product in products)
    {
        row = dataset.Tables["Products"].NewRow();
        row["ProductName"] = string.Concat("Essential ", product);
        row["Binary"] = "$895.00";
        row["Source"] = "$1,295.00";
        dataset.Tables["Products"].Rows.Add(row);
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub GetDataTable(dataset As DataSet)
    'List of syncfusion products.
    Dim products As String() = {"DocIO", "PDF", "XlsIO"}
    'Adds new Tables to the data set.
    Dim row As DataRow
    dataset.Tables.Add()
    'Adds fields to the Products table.
    dataset.Tables(0).TableName = "Products"
    dataset.Tables(0).Columns.Add("ProductName")
    dataset.Tables(0).Columns.Add("Binary")
    dataset.Tables(0).Columns.Add("Source")
    'Inserts values to the tables.
    For Each product As String In products
        row = dataset.Tables("Products").NewRow()
        row("ProductName") = String.Concat("Essential ", product)
        row("Binary") = "$895.00"
        row("Source") = "$1,295.00"
        dataset.Tables("Products").Rows.Add(row)
    Next
End Sub
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/FAQs/Insert-data-table-in-Word-document).

## How to insert a table from HTML string in Word document?

An HTML string can be inserted to the Word document at text body or paragraph. The following code illustrates how to insert a table to the document from the HTML string.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx");
//Gets the text body
WTextBody textbody = document.Sections[0].Body;
//Html string that represents table with two rows and two columns
string htmlString = " <table border='1'><tr><td><p>First Row First Cell</p></td><td><p>First Row Second Cell</p></td></tr><tr><td><p>Second Row First Cell</p></td><td><p>Second Row Second Cell</p></td></tr></table> ";
//Inserts the string to the text body
textbody.InsertXHTML(htmlString);
//Saves and closes the document
document.Save("Sample.docx");
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As New WordDocument("Template.docx")
'Gets the text body
Dim textbody As WTextBody = document.Sections(0).Body
'Html string that represents table with two rows and two columns
Dim htmlString As String = " <table border='1'><tr><td><p>First Row First Cell</p></td><td><p>First Row Second Cell</p></td></tr><tr><td><p>Second Row First Cell</p></td><td><p>Second Row Second Cell</p></td></tr></table> "
'Inserts the string to the text body
textbody.InsertXHTML(htmlString)
'Saves and closes the document
document.Save("Sample.docx")
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/FAQs/Insert-table-from-html-string).

## How to set table cell width?

Each cell in the table can have its own width. The following code illustrates how to set the width of the cell.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates new word document
WordDocument document = new WordDocument("Template.docx");
//Gets the text body of first section
WTextBody textbody = document.Sections[0].Body;
//Gets the table
IWTable table = textbody.Tables[0];
//Iterates through table rows
foreach (WTableRow row in table.Rows)
{
    //Sets width for cells
    for (int i = 0; i < row.Cells.Count; i++)
    {
        WTableCell cell = row.Cells[i];
        if (i % 2 == 0)
            //Sets width as 100 for cells in even column
            cell.Width = 100;
        else
            //Sets width as 150 for cell in odd column
            cell.Width = 150;
    }
}
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates new word document
Dim document As New WordDocument("Template.docx")
'Gets the text body of first section
Dim textbody As WTextBody = document.Sections(0).Body
'Gets the table
Dim table As IWTable = textbody.Tables(0)
'Iterates through table rows
For Each row As WTableRow In table.Rows
    'Sets width for cells
    For i As Integer = 0 To row.Cells.Count - 1
        Dim cell As WTableCell = row.Cells(i)
        If i Mod 2 = 0 Then
            'Sets width as 100 for cells in even column
            cell.Width = 100
        Else
            'Sets width as 150 for cell in odd column
            cell.Width = 150
        End If
    Next
Next
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Tables/Set-table-cell-width).

## How to position a table in a Word document?

You can position a table in a Word document by setting position properties. The following code illustrates how to set position properties for a table.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx");
//Gets the text body of first section
WTextBody textbody = document.Sections[0].Body;
//Gets the table
IWTable table = textbody.Tables[0];
//Sets the horizontal and vertical position for table
table.TableFormat.Positioning.HorizPosition = 40;
table.TableFormat.Positioning.VertPosition = 100;
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As New WordDocument("Template.docx")
'Gets the text body of first section
Dim textbody As WTextBody = document.Sections(0).Body
'Gets the table
Dim table As IWTable = textbody.Tables(0)
'Sets the horizontal and vertical position for table
table.TableFormat.Positioning.HorizPosition = 40
table.TableFormat.Positioning.VertPosition = 100
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Tables/Set-position-for-table).

## How to set the text direction to a table in Word document?

The contents of the table cell can be in vertical or horizontal direction. Each cell content can have different text direction. The following code illustrates how to set the text direction for the text in the table.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx");
//Gets the text body of first section
WTextBody textbody = document.Sections[0].Body;
//Gets the table
IWTable table = textbody.Tables[0];
//Iterates through table rows
foreach (WTableRow row in table.Rows)
{
    foreach (WTableCell cell in row.Cells)
    {
        //Sets the text direction for the contents
        cell.CellFormat.TextDirection = Syncfusion.DocIO.DLS.TextDirection.Vertical;
    }
}
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As New WordDocument("Template.docx")
'Gets the text body of first section
Dim textbody As WTextBody = document.Sections(0).Body
'Gets the table
Dim table As IWTable = textbody.Tables(0)
'Iterates through table rows
For Each row As WTableRow In table.Rows
    For Each cell As WTableCell In row.Cells
        'Sets the text direction for the contents
        cell.CellFormat.TextDirection = Syncfusion.DocIO.DLS.TextDirection.Vertical
    Next
Next
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Tables/Set-text-direction-to-table).

## How can I obtain the height of a cell or row in a Word document using the DocIO library?

In Syncfusion<sup>®</sup> .NET Word Library (DocIO), you can get or set the height of a table row using the [Height](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WTableRow.html#Syncfusion_DocIO_DLS_WTableRow_Height) property and define its behavior with the [HeightType](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WTableRow.html#Syncfusion_DocIO_DLS_WTableRow_HeightType) property, such as `AtLeast` or `Exactly`. The row height applies uniformly across all cells in the row and automatically adjusts based on the content.

This behavior aligns with Microsoft Word's functionality, where row height is managed at the row level rather than for individual cells, ensuring consistent formatting across the table.

The following code demonstrates how to get the row height and height type from an existing Word document:

{% tabs %}

{% highlight c# tabtitle="C#" %}
// Access the instance of the first row in the table
WTableRow row = table.Rows[0];
// Get the row height 
float rowHeight = row.Height;
// Get the row height type
TableRowHeightType rowHeightType = row.HeightType;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}
' Access the instance of the first row in the table
Dim row As WTableRow = table.Rows(0)
' Get the row height 
Dim rowHeight As Single = row.Height
' Get the row height type
Dim rowHeightType As TableRowHeightType = row.HeightType
{% endhighlight %}

{% endtabs %}

## Why does setting the top or bottom padding for one cell in a Word document apply the same padding to all cells in the row?

This behavior is due to the way Microsoft Word handles cell padding within a row. When a cell in a row has a maximum top or bottom padding, Word applies that maximum padding value to all cells in the same row. This is a default behavior of Microsoft Word to ensure uniformity in the appearance of rows.

## Is it possible to insert a page break inside a table using DocIO?

In Microsoft Word, it is not possible to insert a page break directly into a paragraph within a table cell. If a page break is added to a cell in a row, the entire row is moved to the next page, splitting the table into two separate parts with a new paragraph containing the page break inserted before the table.

DocIO also follows the same limitation and does not allow inserting a page break inside a table cell. To achieve a similar result, you can follow the below code example.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads an existing Word document into DocIO instance
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
// Access the table from the specified index in the document's body.
WTable table = document.Sections[0].Body.ChildEntities[4] as WTable;
// Check if the table contains 2 or more rows.
if (table != null && table.Rows.Count >= 2)
{
    // Clone and remove the first row of the table.
    WTableRow clonedRow = table.Rows[0].Clone();
    table.Rows.RemoveAt(0);
    // Get the text body of the table.
    WTextBody documentBody = table.OwnerTextBody;
    // Determine the index of the current table in the document body.
    int currentTableIndex = documentBody.ChildEntities.IndexOf(table);
    // Create a new paragraph and add a page break.
    WParagraph pageBreakParagraph = new WParagraph(document);
    pageBreakParagraph.AppendBreak(BreakType.PageBreak);
    // Insert the new paragraph (with page break) before the current table.
    documentBody.ChildEntities.Insert(currentTableIndex, pageBreakParagraph);
    // Create a new table and insert it before the page break paragraph.
    WTable newTable = new WTable(document);
    documentBody.ChildEntities.Insert(currentTableIndex, newTable);
    // Add the cloned row to the newly created table.
    newTable.Rows.Add(clonedRow);
}
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %} 

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates an instance of WordDocument class
WordDocument document = new WordDocument();
document.Open("Template.docx", FormatType.Docx);
// Access the table from the specified index in the document's body.
WTable table = document.Sections[0].Body.ChildEntities[4] as WTable;
// Check if the table contains 2 or more rows.
if (table != null && table.Rows.Count >= 2)
{
    // Clone and remove the first row of the table.
    WTableRow clonedRow = table.Rows[0].Clone();
    table.Rows.RemoveAt(0);
    // Get the text body of the table.
    WTextBody documentBody = table.OwnerTextBody;
    // Determine the index of the current table in the document body.
    int currentTableIndex = documentBody.ChildEntities.IndexOf(table);
    // Create a new paragraph and add a page break.
    WParagraph pageBreakParagraph = new WParagraph(document);
    pageBreakParagraph.AppendBreak(BreakType.PageBreak);
    // Insert the new paragraph (with page break) before the current table.
    documentBody.ChildEntities.Insert(currentTableIndex, pageBreakParagraph);
    // Create a new table and insert it before the page break paragraph.
    WTable newTable = new WTable(document);
    documentBody.ChildEntities.Insert(currentTableIndex, newTable);
    // Add the cloned row to the newly created table.
    newTable.Rows.Add(clonedRow);
}
//Saves and closes the document instance
document.Save("Result.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates an instance of WordDocument class
Dim document As New WordDocument()
document.Open("Template.docx", FormatType.Docx)
' Access the table from the specified index in the document's body.
Dim table As WTable = TryCast(document.Sections(0).Body.ChildEntities(4), WTable)
' Check if the table contains 2 or more rows.
If table IsNot Nothing AndAlso table.Rows.Count >= 2 Then
    ' Clone and remove the first row of the table.
    Dim clonedRow As WTableRow = CType(table.Rows(0).Clone(), WTableRow)
    table.Rows.RemoveAt(0)
    ' Get the text body of the table.
    Dim documentBody As WTextBody = table.OwnerTextBody
    ' Determine the index of the current table in the document body.
    Dim currentTableIndex As Integer = documentBody.ChildEntities.IndexOf(table)
    ' Create a new paragraph and add a page break.
    Dim pageBreakParagraph As New WParagraph(document)
    pageBreakParagraph.AppendBreak(BreakType.PageBreak)
    ' Insert the new paragraph (with page break) before the current table.
    documentBody.ChildEntities.Insert(currentTableIndex, pageBreakParagraph)
    ' Create a new table and insert it before the page break paragraph.
    Dim newTable As New WTable(document)
    documentBody.ChildEntities.Insert(currentTableIndex, newTable)
    ' Add the cloned row to the newly created table.
    newTable.Rows.Add(clonedRow)
End If
'Saves and closes the document instance
document.Save("Result.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Tables/Add-page-break-between-rows).