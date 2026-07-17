---
title: Perform OCR on PDF and image files in Windows Forms | Syncfusion
description: Learn how to perform OCR on scanned PDF documents and images in Windows Forms with different tesseract versions using Syncfusion .NET OCR library. 
platform: document-processing
documentation: UG
keywords: Assemblies
--- 

# Perform OCR in Windows Forms
The [.NET OCR library](https://www.syncfusion.com/document-sdk/net-pdf-library/ocr-process) is used to extract text from scanned PDFs and images in Windows Forms applications with the help of Google's [Tesseract](https://github.com/tesseract-ocr/tesseract) Optical Character Recognition engine.

## Steps to perform OCR on an entire PDF document in Windows Forms 

Step 1: Create a new Windows Forms application project. 
![Create WF project](OCR-Images/OCR-WF-app-creation.png)

In the project configuration window, select your target framework (.NET Framework 4.7.2 or later), name your project, and select **Create**. 
![Project configuration window](OCR-Images/OCR-WF-configuraion-window.png)

Step 2: Install the [Syncfusion.Pdf.OCR.WinForms](https://www.nuget.org/packages/Syncfusion.Pdf.OCR.WinForms) NuGet package into your WinForms application from [nuget.org](https://www.nuget.org/).
![OCR NuGet package installation](OCR-Images/OCR-WF-NuGet-package.png)

**Version Compatibility:**
- Syncfusion.Pdf.OCR.WinForms supports .NET Framework 4.7.2 and later, as well as .NET Core 3.1 and above.

**Supported Inputs:**
- Single-page and multi-page PDF documents
- Scanned images in common formats (JPEG, PNG, TIFF)
- Recommended DPI: 200 DPI or higher for optimal OCR accuracy

N> 1. Beginning from version 21.1.x, the TesseractBinaries and Tesseract language data folders are now included by default; you no longer have to set these paths explicitly.
N> 2. The current NuGet package includes Tesseract 5.0, which provides support for 100+ languages.
N> 3. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Add a new button in Form1.Designer.cs file. 

{% tabs %}
{% highlight c# tabtitle="C#" %}

private System.Windows.Forms.Button button1;

private void InitializeComponent()
{
    this.button1 = new System.Windows.Forms.Button();
    this.SuspendLayout();
    // button1
    this.button1.Location = new System.Drawing.Point(284, 162);
    this.button1.Name = "button1";
    this.button1.Size = new System.Drawing.Size(190, 65);
    this.button1.TabIndex = 0;
    this.button1.Text = "Perform OCR on entire PDF document";
    this.button1.UseVisualStyleBackColor = true;
    this.button1.Click += new System.EventHandler(this.btnCreate_Click);
    // Form1
    this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
    this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
    this.ClientSize = new System.Drawing.Size(800, 450);
    this.Controls.Add(this.button1);
    this.Name = "Form1";
    this.Text = "Form1";
    this.ResumeLayout(false);
}

{% endhighlight %}
{% endtabs %}

Step 4: Include the following namespaces in the Form1.cs file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.OCRProcessor;
using Syncfusion.Pdf.Parsing;

{% endhighlight %}
{% endtabs %}

Step 5: Create the btnCreate_Click event and add the following code to perform OCR on the entire PDF document using [PerformOCR](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html#Syncfusion_OCRProcessor_OCRProcessor_PerformOCR_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_String_) method of the [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html) class. 

{% tabs %}
{% highlight c# tabtitle="C#" %}

private void btnCreate_Click(object sender, EventArgs e)
{
    //Initialize the OCR processor.
    using (OCRProcessor processor = new OCRProcessor())
    {
        //Load an existing PDF document.
        PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
        //Set the Tesseract version
        processor.Settings.TesseractVersion = TesseractVersion.Version5_0;
        //Set OCR language to process.
        processor.Settings.Language = Languages.English;
        //Process OCR by providing the PDF document.
        processor.PerformOCR(loadedDocument);  
        //Save the OCR processed PDF document to disk.
        loadedDocument.Save("OCR.pdf");
        loadedDocument.Close(true);
    }
}
{% endtabs %}

By executing the program, you will get a PDF document as follows.
![OCR output](OCR-Images/Output.png)

A complete working sample can be downloaded from [GitHub](https://github.com/SyncfusionExamples/OCR-csharp-examples/tree/master/Windows%20Forms).

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.