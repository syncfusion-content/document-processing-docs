---
title: Create, read and edit PowerPoint slides in CSharp | Syncfusion
description: Create, read and edit PowerPoint slides in CSharp; Adding and modifying the slides in PowerPoint presentation
platform: document-processing
control: PowerPoint
documentation: UG
---
# Working with Slides in PowerPoint  

To quickly start add, remove, resize, and customize PowerPoint slides, please check out this video:
{% youtube "https://www.youtube.com/watch?v=NQNIY5cTb0w" %}

## Adding slide to the PowerPoint presentation

In PowerPoint presentation, a slide is a container for the elements like shapes, images, charts, text box etc. The slides may inherit the formatting and layout properties from its 'Master' and 'Layout' slides.

The following code example demonstrates how to add a blank slide to the Presentation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Slides/Add-PowerPoint-slide/.NET/Add-PowerPoint-slide/Program.cs" %}
//Creates a PowerPoint instance
IPresentation pptxDoc = Presentation.Create();
//Adds a slide to the PowerPoint presentation
ISlide slide = pptxDoc.Slides.Add();
//Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream("Sample.pptx", FileMode.Create);
pptxDoc.Save(outputStream);
//Release all resources of the stream
outputStream.Dispose();
//Closes the Presentation instance
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a PowerPoint instance
IPresentation pptxDoc = Presentation.Create();
//Adds a slide to the PowerPoint presentation
ISlide slide = pptxDoc.Slides.Add();
//Saves the Presentation to the file system.
pptxDoc.Save("Sample.pptx");
//Closes the Presentation instance
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a PowerPoint instance
Dim pptxDoc As IPresentation = Presentation.Create()
'Adds a slide to the PowerPoint presentation
Dim slide As ISlide = pptxDoc.Slides.Add()
'Saves the Presentation to the file system.
pptxDoc.Save("Sample.pptx")
'Closes the Presentation instance
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Slides/Add-PowerPoint-slide).

## Create a slide with predefined LayoutSlide

The Syncfusion<sup>&reg;</sup> PowerPoint library supports the following predefined slide layout types to create a slide as equivalent to Microsoft PowerPoint:

<ul>
<li>Blank</li>
<li>Comparison</li>
<li>Content with caption</li>
<li>Picture with caption</li>
<li>Section header</li>
<li>Title</li>
<li>Title and content</li>
<li>Title and vertical text</li>
<li>Title only</li>
<li>Two content</li>
<li>Vertical title and text</li>
</ul>

The following example demonstrates how to access a slide from the predefined blank slide layout type.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Slides/Add-predefined-blank-slide-layout-type/.NET/Add-predefined-blank-slide-layout-type/Program.cs" %}
//Create a new instance of PowerPoint Presentation file
IPresentation pptxDoc = Presentation.Create();
//Add a slide of blank layout type
ISlide slide1 = pptxDoc.Slides.Add(SlideLayoutType.Blank);    
//Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
pptxDoc.Save(outputStream);
//Release all resources of the stream
outputStream.Dispose();
//Close the PowerPoint presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a PowerPoint presentation
IPresentation pptxDoc = Presentation.Create();
//Add a slide of blank layout type
ISlide slide1 = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Save the PowerPoint file
pptxDoc.Save("Sample.pptx");
//Close the PowerPoint instance
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a PowerPoint file
Dim pptxDoc As IPresentation = Presentation.Create()
'Add a slide of blank layout type
Dim slide1 As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
'Save the PowerPoint file
pptxDoc.Save("Sample.pptx")
'Close the PowerPoint instance
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Slides/Add-predefined-blank-slide-layout-type).

The following code example demonstrates how to add a slide with all other predefined slide layout types.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Slides/Add-all-predefined-slide-layout-types/.NET/Add-all-predefined-slide-layout-types/Program.cs" %}
//Create a new instance of PowerPoint Presentation file
IPresentation pptxDoc = Presentation.Create();
//Add a slide of Blank type
ISlide slide1 = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Add a slide of comparison type
ISlide slide2 = pptxDoc.Slides.Add(SlideLayoutType.Comparison);
//Add a slide of ContentWithCaption type
ISlide slide3 = pptxDoc.Slides.Add(SlideLayoutType.ContentWithCaption);
//Add a slide of PictureWithCaption type
ISlide slide4 = pptxDoc.Slides.Add(SlideLayoutType.PictureWithCaption);
//Add a slide of SectionHeader type
ISlide slide5 = pptxDoc.Slides.Add(SlideLayoutType.SectionHeader);
//Add a slide of Title type
ISlide slide6 = pptxDoc.Slides.Add(SlideLayoutType.Title);
//Add a slide of TitleAndContent type
ISlide slide7 = pptxDoc.Slides.Add(SlideLayoutType.TitleAndContent);
//Add a slide of TitleAndVerticalText type
ISlide slide8 = pptxDoc.Slides.Add(SlideLayoutType.TitleAndVerticalText);
//Add a slide of TitleOnly type
ISlide slide9 = pptxDoc.Slides.Add(SlideLayoutType.TitleOnly);
//Add a slide of TwoContent type
ISlide slide10 = pptxDoc.Slides.Add(SlideLayoutType.TwoContent);
//Add a slide of VerticalTitleAndText type
ISlide slide11 = pptxDoc.Slides.Add(SlideLayoutType.VerticalTitleAndText);    
//Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
pptxDoc.Save(outputStream);
//Release all resources of the stream
outputStream.Dispose();
//Close the PowerPoint presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a PowerPoint presentation
IPresentation pptxDoc = Presentation.Create();
//Add a slide of blank layout type
ISlide slide1 = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Add a slide of comparison type
ISlide slide2 = pptxDoc.Slides.Add(SlideLayoutType.Comparison);
//Add a slide of ContentWithCaption type
ISlide slide3 = pptxDoc.Slides.Add(SlideLayoutType.ContentWithCaption);
//Add a slide of PictureWithCaption type
ISlide slide4 = pptxDoc.Slides.Add(SlideLayoutType.PictureWithCaption);
//Add a slide of SectionHeader type
ISlide slide5 = pptxDoc.Slides.Add(SlideLayoutType.SectionHeader);
//Add a slide of Title type
ISlide slide6 = pptxDoc.Slides.Add(SlideLayoutType.Title);
//Add a slide of TitleAndContent type
ISlide slide7 = pptxDoc.Slides.Add(SlideLayoutType.TitleAndContent);
//Add a slide of TitleAndVerticalText type
ISlide slide8 = pptxDoc.Slides.Add(SlideLayoutType.TitleAndVerticalText);
//Add a slide of TitleOnly type
ISlide slide9 = pptxDoc.Slides.Add(SlideLayoutType.TitleOnly);
//Add a slide of TwoContent type
ISlide slide10 = pptxDoc.Slides.Add(SlideLayoutType.TwoContent);
//Add a slide of VerticalTitleAndText type
ISlide slide11 = pptxDoc.Slides.Add(SlideLayoutType.VerticalTitleAndText);
//Save the PowerPoint file
pptxDoc.Save("Sample.pptx");
//Close the PowerPoint instance
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a PowerPoint file
Dim pptxDoc As IPresentation = Presentation.Create()
'Add a slide of blank layout type
Dim slide1 As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
'Add a slide of comparison type
Dim ISlide As slide2 = pptxDoc.Slides.Add(SlideLayoutType.Comparison)
'Add a slide of ContentWithCaption type
Dim ISlide As slide3 = pptxDoc.Slides.Add(SlideLayoutType.ContentWithCaption)
'Add a slide of PictureWithCaption type
Dim ISlide As slide4 = pptxDoc.Slides.Add(SlideLayoutType.PictureWithCaption)
'Add a slide of SectionHeader type
Dim ISlide As slide5 = pptxDoc.Slides.Add(SlideLayoutType.SectionHeader)
'Add a slide of Title type
ISlide As slide6 = pptxDoc.Slides.Add(SlideLayoutType.Title)
'Add a slide of TitleAndContent type
Dim ISlide As slide7 = pptxDoc.Slides.Add(SlideLayoutType.TitleAndContent)
'Add a slide of TitleAndVerticalText type
Dim ISlide As slide8 = pptxDoc.Slides.Add(SlideLayoutType.TitleAndVerticalText)
'Add a slide of TitleOnly type
Dim ISlide As slide9 = pptxDoc.Slides.Add(SlideLayoutType.TitleOnly)
'Add a slide of TwoContent type
Dim ISlide As slide10 = pptxDoc.Slides.Add(SlideLayoutType.TwoContent)
'Add a slide of VerticalTitleAndText type
Dim ISlide As slide11 = pptxDoc.Slides.Add(SlideLayoutType.VerticalTitleAndText)
'Save the PowerPoint file
pptxDoc.Save("Sample.pptx")
'Close the PowerPoint instance
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Slides/Add-all-predefined-slide-layout-types).

## Adding Custom layout slide

The slide layout are template design for the PowerPoint slides. Slide layout can contains formatting, positioning, and placeholders for a slide. There are 9 predefined layouts and custom slide layouts can also be designed.

