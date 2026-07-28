---
title: Working with PowerPoint Shapes | Syncfusion |
description: Code examples to create, edit, and format PowerPoint shapes in C# and VB.NET using the .NET PowerPoint Presentation Library without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: Presentation
documentation: UG
---
# Working with PowerPoint Shapes

## Adding shapes to a slide

In every slide, there is a shape collection that can contain any form of graphical objects such as AutoShape, chart, text, or picture.  You can add any shape element to this collection. The [IShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IShape.html) is the base type for the shape elements.

The following code example demonstrates how to add an AutoShape and image to the shape collection of a slide.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Shapes/Add-PowerPoint-shape/.NET/Add-PowerPoint-shape/Program.cs" %}
//Creates an instance for PowerPoint
IPresentation pptxDoc = Presentation.Create();
//Adds a blank slide to the Presentation
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Adds a normal shape to the slide
slide.Shapes.AddShape(AutoShapeType.Cube, 50, 200, 300, 300);
//Creates an instance for image as stream
FileStream imageStream = new FileStream(imagePath, FileMode.Open);
//Add picture to the shape collection
IPicture picture = slide.Shapes.AddPicture(imageStream, 373, 83, 526, 382);
//Saves the Presentation
pptxDoc.Save("Sample.pptx");
//Closes the stream
imageStream.Close();
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates an instance for PowerPoint
IPresentation pptxDoc = Presentation.Create();
//Adds a blank slide to the Presentation
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Adds a normal shape to the slide
slide.Shapes.AddShape(AutoShapeType.Cube, 50, 200, 300, 300);
//Creates an instance for the image as a stream
Stream imageStream = File.Open("Image.jpg", FileMode.Open);
//Adds a picture to the shape collection
IPicture picture = slide.Shapes.AddPicture(imageStream, 373, 83, 526, 382);
//Saves the Presentation
pptxDoc.Save("Sample.pptx");
//Closes the stream
imageStream.Close();
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates an instance for the PowerPoint Presentation
Dim pptxDoc As IPresentation = Presentation.Create()
'Adds a blank slide to the Presentation
Dim slide As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
'Adds a normal shape to the slide
slide.Shapes.AddShape(AutoShapeType.Cube, 50, 200, 300, 300)
'Creates an instance for the image as a stream
Dim imageStream As Stream = File.Open("Image.jpg", FileMode.Open)
'Adds a picture to the shape collection
Dim picture As IPicture = slide.Shapes.AddPicture(imageStream, 373, 83, 526, 382)
'Saves the Presentation
pptxDoc.Save("Sample.pptx")
'Closes the stream
imageStream.Close()
'Closes the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Shapes/Add-PowerPoint-shape).

## Iterating through shapes

You can iterate through the shapes in a PowerPoint slide. The following code example demonstrates how to iterate through the shapes present in a slide and set the `Title` property of each shape based on its type. The `Title` is shown in PowerPoint's selection pane and helps identify the shape.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Shapes/Iterate-through-shapes/.NET/Iterate-through-shapes/Program.cs" %}
//Loads or opens a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Iterates through the shapes in a slide and sets the title
foreach (IShape shape in pptxDoc.Slides[0].Shapes)
{
    if (shape is IPicture)
        shape.Title = "Picture";
    else if (shape is IShape)
        shape.Title = "AutoShape";
}
//Saves the Presentation
pptxDoc.Save("Output.pptx");
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing Presentation from the file system
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Iterates through the shapes in a slide and sets the title
foreach (IShape shape in pptxDoc.Slides[0].Shapes)
{
    if (shape is IPicture)
        shape.Title = "Picture";
    else if (shape is IShape)
        shape.Title = "AutoShape";
}
//Saves the Presentation
pptxDoc.Save("Output.pptx");
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing Presentation from the file system
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Iterates through the shapes in a slide and sets the title
For Each shape As IShape In pptxDoc.Slides(0).Shapes
    If TypeOf shape Is IPicture Then
        shape.Title = "Picture"
    ElseIf TypeOf shape Is IShape Then
        shape.Title = "AutoShape"
    End If
Next
'Saves the Presentation
pptxDoc.Save("Output.pptx")
'Closes the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Shapes/Iterate-through-shapes).

## Specifying shape properties

