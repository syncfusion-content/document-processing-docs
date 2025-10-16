---
title: Convert HTML to PDF in Azure Functions Linux| Syncfusion
description: Learn how to convert HTML to PDF in Azure Linux with easy steps using Syncfusion .NET HTML to PDF converter library.
platform: document-processing
control: PDF
documentation: UG
---

# Convert HTML to PDF in Azure Functions Linux

The Syncfusion<sup>&reg;</sup> [HTML to PDF converter](https://www.syncfusion.com/document-processing/pdf-framework/net/html-to-pdf) is a .NET Core library for converting webpages, SVG, MHTML, and HTML to PDF using C#. The result preserves all graphics, images, text, fonts, and the layout of the original HTML document or webpage. Using this library, you can convert an HTML to PDF using C# with the Blink rendering engine in Azure Functions Linux.

N> HTML to PDF converter is not supported with Azure App Service windows. We internally use Blink rendering engine for the conversion, it uses GDI calls for viewing and rendering the webpages. But Azure app service blocks GDI calls in the Azure website environment. As the Azure website does not have the elevated permission and enough rights, we can not launch the Chrome headless browser in the Azure app service windows (Azure website and Azure function).

## Steps to convert HTML to PDF in the Azure Functions using the Blink rendering engine

Step 1: Create the Azure function project.
![Convert HTMLToPDF Azure Functions Step1](Azure_images\Azure-function-linux\AzureFunctions1.png)

Step 2: Select the Azure Functions type and .NET Core version.
![Convert HTMLToPDF Azure Functions Step2](Azure_images\Azure-function-linux\AzureFunctions2.png)

Step 3: Select the function worker as .NET 8.0 isolated (Long-term support), and the selected HTTP triggers as follows. 
![Convert HTMLToPDF Azure Functions Step3](Azure_images\Azure-function-linux\AzureFunctions3.png)

Step 4: Install the [Syncfusion.HtmlToPdfConverter.Net.Linux](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Linux/) NuGet package as a reference to your .NET Core application [NuGet.org](https://www.nuget.org/).
![Convert HTMLToPDF Azure Functions Step4](Azure_images\Azure-function-linux\Nuget-package.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.


Step 5: Create a shell file with the below commands in the project and name it as dependenciesInstall.sh. In this article, these steps have been followed to install dependencies packages.

{% highlight bash tabtitle="Shell" %}

echo "Starting dependencies installation script..."


if ! command -v rsync &> /dev/null; then
    echo "rsync could not be found, installing..."
    apt-get update && apt-get install -yq rsync
fi

FILE_PATH="/home/site/wwwroot/Package/usr/lib/x86_64-linux-gnu/libnss3.so"
if [ -f "$FILE_PATH" ]; then
    echo "Dependencies file exists."
    PACKAGE_USR="/home/site/wwwroot/Package/usr/lib/x86_64-linux-gnu"
    if [ -d "$PACKAGE_USR" ]; then
        echo "Copying user libraries..."
        rsync -av --update /home/site/wwwroot/Package/usr/lib/ /usr/lib/
        echo "Copied successfully..."
    fi
else
    echo "Package directory does not exist. Installing dependencies..."
    apt-get update && apt-get install -yq --no-install-recommends \
        libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 \
        libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 \
        libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 \
        libx11-6 libx11-xcb1 libxcb1 libxcursor1 libxdamage1 libxext6 \
        libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 libnss3 libgbm1

    mkdir -p /home/site/wwwroot/Package/usr/lib/x86_64-linux-gnu
    mkdir -p /home/site/wwwroot/Package/lib/x86_64-linux-gnu

    PACKAGE_USR="/home/site/wwwroot/Package/usr/lib/x86_64-linux-gnu"
    if [ -d "$PACKAGE_USR" ]; then
        echo "Copying user libraries to package..."
        rsync -av /usr/lib/x86_64-linux-gnu/ /home/site/wwwroot/Package/usr/lib/x86_64-linux-gnu
    fi
fi

echo "Dependencies installation script completed."

{% endhighlight %}

![Convert HTMLToPDF Azure Functions Step5](htmlconversion_images\ShellCommand.png)

Step 6: Set Copy to Output Directory as “Copy if newer” to the dependenciesInstall.sh file.

![Convert HTMLToPDF Azure Functions Step6](htmlconversion_images\CopyToNewer.png)

Step 7: Include the following namespaces in Function1.cs file.

{% highlight c# tabtitle="C#" %}

    using Syncfusion.HtmlConverter;
    using Syncfusion.Pdf;
    using Syncfusion.Pdf.Graphics;
    using System.Runtime.InteropServices;

{% endhighlight %}

Step 8: This Azure Function converts HTML to PDF using HTTP triggers. It handles GET/POST requests, processes the HTML, and returns a PDF response.

{% highlight c# tabtitle="C#" %}

    [Function("Function1")]
    public static async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req, ILogger log, FunctionContext executionContext)
    {
        _logger.LogInformation("C# HTTP trigger function processed a request.");
        try
        {
            byte[] pdfBytes = HtmlToPdfConvert("<p>Hello world</p>");
            return new FileStreamResult(new MemoryStream(pdfBytes), "application/pdf");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex.Message.ToString(), "An error occurred while converting HTML to PDF.");
            return new ContentResult
            {
                Content = $"Error: {ex.Message}",
                ContentType = "text/plain",
                StatusCode = StatusCodes.Status500InternalServerError
            };

        }
    }

{% endhighlight %}

step 9: Use the following code example in the HtmlToPdfConvert method to convert HTML to a PDF document using the [Convert](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html#Syncfusion_HtmlConverter_HtmlToPdfConverter_Convert_System_String_) method in the [HtmlToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html) class. The Blink command line arguments are configured based on the given [CommandLineArguments](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.BlinkConverterSettings.html#Syncfusion_HtmlConverter_BlinkConverterSettings_CommandLineArguments) property of the [BlinkConverterSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.BlinkConverterSettings.html) class.

{% highlight c# tabtitle="C#" %}

public byte[] HtmlToPdfConvert(string htmlText)
{
    if (string.IsNullOrWhiteSpace(htmlText))
    {
        throw new ArgumentException("HTML text cannot be null or empty.", nameof(htmlText));
    }
    try
    {
        // Setup Blink binaries and install necessary packages
        var blinkBinariesPath = SetupBlinkBinaries();
        InstallLinuxPackages();

        // Initialize HTML to PDF converter
        HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter(HtmlRenderingEngine.Blink);

        // Display settings
        BlinkConverterSettings settings = new BlinkConverterSettings
        {
            BlinkPath = blinkBinariesPath,
            ViewPortSize = new Syncfusion.Drawing.Size(1024, 768), // Set your desired viewport size
            Margin = new PdfMargins
            {
                Top = 20, // Set your desired margins
                Left = 20,
                Right = 20,
                Bottom = 20
            }
        };
     
        htmlConverter.ConverterSettings = settings;

        // Convert HTML to PDF
        using (var memoryStream = new MemoryStream())
        {
            PdfDocument document = htmlConverter.Convert(htmlText, null);
            document.Save(memoryStream);
            document.Close(true);
            return memoryStream.ToArray();
        }
    }
    catch (Exception ex)
    {
        // Handle exceptions
        Console.WriteLine("An error occurred: " + ex.Message);
        throw;
    }
}

{% endhighlight %}

N> Starting from **version 29.2.4**, it is no longer necessary to manually add the following command-line arguments when using the Blink rendering engine:
N> ```csharp
N> settings.CommandLineArguments.Add("--no-sandbox");
N> settings.CommandLineArguments.Add("--disable-setuid-sandbox");
N> ```
N> These arguments are only required when using **older versions** of the library that depend on Blink in sandbox-restricted environments.

Step 10: This code is designed to ensure that the necessary Linux packages for HTML to PDF conversion are installed if the operating system is Linux. It adjusts file permissions and executes a shell script to carry out the installation.

{% highlight c# tabtitle="C#" %}

// This method checks if the current operating system is Linux and installs necessary package 
// dependencies for HTML to PDF conversion if they are not already installed.
private static void InstallLinuxPackages()
{
    // Check if the OS is Linux; return immediately if not.
    if (!RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
    {
        return;
    }

    // Define file permissions needed for the executable files.
    FileAccessPermissions ExecutableFilePermissions =
        FileAccessPermissions.UserRead | FileAccessPermissions.UserWrite | FileAccessPermissions.UserExecute |
        FileAccessPermissions.GroupRead | FileAccessPermissions.GroupExecute | FileAccessPermissions.OtherRead |
        FileAccessPermissions.OtherExecute;

    // Get the directory where the assembly is located.
    string assemblyDirectory = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);

    // Path for the shell script file that installs dependencies.
    string shellFilePath = Path.Combine(assemblyDirectory);
    string tempBlinkDir = Path.GetTempPath();
    string dependenciesPath = Path.Combine(tempBlinkDir, "dependenciesInstall.sh");

    // Check if the dependencies script does not already exist.
    if (!File.Exists(dependenciesPath))
    {
        // Copy necessary files to a temporary directory.
        CopyFilesRecursively(shellFilePath, tempBlinkDir);

        // Get the path for the executable script.
        var execPath = Path.Combine(tempBlinkDir, "dependenciesInstall.sh");

        // If the script exists, update its permissions to make it executable.
        if (File.Exists(execPath))
        {
            var code = Chmod(execPath, ExecutableFilePermissions);
            if (code != 0)
            {
                throw new Exception("Chmod operation failed");
            }
        }

        // Start a new process to run the shell script.
        Process process = new Process
        {
            StartInfo = new ProcessStartInfo
            {
                FileName = "/bin/bash",
                Arguments = "-c " + execPath,
                CreateNoWindow = true,
                UseShellExecute = false,
            }
        };

        // Execute the process and wait for it to finish.
        process.Start();
        process.WaitForExit();
    }
}

{% endhighlight %}


Step 11: Add the following helper methods to copy and set permission to the BlinkBinariesLinux folder.

{% highlight c# tabtitle="C#" %}

private static string SetupBlinkBinaries()
{
    string assemblyDirectory = Path.Combine(Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location), "runtimes", "linux", "native");
    string blinkAppDir = Path.Combine(assemblyDirectory);
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
    // Create all the directories from the source to the destination path.
    foreach (string dirPath in Directory.GetDirectories(sourcePath, "*", SearchOption.AllDirectories))
    {
        Directory.CreateDirectory(dirPath.Replace(sourcePath, targetPath));
    }

    // Copy all the files from the source path to the destination path.
    foreach (string newPath in Directory.GetFiles(sourcePath, "*.*", SearchOption.AllDirectories))
    {
        File.Copy(newPath, newPath.Replace(sourcePath, targetPath), true);
    }
}

[DllImport("libc", SetLastError = true, EntryPoint = "chmod")]
internal static extern int Chmod(string path, FileAccessPermissions mode);

private static void SetExecutablePermission(string tempBlinkDir)
{
    FileAccessPermissions ExecutableFilePermissions =
        FileAccessPermissions.UserRead | FileAccessPermissions.UserWrite | FileAccessPermissions.UserExecute |
        FileAccessPermissions.GroupRead | FileAccessPermissions.GroupExecute | FileAccessPermissions.OtherRead |
        FileAccessPermissions.OtherExecute;
        
    string[] executableFiles = new string[] { "chrome", "chrome_sandbox" };

    foreach (string executable in executableFiles)
    {
        var execPath = Path.Combine(tempBlinkDir, executable);
         if (File.Exists(execPath))
        {
            var code = Chmod(execPath, ExecutableFilePermissions);
            if (code != 0)
            {
                throw new Exception("Chmod operation failed");
            }
        }
    }
}

{% endhighlight %}

Step 12: Include the below enum in the Function1.cs file. 

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

Click [here](https://www.syncfusion.com/document-processing/pdf-framework/net-core/html-to-pdf) to explore the rich set of Syncfusion<sup>&reg;</sup> HTML to PDF converter library features. 

An online sample link to [convert HTML to PDF document](https://ej2.syncfusion.com/aspnetcore/PDF/HtmltoPDF#/material3) in ASP.NET Core. 

Click [here](https://www.syncfusion.com/document-processing/pdf-framework/net-core/html-to-pdf) to explore the rich set of Syncfusion<sup>&reg;</sup> HTML to PDF converter library features. 


An online sample link to [convert HTML to PDF document](https://ej2.syncfusion.com/aspnetcore/PDF/HtmltoPDF#/material3) in ASP.NET Core. 
