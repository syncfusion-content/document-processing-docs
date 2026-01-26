---
title: Convert an Excel document to Image in ASP.NET MVC | Syncfusion
description: Convert an Excel document to Image in ASP.NET MVC using Sycfusion .NET Excel library (XlsIO) without Microsoft Excel or interop dependencies.
platform: document-processing
control: XlsIO
documentation: UG
---

# Convert an Excel document to Image in ASP.NET MVC

Syncfusion<sup>&reg;</sup> XlsIO is a [.NET Excel library](https://www.syncfusion.com/document-processing/excel-framework/net/excel-library) used to create, read, edit and **convert Excel documents** programmatically without **Microsoft Excel** or interop dependencies. Using this library, you can **convert an Excel document to Image in ASP.NET MVC**.

## Steps to convert an Excel document to Image in ASP.NET MVC

Step 1: Create a new ASP.NET Web Application Project.

![Create a ASP.NET Web App project in visual studio](ASP-NET-MVC_images\ASP-NET-MVC_images_img9.png)

Step 2: Name the project, choose the framework and click **Create** button.

![Name the project and choose the framework version](ASP-NET-MVC_images\ASP-NET-MVC_images_img10.png)

Step 3: Select the MVC application.

![Select the MVC App](ASP-NET-MVC_images\ASP-NET-MVC_images_img11.png)

Step 4: Install the [Syncfusion.XlsIO.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.XlsIO.AspNet.Mvc5) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.XlsIO.AspNet.Mvc5 NuGet Package](ASP-NET-MVC_images\ASP-NET-MVC_images_img12.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your applications to use our components. 

Step 5: Add a new button in the **Index.cshtml** as shown below.
{% tabs %}  
{% highlight CSHTML %}
@{Html.BeginForm("ConvertExceltoImage", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Convert Excel to Image" style="width:150px;height:27px" />
        </div>
    }
    Html.EndForm();
}
{% endhighlight %}
{% endtabs %}

Step 6: Include the following namespaces in **HomeController.cs**.
{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.XlsIO;
{% endhighlight %}
{% endtabs %}

Step 7: Include the below code snippet in **HomeController.cs** to **convert an Excel document to Image**. 
{% tabs %}
{% highlight c# tabtitle="C#" %}
public void ConvertExcelToImage()
{
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
        IApplication application = excelEngine.Excel;
        application.DefaultVersion = ExcelVersion.Xlsx;
		IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
        IWorksheet worksheet = workbook.Worksheets[0];

        //Convert the Excel to Image
        Image image = worksheet.ConvertToImage(1, 1, 20, 4);

        //Save the image as jpeg
        ExportAsImage(image, "ExcelToImage.Jpeg", ImageFormat.Jpeg, HttpContext.ApplicationInstance.Response);
    }
}

protected void ExportAsImage(Image image, string fileName, ImageFormat imageFormat, HttpResponse response)
{
    if (ControllerContext == null)
        throw new ArgumentNullException("Context");
    string disposition = "content-disposition";
    response.AddHeader(disposition, "attachment; filename=" + fileName);
    if (imageFormat != ImageFormat.Emf)
        image.Save(Response.OutputStream, imageFormat);
    Response.End();
}
{% endhighlight %}
{% endtabs %}   

You can download a complete working sample from <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/ASP.NET%20MVC/Convert%20Excel%20to%20Image">GitHub</a>.

By executing the program, you will get the **image** as follows.

![Output File](ASP-NET-MVC_images\ASP-NET-MVC_images_img13.png)

Click [here](https://www.syncfusion.com/document-processing/excel-framework/net-core) to explore the rich set of Syncfusion<sup>&reg;</sup> Excel library (XlsIO) features.

An online sample link to [convert an Excel document to Image](https://ej2.syncfusion.com/aspnetcore/Excel/WorksheetToImage#/material3) in ASP.NET Core.