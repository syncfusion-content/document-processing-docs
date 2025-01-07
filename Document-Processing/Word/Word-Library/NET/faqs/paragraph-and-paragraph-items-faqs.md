---
title: FAQ about Paragraph and Paragraph Items | DocIO | Syncfusion&reg;
description: Learn about the frequently asked questions about paragraph and paragraph items in Word document in the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Frequently asked questions about paragraph and paragraph items in Word document

The frequently asked questions about working with paragraph and paragraph items in Word documents using DocIO are listed below.

## How to modify an existing style?

The following code illustrates how to modify the built-in style while creating new Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document 
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Creates built-in style and modifies its properties
Style style = Style.CreateBuiltinStyle(BuiltinStyle.Heading1, document) as Style;
style.CharacterFormat.Italic = true;
style.CharacterFormat.TextColor = Color.DarkGreen;
//Adds it to the styles collection
document.Styles.Add(style);
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
IWTextRange text = paragraph.AppendText("A built-in style is modified and is applied to this paragraph.");
//Applies the new style to paragraph
paragraph.ApplyStyle(style.Name);
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
'Creates built-in style and modifies its properties
Dim style__1 As Style = TryCast(Style.CreateBuiltinStyle(BuiltinStyle.Heading1, document), Style)
style__1.CharacterFormat.Italic = True
style__1.CharacterFormat.TextColor = Color.DarkGreen
'Adds it to the styles collection
document.Styles.Add(style__1)
'Adds new paragraph to the section
Dim paragraph As IWParagraph = section.AddParagraph()
Dim text As IWTextRange = paragraph.AppendText("A built-in style is modified and is applied to this paragraph.")
'Applies the new style to paragraph
paragraph.ApplyStyle(style__1.Name)
'Saves the Word document
document.Save("Sample.docx", FormatType.Docx)
'Closes the document
document.Close()
{% endhighlight %}  

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-document/Modify-built-in-style).

## How to set OpenType Font Features?

The Open type features provide special effects for the text. This feature is specific to Word 2010 and later version documents.

The OpenType features includes the following:

* Ligatures – combination of characters, written as glyph
* Use Contextual Alternates – combination of letters based on surrounding characters
* Number spacing – specifies number width 
* Number forms – specifies number height
* Stylistic sets – specifies the look of the text, based on the font used

The following code illustrates how to set ligature types for text.

{% tabs %}  

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document 
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
//Adds new text
IWTextRange text = paragraph.AppendText("Text to describe discretional ligatures");
//Sets ligature type
text.CharacterFormat.Ligatures = LigatureType.Discretional;
text.CharacterFormat.FontName = "Arial";
paragraph = section.AddParagraph();
text = paragraph.AppendText("Text to describe contextual ligatures");
text.CharacterFormat.Ligatures = LigatureType.Contextual;
text.CharacterFormat.FontName = "Arial";
paragraph = section.AddParagraph();
text = paragraph.AppendText("Text to describe historical ligatures");
text.CharacterFormat.Ligatures = LigatureType.Historical;
text.CharacterFormat.FontName = "Arial";
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new Word document 
Dim document As New WordDocument()
'Adds new section to the document
Dim section As IWSection = document.AddSection()
'Adds new paragraph to the section
Dim paragraph As IWParagraph = section.AddParagraph()
'Adds new text
Dim text As IWTextRange = paragraph.AppendText("Text to describe discretional ligatures")
'Sets ligature type as Discretional
text.CharacterFormat.Ligatures = LigatureType.Discretional
text.CharacterFormat.FontName = "Arial"
paragraph = section.AddParagraph()
text = paragraph.AppendText("Text to describe contextual ligatures")
'Sets ligature type as Contextual
text.CharacterFormat.Ligatures = LigatureType.Contextual
text.CharacterFormat.FontName = "Arial"
paragraph = section.AddParagraph()
text = paragraph.AppendText("Text to describe historical ligatures")
'Sets ligature type as Historical
text.CharacterFormat.Ligatures = LigatureType.Historical
text.CharacterFormat.FontName = "Arial"
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %} 

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Set-ligature-types-tor-text).

The following code example illustrates how to set contextual alternates.

