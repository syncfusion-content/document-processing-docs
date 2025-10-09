---
title: Create and edit PowerPoint files on Mac OS | Syncfusion
description: Create, read and edit PowerPoint files in .NET Core application on Mac OS using Syncfusion .NET Core PowerPoint library without Microsoft Office.
platform: document-processing
control: PowerPoint
documentation: UG
---
# Create, read and edit a PowerPoint file on Mac OS

You can create or edit a PowerPoint file in .NET Core on Mac OS using Syncfusion<sup>&reg;</sup> PowerPoint library. The below are the steps.

## Create a PowerPoint file in .NET Core Console application project on Mac OS

{% tabcontents %}

{% tabcontent Visual Studio %}

**Prerequisites:**

* Visual Studio 2022.
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.

Step 1: Create a new C# .NET Core console application.

![Create .NET Core console project](Workingwith-Mac/CreateProject.png)

Step 2: Select the project version.

![Select project version](Workingwith-Mac/selectprojectverion.png)

Step 3: Install the [Syncfusion.Presentation.Net.Core](https://www.nuget.org/packages/Syncfusion.Presentation.Net.Core/) NuGet package as reference to your .NET Standard applications from [NuGet.org](https://www.nuget.org/).

![Install Presentation .Net Core Nuget](Workingwith-Mac/Install_Nuget1.png)
![Install Presentation .Net Core Nuget](Workingwith-Mac/Install_Nuget.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 4: Include the following Namespaces in the Program.cs file.

{% tabs %}

{% highlight c# tabtitle="C#" %}
using Syncfusion.Presentation;
using System.IO;
{% endhighlight %}

{% endtabs %}

Step 5: Add the following code snippet in Program.cs file.

{% tabs %}

{% highlight c# tabtitle="C#" %}
//Create a new instance of PowerPoint Presentation file
IPresentation pptxDoc = Presentation.Create();
//Add a new slide to file and apply background color
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.TitleOnly);
//Specify the fill type and fill color for the slide background 
slide.Background.Fill.FillType = FillType.Solid;
slide.Background.Fill.SolidFill.Color = ColorObject.FromArgb(232, 241, 229);
//Add title content to the slide by accessing the title placeholder of the TitleOnly layout-slide
IShape titleShape = slide.Shapes[0] as IShape;
titleShape.TextBody.AddParagraph("Company History").HorizontalAlignment = HorizontalAlignmentType.Center;
//Add description content to the slide by adding a new TextBox
IShape descriptionShape = slide.AddTextBox(53.22, 141.73, 874.19, 77.70);
descriptionShape.TextBody.Text = "IMN Solutions PVT LTD is the software company, established in 1987, by George Milton. The company has been listed as the trusted partner for many high-profile organizations since 1988 and got awards for quality products from reputed organizations.";
//Add bullet points to the slide
IShape bulletPointsShape = slide.AddTextBox(53.22, 270, 437.90, 116.32);
//Add a paragraph for a bullet point
IParagraph firstPara = bulletPointsShape.TextBody.AddParagraph("The company acquired the MCY corporation for 20 billion dollars and became the top revenue maker for the year 2015.");
//Format how the bullets should be displayed
firstPara.ListFormat.Type = ListType.Bulleted;
firstPara.LeftIndent = 35;
firstPara.FirstLineIndent = -35;
// Add another paragraph for the next bullet point
IParagraph secondPara = bulletPointsShape.TextBody.AddParagraph("The company is participating in top open source projects in automation industry.");
//Format how the bullets should be displayed
secondPara.ListFormat.Type = ListType.Bulleted;
secondPara.LeftIndent = 35;
secondPara.FirstLineIndent = -35;
//Gets a picture as stream.
FileStream pictureStream = new FileStream("Image.jpg", FileMode.Open);
//Adds the picture to a slide by specifying its size and position.
slide.Shapes.AddPicture(pictureStream, 499.79, 238.59, 364.54, 192.16);
//Add an auto-shape to the slide
IShape stampShape = slide.Shapes.AddShape(AutoShapeType.Explosion1, 48.93, 430.71, 104.13, 80.54);
//Format the auto-shape color by setting the fill type and text
stampShape.Fill.FillType = FillType.None;
stampShape.TextBody.AddParagraph("IMN").HorizontalAlignment = HorizontalAlignmentType.Center;
//Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream("Sample.pptx", FileMode.Create);
pptxDoc.Save(outputStream);
//Release all resources from stream
outputStream.Dispose();
//Close the PowerPoint presentation
pptxDoc.Close();
{% endhighlight %}

{% endtabs %}

Step 6: Build the project.

Click on Build → Build Solution or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 7: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the app.

The output of the above code example will generate the below PowerPoint slide. The output will be saved in bin folder.

![.Net Core console Output](Workingwith-Mac/GettingStartedSample.png)

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

**Prerequisites:**

* Visual Studio Code.
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.
* Open Visual Studio Code and install the [C# for Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) from the Extensions Marketplace.

Step 1: Create a new .NET Core console application project.
* Open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> and type **.NET:New Project** and enter.
* Choose the **Console App** template.

![Choose Console app from template](Workingwith-Mac/Console-app-template.png)

* Select the project location, type the project name and press enter.
* Then choose **Create project**.

Step 2: To **create a Word document in console app**, install [Syncfusion.Presentation.Net.Core](https://www.nuget.org/packages/Syncfusion.Presentation.Net.Core/) to the project.
* Press <kbd>Ctrl</kbd> + <kbd>`</kbd> (backtick) to open the integrated terminal in Visual Studio Code.
* Ensure you're in the project root directory where your .csproj file is located.
* Run the command `dotnet add package Syncfusion.Presentation.NET.Core` to install the NuGet package.

![Add Syncfusion.Presentation.NET.Core NuGet package](Workingwith-Mac/Command-to-add-NuGet-package-console.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Include the following Namespaces in the Program.cs file.

{% tabs %}

{% highlight c# tabtitle="C#" %}
using Syncfusion.Presentation;
using System.IO;
{% endhighlight %}

{% endtabs %}

Step 4: Add the following code snippet in Program.cs file.

{% tabs %}

{% highlight c# tabtitle="C#" %}
//Create a new instance of PowerPoint Presentation file
IPresentation pptxDoc = Presentation.Create();
//Add a new slide to file and apply background color
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.TitleOnly);
//Specify the fill type and fill color for the slide background 
slide.Background.Fill.FillType = FillType.Solid;
slide.Background.Fill.SolidFill.Color = ColorObject.FromArgb(232, 241, 229);
//Add title content to the slide by accessing the title placeholder of the TitleOnly layout-slide
IShape titleShape = slide.Shapes[0] as IShape;
titleShape.TextBody.AddParagraph("Company History").HorizontalAlignment = HorizontalAlignmentType.Center;
//Add description content to the slide by adding a new TextBox
IShape descriptionShape = slide.AddTextBox(53.22, 141.73, 874.19, 77.70);
descriptionShape.TextBody.Text = "IMN Solutions PVT LTD is the software company, established in 1987, by George Milton. The company has been listed as the trusted partner for many high-profile organizations since 1988 and got awards for quality products from reputed organizations.";
//Add bullet points to the slide
IShape bulletPointsShape = slide.AddTextBox(53.22, 270, 437.90, 116.32);
//Add a paragraph for a bullet point
IParagraph firstPara = bulletPointsShape.TextBody.AddParagraph("The company acquired the MCY corporation for 20 billion dollars and became the top revenue maker for the year 2015.");
//Format how the bullets should be displayed
firstPara.ListFormat.Type = ListType.Bulleted;
firstPara.LeftIndent = 35;
firstPara.FirstLineIndent = -35;
// Add another paragraph for the next bullet point
IParagraph secondPara = bulletPointsShape.TextBody.AddParagraph("The company is participating in top open source projects in automation industry.");
//Format how the bullets should be displayed
secondPara.ListFormat.Type = ListType.Bulleted;
secondPara.LeftIndent = 35;
secondPara.FirstLineIndent = -35;
//Gets a picture as stream.
FileStream pictureStream = new FileStream("Image.jpg", FileMode.Open);
//Adds the picture to a slide by specifying its size and position.
slide.Shapes.AddPicture(pictureStream, 499.79, 238.59, 364.54, 192.16);
//Add an auto-shape to the slide
IShape stampShape = slide.Shapes.AddShape(AutoShapeType.Explosion1, 48.93, 430.71, 104.13, 80.54);
//Format the auto-shape color by setting the fill type and text
stampShape.Fill.FillType = FillType.None;
stampShape.TextBody.AddParagraph("IMN").HorizontalAlignment = HorizontalAlignmentType.Center;
//Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream("Sample.pptx", FileMode.Create);
pptxDoc.Save(outputStream);
//Release all resources from stream
outputStream.Dispose();
//Close the PowerPoint presentation
pptxDoc.Close();
{% endhighlight %}

{% endtabs %}

Step 5: Build the project.

Run the following command in terminal to build the project.

```
dotnet build
```

Step 6: Run the project.

Run the following command in terminal to run the project.

```
dotnet run
```

The output of the above code example will generate the below PowerPoint slide. The output will be saved in bin folder.

![.Net Core console Output](Workingwith-Mac/GettingStartedSample.png)

{% endtabcontent %}

{% tabcontent JetBrains Rider %}

**Prerequisites:**

* JetBrains Rider.
* Install .NET 8 SDK or later.

Step 1. Open JetBrains Rider and create a new .NET Core console application project.
* Launch JetBrains Rider.
* Click **New solution** on the welcome screen.

![Launch JetBrains Rider](Workingwith-Mac/Launch-JetBrains-Rider.png)

* In the New Solution dialog, select **Project Type** as **Console**.
* Select the target framework (e.g., .NET 8.0, .NET 9.0).
* Enter a project name and specify the location.
* Click create.

![Creating a new .NET MAUI App in JetBrains Rider](Workingwith-Mac/Create-Console-NET-Core-sample-in-Mac.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/).
* Click the NuGet icon in the Rider toolbar and type [Syncfusion.Presentation.Net.Core](https://www.nuget.org/packages/Syncfusion.Presentation.Net.Core) in the search bar.
* Ensure that nuget.org is selected as the package source.
* Select the latest Syncfusion.Presentation.Net.Core NuGet package from the list.
* Click the + (Add) button to add the package.

![Select the Syncfusion.Presentation.Net.Core NuGet package](Workingwith-Mac/Select-Syncfusion.Presentation.Net.Core-NuGet.png)

* Click the **Install** button to complete the installation.

![Install the Syncfusion.Presentation.Net.Core NuGet package](Workingwith-Mac/Install-Syncfusion.Presentation.Net.Core-NuGet.png)

N> Starting with v16.2.0.x, if you reference Syncfusion assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion license key in your application to use our components.

Step 3: Include the following Namespaces in the Program.cs file.

{% tabs %}

{% highlight c# tabtitle="C#" %}
using Syncfusion.Presentation;
using System.IO;
{% endhighlight %}

{% endtabs %}

Step 4: Add the following code snippet in Program.cs file.

{% tabs %}

{% highlight c# tabtitle="C#" %}
//Create a new instance of PowerPoint Presentation file
IPresentation pptxDoc = Presentation.Create();
//Add a new slide to file and apply background color
ISlide slide = pptxDoc.Slides.Add(SlideLayoutType.TitleOnly);
//Specify the fill type and fill color for the slide background 
slide.Background.Fill.FillType = FillType.Solid;
slide.Background.Fill.SolidFill.Color = ColorObject.FromArgb(232, 241, 229);
//Add title content to the slide by accessing the title placeholder of the TitleOnly layout-slide
IShape titleShape = slide.Shapes[0] as IShape;
titleShape.TextBody.AddParagraph("Company History").HorizontalAlignment = HorizontalAlignmentType.Center;
//Add description content to the slide by adding a new TextBox
IShape descriptionShape = slide.AddTextBox(53.22, 141.73, 874.19, 77.70);
descriptionShape.TextBody.Text = "IMN Solutions PVT LTD is the software company, established in 1987, by George Milton. The company has been listed as the trusted partner for many high-profile organizations since 1988 and got awards for quality products from reputed organizations.";
//Add bullet points to the slide
IShape bulletPointsShape = slide.AddTextBox(53.22, 270, 437.90, 116.32);
//Add a paragraph for a bullet point
IParagraph firstPara = bulletPointsShape.TextBody.AddParagraph("The company acquired the MCY corporation for 20 billion dollars and became the top revenue maker for the year 2015.");
//Format how the bullets should be displayed
firstPara.ListFormat.Type = ListType.Bulleted;
firstPara.LeftIndent = 35;
firstPara.FirstLineIndent = -35;
// Add another paragraph for the next bullet point
IParagraph secondPara = bulletPointsShape.TextBody.AddParagraph("The company is participating in top open source projects in automation industry.");
//Format how the bullets should be displayed
secondPara.ListFormat.Type = ListType.Bulleted;
secondPara.LeftIndent = 35;
secondPara.FirstLineIndent = -35;
//Gets a picture as stream.
FileStream pictureStream = new FileStream("Image.jpg", FileMode.Open);
//Adds the picture to a slide by specifying its size and position.
slide.Shapes.AddPicture(pictureStream, 499.79, 238.59, 364.54, 192.16);
//Add an auto-shape to the slide
IShape stampShape = slide.Shapes.AddShape(AutoShapeType.Explosion1, 48.93, 430.71, 104.13, 80.54);
//Format the auto-shape color by setting the fill type and text
stampShape.Fill.FillType = FillType.None;
stampShape.TextBody.AddParagraph("IMN").HorizontalAlignment = HorizontalAlignmentType.Center;
//Save the PowerPoint Presentation as stream
FileStream outputStream = new FileStream("Sample.pptx", FileMode.Create);
pptxDoc.Save(outputStream);
//Release all resources from stream
outputStream.Dispose();
//Close the PowerPoint presentation
pptxDoc.Close();
{% endhighlight %}

{% endtabs %}

Step 5: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 6: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the app.

The output of the above code example will generate the below PowerPoint slide. The output will be saved in bin folder.

![.Net Core console Output](Workingwith-Mac/GettingStartedSample.png)

{% endtabcontent %}

{% endtabcontents %}

## Read and edit a PowerPoint file in .NET Core Console application project on Mac OS

You can edit an existing PowerPoint file on Mac system using this library. The below code snippet demonstrates accessing a shape from a slide and changing the text within it.

{% tabs %}

{% highlight c# tabtitle="C#" %}
//Open an existing PowerPoint presentation
IPresentation pptxDoc = Presentation.Open(new FileStream("Sample.pptx",FileMode.Open));
//Gets the first slide from the PowerPoint presentation
ISlide slide = pptxDoc.Slides[0];
//Gets the first shape of the slide
IShape shape = slide.Shapes[0] as IShape;
//Change the text of the shape
if(shape.TextBody.Text == "Company History")
    shape.TextBody.Text = "Company Profile";
//Save the PowerPoint presentation as stream
FileStream outputStream = new FileStream("Output.pptx", FileMode.Create);
pptxDoc.Save(outputStream);
outputStream.Position = 0;
outputStream.Flush();
outputStream.Dispose();
//Close the PowerPoint presentation
pptxDoc.Close();

{% endhighlight %}

{% endtabs %}

Click [here](https://www.syncfusion.com/document-processing/powerpoint-framework/net-core) to explore the rich set of Syncfusion<sup>&reg;</sup> PowerPoint Library (Presentation) features. 

An online sample link to [create a PowerPoint Presentation](https://document.syncfusion.com/demos/powerpoint/default#/tailwind) in ASP.NET Core.