---
title: Working with macros in PowerPoint files | Syncfusion
description: Learn here all about loading, saving, and removing macros in a .NET PowerPoint presentation using the Syncfusion Presentation library.
platform: document-processing
control: Presentation
documentation: UG
keywords: macros in powerpoint, pptm, potm, vba, hasmacros, removemacros
---
# Working with Macros in PowerPoint Presentation

A macro is a series of commands that can be grouped together as a single command to automate frequently used tasks. Macros can be created for Microsoft PowerPoint using Visual Basic for Applications (VBA). Refer to the [Create a macro in PowerPoint](https://support.office.com/en-us/article/Create-a-macro-in-PowerPoint-5b07aff6-4dc9-462f-8fc9-66b4c5344e7e) documentation for more details.

Macro-enabled PowerPoint presentations of file types `.PPTM` and `.POTM` can be loaded, modified, and saved while preserving the embedded VBA project using the Syncfusion Presentation library.

## Loading and saving a macro-enabled presentation

The following code example illustrates how to load a macro-enabled PowerPoint presentation and save it back to disk while preserving the macros.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Macros/Load-and-save-macro-PowerPoint/.NET/Load-and-save-macro-PowerPoint/Program.cs" %}
//Open an existing macro-enabled PowerPoint presentation
IPresentation pptxDoc = Presentation.Open("Sample.PPTM");
//Add a blank slide to the presentation
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Add a text box to the slide
IParagraph paragraph = slide.Shapes.AddTextBox(100, 100, 300, 80).TextBody.AddParagraph("Preserve Macros");
//Save the PowerPoint presentation
pptxDoc.Save("Output.PPTM");
//Close the presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing macro-enabled PowerPoint presentation
IPresentation pptxDoc = Presentation.Open("Sample.PPTM");
//Add a blank slide to the presentation
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Add a text box to the slide
IParagraph paragraph = slide.Shapes.AddTextBox(100, 100, 300, 80).TextBody.AddParagraph("Preserve Macros");
//Save the presentation
pptxDoc.Save("Output.PPTM");
//Close the presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing macro-enabled PowerPoint presentation
Dim pptxDoc As IPresentation = Presentation.Open("Sample.PPTM")
'Add a blank slide to the presentation
Dim slide As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
'Add a text box to the slide
Dim paragraph As IParagraph = slide.Shapes.AddTextBox(100, 100, 300, 80).TextBody.AddParagraph("Preserve Macros")
'Save the presentation
pptxDoc.Save("Output.PPTM")
'Close the presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Macros/Load-and-save-macro-PowerPoint).

## Removing macros from a macro-enabled presentation

The following code example illustrates how to remove the macros present in the presentation,

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Macros/Remove-macros/.NET/Remove-macros/Program.cs" %}
//Open an existing macro-enabled PowerPoint presentation
IPresentation pptxDoc = Presentation.Open("Sample.PPTM");
//Check whether the presentation has macros and then remove them
if (pptxDoc.HasMacros)
    pptxDoc.RemoveMacros();
//Save the PowerPoint presentation
pptxDoc.Save("Output.pptx");
//Close the presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing macro-enabled PowerPoint presentation
IPresentation pptxDoc = Presentation.Open("Sample.PPTM");
//Check whether the presentation has macros and then remove them
if (pptxDoc.HasMacros)
    pptxDoc.RemoveMacros();
//Save the presentation
pptxDoc.Save("Output.pptx");
//Close the presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing macro-enabled PowerPoint presentation
Dim pptxDoc As IPresentation = Presentation.Open("Sample.PPTM")
'Check whether the presentation has macros and then remove them
If pptxDoc.HasMacros Then
    pptxDoc.RemoveMacros()
End If
'Save the presentation
pptxDoc.Save("Output.pptx")
'Close the presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Macros/Remove-macros).

## See also

* [Loading and saving the presentation](./Loading-and-Saving-the-Presentation)
* [NuGet packages required](./NuGet-Packages-Required)
* [Assemblies required](./Assemblies-Required)