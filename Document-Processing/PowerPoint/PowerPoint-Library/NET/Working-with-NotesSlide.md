---
title: Working with Notes in PowerPoint Presentation | Syncfusion |
description: Code examples to create, edit, and format notes in C# using .NET PowerPoint Presentation Library without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: Presentation
documentation: UG
keywords: Working with Notes
---

# Working with PowerPoint Notes

Notes are the contents associated with each slide and are visible only to the presenter when monitors are shared in “Presenter View”. They show hints for the speaker, so they are often called “Speaker Notes”. The presenter can optionally add key points to notes. You can add and modify the notes in your slide using Syncfusion<sup>&reg;</sup> Presentation library.

## Prerequisites

Before you begin, make sure the following NuGet package is installed in your application. For more information on the assemblies and NuGet packages required for your target platform, refer to [Assemblies Required](Assemblies-Required) and [NuGet Packages Required](NuGet-Packages-Required).

## Adding Notes to a Slide

The following code example demonstrates how to add notes to a PowerPoint slide.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]"
playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Notes/Add-notes-to-PowerPoint-slide/.NET/Add-notes-to-PowerPoint-slide/Program.cs" %}
//Creates a Presentation without slides.
IPresentation pptxDoc = Presentation.Create();
//Adds new slide with blank slide layout type.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Adds new notes slide in the specified slide.
INotesSlide notesSlide = slide.AddNotesSlide();
//Adds text content into the Notes Slide.
notesSlide.NotesTextBody.AddParagraph("Notes content");
//Saves the Presentation to the file system.
pptxDoc.Save("PresentationWithNotesSlide.pptx");
//Closes the Presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a Presentation without slides.
IPresentation pptxDoc = Presentation.Create();
//Adds new slide with blank slide layout type.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Adds new notes slide in the specified slide.
INotesSlide notesSlide = slide.AddNotesSlide();
//Adds text content into the Notes Slide.
notesSlide.NotesTextBody.AddParagraph("Notes content");
//Saves Presentation with specified file name with extension.
pptxDoc.Save("PresentationWithNotesSlide.pptx");
//Closes the Presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a Presentation without slides.
Dim pptxDoc As IPresentation = Presentation.Create()
'Adds new slide with blank slide layout type.
Dim slide As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
'Adds new notes slide in the specified slide.
Dim notesSlide As INotesSlide = slide.AddNotesSlide()
'Adds text content into the Notes Slide.
notesSlide.NotesTextBody.AddParagraph("Notes content")
'Saves Presentation with specified file name with extension.
pptxDoc.Save("PresentationWithNotesSlide.pptx")
'Closes the Presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Notes/Add-notes-to-PowerPoint-slide).

N> `AddNotesSlide()` returns the newly created `INotesSlide` for the specified slide. If a notes slide already exists for that slide, the existing notes slide is returned. The notes slide can also be accessed through the `slide.NotesSlide` property.

## Adding Text into the Notes

