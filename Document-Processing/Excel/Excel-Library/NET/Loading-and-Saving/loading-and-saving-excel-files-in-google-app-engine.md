---
title: Loading and Saving Excel in Google App Engine | Syncfusion
description: Explains how to load and save an Excel files in Google App Engine using .NET Core Excel (XlsIO) library without Microsoft Excel or interop dependencies.
platform: document-processing
control: XlsIO
documentation: UG
---

# Loading and Saving Excel files in Google App Engine

Syncfusion<sup>&reg;</sup> XlsIO is a [.NET Core Excel library](https://www.syncfusion.com/document-processing/excel-framework/net-core) used to create, read, edit and convert Excel documents programmatically without **Microsoft Excel** or interop dependencies. Using this library, you can **load and save an Excel document in Google App Engine**.

## Set up App Engine

Step 1: Open the **Google Cloud Console** and click the **Activate Cloud Shell** button.
![Activate Cloud Shell](GCP_Images/GAE_Img1.png)

Step 2: Click the **Cloud Shell Editor** button to view the **Workspace**.
![Open Editor in Cloud Shell](GCP_Images/GAE_Img2.png)

Step 3: Open **Cloud Shell Terminal**, run the following **command** to confirm authentication.

{% tabs %}
{% highlight c# tabtitle="CLI" %}

gcloud auth list

{% endhighlight %}
{% endtabs %}

![Authentication for App Engine](GCP_Images/GAE_Img3.png)

Step 4: Click the **Authorize** button.
![Click Authorize button](GCP_Images/GAE_Img4.png)

## Create an application for App Engine

Step 1: Open Visual Studio and select the ASP.NET Core Web app (Model-View-Controller) template.
![Create ASP.NET Core Web application in Visual Studio](GCP_Images/GAE_Img5.png)

Step 2: Configure your new project according to your requirements.
![Create ASP.NET Core Web application in Visual Studio](GCP_Images/GAE_Img6.png)

Step 3: Click the **Create** button.
![Create ASP.NET Core Web application in Visual Studio](GCP_Images/GAE_Img7.png)

Step 4: Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org).

![Install Syncfusion.XlsIO.Net.Core Nuget Package](GCP_Images/GAE_Img8.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 5: Include the following namespaces in the **HomeController.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.XlsIO;

{% endhighlight %}
{% endtabs %}

Step 6: A default action method named Index will be present in HomeController.cs. Right click on Index method and select **Go To View** where you will be directed to its associated view page **Index.cshtml**.

Step 7: Add a new button in the Index.cshtml as shown below.

{% tabs %}
{% highlight c# tabtitle="C#" %}

@{
    Html.BeginForm("LoadAndSaveDocument", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Load and Save Document" style="width:230px;height:27px" />
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}
{% endtabs %}

Step 8: Add a new action method **LoadAndSaveDocument** in HomeController.cs and include the below code snippet to **load and save an existing Excel document**.

{% tabs %}
{% highlight c# tabtitle="C#" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Load an existing Excel document
    IWorkbook workbook = application.Workbooks.Open("Data/InputTemplate.xlsx");

    //Access first worksheet from the workbook.
    IWorksheet worksheet = workbook.Worksheets[0];

    //Set Text in cell A3.
    worksheet.Range["A3"].Text = "Hello World";

    //Save the Excel to MemoryStream 
    MemoryStream outputStream = new MemoryStream();
    workbook.SaveAs(outputStream);

    //Set the position
    outputStream.Position = 0;

    //Download the Excel document in the browser.
    return File(outputStream, "application/msexcel", "Sample.xlsx");
}
{% endhighlight %}
{% endtabs %}

## Move application to App Engine

Step 1: Open the **Cloud Shell editor**.
![Cloud Shell Editor](GCP_Images/GAE_Img9.png)

Step 2: Drag and drop the sample from your local machine to **Workspace**.
![Open the Home Workspace](GCP_Images/GAE_Img10.png)

N> If you have your sample application in your local machine, drag and drop it into the Workspace. If you created the sample using the Cloud Shell terminal command, it will be available in the Workspace.

Step 3: Open the Cloud Shell Terminal and run the following **command** to view the files and directories within your **current Workspace**.

{% tabs %}
{% highlight c# tabtitle="CLI" %}

ls

{% endhighlight %}
{% endtabs %}

![View the files and directories](GCP_Images/GAE_Img11.png)

Step 4: Run the following **command** to navigate which sample you want run.

{% tabs %}
{% highlight c# tabtitle="CLI" %}

cd LoadingandSaving

{% endhighlight %}
{% endtabs %}

![Navigate which sample you want run](GCP_Images/GAE_Img12.png)

Step 5: To ensure that the sample is working correctly, please run the application using the following command.

{% tabs %}
{% highlight c# tabtitle="CLI" %}

dotnet run --urls=http://localhost:8080

{% endhighlight %}
{% endtabs %}

![Run the application using command](GCP_Images/GAE_Img13.png)

Step 6: Verify that the application is running properly by accessing the **Web View** -> **Preview on port 8080**.
![Verify the application is running properly](GCP_Images/GAE_Img14.png)

Step 7: Now you can see the sample output on the preview page.
![Sample output in browser](GCP_Images/GAE_Img15.png)

Step 8: Close the preview page and return to the terminal then press **Ctrl+C** for which will typically stop the process.
![Press Ctrl+C in Cloud Shell Terminal](GCP_Images/GAE_Img16.png)

## Publish the application

Step 1: Run the following command in **Cloud Shell Terminal** to publish the application.

{% tabs %}
{% highlight c# tabtitle="CLI" %}

dotnet publish -c Release

{% endhighlight %}
{% endtabs %}

![Publish the application](GCP_Images/GAE_Img17.png)

Step 2: Run the following command in **Cloud Shell Terminal** to navigate to the publish folder.
{% tabs %}
{% highlight c# tabtitle="CLI" %}

cd bin/Release/net8.0/publish/

{% endhighlight %}
{% endtabs %}

![Navigate to publish folder](GCP_Images/GAE_Img18.png)

## Configure app.yaml and docker file

Step 1: Add the app.yaml file to the publish folder with the following contents.

{% tabs %}
{% highlight c# tabtitle="CLI" %}

cat <<EOT >> app.yaml
env: flex
runtime: custom   
EOT

{% endhighlight %}
{% endtabs %}

![Add required files to publish folder](GCP_Images/GAE_Img19.png)

Step 2: Add the Docker file to the publish folder with the following contents.

{% tabs %}
{% highlight c# tabtitle="CLI" %}

cat <<EOT >> Dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:8.0
RUN apt-get update -y && apt-get install libfontconfig -y
ADD / /app
EXPOSE 8080
ENV ASPNETCORE_URLS=http://*:8080
WORKDIR /app
ENTRYPOINT [ "dotnet", "LoadingandSaving.dll"]
EOT

{% endhighlight %}
{% endtabs %}

![Add required files to publish folder](GCP_Images/GAE_Img20.png)

Step 3: You can ensure **Docker** and **app.yaml** files are added in **Workspace**.
![Add required files to publish folder](GCP_Images/GAE_Img21.png)

## Deploy to App Engine

Step 1: To deploy the application to the App Engine, run the following command in Cloud Shell Terminal. Afterwards, retrieve the **URL** from the Cloud Shell Terminal.

{% tabs %}
{% highlight c# tabtitle="CLI" %}

gcloud app deploy --version v0

{% endhighlight %}
{% endtabs %}

![Add required files to publish folder](GCP_Images/GAE_Img22.png)

Step 2: Open the **URL** to access the application, which has been successfully deployed.
![Add required files to publish folder](GCP_Images/GAE_Img23.png)

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Loading%20and%20Saving/Google%20Cloud%20Platform/Google%20App%20Engine/LoadingandSaving).  

By executing the program, you will get the **Excel document** as follows. The output will be saved in **bin** folder.

![Load and Save Excel document in Google App Engine](GCP_Images/GAE_Img24.png)

Click [here](https://www.syncfusion.com/document-processing/excel-framework/net-core) to explore the rich set of Syncfusion<sup>&reg;</sup> Excel library (XlsIO) features.