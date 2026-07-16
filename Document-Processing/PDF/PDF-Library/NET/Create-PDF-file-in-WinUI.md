---
title: Create a PDF file in WinUI | Syncfusion
description: Learn how to create a PDF file in WinUI with easy steps using Syncfusion .NET Core PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
---

# Create a PDF File in WinUI

The [WinUI PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, work with forms, and secure PDF files.

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Visual Studio | 2022 or later |
| Windows App SDK | 1.0+ |
| .NET | 6.0+ or .NET Framework 4.5+ |
| WinUI | 3.0+ |
| Syncfusion PDF NuGet Package | [Syncfusion.Pdf.NET](https://www.nuget.org/packages/Syncfusion.Pdf.NET/) (latest) |

To use the WinUI 3 project templates, install the Windows App SDK extension for Visual Studio. For more details, refer to [Windows App SDK Setup](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/set-up-your-development-environment).


## Creating a PDF document in WinUI

### Step 1: Create a new WinUI Desktop application

Create a new C# WinUI Desktop app by selecting **Blank App, Packaged with WAP (WinUI 3 in Desktop)** from the template in Visual Studio.

![WinUI sample creation](WinUI_Images/Create_Desktop_Project.png)

Enter your project name and click **Create**.

![Set WinUI sample project name](WinUI_Images/Desktop_Configure.png)

Set the Target version to **Windows 10, version 2004 (build 19041)** and the Minimum version to **Windows 10, version 1809 (build 17763)**, then click **OK**.

![Set target version](WinUI_Images/Target_Version.png)

### Step 2: Install the Syncfusion.Pdf.NET NuGet package

Install the [Syncfusion.Pdf.NET](https://www.nuget.org/packages/Syncfusion.Pdf.NET/) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).

![WinUI NuGet package](WinUI_Images/Install_Nuget.png)

You can also install via Package Manager Console:

```powershell
Install-Package Syncfusion.Pdf.NET
```

### Step 3: Register Syncfusion license

Starting with v16.2.0.x, you must register a Syncfusion license key to use the library. Add the license key in your **App.xaml.cs** file:

```csharp
using Syncfusion.Licensing;

public partial class App : Application
{
    public App()
    {
        this.InitializeComponent();
        
        // Register Syncfusion license
        SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
    }
}
```

Refer to [Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview) for license registration details.

### Step 4: Create the UI with a button

Add a button to the **MainWindow.xaml** as shown below:

{% tabs %}
{% highlight XAML %}

<Window
    x:Class="CreatePdfDemoSample.MainWindow"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:local="using:CreatePdfDemoSample"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    mc:Ignorable="d">
    <StackPanel Orientation="Horizontal" HorizontalAlignment="Center" VerticalAlignment="Center">
        <Button x:Name="button" Click="OnGenerateButtonClick">Create PDF</Button>
    </StackPanel>
</Window>

{% endhighlight %}
{% endtabs %}

### Step 5: Add required namespaces

Include the following namespaces in the **MainWindow.xaml.cs** file:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using System;
using System.IO;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;

{% endhighlight %}

{% endtabs %}

### Step 6: Implement basic PDF generation

Add the following code to the **MainWindow.xaml.cs** code-behind to create the `OnGenerateButtonClick` event handler. This generates a simple PDF document using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. The [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) method of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) draws text on the page. The `PointF(0, 0)` parameter specifies the starting position (top-left corner) in points (1/72 inch).

{% tabs %}
{% highlight c# tabtitle="C#" %}

private void OnGenerateButtonClick(object sender, RoutedEventArgs e)
{
    //Create a new PDF document.
    PdfDocument document = new PdfDocument();
    //Set page orientation and margin. 
    document.PageSettings.Orientation = PdfPageOrientation.Landscape;
    document.PageSettings.Margins.All = 50;
    //Add a page to the document.
    PdfPage page = document.Pages.Add();
    //Create PDF graphics for the page.
    PdfGraphics graphics = page.Graphics;

    //Create a text element with the text and font.
    PdfTextElement element = new PdfTextElement("Northwind Traders\n67, rue des Cinquante Otages,\nElgin,\nUnites States.");
    element.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 12);
    element.Brush = new PdfSolidBrush(new PdfColor(89, 89, 93));
    PdfLayoutResult result = element.Draw(page, new RectangleF(0, 0, page.Graphics.ClientSize.Width / 2, 200));

    //Draw the image to a PDF page with the specified size
    Stream imgStream = typeof(MainWindow).GetTypeInfo().Assembly.GetManifestResourceStream("CreatePdfDemoSample.Assets.logo.jpg");
    PdfImage img = new PdfBitmap(imgStream);
    graphics.DrawImage(img, new RectangleF(graphics.ClientSize.Width - 200, result.Bounds.Y, 190, 45));
    PdfFont subHeadingFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 14);
    graphics.DrawRectangle(new PdfSolidBrush(new PdfColor(126, 151, 173)), new RectangleF(0, result.Bounds.Bottom + 40, graphics.ClientSize.Width, 30));

    //Create a text element with the text and font.
    element = new PdfTextElement("INVOICE", subHeadingFont);
    element.Brush = PdfBrushes.White;
    result = element.Draw(page, new PointF(10, result.Bounds.Bottom + 48));
    string currentDate = "DATE " + DateTime.Now.ToString("MM/dd/yyyy");
    SizeF textSize = subHeadingFont.MeasureString(currentDate);
    graphics.DrawString(currentDate, subHeadingFont, element.Brush, new PointF(graphics.ClientSize.Width - textSize.Width - 10, result.Bounds.Y));

    //Create a text element and draw it to a PDF page.
    element = new PdfTextElement("BILL TO ", new PdfStandardFont(PdfFontFamily.TimesRoman, 10));
    element.Brush = new PdfSolidBrush(new PdfColor(126, 155, 203));
    result = element.Draw(page, new PointF(10, result.Bounds.Bottom + 25));
    graphics.DrawLine(new PdfPen(new PdfColor(126, 151, 173), 0.70f), new PointF(0, result.Bounds.Bottom + 3), new PointF(graphics.ClientSize.Width, result.Bounds.Bottom + 3));

    //Get products list to create invoice.
    IEnumerable<CustOrders> products = Orders.GetProducts();

    List<CustOrders> list = new List<CustOrders>();
    foreach (CustOrders cust in products)
    {
        list.Add(cust);
    }
    var reducedList = list.Select(f => new { f.ProductID, f.ProductName, f.Quantity, f.UnitPrice, f.Discount, f.Price }).ToList();

    //Get the shipping address details. 
    IEnumerable<ShipDetails> shipDetails = Orders.GetShipDetails();
    GetShipDetails(shipDetails);

    //Create a text element and draw it to a PDF page.
    element = new PdfTextElement(shipName, new PdfStandardFont(PdfFontFamily.TimesRoman, 10));
    element.Brush = new PdfSolidBrush(new PdfColor(89, 89, 93));
    result = element.Draw(page, new RectangleF(10, result.Bounds.Bottom + 5, graphics.ClientSize.Width / 2, 100));

    //Create a text element and draw it to a PDF page.
    element = new PdfTextElement(string.Format("{0}, {1}, {2}", address, shipCity, shipCountry), new PdfStandardFont(PdfFontFamily.TimesRoman, 10));
    element.Brush = new PdfSolidBrush(new PdfColor(89, 89, 93));
    result = element.Draw(page, new RectangleF(10, result.Bounds.Bottom + 3, graphics.ClientSize.Width / 2, 100));

    //Create a PDF grid with the product details.
    PdfGrid grid = new PdfGrid();
    grid.DataSource = reducedList;

    //Initialize PdfGridCellStyle and set the border color.
    PdfGridCellStyle cellStyle = new PdfGridCellStyle();
    cellStyle.Borders.All = PdfPens.White;
    cellStyle.Borders.Bottom = new PdfPen(new PdfColor(217, 217, 217), 0.70f);
    cellStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 12f);
    cellStyle.TextBrush = new PdfSolidBrush(new PdfColor(131, 130, 136));

    //Initialize PdfGridCellStyle and set the header style.
    PdfGridCellStyle headerStyle = new PdfGridCellStyle();
    headerStyle.Borders.All = new PdfPen(new PdfColor(126, 151, 173));
    headerStyle.BackgroundBrush = new PdfSolidBrush(new PdfColor(126, 151, 173));
    headerStyle.TextBrush = PdfBrushes.White;
    headerStyle.Font = new PdfStandardFont(PdfFontFamily.TimesRoman, 14f, PdfFontStyle.Regular);

    PdfGridRow header = grid.Headers[0];
    for (int i = 0; i < header.Cells.Count; i++)
    {
        if (i == 0 || i == 1)
            header.Cells[i].StringFormat = new PdfStringFormat(PdfTextAlignment.Left, PdfVerticalAlignment.Middle);
        else
            header.Cells[i].StringFormat = new PdfStringFormat(PdfTextAlignment.Right, PdfVerticalAlignment.Middle);
    }
    header.ApplyStyle(headerStyle);

    foreach (PdfGridRow row in grid.Rows)
    {
        row.ApplyStyle(cellStyle);
        for (int i = 0; i < row.Cells.Count; i++)
        {
            //Create and customize the string formats
            PdfGridCell cell = row.Cells[i];
            if (i == 1)
                cell.StringFormat = new PdfStringFormat(PdfTextAlignment.Left, PdfVerticalAlignment.Middle);
            else if (i == 0)
                cell.StringFormat = new PdfStringFormat(PdfTextAlignment.Center, PdfVerticalAlignment.Middle);
            else
                cell.StringFormat = new PdfStringFormat(PdfTextAlignment.Right, PdfVerticalAlignment.Middle);

            if (i > 2)
            {
                float val = float.MinValue;
                float.TryParse(cell.Value.ToString(), out val);
                cell.Value = '$' + val.ToString("0.00");
            }
        }
    }

    grid.Columns[0].Width = 100;
    grid.Columns[1].Width = 200;

    //Set properties to paginate the grid.
    PdfGridLayoutFormat layoutFormat = new PdfGridLayoutFormat();
    layoutFormat.Layout = PdfLayoutType.Paginate;

    //Draw a grid on the page of the PDF document.
    PdfGridLayoutResult gridResult = grid.Draw(page, new RectangleF(new PointF(0, result.Bounds.Bottom + 40), new SizeF(graphics.ClientSize.Width, graphics.ClientSize.Height - 100)), layoutFormat);
    float pos = 0.0f;
    for (int i = 0; i < grid.Columns.Count - 1; i++)
        pos += grid.Columns[i].Width;

    PdfFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 14f);

    GetTotalPrice(products);

    gridResult.Page.Graphics.DrawString("Total Due", font, new PdfSolidBrush(new PdfColor(126, 151, 173)), new RectangleF(new PointF(pos, gridResult.Bounds.Bottom + 20), new SizeF(grid.Columns[3].Width - pos, 20)), new PdfStringFormat(PdfTextAlignment.Right));
    gridResult.Page.Graphics.DrawString("Thank you for your business!", new PdfStandardFont(PdfFontFamily.TimesRoman, 12), new PdfSolidBrush(new PdfColor(89, 89, 93)), new PointF(pos - 55, gridResult.Bounds.Bottom + 60));
    pos += grid.Columns[4].Width;
    gridResult.Page.Graphics.DrawString('$' + string.Format("{0:N2}", total), font, new PdfSolidBrush(new PdfColor(131, 130, 136)), new RectangleF(new PointF(pos, gridResult.Bounds.Bottom + 20), new SizeF(grid.Columns[4].Width - pos, 20)), new PdfStringFormat(PdfTextAlignment.Right));

    string filePath = Path.GetFullPath("Sample.pdf");

    //Save the PDF document to stream.
    using (FileStream outputStream = new FileStream(filePath, FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite))
    {
        document.Save(outputStream);
        document.Close();
    }
}

