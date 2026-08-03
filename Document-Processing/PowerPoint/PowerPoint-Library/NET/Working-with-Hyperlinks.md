---
title: Working with Hyperlinks | Syncfusion
description: This section explains how to add hyperlink in the PowerPoint slide using Essential<sup>&reg;</sup> Presentation library
platform: document-processing
control: Presentation
documentation: UG
---
# Working with Hyperlinks

A hyperlink is a reference that links to external content such as images, files, web pages, and more. In a PowerPoint slide, a hyperlink can target any of the following:

* Webpage: Represents web content.
* File: Represents a file in some location.
* Email: Represents an email address.
* Slide: Represents a slide in the same document.

## Add hyperlink to PowerPoint shape

You can navigate to any slide of the same PowerPoint document by attaching a slide-target hyperlink to a shape. The following code example demonstrates how to add a hyperlink for internal document navigation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Hyperlinks/Add-hyperlink-to-PowerPoint-shape/.NET/Add-hyperlink-to-PowerPoint-shape/Program.cs" %}
//Create a new PowerPoint Presentation instance.
IPresentation pptxDoc = Presentation.Create();
//Add a slide with a blank layout to the presentation.
ISlide slide1 = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Add a second slide that the hyperlink will target.
ISlide slide2 = pptxDoc.Slides.Add();
//Add a rectangle shape to the first slide.
IShape shape = slide1.Shapes.AddShape(AutoShapeType.Rectangle, 100, 20, 200, 100);
//Set the target slide index (index is valid from 0 to slides count – 1) as the hyperlink target.
IHyperLink hyperLink = shape.SetHyperlink("1");
//Get the target slide resolved by the hyperlink.
ISlide targetSlide = hyperLink.TargetSlide;
//Save the PowerPoint Presentation to a file.
pptxDoc.Save("Sample.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a new PowerPoint Presentation instance.
IPresentation pptxDoc = Presentation.Create();
//Add a slide with a blank layout to the presentation.
ISlide slide1 = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Add a second slide that the hyperlink will target.
ISlide slide2 = pptxDoc.Slides.Add();
//Add a rectangle shape to the first slide.
IShape shape = slide1.Shapes.AddShape(AutoShapeType.Rectangle, 100, 20, 200, 100);
//Set the target slide index (index is valid from 0 to slides count – 1) as the hyperlink target.
IHyperLink hyperLink = shape.SetHyperlink("1");
//Get the target slide resolved by the hyperlink.
ISlide targetSlide = hyperLink.TargetSlide;
//Save the presentation.
pptxDoc.Save("Sample.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a new PowerPoint Presentation instance.
Dim pptxDoc As IPresentation = Presentation.Create()
'Add a slide with a blank layout to the presentation.
Dim slide1 As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
'Add a second slide that the hyperlink will target.
Dim slide2 As ISlide = pptxDoc.Slides.Add()
'Add a rectangle shape to the first slide.
Dim shape As IShape = slide1.Shapes.AddShape(AutoShapeType.Rectangle, 100, 20, 200, 100)
'Set the target slide index (index is valid from 0 to slides count – 1) as the hyperlink target.
Dim hyperLink As IHyperLink = shape.SetHyperlink("1")
'Get the target slide resolved by the hyperlink.
Dim targetSlide As ISlide = hyperLink.TargetSlide
'Save the presentation.
pptxDoc.Save("Sample.pptx")
'Close the presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Hyperlinks/Add-hyperlink-to-PowerPoint-shape).

## Add hyperlink to text

You can link a shape's text to a specified URL within a PowerPoint slide. The following code example demonstrates how to add a web URL as a hyperlink.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Hyperlinks/Add-hyperlink-to-PowerPoint-text/.NET/Add-hyperlink-to-PowerPoint-text/Program.cs" %}
//Create a new PowerPoint Presentation instance.
IPresentation pptxDoc = Presentation.Create();
//Add a slide with a blank layout to the presentation.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Add a rectangle shape to the slide.
IShape shape = slide.Shapes.AddShape(AutoShapeType.Rectangle, 100, 20, 200, 100);
//Add a paragraph into the shape.
IParagraph paragraph = shape.TextBody.AddParagraph();
//Add text to the TextPart.
paragraph.Text = "Syncfusion";
//Set the web hyperlink to the TextPart.
IHyperLink hyperLink = paragraph.TextParts[0].SetHyperlink("http://www.syncfusion.com");
//Save the PowerPoint Presentation to a file.
pptxDoc.Save("Sample.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a new PowerPoint Presentation instance.
IPresentation pptxDoc = Presentation.Create();
//Add a slide with a blank layout to the presentation.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Add a rectangle shape to the slide.
IShape shape = slide.Shapes.AddShape(AutoShapeType.Rectangle, 100, 20, 200, 100);
//Add a paragraph into the shape.
IParagraph paragraph = shape.TextBody.AddParagraph();
//Add text to the TextPart.
paragraph.Text = "Syncfusion";
//Set the web hyperlink to the TextPart.
IHyperLink hyperLink = paragraph.TextParts[0].SetHyperlink("http://www.syncfusion.com");
//Save the presentation.
pptxDoc.Save("Sample.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a new PowerPoint Presentation instance.
Dim pptxDoc As IPresentation = Presentation.Create()
'Add a slide with a blank layout to the presentation.
Dim slide As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
'Add a rectangle shape to the slide.
Dim shape As IShape = slide.Shapes.AddShape(AutoShapeType.Rectangle, 100, 20, 200, 100)
'Add a paragraph into the shape.
Dim paragraph As IParagraph = shape.TextBody.AddParagraph()
'Add text to the TextPart.
paragraph.Text = "Syncfusion"
'Set the web hyperlink to the TextPart.
Dim hyperLink As IHyperLink = paragraph.TextParts(0).SetHyperlink("http://www.syncfusion.com")
'Save the presentation.
pptxDoc.Save("Sample.pptx")
'Close the presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Hyperlinks/Add-hyperlink-to-PowerPoint-text).

## Add hyperlink to picture

The following code example demonstrates how to add an email hyperlink to a picture.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Hyperlinks/Add-hyperlink-to-PowerPoint-picture/.NET/Add-hyperlink-to-PowerPoint-picture/Program.cs" %}
//Create a new PowerPoint Presentation instance.
IPresentation pptxDoc = Presentation.Create();
//Add a slide with a blank layout to the presentation.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Open the picture file as a stream.
FileStream pictureStream = new FileStream("Image.png", FileMode.Open);
//Add the picture to the slide by specifying its size and position.
IPicture picture = slide.Pictures.AddPicture(pictureStream, 0, 0, 250, 250);
//Set the email hyperlink to the picture.
IHyperLink hyperLink = (picture as IShape).SetHyperlink("mailto:sales@syncfusion.com");
//Save the PowerPoint Presentation to a file.
pptxDoc.Save("Sample.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a new PowerPoint Presentation instance.
IPresentation pptxDoc = Presentation.Create();
//Add a slide with a blank layout to the presentation.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Open the picture file as a stream.
Stream pictureStream = File.Open("Image.png", FileMode.Open);
//Add the picture to the slide by specifying its size and position.
IPicture picture = slide.Pictures.AddPicture(pictureStream, 0, 0, 250, 250);
//Set the email hyperlink to the picture.
IHyperLink hyperLink = (picture as IShape).SetHyperlink("mailto:sales@syncfusion.com");
//Save the presentation.
pptxDoc.Save("Sample.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a new PowerPoint Presentation instance.
Dim pptxDoc As IPresentation = Presentation.Create()
'Add a slide with a blank layout to the presentation.
Dim slide As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
'Open the picture file as a stream.
Dim pictureStream As Stream = File.Open("Image.png", FileMode.Open)
'Add the picture to the slide by specifying its size and position.
Dim picture As IPicture = slide.Pictures.AddPicture(pictureStream, 0, 0, 250, 250)
'Set the email hyperlink to the picture.
Dim hyperLink As IHyperLink = TryCast(picture, IShape).SetHyperlink("mailto:sales@syncfusion.com")
'Save the presentation.
pptxDoc.Save("Sample.pptx")
'Close the presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Hyperlinks/Add-hyperlink-to-PowerPoint-picture).

### Add file hyperlink to picture

You can open external documents like images, text files, PDF, etc. from the PowerPoint slide. The following code example demonstrates how to add a file hyperlink to the picture.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Hyperlinks/Add-file-hyperlink-to-picture/.NET/Add-file-hyperlink-to-picture/Program.cs" %}
//Create a new PowerPoint Presentation instance.
IPresentation pptxDoc = Presentation.Create();
//Add a slide with a blank layout to the presentation.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Open the picture file as a stream.
FileStream pictureStream = new FileStream("Image.png", FileMode.Open);
//Add the picture to the slide by specifying its size and position.
IPicture picture = slide.Pictures.AddPicture(pictureStream, 0, 0, 250, 250);
//Set the file path as the hyperlink target.
IHyperLink hyperLink = (picture as IShape).SetHyperlink("WordDocument.docx");
//Save the PowerPoint Presentation to a file.
pptxDoc.Save("Sample.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a new PowerPoint Presentation instance.
IPresentation pptxDoc = Presentation.Create();
//Add a slide with a blank layout to the presentation.
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Open the picture file as a stream.
Stream pictureStream = File.Open("Image.png", FileMode.Open);
//Add the picture to the slide by specifying its size and position.
IPicture picture = slide.Pictures.AddPicture(pictureStream, 0, 0, 250, 250);
//Set the file path as the hyperlink target.
IHyperLink hyperLink = (picture as IShape).SetHyperlink("WordDocument.docx");
//Save the presentation.
pptxDoc.Save("Sample.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a new PowerPoint Presentation instance.
Dim pptxDoc As IPresentation = Presentation.Create()
'Add a slide with a blank layout to the presentation.
Dim slide As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
'Open the picture file as a stream.
Dim pictureStream As Stream = File.Open("Image.png", FileMode.Open)
'Add the picture to the slide by specifying its size and position.
Dim picture As IPicture = slide.Pictures.AddPicture(pictureStream, 0, 0, 250, 250)
'Set the file path as the hyperlink target.
Dim hyperLink As IHyperLink = TryCast(picture, IShape).SetHyperlink("WordDocument.docx")
'Save the presentation.
pptxDoc.Save("Sample.pptx")
'Close the presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Hyperlinks/Add-file-hyperlink-to-picture).

N> The above link makes use of the absolute path of the file for navigation. So, moving the files to another machine or location may lead to file not found error in PowerPoint reader applications.

## Get hyperlink details from text and shape

You can read the hyperlink details from a shape or from the text of a shape in a PowerPoint slide.

### Get hyperlink from a shape

The following code example demonstrates how to get the details about the hyperlink from a shape.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Hyperlinks/Get-hyperlink-from-shape/.NET/Get-hyperlink-from-shape/Program.cs" %}
//Open an existing PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Retrieve the first slide from the presentation.
ISlide slide = pptxDoc.Slides[0];
//Retrieve the first shape from the slide.
IShape shape = slide.Shapes[0] as IShape;
//Get the hyperlink from the shape.
IHyperLink hyperlink = shape.Hyperlink;
//Get the type of action performed when the hyperlink is clicked.
HyperLinkType hyperlinkType = hyperlink.Action;
//Get the target slide of the hyperlink.
ISlide targetSlide = hyperlink.TargetSlide;
//Get the URL address of the hyperlink.
string url = hyperlink.Url;
//Get the screen tip text of the hyperlink.
string screenTip = hyperlink.ScreenTip;
//Save the PowerPoint Presentation to a file.
pptxDoc.Save("Result.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Retrieve the first slide from the presentation.
ISlide slide = pptxDoc.Slides[0];
//Retrieve the first shape from the slide.
IShape shape = slide.Shapes[0] as IShape;
//Get the hyperlink from the shape.
IHyperLink hyperlink = shape.Hyperlink;
//Get the type of action performed when the hyperlink is clicked.
HyperLinkType hyperlinkType = hyperlink.Action;
//Get the target slide of the hyperlink.
ISlide targetSlide = hyperlink.TargetSlide;
//Get the URL address of the hyperlink.
string url = hyperlink.Url;
//Get the screen tip text of the hyperlink.
string screenTip = hyperlink.ScreenTip;
//Save the presentation.
pptxDoc.Save("Result.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing PowerPoint presentation.
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Retrieve the first slide from the presentation.
Dim slide As ISlide = pptxDoc.Slides(0)
'Retrieve the first shape from the slide.
Dim shape As IShape = TryCast(slide.Shapes(0), IShape)
'Get the hyperlink from the shape.
Dim hyperlink As IHyperLink = shape.Hyperlink
'Get the type of action performed when the hyperlink is clicked.
Dim hyperlinkType As HyperLinkType = hyperlink.Action
'Get the target slide of the hyperlink.
Dim targetSlide As ISlide = hyperlink.TargetSlide
'Get the URL address of the hyperlink.
Dim url As String = hyperlink.Url
'Get the screen tip text of the hyperlink.
Dim screenTip As String = hyperlink.ScreenTip
'Save the presentation.
pptxDoc.Save("Result.pptx")
'Close the presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Hyperlinks/Get-hyperlink-from-shape).

### Get hyperlink from text

The following code example demonstrates how to get the details about the hyperlink from text.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Hyperlinks/Get-hyperlink-from-text/.NET/Get-hyperlink-from-text/Program.cs" %}
//Open an existing PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Retrieve the first slide from the presentation.
ISlide slide = pptxDoc.Slides[0];
//Retrieve the first shape from the slide.
IShape shape = slide.Shapes[0] as IShape;
//Retrieve the first paragraph of the shape.
IParagraph paragraph = shape.TextBody.Paragraphs[0];
//Retrieve the first TextPart of the shape.
ITextPart textPart = paragraph.TextParts[0];
//Get the hyperlink from the text.
IHyperLink hyperlink = textPart.Hyperlink;
//Get the type of action performed when the hyperlink is clicked.
HyperLinkType hyperlinkType = hyperlink.Action;
//Get the target slide of the hyperlink.
ISlide targetSlide = hyperlink.TargetSlide;
//Get the URL address of the hyperlink.
string url = hyperlink.Url;
//Get the screen tip text of the hyperlink.
string screenTip = hyperlink.ScreenTip;
//Save the PowerPoint Presentation to a file.
pptxDoc.Save("Result.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Retrieve the first slide from the presentation.
ISlide slide = pptxDoc.Slides[0];
//Retrieve the first shape from the slide.
IShape shape = slide.Shapes[0] as IShape;
//Retrieve the first paragraph of the shape.
IParagraph paragraph = shape.TextBody.Paragraphs[0];
//Retrieve the first TextPart of the shape.
ITextPart textPart = paragraph.TextParts[0];
//Get the hyperlink from the text.
IHyperLink hyperlink = textPart.Hyperlink;
//Get the type of action performed when the hyperlink is clicked.
HyperLinkType hyperlinkType = hyperlink.Action;
//Get the target slide of the hyperlink.
ISlide targetSlide = hyperlink.TargetSlide;
//Get the URL address of the hyperlink.
string url = hyperlink.Url;
//Get the screen tip text of the hyperlink.
string screenTip = hyperlink.ScreenTip;
//Save the presentation.
pptxDoc.Save("Result.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing PowerPoint presentation.
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Retrieve the first slide from the presentation.
Dim slide As ISlide = pptxDoc.Slides(0)
'Retrieve the first shape from the slide.
Dim shape As IShape = TryCast(slide.Shapes(0), IShape)
'Retrieve the first paragraph of the shape.
Dim paragraph As IParagraph = shape.TextBody.Paragraphs(0)
'Retrieve the first TextPart of the shape.
Dim textPart As ITextPart = paragraph.TextParts(0)
'Get the hyperlink from the text.
Dim hyperlink As IHyperLink = textPart.Hyperlink
'Get the type of action performed when the hyperlink is clicked.
Dim hyperlinkType As HyperLinkType = hyperlink.Action
'Get the target slide of the hyperlink.
Dim targetSlide As ISlide = hyperlink.TargetSlide
'Get the URL address of the hyperlink.
Dim url As String = hyperlink.Url
'Get the screen tip text of the hyperlink.
Dim screenTip As String = hyperlink.ScreenTip
'Save the presentation.
pptxDoc.Save("Result.pptx")
'Close the presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Hyperlinks/Get-hyperlink-from-text).

## Remove a hyperlink from text and shape

You can remove the hyperlink from the shape or text in a PowerPoint slide.

### Remove hyperlink from a shape

The following code example demonstrates how to remove a hyperlink from a shape in a PowerPoint slide.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Hyperlinks/Remove-hyperlink-from-shape/.NET/Remove-hyperlink-from-shape/Program.cs" %}
//Open an existing PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Retrieve the first slide from the presentation.
ISlide slide = pptxDoc.Slides[0];
//Retrieve the first shape from the slide.
IShape shape = slide.Shapes[0] as IShape;
//Remove the hyperlink from the shape.
shape.RemoveHyperlink();
//Save the PowerPoint Presentation to a file.
pptxDoc.Save("Result.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Retrieve the first slide from the presentation.
ISlide slide = pptxDoc.Slides[0];
//Retrieve the first shape from the slide.
IShape shape = slide.Shapes[0] as IShape;
//Remove the hyperlink from the shape.
shape.RemoveHyperlink();
//Save the presentation.
pptxDoc.Save("Result.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing PowerPoint presentation.
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Retrieve the first slide from the presentation.
Dim slide As ISlide = pptxDoc.Slides(0)
'Retrieve the first shape from the slide.
Dim shape As IShape = TryCast(slide.Shapes(0), IShape)
'Remove the hyperlink from the shape.
shape.RemoveHyperlink()
'Save the presentation.
pptxDoc.Save("Result.pptx")
'Close the presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Hyperlinks/Remove-hyperlink-from-shape).

### Remove hyperlink from text

The following code example demonstrates how to remove a hyperlink from the text in a PowerPoint slide.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Hyperlinks/Remove-hyperlink-from-text/.NET/Remove-hyperlink-from-text/Program.cs" %}
//Open an existing PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Retrieve the first slide from the presentation.
ISlide slide = pptxDoc.Slides[0];
//Retrieve the first shape from the slide.
IShape shape = slide.Shapes[0] as IShape;
//Retrieve the first paragraph of the shape.
IParagraph paragraph = shape.TextBody.Paragraphs[0];
//Retrieve the first TextPart of the shape.
ITextPart textPart = paragraph.TextParts[0];
//Remove the hyperlink from the TextPart.
textPart.RemoveHyperLink();
//Save the PowerPoint Presentation to a file.
pptxDoc.Save("Result.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open an existing PowerPoint presentation.
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Retrieve the first slide from the presentation.
ISlide slide = pptxDoc.Slides[0];
//Retrieve the first shape from the slide.
IShape shape = slide.Shapes[0] as IShape;
//Retrieve the first paragraph of the shape.
IParagraph paragraph = shape.TextBody.Paragraphs[0];
//Retrieve the first TextPart of the shape.
ITextPart textPart = paragraph.TextParts[0];
//Remove the hyperlink from the TextPart.
textPart.RemoveHyperLink();
//Save the presentation.
pptxDoc.Save("Result.pptx");
//Close the presentation.
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open an existing PowerPoint presentation.
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Retrieve the first slide from the presentation.
Dim slide As ISlide = pptxDoc.Slides(0)
'Retrieve the first shape from the slide.
Dim shape As IShape = TryCast(slide.Shapes(0), IShape)
'Retrieve the first paragraph of the shape.
Dim paragraph As IParagraph = shape.TextBody.Paragraphs(0)
'Retrieve the first TextPart of the shape.
Dim textPart As ITextPart = paragraph.TextParts(0)
'Remove the hyperlink from the TextPart.
textPart.RemoveHyperLink()
'Save the presentation.
pptxDoc.Save("Result.pptx")
'Close the presentation.
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Hyperlinks/Remove-hyperlink-from-text).

## See also

* [Working with Shapes](./Working-with-Shapes)
* [Working with Pictures](./Working-with-Pictures)
* [Working with Text](./Working-with-Text)
* [Loading and Saving the Presentation](Loading-and-Saving-the-Presentation)
* [Assemblies-Required](Assemblies-Required)
* [NuGet-Packages-Required](NuGet-Packages-Required)