The following code example demonstrates how to add formatted text to notes.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]"
playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Notes/Add-text-in-notes/.NET/Add-text-in-notes/Program.cs" %}
//Creates a Presentation without slides.
IPresentation pptxDoc = Presentation.Create();
//Adds new slide with blank slide layout type.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Adds new notes slide in the specified slide.
INotesSlide notesSlide = slide.AddNotesSlide();
//Adds a paragraph into the text body.
IParagraph paragraph = notesSlide.NotesTextBody.AddParagraph();
//Adds a text part into the paragraph.
ITextPart textPart = paragraph.AddTextPart();
textPart.Text = "The notes slide represents the contents and key notes of the corresponding slide. It is more useful when we use Presenter View while presenting the seminars through SlideShow.";
//Sets Bold format for text content.
textPart.Font.Bold = true;
//Sets font style using font name.
textPart.Font.FontName = "Times New Roman";
//Sets text content size using FontSize property.
textPart.Font.FontSize = 20;
//Saves the Presentation to the file system.
pptxDoc.Save("PresentationWithNotesText.pptx");
//Closes the Presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a Presentation without slides.
IPresentation pptxDoc = Presentation.Create();
//Adds new slide with blank slide layout type.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Adds new notes slide in the specified slide.
INotesSlide notesSlide = slide.AddNotesSlide();
//Adds a paragraph into the text body.
IParagraph paragraph = notesSlide.NotesTextBody.AddParagraph();
//Adds a text part into the paragraph.
ITextPart textPart = paragraph.AddTextPart();
textPart.Text = "The notes slide represents the contents and key notes of the corresponding slide. It is more useful when we use Presenter View while presenting the seminars through SlideShow.";
//Sets Bold format for text content.
textPart.Font.Bold = true;
//Sets font style using font name.
textPart.Font.FontName = "Times New Roman";
//Sets text content size using FontSize property.
textPart.Font.FontSize = 20;
//Saves Presentation with specified file name with extension.
pptxDoc.Save("PresentationWithNotesText.pptx");
//Closes the Presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a Presentation without slides.
Dim pptxDoc As IPresentation = Presentation.Create()
'Adds new slide with blank slide layout type.
Dim slide As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
'Adds new notes slide in the specified slide.
Dim notesSlide As INotesSlide = slide.AddNotesSlide()
'Adds a paragraph into the text body.
Dim paragraph As IParagraph = notesSlide.NotesTextBody.AddParagraph()
'Adds a text part into the paragraph.
Dim textPart As ITextPart = paragraph.AddTextPart()
textPart.Text = "The notes slide represents the contents and key notes of the corresponding slide. It is more useful when we use Presenter View while presenting the seminars through SlideShow."
'Sets Bold format for text content.
textPart.Font.Bold = True
'Sets font style using font name.
textPart.Font.FontName = "Times New Roman"
'Sets text content size using FontSize property.
textPart.Font.FontSize = 20
'Saves Presentation with specified file name with extension.
pptxDoc.Save("PresentationWithNotesText.pptx")
'Closes the Presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Notes/Add-text-in-notes).

N> In addition to `Bold`, `FontName`, and `FontSize`, the `ITextPart.Font` property exposes formatting options such as `Italic`, `Underline`, `FontColor`, `HighlightColor`, `StrikeThrough`, `BaselineAlignment`, and `FontScript`. For the full list of members, refer to the [ITextPart API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.ITextPart.html).

## Adding a Numbered List to Notes

