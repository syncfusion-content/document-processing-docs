---
title: Create or Generate PDF file in C# and VB.NET | Syncfusion
canonical_url: "https://www.syncfusion.com/document-sdk/net-pdf-library"
description: Learn how to create or generate a PDF file in C# and VB.NET with elements like text, image and table using Syncfusion .NET PDF library without Adobe. 
platform: document-processing
control: PDF
documentation: UG
keywords: create pdf, edit pdf, write pdf, merge, pdf form, fill form, digital sign, table, c#, vb.net, dotnet pdf, syncfusion.pdf.net
---
# Create or Generate PDF file in C# and VB.NET

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) enables you to create PDF documents from scratch with text, images, and tables, as well as manipulate existing PDFs. This library also offers functionality to merge, split, stamp, create forms, and secure PDF files.

## Prerequisites

| Requirement | Details |
|-------------|---------|
| **IDE** | Visual Studio 2019 or later (VS 2022 recommended) |
| **.NET Versions** | .NET Framework 4.5+, .NET 5.0+, .NET 6.0+, .NET 7.0, .NET 8.0 |
| **NuGet Package** | Syncfusion.Pdf.NET v16.2.0.x or later |
| **License Registration** | v16.2.0.x+ requires license registration for production use |
| **Optional Tools** | Visual Studio Code, Rider, or command-line interface (dotnet CLI) |
| **Community License** | Free license available from [Syncfusion Community License](https://help.syncfusion.com/common/essential-studio/licensing/community-license) |

## Installing Syncfusion.Pdf.NET

### NuGet Package Manager

1. In Visual Studio, go to **Tools** → **NuGet Package Manager** → **Manage NuGet Packages for Solution**
2. Search for **Syncfusion.Pdf.NET**
3. Click **Install** and select the latest version (v16.2.0.x or later)

### Command Line

```bash
dotnet add package Syncfusion.Pdf.NET
```

## Registering the License Key

Starting with v16.2.0.x, the Syncfusion PDF library requires license registration. This ensures compliance and enables production deployments.

**Step 1**: Register your license key at application startup. For ASP.NET Core, add the following to `Program.cs`:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Licensing;

var builder = WebApplication.CreateBuilder(args);
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
builder.Services.AddControllers();
var app = builder.Build();
app.MapControllers();
app.Run();

{% endhighlight %}
{% endtabs %}

**Step 2**: For console applications, call the license registration method before creating your first PDF document:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Licensing;
using Syncfusion.Pdf;

Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");

// Your PDF creation code here
PdfDocument document = new PdfDocument();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}

Imports Syncfusion.Licensing
Imports Syncfusion.Pdf

Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")

' Your PDF creation code here
Dim document As New PdfDocument()

{% endhighlight %}
{% endtabs %}

> **Security Note**: Never hardcode license keys in production code. Use environment variables or secure configuration management (Azure Key Vault, AWS Secrets Manager, etc.). Refer to [Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview) for production deployment guidance.

## Supported Platforms

The Syncfusion .NET PDF library works seamlessly across multiple platforms:
- **Windows**: Windows Forms, WPF, ASP.NET MVC, ASP.NET Core, UWP, Xamarin
- **Web**: ASP.NET MVC, ASP.NET Core, Blazor, Azure Functions, AWS Lambda
- **Cloud**: Azure App Service, Google App Engine, AWS Elastic Beanstalk
- **Cross-platform**: .NET 5.0+, .NET 6.0+, .NET 7.0, .NET 8.0 on Windows, Linux, and macOS

> **Note**: Units are measured in **points** (not pixels) in the PDF library, similar to other PDF rendering engines. 1 inch = 72 points.

To include the .NET PDF library into your application, please refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation.

To quickly get started with creating a PDF document in .NET, watch this video:
{% youtube "https://www.youtube.com/watch?v=PvUdu1hpRLQ" %}

## Core Concepts

Before diving into code examples, understand these important concepts:

1. **PdfDocument**: Represents the entire PDF document being created. All pages and content are added to this object.
2. **PdfPage**: Represents a single page in the PDF document. Multiple pages can be added to a document.
3. **PdfGraphics**: Provides 2D drawing capabilities similar to GDI+ in Windows Forms. Used to draw text, images, and shapes.
4. **Resource Disposal**: Always use `using` statements with PDF objects to ensure proper resource disposal and prevent memory leaks in production environments.
5. **Cross-platform vs Windows-specific**: Use `Syncfusion.Drawing` for cross-platform .NET; use `System.Drawing` for Windows-only applications.

## Creating a PDF document with simple text

The following code example shows how to create a PDF document with simple text using the [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) object to draw the text on the PDF page.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

try
{
    // Create a new PDF document
    using (PdfDocument document = new PdfDocument())
    {
        // Add a page to the document
        PdfPage page = document.Pages.Add();
        
        // Create PDF graphics for the page
        PdfGraphics graphics = page.Graphics;
        
        // Set the standard font
        PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
        
        // Draw the text
        graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
        
        // Save the document
        document.Save("Output.pdf");
    }
    
    Console.WriteLine("PDF created successfully as Output.pdf");
}
catch (Exception ex)
{
    Console.WriteLine($"Error creating PDF: {ex.Message}");
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;

try
{
    // Create a new PDF document
    using (PdfDocument document = new PdfDocument())
    {
        // Add a page to the document
        PdfPage page = document.Pages.Add();
        
        // Create PDF graphics for the page
        PdfGraphics graphics = page.Graphics;
        
        // Set the standard font
        PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
        
        // Draw the text
        graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
        
        // Save the document
        document.Save("Output.pdf");
    }
    
    Console.WriteLine("PDF created successfully as Output.pdf");
}
catch (Exception ex)
{
    Console.WriteLine($"Error creating PDF: {ex.Message}");
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics

Try
    ' Create a new PDF document
    Using document As New PdfDocument()
        ' Add a page to the document
        Dim page As PdfPage = document.Pages.Add()
        
        ' Create PDF graphics for the page
        Dim graphics As PdfGraphics = page.Graphics
        
        ' Set the standard font
        Dim font As PdfFont = New PdfStandardFont(PdfFontFamily.Helvetica, 20)
        
        ' Draw the text
        graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, New PointF(0, 0))
        
        ' Save the document
        document.Save("Output.pdf")
    End Using
    
    Console.WriteLine("PDF created successfully as Output.pdf")
Catch ex As Exception
    Console.WriteLine($"Error creating PDF: {ex.Message}")
End Try

{% endhighlight %}

{% endtabs %}

### Expected Output

The code above creates a simple PDF file named `Output.pdf` containing:
- Single page with default letter size (8.5" x 11")
- Text "Hello World!!!" in Helvetica font, 20 points, black color
- Text positioned at coordinates (0, 0) — top-left of page
- File size: approximately 2-3 KB

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/blob/master/Getting%20Started/.NET/Create_PDF_NET/Create_PDF_NET/Program.cs).

