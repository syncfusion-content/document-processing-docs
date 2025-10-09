---
title: Working with OLE Objects in .NET Word library | Syncfusion
description: Learn how to work with OLE Objects in a Word document using the Syncfusion<sup>&reg;</sup> .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Working with OLE Objects

OLE (Object Linking and Embedding) objects allow embedding and linking to documents and other objects. It allows the content of one program to be used in a Word document. The Objects can be inserted in the following two ways:

* Linked: The content is linked to the source file
* Embedded: The content is copied to the Word document and is not linked to the source file 

You can create and manipulate the OLE Objects of both Linked and Embedded types in the Word document by using [WOleObject](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WOleObject.html) instance.

## Add OLE Objects in Word document

N> Refer to the appropriate tabs in the code snippets section: ***C# [Cross-platform]*** for ASP.NET Core, Blazor, Xamarin, UWP, .NET MAUI, and WinUI; ***C# [Windows-specific]*** for WinForms and WPF; ***VB.NET [Windows-specific]*** for VB.NET applications.

The following code example explains how to add OLE objects to the document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Add-ole-object/.NET/Add-ole-object/Program.cs" %}
//Creates a new Word document 
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
//Opens the file to be embedded
FileStream fileStream = new FileStream("Book1.xlsx", FileMode.Open);
//Loads the picture instance with the image need to be displayed
WPicture picture = new WPicture(document);
FileStream imageStream = new FileStream(@"Image.png", FileMode.Open, FileAccess.ReadWrite);
picture.LoadImage(imageStream);
//Appends the OLE object to the paragraph
WOleObject oleObject = paragraph.AppendOleObject(fileStream, picture, OleObjectType.ExcelWorksheet);
//Saves the Word document to MemoryStream.
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the Word document.
document.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document 
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
//Opens the file to be embedded
FileStream stream = new FileStream("Book1.xlsx", FileMode.Open);
//Loads the picture instance with the image need to be displayed
WPicture picture = new WPicture(document);
picture.LoadImage(Image.FromFile("Image.png"));
//Appends the OLE object to the paragraph
WOleObject oleObject = paragraph.AppendOleObject(stream, picture, OleObjectType.ExcelWorksheet);
//Saves the Word document
document.Save("Sample.docx", FormatType.Docx);
//Closes the document
document.Close(); 
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new Word document 
Dim document As New WordDocument()
'Adds new section to the document
Dim section As IWSection = document.AddSection()
'Adds new paragraph to the section
Dim paragraph As IWParagraph = section.AddParagraph()
'Opens the file to be embedded
Dim stream As New FileStream("Book1.xlsx", FileMode.Open)
'Loads the picture instance with the image need to be displayed
Dim picture As New WPicture(document)
picture.LoadImage(Image.FromFile("Image.png"))
'Appends the OLE object to the paragraph
Dim oleObject As WOleObject = paragraph.AppendOleObject(stream, picture, OleObjectType.ExcelWorksheet)
'Saves the Word document
document.Save("Sample.docx", FormatType.Docx)
'Closes the document
document.Close() 
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Add-ole-object).

## Extract OLE Objects from Word document

The following code example explains how to extract OLE objects from the document and save as separate file.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Extract-ole-object/.NET/Extract-ole-object/Program.cs" %}
using (FileStream inputStream = new FileStream(@"Template.docx", FileMode.Open, FileAccess.Read))
{
    using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
    {
        // Extract the OLE object from the word document
        ExtractOLEObject(document);
    }
}

