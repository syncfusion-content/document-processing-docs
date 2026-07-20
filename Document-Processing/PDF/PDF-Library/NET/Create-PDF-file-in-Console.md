---
title: Create PDF file in Console Application | Syncfusion
description: Discover how to generate a PDF in a Console Application by using the Syncfusion PDF library efficiently.
platform: document-processing
control: PDF
documentation: UG
--- 

# Create or Generate a PDF file in a Console application

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, work with forms, and secure PDF files.

To quickly get started with the .NET PDF library, watch this video:
{% youtube "https://youtu.be/PvUdu1hpRLQ?si=xFFjpsJZv3s8AonV" %}

## Steps to Create a PDF Document in a .NET (Core) Console App

{% tabcontents %}
{% tabcontent Visual Studio %}
{% include_relative tabcontent-support/Create-PDF-document-in-Console-Visual-Studio.md %}
{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}
{% include_relative tabcontent-support/Create-PDF-document-in-Console-VS-Code.md %}
{% endtabcontent %}

{% tabcontent JetBrains Rider %}
{% include_relative tabcontent-support/Create-PDF-document-in-Console-JetBrains.md %}
{% endtabcontent %}
{% endtabcontents %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Console/.NET/Create_PDF).

By executing the program, you will get the PDF document as follows.
![Console output PDF document](GettingStarted_images/pdf-generation-output.png)

## Steps to Create a PDF Document in a .NET Framework Console App

The following steps illustrate creating a simple Hello World PDF document in a console application using .NET Framework.

**Prerequisites**:

* Install Visual Studio: Download and install Visual Studio (2017 or later) from the [official website](https://visualstudio.microsoft.com/downloads/). The **.NET desktop development** workload must be selected during installation.

Step 1: Create a new C# Console Application (.NET Framework) project.
![Console Application creation](Console_images/console-app-sample-creation.png)

Step 2: Name the project.
![Name the application](Console_images/Name_project_Framework.png)

Step 3: Install the [Syncfusion.Pdf.WinForms](https://www.nuget.org/packages/Syncfusion.Pdf.WinForms/) NuGet package as a reference to your .NET Framework applications from [NuGet.org](https://www.nuget.org).
![NET Framework NuGet package](Console_images/Nuget_package_Framework.png)

N> The [Syncfusion.Pdf.WinForms](https://www.nuget.org/packages/Syncfusion.Pdf.WinForms/) NuGet package is a dependent package for Syncfusion<sup>&reg;</sup> Windows Forms GUI controls, so named with suffix "WinForms". It has platform-independent .NET Framework (4.0, 4.5, 4.5.1, 4.6) assemblies of the PDF library and doesn't contain any Windows Forms-related references or code. Hence, we recommend this package for the .NET Framework Console application.

Step 4: Include the following namespaces in the *Program.cs*.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf;
using System.Drawing;

{% endhighlight %}
{% endtabs %}

Step 5: Include the following code sample in *Program.cs* to create a PDF file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Create a new PDF document. 
using (PdfDocument document = new PdfDocument()) 
{
    //Add a page to the document.
    PdfPage page = document.Pages.Add();
    //Create PDF graphics for a page.
    PdfGraphics graphics = page.Graphics;
    //Set the standard font.
    PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
    //Draw the text.
    graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
    //Save the document.
    document.Save("Output.pdf");
}

{% endhighlight %}
{% endtabs %}

Step 6: Build the project.

Click on Build > Build Solution or press Ctrl + Shift + B to build the project.

Step 7: Run the project.

Click the Start button (green arrow) or press F5 to run the app.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Console/.NET%20Framework/Create%20PDF).

By executing the program, you will get the PDF document as follows.
![Console output PDF document](GettingStarted_images/pdf-generation-output.png)

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.

An online sample link to [create PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind).