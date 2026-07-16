---
title: Create or Generate PDF file in Windows Forms | Syncfusion
description: Learn how to create or generate a PDF file in Windows Forms with easy steps using Syncfusion .NET PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
--- 

# Create a PDF File in Windows Forms

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, work with forms, and secure PDF files.

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Visual Studio | 2019 or later (2022 recommended) |
| .NET Framework | 4.5+ or .NET 5+ |
| Syncfusion PDF NuGet Package | [Syncfusion.Pdf.WinForms](https://www.nuget.org/packages/Syncfusion.Pdf.WinForms/) (latest) |
| Project Type | Windows Forms Application (.NET Framework or .NET Core) |

To include the .NET PDF library into your Windows Forms application, refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation.

## Steps to create a PDF document in Windows Forms

### Step 1: Create a new Windows Forms application project

Create a new **Windows Forms Application** project in Visual Studio.

![Windows Forms sample creation](GettingStarted_images/WF-sample-creation.png)

### Step 2: Install the Syncfusion.Pdf.WinForms NuGet package

Install the [Syncfusion.Pdf.WinForms](https://www.nuget.org/packages/Syncfusion.Pdf.WinForms/) NuGet package as a reference to your Windows Forms application from [NuGet.org](https://www.nuget.org/).

![Windows Forms PDF NuGet package](GettingStarted_images/WF-NuGet-package.png)

You can also install via Package Manager Console:

```powershell
Install-Package Syncfusion.Pdf.WinForms
```

### Step 3: Register Syncfusion license

Starting with v16.2.0.x, you must register a Syncfusion license key to use the library. Add the license key in your **Program.cs** file before creating the application form:

```csharp
using Syncfusion.Licensing;

static class Program
{
    [STAThread]
    static void Main()
    {
        // Register Syncfusion license
        SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
        
        Application.EnableVisualStyles();
        Application.SetCompatibleTextRenderingDefault(false);
        Application.Run(new Form1());
    }
}
```

Refer to [Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview) for license registration details.

### Step 4: Add required namespaces

Include the following namespaces in the **Form1.cs** file (code-behind, not Designer.cs):

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Windows.Forms;

{% endhighlight %}
{% endtabs %}

### Step 5: Create the UI with a button

Add a button and label in the **Form1.Designer.cs** InitializeComponent() method to create the PDF document UI:

{% tabs %}
{% highlight c# tabtitle="C#" %}

private Button btnCreate;
private Label label;
  
private void InitializeComponent()
{
  btnCreate = new Button();
  label = new Label();
  
  //Label
  label.Location = new System.Drawing.Point(0, 40);
  label.Size = new System.Drawing.Size(426, 35);
  label.Text = "Click the button to generate PDF file by Essential PDF";
  label.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
  
  //Button
  btnCreate.Location = new System.Drawing.Point(180, 110);
  btnCreate.Size = new System.Drawing.Size(85, 26);
  btnCreate.Text = "Create PDF";
  btnCreate.Click += new EventHandler(OnGenerateButtonClick); 
                               
  //Create PDF
  ClientSize = new System.Drawing.Size(450, 150);
  Controls.Add(label);
  Controls.Add(btnCreate);
  Text = "Create PDF";
}

{% endhighlight %}
{% endtabs %}

### Step 6: Implement PDF generation

Add the following code to the **Form1.cs** code-behind to create the `OnGenerateButtonClick` event handler. This generates a PDF document using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. The [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) draws text on the page. The `PointF(0, 0)` parameter specifies the starting position (top-left corner) in points (1/72 inch).

{% tabs %}
{% highlight c# tabtitle="C#" %}

private void OnGenerateButtonClick(object sender, EventArgs e)
{
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
}

{% endhighlight %}
{% endtabs %}

### Step 7: Build and run the application

1. Build the Windows Forms application (Build > Build Solution)
2. Run the application (Debug > Start Debugging or F5)
3. Click the **Generate PDF** button
4. The PDF will be created in your Documents folder and automatically open

**Expected output:** A file named `Output.pdf` containing "Hello World!!!" text.

![WF output PDF document](GettingStarted_images/pdf-generation-output.png)

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "The type or namespace 'Syncfusion' could not be found" | Verify Syncfusion.Pdf.WinForms NuGet package is installed; restore NuGet packages (Tools > Manage NuGet Packages for Solution) |
| "License key not registered" error at runtime | Register license in Program.cs using SyncfusionLicenseProvider.RegisterLicense() before creating the form |
| "Access to the path is denied" when saving | Verify the Documents folder has write permissions; ensure app runs with sufficient privileges |
| "File not found" after generation | Verify the Documents folder exists; use full absolute path or Environment.SpecialFolder for reliability |
| PDF doesn't open automatically | Install a PDF reader (Adobe Reader, Windows Reader, etc.); verify file was created successfully first |
| Application crashes when button is clicked | Add try-catch error handling; verify all required using statements are included; check license registration |
| "PointF not found" error | Ensure `using System.Drawing;` is included in namespaces |
| Event handler not firing | Verify event handler name matches in InitializeComponent() (check spelling and case sensitivity) |

## Next Steps

- **Download [Complete Working Sample](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Windows%20Forms/Create-new-PDF-document)** — Reference implementation with error handling and best practices
- **Try [Online Demo](https://document.syncfusion.com/demos/pdf/default#/tailwind)** — Interactive examples and feature showcase
- **Explore [PDF Library Features](https://www.syncfusion.com/document-sdk/net-pdf-library)** — Comprehensive API reference including tables, images, forms, and security features
- **View [API Documentation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html)** — Full class and method reference for PdfDocument and related classes 