The following code example demonstrates how to create and use a customized slide layout in PowerPoint presentation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Slides/Create-and-use-custom-layout-slide/.NET/Create-and-use-custom-layout-slide/Program.cs" %}
//Loads or open an PowerPoint Presentation
FileStream inputStream = new FileStream(inputFileName,FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);
//Add a new custom layout slide to the master collection with a specific layout type and name
ILayoutSlide layoutSlide = pptxDoc.Masters[0].LayoutSlides.Add(SlideLayoutType.Blank, "CustomLayout");
//Set background of the layout slide
layoutSlide.Background.Fill.SolidFill.Color = ColorObject.FromArgb(78, 89, 90);
//Get the stream of an image
FileStream pictureStream = new FileStream(inputImagePath, FileMode.Open);
//Add the picture into layout slide
layoutSlide.Shapes.AddPicture(pictureStream, 100, 100, 100, 100);
//Add a slide of new designed custom layout to the presentation
ISlide slide = pptxDoc.Slides.Add(layoutSlide);
//Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
pptxDoc.Save(outputStream);
//Release all resources of the stream
outputStream.Dispose();
//Close the presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open the template presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Add a new custom layout slide to the master collection with a specific layout type and name
ILayoutSlide layoutSlide = pptxDoc.Masters[0].LayoutSlides.Add(SlideLayoutType.Blank, "CustomLayout");
//Set background of the layout slide
layoutSlide.Background.Fill.SolidFill.Color = ColorObject.FromArgb(78, 89, 90);
//Get the stream of an image
Stream pictureStream = File.Open("Image.png", FileMode.Open);
//Add the picture into layout slide
layoutSlide.Shapes.AddPicture(pictureStream, 100, 100, 100, 100);
//Add a slide of new designed custom layout to the presentation
ISlide slide = pptxDoc.Slides.Add(layoutSlide);
//Save the presentation
pptxDoc.Save("Output.pptx");
//Close the presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open the template presentation
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Add a new custom layout slide to the master collection with a specific layout type and name
Dim layoutSlide As ILayoutSlide = pptxDoc.Masters(0).LayoutSlides.Add(SlideLayoutType.Blank, "CustomLayout")
'Set background of the layout slide
layoutSlide.Background.Fill.SolidFill.Color = ColorObject.FromArgb(78, 89, 90)
'Get the stream of an image
Dim pictureStream As Stream = File.Open("Image.png", FileMode.Open)
'Add the picture into layout slide
layoutSlide.Shapes.AddPicture(pictureStream, 100, 100, 100, 100)
'Add a slide of new designed custom layout to the presentation
Dim slide As ISlide = pptxDoc.Slides.Add(layoutSlide)
'Save the presentation
pptxDoc.Save("Output.pptx")
'Close the presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Slides/Create-and-use-custom-layout-slide).

The following code example demonstrates how to add a slide with an existing slide’s layout.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Slides/Add-slide-with-existing-slide-layout/.NET/Add-slide-with-existing-slide-layout/Program.cs" %}
//Loads or open an PowerPoint Presentation
FileStream inputStream = new FileStream(inputFileName,FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);
//Get the layout slide collection of the master
ILayoutSlides layoutSlides = pptxDoc.Masters[0].LayoutSlides;
ILayoutSlide slideLayout = null;
//Get each layout slide from the collection
foreach (ILayoutSlide layout in layoutSlides)
{
    //Check if the layout slide has desired custom layout name
    if (layout.Name == "CustomSlideLayout")
    {
        slideLayout = layout;
        break;
    }
}
//Add slide with the desired layout.
ISlide slide = pptxDoc.Slides.Add(slideLayout);
//Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
pptxDoc.Save(outputStream);
//Release all resources of the stream
outputStream.Dispose();
//Close the presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Open the template presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Get the layout slide collection of the master
ILayoutSlides layoutSlides = pptxDoc.Masters[0].LayoutSlides;
ILayoutSlide slideLayout = null;
//Get each layout slide from the collection
foreach (ILayoutSlide layout in layoutSlides)
{
    //Check if the layout slide has desired custom layout name
    if (layout.Name == "CustomSlideLayout")
    {
        slideLayout = layout;
        break;
    }
}
//Add slide with the desired layout.
ISlide slide = pptxDoc.Slides.Add(slideLayout);
//Save the presentation
pptxDoc.Save("Output.pptx");
//Close the presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Open the template presentation
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Get the layout slide collection of the master
Dim layoutSlides As ILayoutSlides = pptxDoc.Masters(0).LayoutSlides
Dim slideLayout As ILayoutSlide = Nothing
'Get each layout slide from the collection
For Each layout As ILayoutSlide In layoutSlides
    'Check if the layout slide has desired custom layout name
    If layout.Name = "CustomSlideLayout" Then
        slideLayout = layout
        Exit For
    End If
Next
'Add slide with the desired layout.
Dim slide As ISlide = pptxDoc.Slides.Add(slideLayout)
'Save the presentation
pptxDoc.Save("Output.pptx")
'Close the presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Slides/Add-slide-with-existing-slide-layout).

## Iterating slide elements