private static void ExtractOLEObject(WordDocument document)
{
    WOleObject oleObject = null;
    int oleIndex = -1;
    // Retrieving embedded object.
    foreach (WSection section in document.Sections)
    {
        foreach (WParagraph paragraph in section.Paragraphs)
        {
            foreach (Entity entity in paragraph.ChildEntities)
            {
                //Checks for oleObject
                if (entity.EntityType == EntityType.OleObject)
                {
                    //Gets OleObject
                    oleObject = entity as WOleObject;
                    //Gets index of OleObject
                    oleIndex = paragraph.ChildEntities.IndexOf(oleObject);
                    //Gets ole type
                    string oleTypeStr = oleObject.ObjectType;
                    // Checks for Excel type so that file can be saved with proper extension.
                    if (oleTypeStr.Contains("Excel 2003 Worksheet") || oleTypeStr.StartsWith("Excel.Sheet.8") || (oleTypeStr.Contains("Excel Worksheet") || oleTypeStr.StartsWith("Excel.Sheet.12")))
                    {
                        if ((oleTypeStr.Contains("Excel Worksheet") || oleTypeStr.StartsWith("Excel.Sheet.12")))
                        {
                            FileStream fstream = new FileStream("Workbook" + oleObject.OleStorageName + ".xlsx", FileMode.Create);
                            fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length);
                            fstream.Flush();
                            fstream.Close();
                            break;
                        }
                        else
                        {
                            FileStream fstream = new FileStream("Workbook" + oleObject.OleStorageName + ".xls", FileMode.Create);
                            fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length);
                            fstream.Flush();
                            fstream.Close();
                            break;
                        }
                    }
                    //Checks for Word document embedded object and save them
                    if (oleTypeStr.Contains("Word.Document"))
                    {
                        if (oleTypeStr.Contains("Word.Document.12"))
                        {
                            FileStream fstream = new FileStream("Sample" + oleObject.OleStorageName + ".docx", FileMode.Create);
                            fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length);
                            fstream.Flush();
                            fstream.Close();
                            break;
                        }
                        else if (oleTypeStr.Contains("Word.Document.8"))
                        {
                            FileStream fstream = new FileStream("Sample" + oleObject.OleStorageName + ".doc", FileMode.Create);
                            fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length);
                            fstream.Flush();
                            fstream.Close();
                            break;
                        }
                    }
                    //Checks for PDF embedded object and save them
                    if (oleTypeStr.Contains("Acrobat Document") || oleTypeStr.StartsWith("AcroExch.Document.7") || (oleTypeStr.Contains("AcroExch.Document.11") || oleTypeStr.StartsWith("AcroExch.Document.DC")))
                    {
                        FileStream fstream = new FileStream("Sample" + oleObject.OleStorageName + ".pdf", FileMode.Create);
                        fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length);
                        fstream.Flush();
                        fstream.Close();
                        break;
                    }

                }
            }
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing document
using (WordDocument document = new WordDocument("Template.docx"))
{
    // Extract the OLE object from the word document
    ExtractOLEObject(document);
}

private static void ExtractOLEObject(WordDocument document)
{
    WOleObject oleObject = null;
    int oleIndex = -1;
    // Retrieving embedded object.
    foreach (WSection section in document.Sections)
    {
        foreach (WParagraph paragraph in section.Paragraphs)
        {
            foreach (Entity entity in paragraph.ChildEntities)
            {
                //Checks for oleObject
                if (entity.EntityType == EntityType.OleObject)
                {
                    //Gets OleObject
                    oleObject = entity as WOleObject;
                    //Gets index of OleObject
                    oleIndex = paragraph.ChildEntities.IndexOf(oleObject);
                    //Gets ole type
                    string oleTypeStr = oleObject.ObjectType;
                    // Checks for Excel type so that file can be saved with proper extension.
                    if (oleTypeStr.Contains("Excel 2003 Worksheet") || oleTypeStr.StartsWith("Excel.Sheet.8") || (oleTypeStr.Contains("Excel Worksheet") || oleTypeStr.StartsWith("Excel.Sheet.12")))
                    {
                        if ((oleTypeStr.Contains("Excel Worksheet") || oleTypeStr.StartsWith("Excel.Sheet.12")))
                        {
                            FileStream fstream = new FileStream("Workbook" + oleObject.OleStorageName + ".xlsx", FileMode.Create);
                            fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length);
                            fstream.Flush();
                            fstream.Close();
                            break;
                        }
                        else
                        {
                            FileStream fstream = new FileStream("Workbook" + oleObject.OleStorageName + ".xls", FileMode.Create);
                            fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length);
                            fstream.Flush();
                            fstream.Close();
                            break;
                        }
                    }
                    //Checks for Word document embedded object and save them
                    if (oleTypeStr.Contains("Word.Document"))
                    {
                        if (oleTypeStr.Contains("Word.Document.12"))
                        {
                            FileStream fstream = new FileStream("Sample" + oleObject.OleStorageName + ".docx", FileMode.Create);
                            fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length);
                            fstream.Flush();
                            fstream.Close();
                            break;
                        }
                        else if (oleTypeStr.Contains("Word.Document.8"))
                        {
                            FileStream fstream = new FileStream("Sample" + oleObject.OleStorageName + ".doc", FileMode.Create);
                            fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length);
                            fstream.Flush();
                            fstream.Close();
                            break;
                        }
                    }
                    //Checks for PDF embedded object and save them
                    if (oleTypeStr.Contains("Acrobat Document") || oleTypeStr.StartsWith("AcroExch.Document.7") || (oleTypeStr.Contains("AcroExch.Document.11") || oleTypeStr.StartsWith("AcroExch.Document.DC")))
                    {
                        FileStream fstream = new FileStream("Sample" + oleObject.OleStorageName + ".pdf", FileMode.Create);
                        fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length);
                        fstream.Flush();
                        fstream.Close();
                        break;
                    }
                }
            }
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing document
Using document As WordDocument = New WordDocument(inputFileName)
    'Extract the OLE object from the word document
    ExtractOLEObject(document)
