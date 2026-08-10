---
title: Create, read and edit Master and Layout slides in CSharp |Syncfusion<sup>&reg;</sup>|
description: Create, read, and edit Master slides and Layout slides using .NET PowerPoint library (Essential<sup>&reg;</sup> Presentation).
platform: document-processing
control: PowerPoint
documentation: UG
---

# Create, Read, and Edit Master and Layout slides

To make all slides share the same format, apply your changes to the Slide Master or Layout Master. The changes are applied to every slide that inherits the master slide or layout slide.

The [Syncfusion PowerPoint library](https://www.syncfusion.com/powerpoint-framework/net) supports the following:

1. Access the [MasterSlide](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IMasterSlide.html) in a PowerPoint presentation.
2. Add a [LayoutSlide](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.ILayoutSlide.html) to the [MasterSlide](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IMasterSlide.html).
3. Customize the [LayoutSlide](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.ILayoutSlide.html).
4. Add a slide with one of the pre-defined layout slides.
5. Customize the layout slides to fit your own scenarios.

## Access the MasterSlide

In a PowerPoint presentation, the [MasterSlide](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IMasterSlide.html) is the top slide that controls all information about the theme, layout, background, color, fonts, and positioning of all slides. Using this MasterSlide, you can easily adjust the look of an existing theme or make overall changes to all your slides.

The following code example demonstrates how to access the [MasterSlide](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IMasterSlide.html) in a PowerPoint presentation. The `ShapeName` property returns the name of the shape as a string and is used here only for demonstration.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Create a PowerPoint presentation
using (IPresentation pptxDoc = Presentation.Create())
{
    //Access the first master slide in the PowerPoint presentation
    IMasterSlide masterSlide = pptxDoc.Masters[0];
    //Get the first shape name from the master slide
    string shapeName = masterSlide.Shapes[0].ShapeName;
    //Save the PowerPoint presentation to a file
    pptxDoc.Save("Sample.pptx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a PowerPoint presentation
using (IPresentation pptxDoc = Presentation.Create())
{
    //Access the first master slide in the PowerPoint presentation
    IMasterSlide masterSlide = pptxDoc.Masters[0];
    //Get the first shape name from the master slide
    string shapeName = masterSlide.Shapes[0].ShapeName;
    //Save the PowerPoint presentation to a file
    pptxDoc.Save("Sample.pptx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a PowerPoint presentation
Using pptxDoc As IPresentation = Presentation.Create()
    'Access the first master slide in the PowerPoint presentation.
    Dim masterSlide As IMasterSlide = pptxDoc.Masters(0)
    'Get the first shape name from the master slide
    Dim shapeName As String = masterSlide.Shapes(0).ShapeName
    'Save the PowerPoint presentation to a file.
    pptxDoc.Save("AccessMasterSlide.pptx")
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Master-and-Layout-slides/Access-PowerPoint-master-slide).

## Change background of Master slide

You can change the background of the master slide, and all slides in the presentation will receive the same background settings. The following code example demonstrates how to set a solid background for a master slide. The `FillType` enumeration also supports `Gradient`, `Pattern`, and `Picture` fills; refer to the [FillType](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.FillType.html) API reference for the full list.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]"
playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PowerPoint-Examples/master/Master-and-Layout-slides/Modify-PowerPoint-master-slide-background/.NET/Modify-PowerPoint-master-slide-background/Program.cs" %}
//Create a PowerPoint presentation.
using (IPresentation pptxDoc = Presentation.Create())
{
    //Access the first master slide in the PowerPoint presentation.
    IMasterSlide masterSlide = pptxDoc.Masters[0];
    //Retrieve the background instance.
    IBackground background = masterSlide.Background;
    //Set the fill type for the background as Solid fill.
    background.Fill.FillType = FillType.Solid;
    //Get the instance for the solid fill.
    ISolidFill solidFill = background.Fill.SolidFill;
    //Set the color for the solid fill object.
    solidFill.Color = ColorObject.Green;
    //Add a slide so the master background is applied.
    pptxDoc.Slides.Add(masterSlide.LayoutSlides[0]);
    //Save the PowerPoint presentation to a file.
    pptxDoc.Save("Sample.pptx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a PowerPoint presentation.
using (IPresentation pptxDoc = Presentation.Create())
{
    //Access the first master slide in the PowerPoint presentation.
    IMasterSlide masterSlide = pptxDoc.Masters[0];
    //Retrieve the background instance.
    IBackground background = masterSlide.Background;
    //Set the fill type for the background as Solid fill.
    background.Fill.FillType = FillType.Solid;
    //Get the instance for the solid fill.
    ISolidFill solidFill = background.Fill.SolidFill;
    //Set the color for the solid fill object.
    solidFill.Color = ColorObject.Green;
    //Add a slide so the master background is applied.
    pptxDoc.Slides.Add(masterSlide.LayoutSlides[0]);
    //Save the PowerPoint presentation to a file.
    pptxDoc.Save("Sample.pptx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a PowerPoint presentation.
Using pptxDoc As IPresentation = Presentation.Create()
    'Access the first master slide in the PowerPoint presentation.
    Dim masterSlide As IMasterSlide = pptxDoc.Masters(0)
    'Retrieve the background instance.
    Dim background As IBackground = masterSlide.Background
    'Set the fill type for the background as Solid fill.
    background.Fill.FillType = FillType.Solid
    'Get the instance for the solid fill.
    Dim solidFill As ISolidFill = background.Fill.SolidFill
    'Set the color for the solid fill object.
    solidFill.Color = ColorObject.Green
    'Add a slide so the master background is applied.
    pptxDoc.Slides.Add(masterSlide.LayoutSlides(0))
    'Save the PowerPoint presentation to a file.
    pptxDoc.Save("Sample.pptx")
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Master-and-Layout-slides/Modify-PowerPoint-master-slide-background).

## Create a Custom Layout Slide

Real-world scenarios often require additional predefined templates. The [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) lets you build your own custom layout designs and use them to create individual slides.

The following code example demonstrates how to create a new custom layout slide in a PowerPoint presentation. The `SlideLayoutType` enumeration includes other values such as `Title`, `TitleAndContent`, `SectionHeader`, and `TwoContent`; see the [SlideLayoutType](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.SlideLayoutType.html) API reference for the full list.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}
//Create a PowerPoint presentation.
using (IPresentation pptxDoc = Presentation.Create())
{
    //Add a new layout slide to the PowerPoint presentation.
    ILayoutSlide layoutSlide = pptxDoc.Masters[0].LayoutSlides.Add(SlideLayoutType.Blank, "CustomLayout");
    //Add a shape to the layout slide.
    IShape shape = layoutSlide.Shapes.AddShape(AutoShapeType.Diamond, 30, 20, 400, 300);
    //Set a fill color for the added shape.
    shape.Fill.SolidFill.Color = ColorObject.FromArgb(78, 89, 90);
    //Change the background color for the layout slide.
    layoutSlide.Background.Fill.SolidFill.Color = ColorObject.FromArgb(78, 89, 90);
    //Save the PowerPoint presentation to a file.
    pptxDoc.Save("LayoutSlide.pptx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create a PowerPoint presentation.
using (IPresentation pptxDoc = Presentation.Create())
{
    //Add a new layout slide to the PowerPoint presentation.
    ILayoutSlide layoutSlide = pptxDoc.Masters[0].LayoutSlides.Add(SlideLayoutType.Blank, "CustomLayout");
    //Add a shape to the layout slide.
    IShape shape = layoutSlide.Shapes.AddShape(AutoShapeType.Diamond, 30, 20, 400, 300);
    //Set a fill color for the added shape.
    shape.Fill.SolidFill.Color = ColorObject.FromArgb(78, 89, 90);
    //Change the background color for the layout slide.
    layoutSlide.Background.Fill.SolidFill.Color = ColorObject.FromArgb(78, 89, 90);
    //Save the PowerPoint presentation to a file.
    pptxDoc.Save("LayoutSlide.pptx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create a PowerPoint presentation.
Using pptxDoc As IPresentation = Presentation.Create()
    'Add a new layout slide to the PowerPoint presentation.
    Dim layoutSlide As ILayoutSlide = pptxDoc.Masters(0).LayoutSlides.Add(SlideLayoutType.Blank, "CustomLayout")
    'Add a shape to the layout slide.
    Dim shape As IShape = layoutSlide.Shapes.AddShape(AutoShapeType.Diamond, 30, 20, 400, 300)
    'Set a fill color for the added shape.
layoutSlide.Background.Fill.SolidFill.Color = ColorObject.FromArgb(78, 89, 90)
    'Change the background color for the layout slide.
    layoutSlide.Background.Fill.SolidFill.Color = ColorObject.FromArgb(78, 89, 90)
    'Save the PowerPoint presentation to a file.
    pptxDoc.Save("LayoutSlide.pptx")
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Master-and-Layout-slides/Create-custom-layout-slide).

## See Also

* [Loading and Saving the Presentation](Loading-and-Saving-the-Presentation)
* [NuGet Packages Required](NuGet-Packages-Required)
* [Assemblies Required](Assemblies-Required)