The following code example shows how to iterate through all slide elements in a PowerPoint presentation, update text, resize images, and modify charts before saving the updated presentation.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Slides/Iterate-slide-elements/.NET/Iterate-slide-elements/Program.cs" %}
//Loads or open an PowerPoint Presentation
FileStream inputStream = new FileStream(inputFileName,FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);
// Iterate through each slide in the presentation
foreach (ISlide slide in presentation.Slides)
{
    // Iterate through each shape in the master slide shapes.
    foreach (IShape shape in slide.LayoutSlide.MasterSlide.Shapes)
    {
        // Modify the shape properties (text, size, hyperlinks, etc.)
        ModifySlideElements(shape);
    }
    // Iterate through each shape in the layout slide shapes.
    foreach (IShape shape in slide.LayoutSlide.Shapes)
    {
        // Modify the shape properties (text, size, hyperlinks, etc.)
        ModifySlideElements(shape);
    }
    // Iterate through each shape in the slide
    foreach (IShape shape in slide.Shapes)
    {
        // Modify the shape properties (text, size, hyperlinks, etc.)
        ModifySlideElements(shape);
    }
}
//Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
pptxDoc.Save(outputStream);
//Release all resources of the stream
outputStream.Dispose();
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing Presentation.
IPresentation pptxDoc = Presentation.Open("Template.pptx");
// Iterate through each slide in the presentation
foreach (ISlide slide in presentation.Slides)
{
    // Iterate through each shape in the master slide shapes.
    foreach (IShape shape in slide.LayoutSlide.MasterSlide.Shapes)
    {
        // Modify the shape properties (text, size, hyperlinks, etc.)
        ModifySlideElements(shape);
    }
    // Iterate through each shape in the layout slide shapes.
    foreach (IShape shape in slide.LayoutSlide.Shapes)
    {
        // Modify the shape properties (text, size, hyperlinks, etc.)
        ModifySlideElements(shape);
    }
    // Iterate through each shape in the slide
    foreach (IShape shape in slide.Shapes)
    {
        // Modify the shape properties (text, size, hyperlinks, etc.)
        ModifySlideElements(shape);
    }
}
//Saves the Presentation to the file system
pptxDoc.Save("Output.pptx");
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing Presentation.
Dim pptxDoc As IPresentation = Presentation.Open("Template.pptx")
' Iterate through each slide in the presentation
For Each slide As ISlide In presentation.Slides
    ' Iterate through each shape in the master slide shapes.
    For Each shape As IShape In slide.LayoutSlide.MasterSlide.Shapes
        ' Modify the shape properties (text, size, hyperlinks, etc.)
        ModifySlideElements(shape)
    Next
    ' Iterate through each shape in the layout slide shapes.
    For Each shape As IShape In slide.LayoutSlide.Shapes
        ' Modify the shape properties (text, size, hyperlinks, etc.)
        ModifySlideElements(shape)
    Next
    ' Iterate through each shape in the slide
    For Each shape As IShape In slide.Shapes
        ' Modify the shape properties (text, size, hyperlinks, etc.)
        ModifySlideElements(shape)
    Next
Next
'Saves the Presentation to the file system
pptxDoc.Save("Output.pptx")
'Closes the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

