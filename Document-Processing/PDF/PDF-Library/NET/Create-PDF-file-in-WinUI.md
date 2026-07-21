---
title: Create or Generate PDF file in WinUI | Syncfusion
description: Learn how to create or generate a PDF file in WinUI with easy steps using Syncfusion .NET Core PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
---

# Create a PDF File in WinUI

The [WinUI PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) creates, reads, and edits PDF documents. It merges, splits, stamps, fills forms, and secures PDF files. You can use this library to create a PDF document in WinUI.

## Prerequisites

- **Windows 10 version 1809** (build 17763) or later.
- **Visual Studio 2022** (17.8 or later) with the **.NET desktop development** and **Windows App SDK** workloads installed.
- The **Windows App SDK** Visual Studio extension. For setup details, see [Set up your development environment for the Windows App SDK](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/set-up-your-development-environment).
- **Developer Mode** enabled in **Windows Settings > Privacy & security > For developers**. This is required to deploy and sideload WinUI packaged apps.
- A **Syncfusion<sup>&reg;</sup> license key** — register it in your application using `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")`. For details, see the [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview).
- The **[Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core)** NuGet package installed in the project.

## Step to create a PDF document in a WinUI desktop app

**Step 1:** In Visual Studio, create a new C# **WinUI Desktop** app. Select **Blank App, Packaged with WAP (WinUI 3 in Desktop)** from the template, and click **Next**.
![Create a WinUI desktop application in Visual Studio](WinUI_Images/Create_Desktop_Project.png)

**Step 2:** Enter the project name and click **Create**.
![Set the WinUI project name](WinUI_Images/Desktop_Configure.png)

**Step 3:** Set the Target version to **Windows 10, version 2004 (build 19041)** and the Minimum version to **Windows 10, version 1809 (build 17763)**, then click **OK**.
![Set the WinUI target version](WinUI_Images/Target_Version.png)

**Step 4:** Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) NuGet package from [NuGet.org](https://www.nuget.org/). Use the latest stable version compatible with your target framework. If your project also requires image rendering, add the `SkiaSharp.NativeAssets.Win32` package.
![Install the Syncfusion.Pdf.Net.Core NuGet package](WinUI_Images/Install_Nuget.png)

N> If you reference Syncfusion<sup>&reg;</sup> assemblies from the trial setup or the NuGet feed, you must add a reference to the `Syncfusion.Licensing` assembly and include a valid license key in your project. See the [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details on registering the license key.

**Step 5:** In `MainWindow.xaml`, add the following button.

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
        <Button x:Name="button" Click="createPdf_Click">Create PDF</Button>
    </StackPanel>
</Window>

{% endhighlight %}
{% endtabs %}

**Step 6:** Add the following `using` directives to `MainWindow.xaml.cs`. The `System.Reflection` directive is required for the `GetTypeInfo()` call used to load the embedded image.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;
using Syncfusion.Drawing;
using System.Reflection;
using System.Xml.Linq;

{% endhighlight %}

{% endtabs %}

**Step 7:** In `MainWindow.xaml.cs`, add a new handler named `createPdf_Click` (matching the button's `Click` attribute) and include the following code to generate a PDF document using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class.

The [PdfTextElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTextElement.html) adds text to a PDF document and returns layout results that help prevent content overlap. Load the image stream from the embedded resource and draw the image with the [DrawImage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawImage_Syncfusion_Pdf_Graphics_PdfImage_System_Single_System_Single_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) class. The [PdfGrid](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Grid.PdfGrid.html) creates a table from manually entered data or from an external data source.

N> The sample references helper types (`Orders`, `CustOrders`, `ShipDetails`, `GetShipDetails`, `GetTotalPrice`, and the `logo.jpg` embedded resource) that are provided in the [GitHub sample](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/WinUI). Copy the `Orders.cs` and `Assets/logo.jpg` files from the sample into your project, and add `logo.jpg` as an **Embedded Resource** (right-click the file in **Solution Explorer** > **Properties** > **Build Action** > **Embedded Resource**).

{% tabs %}
{% highlight c# tabtitle="C#" %}

private void CreatePdf_Click(object sender, RoutedEventArgs e)
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

A complete working example of creating a PDF document in a WinUI desktop app can be downloaded from the [direct-trac archive](https://www.syncfusion.com/downloads/support/directtrac/general/ze/CreatePdfDemoSample208256365) (or, preferably, from the [GitHub sample](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/WinUI)).

You can download a complete working sample from the [WinUI folder on GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/WinUI).

Running the program produces the following PDF document. The file is saved to the working directory as `Sample.pdf`.
![Output PDF document](WinUI_Images/GettingStartedOutput.png)

Explore the [Syncfusion<sup>&reg;</sup> PDF library features](https://www.syncfusion.com/document-sdk/net-pdf-library) to learn more about merging, splitting, securing, and stamping PDF files.

An online sample demonstrating how to [create a PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind) is also available.

## Troubleshooting

- **Watermark appears in the output PDF** — Your Syncfusion<sup>&reg;</sup> license key is not registered. Call `SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")` at application startup, before any Syncfusion API is called.
- **`GetManifestResourceStream` returns null** — The image file is not added as an **Embedded Resource** in the project. Right-click `Assets\logo.jpg` in **Solution Explorer**, choose **Properties**, and set **Build Action** to **Embedded Resource**.
- **`Syncfusion.Pdf.Net` package not found** — The package name was changed to `Syncfusion.Pdf.Net.Core` in newer releases. Search for `Syncfusion.Pdf.Net.Core` in the NuGet Package Manager and install the latest version.
- **Build error: `Microsoft.WindowsAppSDK` not found** — Install the Windows App SDK Visual Studio extension and the **Windows App SDK** workload, then add `<UseWinUI>true</UseWinUI>` to the project file.
- **`PdfDocument` is not disposed** — Wrap the `PdfDocument` in a `using` block (or call `document.Close(true)`) so the native buffers are flushed before the process exits. The sample uses `document.Close()` (without argument), which is acceptable but does not dispose unmanaged resources.
- **Deployment fails with "Developer Mode is not enabled"** — Enable Developer Mode in **Windows Settings > Privacy & security > For developers**, then redeploy.
- **`Orders.GetProducts()` or `GetShipDetails()` is undefined** — The helper classes are provided in the [GitHub sample](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/WinUI). Copy `Orders.cs` and the related types into your project.
- **PDF file is not opened after creation** — Call `Windows.System.Launcher.LaunchFileAsync(new Uri(filePath))` after `document.Save()` to open the file with the default PDF viewer.
- **`System.IO.Path` or `FileStream` not found** — Add `using System.IO;` to the top of `MainWindow.xaml.cs`.

## See also

- [Create a PDF File in UWP](create-pdf-file-in-uwp)
- [Create a PDF File in WPF](create-pdf-file-in-wpf)
- [Create a PDF File in Windows Forms](create-pdf-file-in-windows-forms)
- [Create a PDF File in ASP.NET Core](create-pdf-file-in-asp-net-core)
- [NuGet Packages Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required)
- [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required)
- [Syncfusion<sup>&reg;</sup> Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)
- [Open and read PDF files](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/open-pdf-files)
- [Merge PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/merge-documents)
- [Split PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/split-documents)
- [Working with PDF forms](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-forms)
- [Working with security and permissions](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-security)
- [Working with stamps and watermarks](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-watermarks)
- [Syncfusion<sup>&reg;</sup> PDF library — Demos](https://document.syncfusion.com/demos/pdf/default) 