{% tabs %} 

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document 
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
//Adds new text
IWTextRange text = paragraph.AppendText("Text to describe contextual alternates");
text.CharacterFormat.FontName = "Segoe Script";
//Sets contextual alternates
text.CharacterFormat.UseContextualAlternates = true;
paragraph = section.AddParagraph();
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new Word document 
Dim document As New WordDocument()
'Adds new section to the document
Dim section As IWSection = document.AddSection()
'Adds new paragraph to the section
Dim paragraph As IWParagraph = section.AddParagraph()
'Adds new text
Dim text As IWTextRange = paragraph.AppendText("Text to describe contextual alternates")
text.CharacterFormat.FontName = "Segoe Script"
'Sets contextual alternates
text.CharacterFormat.UseContextualAlternates = True
paragraph = section.AddParagraph()
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %} 

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Set-contextual-alternates-for-text).

The following code example illustrates how to set number spacing.

{% tabs %}  

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document 
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
//Adds new text
IWTextRange text = paragraph.AppendText("Numbers to describe tabular number spacing 0123456789");
text.CharacterFormat.FontName = "Calibri";
//Sets number spacing
text.CharacterFormat.NumberSpacing = NumberSpacingType.Tabular;
paragraph = section.AddParagraph();
text = paragraph.AppendText("Numbers to describe proportional number spacing 0123456789");
text.CharacterFormat.FontName = "Calibri";
//Sets number spacing
text.CharacterFormat.NumberSpacing = NumberSpacingType.Proportional;
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new Word document 
Dim document As New WordDocument()
'Adds new section to the document
Dim section As IWSection = document.AddSection()
'Adds new paragraph to the section
Dim paragraph As IWParagraph = section.AddParagraph()
'Adds new text
Dim text As IWTextRange = paragraph.AppendText("Numbers to describe tabular number spacing 0123456789")
text.CharacterFormat.FontName = "Calibri"
'Sets number spacing
text.CharacterFormat.NumberSpacing = NumberSpacingType.Tabular
paragraph = section.AddParagraph()
text = paragraph.AppendText("Numbers to describe proportional number spacing 0123456789")
text.CharacterFormat.FontName = "Calibri"
'Sets number spacing
text.CharacterFormat.NumberSpacing = NumberSpacingType.Proportional
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %} 

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Set-number-spacing).

The following code example illustrates how to set number style.

{% tabs %} 

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document 
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
//Adds new text
IWTextRange text = paragraph.AppendText("Numbers to describe oldstyle number form 0123456789");
text.CharacterFormat.FontName = "Calibri";
//Sets number style
text.CharacterFormat.NumberForm = NumberFormType.OldStyle;
paragraph = section.AddParagraph();
text = paragraph.AppendText("Numbers to describe lining number form 0123456789");
text.CharacterFormat.FontName = "Calibri";
//Sets number style
text.CharacterFormat.NumberForm = NumberFormType.Lining;
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new Word document 
Dim document As New WordDocument()
'Adds new section to the document
Dim section As IWSection = document.AddSection()
'Adds new paragraph to the section
Dim paragraph As IWParagraph = section.AddParagraph()
'Adds new text
Dim text As IWTextRange = paragraph.AppendText("Numbers to describe oldstyle number form 0123456789")
text.CharacterFormat.FontName = "Calibri"
'Sets number style
text.CharacterFormat.NumberForm = NumberFormType.OldStyle
paragraph = section.AddParagraph()
text = paragraph.AppendText("Numbers to describe lining number form 0123456789")
text.CharacterFormat.FontName = "Calibri"
'Sets number style
text.CharacterFormat.NumberForm = NumberFormType.Lining
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Set-number-forms).

The following code example illustrates how to set different styles for the text.