The shape properties can be used to format and modify the shapes in a slide. The following code example demonstrates how to apply formatting to a shape, including the [ILineFormat](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.ILineFormat.html), [FillType](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.FillType.html), and [ColorObject](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.ColorObject.html) APIs.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Shapes/Apply-shape-properties/.NET/Apply-shape-properties/Program.cs" %}
//Loads or opens a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Gets the first slide of the Presentation
ISlide slide = pptxDoc.Slides[0];
//Gets the first shape of the slide
IShape shape = slide.Shapes[0];
//Sets the shape name
shape.ShapeName = "Shape1";
//Retrieves the line format of the shape
ILineFormat lineFormat = shape.LineFormat;
//Sets the dash style of the line format
lineFormat.DashStyle = LineDashStyle.DashDotDot;
//Sets the weight of the line format
lineFormat.Weight = 3;
//Sets the pattern fill type to the shape
shape.Fill.FillType = FillType.Pattern;
//Chooses the type of pattern
shape.Fill.PatternFill.Pattern = PatternFillType.DashedDownwardDiagonal;
//Sets the foreground color
shape.Fill.PatternFill.ForeColor = ColorObject.AliceBlue;
//Sets the background color
shape.Fill.PatternFill.BackColor = ColorObject.DarkSalmon;
//Saves the Presentation
pptxDoc.Save("Output.pptx");
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing Presentation from the file system
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Gets the first slide of the Presentation
ISlide slide = pptxDoc.Slides[0];
//Gets the first shape of the slide
IShape shape = slide.Shapes[0];
//Sets the shape name
shape.ShapeName = "Shape1";
//Retrieves the line format of the shape
ILineFormat lineFormat = shape.LineFormat;
//Sets the dash style of the line format
lineFormat.DashStyle = LineDashStyle.DashDotDot;
//Sets the weight of the line format
lineFormat.Weight = 3;
//Sets the pattern fill type to the shape
shape.Fill.FillType = FillType.Pattern;
//Chooses the type of pattern
shape.Fill.PatternFill.Pattern = PatternFillType.DashedDownwardDiagonal;
//Sets the foreground color
shape.Fill.PatternFill.ForeColor = ColorObject.AliceBlue;
//Sets the background color
shape.Fill.PatternFill.BackColor = ColorObject.DarkSalmon;
//Saves the Presentation
pptxDoc.Save("Output.pptx");
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing Presentation from the file system
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Gets the first slide of the Presentation
Dim slide As ISlide = pptxDoc.Slides(0)
'Gets the first shape of the slide
Dim shape As IShape = slide.Shapes(0)
'Sets the shape name
shape.ShapeName = "Shape1"
'Retrieves the line format of the shape
Dim lineFormat As ILineFormat = shape.LineFormat
'Sets the dash style of the line format
lineFormat.DashStyle = LineDashStyle.DashDotDot
'Sets the weight of the line format
lineFormat.Weight = 3
'Sets the pattern fill type to the shape
shape.Fill.FillType = FillType.Pattern
'Chooses the type of pattern
shape.Fill.PatternFill.Pattern = PatternFillType.DashedDownwardDiagonal
'Sets the foreground color
shape.Fill.PatternFill.ForeColor = ColorObject.AliceBlue
'Sets the background color
shape.Fill.PatternFill.BackColor = ColorObject.DarkSalmon
'Saves the Presentation
pptxDoc.Save("Output.pptx")
'Closes the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Shapes/Apply-shape-properties).

## Removing the shapes

The shapes can be removed from a slide by its instance or by its index position in the shape collection. The following code example demonstrates how to remove the shapes from a slide. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Shapes/Remove-shape/.NET/Remove-shape/Program.cs" %}
//Loads or opens a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Retrieves the first slide from the Presentation
ISlide slide = pptxDoc.Slides[0];
//Retrieves the first shape
IShape shape = slide.Shapes[0] as IShape;
//Removes the shape from the shape collection
slide.Shapes.Remove(shape);
//Saves the Presentation
pptxDoc.Save("Output.pptx");
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens an existing Presentation from the file system
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Retrieves the first slide from the Presentation
ISlide slide = pptxDoc.Slides[0];
//Retrieves the first shape
IShape shape = slide.Shapes[0];
//Removes the shape from the shape collection
slide.Shapes.Remove(shape);
//Saves the Presentation to the file system
pptxDoc.Save("Result.pptx");
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens an existing Presentation from the file system
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Retrieves the first slide from the Presentation
Dim slide As ISlide = pptxDoc.Slides(0)
'Retrieves the first shape
Dim shape As IShape = slide.Shapes(0)
'Removes the shape from the shape collection
slide.Shapes.Remove(shape)
'Saves the Presentation to the file system
pptxDoc.Save("Result.pptx")
'Closes the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Shapes/Remove-shape).