End Using

Private Shared Sub ExtractOLEObject(ByVal document As WordDocument)
    Dim oleObject As WOleObject = Nothing
    Dim oleIndex As Integer = -1
    ' Retrieving embedded object.
    For Each section As WSection In document.Sections
        For Each paragraph As WParagraph In section.Paragraphs
            For Each entity As Entity In paragraph.ChildEntities
                'Checks for oleObject
                If entity.EntityType Is EntityType.OleObject Then
                    'Gets OleObject
                    oleObject = TryCast(entity, WOleObject)
                    'Gets index of OleObject
                    oleIndex = paragraph.ChildEntities.IndexOf(oleObject)
                    'Gets ole type
                    Dim oleTypeStr As String = oleObject.ObjectType
                    ' Checks for Excel type so that file can be saved with proper extension.
                    If oleTypeStr.Contains("Excel 2003 Worksheet") OrElse oleTypeStr.StartsWith("Excel.Sheet.8") OrElse oleTypeStr.Contains("Excel Worksheet") OrElse oleTypeStr.StartsWith("Excel.Sheet.12") Then
                        If oleTypeStr.Contains("Excel Worksheet") OrElse oleTypeStr.StartsWith("Excel.Sheet.12") Then
                             Dim fstream As FileStream = New FileStream("Workbook" & oleObject.OleStorageName & ".xlsx", FileMode.Create)
                            fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length)
                            fstream.Flush()
                            fstream.Close()
                            Exit For
                        Else
                            Dim fstream As FileStream = New FileStream("Workbook" & oleObject.OleStorageName & ".xls", FileMode.Create)
                            fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length)
                            fstream.Flush()
                            fstream.Close()
                            Exit For
                        End If
                    End If
                    'Checks for Word document embedded object and save them
                    If oleTypeStr.Contains("Word.Document") Then
                        If oleTypeStr.Contains("Word.Document.12") Then
                            Dim fstream As FileStream = New FileStream("Sample" & oleObject.OleStorageName & ".docx", FileMode.Create)
                            fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length)
                            fstream.Flush()
                            fstream.Close()
                            Exit For
                        ElseIf oleTypeStr.Contains("Word.Document.8") Then
                            Dim fstream As FileStream = New FileStream("Sample" & oleObject.OleStorageName & ".doc", FileMode.Create)
                            fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length)
                            fstream.Flush()
                            fstream.Close()
                            Exit For
                        End If
                    End If
                    'Checks for PDF embedded object and save them
                    If oleTypeStr.Contains("Acrobat Document") OrElse oleTypeStr.StartsWith("AcroExch.Document.7") OrElse oleTypeStr.Contains("AcroExch.Document.11") OrElse oleTypeStr.StartsWith("AcroExch.Document.DC") Then
                        Dim fstream As FileStream = New FileStream("Sample" & oleObject.OleStorageName & ".pdf", FileMode.Create)
                        fstream.Write(oleObject.NativeData, 0, oleObject.NativeData.Length)
                        fstream.Flush()
                        fstream.Close()
                        Exit For
                    End If
                End If
            Next
        Next
    Next
End Sub

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Extract-ole-object).

## Remove OLE Objects from Word document
  
The following code example explains how to remove OLE objects from the document.
  