## Creating a PDF document with image

The following code example shows how to generate a PDF document with an image using the [DrawImage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawImage_Syncfusion_Pdf_Graphics_PdfImage_System_Single_System_Single_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) class.

> **Note**: Ensure the image file (Autumn Leaves.jpg) exists in the application's working directory or provide the full path.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System;

try
{
    using (PdfDocument doc = new PdfDocument())
    {
        // Add a page to the document
        PdfPage page = doc.Pages.Add();
        
        // Create PDF graphics for the page
        PdfGraphics graphics = page.Graphics;
        
        // Load the image as stream
        string imagePath = "Autumn Leaves.jpg";
        if (!System.IO.File.Exists(imagePath))
        {
            throw new System.IO.FileNotFoundException($"Image file not found: {imagePath}");
        }
        
        using (FileStream imageStream = new FileStream(imagePath, FileMode.Open, FileAccess.Read))
        {
            PdfBitmap image = new PdfBitmap(imageStream);
            
            // Draw the image at position (0, 0)
            graphics.DrawImage(image, 0, 0);
        }
        
        // Save the document
        doc.Save("Output.pdf");
    }
    
    Console.WriteLine("PDF with image created successfully as Output.pdf");
}
catch (Exception ex)
{
    Console.WriteLine($"Error creating PDF: {ex.Message}");
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System;

try
{
    using (PdfDocument doc = new PdfDocument())
    {
        // Add a page to the document
        PdfPage page = doc.Pages.Add();
        
        // Create PDF graphics for the page
        PdfGraphics graphics = page.Graphics;
        
        // Load the image from disk
        string imagePath = "Autumn Leaves.jpg";
        if (!System.IO.File.Exists(imagePath))
        {
            throw new System.IO.FileNotFoundException($"Image file not found: {imagePath}");
        }
        
        PdfBitmap image = new PdfBitmap(imagePath);
        
        // Draw the image at position (0, 0)
        graphics.DrawImage(image, 0, 0);
        
        // Save the document
        doc.Save("Output.pdf");
    }
    
    Console.WriteLine("PDF with image created successfully as Output.pdf");
}
catch (Exception ex)
{
    Console.WriteLine($"Error creating PDF: {ex.Message}");
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports System

Try
    Using doc As New PdfDocument()
        ' Add a page to the document
        Dim page As PdfPage = doc.Pages.Add()
        
        ' Create PDF graphics for the page
        Dim graphics As PdfGraphics = page.Graphics
        
        ' Load the image from disk
        Dim imagePath As String = "Autumn Leaves.jpg"
        If Not System.IO.File.Exists(imagePath) Then
            Throw New System.IO.FileNotFoundException($"Image file not found: {imagePath}")
        End If
        
        Dim image As New PdfBitmap(imagePath)
        
        ' Draw the image at position (0, 0)
        graphics.DrawImage(image, 0, 0)
        
        ' Save the document
        doc.Save("Output.pdf")
    End Using
    
    Console.WriteLine("PDF with image created successfully as Output.pdf")
Catch ex As Exception
    Console.WriteLine($"Error creating PDF: {ex.Message}")
End Try

{% endhighlight %}

{% endtabs %}

### Expected Output

The code above creates a PDF file named `Output.pdf` containing:
- Single page with the image (Autumn Leaves.jpg) embedded
- Image positioned at top-left corner (0, 0)
- Image dimensions: original size or scaled based on PdfBitmap parameters
- File size: depends on image compression (typically 50-200 KB for photos)

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/.NET/Create_PDF_with_image_NET).

## Creating a PDF document with table

The following code example shows how to generate a PDF document with a simple table from a [DataSource](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Grid.PdfGrid.html#Syncfusion_Pdf_Grid_PdfGrid_DataSource) using the [PdfGrid](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Grid.PdfGrid.html) class. The [DataSource](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Grid.PdfGrid.html#Syncfusion_Pdf_Grid_PdfGrid_DataSource) can be a data set, data table, arrays, or an IEnumerable object.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Grid;
using System.Data;
using System;

try
{
    using (PdfDocument doc = new PdfDocument())
    {
        // Add a page
        PdfPage page = doc.Pages.Add();
        
        // Create a PdfGrid
        PdfGrid pdfGrid = new PdfGrid();
        
        // Create a DataTable with sample product data
        DataTable dataTable = new DataTable();
        dataTable.Columns.Add("ProductID");
        dataTable.Columns.Add("ProductName");
        dataTable.Columns.Add("Quantity");
        dataTable.Columns.Add("UnitPrice");
        dataTable.Columns.Add("Discount");
        dataTable.Columns.Add("Price");
        
        // Add sample rows
        dataTable.Rows.Add(new object[] { "CA-1098", "Queso Cabrales", "12", "14", "1", "167" });
        dataTable.Rows.Add(new object[] { "LJ-0192-M", "Singaporean Hokkien Fried Mee", "10", "20", "3", "197" });
        dataTable.Rows.Add(new object[] { "SO-B909-M", "Mozzarella di Giovanni", "15", "65", "10", "956" });
        
        // Assign data source to grid
        pdfGrid.DataSource = dataTable;
        
        // Draw grid to the page at position (10, 10)
        pdfGrid.Draw(page, new PointF(10, 10));
        
        // Save the document
        doc.Save("Output.pdf");
    }
    
    Console.WriteLine("PDF with table created successfully as Output.pdf");
}
catch (Exception ex)
{
    Console.WriteLine($"Error creating PDF: {ex.Message}");
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Grid;
using System.Data;
using System;

try
{
    using (PdfDocument doc = new PdfDocument())
    {
        // Add a page
        PdfPage page = doc.Pages.Add();
        
        // Create a PdfGrid
        PdfGrid pdfGrid = new PdfGrid();
        
        // Create a DataTable with sample product data
        DataTable dataTable = new DataTable();
        dataTable.Columns.Add("ProductID");
        dataTable.Columns.Add("ProductName");
        dataTable.Columns.Add("Quantity");
        dataTable.Columns.Add("UnitPrice");
        dataTable.Columns.Add("Discount");
        dataTable.Columns.Add("Price");
        
        // Add sample rows
        dataTable.Rows.Add(new object[] { "CA-1098", "Queso Cabrales", "12", "14", "1", "167" });
        dataTable.Rows.Add(new object[] { "LJ-0192-M", "Singaporean Hokkien Fried Mee", "10", "20", "3", "197" });
        dataTable.Rows.Add(new object[] { "SO-B909-M", "Mozzarella di Giovanni", "15", "65", "10", "956" });
        
        // Assign data source to grid
        pdfGrid.DataSource = dataTable;
        
        // Draw grid to the page at position (10, 10)
        pdfGrid.Draw(page, new PointF(10, 10));
        
        // Save the document
        doc.Save("Output.pdf");
    }
    
    Console.WriteLine("PDF with table created successfully as Output.pdf");
}
catch (Exception ex)
{
    Console.WriteLine($"Error creating PDF: {ex.Message}");
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Grid
Imports System.Data
Imports System

Try
    Using doc As New PdfDocument()
        ' Add a page
        Dim page As PdfPage = doc.Pages.Add()
        
        ' Create a PdfGrid
        Dim pdfGrid As New PdfGrid()
        
        ' Create a DataTable with sample product data
        Dim dataTable As New DataTable()
        dataTable.Columns.Add("ProductID")
        dataTable.Columns.Add("ProductName")
        dataTable.Columns.Add("Quantity")
        dataTable.Columns.Add("UnitPrice")
        dataTable.Columns.Add("Discount")
        dataTable.Columns.Add("Price")
        
        ' Add sample rows
        dataTable.Rows.Add(New Object() {"CA-1098", "Queso Cabrales", "12", "14", "1", "167"})
        dataTable.Rows.Add(New Object() {"LJ-0192-M", "Singaporean Hokkien Fried Mee", "10", "20", "3", "197"})
        dataTable.Rows.Add(New Object() {"SO-B909-M", "Mozzarella di Giovanni", "15", "65", "10", "956"})
        
        ' Assign data source to grid
        pdfGrid.DataSource = dataTable
        
        ' Draw grid to the page at position (10, 10)
        pdfGrid.Draw(page, New PointF(10, 10))
        
        ' Save the document
        doc.Save("Output.pdf")
    End Using
    
    Console.WriteLine("PDF with table created successfully as Output.pdf")
Catch ex As Exception
    Console.WriteLine($"Error creating PDF: {ex.Message}")
End Try

{% endhighlight %}

{% endtabs %}

### Expected Output

The code above creates a PDF file named `Output.pdf` containing:
- Single page with a formatted table
- 6 columns: ProductID, ProductName, Quantity, UnitPrice, Discount, Price
- 3 rows of product data
- Table positioned 10 points from left and top margins
- File size: approximately 5-10 KB

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/.NET/Create_PDF_with_table_NET).

## Creating a simple PDF document with basic elements

Include the following necessary namespaces to create a simple PDF document with basic elements.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;
using System.Data;
using System.Xml.Linq;

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;
using System.Data;
using System.Xml.Linq;

{% endhighlight %}
{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Data
Imports System.Xml.Linq
Imports Syncfusion.Drawing
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Grid 

{% endhighlight %}

{% endtabs %}

The [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) object represents an entire PDF document that is being created. The following code example shows how to generate a PDF document and add a [PdfPage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPage.html) to it along with the [PdfPageSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageSettings.html).

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Adds page settings
document.PageSettings.Orientation = PdfPageOrientation.Landscape;
document.PageSettings.Margins.All = 50;
//Adds a page to the document
PdfPage page = document.Pages.Add();
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Creates a new PDF document
PdfDocument document = new PdfDocument();
//Adds page settings
document.PageSettings.Orientation = PdfPageOrientation.Landscape;
document.PageSettings.Margins.All = 50;
//Adds a page to the document
PdfPage page = document.Pages.Add();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Creates a new PDF document
Dim document As New PdfDocument()
'Adds page settings
document.PageSettings.Orientation = PdfPageOrientation.Landscape
document.PageSettings.Margins.All = 50
'Adds a page to the document
Dim page As PdfPage = document.Pages.Add()

{% endhighlight %}

{% endtabs %}

1. Essential<sup>&reg;</sup> PDF has APIs similar to the .NET GDI plus which helps to draw elements to the PDF page just like 2D drawing in .NET. 
2. Unlike System.Drawing APIs all the units are measured in point instead of pixel. 
3. In PDF, all the elements are placed in absolute positions and has the possibility for content overlapping if misplaced. 
4. Essential<sup>&reg;</sup> PDF provides the rendered bounds for each and every elements added, through [PdfLayoutResult](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfLayoutResult.html) objects. This can be used to add successive elements and prevent content overlap.

The following code example explains how to add an image from disk to a PDF document, by providing the rectangle coordinates. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Create PDF graphics for the page.
PdfGraphics g = page.Graphics;
//Loads the image from disk
FileStream imageStream = new FileStream("AdventureCycle.jpg", FileMode.Open, FileAccess.Read);
PdfImage image = PdfImage.FromStream(imageStream);
//Draws the image to the PDF page
page.Graphics.DrawImage(image, new RectangleF(176, 0, 390, 130));

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Create PDF graphics for the page.
PdfGraphics g = page.Graphics;
//Loads the image from disk
PdfImage image = PdfImage.FromFile("AdventureCycle.jpg");
//Draws the image to the PDF page
page.Graphics.DrawImage(image, new RectangleF(176, 0, 390, 130));

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Create PDF graphics for the page.
PdfGraphics g = page.Graphics
'Loads the image from disk 
Dim image As PdfImage = PdfImage.FromFile("AdventureCycle.jpg")
'Draws the image to the PDF page
page.Graphics.DrawImage(image, New RectangleF(176, 0, 390, 130))

{% endhighlight %}

{% endtabs %}

The following methods can be used to add text to a PDF document:

1. [DrawString()](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html)
2. [PdfTextElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTextElement.html) class.

The ```PdfTextElement``` provides the layout result of the added text by using the location of the next element that decides to prevent content overlapping. This is not available in the ```DrawString``` method. 

The following code example adds the necessary text such as address, invoice number and date to create a basic invoice application. 
{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

PdfLayoutResult result = new PdfLayoutResult(page, new RectangleF(0, 0, page.Graphics.ClientSize.Width / 2, 95));
PdfFont subHeadingFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 14);
//Draw Rectangle place on location
g.DrawRectangle(new PdfSolidBrush(new PdfColor(126, 151, 173)), new RectangleF(0, result.Bounds.Bottom + 40, g.ClientSize.Width, 30));
element = new PdfTextElement("INVOICE " + 10248, subHeadingFont);
element.Brush = PdfBrushes.White;
result = element.Draw(page, new PointF(10, result.Bounds.Bottom + 48));
string currentDate = "DATE " + DateTime.Now.ToString("MM/dd/yyyy");
SizeF textSize = subHeadingFont.MeasureString(currentDate);
g.DrawString(currentDate, subHeadingFont, element.Brush, new PointF(g.ClientSize.Width - textSize.Width - 10, result.Bounds.Y));

//Draw Bill header
element = new PdfTextElement("BILL TO ", new PdfStandardFont(PdfFontFamily.TimesRoman, 10));
element.Brush = new PdfSolidBrush(new PdfColor(126, 155, 203));
result = element.Draw(page, new PointF(10, result.Bounds.Bottom + 25));
//Draw Bill address
element = new PdfTextElement(string.Format("{0}, {1}, {2}", "Vin et alcohol Chevalier", "\n59 rue deb l'Abbaye ", " Reims, France"), new PdfStandardFont(PdfFontFamily.TimesRoman, 10));
element.Brush = new PdfSolidBrush(new PdfColor(89, 89, 93));
result = element.Draw(page, new RectangleF(10, result.Bounds.Bottom + 3, g.ClientSize.Width / 2, 100));
//Draw Bill line
g.DrawLine(new PdfPen(new PdfColor(126, 151, 173), 0.70f), new PointF(0, result.Bounds.Bottom + 3), new PointF(g.ClientSize.Width, result.Bounds.Bottom + 3));

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

PdfLayoutResult result = new PdfLayoutResult(page, new RectangleF(0, 0, page.Graphics.ClientSize.Width / 2, 95));
PdfFont subHeadingFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 14);
//Draw Rectangle place on location
g.DrawRectangle(new PdfSolidBrush(new PdfColor(126, 151, 173)), new RectangleF(0, result.Bounds.Bottom + 40, g.ClientSize.Width, 30));
element = new PdfTextElement("INVOICE " + 10248, subHeadingFont);
element.Brush = PdfBrushes.White;
result = element.Draw(page, new PointF(10, result.Bounds.Bottom + 48));
string currentDate = "DATE " + DateTime.Now.ToString("MM/dd/yyyy");
SizeF textSize = subHeadingFont.MeasureString(currentDate);
g.DrawString(currentDate, subHeadingFont, element.Brush, new PointF(g.ClientSize.Width - textSize.Width - 10, result.Bounds.Y));

//Draw Bill header
element = new PdfTextElement("BILL TO ", new PdfStandardFont(PdfFontFamily.TimesRoman, 10));
element.Brush = new PdfSolidBrush(new PdfColor(126, 155, 203));
result = element.Draw(page, new PointF(10, result.Bounds.Bottom + 25));
//Draw Bill address
element = new PdfTextElement(string.Format("{0}, {1}, {2}", "Vin et alcohol Chevalier", "\n59 rue deb l'Abbaye ", " Reims, France"), new PdfStandardFont(PdfFontFamily.TimesRoman, 10));
element.Brush = new PdfSolidBrush(new PdfColor(89, 89, 93));
result = element.Draw(page, new RectangleF(10, result.Bounds.Bottom + 3, g.ClientSize.Width / 2, 100));
//Draw Bill line
g.DrawLine(new PdfPen(new PdfColor(126, 151, 173), 0.70f), new PointF(0, result.Bounds.Bottom + 3), new PointF(g.ClientSize.Width, result.Bounds.Bottom + 3));

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Dim subHeadingFont As PdfFont = New PdfStandardFont(PdfFontFamily.TimesRoman, 14)
'Draw Rectangle place on location
g.DrawRectangle(New PdfSolidBrush(New PdfColor(126, 151, 173)), New RectangleF(0, (result.Bounds.Bottom + 40), g.ClientSize.Width, 30))
element = New PdfTextElement(("INVOICE " + 10248), subHeadingFont)
element.Brush = PdfBrushes.White
result = element.Draw(page, New PointF(10, (result.Bounds.Bottom + 48)))
Dim currentDate As String = ("DATE " + DateTime.Now.ToString("MM/dd/yyyy"))
Dim textSize As SizeF = subHeadingFont.MeasureString(currentDate)
g.DrawString(currentDate, subHeadingFont, element.Brush, New PointF((g.ClientSize.Width - (textSize.Width - 10)), result.Bounds.Y))
'Draw Bill header
element = New PdfTextElement("BILL TO ", New PdfStandardFont(PdfFontFamily.TimesRoman, 10))
element.Brush = New PdfSolidBrush(New PdfColor(126, 155, 203))
result = element.Draw(page, New PointF(10, (result.Bounds.Bottom + 25)))
'Draw Bill address
element = New PdfTextElement(String.Format("{0}, {1}, {2}", "Vin et alcohol Chevalier", ""& vbLf&"59 rue deb l'Abbaye ", " Reims, France"), New PdfStandardFont(PdfFontFamily.TimesRoman, 10))
element.Brush = New PdfSolidBrush(New PdfColor(89, 89, 93))
result = element.Draw(page, New RectangleF(10, (result.Bounds.Bottom + 3), (g.ClientSize.Width / 2), 100))
'Draw Bill line
g.DrawLine(New PdfPen(New PdfColor(126, 151, 173), 0.7!), New PointF(0, (result.Bounds.Bottom + 3)), New PointF(g.ClientSize.Width, (result.Bounds.Bottom + 3)))

{% endhighlight %}

{% endtabs %}

Essential<sup>&reg;</sup> PDF provides two types of table models. The difference between both the table models can be referred from the link 
[Difference between PdfLightTable and PdfGrid](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-tables#difference-between-pdflighttable-and-pdfgrid)

Since the invoice document requires only simple cell customizations, the given code example explains how to create a simple invoice table by using [PdfGrid](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Grid.PdfGrid.html).

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

//Creates the datasource for the table
DataTable invoiceDetails = GetProductDetailsAsDataTable();
//Creates a PDF grid
PdfGrid grid = new PdfGrid();
//Adds the data source
grid.DataSource = invoiceDetails;
//Creates the grid cell styles
PdfGridCellStyle cellStyle = new PdfGridCellStyle();
cellStyle.Borders.All = PdfPens.White;
PdfGridRow header = grid.Headers[0];
//Creates the header style
PdfGridCellStyle headerStyle = new PdfGridCellStyle();
headerStyle.Borders.All = new PdfPen(new PdfColor(126, 151, 173));
headerStyle.BackgroundBrush = new PdfSolidBrush(new PdfColor(126, 151, 173));
headerStyle.TextBrush = PdfBrushes.White;
headerStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 14f, PdfFontStyle.Regular);

//Adds cell customizations
for (int i = 0; i < header.Cells.Count; i++)
{
if (i == 0 || i == 1)
header.Cells[i].StringFormat = new PdfStringFormat(PdfTextAlignment.Left, PdfVerticalAlignment.Middle);
else
header.Cells[i].StringFormat = new PdfStringFormat(PdfTextAlignment.Right, PdfVerticalAlignment.Middle);
}

//Applies the header style
header.ApplyStyle(headerStyle);
cellStyle.Borders.Bottom = new PdfPen(new PdfColor(217, 217, 217), 0.70f);
cellStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 12f);
cellStyle.TextBrush = new PdfSolidBrush(new PdfColor(131, 130, 136));
//Creates the layout format for grid
PdfGridLayoutFormat layoutFormat = new PdfGridLayoutFormat();
// Creates layout format settings to allow the table pagination
layoutFormat.Layout = PdfLayoutType.Paginate;
//Draws the grid to the PDF page.
PdfGridLayoutResult gridResult = grid.Draw(page, new RectangleF(new PointF(0, result.Bounds.Bottom + 40), new SizeF(g.ClientSize.Width, g.ClientSize.Height - 100)), layoutFormat);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Creates the datasource for the table
DataTable invoiceDetails = GetProductDetailsAsDataTable();
//Creates a PDF grid
PdfGrid grid = new PdfGrid();
//Adds the data source
grid.DataSource = invoiceDetails;
//Creates the grid cell styles
PdfGridCellStyle cellStyle = new PdfGridCellStyle();
cellStyle.Borders.All = PdfPens.White;
PdfGridRow header = grid.Headers[0];
//Creates the header style
PdfGridCellStyle headerStyle = new PdfGridCellStyle();
headerStyle.Borders.All = new PdfPen(new PdfColor(126, 151, 173));
headerStyle.BackgroundBrush = new PdfSolidBrush(new PdfColor(126, 151, 173));
headerStyle.TextBrush = PdfBrushes.White;
headerStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 14f, PdfFontStyle.Regular);

//Adds cell customizations
for (int i = 0; i < header.Cells.Count; i++)
{
if (i == 0 || i == 1)
header.Cells[i].StringFormat = new PdfStringFormat(PdfTextAlignment.Left, PdfVerticalAlignment.Middle);
else
header.Cells[i].StringFormat = new PdfStringFormat(PdfTextAlignment.Right, PdfVerticalAlignment.Middle);
}

//Applies the header style
header.ApplyStyle(headerStyle);
cellStyle.Borders.Bottom = new PdfPen(new PdfColor(217, 217, 217), 0.70f);
cellStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 12f);
cellStyle.TextBrush = new PdfSolidBrush(new PdfColor(131, 130, 136));
//Creates the layout format for grid
PdfGridLayoutFormat layoutFormat = new PdfGridLayoutFormat();
// Creates layout format settings to allow the table pagination
layoutFormat.Layout = PdfLayoutType.Paginate;
//Draws the grid to the PDF page.
PdfGridLayoutResult gridResult = grid.Draw(page, new RectangleF(new PointF(0, result.Bounds.Bottom + 40), new SizeF(g.ClientSize.Width, g.ClientSize.Height - 100)), layoutFormat);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Creates the datasource for the table
Dim invoiceDetails As DataTable = GetProductDetails(Integer.Parse(invoiceNumber))
'Create a PDF grid
Dim grid As New PdfGrid()
'Adds the data source
grid.DataSource = invoiceDetails
'creates the grid cell styles
Dim cellStyle As New PdfGridCellStyle()
cellStyle.Borders.All = PdfPens.White
Dim header As PdfGridRow = grid.Headers(0)
'Creates the header style
Dim headerStyle As New PdfGridCellStyle()
headerStyle.Borders.All = New PdfPen(New PdfColor(126, 151, 173))
headerStyle.BackgroundBrush = New PdfSolidBrush(New PdfColor(126, 151, 173))
headerStyle.TextBrush = PdfBrushes.White
headerStyle.Font = New PdfStandardFont(PdfFontFamily.TimesRoman, 14.0F, PdfFontStyle.Regular)
'Adds cell customizations
For i As Integer = 0 To header.Cells.Count - 1
If i = 0 OrElse i = 1 Then
header.Cells(i).StringFormat = New PdfStringFormat(PdfTextAlignment.Left, PdfVerticalAlignment.Middle)
Else
header.Cells(i).StringFormat = New PdfStringFormat(PdfTextAlignment.Right, PdfVerticalAlignment.Middle)
End If
Next
'Applies the header style
header.ApplyStyle(headerStyle)
cellStyle.Borders.Bottom = New PdfPen(New PdfColor(217, 217, 217), 0.7F)
cellStyle.Font = New PdfStandardFont(PdfFontFamily.TimesRoman, 12.0F)
cellStyle.TextBrush = New PdfSolidBrush(New PdfColor(131, 130, 136))
'Creates the layout format for grid
Dim layoutFormat As New PdfGridLayoutFormat()
'Layout format settings to allow the table pagination
layoutFormat.Layout = PdfLayoutType.Paginate
'Draws the grid to the PDF page.
Dim gridResult As PdfGridLayoutResult = grid.Draw(page, New RectangleF(New PointF(0, result.Bounds.Bottom + 40), New SizeF(g.ClientSize.Width, g.ClientSize.Height - 100)), layoutFormat)