{% tabs %}  

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new Word document 
WordDocument document = new WordDocument();
//Adds new section to the document
IWSection section = document.AddSection();
//Adds new paragraph to the section
IWParagraph paragraph = section.AddParagraph();
//Adds new text
IWTextRange text = paragraph.AppendText("Text to describe stylistic sets");
text.CharacterFormat.FontName = "Gabriola";
//Sets stylistic set
text.CharacterFormat.StylisticSet = StylisticSetType.StylisticSet06;
paragraph = section.AddParagraph();
//Adds new text
text = paragraph.AppendText("Text to describe stylistic sets");
text.CharacterFormat.FontName = "Gabriola";
//Sets stylistic set
text.CharacterFormat.StylisticSet = StylisticSetType.StylisticSet15;
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new Word document 
Dim document As New WordDocument()
'Adds new section to the document
Dim section As IWSection = document.AddSection()
'Adds new paragraph to the section
Dim paragraph As IWParagraph = section.AddParagraph()
'Adds new text
Dim text As IWTextRange = paragraph.AppendText("Text to describe stylistic sets")
text.CharacterFormat.FontName = "Gabriola"
'Sets stylistic set
text.CharacterFormat.StylisticSet = StylisticSetType.StylisticSet06
paragraph = section.AddParagraph()
'Adds new text
text = paragraph.AppendText("Text to describe stylistic sets")
text.CharacterFormat.FontName = "Gabriola"
'Sets stylistic set
text.CharacterFormat.StylisticSet = StylisticSetType.StylisticSet15
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Paragraphs/Stylistic-set-for-text).

## How to extract the images in the document?

The following code illustrates how to extract the images in the document.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx");
WTextBody textbody = document.Sections[0].Body;
Image image;
int i = 1;
//Iterates through the paragraphs
foreach (WParagraph paragraph in textbody.Paragraphs)
{
    //Iterates through the paragraph items 
    foreach (ParagraphItem item in paragraph.ChildEntities)
    {
        //Gets the picture and saves it into specified location
        switch (item.EntityType)
        {
            case EntityType.Picture:
                WPicture picture = item as WPicture;
                image = picture.Image;
                image.Save(@"D:/Data/Image" + i + ".jpeg", ImageFormat.Jpeg);
                i++;
                break;
            default:
                break;
        }
    }
}
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As New WordDocument("Template.docx")
Dim textbody As WTextBody = document.Sections(0).Body
Dim image As Image
Dim i As Integer = 1
'Iterates through the paragraphs
For Each paragraph As WParagraph In textbody.Paragraphs
    'Iterates through the paragraph items 
    For Each item As ParagraphItem In paragraph.ChildEntities
        'Gets the picture and saves it into specified location
        Select Case item.EntityType
            Case EntityType.Picture
                Dim picture As WPicture = TryCast(item, WPicture)
                image = picture.Image
                image.Save("D:/Data/Image" & i & ".jpeg", ImageFormat.Jpeg)
                i += 1
                Exit Select
            Case Else
                Exit Select
        End Select
    Next
Next
'Close the document
document.Close()
{% endhighlight %} 

{% endtabs %}  

The images in the document can be extracted into a specific location when exporting it to HTML file. The following code illustrates how to extract images.

{% tabs %}  

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the template document
WordDocument document = new WordDocument("Template.docx");
//Sets the location to extract images
document.SaveOptions.HtmlExportImagesFolder = @"D:/Data/";
//Saves the document as html file
HTMLExport export = new HTMLExport();
export.SaveAsXhtml(document, "Template.html");
//Closes the document
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the template document
Dim document As New WordDocument("Template.docx")
'Sets the location to extract images
document.SaveOptions.HtmlExportImagesFolder = "D:/Data/"
'Saves the document as html file
Dim export As New HTMLExport()
export.SaveAsXhtml(document, "Template.html")
'Closes the document
document.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/FAQs/Extract-images-from-Word-document).

## Can the chart data be refreshed?

Yes, Essential&reg; DocIO supports refreshing the chart data. For more details, refer [Working with charts](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-charts).

## How to detect the shape type in a Word document?

