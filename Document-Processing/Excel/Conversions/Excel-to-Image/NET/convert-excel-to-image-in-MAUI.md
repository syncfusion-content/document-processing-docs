---
title: Convert an Excel document to Image in .NET MAUI | Syncfusion
description: Convert an Excel document to Image in .NET MAUI using .NET MAUI Excel library (XlsIO) without Microsoft Excel or interop dependencies.
platform: document-processing
control: XlsIO
documentation: UG
---

# Convert Excel document to Image in .NET MAUI

Syncfusion<sup>&reg;</sup> XlsIO is a [.NET MAUI Excel library](https://www.syncfusion.com/document-processing/excel-framework/maui/excel-library) used to create, read, edit and **convert Excel documents** programmatically without **Microsoft Excel** or interop dependencies. Using this library, you can **convert an Excel document to Image in .NET MAUI**.

## Prerequisites

{% tabcontents %}

{% tabcontent Visual Studio %}

To create .NET Multi-platform App UI (.NET MAUI) apps, you need the latest versions of Visual Studio 2022 and .NET 8 or later. For more details, refer [here](https://learn.microsoft.com/en-us/dotnet/maui/get-started/installation?view=net-maui-7.0&tabs=vswin).

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

To create .NET Multi-platform App UI (.NET MAUI) apps using Visual Studio Code, you need the latest versions of the .NET 8 SDK and additional tools configured for .NET MAUI development. For more details, refer [here](https://learn.microsoft.com/en-us/dotnet/maui/get-started/installation?view=net-maui-7.0&tabs=vswin).

{% endtabcontent %}

{% endtabcontents %}

## Steps to convert Excel document to Image in .NET MAUI

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new C# .NET MAUI application project.

![Create a .NET MAUI application in visual studio](MAUI_images\MAUI_images_img9.png)

Step 2: Name the project and click **Next** button.

![Name the project](MAUI_images\MAUI_images_img10.png)

Step 3: Install the [Syncfusion.XlsIORenderer.Net](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.NET) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.XlsIORenderer.Net NuGet Package](MAUI_images\MAUI_images_img11.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering a Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 4: Add a new button to the **MainPage.xaml** as shown below.
{% tabs %}
{% highlight c# tabtitle="C#" %}
<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="ConvertExcelToImage.MainPage">
    <ScrollView>
        <VerticalStackLayout
         Padding="30,0"
         Spacing="25">
            <Image
             Source="dotnet_bot.png"
             HeightRequest="185"
             Aspect="AspectFit"
             SemanticProperties.Description="dot net bot in a race car number eight" />

            <Label
             Text="Hello, World!"
             Style="{StaticResource Headline}"
             SemanticProperties.HeadingLevel="Level1" />

            <Label
             Text="Welcome to &#10;.NET Multi-platform App UI"
             Style="{StaticResource SubHeadline}"
             SemanticProperties.HeadingLevel="Level2"
             SemanticProperties.Description="Welcome to dot net Multi platform App U I" />

            <Button
             x:Name="CounterBtn"
             Text="Convert Excel to Image" 
             SemanticProperties.Hint="Counts the number of times you click"
             Clicked="convertExceltoImage_Click"
             HorizontalOptions="Fill" />
        </VerticalStackLayout>
    </ScrollView>
</ContentPage>
{% endhighlight %}
{% endtabs %}

Step 5: Include the following namespaces in the **MainPage.xaml.cs** file.
{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.XlsIO;
using Syncfusion.XlsIORenderer;
{% endhighlight %}
{% endtabs %}

Step 6: Add a new action method **convertExceltoImage_Click** in MainPage.xaml.cs and include the below code snippet to **convert an Excel document to Image**.
{% tabs %}
{% highlight c# tabtitle="C#" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    Syncfusion.XlsIO.IApplication application = excelEngine.Excel;

    Assembly executingAssembly = typeof(App).GetTypeInfo().Assembly;
    using (Stream inputStream = executingAssembly.GetManifestResourceStream("ConvertExcelToImage.InputTemplate.xlsx"))
    {
        IWorkbook workbook = application.Workbooks.Open(inputStream);
        IWorksheet worksheet = workbook.Worksheets[0];

        //Initialize XlsIO renderer.
        application.XlsIORenderer = new XlsIORenderer();

        //Create the MemoryStream to save the image.      
        MemoryStream imageStream = new MemoryStream();

        //Save the converted image to MemoryStream.
        worksheet.ConvertToImage(worksheet.UsedRange, imageStream);
        imageStream.Position = 0;

        //save and Launch the Image 
        SaveService saveService = new();
        saveService.SaveAndView("ExcelToImage.Jpeg", "application/jpeg", imageStream);
    }
}
{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Step 1: Create a new C# .NET MAUI application project using Create .NET Project option.

![Create a .NET MAUI application in visual studio](MAUI_images\MAUI_images_img12.png)

Step 2: Name the project and create the project.

![Name the project](MAUI_images\MAUI_images_img13.png)

Alternatively, create a .NET MAUI application using the following command in the terminal (<kbd>Ctrl</kbd>+<kbd>`</kbd>):

```
dotnet new maui -o ConvertExcelToImage
cd ConvertExcelToImage
```

Step 3:  To **convert an Excel document to Image in .NET MAUI app**,run the following command to  install [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core) package.

```
dotnet add package Syncfusion.XlsIORenderer.Net.Core
```

![Install Syncfusion.XlsIORenderer.Net NuGet Package](MAUI_images\MAUI_images_img14.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering a Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 4: Add a new button to the **MainPage.xaml** as shown below.
{% tabs %}
{% highlight c# tabtitle="C#" %}

<?xml version="1.0" encoding="utf-8" ?>
<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="ConvertExcelToImage.MainPage">
    <ScrollView>
        <VerticalStackLayout
         Padding="30,0"
         Spacing="25">
            <Image
             Source="dotnet_bot.png"
             HeightRequest="185"
             Aspect="AspectFit"
             SemanticProperties.Description="dot net bot in a race car number eight" />

            <Label
             Text="Hello, World!"
             Style="{StaticResource Headline}"
             SemanticProperties.HeadingLevel="Level1" />

            <Label
             Text="Welcome to &#10;.NET Multi-platform App UI"
             Style="{StaticResource SubHeadline}"
             SemanticProperties.HeadingLevel="Level2"
             SemanticProperties.Description="Welcome to dot net Multi platform App U I" />

            <Button
             x:Name="CounterBtn"
             Text="Convert Excel to Image" 
             SemanticProperties.Hint="Counts the number of times you click"
             Clicked="convertExceltoImage_Click"
             HorizontalOptions="Fill" />
        </VerticalStackLayout>
    </ScrollView>
</ContentPage>

{% endhighlight %}
{% endtabs %}

Step 5: Include the following namespaces in the **MainPage.xaml.cs** file.
{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.XlsIO;
using Syncfusion.XlsIORenderer;
{% endhighlight %}
{% endtabs %}

Step 6: Add a new action method **convertExceltoImage_Click** in MainPage.xaml.cs and include the below code snippet to **convert an Excel document to Image**.
{% tabs %}
{% highlight c# tabtitle="C#" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    Syncfusion.XlsIO.IApplication application = excelEngine.Excel;

    Assembly executingAssembly = typeof(App).GetTypeInfo().Assembly;
    using (Stream inputStream = executingAssembly.GetManifestResourceStream("ConvertExcelToImage.InputTemplate.xlsx"))
    {
        IWorkbook workbook = application.Workbooks.Open(inputStream);
        IWorksheet worksheet = workbook.Worksheets[0];

        //Initialize XlsIO renderer.
        application.XlsIORenderer = new XlsIORenderer();

        //Create the MemoryStream to save the image.      
        MemoryStream imageStream = new MemoryStream();

        //Save the converted image to MemoryStream.
        worksheet.ConvertToImage(worksheet.UsedRange, imageStream);
        imageStream.Position = 0;

        //save and Launch the Image 
        SaveService saveService = new();
        saveService.SaveAndView("ExcelToImage.Jpeg", "application/jpeg", imageStream);
    }
}
{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

## Helper files for .NET MAUI

Refer the below helper files and add them into the mentioned project. These helper files allow you to save the stream as a physical file and open the file for viewing.

<table>
  <tr>
  <td>
    <b>Folder Name</b>
  </td>
  <td>
    <b>File Name</b>
  </td>
  <td>
    <b>Summary</b>
  </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/.NET%20MAUI/ConvertExcelToImage" target="_blank">.NET MAUI Project</a>
    </td>
    <td>
      <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/blob/master/Getting%20Started/.NET%20MAUI/ConvertExcelToImage/ConvertExcelToImage/Services/SaveService.cs" target="_blank">SaveService.cs</a>
    </td>
    <td>
      Represents the base class for save operation.
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/.NET%20MAUI/ConvertExcelToImage/ConvertExcelToImage/Platforms/Windows" target="_blank">Windows</a>
    </td>
    <td>
      <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/blob/master/Getting%20Started/.NET%20MAUI/ConvertExcelToImage/ConvertExcelToImage/Platforms/Windows/SaveWindows.cs" target="_blank">SaveWindows.cs</a>
    </td>
    <td>
      Save implementation for Windows.
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/.NET%20MAUI/ConvertExcelToImage/ConvertExcelToImage/Platforms/Android" target="_blank">Android</a>
    </td>
    <td>
      <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/blob/master/Getting%20Started/.NET%20MAUI/ConvertExcelToImage/ConvertExcelToImage/Platforms/Android/SaveAndroid.cs" target="_blank">SaveAndroid.cs</a>
    </td>
    <td>
      Save implementation for Android device.
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/.NET%20MAUI/ConvertExcelToImage/ConvertExcelToImage/Platforms/MacCatalyst" target="_blank">Mac Catalyst</a>
    </td>
    <td>
      <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/blob/master/Getting%20Started/.NET%20MAUI/ConvertExcelToImage/ConvertExcelToImage/Platforms/MacCatalyst/SaveMac.cs" target="_blank">SaveMac.cs</a>
    </td>
    <td>
      Save implementation for Mac Catalyst device.
    </td>
  </tr>
  <tr>
    <td rowspan="2">
      <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/.NET%20MAUI/ConvertExcelToImage/ConvertExcelToImage/Platforms/iOS" target="_blank">iOS</a>
    </td>
    <td>
      <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/blob/master/Getting%20Started/.NET%20MAUI/ConvertExcelToImage/ConvertExcelToImage/Platforms/iOS/SaveIOS.cs" target="_blank">SaveIOS.cs</a>
    </td>
    <td>
      Save implementation for iOS device.
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/blob/master/Getting%20Started/.NET%20MAUI/ConvertExcelToImage/ConvertExcelToImage/Platforms/iOS/PreviewControllerDS.cs" target="_blank">PreviewControllerDS.cs</a><br>
      <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/blob/master/Getting%20Started/.NET%20MAUI/ConvertExcelToImage/ConvertExcelToImage/Platforms/iOS/QLPreviewItemFileSystem.cs" target="_blank">QLPreviewItemFileSystem.cs</a>
    </td>
    <td>
      Helper classes for viewing the <strong>Excel document</strong> on iOS device.
    </td>
  </tr>
</table>
         
A complete working example of how to convert an Excel document to Image in .NET MAUI is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/.NET%20MAUI/ConvertExcelToImage">this GitHub page</a>.

By executing the program, you will get the **Image** as follows.

![Output File](MAUI_images\MAUI_images_img15.png)

Click [here](https://www.syncfusion.com/document-processing/excel-framework/maui) to explore the rich set of Syncfusion<sup>&reg;</sup> Excel library (XlsIO) features.

An online sample link to [convert an Excel document to Image](https://ej2.syncfusion.com/aspnetcore/Excel/WorksheetToImage#/material3) in ASP.NET Core.