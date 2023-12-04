---
title: Working with Bookmarks in .NET Word library | Syncfusion
description: Learn how to add or remove bookmarks, replace, or delete the contents of bookmarks in a Word document using the .NET Word (DocIO) library.
platform: file-formats
control: DocIO
documentation: UG
---
# Working with Bookmarks

A bookmark identifies a location or a selection of text within a document that you can name and identify for future reference.

In Essential DocIO, bookmark is represented by [Bookmark](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.Bookmark.html) instance that is a pair of [BookmarkStart](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarkStart.html) and [BookmarkEnd](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarkEnd.html).
[BookmarkStart](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarkStart.html) represents start point of a bookmark and [BookmarkEnd](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarkEnd.html) represents end point of a bookmark. Every Word document contains a collection of bookmarks that are accessible through the [Bookmarks](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_Bookmarks) property of [WordDocument](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocument.html) class.

## Adding a bookmark

The following code example shows how to add a bookmark in Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Creates an instance of WordDocument class (Empty Word Document)
WordDocument document = new WordDocument();
//Adds a new section into the Word Document
IWSection section = document.AddSection();
//Adds a new paragraph into Word document and appends text into paragraph
IWParagraph paragraph = section.AddParagraph();
paragraph.AppendText("Northwind Database");
paragraph.ParagraphFormat.HorizontalAlignment = Syncfusion.DocIO.DLS.HorizontalAlignment.Center; 
//Adds a paragraph into section
paragraph = section.AddParagraph();
//Adds a new bookmark start into paragraph with name "Northwind"
paragraph.AppendBookmarkStart("Northwind");
//Adds a text between the bookmark start and end into paragraph
paragraph.AppendText("The Northwind sample database (Northwind.mdb) is included with all versions of Access. It provides data you can experiment with and database objects that demonstrate features you might want to implement in your own databases.");
//Adds a new bookmark end into paragraph with name " Northwind "
paragraph.AppendBookmarkEnd("Northwind");
//Adds a text after the bookmark end
paragraph.AppendText(" Using Northwind, you can become familiar with how a relational database is structured and how the database objects work together to help you enter, store, manipulate, and print your data.");
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates an instance of WordDocument class (Empty Word Document)
WordDocument document = new WordDocument();
//Adds a new section into the Word Document
IWSection section = document.AddSection();
//Adds a new paragraph into Word document and appends text into paragraph
IWParagraph paragraph = section.AddParagraph();
paragraph.AppendText("Northwind Database");
paragraph.ParagraphFormat.HorizontalAlignment = Syncfusion.DocIO.DLS.HorizontalAlignment.Center; 
//Adds a paragraph into section
paragraph = section.AddParagraph();
//Adds a new bookmark start into paragraph with name "Northwind"
paragraph.AppendBookmarkStart("Northwind");
//Adds a text between the bookmark start and end into paragraph
paragraph.AppendText("The Northwind sample database (Northwind.mdb) is included with all versions of Access. It provides data you can experiment with and database objects that demonstrate features you might want to implement in your own databases.");
//Adds a new bookmark end into paragraph with name " Northwind "
paragraph.AppendBookmarkEnd("Northwind");
//Adds a text after the bookmark end
paragraph.AppendText(" Using Northwind, you can become familiar with how a relational database is structured and how the database objects work together to help you enter, store, manipulate, and print your data.");
//Saves the document in the given name and format
document.Save("Bookmarks.docx", FormatType.Docx);
//Releases the resources occupied by WordDocument instance
document.Close(); 
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates an instance of WordDocument class (Empty Word Document)
Dim document As New WordDocument()
'Adds a new section into the Word Document
Dim section As IWSection = document.AddSection()
'Adds a new paragraph into Word document and appends text into paragraph
Dim paragraph As IWParagraph = section.AddParagraph()
paragraph.AppendText("Northwind Database")
paragraph.ParagraphFormat.HorizontalAlignment = Syncfusion.DocIO.DLS.HorizontalAlignment.Center
'Adds a paragraph into section
paragraph = section.AddParagraph()
'Adds a new bookmark start into paragraph with name "Northwind"
paragraph.AppendBookmarkStart("Northwind")
'Adds a text between the bookmark start and end into paragraph
paragraph.AppendText("The Northwind sample database (Northwind.mdb) is included with all versions of Access. It provides data you can experiment with and database objects that demonstrate features you might want to implement in your own databases.")
'Adds a new bookmark end into paragraph with name " Northwind "
paragraph.AppendBookmarkEnd("Northwind")
'Adds a text after the bookmark end
paragraph.AppendText(" Using Northwind, you can become familiar with how a relational database is structured and how the database objects work together to help you enter, store, manipulate, and print your data.")
'Saves the document in the given name and format
document.Save("Bookmarks.docx", FormatType.Docx)
'Releases the resources occupied by WordDocument instance
document.Close() 
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Bookmarks/Add-bookmark-in-Word-document).

## Obtaining a bookmark instance

