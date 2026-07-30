---
title: Working with sections in PowerPoint Presentation | Syncfusion |
description: Learn about working with sections in Syncfusion Presentation Library, including creating, managing and updating presentation sections programmatically.
platform: document-processing
control: Presentation
documentation: UG
keywords: sections in PowerPoint presentation
---
# Working with Sections in PowerPoint Library

[Sections](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IPresentation.html#Syncfusion_Presentation_IPresentation_Sections) helps to manage the slides of a PowerPoint presentation. If a presentation has many slides, you can organize the slides using sections to make the navigation easier.

## Creating a section

### Adding a new slide to a section

The following code example demonstrates how to add a blank slide to a section.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Sections/Add-new-slide-in-PowerPoint-section/.NET/Add-new-slide-in-PowerPoint-section/Program.cs" %}
//Creates a PowerPoint presentation
IPresentation pptxDoc = Presentation.Create();
//Adds a section to the PowerPoint presentation
ISection section = pptxDoc.Sections.Add();
//Sets a name to the created section
section.Name = "SectionDemo";
//Adds a slide to the created section
ISlide slide = section.AddSlide(SlideLayoutType.Blank);
//Adds a text box to the slide
slide.AddTextBox(10, 10, 100, 100).TextBody.AddParagraph("Slide in SectionDemo");
//Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx");
//Closes the PowerPoint presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a PowerPoint presentation
IPresentation pptxDoc = Presentation.Create();
//Adds a section to the PowerPoint presentation
ISection section = pptxDoc.Sections.Add();
//Sets a name to the created section
section.Name = "SectionDemo";
//Adds a slide to the created section
ISlide slide = section.AddSlide(SlideLayoutType.Blank);
//Adds a text box to the slide
slide.AddTextBox(10, 10, 100, 100).TextBody.AddParagraph("Slide in SectionDemo");
//Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx");
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a PowerPoint presentation
Dim pptxDoc As IPresentation = Presentation.Create()
'Adds a section to the PowerPoint presentation
Dim section As ISection = pptxDoc.Sections.Add()
'Sets a name to the created section
section.Name = "SectionDemo"
'Adds a slide to the created section
Dim slide As ISlide = section.AddSlide(SlideLayoutType.Blank)
'Adds a text box to the slide
slide.AddTextBox(10, 10, 100, 100).TextBody.AddParagraph("Slide in SectionDemo")
'Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx")
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Sections/Add-new-slide-in-PowerPoint-section).

### Adding an existing slide to a section

The following code example demonstrates how to add an existing slide to a section.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Sections/Add-existing-slide-in-PowerPoint-section/.NET/Add-existing-slide-in-PowerPoint-section/Program.cs" %}
//Loads or open an PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("PPTXWithSections.PPTX");
//Creates a new section in the PowerPoint presentation
pptxDoc.Sections.Add();
//Moves the first slide to the created section
pptxDoc.Slides[0].MoveToSection(0);
//Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx");
//Closes the PowerPoint presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads a PowerPoint presentation
IPresentation pptxDoc = Presentation.Open("PPTXWithoutSection.PPTX");
//Creates a new section in the PowerPoint presentation
pptxDoc.Sections.Add();
//Moves the first slide to the created section
pptxDoc.Slides[0].MoveToSection(0);
//Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx");
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads a PowerPoint presentation
Dim pptxDoc As IPresentation = Presentation.Open("PPTXWithoutSection.PPTX")
'Creates a new section in the PowerPoint presentation
pptxDoc.Sections.Add()
'Moves the first slide to the created section
pptxDoc.Slides(0).MoveToSection(0)
'Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx")
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Sections/Add-existing-slide-in-PowerPoint-section).

### Inserting a section

