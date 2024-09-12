---
title: Convert HTML to PDF in Azure Functions Linux| Syncfusion
description: Learn how to convert HTML to PDF in Azure Linux with easy steps using Syncfusion .NET HTML to PDF converter library.
platform: document-processing
control: PDF
documentation: UG
---

# Convert HTML to PDF in Azure Functions Linux

The Syncfusion [HTML to PDF converter](https://www.syncfusion.com/document-processing/pdf-framework/net/html-to-pdf) is a .NET Core library for converting webpages, SVG, MHTML, and HTML to PDF using C#. The result preserves all graphics, images, text, fonts, and the layout of the original HTML document or webpage. Using this library, you can convert an HTML to PDF using C# with the Blink rendering engine in Azure Functions Linux.

N> HTML to PDF converter is not supported with Azure App Service windows. We internally use Blink rendering engine for the conversion, it uses GDI calls for viewing and rendering the webpages. But Azure app service blocks GDI calls in the Azure website environment. As the Azure website does not have the elevated permission and enough rights, we can not launch the Chrome headless browser in the Azure app service windows (Azure website and Azure function).

## Steps to convert HTML to PDF in the Azure Functions using the Blink rendering engine

Step 1: Create the Azure function project.
![Convert HTMLToPDF Azure Functions Step1](Azure_images\Azure-function-linux\AzureFunctions1.png)

Step 2: Select the Azure Functions type and .NET Core version.
![Convert HTMLToPDF Azure Functions Step2](Azure_images\Azure-function-linux\AzureFunctions2.png)

Step 3: Select the function worker as .NET 8.0 isolated (Long-term support), and the selected HTTP triggers as follows. 
![Convert HTMLToPDF Azure Functions Step3](Azure_images\Azure-function-linux\AzureFunctions3.png)

Step 4: Install the [Syncfusion.HtmlToPdfConverter.Net.Linux](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Linux/) NuGet package as a reference to your .NET Core application [NuGet.org](https://www.nuget.org/).
![Convert HTMLToPDF Azure Functions Step3](Azure_images\Azure-function-linux\Nuget-package.png)

N> Starting with v16.2.0.x, if you reference Syncfusion assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion license key in your application to use our components.

Step 5: Include the following namespaces in Function1.cs file.

{% highlight c# tabtitle="C#" %}

    using Syncfusion.HtmlConverter;
    using Syncfusion.Pdf;
    using Syncfusion.Pdf.Graphics;
    using System.Runtime.InteropServices;

{% endhighlight %}

Step 6: Add the following code example in the Function1 class to convert HTML to PDF document using [Convert](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html#Syncfusion_HtmlConverter_HtmlToPdfConverter_Convert_System_String_) method in [HtmlToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html) class. The Blink command line arguments based on the given [CommandLineArguments](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.BlinkConverterSettings.html#Syncfusion_HtmlConverter_BlinkConverterSettings_CommandLineArguments) property of [BlinkConverterSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.BlinkConverterSettings.html) class. 

{% highlight c# tabtitle="C#" %}

    [Function("Function1")]
    public static async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req, ILogger log, FunctionContext executionContext)
    {
        string blinkBinariesPath = string.Empty;
        //Create a new PDF document.
        PdfDocument document;
        BlinkConverterSettings settings = new BlinkConverterSettings();
        //Creating the stream object.
        MemoryStream stream;
        try
        {
            blinkBinariesPath = SetupBlinkBinaries();              
                
            //Initialize the HTML to PDF converter with the Blink rendering engine.
            HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter(HtmlRenderingEngine.Blink);
              
            //Set command line arguments to run without sandbox.
            settings.CommandLineArguments.Add("--no-sandbox");
            settings.CommandLineArguments.Add("--disable-setuid-sandbox");
            settings.BlinkPath = blinkBinariesPath;
            //Assign BlinkConverter settings to the HTML converter 
            htmlConverter.ConverterSettings = settings;
            //Convert URL to PDF
            document = htmlConverter.Convert("http://www.syncfusion.com");
            stream = new MemoryStream();
            //Save and close the PDF document  
            document.Save(stream);
        }
        catch(Exception ex)
        {
            //Create a new PDF document.
            document = new PdfDocument();
            //Add a page to the document.
            PdfPage page = document.Pages.Add();
            //Create PDF graphics for the page.
            PdfGraphics graphics = page.Graphics;

            //Set the standard font.
            PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 8);
            //Draw the text.
            graphics.DrawString(ex.Message.ToString(), font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));
              
            stream = new MemoryStream();
            //Save the document into memory stream.
            document.Save(stream);
        }
        document.Close();
        stream.Position = 0;
        return new FileStreamResult(stream, "application/pdf");
    }

{% endhighlight %}

Step 7: Add the following helper methods to copy and set permission to the BlinkBinariesLinux folder.

{% highlight c# tabtitle="C#" %}

    private static string SetupBlinkBinaries( )
    {
        var fileInfo = new FileInfo(Assembly.GetExecutingAssembly().Location);
        string path = fileInfo.Directory.Parent.FullName;
        string blinkAppDir = Path.Combine(path, @"wwwroot");
        string tempBlinkDir = Path.GetTempPath();
        string chromePath = Path.Combine(tempBlinkDir, "chrome");
        if (!File.Exists(chromePath))
        {
            CopyFilesRecursively(blinkAppDir, tempBlinkDir);
            SetExecutablePermission(tempBlinkDir);
        }
        return tempBlinkDir;
    }
    private static void CopyFilesRecursively(string sourcePath, string targetPath)
    {
        //Create all the directories from the source to the destination path.
        foreach (string dirPath in Directory.GetDirectories(sourcePath, "*", SearchOption.AllDirectories))
        {
            Directory.CreateDirectory(dirPath.Replace(sourcePath, targetPath));
        }
        //Copy all the files from the source path to the destination path.
        foreach (string newPath in Directory.GetFiles(sourcePath, "*.*", SearchOption.AllDirectories))
        {
            File.Copy(newPath, newPath.Replace(sourcePath, targetPath), true);
        }
    }
    [DllImport("libc", SetLastError = true, EntryPoint = "chmod")]
    internal static extern int Chmod(string path, FileAccessPermissions mode);
    private static void SetExecutablePermission(string tempBlinkDir)
    {
        FileAccessPermissions ExecutableFilePermissions = FileAccessPermissions.UserRead | FileAccessPermissions.UserWrite | FileAccessPermissions.UserExecute |
        FileAccessPermissions.GroupRead | FileAccessPermissions.GroupExecute | FileAccessPermissions.OtherRead | FileAccessPermissions.OtherExecute;
        string[] executableFiles = new string[] { "chrome", "chrome_sandbox" };
        foreach (string executable in executableFiles)
        {
            var execPath = Path.Combine(tempBlinkDir, executable);
            if (File.Exists(execPath))
            {
                var code = Function1.Chmod(execPath, ExecutableFilePermissions);
                if (code != 0)
                {
                    throw new Exception("Chmod operation failed");
                }
            }
        }
    }

{% endhighlight %}

Step 8: Include the below enum in the Function1.cs file. 

{% highlight c# tabtitle="C#" %}

    [Flags]
    internal enum FileAccessPermissions : uint
    {
        OtherExecute = 1,
        OtherWrite = 2,
        OtherRead = 4,
        GroupExecute = 8,
        GroupWrite = 16,
        GroupRead = 32,
        UserExecute = 64,
        UserWrite = 128,
        UserRead = 256
    }      

{% endhighlight %}

**Publish to Azure Functions Linux**

Step 1: Right-click the project and select Publish. Then, create a new profile in the Publish Window.
![Create a new profile in the Publish Window](Azure_images\Azure-function-linux\Click_publish.png)

Step 2: Select the target as **Azure** and click **Next**.
![Select the target as Azure](Azure_images\Azure-function-linux\Set_Azure_target.png)

Step 3: Right-click the project and select Publish. Then, create a new profile in the Publish Window. The Blink rendering engine will work in consumption plan. So, you can create the Azure Function App service with a consumption plan.
![Convert HTMLToPDF Azure Functions Step4](Azure_images\Azure-function-linux\Select_function_app.png)

Step 4: Select the **Create new**.
![Configure Hosting Plan](Azure_images\Azure-function-linux\Select_create_new_button.png)

Step 5: Click **Create**.
![Browser will open after publish](Azure_images\Azure-function-linux\WebView.png)

Step 6: After creating the function app service, click **Finish**. 
![Creating app service](Azure_images\Azure-function-linux\Creating_app_function.png)

Step 7: Click **Close** button.
![Create a ASP.NET Core Project](Azure_images\Azure-function-linux\Publish_profile_creation_progress.png)

Step 8: Click **Publish**.
![Click the Publish button](Azure_images\Azure-function-linux\Publish_app_function.png)

Step 9: Now, Publish has succeeded.
![Publish has been succeeded](Azure_images\Azure-function-linux\Publish_link.png)


Step 10: Now, go to the Azure portal and select the App Services. After running the service, click Get function URL > Copy. Include the URL as a query string in the URL. Then, paste it into the new browser tab. You will get the PDF document as follows.
![Convert HTMLToPDF Azure Functions Step6](Azure_images\Azure-function-linux\htmltopdfoutput.png)

A complete working sample can be downloaded from [Github](https://github.com/SyncfusionExamples/html-to-pdf-csharp-examples/tree/master/Azure/HTML_to_PDF_Azure_functions)

Click [here](https://www.syncfusion.com/document-processing/pdf-framework/net-core/html-to-pdf) to explore the rich set of Syncfusion HTML to PDF converter library features. 

An online sample link to [convert HTML to PDF document](https://ej2.syncfusion.com/aspnetcore/PDF/HtmltoPDF#/material3) in ASP.NET Core. 

Click [here](https://www.syncfusion.com/document-processing/pdf-framework/net-core/html-to-pdf) to explore the rich set of Syncfusion HTML to PDF converter library features. 

An online sample link to [convert HTML to PDF document](https://ej2.syncfusion.com/aspnetcore/PDF/HtmltoPDF#/material3) in ASP.NET Core. 