The following code example provides supporting methods for the above code.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
private static void ModifySlideElements(IShape shape)
{
    switch (shape.SlideItemType)
    {
        case SlideItemType.AutoShape:
            {
                // Modify text if present in the shape
                if (!string.IsNullOrEmpty(shape.TextBody.Text))
                {
                    ModifyTextPart(shape.TextBody);
                }
                // If shape is a rectangle, add a hyperlink
                else if (shape.AutoShapeType == AutoShapeType.Rectangle)
                {
                    shape.SetHyperlink("www.google.com");
                }
                break;
            }

        case SlideItemType.Placeholder:
            {
                // Modify text if present in the placeholder
                if (!string.IsNullOrEmpty(shape.TextBody.Text))
                {
                    ModifyTextPart(shape.TextBody);
                }
                break;
            }

        case SlideItemType.Picture:
            {
                // Resize the picture
                IPicture picture = shape as IPicture;
                picture.Height = 160;
                picture.Width = 130;
                break;
            }

        case SlideItemType.Table:
            {
                // Get the table shape
                ITable table = shape as ITable;

                // Iterate through rows and modify text in each cell
                foreach (IRow row in table.Rows)
                {
                    foreach (ICell cell in row.Cells)
                    {
                        ModifyTextPart(cell.TextBody);
                    }
                }
                break;
            }

        case SlideItemType.GroupShape:
            {
                // Get the group shape and iterate through child shapes
                IGroupShape groupShape = shape as IGroupShape;
                foreach (IShape childShape in groupShape.Shapes)
                {
                    ModifySlideElements(childShape);
                }
                break;
            }

        case SlideItemType.Chart:
            {
                // Modify chart properties
                IPresentationChart chart = shape as IPresentationChart;
                chart.ChartTitle = "Purchase Details";
                chart.ChartTitleArea.Bold = true;
                chart.ChartTitleArea.Color = OfficeKnownColors.Red;
                chart.ChartTitleArea.Size = 20;
                break;
            }

        case SlideItemType.SmartArt:
            {
                // Modify SmartArt content
                ISmartArt smartArt = shape as ISmartArt;
                //Traverse through all nodes inside SmartArt
                foreach (ISmartArtNode node in smartArt.Nodes)
                {
                    ModifyTextPart(node.TextBody);
                }
                break;
            }
            
        case SlideItemType.OleObject:
            {
                // Modify OLE object size
                IOleObject oleObject = shape as IOleObject;
                oleObject.Width = 300;
                break;
            }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private static void ModifySlideElements(IShape shape)
{
    switch (shape.SlideItemType)
    {
        case SlideItemType.AutoShape:
            {
                // Modify text if present in the shape
                if (!string.IsNullOrEmpty(shape.TextBody.Text))
                {
                    ModifyTextPart(shape.TextBody);
                }
                // If shape is a rectangle, add a hyperlink
                else if (shape.AutoShapeType == AutoShapeType.Rectangle)
                {
                    shape.SetHyperlink("www.google.com");
                }
                break;
            }

        case SlideItemType.Placeholder:
            {
                // Modify text if present in the placeholder
                if (!string.IsNullOrEmpty(shape.TextBody.Text))
                {
                    ModifyTextPart(shape.TextBody);
                }
                break;
            }

        case SlideItemType.Picture:
            {
                // Resize the picture
                IPicture picture = shape as IPicture;
                picture.Height = 160;
                picture.Width = 130;
                break;
            }

        case SlideItemType.Table:
            {
                // Get the table shape
                ITable table = shape as ITable;

                // Iterate through rows and modify text in each cell
                foreach (IRow row in table.Rows)
                {
                    foreach (ICell cell in row.Cells)
                    {
                        ModifyTextPart(cell.TextBody);
                    }
                }
                break;
            }

        case SlideItemType.GroupShape:
            {
                // Get the group shape and iterate through child shapes
                IGroupShape groupShape = shape as IGroupShape;
                foreach (IShape childShape in groupShape.Shapes)
                {
                    ModifySlideElements(childShape);
                }
                break;
            }

        case SlideItemType.Chart:
            {
                // Modify chart properties
                IPresentationChart chart = shape as IPresentationChart;
                chart.ChartTitle = "Purchase Details";
                chart.ChartTitleArea.Bold = true;
                chart.ChartTitleArea.Color = OfficeKnownColors.Red;
                chart.ChartTitleArea.Size = 20;
                break;
            }

         case SlideItemType.SmartArt:
            {
                // Modify SmartArt content
                ISmartArt smartArt = shape as ISmartArt;
                //Traverse through all nodes inside SmartArt
                foreach (ISmartArtNode node in smartArt.Nodes)
                {
                    ModifyTextPart(node.TextBody);
                }
                break;
            }
            
        case SlideItemType.OleObject:
            {
                // Modify OLE object size
                IOleObject oleObject = shape as IOleObject;
                oleObject.Width = 300;
                break;
            }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Shared Sub ModifySlideElements(ByVal shape As IShape)
    Select Case shape.SlideItemType
        Case SlideItemType.AutoShape
            ' Modify text if present in the shape
            If Not String.IsNullOrEmpty(shape.TextBody.Text) Then
                ModifyTextPart(shape.TextBody)
            ' If shape is a rectangle, add a hyperlink
            ElseIf shape.AutoShapeType = AutoShapeType.Rectangle Then
                shape.SetHyperlink("www.google.com")
            End If

        Case SlideItemType.ConnectionShape
            Dim connector As IConnector = TryCast(shape, IConnector)
            ' Modify the arrowhead style at the beginning of the connector line
            connector.LineFormat.BeginArrowheadStyle = ArrowheadStyle.ArrowDiamond

        Case SlideItemType.Placeholder
            ' Modify text if present in the placeholder
            If Not String.IsNullOrEmpty(shape.TextBody.Text) Then
                ModifyTextPart(shape.TextBody)
            End If

        Case SlideItemType.Picture
            ' Resize the picture
            Dim picture As IPicture = TryCast(shape, IPicture)
            picture.Height = 160
            picture.Width = 130

        Case SlideItemType.Table
            ' Get the table shape
            Dim table As ITable = TryCast(shape, ITable)

            ' Iterate through rows and modify text in each cell
            For Each row As IRow In table.Rows
                For Each cell As ICell In row.Cells
                    ModifyTextPart(cell.TextBody)
                Next
            Next

        Case SlideItemType.GroupShape
            ' Get the group shape and iterate through child shapes
            Dim groupShape As IGroupShape = TryCast(shape, IGroupShape)
            For Each childShape As IShape In groupShape.Shapes
                ModifySlideElements(childShape)
            Next

        Case SlideItemType.Chart
            ' Modify chart properties
            Dim chart As IPresentationChart = TryCast(shape, IPresentationChart)
            chart.ChartTitle = "Purchase Details"
            chart.ChartTitleArea.Bold = True
            chart.ChartTitleArea.Color = OfficeKnownColors.Red
            chart.ChartTitleArea.Size = 20

        Case SlideItemType.SmartArt
            ' Modify SmartArt content
            Dim smartArt As ISmartArt = TryCast(shape, ISmartArt)
            ' Traverse through all nodes inside SmartArt
            For Each node As ISmartArtNode In smartArt.Nodes
                ModifyTextPart(node.TextBody)
            Next

        Case SlideItemType.OleObject
            ' Modify OLE object size
            Dim oleObject As IOleObject = TryCast(shape, IOleObject)
            oleObject.Width = 300
    End Select
End Sub
{% endhighlight %}

{% endtabs %}

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
private static void ModifyTextPart(ITextBody textBody)
{
    // Iterate through paragraphs in the text body
    foreach (IParagraph paragraph in textBody.Paragraphs)
    {
        // Iterate through text parts and modify the text
        foreach (ITextPart textPart in paragraph.TextParts)
        {
            textPart.Text = "Adventure Works";
        }
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
private static void ModifyTextPart(ITextBody textBody)
{
    // Iterate through paragraphs in the text body
    foreach (IParagraph paragraph in textBody.Paragraphs)
    {
        // Iterate through text parts and modify the text
        foreach (ITextPart textPart in paragraph.TextParts)
        {
            textPart.Text = "Adventure Works";
        }
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Private Sub ModifyTextPart(ByVal textBody As ITextBody)
    ' Iterate through paragraphs in the text body
    For Each paragraph As IParagraph In textBody.Paragraphs
        ' Iterate through text parts and modify the text
        For Each textPart As ITextPart In paragraph.TextParts
            textPart.Text = "Adventure Works"
        Next
    Next
End Sub
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Slides/Iterate-slide-elements).

## Cloning slide

You can create a deep copy of a slide by cloning the slide. The cloned slide is an independent copy of its source slide. This means the changes made in the cloned slide do not affect the source slide.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Slides/Clone-PowerPoint-slide/.NET/Clone-PowerPoint-slide/Program.cs" %}
//Loads or open an PowerPoint Presentation
FileStream inputStream = new FileStream(inputFileName,FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);
//Retrieves the slide instance.
ISlide slide = pptxDoc.Slides[0];
//Creates a cloned copy of slide.
ISlide slideClone = slide.Clone();
//Adds a new text box to the cloned slide.
IShape textboxShape = slideClone.AddTextBox(0, 0, 250, 250);
//Adds a paragraph with text content to the shape.
textboxShape.TextBody.AddParagraph("Hello Presentation");
//Adds the slide to the Presentation.
pptxDoc.Slides.Add(slideClone);
//Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
pptxDoc.Save(outputStream);
//Release all resources of the stream
outputStream.Dispose();
//Close the presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing Presentation.
IPresentation pptxDoc = Presentation.Open("Presentation.pptx");
//Retrieves the slide instance.
ISlide slide = pptxDoc.Slides[0];
//Creates a cloned copy of slide.
ISlide slideClone = slide.Clone();
//Adds a new text box to the cloned slide.
IShape textboxShape = slideClone.AddTextBox(0, 0, 250, 250);
//Adds a paragraph with text content to the shape.
textboxShape.TextBody.AddParagraph("Hello Presentation");
//Adds the slide to the Presentation.
pptxDoc.Slides.Add(slideClone);
//Saves the Presentation to the file system.
pptxDoc.Save("Output.pptx");
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing Presentation.
Dim pptxDoc As IPresentation = Presentation.Open("Presentation.pptx")
'Retrieves the slide instance.
Dim slide As ISlide = pptxDoc.Slides(0)
'Creates a cloned copy of slide.
Dim slideClone As ISlide = slide.Clone()
'Adds a new text box to the cloned slide.
Dim textboxShape As IShape = slideClone.AddTextBox(0, 0, 250, 250)
'Adds a paragraph with text content to the shape.
textboxShape.TextBody.AddParagraph("Hello Presentation")
'Adds the slide to the Presentation.
pptxDoc.Slides.Add(slideClone)
'Saves the Presentation to the file system.
pptxDoc.Save("Output.pptx")
'Closes the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Slides/Clone-PowerPoint-slide).

## Merging slide

The Essential<sup>&reg;</sup> Presentation provides ability to clone slides from one Presentation to another Presentation. With this ability, you can split a large Presentation into small ones and also merge multiple presentations to one Presentation. You can choose the theme for the cloned slide by using the enum [PasteOption](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.PasteOptions.html).

### Destination formatting
This [PasteOption](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.PasteOptions.html) preserves the merged slide with formatting from the destination file during merging. 

The following code sample explains how to merge slide with the destination formatting.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Slides/Merge-PowerPoint-slide/.NET/Merge-PowerPoint-slide/Program.cs" %}
//Opens the source Presentation
IPresentation sourcePresentation = Presentation.Open(SourcePresentationStream);
//Opens the destination Presentation
IPresentation destinationPresentation = Presentation.Open(destinationPresentationStream);
//Clones the first slide of the source Presentation
ISlide clonedSlide = sourcePresentation.Slides[0].Clone();
//Merges the cloned slide to the destination Presentation with paste option - Destination Theme
destinationPresentation.Slides.Add(clonedSlide, PasteOptions.UseDestinationTheme);
//Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
destinationPresentation.Save(outputStream);
//Release all resources of the stream
outputStream.Dispose();
//Closes the source presentation
sourcePresentation.Close();
//Closes the destination Presentation
destinationPresentation.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens the source Presentation
IPresentation sourcePresentation = Presentation.Open("SourcePresentation.pptx");
//Opens the destination Presentation
IPresentation destinationPresentation = Presentation.Open("DestinationPresentation.pptx");
//Clones the first slide of the source Presentation
ISlide clonedSlide = sourcePresentation.Slides[0].Clone();
//Merges the cloned slide to the destination Presentation with paste option - Destination Theme
destinationPresentation.Slides.Add(clonedSlide, PasteOptions.UseDestinationTheme);
//Saves the destination Presentation
destinationPresentation.Save("Output.pptx");
//Closes the source presentation
sourcePresentation.Close();
//Closes the destination Presentation
destinationPresentation.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens the source Presentation
Dim sourcePresentation_1 As IPresentation = Presentation.Open("SourcePresentation.pptx")
'Opens the destination Presentation
Dim destinationPresentation_1 As IPresentation = Presentation.Open("DestinationPresentation.pptx")
'Clones the first slide of the source Presentation
Dim clonedSlide As ISlide = sourcePresentation_1.Slides(0).Clone()
'Merges the cloned slide to the destination Presentation with paste option - Destination Theme
destinationPresentation_1.Slides.Add(clonedSlide, PasteOptions.UseDestinationTheme)
'Saves the destination Presentation
destinationPresentation_1.Save("Output.pptx")
'Closes the source presentation
sourcePresentation.Close()
'Closes the destination Presentation
destinationPresentation.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Slides/Merge-PowerPoint-slide).

### Source formatting
This [PasteOption](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.PasteOptions.html) preserves the merged slide with formatting from the source file during merging. 

The following code sample explains how to merge slide with the source formatting.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Slides/Merge-PowerPoint-slide-with-Source-formatting/.NET/Merge-PowerPoint-slide-with-Source-formatting/Program.cs" %}
//Opens the source Presentation
IPresentation sourcePresentation = Presentation.Open(SourcePresentationStream);
//Opens the destination Presentation
IPresentation destinationPresentation = Presentation.Open(destinationPresentationStream);
//Clones the first slide of the source Presentation
ISlide clonedSlide = sourcePresentation.Slides[0].Clone();
//Merges the cloned slide to the destination Presentation with paste option - Source formatting
destinationPresentation.Slides.Add(clonedSlide, PasteOptions.SourceFormatting);
//Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
destinationPresentation.Save(outputStream);
//Release all resources of the stream
outputStream.Dispose();
//Closes the source presentation
sourcePresentation.Close();
//Closes the destination Presentation
destinationPresentation.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens the source Presentation
IPresentation sourcePresentation = Presentation.Open("SourcePresentation.pptx");
//Opens the destination Presentation
IPresentation destinationPresentation = Presentation.Open("DestinationPresentation.pptx");
//Clones the first slide of the source Presentation
ISlide clonedSlide = sourcePresentation.Slides[0].Clone();
//Merges the cloned slide to the destination Presentation with paste option - Source formatting
destinationPresentation.Slides.Add(clonedSlide, PasteOptions.SourceFormatting);
//Saves the destination Presentation
destinationPresentation.Save("Output.pptx");
//Closes the source presentation
sourcePresentation.Close();
//Closes the destination Presentation
destinationPresentation.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens the source Presentation
Dim sourcePresentation_1 As IPresentation = Presentation.Open("SourcePresentation.pptx")
'Opens the destination Presentation
Dim destinationPresentation_1 As IPresentation = Presentation.Open("DestinationPresentation.pptx")
'Clones the first slide of the source Presentation
Dim clonedSlide As ISlide = sourcePresentation_1.Slides(0).Clone()
'Merges the cloned slide to the destination Presentation with paste option - Source formatting
destinationPresentation_1.Slides.Add(clonedSlide, PasteOptions.SourceFormatting)
'Saves the destination Presentation
destinationPresentation_1.Save("Output.pptx")
'Closes the source presentation
sourcePresentation.Close()
'Closes the destination Presentation
destinationPresentation.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Slides/Merge-PowerPoint-slide-with-Source-formatting/.NET).

## Removing slide

The Essential<sup>&reg;</sup> Presentation provides the ability to delete a slide by its instance or by its index position in slide collection. The following code demonstrates how to delete a slide from a presentation. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Slides/Remove-PowerPoint-slide/.NET/Remove-PowerPoint-slide/Program.cs" %}
//Loads or open an PowerPoint Presentation
FileStream inputStream = new FileStream(inputFileName,FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);
//Retrieves the slide instance.
ISlide slide = pptxDoc.Slides[0];
//Removes the specified slide from the Presentation.
pptxDoc.Slides.Remove(slide);
// Removes the slide from the specified index.
pptxDoc.Slides.RemoveAt(1);
//Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
pptxDoc.Save(outputStream);
//Release all resources of the stream
outputStream.Dispose();
//Closes the Presentation instance
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing presentation.
IPresentation pptxDoc = Presentation.Open("Presentation1.pptx");
//Retrieves the slide instance.
ISlide slide = pptxDoc.Slides[0];
//Removes the specified slide from the Presentation.
pptxDoc.Slides.Remove(slide);
// Removes the slide from the specified index.
pptxDoc.Slides.RemoveAt(1);
//Saves the destination Presentation
pptxDoc.Save("Output.pptx");
//Closes the Presentation instance
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing Presentation.
Dim pptxDoc As IPresentation = Presentation.Open("Presentation1.pptx")
'Retrieves the slide instance.
Dim slide As ISlide = pptxDoc.Slides(0)
'Removes the specified slide from the Presentation.
pptxDoc.Slides.Remove(slide)
'Removes the slide from the specified index.
pptxDoc.Slides.RemoveAt(1)
'Saves the destination Presentation
pptxDoc.Save("Output.pptx")
'Closes the Presentation instance
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Slides/Remove-PowerPoint-slide).

## Converting to image

You can convert a presentation slide to image with Essential<sup>&reg;</sup> Presentation. The following code example converts the first slide of a PowerPoint presentation into image and saves the image to a file.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens a PowerPoint presentation file
IPresentation pptxDoc = Presentation.Open(fileName); 
//Creates an instance of ChartToImageConverter and assigns it to ChartToImageConverter 
pptxDoc.ChartToImageConverter = new ChartToImageConverter(); 
//Converts the first slide into image
Image image = pptxDoc.Slides[0].ConvertToImage(Syncfusion.Drawing.ImageType.Metafile); 
//Saves the image as file
image.Save("slide1.png"); 
//Closes the Presentation instance
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens a PowerPoint presentation file
Dim pptxDoc As IPresentation = Presentation.Open(fileName)
'Creates an instance of ChartToImageConverter and assigns it to ChartToImageConverter 
pptxDoc.ChartToImageConverter = New ChartToImageConverter()
'Converts the first slide into image
Dim image As Image = pptxDoc.Slides(0).ConvertToImage(Syncfusion.Drawing.ImageType. Metafile)
'Saves the image as file
image.Save("slide1.png")
'Closes the Presentation instance
pptxDoc.Close()
{% endhighlight %}

{% highlight c# tabtitle="Xamarin" %}
//PowerPoint Presentation to image conversion is not supported for Xamarin platforms.
{% endhighlight %}

{% endtabs %}

For more details on assemblies required for converting a slide to image,  see [Conversion](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/presentation-to-image#assemblies-required)

N> You can print the PowerPoint presentations by using its ability to convert the slides as images. For more details, refer to [Printing a PowerPoint presentation](/document-processing/powerpoint/powerpoint-library/net/working-with-powerpoint-presentation#printing-a-powerpoint-presentation)

## Changing Slide background

The following code example demonstrates setting the background for a slide.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Slides/Change-PowerPoint-slide-background/.NET/Change-PowerPoint-slide-background/Program.cs" %}
//Loads or open an PowerPoint Presentation
FileStream inputStream = new FileStream(inputFileName,FileMode.Open);
IPresentation pptxDoc = Presentation.Open(inputStream);
//Retrieves the slide instance.
ISlide slide = pptxDoc.Slides[0];
//Retrieves the background instance.
IBackground background = slide.Background;
//Sets the fill type of the background to gradient.
background.Fill.FillType = FillType.Gradient;
//Retrieves the fill of the background to the IGradientFill instance.
IGradientFill gradient = background.Fill.GradientFill;
//Adds the first gradient stop of the gradient fill.
gradient.GradientStops.Add(ColorObject.Green, 20);
//Adds the second gradient stop of the gradient fill.
gradient.GradientStops.Add(ColorObject.Yellow, 50);
//Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream(OutputFileName, FileMode.Create);
pptxDoc.Save(outputStream);
//Release all resources of the stream
outputStream.Dispose();
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing Presentation.
IPresentation pptxDoc = Presentation.Open("Presentation1.pptx");
//Retrieves the slide instance.
ISlide slide = pptxDoc.Slides[0];
//Retrieves the background instance.
IBackground background = slide.Background;
//Sets the fill type of the background to gradient.
background.Fill.FillType = FillType.Gradient;
//Retrieves the fill of the background to the IGradientFill instance.
IGradientFill gradient = background.Fill.GradientFill;
//Adds the first gradient stop of the gradient fill.
gradient.GradientStops.Add(ColorObject.Green, 20);
//Adds the second gradient stop of the gradient fill.
gradient.GradientStops.Add(ColorObject.Yellow, 50);
//Saves the Presentation to the file system
pptxDoc.Save("Output.pptx");
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing Presentation.
Dim pptxDoc As IPresentation = Presentation.Open("Presentation1.pptx")
'Retrieves the slide instance.
Dim slide As ISlide = pptxDoc.Slides(0)
'Retrieves the background instance.
Dim background As IBackground = slide.Background
'Sets the fill type of the background to gradient.
background.Fill.FillType = FillType.Gradient
'Retrieves the fill of the background to the IGradientFill instance.
Dim gradient As IGradientFill = background.Fill.GradientFill
'Adds the first gradient stop of the gradient fill.
gradient.GradientStops.Add(ColorObject.Green, 20)
'Adds the second gradient stop of the gradient fill.
gradient.GradientStops.Add(ColorObject.Yellow, 50)
'Saves the Presentation to the file system
pptxDoc.Save("Output.pptx")
'Closes the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Slides/Change-PowerPoint-slide-background).

## Online Demo

* Explore how to create slides with simple text, table, and image in a PowerPoint presentation using the .NET PowerPoint Library (Presentation) in a live demo [here](https://ej2.syncfusion.com/aspnetcore/powerpoint/slide#/bootstrap5).

## See Also

* [How to set slide size for Presentation after cloning and merging a PowerPoint slide?](https://support.syncfusion.com/kb/article/17045/how-to-set-slide-size-for-powerpoint-after-cloning-and-merging-a-powerpoint-slide-in-c)
* [How to edit the text of an existing slide and the alt text of an image in PowerPoint Presentation?](https://support.syncfusion.com/kb/article/17890/how-to-edit-the-text-of-an-existing-slide-and-the-alt-text-of-an-image-in-powerpoint-presentation)