{% endhighlight %}
{% endtabs %}

### Step 7: Build and run the application

1. Build the WinUI application (Build > Build Solution)
2. Run the application (Debug > Start Debugging or F5)
3. Click the **Generate PDF** button
4. The PDF will be created in your Documents folder and the success dialog will display the file location

**Expected output:** A file named `Output.pdf` containing "Hello World!!!" text.

![Output PDF image](WinUI_Images/GettingStartedOutput.png)

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "The type or namespace 'Syncfusion' could not be found" | Verify Syncfusion.Pdf.NET NuGet package is installed; restore NuGet packages (Tools > Manage NuGet Packages for Solution) |
| "License key not registered" error at runtime | Register license in App.xaml.cs using SyncfusionLicenseProvider.RegisterLicense() before creating any PDF objects |
| "Access to the path is denied" when saving | Verify Documents folder exists and has write permissions; check that app has file system access capability |
| "File not found" after generation | Verify the Documents folder exists; check that the path is accessible; use Environment.SpecialFolder for reliable path handling |
| "ContentDialog not initialized" error | Ensure XamlRoot is set on dialog; verify dialog is created after UI is loaded |
| Application crashes when button is clicked | Add try-catch error handling; verify all required using statements are included; check that license is registered |
| PDF doesn't open after creation | Install a PDF reader (Windows Reader, Adobe Reader, etc.); verify file was created successfully before attempting to open |
| "PointF not found" error | Ensure `using Syncfusion.Drawing;` is included in namespaces |

## Next Steps

- **Download [Complete Working Sample](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/WinUI)** — Reference implementation with error handling and best practices
- **Try [Online Demo](https://document.syncfusion.com/demos/pdf/default#/tailwind)** — Interactive examples and feature showcase
- **Explore [PDF Library Features](https://www.syncfusion.com/document-sdk/net-pdf-library)** — Comprehensive API reference including tables, images, forms, and security features
- **View [API Documentation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html)** — Full class and method reference for PdfDocument and related classes 