{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/DocIO-Examples/main/Paragraphs/Remove-ole-object/.NET/Remove-ole-object/Program.cs" %}
FileStream inputStream = new FileStream(@"Input.docx", FileMode.Open, FileAccess.Read);
WordDocument document = new WordDocument(inputStream, FormatType.Automatic);
inputStream.Dispose();
//Remove OLE object from the document
RemoveOLEObject(document);
//Saves the Word document to MemoryStream.
MemoryStream stream = new MemoryStream();
document.Save(stream, FormatType.Docx);
//Closes the Word document.
document.Close();

private static void RemoveOLEObject(WordDocument document)
{
    bool isFieldStart = false;
    // Retrieving embedded object.
    foreach (WSection section in document.Sections)
    {
        foreach (WParagraph paragraph in section.Paragraphs)
        {
            for (int i = 0; i < paragraph.ChildEntities.Count; i++)
            {
                Entity entity = paragraph.ChildEntities[i];
                //Checks for oleObject
                if (entity.EntityType == EntityType.OleObject)
                {
                    paragraph.ChildEntities.Remove(entity);
                    isFieldStart = true;
                    i--;
                }
                else if (isFieldStart && entity.EntityType == EntityType.FieldMark
                    && (entity as WFieldMark).Type == FieldMarkType.FieldEnd)
                {
                    paragraph.ChildEntities.Remove(entity);
                    isFieldStart = false;
                    i--;
                }
                else if (isFieldStart)
                {
                    paragraph.ChildEntities.Remove(entity);
                    i--;
                }
            }
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens the source document
WordDocument document = new WordDocument(@"Template.docx");
//Remove OLE object from the document
RemoveOLEObject(document);
//Saves the Word document
document.Save("Output.docx", FormatType.Docx);
//Closes the document
document.Close();

private static void RemoveOLEObject(WordDocument document)
{
    bool isFieldStart = false;
    // Retrieving embedded object.
    foreach (WSection section in document.Sections)
    {
        foreach (WParagraph paragraph in section.Paragraphs)
        {
            for (int i = 0; i < paragraph.ChildEntities.Count; i++)
            {
                Entity entity = paragraph.ChildEntities[i];
                //Checks for oleObject
                if (entity.EntityType == EntityType.OleObject)
                {
                    paragraph.ChildEntities.Remove(entity);
                    isFieldStart = true;
                    i--;
                }
                else if (isFieldStart && entity.EntityType == EntityType.FieldMark
                    && (entity as WFieldMark).Type == FieldMarkType.FieldEnd)
                {
                    paragraph.ChildEntities.Remove(entity);
                    isFieldStart = false;
                    i--;
                }
                else if (isFieldStart)
                {
                    paragraph.ChildEntities.Remove(entity);
                    i--;
                }
            }
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens the source document 
Dim document As WordDocument = New WordDocument("Template.docx")
'Remove OLE object from the document
RemoveOLEObject(document)
'Saves the Word document
document.Save("Output.docx", FormatType.Docx)
'Closes the document
document.Close()


Private Shared Sub RemoveOLEObject(ByVal document As WordDocument)
    Dim isFieldStart As Boolean = False
    'Retrieving embedded object.
    For Each section As WSection In document.Sections
        For Each paragraph As WParagraph In section.Paragraphs
            For i As Integer = 0 To paragraph.ChildEntities.Count - 1
                Dim entity As Entity = paragraph.ChildEntities(i)
                'Checks for oleObject
                If entity.EntityType Is EntityType.OleObject Then
                    paragraph.ChildEntities.Remove(entity)
                    isFieldStart = True
                    i -= 1
                ElseIf isFieldStart AndAlso entity.EntityType Is EntityType.FieldMark AndAlso TryCast(entity, WFieldMark).Type Is FieldMarkType.FieldEnd Then
                    paragraph.ChildEntities.Remove(entity)
                    isFieldStart = False
                    i -= 1
                ElseIf isFieldStart Then
                    paragraph.ChildEntities.Remove(entity)
                    i -= 1
                End If
            Next
        Next
    Next
End Sub
{% endhighlight %}

{% endtabs %}
  
You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Remove-ole-object).

## Online Demo

* Explore how to insert an OLE Object into the Word document using the .NET Word Library (DocIO) in a live demo [here](https://document.syncfusion.com/demos/word/insertoleobject#/tailwind).

## See Also

* [How to insert Excel, Word, PowerPoint, and PDF as OLE object in the Word document?](https://support.syncfusion.com/kb/article/19806/how-to-insert-excel-word-powerpoint-and-pdf-as-ole-object-in-the-word-document)
* [How to Add a PDF with first page preview in Word document .NET Core?](https://support.syncfusion.com/kb/article/19817/how-to-add-a-pdf-with-first-page-preview-in-word-document-net-core)