The following code example demonstrates how to create a simple numbered list as notes.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]"
playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Notes/Create-numbered-list-in-notes-slide/.NET/Create-numbered-list-in-notes-slide/Program.cs" %}
//Creates a Presentation without slides.
IPresentation pptxDoc = Presentation.Create();
//Adds new slide with blank slide layout type.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Adds new notes slide in the specified slide.
INotesSlide notesSlide = slide.AddNotesSlide();
// Adds a new paragraph with the text in the left hand side textbox. 
IParagraph paragraph = notesSlide.NotesTextBody.AddParagraph("The Northwind sample database (Northwind.mdb) is included with all versions of Access."); 
//Sets the list type as Numbered 
paragraph.ListFormat.Type = ListType.Numbered;
//Sets the numbered style (list numbering) as Arabic number following by period. 
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicPeriod; 
//Sets the starting value as 1 
paragraph.ListFormat.StartValue = 1;
//Sets the list level as 1 
paragraph.IndentLevelNumber = 1;
// Sets the hanging value 
paragraph.FirstLineIndent = -20;
// Sets the bullet character size. Here, 100 means 100% of its text. Possible values can range from 25 to 400. 
paragraph.ListFormat.Size = 100;
// Adds another paragraph with the text in the left hand side textbox. 
paragraph = notesSlide.NotesTextBody.AddParagraph("It provides data you can experiment with and database objects that demonstrate features you might want to implement in your own databases."); 
//Sets the list type as bulleted 
paragraph.ListFormat.Type = ListType.Numbered; 
//Sets the numbered style (list numbering) as Arabic number following by period. 
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicPeriod; 
//Sets the list level as 1 
paragraph.IndentLevelNumber = 1; 
// Sets the hanging value 
paragraph.FirstLineIndent = -20; 
// Sets the bullet character size. Here, 100 means 100% of its text. Possible values can range from 25 to 400. 
paragraph.ListFormat.Size = 100; 
// Adds another paragraph with the text in the left hand side textbox. 
paragraph = notesSlide.NotesTextBody.AddParagraph("Using Northwind, you can become familiar with how a relational database is structured and how the database objects work together to help you enter, store, manipulate, and print your data."); 
//Sets the list type as bulleted 
paragraph.ListFormat.Type = ListType.Numbered; 
//Sets the numbered style (list numbering) as Arabic number following by period. 
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicPeriod; 
//Sets the list level as 1 
paragraph.IndentLevelNumber = 1; 
// Sets the hanging value 
paragraph.FirstLineIndent = -20; 
// Sets the bullet character size. Here, 100 means 100% of its text. Possible values can range from 25 to 400. 
paragraph.ListFormat.Size = 100; 
//Save the PowerPoint Presentation as stream
pptxDoc.Save(OutputFileName);
//Closes the Presentation 
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a Presentation without slides.
IPresentation pptxDoc = Presentation.Create();
//Adds new slide with blank slide layout type.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Adds new notes slide in the specified slide.
INotesSlide notesSlide = slide.AddNotesSlide();
// Adds a new paragraph with the text in the left hand side textbox. 
IParagraph paragraph = notesSlide.NotesTextBody.AddParagraph("The Northwind sample database (Northwind.mdb) is included with all versions of Access."); 
//Sets the list type as Numbered 
paragraph.ListFormat.Type = ListType.Numbered;
//Sets the numbered style (list numbering) as Arabic number following by period. 
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicPeriod; 
//Sets the starting value as 1 
paragraph.ListFormat.StartValue = 1;
//Sets the list level as 1 
paragraph.IndentLevelNumber = 1;
// Sets the hanging value 
paragraph.FirstLineIndent = -20;
// Sets the bullet character size. Here, 100 means 100% of its text. Possible values can range from 25 to 400. 
paragraph.ListFormat.Size = 100;
// Adds another paragraph with the text in the left hand side textbox. 
paragraph = notesSlide.NotesTextBody.AddParagraph("It provides data you can experiment with and database objects that demonstrate features you might want to implement in your own databases."); 
//Sets the list type as bulleted 
paragraph.ListFormat.Type = ListType.Numbered; 
//Sets the numbered style (list numbering) as Arabic number following by period. 
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicPeriod; 
//Sets the list level as 1 
paragraph.IndentLevelNumber = 1; 
// Sets the hanging value 
paragraph.FirstLineIndent = -20; 
// Sets the bullet character size. Here, 100 means 100% of its text. Possible values can range from 25 to 400. 
paragraph.ListFormat.Size = 100; 
// Adds another paragraph with the text in the left hand side textbox. 
paragraph = notesSlide.NotesTextBody.AddParagraph("Using Northwind, you can become familiar with how a relational database is structured and how the database objects work together to help you enter, store, manipulate, and print your data."); 
//Sets the list type as bulleted 
paragraph.ListFormat.Type = ListType.Numbered; 
//Sets the numbered style (list numbering) as Arabic number following by period. 
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicPeriod; 
//Sets the list level as 1 
paragraph.IndentLevelNumber = 1; 
// Sets the hanging value 
paragraph.FirstLineIndent = -20; 
// Sets the bullet character size. Here, 100 means 100% of its text. Possible values can range from 25 to 400. 
paragraph.ListFormat.Size = 100; 
//Saves the Presentation to the file system. 
pptxDoc.Save("Sample.pptx"); 
//Closes the Presentation 
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a Presentation without slides.
Dim pptxDoc As IPresentation = Presentation.Create()
'Adds new slide with blank slide layout type.
Dim slide As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
'Adds new notes slide in the specified slide.
Dim notesSlide As INotesSlide = slide.AddNotesSlide()
' Adds a new paragraph with the text in the left hand side textbox. 
Dim paragraph As IParagraph = notesSlide.NotesTextBody.AddParagraph("The Northwind sample database (Northwind.mdb) is included with all versions of Access.")
'Sets the list type as Numbered 
paragraph.ListFormat.Type = ListType.Numbered
'Sets the numbered style (list numbering) as Arabic number following by period. 
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicPeriod
'Sets the starting value as 1 
paragraph.ListFormat.StartValue = 1
'Sets the list level as 1 
paragraph.IndentLevelNumber = 1
' Sets the hanging value 
paragraph.FirstLineIndent = -20
' Sets the bullet character size. Here, 100 means 100% of its text. Possible values can range from 25 to 400. 
paragraph.ListFormat.Size = 100
' Adds another paragraph with the text in the left hand side textbox. 
paragraph = notesSlide.NotesTextBody.AddParagraph("It provides data you can experiment with and database objects that demonstrate features you might want to implement in your own databases.")
'Sets the list type as bulleted 
paragraph.ListFormat.Type = ListType.Numbered
'Sets the numbered style (list numbering) as Arabic number following by period. 
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicPeriod
'Sets the list level as 1 
paragraph.IndentLevelNumber = 1
' Sets the hanging value 
paragraph.FirstLineIndent = -20
' Sets the bullet character size. Here, 100 means 100% of its text. Possible values can range from 25 to 400. 
paragraph.ListFormat.Size = 100
' Adds another paragraph with the text in the left hand side textbox. 
paragraph = notesSlide.NotesTextBody.AddParagraph("Using Northwind, you can become familiar with how a relational database is structured and how the database objects work together to help you enter, store, manipulate, and print your data.")
'Sets the list type as bulleted 
paragraph.ListFormat.Type = ListType.Numbered
'Sets the numbered style (list numbering) as Arabic number following by period. 
paragraph.ListFormat.NumberStyle = NumberedListStyle.ArabicPeriod
'Sets the list level as 1 
paragraph.IndentLevelNumber = 1
' Sets the hanging value 
paragraph.FirstLineIndent = -20
' Sets the bullet character size. Here, 100 means 100% of its text. Possible values can range from 25 to 400. 
paragraph.ListFormat.Size = 100
'Saves the Presentation to the file system. 
pptxDoc.Save("Sample.pptx")
'Closes the Presentation 
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Notes/Create-numbered-list-in-notes-slide).


