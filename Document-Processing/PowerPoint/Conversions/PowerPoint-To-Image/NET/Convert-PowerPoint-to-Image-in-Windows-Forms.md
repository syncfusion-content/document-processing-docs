---
title: Convert PowerPoint to Image in Windows Forms | Syncfusion
description: Convert PowerPoint to image in Windows Forms using .NET PowerPoint library (Presentation) without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Convert PowerPoint to Image in Windows Forms

Syncfusion<sup>&reg;</sup> PowerPoint is a [.NET PowerPoint library](https://www.syncfusion.com/document-processing/powerpoint-framework/net) used to create, read, edit and convert PowerPoint presentation programmatically without **Microsoft PowerPoint** or interop dependencies. Using this library, you can **convert a PowerPoint to image in Windows Forms**.

## Steps to convert PowerPoint to Image programmatically

{% tabcontents %}

{% tabcontent Visual Studio %}

**Prerequisites:**

* Visual Studio 2022.
* Install **.NET desktop development** workload with necessary .NET Framework SDK.

Step 1: Create a new C# Windows Forms application project.

![Create Windows Forms project](Workingwith-Windows/Project-Open-and-Save.png)

Step 2: Install the [Syncfusion.Presentation.WinForms](https://www.nuget.org/packages/Syncfusion.Presentation.WinForms) NuGet package as reference to your .NET Standard applications from [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.Presentation.WinForms Nuget Package](Workingwith-Windows/Nuget-Package-PPTXtoImage.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Include the following namespaces in the **Form1.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Presentation;

{% endhighlight %}
{% endtabs %}

Step 4: Add a new button in **Form1.Designer.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

private Button btnCreate;
private Label label;
private void InitializeComponent()
{
     label = new Label();
     btnCreate = new Button();
     //Label
     label.Location = new System.Drawing.Point(0, 40);
     label.Size = new System.Drawing.Size(426, 35);
     label.Text = "Click the button to Convert PowerPoint to Image.";
     label.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;

     //Button
     btnCreate.Location = new System.Drawing.Point(180, 110);
     btnCreate.Size = new System.Drawing.Size(85, 36);
     btnCreate.Text = "Convert";
     btnCreate.Click += new EventHandler(btnConvert_Click);

     //Create PowerPoint
     ClientSize = new System.Drawing.Size(450, 150);
     Controls.Add(label);
     Controls.Add(btnCreate);
     Text = "Convert PowerPoint to Image";
}

{% endhighlight %}
{% endtabs %}

Step 5: Add the following code in **btnConvert_Click** to **convert a PowerPoint to image in Windows Forms**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Open an existing PowerPoint Presentation.
using (IPresentation pptxDoc = Presentation.Open("Data/Input.pptx"))
{
    //Convert the first slide into image.
    Image image = pptxDoc.Slides[0].ConvertToImage(Syncfusion.Drawing.ImageType.Metafile);
    //Save the image file.
    image.Save("PPTXtoImage.Jpeg");
}

{% endhighlight %}
{% endtabs %}

Step 6: Build the project.

Click on Build → Build Solution or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 7: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the app.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-Image-conversion/Convert-PowerPoint-presentation-to-Image/Windows%20forms).

By executing the program, you will get the **Image** as follows.

![PowerPoint to Image in Windows Forms](PPTXtoPDF_images/Output_PowerPoint_Presentation_to-Image.png)

{% endtabcontent %}

{% tabcontent JetBrains Rider %}

**Prerequisites:**

* JetBrains Rider.
* Install .NET Framework Developer Pack.

Step 1. Open JetBrains Rider and create a new Windows Forms Application project.
* Launch JetBrains Rider.
* Click **New Solution** on the welcome screen.

![Launch JetBrains Rider](Workingwith-Windows/Launch-JetBrains-Rider.png)

* In the New Solution dialog, select **Project Type** as **Desktop**.
* Enter a project name and specify the location.
* Select the target framework as Full Framework and choose the desired version.
* Select **Template** as **Windows Forms App**.
* Click create.

![Creating a new Windows Forms App in JetBrains Rider](Workingwith-Windows/Create-WindowsForms-sample.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/).
* Click the NuGet icon in the Rider toolbar and type [Syncfusion.PresentationToPdfConverter.WinForms](https://www.nuget.org/packages/Syncfusion.PresentationToPdfConverter.WinForms/) in the search bar.
* Ensure that nuget.org is selected as the package source.
* Select the latest Syncfusion.PresentationToPdfConverter.WinForms NuGet package from the list.
* Click the + (Add) button to add the package.

![Select the Syncfusion.PresentationToPdfConverter.WinForms NuGet package](Workingwith-Windows/Search-Syncfusion.PresentationToPdfConverter.WinForms-NuGet.png)

* Click the Install button to complete the installation.

![Install the Syncfusion.PresentationToPdfConverter.WinForms NuGet package](Workingwith-Windows/Install-Syncfusion.PresentationToPdfConverter.WinForms-NuGet.png)

N> Starting with v16.2.0.x, if you reference Syncfusion assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion license key in your application to use our components.

Step 3: Include the following namespaces in the **Form1.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Presentation;

{% endhighlight %}
{% endtabs %}

Step 4: Add a new button in **Form1.Designer.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

private Button btnCreate;
private Label label;
private void InitializeComponent()
{
     label = new Label();
     btnCreate = new Button();
     //Label
     label.Location = new System.Drawing.Point(0, 40);
     label.Size = new System.Drawing.Size(426, 35);
     label.Text = "Click the button to Convert PowerPoint to Image.";
     label.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;

     //Button
     btnCreate.Location = new System.Drawing.Point(180, 110);
     btnCreate.Size = new System.Drawing.Size(85, 36);
     btnCreate.Text = "Convert";
     btnCreate.Click += new EventHandler(btnConvert_Click);

     //Create PowerPoint
     ClientSize = new System.Drawing.Size(450, 150);
     Controls.Add(label);
     Controls.Add(btnCreate);
     Text = "Convert PowerPoint to Image";
}

{% endhighlight %}
{% endtabs %}

Step 5: Add the following code in **btnConvert_Click** to **convert a PowerPoint to image in Windows Forms**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Open an existing PowerPoint Presentation.
using (IPresentation pptxDoc = Presentation.Open("Data/Input.pptx"))
{
    //Convert the first slide into image.
    Image image = pptxDoc.Slides[0].ConvertToImage(Syncfusion.Drawing.ImageType.Metafile);
    //Save the image file.
    image.Save("PPTXtoImage.Jpeg");
}

{% endhighlight %}
{% endtabs %}

Step 6: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 7: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the app.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-Image-conversion/Convert-PowerPoint-presentation-to-Image/Windows%20forms).

By executing the program, you will get the **Image** as follows.

![PowerPoint to Image in Windows Forms](PPTXtoPDF_images/Output_PowerPoint_Presentation_to-Image.png)

{% endtabcontent %}

{% endtabcontents %}

Click [here](https://www.syncfusion.com/document-processing/powerpoint-framework/net) to explore the rich set of Syncfusion<sup>&reg;</sup> PowerPoint Library (Presentation) features. 

An online sample link to [convert PowerPoint Presentation to image](https://ej2.syncfusion.com/aspnetcore/PowerPoint/PPTXToImage#/material3) in ASP.NET Core. 