## Working with GroupShape

A [GroupShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IGroupShape.html) lets you combine multiple shapes, text boxes, and pictures into a single composite shape on a slide. The `IGroupShape` exposes its child shapes through the `Shapes` collection and behaves like a regular shape for positioning and formatting.

### Creating a GroupShape

The shapes in a slide can be grouped into a single shape. The following code snippet demonstrates how to group different slide items into a single [GroupShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IGroupShape.html).

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Shapes/Create-PowerPoint-groupshape/.NET/Create-PowerPoint-groupshape/Program.cs" %}
//Creates an instance for the PowerPoint Presentation
IPresentation pptxDoc = Presentation.Create();
//Adds a blank slide to the Presentation
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Adds a group shape to the slide
IGroupShape groupShape = slide.GroupShapes.AddGroupShape(20, 20, 450, 300);
//Adds a TextBox to the group shape
groupShape.Shapes.AddTextBox(30, 25, 100, 100).TextBody.AddParagraph("My TextBox");
//Adds a picture to the group shape
groupShape.Shapes.AddPicture("Image.png", 40, 100, 100, 100);
//Adds a shape to the group shape
groupShape.Shapes.AddShape(AutoShapeType.Rectangle, 200, 200, 90, 30);
//Saves the Presentation
pptxDoc.Save("Output.pptx");
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates an instance for the PowerPoint Presentation
IPresentation pptxDoc = Presentation.Create();
//Adds a blank slide to the Presentation
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.Blank);
//Adds a group shape to the slide
IGroupShape groupShape = slide.GroupShapes.AddGroupShape(20, 20, 450, 300);
//Adds a TextBox to the group shape
groupShape.Shapes.AddTextBox(30, 25, 100, 100).TextBody.AddParagraph("My TextBox");
//Gets the image stream
Stream pictureStream = File.Open("Image.png", FileMode.Open);
//Adds a picture to the group shape
groupShape.Shapes.AddPicture(pictureStream, 40, 100, 100, 100);
//Adds a shape to the group shape
groupShape.Shapes.AddShape(AutoShapeType.Rectangle, 200, 200, 90, 30);
//Saves the Presentation
pptxDoc.Save("Output.pptx");
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates an instance for the PowerPoint Presentation
Dim pptxDoc As IPresentation = Presentation.Create()
'Adds a blank slide to the Presentation
Dim slide As ISlide = pptxDoc.Slides.Add(SlideLayoutType.Blank)
'Adds a group shape to the slide
Dim groupShape As IGroupShape = slide.GroupShapes.AddGroupShape(20, 20, 450, 300)
'Adds a TextBox to the group shape
groupShape.Shapes.AddTextBox(30, 25, 100, 100).TextBody.AddParagraph("My TextBox")
'Gets the image stream
Dim pictureStream As Stream = File.Open("Image.png", FileMode.Open)
'Adds a picture to the group shape
groupShape.Shapes.AddPicture(pictureStream, 40, 100, 100, 100)
'Adds a shape to the group shape
groupShape.Shapes.AddShape(AutoShapeType.Rectangle, 200, 200, 90, 30)
'Saves the Presentation
pptxDoc.Save("Output.pptx")
'Closes the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Shapes/Create-PowerPoint-groupshape).

### Iterating and modifying a particular GroupShape