## Removing Notes from a Slide

The following code example demonstrates how to remove the notes slide from a PowerPoint slide.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]"
playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Notes/Remove-notes-from-slide/.NET/Remove-notes-from-slide/Program.cs" %}
//Opens an existing PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Gets the instance of the first slide from the presentation.
ISlide slide = pptxDoc.Slides[0] as ISlide;
//Removes the notes slide from the corresponding slide.
slide.RemoveNotesSlide();
//Saves the Presentation to the file system.
pptxDoc.Save("PresentationWithNotesSlide.pptx");
//Closes the Presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Gets the instance of the first slide from the presentation.
ISlide slide = pptxDoc.Slides[0] as ISlide;
//Removes the notes slide from the corresponding slide.
slide.RemoveNotesSlide();
//Saves the Presentation with the specified file name and extension.
pptxDoc.Save("PresentationWithNotesSlide.pptx");
//Closes the Presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing PowerPoint presentation.
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Gets the instance of the first slide from the presentation.
Dim slide As ISlide = TryCast(pptxDoc.Slides(0), ISlide)
'Removes the notes slide from the corresponding slide.
slide.RemoveNotesSlide()
'Saves the Presentation with the specified file name and extension.
pptxDoc.Save("PresentationWithNotesSlide.pptx")
'Closes the Presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Notes/Remove-notes-from-slide).

## See Also

- [Working with Comments](Comments)
- [Working with Paragraphs](./Working-with-paragraphs)