The following code example demonstrates how to insert a section in a template PowerPoint presentation that contains sections

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Sections/Insert-section-in-PowerPoint/.NET/Insert-section-in-PowerPoint/Program.cs" %}
//Load a PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("PPTXWithSections.PPTX");
//Create a new section to Insert.
ISection section = pptxDoc.Sections.Add();
//Names the created section.
section.Name = "InsertedSection";
//Insert the section at second position.
pptxDoc.Sections.Insert(1, section);
//Remove the unwanted created section.
pptxDoc.Sections.RemoveAt(pptxDoc.Sections.Count - 1);
//Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx");
//Closes the PowerPoint presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load a PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("PPTXWithSections.PPTX");
//Create a new section to Insert.
ISection section = pptxDoc.Sections.Add();
//Names the created section.
section.Name = "InsertedSection";
//Insert the section at second position.
pptxDoc.Sections.Insert(1, section);
//Removes the unwanted section appended by Add() (now duplicated at the end).
pptxDoc.Sections.RemoveAt(pptxDoc.Sections.Count - 1);
//Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx");
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Load a PowerPoint presentation.
Dim pptxDoc As IPresentation = Presentation.Open("PPTXWithSections.PPTX")
'Create a new section to Insert.
Dim section As ISection = pptxDoc.Sections.Add()
'Names the created section.
section.Name = "InsertedSection"
'Insert the section at second position.
pptxDoc.Sections.Insert(1, section)
'Remove the unwanted created section.
pptxDoc.Sections.RemoveAt(pptxDoc.Sections.Count - 1)
'Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx")
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Sections/Insert-section-in-PowerPoint).

## Moving the sections within a PowerPoint presentation

You can move the sections within a PowerPoint presentation. The following code example demonstrates how to move a section to a specific position in the navigation pane.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Sections/Move-section-positions/.NET/Move-section-positions/Program.cs" %}
//Loads or open an PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("PPTXWithSections.PPTX");
//Moves the second section to third position within the PowerPoint presentation.
pptxDoc.Sections[2].Move(3);
//Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx");
//Closes the PowerPoint presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads a PowerPoint presentation
IPresentation pptxDoc = Presentation.Open("PPTXWithSections.PPTX");
//Moves the second section to third position within the PowerPoint presentation.
pptxDoc.Sections[2].Move(3);
//Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx");
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads a PowerPoint presentation
Dim pptxDoc As IPresentation = Presentation.Open("PPTXWithSections.PPTX")
'Moves the second section to third position within the PowerPoint presentation.
pptxDoc.Sections(2).Move(3)
'Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx")
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Sections/Move-section-positions).

## Moving a slide within sections

The following code example demonstrates how to move a slide from one section to another.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Sections/Move-slide-within-section/.NET/Move-slide-within-section/Program.cs" %}
//Loads or open an PowerPoint Presentation
FileStream inputStream = new FileStream("PPTXWithSections.PPTX",FileMode.Open);
IPresentation pptxDoc = Presentation.Open("PPTXWithSections.PPTX");
//Gets the first slide of second section in the PowerPoint presentation
ISlide slide = pptxDoc.Sections[1].Slides[0];
//Moves the slide to the first section
slide.MoveToSection(0);
//Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx");
//Closes the PowerPoint presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads a PowerPoint presentation
IPresentation pptxDoc = Presentation.Open("PPTXWithSections.PPTX");
//Gets the first slide of second section in the PowerPoint presentation
ISlide slide = pptxDoc.Sections[1].Slides[0];
//Moves the slide to the first section
slide.MoveToSection(0);
//Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx");
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads a PowerPoint presentation
Dim pptxDoc As IPresentation = Presentation.Open("PPTXWithSections.PPTX")
'Gets the first slide of second section in the PowerPoint presentation
Dim slide As ISlide = pptxDoc.Sections(1).Slides(0)
'Moves the slide to the first section
slide.MoveToSection(0)
'Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx")
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Sections/Move-slide-within-section).

## Cloning slides from a section