{% endhighlight %}

{% endtabs %}

The following code example shows how to save the invoice document to disk and dispose the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) object.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

//Saves and closes the document.
document.Save("Sample.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Saves and closes the document.
document.Save("Sample.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Saves and closes the document.
document.Save("Sample.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/.NET/Create_PDF_with_basic_elements_NET).

The following screenshot shows the invoice PDF document created by using .NET PDF library.
![PDF invoice output](GettingStarted_images/pdf-invoice.png)

## Filling Interactive Forms (AcroForms)

Interactive forms, also called AcroForms, are collections of fields for gathering information interactively from users. A [PDF document](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) or [existing PDF document](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) can contain any number of fields across multiple pages, creating a globally interactive form spanning the entire document.

Syncfusion PDF library allows you to [create and manipulate form fields](https://www.syncfusion.com/document-processing/pdf-framework/net/pdf-library/pdf-form-fields) in PDF documents using the [PdfForm](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfForm.html) class.

**Required Namespaces:**
- `Syncfusion.Pdf`
- `Syncfusion.Pdf.Parsing`
- `Syncfusion.Pdf.Interactive`

The following guide shows how to fill a sample PDF form programmatically.

![Sample PDF form](GettingStarted_images/fill-pdf-forms.png)

Syncfusion PDF library allows you to fill form fields using the [PdfLoadedField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedField.html) class. You can access form fields either by field name or field index.

**Note**: You will need an existing PDF form (such as JobApplication.pdf). Refer to [PDF Form Fields Documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-forms) to learn how to create PDF forms, or download a sample form from the Syncfusion examples repository.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf.Parsing;
using System;

try
{
    string formPath = "JobApplication.pdf";
    
    // Verify the form file exists
    if (!System.IO.File.Exists(formPath))
    {
        throw new System.IO.FileNotFoundException($"Form PDF not found: {formPath}");
    }
    
    // Load the PDF form
    using (PdfLoadedDocument loadedDocument = new PdfLoadedDocument(formPath))
    {
        // Access the form
        PdfLoadedForm form = loadedDocument.Form;
        
        if (form == null || form.Fields.Count == 0)
        {
            throw new InvalidOperationException("PDF document does not contain form fields");
        }
        
        // Fill textbox field by index
        if (form.Fields.Count > 0)
        {
            (form.Fields[0] as PdfLoadedTextBoxField).Text = "John";
        }
        
        // Fill textbox fields by name
        (form.Fields["LastName"] as PdfLoadedTextBoxField).Text = "Doe";
        (form.Fields["Address"] as PdfLoadedTextBoxField).Text = "John Doe\n123 Main St\nAnytown, USA";
        
        // Set radio button selection
        PdfLoadedRadioButtonItemCollection radioButtonCollection = (form.Fields["Gender"] as PdfLoadedRadioButtonListField)?.Items;
        if (radioButtonCollection != null && radioButtonCollection.Count > 0)
        {
            radioButtonCollection[0].Checked = true;
        }
        
        // Check checkbox fields
        (form.Fields["Business"] as PdfLoadedCheckBoxField).Checked = true;
        (form.Fields["Retiree"] as PdfLoadedCheckBoxField).Checked = true;
        
        // Save the filled form
        loadedDocument.Save("FilledForm.pdf");
    }
    
    Console.WriteLine("Form filled successfully as FilledForm.pdf");
}
catch (Exception ex)
{
    Console.WriteLine($"Error filling form: {ex.Message}");
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using System;

try
{
    string formPath = "JobApplication.pdf";
    
    // Verify the form file exists
    if (!System.IO.File.Exists(formPath))
    {
        throw new System.IO.FileNotFoundException($"Form PDF not found: {formPath}");
    }
    
    // Load the PDF form
    using (PdfLoadedDocument loadedDocument = new PdfLoadedDocument(formPath))
    {
        // Access the form
        PdfLoadedForm form = loadedDocument.Form;
        
        if (form == null || form.Fields.Count == 0)
        {
            throw new InvalidOperationException("PDF document does not contain form fields");
        }
        
        // Fill textbox field by index
        if (form.Fields.Count > 0)
        {
            (form.Fields[0] as PdfLoadedTextBoxField).Text = "John";
        }
        
        // Fill textbox fields by name
        (form.Fields["LastName"] as PdfLoadedTextBoxField).Text = "Doe";
        (form.Fields["Address"] as PdfLoadedTextBoxField).Text = "John Doe\n123 Main St\nAnytown, USA";
        
        // Set radio button selection
        PdfLoadedRadioButtonItemCollection radioButtonCollection = (form.Fields["Gender"] as PdfLoadedRadioButtonListField)?.Items;
        if (radioButtonCollection != null && radioButtonCollection.Count > 0)
        {
            radioButtonCollection[0].Checked = true;
        }
        
        // Check checkbox fields
        (form.Fields["Business"] as PdfLoadedCheckBoxField).Checked = true;
        (form.Fields["Retiree"] as PdfLoadedCheckBoxField).Checked = true;
        
        // Save the filled form
        loadedDocument.Save("FilledForm.pdf");
    }
    
    Console.WriteLine("Form filled successfully as FilledForm.pdf");
}
catch (Exception ex)
{
    Console.WriteLine($"Error filling form: {ex.Message}");
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports System

Try
    Dim formPath As String = "JobApplication.pdf"
    
    ' Verify the form file exists
    If Not System.IO.File.Exists(formPath) Then
        Throw New System.IO.FileNotFoundException($"Form PDF not found: {formPath}")
    End If
    
    ' Load the PDF form
    Using loadedDocument As New PdfLoadedDocument(formPath)
        ' Access the form
        Dim form As PdfLoadedForm = loadedDocument.Form
        
        If form Is Nothing OrElse form.Fields.Count = 0 Then
            Throw New InvalidOperationException("PDF document does not contain form fields")
        End If
        
        ' Fill textbox field by index
        If form.Fields.Count > 0 Then
            TryCast(form.Fields(0), PdfLoadedTextBoxField).Text = "John"
        End If
        
        ' Fill textbox fields by name
        TryCast(form.Fields("LastName"), PdfLoadedTextBoxField).Text = "Doe"
        TryCast(form.Fields("Address"), PdfLoadedTextBoxField).Text = "John Doe" & vbLf & "123 Main St" & vbLf & "Anytown, USA"
        
        ' Set radio button selection
        Dim radioButtonCollection As PdfLoadedRadioButtonItemCollection = TryCast(form.Fields("Gender"), PdfLoadedRadioButtonListField)?.Items
        If radioButtonCollection IsNot Nothing AndAlso radioButtonCollection.Count > 0 Then
            radioButtonCollection(0).Checked = True
        End If
        
        ' Check checkbox fields
        TryCast(form.Fields("Business"), PdfLoadedCheckBoxField).Checked = True
        TryCast(form.Fields("Retiree"), PdfLoadedCheckBoxField).Checked = True
        
        ' Save the filled form
        loadedDocument.Save("FilledForm.pdf")
    End Using
    
    Console.WriteLine("Form filled successfully as FilledForm.pdf")
Catch ex As Exception
    Console.WriteLine($"Error filling form: {ex.Message}")
End Try

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/.NET/Filling_forms_NET).

### Expected Output

The code above creates a PDF file named `FilledForm.pdf` containing:
- All form fields populated with provided values
- First Name: "John"
- Last Name: "Doe"
- Address: Multi-line text
- Gender: "Male" radio button selected
- Checkboxes: "Business" and "Retiree" checked
- File size: approximately 20-50 KB depending on original form complexity

The filled form displayed in Adobe Reader application:

![Filled PDF form output](GettingStarted_images/filled-form-in-pdf.jpeg)

## Converting HTML Files to PDF

The [HTML-to-PDF converter](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/converting-html-to-pdf) is a .NET library for converting webpages, SVG, MHTML, and HTML files to PDF using C#. It uses the popular rendering engine [Blink](https://en.wikipedia.org/wiki/Blink_(browser_engine)) (Google Chrome), preserving all graphics, images, text, fonts, and layout from the original HTML document or webpage.

The HTML-to-PDF converter works seamlessly across multiple platforms: [Azure App Services](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/convert-html-to-pdf-in-azure-app-service-linux), [Azure Functions](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/convert-html-to-pdf-in-azure-functions-linux), [AWS Lambda](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/convert-html-to-pdf-in-aws-lambda), [Docker](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/docker), [WinForms](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/windows-forms), [WPF](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/wpf), [Blazor](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/blazor), [ASP.NET MVC](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/aspnet-mvc), [ASP.NET Core](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/net-core) with [Windows](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/windows-forms), [Linux](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/linux), and [macOS](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/mac).

**Install HTML to PDF .NET library to your project**

To include the HTML to PDF .NET library into your application, please refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation. 

**Convert website URL to PDF**  

To convert website URL or local HTML file to PDF document using [Convert](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html#Syncfusion_HtmlConverter_HtmlToPdfConverter_Convert_System_String_) method in [HtmlToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html) class, refer to the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.HtmlConverter;
using Syncfusion.Pdf;

//Initialize HTML to PDF converter.
HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter();
//Convert URL to PDF document. 
PdfDocument document = htmlConverter.Convert("https://www.google.com");
//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.HtmlConverter;
using Syncfusion.Pdf;

//Initialize HTML to PDF converter.
HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter();
//Convert URL to PDF document. 
PdfDocument document = htmlConverter.Convert("https://www.google.com");
//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.HtmlConverter
Imports Syncfusion.Pdf

'Initialize HTML to PDF converter.
Dim htmlConverter As HtmlToPdfConverter = New HtmlToPdfConverter()
'Convert URL to PDF document. 
Dim document As PdfDocument = htmlConverter.Convert("https://www.google.com")
'Save and close the PDF document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/.NET/HTML_to_PDF_NET).

**HTML String to PDF** 

The HTML to PDF converter provides support for converting HTML string to PDF. While converting HTML string to PDF, converter provides option to specify the base URL.

<b>baseURL:</b> Path of the resources (images, style sheets, scripts.,) used in the input HTML string.

For the following HTML string, the baseURL will be the path of the syncfusion_logo.gif image. For example, if the above image is in "C:/Temp/ HTMLFiles/syncfusion_logo.gif" location, then the baseURL will be as follows.
*baseURL: C:/Temp/HTMLFiles/*

To convert the HTML string to PDF using [Convert](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html#Syncfusion_HtmlConverter_HtmlToPdfConverter_Convert_System_String_System_String_) method in [HtmlToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html) class, refer to the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Drawing;
using Syncfusion.HtmlConverter;

//Initialize HTML to PDF converter.
HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter();
//HTML string and Base URL.
string htmlText = "<html><body><img src=\"syncfusion_logo.gif\" alt=\"Syncfusion_logo\" width=\"200\" height=\"70\"><p> Hello World</p></body></html>";
string baseUrl = @"C:/Temp/HTMLFiles/";
//Convert URL to PDF.
PdfDocument document = htmlConverter.Convert(htmlText, baseUrl);
//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Drawing;
using Syncfusion.HtmlConverter;

//Initialize HTML to PDF converter.
HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter();
//HTML string and Base URL.
string htmlText = "<html><body><img src=\"syncfusion_logo.gif\" alt=\"Syncfusion_logo\" width=\"200\" height=\"70\"><p> Hello World</p></body></html>";
string baseUrl = @"C:/Temp/HTMLFiles/";
//Convert URL to PDF.
PdfDocument document = htmlConverter.Convert(htmlText, baseUrl);
//Save and close the PDF document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Drawing
Imports Syncfusion.HtmlConverter

'Initialize HTML to PDF converter.
Dim htmlConverter As HtmlToPdfConverter = New HtmlToPdfConverter()
'HTML string and Base URL.
Dim htmlText As String = "<html><body><img src=""syncfusion_logo.gif"" alt=""Syncfusion_logo"" width=""200"" height=""70""><p> Hello World</p></body></html>"
Dim baseUrl As String = "C:/Temp/HTMLFiles/"
'Convert URL to PDF document. 
Dim document As PdfDocument = htmlConverter.Convert(htmlText, baseUrl)
'Save and close the PDF document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/.NET/HTML_string_to_PDF_NET).

## Merging PDF Documents

Syncfusion PDF library supports [merging multiple PDF documents](https://www.syncfusion.com/document-processing/pdf-framework/net/pdf-library/merge-pdf) from disk and stream using the [Merge](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html#Syncfusion_Pdf_PdfDocumentBase_Merge_Syncfusion_Pdf_PdfDocumentBase_Syncfusion_Pdf_Parsing_PdfLoadedDocument_) method of the [PdfDocumentBase](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentBase.html) class. You can merge multiple PDF documents from disk by specifying the paths in a string array.

### Merging PDF Documents from Disk

The following code example shows how to merge multiple PDF files from disk:

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf;
using System;

try
{
    // Create a destination document to hold merged content
    using (PdfDocument finalDoc = new PdfDocument())
    {
        // Create string array with source file paths (IMPORTANT: separate by comma in array)
        string[] sourceFiles = { "file1.pdf", "file2.pdf", "file3.pdf" };
        
        // Verify all files exist before merging
        foreach (string file in sourceFiles)
        {
            if (!System.IO.File.Exists(file))
            {
                throw new System.IO.FileNotFoundException($"Source PDF not found: {file}");
            }
        }
        
        // Merge all PDF documents into the final document
        PdfDocument.Merge(finalDoc, sourceFiles);
        
        // Save the merged document
        finalDoc.Save("MergedOutput.pdf");
    }
    
    Console.WriteLine("PDFs merged successfully as MergedOutput.pdf");
}
catch (Exception ex)
{
    Console.WriteLine($"Error merging PDFs: {ex.Message}");
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using System;

try
{
    // Create a destination document to hold merged content
    using (PdfDocument finalDoc = new PdfDocument())
    {
        // Create string array with source file paths (IMPORTANT: separate by comma in array)
        string[] sourceFiles = { "file1.pdf", "file2.pdf", "file3.pdf" };
        
        // Verify all files exist before merging
        foreach (string file in sourceFiles)
        {
            if (!System.IO.File.Exists(file))
            {
                throw new System.IO.FileNotFoundException($"Source PDF not found: {file}");
            }
        }
        
        // Merge all PDF documents into the final document
        PdfDocument.Merge(finalDoc, sourceFiles);
        
        // Save the merged document
        finalDoc.Save("MergedOutput.pdf");
    }
    
    Console.WriteLine("PDFs merged successfully as MergedOutput.pdf");
}
catch (Exception ex)
{
    Console.WriteLine($"Error merging PDFs: {ex.Message}");
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports System

Try
    ' Create a destination document to hold merged content
    Using finalDoc As New PdfDocument()
        ' Create string array with source file paths (IMPORTANT: separate by comma in array)
        Dim sourceFiles As String() = {"file1.pdf", "file2.pdf", "file3.pdf"}
        
        ' Verify all files exist before merging
        For Each file In sourceFiles
            If Not System.IO.File.Exists(file) Then
                Throw New System.IO.FileNotFoundException($"Source PDF not found: {file}")
            End If
        Next
        
        ' Merge all PDF documents into the final document
        PdfDocument.Merge(finalDoc, sourceFiles)
        
        ' Save the merged document
        finalDoc.Save("MergedOutput.pdf")
    End Using
    
    Console.WriteLine("PDFs merged successfully as MergedOutput.pdf")
Catch ex As Exception
    Console.WriteLine($"Error merging PDFs: {ex.Message}")
End Try

{% endhighlight %}
{% endtabs %}

> **Important**: When creating a string array, use `{ "file1.pdf", "file2.pdf" }` (separate files with commas). Do NOT use `{ "file1.pdf, file2.pdf" }` (which creates a single string with comma).

### Merging PDF Document Streams

The following code example shows how to merge PDF documents from streams:

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using System;

try
{
    // Create a destination document
    using (PdfDocument finalDoc = new PdfDocument())
    {
        // Open source PDF files as streams
        using (Stream stream1 = System.IO.File.OpenRead("file1.pdf"))
        using (Stream stream2 = System.IO.File.OpenRead("file2.pdf"))
        {
            // Load PDF documents from streams
            using (PdfLoadedDocument sourceDoc1 = new PdfLoadedDocument(stream1))
            using (PdfLoadedDocument sourceDoc2 = new PdfLoadedDocument(stream2))
            {
                // Merge source documents into final document
                finalDoc.Merge(sourceDoc1);
                finalDoc.Merge(sourceDoc2);
            }
        }
        
        // Save the merged document
        finalDoc.Save("MergedOutput.pdf");
    }
    
    Console.WriteLine("PDFs merged from streams successfully as MergedOutput.pdf");
}
catch (Exception ex)
{
    Console.WriteLine($"Error merging PDFs: {ex.Message}");
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using System;

try
{
    // Create a destination document
    using (PdfDocument finalDoc = new PdfDocument())
    {
        // Open source PDF files as streams
        using (Stream stream1 = System.IO.File.OpenRead("file1.pdf"))
        using (Stream stream2 = System.IO.File.OpenRead("file2.pdf"))
        {
            // Load PDF documents from streams
            using (PdfLoadedDocument sourceDoc1 = new PdfLoadedDocument(stream1))
            using (PdfLoadedDocument sourceDoc2 = new PdfLoadedDocument(stream2))
            {
                // Merge source documents into final document
                finalDoc.Merge(sourceDoc1);
                finalDoc.Merge(sourceDoc2);
            }
        }
        
        // Save the merged document
        finalDoc.Save("MergedOutput.pdf");
    }
    
    Console.WriteLine("PDFs merged from streams successfully as MergedOutput.pdf");
}
catch (Exception ex)
{
    Console.WriteLine($"Error merging PDFs: {ex.Message}");
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Parsing
Imports System

Try
    ' Create a destination document
    Using finalDoc As New PdfDocument()
        ' Open source PDF files as streams
        Using stream1 = System.IO.File.OpenRead("file1.pdf")
        Using stream2 = System.IO.File.OpenRead("file2.pdf")
            ' Load PDF documents from streams
            Using sourceDoc1 As New PdfLoadedDocument(stream1)
            Using sourceDoc2 As New PdfLoadedDocument(stream2)
                ' Merge source documents into final document
                finalDoc.Merge(sourceDoc1)
                finalDoc.Merge(sourceDoc2)
            End Using
            End Using
        End Using
        End Using
        
        ' Save the merged document
        finalDoc.Save("MergedOutput.pdf")
    End Using
    
    Console.WriteLine("PDFs merged from streams successfully as MergedOutput.pdf")
Catch ex As Exception
    Console.WriteLine($"Error merging PDFs: {ex.Message}")
End Try

{% endhighlight %}
{% endtabs %}
Stream[] streams = { stream1, stream2 };
//Merges PDFDocument.
PdfDocumentBase.Merge(finalDoc, streams);
//Saves the document
finalDoc.Save("sample.pdf");
//Closes the document
finalDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;

//Creates the destination document
PdfDocument finalDoc = new PdfDocument();
Stream stream1 = File.OpenRead("file1.pdf");
Stream stream2 = File.OpenRead("file2.pdf");
//Creates a PDF stream for merging.
Stream[] streams = { stream1, stream2 };
//Merges PDFDocument.
PdfDocumentBase.Merge(finalDoc, streams);
//Saves the document
finalDoc.Save("sample.pdf");
//Closes the document
finalDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf

'Creates the destination document
Dim finalDoc As New PdfDocument()
Dim stream1 As Stream = File.OpenRead("file1.pdf")
Dim stream2 As Stream = File.OpenRead("file2.pdf")
'Creates a PDF stream for merging.
Dim streams As Stream() = {stream1, stream2}
'Merges PDFDocument.
PdfDocumentBase.Merge(finalDoc, streams)
'Saves the document
finalDoc.Save("sample.pdf")
'Closes the document
finalDoc.Close(True)

{% endhighlight %}

{% endtabs %}

N> You can also explore our [.NET PDF library](https://document.syncfusion.com/demos/pdf/default#/tailwind) demo that shows how to create and modify PDF files from C# with just five lines of code.
N> Looking for the full .NET PDF Library overview, features, pricing, and documentation? Visit the [.NET PDF Library](https://www.syncfusion.com/document-sdk/net-pdf-library) page.