The following code example shows how to retrieve an instance of bookmark from a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads an existing Word document into DocIO instance
FileStream fileStreamPath = new FileStream(@"Bookmarks.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Gets the bookmark instance by using FindByName method of BookmarkCollection with bookmark name
Syncfusion.DocIO.DLS.Bookmark bookmark = document.Bookmarks.FindByName("Northwind");
//Accesses the bookmark start’s owner paragraph by using bookmark and changes its back color
bookmark.BookmarkStart.OwnerParagraph.ParagraphFormat.BackColor = Color.AliceBlue;
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document into DocIO instance
WordDocument document = new WordDocument("Bookmarks.docx", FormatType.Docx);
//Gets the bookmark instance by using FindByName method of BookmarkCollection with bookmark name
Syncfusion.DocIO.DLS.Bookmark bookmark = document.Bookmarks.FindByName("Northwind");
//Accesses the bookmark start’s owner paragraph by using bookmark and changes its back color
bookmark.BookmarkStart.OwnerParagraph.ParagraphFormat.BackColor = Color.AliceBlue;
document.Save("Result.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document into DocIO instance
Dim document As New WordDocument("Bookmarks.docx", FormatType.Docx)
'Gets the bookmark instance by using FindByName method of BookmarkCollection with bookmark name
Dim bookmark As Syncfusion.DocIO.DLS.Bookmark = document.Bookmarks.FindByName("Northwind")
'Accesses the bookmark start’s owner paragraph by using bookmark and changes its back color
bookmark.BookmarkStart.OwnerParagraph.ParagraphFormat.BackColor = Color.AliceBlue
document.Save("Result.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Bookmarks/Get-an-instance-of-bookmark).

## Removing a Bookmark from Word document

The following code example shows how to remove a bookmark from Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads an existing Word document into DocIO instance
FileStream fileStreamPath = new FileStream(@"Bookmarks.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Gets the bookmark instance by using FindByName method of BookmarkCollection with bookmark name
Bookmark bookmark = document.Bookmarks.FindByName("Northwind");
//Removes the bookmark named "Northwind" from Word document.
document.Bookmarks.Remove(bookmark);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document into DocIO instance
WordDocument document = new WordDocument("Bookmarks.docx", FormatType.Docx);
//Gets the bookmark instance by using FindByName method of BookmarkCollection with bookmark name
Bookmark bookmark = document.Bookmarks.FindByName("Northwind");
//Removes the bookmark named "Northwind" from Word document.
document.Bookmarks.Remove(bookmark);
document.Save("Result.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document into DocIO instance
Dim document As New WordDocument("Bookmarks.docx", FormatType.Docx)
'Gets the bookmark instance by using FindByName method of BookmarkCollection with bookmark name
Dim bookmark As Bookmark = document.Bookmarks.FindByName("Northwind")
'Removes the bookmark named "Northwind" from Word document.
document.Bookmarks.Remove(bookmark)
document.Save("Result.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Bookmarks/Remove-bookmark-from-Word-document).

## Retrieving contents within a bookmark 

[BookmarkNavigator](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarksNavigator.html) is used for navigating to a bookmark in a Word document. You can retrieve, replace and delete the content of a specified bookmark by using [BookmarkNavigator](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarksNavigator.html).

You can get the content between bookmark start and bookmark end of the specified bookmark in two ways: 

1. You can use [GetBookmarkContent](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarksNavigator.html#Syncfusion_DocIO_DLS_BookmarksNavigator_GetBookmarkContent) method for retrieving content as collection of body items when the bookmark start and bookmark end are preserved in a single section.
2. You can use [GetContent](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarksNavigator.html#Syncfusion_DocIO_DLS_BookmarksNavigator_GetContent) method for retrieving content as collection of sections when the bookmark start and bookmark end are preserved in different sections. 

The following code example shows how to retrieve the specified bookmark content by using [GetBookmarkContent](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarksNavigator.html#Syncfusion_DocIO_DLS_BookmarksNavigator_GetBookmarkContent) method in a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads an existing Word document into DocIO instance
FileStream fileStreamPath = new FileStream("Bookmarks.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind");
//Gets the bookmark content
TextBodyPart part = bookmarkNavigator.GetBookmarkContent();
//Adds the retrieved content into another new section
document.AddSection();
for (int i = 0; i < part.BodyItems.Count; i++)
    document.LastSection.Body.ChildEntities.Add(part.BodyItems[i]);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
WordDocument document = new WordDocument("Bookmarks.docx", FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind");
//Gets the bookmark content
TextBodyPart part = bookmarkNavigator.GetBookmarkContent();
//Adds the retrieved content into another new section
document.AddSection();
for (int i = 0; i < part.BodyItems.Count; i++)
    document.LastSection.Body.ChildEntities.Add(part.BodyItems[i]);
document.Save("Result.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim document As New WordDocument("Bookmarks.docx", FormatType.Docx)
'Creates the bookmark navigator instance to access the bookmark
Dim bookmarkNavigator As New BookmarksNavigator(document)
'Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind")
'Gets the bookmark content
Dim part As TextBodyPart = bookmarkNavigator.GetBookmarkContent()
'Adds the retrieved content into another new section
document.AddSection()
For i As Integer = 0 To part.BodyItems.Count - 1
    document.LastSection.Body.ChildEntities.Add(part.BodyItems(i))
Next
document.Save("Result.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Bookmarks/Get-bookmark-content-as-body-part).

The following code example shows how to retrieve the specified bookmark content by using [GetContent](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarksNavigator.html#Syncfusion_DocIO_DLS_BookmarksNavigator_GetContent) method in a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads the template document with bookmark "Northwind" whose start and end are preserved in different section.
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind");
//Gets the bookmark content as WordDocumentPart
WordDocumentPart wordDocumentPart = bookmarkNavigator.GetContent();
//Saves the WordDocumentPart as separate Word document
WordDocument newDocument = wordDocumentPart.GetAsWordDocument();
//Close the WordDocumentPart instance
wordDocumentPart.Close();
//Closes the template document
document.Close();
MemoryStream stream = new MemoryStream();
newDocument.Save(stream, FormatType.Docx);
newDocument.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document with bookmark "Northwind" whose start and end are preserved in different section.
WordDocument document = new WordDocument("Template.docx", FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind");
//Gets the bookmark content as WordDocumentPart
WordDocumentPart wordDocumentPart = bookmarkNavigator.GetContent();
//Saves the WordDocumentPart as separate Word document
WordDocument newDocument = wordDocumentPart.GetAsWordDocument();
//Close the WordDocumentPart instance
wordDocumentPart.Close();
//Close the template Word document
document.Close();
newDocument.Save("Result.docx", FormatType.Docx);
//Releases the resources hold by WordDocument instance
newDocument.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document with bookmark "Northwind" whose start and end are preserved in different section
Dim document As New WordDocument("Template.docx", FormatType.Docx)
'Creates the bookmark navigator instance to access the bookmark
Dim bookmarkNavigator As New BookmarksNavigator(document)
'Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind")
'Gets the bookmark content as WordDocumentPart
Dim wordDocumentPart As WordDocumentPart = bookmarkNavigator.GetContent()
'Saves the WordDocumentPart as separate Word document
Dim newDocument As WordDocument = wordDocumentPart.GetAsWordDocument()
'Close the WordDocumentPart instance
wordDocumentPart.Close()
'Close the template Word document
document.Close()
newDocument.Save("Result.docx", FormatType.Docx)
'Releases the resources hold by WordDocument instance
newDocument.Close()
{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Bookmarks/Get-bookmark-content-as-document-part).

## Retrieving bookmark contents within a table 

You can select the column range for bookmarks inside the tables in Word documents by using [FirstColumn](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.Bookmark.html#Syncfusion_DocIO_DLS_Bookmark_FirstColumn) and [LastColumn](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.Bookmark.html#Syncfusion_DocIO_DLS_Bookmark_LastColumn) properties.

N> 1. [FirstColumn](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.Bookmark.html#Syncfusion_DocIO_DLS_Bookmark_FirstColumn) and [LastColumn](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.Bookmark.html#Syncfusion_DocIO_DLS_Bookmark_LastColumn) properties are valid to select table cells, only when the respective bookmark end and start is present within the same row or next rows of the same table.
N> 2. [FirstColumn](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.Bookmark.html#Syncfusion_DocIO_DLS_Bookmark_FirstColumn) property denotes the top left corner cell and [LastColumn](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.Bookmark.html#Syncfusion_DocIO_DLS_Bookmark_LastColumn) property denotes the bottom right corner cell of rectangular selection region since you can only select the content as a rectangular selection by using bookmarks within the table.
N> 3. [FirstColumn](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.Bookmark.html#Syncfusion_DocIO_DLS_Bookmark_FirstColumn) property selects from the first cell of the respective row when this property value is negative (or) greater than the cells of a row (or) greater than the [LastColumn](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.Bookmark.html#Syncfusion_DocIO_DLS_Bookmark_LastColumn) value.
N> 4. [LastColumn](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.Bookmark.html#Syncfusion_DocIO_DLS_Bookmark_LastColumn) property selects till last cell of the respective row when this property value is negative (or) greater than the cells of a row (or) less than the [FirstColumn](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.Bookmark.html#Syncfusion_DocIO_DLS_Bookmark_FirstColumn) value.

The following code example shows how to retrieve the bookmark content of a specified column range from a table in a Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Creates a new Word document
WordDocument document = new WordDocument();
//Adds a section and a paragraph in the document
document.EnsureMinimal();
//Inserts a new table with bookmark
IWTable table = CreateTable(document);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "BkmkInTable"
bookmarkNavigator.MoveToBookmark("BkmkInTable");
//Sets the column index where the bookmark starts within the table
bookmarkNavigator.CurrentBookmark.FirstColumn = 1;
//Sets the column index where the bookmark ends within the table
bookmarkNavigator.CurrentBookmark.LastColumn = 4;
//Gets the bookmark content
TextBodyPart part = bookmarkNavigator.GetBookmarkContent();
//Adds new section
document.AddSection();
for (int i = 0; i < part.BodyItems.Count; i++)
//Adds the retrieved content into another new section
document.LastSection.Body.ChildEntities.Add(part.BodyItems[i]);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document
WordDocument document = new WordDocument();
//Adds a section and a paragraph in the document
document.EnsureMinimal();
//Inserts a new table with bookmark
IWTable table = CreateTable(document);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "BkmkInTable"
bookmarkNavigator.MoveToBookmark("BkmkInTable");
//Sets the column index where the bookmark starts within the table
bookmarkNavigator.CurrentBookmark.FirstColumn = 1;
//Sets the column index where the bookmark ends within the table
bookmarkNavigator.CurrentBookmark.LastColumn = 4;
//Gets the bookmark content
TextBodyPart part = bookmarkNavigator.GetBookmarkContent();
//Adds new section
document.AddSection();
//Adds the retrieved content into another new section
for (int i = 0; i < part.BodyItems.Count; i++)
document.LastSection.Body.ChildEntities.Add(part.BodyItems[i]);
//Saves and closes the Word document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new Word document
Dim document As WordDocument = New WordDocument
'Adds a section and a paragraph in the document
document.EnsureMinimal()
'Inserts a new table with bookmark
Dim table As IWTable = CreateTable(document)
'Creates the bookmark navigator instance to access the bookmark
Dim bookmarkNavigator As BookmarksNavigator = New BookmarksNavigator(document)
'Moves the virtual cursor to the location before the end of the bookmark "BkmkInTable"
bookmarkNavigator.MoveToBookmark("BkmkInTable")
'Sets the column index where the bookmark starts within the table
bookmarkNavigator.CurrentBookmark.FirstColumn = 1
'Sets the column index where the bookmark ends within the table
bookmarkNavigator.CurrentBookmark.LastColumn = 4
'Gets the bookmark content
Dim part As TextBodyPart = bookmarkNavigator.GetBookmarkContent
'Adds new section
document.AddSection()
'Adds the retrieved content into another new section
For i As Integer = 0 To part.BodyItems.Count - 1
document.LastSection.Body.ChildEntities.Add(part.BodyItems(i))
Next
'Saves and closes the word document
document.Save("Result.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

The following code example shows how to create table with bookmark.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
public IWTable CreateTable(WordDocument document)
{
    //Adds a new table into Word document
    IWTable table = document.LastSection.AddTable();
    //Specifies the total number of rows & columns
    table.ResetCells(5, 5);
    //Accesses the instance of the cells and adds the content into cells
    table[0, 0].AddParagraph().AppendText("Supplier ID");
    table[0, 1].AddParagraph().AppendText("Company Name");
    IWParagraph paragraph = table.Rows[0].Cells[2].AddParagraph();
    //Appends a bookmark start in third cell of first row
    paragraph.AppendBookmarkStart("BkmkInTable");
    paragraph.AppendText("Contact Name");
    table[0, 3].AddParagraph().AppendText("Address");
    table[0, 4].AddParagraph().AppendText("City");
    table[1, 0].AddParagraph().AppendText("1");
    table[1, 1].AddParagraph().AppendText("Exotic Liquids");
    table[1, 2].AddParagraph().AppendText("Charlotte Cooper");
    table[1, 3].AddParagraph().AppendText("49 Gilbert St.");
    table[1, 4].AddParagraph().AppendText("London");
    table[2, 0].AddParagraph().AppendText("2");
    table[2, 1].AddParagraph().AppendText("New Orleans Cajun Delights");
    table[2, 2].AddParagraph().AppendText("Shelley Burke");
    table[2, 3].AddParagraph().AppendText("P.O. Box 78934");
    table[2, 4].AddParagraph().AppendText("New Orleans");
    table[3, 0].AddParagraph().AppendText("3");
    table[3, 1].AddParagraph().AppendText("Grandma Kelly's Homestead");
    table[3, 2].AddParagraph().AppendText("Regina Murphy");
    table[3, 3].AddParagraph().AppendText("707 Oxford Rd.");
    table[3, 4].AddParagraph().AppendText("Ann Arbor");
    table[4, 0].AddParagraph().AppendText("4");
    table[4, 1].AddParagraph().AppendText("Tokyo Traders");
    paragraph = table.Rows[4].Cells[2].AddParagraph();
    //Appends a bookmark end in third cell of last row
    paragraph.AppendBookmarkEnd("BkmkInTable");
    paragraph.AppendText("Yoshi Nagase");
    table[4, 3].AddParagraph().AppendText("9-8 Sekimai Musashino - shi");
    table[4, 4].AddParagraph().AppendText("Tokyo");
    return table;
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
public IWTable CreateTable(WordDocument document)
{
    //Adds a new table into Word document
    IWTable table = document.LastSection.AddTable();
    //Specifies the total number of rows & columns
    table.ResetCells(5, 5);
    //Accesses the instance of the cells and adds the content into cells
    table[0, 0].AddParagraph().AppendText("Supplier ID");
    table[0, 1].AddParagraph().AppendText("Company Name");
    IWParagraph paragraph = table.Rows[0].Cells[2].AddParagraph();
    //Appends a bookmark start in third cell of first row
    paragraph.AppendBookmarkStart("BkmkInTable");
    paragraph.AppendText("Contact Name");
    table[0, 3].AddParagraph().AppendText("Address");
    table[0, 4].AddParagraph().AppendText("City");
    table[1, 0].AddParagraph().AppendText("1");
    table[1, 1].AddParagraph().AppendText("Exotic Liquids");
    table[1, 2].AddParagraph().AppendText("Charlotte Cooper");
    table[1, 3].AddParagraph().AppendText("49 Gilbert St.");
    table[1, 4].AddParagraph().AppendText("London");
    table[2, 0].AddParagraph().AppendText("2");
    table[2, 1].AddParagraph().AppendText("New Orleans Cajun Delights");
    table[2, 2].AddParagraph().AppendText("Shelley Burke");
    table[2, 3].AddParagraph().AppendText("P.O. Box 78934");
    table[2, 4].AddParagraph().AppendText("New Orleans");
    table[3, 0].AddParagraph().AppendText("3");
    table[3, 1].AddParagraph().AppendText("Grandma Kelly's Homestead");
    table[3, 2].AddParagraph().AppendText("Regina Murphy");
    table[3, 3].AddParagraph().AppendText("707 Oxford Rd.");
    table[3, 4].AddParagraph().AppendText("Ann Arbor");
    table[4, 0].AddParagraph().AppendText("4");
    table[4, 1].AddParagraph().AppendText("Tokyo Traders");
    paragraph = table.Rows[4].Cells[2].AddParagraph();
    //Appends a bookmark end in third cell of last row
    paragraph.AppendBookmarkEnd("BkmkInTable");
    paragraph.AppendText("Yoshi Nagase");
    table[4, 3].AddParagraph().AppendText("9-8 Sekimai Musashino - shi");
    table[4, 4].AddParagraph().AppendText("Tokyo");
    return table;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Function CreateTable(document As WordDocument) As IWTable
    'Adds a new table into Word document
    Dim table As IWTable = document.LastSection.AddTable
    'Specifies the total number of rows & columns
    table.ResetCells(5, 5)
    'Accesses the instance of the cells and adds the content into cells
    table(0, 0).AddParagraph.AppendText("Supplier ID")
    table(0, 1).AddParagraph.AppendText("Company Name")
    Dim paragraph As IWParagraph = table.Rows(0).Cells(2).AddParagraph
    'Appends a bookmark start in third cell of first row paragraph.AppendBookmarkStart("BkmkInTable")
    paragraph.AppendText("Contact Name")
    table(0, 3).AddParagraph.AppendText("Address")
    table(0, 4).AddParagraph.AppendText("City")
    table(1, 0).AddParagraph.AppendText("1")
    table(1, 1).AddParagraph.AppendText("Exotic Liquids")
    table(1, 2).AddParagraph.AppendText("Charlotte Cooper")
    table(1, 3).AddParagraph.AppendText("49 Gilbert St.")
    table(1, 4).AddParagraph.AppendText("London")
    table(2, 0).AddParagraph.AppendText("2")
    table(2, 1).AddParagraph.AppendText("New Orleans Cajun Delights")
    table(2, 2).AddParagraph.AppendText("Shelley Burke")
    table(2, 3).AddParagraph.AppendText("P.O. Box 78934")
    table(2, 4).AddParagraph.AppendText("New Orleans")
    table(3, 0).AddParagraph.AppendText("3")
    table(3, 1).AddParagraph.AppendText("Grandma Kelly's Homestead")
    table(3, 2).AddParagraph.AppendText("Regina Murphy")
    table(3, 3).AddParagraph.AppendText("707 Oxford Rd.")
    table(3, 4).AddParagraph.AppendText("Ann Arbor")
    table(4, 0).AddParagraph.AppendText("4")
    table(4, 1).AddParagraph.AppendText("Tokyo Traders")
    'Appends a bookmark end in third cell of last row
    paragraph = table.Rows(4).Cells(2).AddParagraph
    paragraph.AppendBookmarkEnd("BkmkInTable")
    paragraph.AppendText("Yoshi Nagase")
    table(4, 3).AddParagraph.AppendText("9-8 Sekimai Musashino - shi")
    table(4, 4).AddParagraph.AppendText("Tokyo")
    Return table
End Function
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Bookmarks/Get-bookmark-content-within-table).

## Inserting content into a bookmark

You can insert table, paragraph, simple text and paragraph item at the start or end location of the current bookmark by using bookmark navigator.

The following code example shows how to insert a simple text by using [BookmarkNavigator](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarksNavigator.html).

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads the template document
FileStream fileStreamPath = new FileStream(@"Bookmarks.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind");
//Inserts a new text before the bookmark end of the bookmark
bookmarkNavigator.InsertText(" Northwind Database is a set of tables containing data fitted into predefined categories.");
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
WordDocument document = new WordDocument("Bookmarks.docx", FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind");
//Inserts a new text before the bookmark end of the bookmark
bookmarkNavigator.InsertText(" Northwind Database is a set of tables containing data fitted into predefined categories.");
document.Save("Result.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim document As New WordDocument("Bookmarks.docx", FormatType.Docx)
'Creates the bookmark navigator instance to access the bookmark
Dim bookmarkNavigator As New BookmarksNavigator(document)
'Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind")
'Inserts a new text before the bookmark end of the bookmark
bookmarkNavigator.InsertText(" Northwind Database is a set of tables containing data fitted into predefined categories.")
document.Save("Result.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Bookmarks/Insert-simple-text-into-bookmark).

The following code example shows how to insert a paragraph item by using [BookmarkNavigator](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarksNavigator.html).

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads an existing Word document into DocIO instance
FileStream fileStreamPath = new FileStream("Bookmarks.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind", false, true);
//Inserts a new picture after the bookmark end
WPicture picture = bookmarkNavigator.InsertParagraphItem(ParagraphItemType.Picture) as WPicture;
FileStream imageStream = new FileStream("Northwind.png", FileMode.Open, FileAccess.Read);
picture.LoadImage(imageStream);
picture.WidthScale = 50;
picture.HeightScale = 50;
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
WordDocument document = new WordDocument("Bookmarks.docx", FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind", false, true);
//Inserts a new picture after the bookmark end
WPicture picture = bookmarkNavigator.InsertParagraphItem(ParagraphItemType.Picture) as WPicture;
picture.LoadImage(Image.FromFile("Northwind.png"));
picture.WidthScale = 50;
picture.HeightScale = 50;
document.Save("Result.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim document As New WordDocument("Bookmarks.docx", FormatType.Docx)
'Creates the bookmark navigator instance to access the bookmark
Dim bookmarkNavigator As New BookmarksNavigator(document)
'Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind", False, True)
'Inserts a new picture after the bookmark end
Dim picture As WPicture = TryCast(bookmarkNavigator.InsertParagraphItem(ParagraphItemType.Picture), WPicture)
picture.LoadImage(Image.FromFile("Northwind.png"))
picture.WidthScale = 50
picture.HeightScale = 50
document.Save("Result.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Bookmarks/Insert-paragraph-item-into-bookmark).

The following code example shows how to insert a paragraph by using [BookmarkNavigator](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarksNavigator.html).

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads an existing Word document into DocIO instance
FileStream fileStreamPath = new FileStream("Bookmarks.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind", false, true);
//Inserts a new paragraph before the bookmark start
IWParagraph paragraph = new WParagraph(document);
paragraph.AppendText("Northwind Database is a set of tables containing data fitted into predefined categories.");
bookmarkNavigator.InsertParagraph(paragraph);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
WordDocument document = new WordDocument("Bookmarks.docx", FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind", false, true);
//Inserts a new paragraph before the bookmark start
IWParagraph paragraph = new WParagraph(document);
paragraph.AppendText("Northwind Database is a set of tables containing data fitted into predefined categories.");
bookmarkNavigator.InsertParagraph(paragraph);
document.Save("Result.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim document As New WordDocument("Bookmarks.docx", FormatType.Docx)
'Creates the bookmark navigator instance to access the bookmark
Dim bookmarkNavigator As New BookmarksNavigator(document)
'Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind", False, True)
'Inserts a new paragraph before the bookmark start
Dim paragraph As IWParagraph = New WParagraph(document)
paragraph.AppendText("Northwind Database is a set of tables containing data fitted into predefined categories.")
bookmarkNavigator.InsertParagraph(paragraph)
document.Save("Result.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Bookmarks/Insert-paragraph-into-bookmark).

The following code example shows how to insert a table by using [BookmarkNavigator](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarksNavigator.html).

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads an existing Word document into DocIO instance
FileStream fileStreamPath = new FileStream("Bookmarks.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind", false, false);
//Inserts a new paragraph before the bookmark end
IWParagraph paragraph = new WParagraph(document);
paragraph.AppendText("Northwind Database Contains the following tables:");
bookmarkNavigator.InsertParagraph(paragraph);
//Inserts a new table before the bookmark end
WTable table = new WTable(document);
table.ResetCells(3, 2);
table[0, 0].AddParagraph().AppendText("Suppliers");
table[0, 1].AddParagraph().AppendText("2");
table[1, 0].AddParagraph().AppendText("Customers");
table[1, 1].AddParagraph().AppendText("1");
table[2, 0].AddParagraph().AppendText("Employees");
table[2, 1].AddParagraph().AppendText("3");
bookmarkNavigator.InsertTable(table);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
WordDocument document = new WordDocument("Bookmarks.docx", FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind", false, false);
//Inserts a new paragraph before the bookmark end
IWParagraph paragraph = new WParagraph(document);
paragraph.AppendText("Northwind Database Contains the following tables:");
bookmarkNavigator.InsertParagraph(paragraph);
//Inserts a new table before the bookmark end
WTable table = new WTable(document);
table.ResetCells(3, 2);
table[0, 0].AddParagraph().AppendText("Suppliers");
table[0, 1].AddParagraph().AppendText("2");
table[1, 0].AddParagraph().AppendText("Customers");
table[1, 1].AddParagraph().AppendText("1");
table[2, 0].AddParagraph().AppendText("Employees");
table[2, 1].AddParagraph().AppendText("3");
bookmarkNavigator.InsertTable(table);
document.Save("Result.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim document As New WordDocument("Bookmarks.docx", FormatType.Docx)
'Creates the bookmark navigator instance to access the bookmark
Dim bookmarkNavigator As New BookmarksNavigator(document)
'Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind", False, False)
'Inserts a new paragraph before the bookmark end
Dim paragraph As IWParagraph = New WParagraph(document)
paragraph.AppendText("Northwind Database Contains the following tables:")
bookmarkNavigator.InsertParagraph(paragraph)
'Inserts a new table before the bookmark end
Dim table As New WTable(document)
table.ResetCells(3, 2)
table(0, 0).AddParagraph().AppendText("Suppliers")
table(0, 1).AddParagraph().AppendText("2")
table(1, 0).AddParagraph().AppendText("Customers")
table(1, 1).AddParagraph().AppendText("1")
table(2, 0).AddParagraph().AppendText("Employees")
table(2, 1).AddParagraph().AppendText("3")
bookmarkNavigator.InsertTable(table)
document.Save("Result.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Bookmarks/Insert-table-into-bookmark).

The following code example shows how to insert a [TextBodyPart](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.TextBodyPart.html) by using [BookmarkNavigator](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarksNavigator.html).

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads an existing Word document into DocIO instance
FileStream fileStreamPath = new FileStream("Bookmarks.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind");
//Gets the bookmark content
TextBodyPart textBodyPart = bookmarkNavigator.GetBookmarkContent();
document.AddSection();
IWParagraph paragraph = document.LastSection.AddParagraph();
paragraph.AppendText("Northwind Database is a set of tables containing data fitted into predefined categories.");
//Adds the new bookmark into Word document
paragraph.AppendBookmarkStart("bookmark_empty");
paragraph.AppendBookmarkEnd("bookmark_empty");
//Moves the virtual cursor to the location after the start of the bookmark "bookmark_empty"
bookmarkNavigator.MoveToBookmark("bookmark_empty", true, true);
//Inserts the text body part after the bookmark start
bookmarkNavigator.InsertTextBodyPart(textBodyPart);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
WordDocument document = new WordDocument("Bookmarks.docx", FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind");
//Gets the bookmark content
TextBodyPart textBodyPart = bookmarkNavigator.GetBookmarkContent();
document.AddSection();
IWParagraph paragraph = document.LastSection.AddParagraph();
paragraph.AppendText("Northwind Database is a set of tables containing data fitted into predefined categories.");
//Adds the new bookmark into Word document
paragraph.AppendBookmarkStart("bookmark_empty");
paragraph.AppendBookmarkEnd("bookmark_empty");
//Moves the virtual cursor to the location after the start of the bookmark "bookmark_empty"
bookmarkNavigator.MoveToBookmark("bookmark_empty", true, true);
//Inserts the text body part after the bookmark start
bookmarkNavigator.InsertTextBodyPart(textBodyPart);
document.Save("Result.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim document As New WordDocument("Bookmarks.docx", FormatType.Docx)
'Creates the bookmark navigator instance to access the bookmark
Dim bookmarkNavigator As New BookmarksNavigator(document)
'Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind")
'Gets the bookmark content
Dim textBodyPart As TextBodyPart = bookmarkNavigator.GetBookmarkContent()
document.AddSection()
Dim paragraph As IWParagraph = document.LastSection.AddParagraph()
paragraph.AppendText("Northwind Database is a set of tables containing data fitted into predefined categories.")
'Adds the new bookmark into Word document
paragraph.AppendBookmarkStart("bookmark_empty")
paragraph.AppendBookmarkEnd("bookmark_empty")
'Moves the virtual cursor to the location after the start of the bookmark "bookmark_empty"
bookmarkNavigator.MoveToBookmark("bookmark_empty", True, True)
'Inserts the text body part after the bookmark start
bookmarkNavigator.InsertTextBodyPart(textBodyPart)
document.Save("Result.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Bookmarks/Insert-text-body-part-into-bookmark).

## Deleting content from a bookmark

You can delete the contents between bookmark start and end of the specified bookmark in a Word document.

The following code example shows how to remove the contents of a specified bookmark from Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads an existing Word document into DocIO instance
FileStream fileStreamPath = new FileStream("Bookmarks.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind "
bookmarkNavigator.MoveToBookmark("Northwind");
//Deletes bookmark content without deleting the format in the target document.
bookmarkNavigator.DeleteBookmarkContent(false);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads an existing Word document into DocIO instance
WordDocument document = new WordDocument("Bookmarks.docx", FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind "
bookmarkNavigator.MoveToBookmark("Northwind");
//Deletes bookmark content without deleting the format in the target document.
bookmarkNavigator.DeleteBookmarkContent(false);
document.Save("Result.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads an existing Word document into DocIO instance
Dim document As New WordDocument("Bookmarks.docx", FormatType.Docx)
'Creates the bookmark navigator instance to access the bookmark
Dim bookmarkNavigator As New BookmarksNavigator(document)
'Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind")
'Deletes bookmark content without deleting the format in the target document.
bookmarkNavigator.DeleteBookmarkContent(False)
document.Save("Result.docx", FormatType.Docx)
document.Close()
{% endhighlight %} 

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Bookmarks/Delete-bookmark-content).

## Replacing content in a bookmark

You can replace the contents of an existing bookmark with simple text, [TextBodyPart](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.TextBodyPart.html), [WordDocumentPart](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.WordDocumentPart.html).

N> You cannot replace the multi section contents into a bookmark within table in Word documents. Use "for loop" instead of "foreach loop" to iterate through document elements when replacing the bookmark contents to avoid “collection modified exception”, as there is a chance for modification in the document elements on replacing the bookmark contents.

As per Microsoft Word behavior, you cannot replace the bookmark contents when the bookmark start and end is not in a same table as following cases:

Case 1

![Bookmark start and end present in different tables](WorkingwithBookmarks_images/WorkingwithBookmarks_img1.jpeg)

Case 2

![Bookmark start placed outside table and end in table](WorkingwithBookmarks_images/WorkingwithBookmarks_img2.jpeg)

The following code example shows how to replace a specified bookmark content by using [ReplaceBookmarkContent](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarksNavigator.html#Syncfusion_DocIO_DLS_BookmarksNavigator_ReplaceBookmarkContent_Syncfusion_DocIO_DLS_TextBodyPart_) method in Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads an existing Word document into DocIO instance
FileStream fileStreamPath = new FileStream("Bookmarks.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind");
//Gets the bookmark content
TextBodyPart textBodyPart = bookmarkNavigator.GetBookmarkContent();
document.AddSection();
IWParagraph paragraph = document.LastSection.AddParagraph();
paragraph.AppendText("Northwind Database is a set of tables containing data fitted into predefined categories.");
//Adds the new bookmark into Word document
paragraph.AppendBookmarkStart("bookmark_empty");
paragraph.AppendBookmarkEnd("bookmark_empty");
//Moves the virtual cursor to the location before the end of the bookmark "bookmark_empty"
bookmarkNavigator.MoveToBookmark("bookmark_empty");
//Replaces the bookmark content with text body part
bookmarkNavigator.ReplaceBookmarkContent(textBodyPart);
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
WordDocument document = new WordDocument("Bookmarks.docx", FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind");
//Gets the bookmark content
TextBodyPart textBodyPart = bookmarkNavigator.GetBookmarkContent();
document.AddSection();
IWParagraph paragraph = document.LastSection.AddParagraph();
paragraph.AppendText("Northwind Database is a set of tables containing data fitted into predefined categories.");
//Adds the new bookmark into Word document
paragraph.AppendBookmarkStart("bookmark_empty");
paragraph.AppendBookmarkEnd("bookmark_empty");
//Moves the virtual cursor to the location before the end of the bookmark "bookmark_empty"
bookmarkNavigator.MoveToBookmark("bookmark_empty");
//Replaces the bookmark content with text body part
bookmarkNavigator.ReplaceBookmarkContent(textBodyPart);
document.Save("Result.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim document As New WordDocument("Bookmarks.docx", FormatType.Docx)
'Creates the bookmark navigator instance to access the bookmark
Dim bookmarkNavigator As New BookmarksNavigator(document)
'Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind")
'Gets the bookmark content
Dim textBodyPart As TextBodyPart = bookmarkNavigator.GetBookmarkContent()
document.AddSection()
Dim paragraph As IWParagraph = document.LastSection.AddParagraph()
paragraph.AppendText("Northwind Database is a set of tables containing data fitted into predefined categories.")
'Adds the new bookmark into Word document
paragraph.AppendBookmarkStart("bookmark_empty")
paragraph.AppendBookmarkEnd("bookmark_empty")
'Moves the virtual cursor to the location before the end of the bookmark "bookmark_empty"
bookmarkNavigator.MoveToBookmark("bookmark_empty")
'Replaces the bookmark content with text body part
bookmarkNavigator.ReplaceBookmarkContent(textBodyPart)
document.Save("Result.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Bookmarks/Replace-content-with-body-part).

The following code example shows how to replace a specified bookmark content by using [ReplaceContent](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocIO.DLS.BookmarksNavigator.html#Syncfusion_DocIO_DLS_BookmarksNavigator_ReplaceContent_Syncfusion_DocIO_DLS_WordDocumentPart_) method in Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Loads the template document with bookmark "Northwind" whose start and end are preserved in different section
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument templateDocument = new WordDocument(fileStreamPath, FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(templateDocument);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind");
//Gets the bookmark content as WordDocumentPart
WordDocumentPart wordDocumentPart = bookmarkNavigator.GetContent();
//Loads the Word document with bookmark NorthwindDB
FileStream fileStreamPath = new FileStream("Bookmarks.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "NorthwindDB"
bookmarkNavigator.MoveToBookmark("NorthwindDB");
//Replaces the bookmark content with word body part
bookmarkNavigator.ReplaceContent(wordDocumentPart);
//Close the WordDocumentPart instance
wordDocumentPart.Close();
//Closes the template document
templateDocument.Close();
//Saves the Word document to MemoryStream
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the document
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document with bookmark "Northwind" whose start and end are preserved in different section
WordDocument templateDocument = new WordDocument("Template.docx", FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
BookmarksNavigator bookmarkNavigator = new BookmarksNavigator(templateDocument);
//Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind");
//Gets the bookmark content as WordDocumentPart
WordDocumentPart wordDocumentPart = bookmarkNavigator.GetContent();
//Loads the Word document with bookmark NorthwindDB
WordDocument document = new WordDocument("Bookmarks.docx", FormatType.Docx);
//Creates the bookmark navigator instance to access the bookmark
bookmarkNavigator = new BookmarksNavigator(document);
//Moves the virtual cursor to the location before the end of the bookmark "NorthwindDB"
bookmarkNavigator.MoveToBookmark("NorthwindDB");
//Replaces the bookmark content with word body part
bookmarkNavigator.ReplaceContent(wordDocumentPart);
//Close the WordDocumentPart instance
wordDocumentPart.Close();
//Closes the template document
templateDocument.Close();
document.Save("Result.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document with bookmark "Northwind" whose start and end are preserved in different section
Dim templateDocument As New WordDocument("Template.docx", FormatType.Docx)
'Creates the bookmark navigator instance to access the bookmark
Dim bookmarkNavigator As New BookmarksNavigator(templateDocument)
'Moves the virtual cursor to the location before the end of the bookmark "Northwind"
bookmarkNavigator.MoveToBookmark("Northwind")
'Gets the bookmark content as WordDocumentPart
Dim wordDocumentPart As WordDocumentPart = bookmarkNavigator.GetContent()
'Loads the Word document with bookmark NorthwindDB
Dim document As New WordDocument("Bookmarks.docx", FormatType.Docx)
'Creates the bookmark navigator instance to access the bookmark
bookmarkNavigator = New BookmarksNavigator(document)
'Moves the virtual cursor to the location before the end of the bookmark "NorthwindDB"
bookmarkNavigator.MoveToBookmark("NorthwindDB")
'Replaces the bookmark content with word body part
bookmarkNavigator.ReplaceContent(wordDocumentPart)
'Close the WordDocumentPart instance
wordDocumentPart.Close()
'Closes the template document
templateDocument.Close()
document.Save("Result.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Bookmarks/Replace-content-with-document-part/.NET-Standard).

## See Also

* [How to replace the content between two different existing bookmarks in a word document](https://support.syncfusion.com/kb/article/11463/how-to-replace-the-content-between-two-different-existing-bookmarks-in-a-word-document)
* [How to insert hidden bookmarks to the document](https://support.syncfusion.com/kb/article/1058/how-do-i-insert-hidden-bookmarks-to-the-document)
* [How to insert nested bookmarks to the document](https://support.syncfusion.com/kb/article/1061/how-do-i-insert-nested-bookmarks-to-the-document)
* [How to get the bookmarks present in the document](https://support.syncfusion.com/kb/article/1064/how-do-i-get-the-bookmarks-present-in-the-document)
* [How to add a table in a bookmark location](https://support.syncfusion.com/kb/article/1139/how-to-add-a-table-in-a-bookmark-location)
* [How to insert bookmark for particular text in paragraph in Word document?](https://support.syncfusion.com/kb/article/12229/how-to-insert-bookmark-for-particular-text-in-paragraph-in-word-document)
* [How to get the section number of the particular bookmark in C#?](https://support.syncfusion.com/kb/article/12374/how-to-get-the-section-number-of-the-particular-bookmark-in-c)
* [How to replace bookmark content in one Word document with all the content from another Word document?](https://support.syncfusion.com/kb/article/12340/how-to-replace-bookmark-content-in-one-word-document-with-all-the-content-from-another-word)