The following code example demonstrates how to clone the slide collection of a section and add those slides to a destination presentation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Sections/Clone-and-merge-section-slides/.NET/Clone-and-merge-section-slides/Program.cs" %}
//Loads or open an PowerPoint Presentation
FileStream inputStream = new FileStream("PPTXWithSections.PPTX",FileMode.Open);
IPresentation pptxDoc = Presentation.Open("PPTXWithSections.PPTX");
//Clones the slides in 3rd section
ISlides slides = pptxDoc.Sections[2].Clone();
//Creates a destination PowerPoint presentation instance. Existing presentations can also be used here.
IPresentation destinationPptx = Presentation.Create();
//Iterates the cloned slides and adds them to the destination presentation
foreach (ISlide slide in slides)
    destinationPptx.Slides.Add(slide);
//Saves the destination PowerPoint presentation
destinationPptx.Save("Output.pptx");
//Closes the PowerPoint presentations
sourcePptx.Close();
destinationPptx.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads the source PowerPoint presentation
IPresentation sourcePptx = Presentation.Open("PPTXWithSections.PPTX");
//Clones the slides in the third section
ISlides slides = sourcePptx.Sections[2].Clone();
//Creates a destination PowerPoint presentation instance. Existing presentations can also be used here.
IPresentation destinationPptx = Presentation.Create();
//Iterates the cloned slides and adds them to the destination presentation
foreach (ISlide slide in slides)
    destinationPptx.Slides.Add(slide);
//Saves the destination PowerPoint presentation
destinationPptx.Save("Output.pptx");
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads the source PowerPoint presentation
Dim sourcePptx As IPresentation = Presentation.Open("PPTXWithSections.PPTX")
'Clones the slides in the third section
Dim slides As ISlides = sourcePptx.Sections(2).Clone()
'Creates a destination PowerPoint presentation instance. Existing presentations can also be used here.
Dim destinationPptx As IPresentation = Presentation.Create()
'Iterates the cloned slides and adds them to the destination presentation
For Each slide As ISlide In slides
    destinationPptx.Slides.Add(slide)
Next
'Saves the destination PowerPoint presentation
destinationPptx.Save("Output.pptx")
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Sections/Clone-and-merge-section-slides).

## Removing a section

The following code example demonstrates how to remove a particular section from the sections collection of a presentation. Removing a section does not delete the slides it contains; the slides are moved to the default (unnamed) section.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Sections/Remove-section/.NET/Remove-section/Program.cs" %}
//Loads a PowerPoint presentation
IPresentation pptxDoc = Presentation.Open("PPTXWithSections.PPTX");
//Removes the second section from the PowerPoint presentation
pptxDoc.Sections.Remove(pptxDoc.Sections[1]);
//Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx");
//Closes the PowerPoint presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads a PowerPoint presentation
IPresentation pptxDoc = Presentation.Open("PPTXWithSections.PPTX");
//Removes the second section from the PowerPoint presentation
pptxDoc.Sections.Remove(pptxDoc.Sections[1]);
//Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx");
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads a PowerPoint presentation
Dim pptxDoc As IPresentation = Presentation.Open("PPTXWithSections.PPTX")
'Removes the second section from the PowerPoint presentation
pptxDoc.Sections.Remove(pptxDoc.Sections(1))
'Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx")
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Sections/Remove-section).

## Remove all sections

The following code example demonstrates how to remove the section collection from an existing PowerPoint presentation. All slides remain in the presentation as part of the default (unnamed) section.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Sections/Remove-all-sections/.NET/Remove-all-sections/Program.cs" %}
//Loads a PowerPoint presentation
IPresentation pptxDoc = Presentation.Open("PPTXWithSections.PPTX");
//Removes all sections from the PowerPoint presentation
pptxDoc.Sections.Clear();
//Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx");
//Closes the PowerPoint presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads a PowerPoint presentation
IPresentation pptxDoc = Presentation.Open("PPTXWithSections.PPTX");
//Removes all sections from the PowerPoint presentation
pptxDoc.Sections.Clear();
//Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx");
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads a PowerPoint presentation
Dim pptxDoc As IPresentation = Presentation.Open("PPTXWithSections.PPTX")
'Removes all sections from the PowerPoint presentation
pptxDoc.Sections.Clear()
'Saves the PowerPoint presentation
pptxDoc.Save("Output.pptx")
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Sections/Remove-all-sections).