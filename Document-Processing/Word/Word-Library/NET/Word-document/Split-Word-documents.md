---
title: Split Word documents in C# | DocIO | Syncfusion
description: Learn how to split a large Word document into several smaller ones using .NET Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---
# Split Word documents

The [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) allows you to split a large Word document into a number of smaller Word documents by section, heading, bookmark, and placeholder text programmatically.

By using this feature, you can split/extract the necessary parts from the original document for further processing.

You can save the resultant document as a Word document (DOCX, WordML, DOC), PDF, image, HTML, RTF, and more.

To quickly start splitting Word documents, please check out this video:
{% youtube "https://www.youtube.com/watch?v=w9np2NSfq94" %}

## Assemblies and NuGet packages required

Refer to the following links for the assemblies and NuGet packages required for each platform to split Word documents using the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) (DocIO).

* [Split Word documents assemblies](https://help.syncfusion.com/document-processing/word/word-library/net/assemblies-required)
* [Split Word documents NuGet packages](https://help.syncfusion.com/document-processing/word/word-library/net/nuget-packages-required)

N> For production use, register a Syncfusion license before splitting Word documents. Refer to the [licensing registration guide](https://help.syncfusion.com/document-processing/word/licensing/how-to-register-in-an-application) for details.

N> The code samples use the namespaces `Syncfusion.DocIO.DLS`, `System.IO`, and `System.Text.RegularExpressions`. Add the corresponding `using`/`Imports` directives for these namespaces before running the samples.

## Split by Section

The following code example illustrates how to split the Word document by section.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-document/Split-by-section/.NET/Split-by-section/Program.cs" %}
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
//Load the template document as a stream
using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx))
{
    //Iterate each section from Word document
    for (int i = 0; i < document.Sections.Count; i++)
    {
        //Create new Word document
        WordDocument newDocument = new WordDocument();
        //Add cloned section into new Word document
        newDocument.Sections.Add(document.Sections[i].Clone());
        //Saves the Word document to a file stream
        using (FileStream outputStream = new FileStream("Section" + i + ".docx", FileMode.OpenOrCreate, FileAccess.ReadWrite))
        {
            newDocument.Save(outputStream, FormatType.Docx);
            //Closes the document
            newDocument.Close();
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load the template document
using (WordDocument document = new WordDocument(@"Template.docx"))
{
    //Iterate each section from Word document
    for (int i = 0; i < document.Sections.Count; i++)
    {
        //Create new Word document
        WordDocument newDocument = new WordDocument();
        //Add cloned section into new Word document
        newDocument.Sections.Add(document.Sections[i].Clone());
        //Save and close the new Word document
        newDocument.Save("Section" + i + ".docx");
        newDocument.Close();
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Load the template document
Using document As WordDocument = New WordDocument("Template.docx")
    'Iterate each section from Word document
    For i As Integer = 0 To document.Sections.Count - 1
        'Create new Word document
        Dim newDocument As WordDocument = New WordDocument()
        'Add cloned section into new Word document
        newDocument.Sections.Add(document.Sections(i).Clone())
        'Save and close the new Word document
        newDocument.Save("Section" & i & ".docx")
        newDocument.Close()
    Next
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-document/Split-by-section).

## Split by Heading

The following code example illustrates how to split the Word document by using headings.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-document/Split-by-heading/.NET/Split-by-heading/Program.cs" %}
using (FileStream inputStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read))
{
    //Load the template document as a stream
    using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
    {   
        WordDocument newDocument = null;
        WSection newSection = null;
        int headingIndex = 0;
        //Iterate each section in the Word document.
        foreach (WSection section in document.Sections)
        {
            // Clone the section and add into new document.
            if (newDocument != null)
            newSection = AddSection(newDocument, section);
            //Iterate each child entity in the Word document.
            foreach (TextBodyItem item in section.Body.ChildEntities)
            {
                //If item is paragraph, then check for heading style and split.
                //else, add the item into new document.
                if (item is WParagraph)
                {
                    WParagraph paragraph = item as WParagraph;
                    //If paragraph has Heading 1 style, then save the traversed content as separate document.
                    //And create new document for new heading content.
                    if (paragraph.StyleName == "Heading 1")
                    {
                        if (newDocument != null)
                        {
                            //Saves the Word document
                            string fileName = "Document" + (headingIndex + 1) + ".docx";
                            SaveWordDocument(newDocument, fileName);
                            headingIndex++;
                        }
                        //Create new document for new heading content.
                        newDocument = new WordDocument();
                        newSection = AddSection(newDocument, section);
                        AddEntity(newSection, paragraph);
                    }
                    else if (newDocument != null)
                        AddEntity(newSection, paragraph);
                }
                else
                    AddEntity(newSection, item);
            }
        }
        //Save the remaining content as separate document.
        if (newDocument != null)
        {
            //Saves the Word document
            string fileName = "Document" + (headingIndex + 1) + ".docx";
            SaveWordDocument(newDocument, fileName);
        }
    }
}

private static WSection AddSection(WordDocument newDocument, WSection section)
{
    //Create a new section based on the original document
    WSection newSection = section.Clone();
    newSection.Body.ChildEntities.Clear();
    //Remove the first page header.
    newSection.HeadersFooters.FirstPageHeader.ChildEntities.Clear();
    //Remove the first page footer.
    newSection.HeadersFooters.FirstPageFooter.ChildEntities.Clear();
    //Remove the odd footer.
    newSection.HeadersFooters.OddFooter.ChildEntities.Clear();
    //Remove the odd header.
    newSection.HeadersFooters.OddHeader.ChildEntities.Clear();
    //Remove the even header.
    newSection.HeadersFooters.EvenHeader.ChildEntities.Clear();
    //Remove the even footer.
    newSection.HeadersFooters.EvenFooter.ChildEntities.Clear();
    //Add cloned section into new document
    newDocument.Sections.Add(newSection);
    return newSection;
}

private static void AddEntity(WSection newSection, Entity entity)
{
    //Add cloned item into the newly created section
    newSection.Body.ChildEntities.Add(entity.Clone());
}

private static void SaveWordDocument(WordDocument newDocument, string fileName)
{
    using (FileStream outputStream = new FileStream(fileName, FileMode.OpenOrCreate, FileAccess.ReadWrite))
    {
        //Save file stream as Word document
        newDocument.Save(outputStream, FormatType.Docx);
        //Closes the document
        newDocument.Close();
        newDocument = null;
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load the template document
using (WordDocument doc = new WordDocument("Template.docx"))
{
    WordDocument newDocument = null;
    WSection newSection = null;
    int headingIndex = 0;
    //Iterate each section in the Word document.
    foreach (WSection section in doc.Sections)
    {
        // Clone the section and add into new document.
        if (newDocument != null)
            newSection = AddSection(newDocument, section);
        //Iterate each child entity in the Word document.
        foreach (TextBodyItem item in section.Body.ChildEntities)
        {
            //If item is paragraph, then check for heading style and split.
            //else, add the item into new document.
            if (item is WParagraph)
            {
                WParagraph paragraph = item as WParagraph;
                //If paragraph has Heading 1 style, then save the traversed content as separate document.
                //And create new document for new heading content.
                if (paragraph.StyleName == "Heading 1")
                {
                    if (newDocument != null)
                    {
                        //Saves the Word document
                        string fileName = "Document" + (headingIndex + 1) + ".docx";
                        SaveWordDocument(newDocument, fileName);
                        headingIndex++;
                    }
                    //Create new document for new heading content.
                    newDocument = new WordDocument();
                    newSection = AddSection(newDocument, section);
                    AddEntity(newSection, paragraph);
                }
                else if (newDocument != null)
                    AddEntity(newSection, paragraph);
            }
            else
                AddEntity(newSection, item);
        }
    }
    //Save the remaining content as separate document.
    if (newDocument != null)
    {
        //Saves the Word document
        string fileName = "Document" + (headingIndex + 1) + ".docx";
        SaveWordDocument(newDocument, fileName);
    }
}

private static WSection AddSection(WordDocument newDocument, WSection section)
{
    //Create a new section based on the original document
    WSection newSection = section.Clone();
    newSection.Body.ChildEntities.Clear();
    //Remove the first page header.
    newSection.HeadersFooters.FirstPageHeader.ChildEntities.Clear();
    //Remove the first page footer.
    newSection.HeadersFooters.FirstPageFooter.ChildEntities.Clear();
    //Remove the odd footer.
    newSection.HeadersFooters.OddFooter.ChildEntities.Clear();
    //Remove the odd header.
    newSection.HeadersFooters.OddHeader.ChildEntities.Clear();
    //Remove the even header.
    newSection.HeadersFooters.EvenHeader.ChildEntities.Clear();
    //Remove the even footer.
    newSection.HeadersFooters.EvenFooter.ChildEntities.Clear();
    //Add cloned section into new document
    newDocument.Sections.Add(newSection);
    return newSection;
}

private static void AddEntity(WSection newSection, Entity entity)
{
    //Add cloned item into the newly created section
    newSection.Body.ChildEntities.Add(entity.Clone());
}

private static void SaveWordDocument(WordDocument newDocument, string fileName)
{
    //Save the new Word document
    newDocument.Save(fileName, FormatType.Docx);
    //Closes the document
    newDocument.Close();
    newDocument = null;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Load the template document
Using doc As WordDocument = New WordDocument("Template.docx")
    Dim newDocument As WordDocument = Nothing
    Dim newSection As WSection = Nothing
    Dim headingIndex = 0
    'Iterate each section in the Word document.
    For Each section As WSection In doc.Sections
        ' Clone the section and add into new document.
        If newDocument IsNot Nothing Then newSection = AddSection(newDocument, section)
        'Iterate each child entity in the Word document.
        For Each item As TextBodyItem In section.Body.ChildEntities
            'If item is paragraph, then check for heading style and split.
            'else, add the item into new document.
            If TypeOf item Is WParagraph Then
                Dim paragraph As WParagraph = TryCast(item, WParagraph)
                'If paragraph has Heading 1 style, then save the traversed content as separate document.
                'And create new document for new heading content.
                If paragraph.StyleName = "Heading 1" Then
                    If newDocument IsNot Nothing Then
                        'Saves the Word document
                        Dim fileName As String = "Document" & (headingIndex + 1).ToString() & ".docx"
                        SaveWordDocument(newDocument, fileName)
                        headingIndex += 1
                    End If
                    'Create new document for new heading content.
                    newDocument = New WordDocument()
                    newSection = AddSection(newDocument, section)
                    AddEntity(newSection, paragraph)
                ElseIf newDocument IsNot Nothing Then
                    AddEntity(newSection, paragraph)
                End If
            Else
                AddEntity(newSection, item)
            End If
        Next
    Next
    'Save the remaining content as separate document.
    If newDocument IsNot Nothing Then
        'Saves the Word document
        Dim fileName As String = "Document" & (headingIndex + 1).ToString() & ".docx"
        SaveWordDocument(newDocument, fileName)
    End If
End Using

Private Function AddSection(ByVal newDocument As WordDocument, ByVal section As WSection) As WSection
    Dim newSection As WSection = section.Clone()
    newSection.Body.ChildEntities.Clear()
    newSection.HeadersFooters.FirstPageHeader.ChildEntities.Clear()
    newSection.HeadersFooters.FirstPageFooter.ChildEntities.Clear()
    newSection.HeadersFooters.OddFooter.ChildEntities.Clear()
    newSection.HeadersFooters.OddHeader.ChildEntities.Clear()
    newSection.HeadersFooters.EvenHeader.ChildEntities.Clear()
    newSection.HeadersFooters.EvenFooter.ChildEntities.Clear()
    newDocument.Sections.Add(newSection)
    Return newSection
End Function

Private Sub AddEntity(ByVal newSection As WSection, ByVal entity As Entity)
    newSection.Body.ChildEntities.Add(entity.Clone())
End Sub

Private Sub SaveWordDocument(ByVal newDocument As WordDocument, ByVal fileName As String)
    newDocument.Save(fileName, FormatType.Docx)
    newDocument.Close()
    newDocument = Nothing
End Sub
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-document/Split-by-heading).

## Split by Bookmark

The following code example illustrates how to split the Word document using bookmarks. The [`BookmarksNavigator.MoveToBookmark`](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.BookmarksNavigator.html) API moves the virtual cursor to a bookmark, and [`GetContent`](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.BookmarksNavigator.html) returns the bookmark range as a `WordDocumentPart`; calling `WordDocumentPart.GetAsWordDocument()` produces a standalone `WordDocument` containing the bookmark's contents.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

N> If a bookmark name contains characters that are invalid in file names (for example, `\`, `/`, `:`, `*`, `?`, `"`, `<`, `>`, `|`), the `Save` call will throw. Sanitize the bookmark name before using it as a file name.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-document/Split-by-bookmark/.NET/Split-by-bookmark/Program.cs" %}
//Load an existing Word document.
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx))
{
    //Create the bookmark navigator instance to access the bookmark.
    BookmarksNavigator bookmarksNavigator = new BookmarksNavigator(document);
    BookmarkCollection bookmarkCollection = document.Bookmarks;
    //Iterate each bookmark in Word document.
    foreach (Bookmark bookmark in bookmarkCollection)
    {
         //Move the virtual cursor to the bookmark.
        bookmarksNavigator.MoveToBookmark(bookmark.Name);
        //Get the bookmark content as WordDocumentPart.
        WordDocumentPart documentPart = bookmarksNavigator.GetContent();
        //Save the WordDocumentPart as separate Word document
        using (WordDocument newDocument = documentPart.GetAsWordDocument())
        {
            //Save the Word document to file stream.
            using (FileStream outputFileStream = new FileStream(Path.GetFullPath(@"bookmark.Name + ".docx"), FileMode.Create, FileAccess.ReadWrite))
            {
                newDocument.Save(outputFileStream, FormatType.Docx);
            }
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load an existing Word document.
using (WordDocument document = new WordDocument("Template.docx", FormatType.Docx))
{
    //Create the bookmark navigator instance to access the bookmark.
    BookmarksNavigator bookmarksNavigator = new BookmarksNavigator(document);
    BookmarkCollection bookmarkCollection = document.Bookmarks;
    //Iterate each bookmark in Word document.
    foreach (Bookmark bookmark in bookmarkCollection)
    {
        //Move the virtual cursor to the bookmark.
        bookmarksNavigator.MoveToBookmark(bookmark.Name);
        //Get the bookmark content as WordDocumentPart.
        WordDocumentPart documentPart = bookmarksNavigator.GetContent();
        //Save the WordDocumentPart as separate Word document
        using (WordDocument newDocument = documentPart.GetAsWordDocument())
        {
            newDocument.Save(bookmark.Name + ".docx", FormatType.Docx);
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Load an existing Word document.
Using document As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
    'Create the bookmark navigator instance to access the bookmark.
    Dim bookmarksNavigator As BookmarksNavigator = New BookmarksNavigator(document)
    Dim bookmarkCollection As BookmarkCollection = document.Bookmarks
    'Iterate each bookmark in Word document.
    For Each bookmark As Bookmark In bookmarkCollection
    'Move the virtual cursor to the bookmark.
    bookmarksNavigator.MoveToBookmark(bookmark.Name)
    'Get the bookmark content as WordDocumentPart.
    Dim documentPart As WordDocumentPart = bookmarksNavigator.GetContent()
    'Save the WordDocumentPart as separate Word document
    Using newDocument As WordDocument = documentPart.GetAsWordDocument()
        'Save the Word document
        newDocument.Save(bookmark.Name & ".docx", FormatType.Docx)
    End Using
    Next
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-document/Split-by-bookmark).

## Split by Placeholder Text

The following code example illustrates how to split the Word document using placeholder text. The snippet finds every placeholder of the form `<<…>>`, and inserts `BookmarkStart`/`BookmarkEnd` markers around each *pair* of placeholders (the start placeholder of a pair becomes the bookmark start; the next placeholder becomes the bookmark end). After all pairs are marked, each bookmark is extracted into a standalone document. The algorithm assumes the placeholders appear in start/end pairs; an odd number of placeholders will leave the last one unpaired and should be validated before processing.

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

N> The regular expression `"<<(.*)>>"` is greedy and will match from the first `<<` to the last `>>` in a single line/span. If your placeholders appear on the same line, use a non-greedy pattern such as `"<<(.*?)>>"` to limit each match to a single placeholder.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Word-document/Split-by-placeholder-text/.NET/Split-by-placeholder-text/Program.cs" %}
//Load an existing Word document.
FileStream fileStreamPath = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
using (WordDocument document = new WordDocument(fileStreamPath, FormatType.Docx))
{
    //Finds all the placeholder text in the Word document.
    TextSelection[] textSelections = document.FindAll(new Regex("<<(.*)>>"));
    if (textSelections != null)
    {
        //Unique ID for each bookmark.
        int bkmkId = 1;
        //Collection to hold the inserted bookmarks.
        List<string> bookmarks = new List<string>();
        //Iterate each text selection.
        for (int i = 0; i < textSelections.Length; i++)
        {
            //Get the placeholder as WTextRange.
            WTextRange textRange = textSelections[i].GetAsOneRange();
            //Get the index of the placeholder text. 
            WParagraph startParagraph = textRange.OwnerParagraph;
            int index = startParagraph.ChildEntities.IndexOf(textRange);
            string bookmarkName = "Bookmark_" + bkmkId;
            //Add new bookmark to bookmarks collection.
            bookmarks.Add(bookmarkName);
            //Create bookmark start.
            BookmarkStart bkmkStart = new BookmarkStart(document, bookmarkName);
            //Insert the bookmark start before the start placeholder.
            startParagraph.ChildEntities.Insert(index, bkmkStart);
            //Remove the placeholder text.
            textRange.Text = string.Empty;

            i++;
            //Get the placeholder as WTextRange.
            textRange = textSelections[i].GetAsOneRange();
            //Get the index of the placeholder text. 
            WParagraph endParagraph = textRange.OwnerParagraph;
            index = endParagraph.ChildEntities.IndexOf(textRange);
            //Create bookmark end.
            BookmarkEnd bkmkEnd = new BookmarkEnd(document, bookmarkName);
            //Insert the bookmark end after the end placeholder.
            endParagraph.ChildEntities.Insert(index + 1, bkmkEnd);
            bkmkId++;
            //Remove the placeholder text.
            textRange.Text = string.Empty;
        }
        BookmarksNavigator bookmarksNavigator = new BookmarksNavigator(document);
        int fileIndex = 1;
        foreach (string bookmark in bookmarks)
        {
            //Move the virtual cursor to the location before the end of the bookmark.
            bookmarksNavigator.MoveToBookmark(bookmark);
            //Get the bookmark content as WordDocumentPart.
            WordDocumentPart wordDocumentPart = bookmarksNavigator.GetContent();
            //Save the WordDocumentPart as separate Word document.
            using (WordDocument newDocument = wordDocumentPart.GetAsWordDocument())
           {
                //Save the Word document to file stream.
                using (FileStream outputFileStream = new FileStream(Path.GetFullPath(@"Placeholder_" + fileIndex + ".docx"), FileMode.Create, FileAccess.ReadWrite))
                {
                    newDocument.Save(outputFileStream, FormatType.Docx);
                }
            }
         fileIndex++;
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load an existing Word document into DocIO instance.
using (WordDocument document = new WordDocument("Template.docx", FormatType.Docx))
{
    //Finds all the placeholder text in the Word document.
    TextSelection[] textSelections = document.FindAll(new Regex("<<(.*)>>"));
    if (textSelections != null)
    {
        //Unique ID for each bookmark.
        int bkmkId = 1;
        //Collection to hold the inserted bookmarks.
        List<string> bookmarks = new List<string>();
        //Iterate each text selection.
        for (int i = 0; i < textSelections.Length; i++)
        {
            //Get the placeholder as WTextRange.
            WTextRange textRange = textSelections[i].GetAsOneRange();
            //Get the index of the placeholder text. 
            WParagraph startParagraph = textRange.OwnerParagraph;
            int index = startParagraph.ChildEntities.IndexOf(textRange);
            string bookmarkName = "Bookmark_" + bkmkId;
            //Add new bookmark to bookmarks collection.
            bookmarks.Add(bookmarkName);
            //Create bookmark start.
            BookmarkStart bkmkStart = new BookmarkStart(document, bookmarkName);
            //Insert the bookmark start before the start placeholder.
            startParagraph.ChildEntities.Insert(index, bkmkStart);
            //Remove the placeholder text.
            textRange.Text = string.Empty;

            i++;
            //Get the placeholder as WTextRange.
            textRange = textSelections[i].GetAsOneRange();
            //Get the index of the placeholder text. 
            WParagraph endParagraph = textRange.OwnerParagraph;
            index = endParagraph.ChildEntities.IndexOf(textRange);
            //Create bookmark end.
            BookmarkEnd bkmkEnd = new BookmarkEnd(document, bookmarkName);
            //Insert the bookmark end after the end placeholder.
            endParagraph.ChildEntities.Insert(index + 1, bkmkEnd);
            bkmkId++;
            //Remove the placeholder text.
            textRange.Text = string.Empty;
        }
        BookmarksNavigator bookmarksNavigator = new BookmarksNavigator(document);
        int fileIndex = 1;
        foreach (string bookmark in bookmarks)
        {
            //Move the virtual cursor to the location before the end of the bookmark.
            bookmarksNavigator.MoveToBookmark(bookmark);
            //Get the bookmark content as WordDocumentPart.
            WordDocumentPart wordDocumentPart = bookmarksNavigator.GetContent();
            //Save the WordDocumentPart as separate Word document.
            using (WordDocument newDocument = wordDocumentPart.GetAsWordDocument())
                 newDocument.Save("Placeholder_" + fileIndex + ".docx", FormatType.Docx);
         fileIndex++;
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Load an existing Word document into DocIO instance.
Using document As WordDocument = New WordDocument("Template.docx", FormatType.Docx)
            'Finds all the placeholder text in the Word document.
            Dim textSelections As TextSelection() = document.FindAll(New Regex("<<(.*)>>"))

            If textSelections IsNot Nothing Then
                'Unique ID for each bookmark.
                Dim bkmkId = 1
                'Collection to hold the inserted bookmarks.
                Dim bookmarks As List(Of String) = New List(Of String)()
                'Iterate each text selection.
                For i = 0 To textSelections.Length - 1
                    'Get the placeholder as WTextRange.
                    Dim textRange As WTextRange = textSelections(i).GetAsOneRange()
                    'Get the index of the placeholder text. 
                    Dim startParagraph As WParagraph = textRange.OwnerParagraph
                    Dim index As Integer = startParagraph.ChildEntities.IndexOf(textRange)
                    Dim bookmarkName As String = "Bookmark_" & bkmkId.ToString()
                    'Add new bookmark to bookmarks collection.
                    bookmarks.Add(bookmarkName)
                    'Create bookmark start.
                    Dim bkmkStart As BookmarkStart = New BookmarkStart(document, bookmarkName)
                    'Insert the bookmark start before the start placeholder.
                    startParagraph.ChildEntities.Insert(index, bkmkStart)
                    'Remove the placeholder text.
                    textRange.Text = String.Empty

                    i += 1
                    'Get the placeholder as WTextRange.
                    textRange = textSelections(i).GetAsOneRange()
                    'Get the index of the placeholder text. 
                    Dim endParagraph As WParagraph = textRange.OwnerParagraph
                    index = endParagraph.ChildEntities.IndexOf(textRange)
                    'Create bookmark end.
                    Dim bkmkEnd As BookmarkEnd = New BookmarkEnd(document, bookmarkName)
                    'Insert the bookmark end after the end placeholder.
                    endParagraph.ChildEntities.Insert(index + 1, bkmkEnd)
                    bkmkId += 1
                    'Remove the placeholder text.
                    textRange.Text = String.Empty
                Next

                Dim bookmarksNavigator As BookmarksNavigator = New BookmarksNavigator(document)
                Dim fileIndex = 1
                For Each bookmark In bookmarks
                    'Move the virtual cursor to the location before the end of the bookmark.
                    bookmarksNavigator.MoveToBookmark(bookmark)
                    'Get the bookmark content as WordDocumentPart.
                    Dim wordDocumentPart As WordDocumentPart = bookmarksNavigator.GetContent()
                    'Save the WordDocumentPart as separate Word document.
                    Using newDocument As WordDocument = wordDocumentPart.GetAsWordDocument()
                        'Save the Word document.
                         newDocument.Save("Placeholder_" & fileIndex & ".docx", FormatType.Docx)
                    End Using
                    fileIndex += 1
                Next
            End If
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-document/Split-by-placeholder-text).

## Online Demo

* Explore how to split a Word document by section using the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/splitbysection#/tailwind).
* See how to split a Word document by heading using the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/splitbyheading#/tailwind).
* See how to split a Word document by bookmark using the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/splitbybookmark#/tailwind).
* See how to split a Word document by placeholder text using the [.NET Word Library](https://www.syncfusion.com/document-sdk/net-word-library) (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/splitbyplaceholder#/tailwind).

## See Also

* [How to split Word document by bookmarks in C#, VB.NET](https://support.syncfusion.com/kb/article/6723/how-to-split-word-document-by-bookmarks-in-c-vb-net)
* [How to split Word document by sections in C#, VB.NET](https://support.syncfusion.com/kb/article/6456/how-to-split-word-document-by-sections-in-c-vb-net)