You can iterate through the shape collection of a [GroupShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IGroupShape.html). The following code snippet demonstrates how to iterate through the shapes of a [GroupShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IGroupShape.html) to modify it by removing a specific shape.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Shapes/Iterate-groupshape-and-modify-a-shape/.NET/Iterate-groupshape-and-modify-a-shape/Program.cs" %}
//Loads or opens a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Retrieves the first slide
ISlide slide = pptxDoc.Slides[0];
//Retrieves the first group shape of the slide
IGroupShape groupShape = slide.GroupShapes[0];
//Creates an instance to hold the shape collection
IShapes shapes = groupShape.Shapes;
//Iterates the shape collection to remove the picture in a group shape
foreach (IShape shape in shapes)
{
    if (shape.SlideItemType == SlideItemType.Picture)
    {
        shapes.Remove(shape);
        break;
    }
}
//Saves the Presentation
pptxDoc.Save("Output.pptx");
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens a PowerPoint Presentation with group shapes
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Retrieves the first slide
ISlide slide = pptxDoc.Slides[0];
//Retrieves the first group shape of the slide
IGroupShape groupShape = slide.GroupShapes[0];
//Creates an instance to hold the shape collection
IShapes shapes = groupShape.Shapes;
//Iterates the shape collection to remove the picture in a group shape
foreach (IShape shape in shapes)
{
    if (shape.SlideItemType == SlideItemType.Picture)
    {
        shapes.Remove(shape);
        break;
    }
}
//Saves the Presentation
pptxDoc.Save("Output.pptx");
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens a PowerPoint Presentation with group shapes
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Retrieves the first slide
Dim slide As ISlide = pptxDoc.Slides(0)
'Retrieves the first group shape of the slide
Dim groupShape As IGroupShape = slide.GroupShapes(0)
'Creates an instance to hold the shape collection
Dim shapes As IShapes = groupShape.Shapes
'Iterates the shape collection to remove the picture in a group shape
For Each shape As IShape In shapes
    If shape.SlideItemType = SlideItemType.Picture Then
        shapes.Remove(shape)
        Exit For
    End If
Next
'Saves the Presentation
pptxDoc.Save("Output.pptx")
'Closes the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Shapes/Iterate-groupshape-and-modify-a-shape).

###  Removing a GroupShape

[GroupShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IGroupShape.html) can be removed from a slide using its instance or by its index position in the [GroupShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IGroupShape.html) collection of the slide. Below code snippet explains how to remove a [GroupShape](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IGroupShape.html) from a slide.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Shapes/Remove-groupshape/.NET/Remove-groupshape/Program.cs" %}
//Loads or opens a PowerPoint Presentation
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Retrieves the first slide
ISlide slide = pptxDoc.Slides[0];
//Retrieves the first group shape of the slide
IGroupShape groupShape = slide.GroupShapes[0];
//Removes the group shape from the group shape collection
slide.GroupShapes.Remove(groupShape);
//Saves the Presentation
pptxDoc.Save("Output.pptx");
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Opens a PowerPoint Presentation with group shapes
IPresentation pptxDoc = Presentation.Open("Sample.pptx");
//Retrieves the first slide
ISlide slide = pptxDoc.Slides[0];
//Retrieves the first group shape of the slide
IGroupShape groupShape = slide.GroupShapes[0];
//Removes the group shape from the group shape collection
slide.GroupShapes.Remove(groupShape);
//Saves the Presentation
pptxDoc.Save("Output.pptx");
//Closes the Presentation
pptxDoc.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Opens a PowerPoint Presentation with group shapes
Dim pptxDoc As IPresentation = Presentation.Open("Sample.pptx")
'Retrieves the first slide
Dim slide As ISlide = pptxDoc.Slides(0)
'Retrieves the first group shape of the slide
Dim groupShape As IGroupShape = slide.GroupShapes(0)
'Removes the group shape from the group shape collection
slide.GroupShapes.Remove(groupShape)
'Saves the Presentation
pptxDoc.Save("Output.pptx")
'Closes the Presentation
pptxDoc.Close()
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Shapes/Remove-groupshape).

## Limitations

N> The Presentation library does not have support for converting auto-shapes with modified adjustment values in a PowerPoint Presentation to image or PDF. To learn more about adjustment values in PowerPoint shapes, see [this MSDN reference](https://msdn.microsoft.com/en-us/library/office/aa220882(v=office.11).aspx).

## See also
* [How to set Smooth Start and End for animated shapes in Presentation?](https://support.syncfusion.com/kb/article/11450/how-to-set-smooth-start-and-end-for-animated-shapes-in-presentation)
* [Working with Charts](Working-with-Charts)
* [Working with Tables](Working-with-Tables)