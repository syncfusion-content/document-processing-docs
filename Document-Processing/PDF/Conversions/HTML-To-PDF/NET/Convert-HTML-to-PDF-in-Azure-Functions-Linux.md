---
title: Convert HTML to PDF in Azure Functions Linux| Syncfusion
description: Learn how to convert HTML to PDF in Azure Linux with easy steps using Syncfusion .NET HTML to PDF converter library.
platform: document-processing
control: PDF
documentation: UG
---

# Convert HTML to PDF in Azure Functions Linux

The [HTML to PDF converter](https://www.syncfusion.com/document-sdk/net-pdf-library/html-to-pdf) is a .NET Core library for converting webpages, SVG, MHTML, and HTML to PDF using C#. The result preserves all graphics, images, text, fonts, and the layout of the original HTML document or webpage. Using this library, you can convert HTML to PDF using C# with the Blink rendering engine in Azure Functions Linux.

N> HTML to PDF converter is not supported with Azure App Service windows. We internally use Blink rendering engine for the conversion, it uses GDI calls for viewing and rendering the webpages. But Azure app service blocks GDI calls in the Azure website environment. As the Azure website does not have the elevated permission and enough rights, we can not launch the Chrome headless browser in the Azure app service windows (Azure website and Azure function).

## Prerequisites

**Version Compatibility**

The **Syncfusion.HtmlToPdfConverter.Net.Linux** NuGet package uses the Blink rendering engine for HTML to PDF conversion. This library is compatible with **.NET 8.0 and later** versions

**Supported Inputs**

The HTML to PDF converter supports the following input types:

- HTML String: Direct HTML content.
- URL: Web pages and online HTML content.
- HTML Files: Local HTML files.
- MHTML Files: Web archive (.mhtml/.mht) content.
- Authenticated Web Pages: Pages that require cookies, form authentication, or HTTP authentication.
- HTTP GET/POST Requests: HTML content accessed through GET or POST methods

**Required Software**

- .NET 8 SDK or later
- Linux x86_64 environment

**Register the license key**

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you must add the "Syncfusion.Licensing" assembly reference and register a license key in your application. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details on registering a Syncfusion<sup>&reg;</sup> license key.

Include a license key in your **Function1.cs** file before creating an **HtmlToPdfConverter** instance. Refer to the [Syncfusion License](https://help.syncfusion.com/common/essential-studio/licensing/overview) documentation to learn about registering the Syncfusion license key in your application.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Licensing;

public class Function1
{
    // Register the Syncfusion license
    SyncfusionLicenseProvider.RegisterLicense("YOUR LICENSE KEY");
}

{% endhighlight %}
{% endtabs %}

N> Starting from **version 29.2.4**, it is no longer necessary to manually add the following command-line arguments when using the Blink rendering engine:
N> ```csharp
N> settings.CommandLineArguments.Add("--no-sandbox");
N> settings.CommandLineArguments.Add("--disable-setuid-sandbox");
N> ```
N> These arguments are only required when using **older versions** of the library that depend on Blink in sandbox-restricted environments.

## Steps to convert HTML to PDF in the Azure Functions using the Blink rendering engine

Step 1: Create the Azure function project.
![Convert HTMLToPDF Azure Functions Step1](Azure_images\Azure-function-linux\AzureFunctions1.png)

Step 2: Select the Azure Functions type and .NET Core version.
![Convert HTMLToPDF Azure Functions Step2](Azure_images\Azure-function-linux\AzureFunctions2.png)

Step 3: Select the function worker as .NET 8.0 isolated (Long-term support), and the selected HTTP triggers as follows. 
![Convert HTMLToPDF Azure Functions Step3](Azure_images\Azure-function-linux\AzureFunctions3.png)

Step 4: Install the [Syncfusion.HtmlToPdfConverter.Net.Linux](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Linux/) NuGet package as a reference to your .NET Core application from [NuGet.org](https://www.nuget.org/).
![Convert HTMLToPDF Azure Functions Step4](Azure_images\Azure-function-linux\Nuget-package.png)

Step 5: Create a shell file with the below commands in the project and name it **dependenciesInstall.sh**. This script will install or copy the necessary dependency packages:

{% tabs %}
{% highlight bash tabtitle="Shell" %}

echo "Starting dependencies installation script..."
if ! command -v rsync &> /dev/null; then
    echo "rsync could not be found, installing..."
    apt-get update && apt-get install -yq rsync
fi
FILE_PATH="/home/site/wwwroot/Package/usr/lib/x86_64-linux-gnu/libnss3.so"
if [ -f "$FILE_PATH" ]; then
    # If pre-packaged dependencies exist, copy them to system library path
    echo "Dependencies file exists."
    PACKAGE_USR="/home/site/wwwroot/Package/usr/lib/x86_64-linux-gnu"
    if [ -d "$PACKAGE_USR" ]; then
        echo "Copying user libraries..."
        rsync -av --update /home/site/wwwroot/Package/usr/lib/ /usr/lib/
        echo "Copied successfully..."
    fi
else
    # If no pre-packaged dependencies, install from package repository
    echo "Package directory does not exist. Installing dependencies..."
    apt-get update && apt-get install -yq --no-install-recommends \
        libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 \
        libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 \
        libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 \
        libx11-6 libx11-xcb1 libxcb1 libxcursor1 libxdamage1 libxext6 \
        libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 libnss3 libgbm1

    # Create directories for caching dependencies
    mkdir -p /home/site/wwwroot/Package/usr/lib/x86_64-linux-gnu
    mkdir -p /home/site/wwwroot/Package/lib/x86_64-linux-gnu

    # Copy installed libraries to package cache for future deployments
    PACKAGE_USR="/home/site/wwwroot/Package/usr/lib/x86_64-linux-gnu"
    if [ -d "$PACKAGE_USR" ]; then
        echo "Copying user libraries to package..."
        rsync -av /usr/lib/x86_64-linux-gnu/ /home/site/wwwroot/Package/usr/lib/x86_64-linux-gnu
    fi
fi
echo "Dependencies installation script completed."

{% endhighlight %}
{% endtabs %}

![Convert HTMLToPDF Azure Functions Step5](htmlconversion_images\ShellCommand.png)

Step 6: Set **Copy to Output Directory** as **Copy if newer** for the **dependenciesInstall.sh** file.
![Convert HTMLToPDF Azure Functions Step6](htmlconversion_images\CopyToNewer.png)

Step 7: Add the following namespaces to the **Function1.cs** file:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.HtmlConverter;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System.Runtime.InteropServices;

{% endhighlight %}
{% endtabs %}

Step 8: Add the **Function1** HTTP trigger method that handles GET/POST requests and converts HTML to PDF:

{% tabs %}
{% highlight c# tabtitle="C#" %}

[Function("Function1")]
public static async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req, ILogger log, FunctionContext executionContext)
{
    // Log the incoming request to Azure Function App
    _logger.LogInformation("C# HTTP trigger function processed a request.");
    try
    {
        // Convert HTML string to PDF bytes using the conversion method
        byte[] pdfBytes = HtmlToPdfConvert("<p>Hello world</p>");
        // Return PDF bytes as file stream response with proper MIME type
        return new FileStreamResult(new MemoryStream(pdfBytes), "application/pdf");
    }
    catch (Exception ex)
    {
        // Log error details for debugging
        _logger.LogError(ex.Message.ToString(), "An error occurred while converting HTML to PDF.");
        // Return error response with HTTP 500 status code
        return new ContentResult
        {
            Content = $"Error: {ex.Message}",
            ContentType = "text/plain",
            StatusCode = StatusCodes.Status500InternalServerError
        };
    }
}

{% endhighlight %}
{% endtabs %}

Step 9: Add the **HtmlToPdfConvert** method that converts HTML strings to PDF documents using the [Convert](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html#Syncfusion_HtmlConverter_HtmlToPdfConverter_Convert_System_String_) method in the [HtmlToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html) class with [BlinkConverterSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.BlinkConverterSettings.html):

{% tabs %}
{% highlight c# tabtitle="C#" %}

public byte[] HtmlToPdfConvert(string htmlText)
{
    // Validate HTML input to ensure it is not empty or null
    if (string.IsNullOrWhiteSpace(htmlText))
    {
        throw new ArgumentException("HTML text cannot be null or empty.", nameof(htmlText));
    }
    try
    {
        // Setup Blink binaries path from Azure Function runtime
        var blinkBinariesPath = SetupBlinkBinaries();
        // Install Linux dependency packages for Blink rendering
        InstallLinuxPackages();

        // Initialize HTML to PDF converter with Blink rendering engine
        HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter(HtmlRenderingEngine.Blink);

        // Configure Blink converter settings for output rendering
        BlinkConverterSettings settings = new BlinkConverterSettings
        {
            // Set path to Blink binaries extracted in temporary directory
            BlinkPath = blinkBinariesPath,
            // Define viewport size for responsive HTML rendering
            ViewPortSize = new Syncfusion.Drawing.Size(1024, 768),
            // Configure PDF document margins
            Margin = new PdfMargins
            {
                Top = 20,
                Left = 20,
                Right = 20,
                Bottom = 20
            }
        };
     
        // Assign converter settings to HTML converter instance
        htmlConverter.ConverterSettings = settings;

        // Convert HTML to PDF and return as byte array
        using (var memoryStream = new MemoryStream())
        {
            // Convert HTML string to PDF document
            PdfDocument document = htmlConverter.Convert(htmlText, null);
            // Save PDF to memory stream
            document.Save(memoryStream);
            // Close document to release resources
            document.Close(true);
            // Return PDF bytes
            return memoryStream.ToArray();
        }
    }
    catch (Exception ex)
    {
        // Log and rethrow exception for caller handling
        Console.WriteLine("An error occurred: " + ex.Message);
        throw;
    }
}

{% endhighlight %}
{% endtabs %}

Step 10: Add the **InstallLinuxPackages** method to ensure necessary Linux packages are installed and configured for Blink rendering:

{% tabs %}
{% highlight c# tabtitle="C#" %}

// This method checks if the current operating system is Linux and installs necessary package
// dependencies for HTML to PDF conversion if they are not already installed
private static void InstallLinuxPackages()
{
    // Check if the OS is Linux; return immediately if not
    if (!RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
    {
        return;
    }

    // Define file permissions needed for the executable files (user, group, other read/write/execute)
    FileAccessPermissions ExecutableFilePermissions =
        FileAccessPermissions.UserRead | FileAccessPermissions.UserWrite | FileAccessPermissions.UserExecute |
        FileAccessPermissions.GroupRead | FileAccessPermissions.GroupExecute | FileAccessPermissions.OtherRead |
        FileAccessPermissions.OtherExecute;

    // Get the directory where the assembly is located
    string assemblyDirectory = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);

    // Path for the shell script file that installs dependencies
    string shellFilePath = Path.Combine(assemblyDirectory);
    string tempBlinkDir = Path.GetTempPath();
    string dependenciesPath = Path.Combine(tempBlinkDir, "dependenciesInstall.sh");

    // Check if the dependencies script does not already exist
    if (!File.Exists(dependenciesPath))
    {
        // Copy necessary files from assembly directory to temporary directory
        CopyFilesRecursively(shellFilePath, tempBlinkDir);

        // Get the path for the executable script in temporary directory
        var execPath = Path.Combine(tempBlinkDir, "dependenciesInstall.sh");

        // If the script exists, update its permissions to make it executable
        if (File.Exists(execPath))
        {
            var code = Chmod(execPath, ExecutableFilePermissions);
            if (code != 0)
            {
                throw new Exception("Chmod operation failed");
            }
        }

        // Start a new process to run the shell script for dependency installation
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

        // Execute the process and wait for it to finish
        process.Start();
        process.WaitForExit();
    }
}

{% endhighlight %}
{% endtabs %}

Step 11: Add the following helper methods to set up Blink binaries and configure Linux file permissions:

{% tabs %}
{% highlight c# tabtitle="C#" %}

private static string SetupBlinkBinaries()
{
    // Get the assembly directory path containing Blink binaries
    string assemblyDirectory = Path.Combine(Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location), "runtimes", "linux", "native");
    string blinkAppDir = Path.Combine(assemblyDirectory);
    // Get system temp directory for Blink binary extraction
    string tempBlinkDir = Path.GetTempPath();
    // Define path to chrome executable
    string chromePath = Path.Combine(tempBlinkDir, "chrome");

    // Check if Blink binaries are not already extracted
    if (!File.Exists(chromePath))
    {
        // Copy Blink binaries from assembly to temp directory
        CopyFilesRecursively(blinkAppDir, tempBlinkDir);
        // Set executable permissions on Blink binaries
        SetExecutablePermission(tempBlinkDir);
    }
    // Return temp directory containing Blink binaries
    return tempBlinkDir;
}

private static void CopyFilesRecursively(string sourcePath, string targetPath)
{
    // Create all directory structure from source to destination path
    foreach (string dirPath in Directory.GetDirectories(sourcePath, "*", SearchOption.AllDirectories))
    {
        Directory.CreateDirectory(dirPath.Replace(sourcePath, targetPath));
    }

    // Copy all files recursively from source to destination path
    foreach (string newPath in Directory.GetFiles(sourcePath, "*.*", SearchOption.AllDirectories))
    {
        File.Copy(newPath, newPath.Replace(sourcePath, targetPath), true);
    }
}

// Invoke declaration for Linux chmod system call to set file permissions
[DllImport("libc", SetLastError = true, EntryPoint = "chmod")]
internal static extern int Chmod(string path, FileAccessPermissions mode);

private static void SetExecutablePermission(string tempBlinkDir)
{
    // Define file permissions for executable binaries: read, write, execute for user, group, other
    FileAccessPermissions ExecutableFilePermissions =
        FileAccessPermissions.UserRead | FileAccessPermissions.UserWrite | FileAccessPermissions.UserExecute |
        FileAccessPermissions.GroupRead | FileAccessPermissions.GroupExecute | FileAccessPermissions.OtherRead |
        FileAccessPermissions.OtherExecute;
        
    // List of Blink binaries requiring executable permissions
    string[] executableFiles = new string[] { "chrome", "chrome_sandbox" };

    // Set permissions on each executable binary for Azure Functions execution
    foreach (string executable in executableFiles)
    {
        var execPath = Path.Combine(tempBlinkDir, executable);
        if (File.Exists(execPath))
        {
            // Call chmod to set executable permissions on the binary
            var code = Chmod(execPath, ExecutableFilePermissions);
            if (code != 0)
            {
                // Throw exception if chmod operation fails
                throw new Exception("Chmod operation failed");
            }
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 12: Add the following enum to the **Function1.cs** file for Unix/Linux file permission definitions:

{% tabs %}
{% highlight c# tabtitle="C#" %}

// Enum for Unix/Linux file access permissions used with chmod system call
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
{% endtabs %}

## Steps to publish to Azure Functions Linux

Step 1: Right-click the project and select **Publish**. Create a new profile in the Publish Window.
![Create a new profile in the Publish Window](Azure_images\Azure-function-linux\Click_publish.png)

Step 2: Select **Azure** as the target and click **Next**.
![Select the target as Azure](Azure_images\Azure-function-linux\Set_Azure_target.png)

Step 3: Select the **Azure Function App** option. The Blink rendering engine works with the consumption plan, so you can create the Azure Function App service with a consumption plan.
![Convert HTMLToPDF Azure Functions Step4](Azure_images\Azure-function-linux\Select_function_app.png)

Step 4: Select **Create new** to create a new Function App instance.
![Configure Hosting Plan](Azure_images\Azure-function-linux\Select_create_new_button.png)

Step 5: Click **Create** to proceed with the Function App configuration.
![Browser will open after publish](Azure_images\Azure-function-linux\WebView.png)

Step 6: After creating the function app service, click **Finish**.
![Creating app service](Azure_images\Azure-function-linux\Creating_app_function.png)

Step 7: Click **Close** to complete the profile setup.
![Create a ASP.NET Core Project](Azure_images\Azure-function-linux\Publish_profile_creation_progress.png)

Step 8: Click **Publish** to deploy the Azure Function to the cloud.
![Click the Publish button](Azure_images\Azure-function-linux\Publish_app_function.png)

Step 9: The publishing process will complete successfully.
![Publish has been succeeded](Azure_images\Azure-function-linux\Publish_link.png)

Step 10: After successful publication, navigate to the Azure portal and select **App Services**. Once the service is running, click **Get function URL > Copy**. Paste the URL into a new browser tab, and you will obtain the following PDF document output:
![Convert HTMLToPDF Azure Functions Step6](Azure_images\Azure-function-linux\htmltopdfoutput.png)

A complete working sample for converting HTML to PDF in Azure Functions Linux can be downloaded from [GitHub](https://github.com/SyncfusionExamples/html-to-pdf-csharp-examples/tree/master/Azure/HTML_to_PDF_Azure_functions).

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library/html-to-pdf) to explore the rich set of Syncfusion<sup>&reg;</sup> HTML to PDF converter library features. 

You can also view the online sample to [convert HTML to PDF documents](https://document.syncfusion.com/demos/pdf/htmltopdf#/tailwind3) in ASP.NET Core.

 