To detect the type of a shape in a Word document, you can use the [AutoShapeType](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.Shape.html#Syncfusion_DocIO_DLS_Shape_AutoShapeType) property from the [Shape](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.Shape.html) class, which specifies the type of the shape. Here's a code snippet to detect the shape type:

{% tabs %}

{% highlight c# tabtitle="C#" %}
// Get the last paragraph from the document
WParagraph paragraph = document.LastParagraph;
// Access the shape from the paragraph's child entities
Shape shape = paragraph.ChildEntities[i] as Shape;
// Get the type of the shape
AutoShapeType shapeType = shape.AutoShapeType;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}
' Get the last paragraph from the document
Dim paragraph As WParagraph = document.LastParagraph
' Access the shape from the paragraph's child entities
Dim shape As Shape = TryCast(paragraph.ChildEntities(i), Shape)
' Get the type of the shape
Dim shapeType As AutoShapeType = shape.AutoShapeType
{% endhighlight %}

{% endtabs %}

## Is it possible to change the DATE  field value in a Word document using DocIO? 

No, DocIO does not allow directly changing the value of a DATE field in a Word document. This is because DATE fields are auto-update fields, and their values are refreshed automatically when the document is opened in Microsoft Word.

When a Word document with a DATE field is opened in Microsoft Word, the field value updates automatically, even in read-only mode. DocIO follows the same behavior as Microsoft Word to ensure compatibility and consistency.

In conclusion, this behavior is not a limitation or issue, but rather aligns with Microsoft Word's standard functionality.

## Why are paragraph formats not preserved when appending HTML to an existing Word document?

When using the [AppendHTML(String)](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WParagraph.html#Syncfusion_DocIO_DLS_WParagraph_AppendHTML_System_String_) in DocIO, the formatting from the HTML content is maintained instead of Word document paragraph formatting, as Microsoft Word also behaves in a similar way. This is not an issue but rather the expected behavior of the AppendHTML(string) method.

To adjust the paragraph formatting, you can iterate through the paragraphs inserted by the AppendHTML(string) method and set the formatting. Below is a code snippet that demonstrates this approach.

{% tabs %}

{% highlight c# tabtitle="C#" %}
// Open the file as Stream
using (FileStream inputStream = new FileStream(@"Input.docx", FileMode.Open, FileAccess.Read))
//Creates an instance of WordDocument class
using (WordDocument document = new WordDocument(inputStream, FormatType.Docx))
{
    // Access the first section of the document
    WSection section = document.Sections[0];
    // Get the index of the last paragraph
    int paraIndex = section.Body.Paragraphs.Count - 1;
    // Append HTML content to the document
    document.LastParagraph.AppendHTML("<p>First</p><p>Second</p>");
    // Iterate through the paragraphs in the section's body
    for (int i = paraIndex; i < section.Body.ChildEntities.Count; i++)
    {
        // Get the paragraph and check if it's not null
        WParagraph paragraph = section.Body.ChildEntities[i] as WParagraph;
        if (paragraph != null)
        {
            // Set the paragraph formatting spacing to 0
            paragraph.ParagraphFormat.BeforeSpacing = 0;
            paragraph.ParagraphFormat.AfterSpacing = 0;
        }
    }
    // Save the modified document to a new file
    using (FileStream outputStream = new FileStream(@"Output.docx", FileMode.Create, FileAccess.Write))
    {
        document.Save(outputStream, FormatType.Docx);
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}
' Open the file as Stream
Using inputStream As New FileStream("Input.docx", FileMode.Open, FileAccess.Read),
      document As New WordDocument(inputStream, FormatType.Docx)
    ' Access the first section of the document
    Dim section As WSection = document.Sections(0)
    ' Get the index of the last paragraph
    Dim paraIndex As Integer = section.Body.Paragraphs.Count - 1
    ' Append HTML content to the document
    document.LastParagraph.AppendHTML("<p>First</p><p>Second</p>")
    ' Iterate through the paragraphs in the section's body
    For i As Integer = paraIndex To section.Body.ChildEntities.Count - 1
        ' Get the paragraph and check if it's not null
        Dim paragraph As WParagraph = TryCast(section.Body.ChildEntities(i), WParagraph)
        If paragraph IsNot Nothing Then
            ' Set the paragraph formatting spacing to 0
            paragraph.ParagraphFormat.BeforeSpacing = 0
            paragraph.ParagraphFormat.AfterSpacing = 0
        End If
    Next
    ' Save the modified document to a new file
    Using outputStream As New FileStream("Output.docx", FileMode.Create, FileAccess.Write)
        document.Save(outputStream, FormatType.Docx)
    End Using
End Using
{% endhighlight %}

{% endtabs %}