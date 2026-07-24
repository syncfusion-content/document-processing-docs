---
title: Convert an Excel document to PDF in ASP.NET | Syncfusion
description: Convert an Excel document to PDF in ASP.NET using Sycfusion .NET Excel Library without Microsoft Excel or interop dependencies.
platform: document-processing
control: XlsIO
documentation: UG
---

# Convert an Excel document to PDF in ASP.NET

Syncfusion<sup>&reg;</sup> XlsIO is a [.NET Excel Library](https://www.syncfusion.com/document-processing/excel-framework/net/excel-library) used to create, read, edit, and convert Excel documents programmatically, without Microsoft Excel or interop dependencies.

## Steps to convert an Excel document to PDF in C#

Step 1: Create a new ASP.NET Web Application Project.

![Create an ASP.NET Web App project in Visual Studio](ASP-NET_images/ASP-NET_images_img4.png)

Step 2: Name the project.

![Name the project](ASP-NET_images/ASP-NET_images_img5.png)

Step 3: Select the **Web Forms** template (or **Empty** and check **Web Forms** under "Add folders and core references for"). Do not choose the **Empty** template without Web Forms, as it does not include the Web Forms configuration required for this sample.

![Select the Web Forms template](ASP-NET_images/ASP-NET_images_img6.png)

Step 4: Install the [Syncfusion.ExcelToPdfConverter.AspNet](https://www.nuget.org/packages/Syncfusion.ExcelToPdfConverter.AspNet) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/). This package transitively pulls in the required `Syncfusion.XlsIO.Base` and `Syncfusion.Pdf.Base` assemblies.

![Install Syncfusion.ExcelToPdfConverter.AspNet NuGet Package](ASP-NET_images/ASP-NET_images_img7.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from the trial setup or from the NuGet feed, you must also add the `Syncfusion.Licensing` reference and register a license key. Refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn how to register the Syncfusion<sup>&reg;</sup> license key. The simplest approach is to add the following call in `Global.asax` `Application_Start`:
> ```csharp
> Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
> ```

Step 5: Add a new Web Form to your project. Right-click the project, choose **Add → New Item**, select **Web Form**, and name it **MainPage**.

Step 6: Add a new button to **MainPage.aspx** as shown below.
{% tabs %}  
{% highlight c# tabtitle="C#" %}
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MainPage.aspx.cs" Inherits="Convert_Excel_to_PDF.MainPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Button ID="Button1" runat="server" Text="Convert Excel to PDF" OnClick="OnButtonClicked" />
        </div>
    </form>
</body>
</html>
{% endhighlight %}
{% endtabs %}

Step 7: Add the following namespaces in **MainPage.aspx.cs**.
{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.XlsIO;
using Syncfusion.Pdf;
using Syncfusion.ExcelToPdfConverter;
{% endhighlight %}
{% endtabs %}

Step 8: Add the following code in the **OnButtonClicked** handler in **MainPage.aspx.cs** to convert an Excel document to PDF. Place a `Sample.xlsx` file at the project root (or under `App_Data`) so the relative path resolves.
{% tabs %}
{% highlight c# tabtitle="C#" %}
protected void OnButtonClicked(object sender, EventArgs e)
{
  using (ExcelEngine excelEngine = new ExcelEngine())
  {
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Open the existing Excel workbook. Adjust the path as required.
    IWorkbook workbook = application.Workbooks.Open(Server.MapPath("~/Sample.xlsx"));

    //Initialize the Excel-to-PDF converter
    ExcelToPdfConverter converter = new ExcelToPdfConverter(workbook);

    //Convert the Excel document to a PDF document
    PdfDocument pdfDocument = converter.Convert();

    //Save the converted PDF document directly to the HTTP response
    pdfDocument.Save("Sample.pdf", HttpContext.Current.Response, HttpReadType.Save);

    //Close the workbook and the PDF document to release resources
    workbook.Close();
    pdfDocument.Close();

    //Finalize the response so no further page processing occurs
    HttpContext.Current.Response.End();
  }
}
{% endhighlight %}
{% endtabs %}

N> For additional control over page size, orientation, and font embedding, pass an `ExcelToPdfConverterSettings` instance when creating the `ExcelToPdfConverter` and call the `Convert(ExcelToPdfConverterSettings)` overload. See the [Excel-to-PDF conversion settings](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/excel-to-pdf-converter-settings) for details.

A complete working example of how to convert an Excel document to PDF in ASP.NET is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/ASP.NET%20WebForms/Convert%20Excel%20to%20PDF).

By executing the program, you will get the **PDF document** as shown below.

![Output File](ASP-NET_images/ASP-NET_images_img8.png)

Click [here](https://www.syncfusion.com/document-processing/excel-framework/net) to explore the rich set of Syncfusion<sup>&reg;</sup> Excel library (XlsIO) features.

An online sample link to [convert an Excel document to PDF](https://document.syncfusion.com/demos/excel/exceltopdf#/tailwind) in ASP.NET MVC.