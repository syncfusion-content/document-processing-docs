---
title: Troubleshooting PDF OCR failures | Syncfusion
description: Learn how to overcome OCR Processor failures using Syncfusion .NET OCR library with the help of Google's Tesseract Optical Character Recognition engine.
platform: document-processing
control: PDF
documentation: UG
keywords: Assemblies
--- 

# OCR Processor Troubleshooting 

## Tesseract has not been initialized exception

<table>
<th style="font-size:14px" width="100px">Exception</th>
<th style="font-size:14px">Tesseract has not been initialized exception.</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>The exception may occur if the tesseract binaries and tessdata files are unavailable on the provided path. 
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution1</th>
<td>
Set proper tesseract binaries and tessdata folder with all files and inner folders. The tessdata folder name is case-sensitive and must not be changed.  

{% tabs %}
{% highlight C# %}

//TesseractBinaries - path of the folder containing tesseract binaries. 
OCRProcessor processor = new OCRProcessor(@"TesseractBinaries/");

//TessData - path of the folder containing the language pack
processor.PerformOCR(lDoc, @"TessData/");

{% endhighlight %}
{% endtabs %}
</td>
</tr>
</table>

## Exception has been thrown by the target of an invocation

<table>
<th style="font-size:14px" width="100px">Exception</th>
<th style="font-size:14px">Exception has been thrown by the target of an invocation.</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>If the tesseract binaries are not in the required structure.  
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
To resolve this exception, ensure the tesseract binaries are in the following structure.
<br/><br/>
The tessdata and tesseract binaries folder are automatically added to the bin folder of the application. The assemblies should be in the following structure.
<br/><br/>
1.<span style="color:gray;font-size:14px"><i>bin\Debug\net7.0\runtimes\win-x64\native\leptonica-1.80.0.dll,libSyncfusionTesseract.dll</i></span><br/>
2.<span style="color:gray;font-size:14px"><i>bin\Debug\net7.0\runtimes\win-x86\native\leptonica-1.80.0.dll,libSyncfusionTesseract.dll</i></span>
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Reason 1
</th>
<td>An exception may occur due to missing or mismatched assemblies of the Tesseract binaries and Tesseract data from the OCR processor.
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Reason 2
</th>
<td>An exception may occur due to the VC++ 2015 redistributable files missing in the machine where the OCR processor takes place.
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
Install the VC++ 2015 redistributable files in your machine to overcome an exception. So, please select both file and install it.
<br/>
<b>Refer to the following screenshot:</b>
<br/>
<img src="OCR-Images/Redistributable-file.png" alt="Visual C++ 2015 Redistributable file">
<br/><br/>
Please find the download link Visual C++ 2015 Redistributable file,<br>
<a href="https://www.microsoft.com/en-us/download/details.aspx?id=48145">Visual C++ 2015 Redistributable file</a> 
</td>
</tr>
</table>

## Can't be opened because the developer's identity cannot be confirmed

<table>
<th style="font-size:14px" width="100px">Exception</th>
<th style="font-size:14px">Can't be opened because the developer's identity cannot be confirmed.</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>This error may occur during the initial loading of the OCR processor in Mac environments.     
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
To resolve this issue, refer this <a href="https://support.shippingeasy.com/hc/en-us/articles/211543683-What-is-the-error-identity-of-the-developer-cannot-be-confirmed-">link</a> for more details.

</td>
</tr>
</table>

## The OCR processor doesn't process languages other than English

<table>
<th style="font-size:14px" width="100px">Exception</th>
<th style="font-size:14px">The OCR processor doesn't process languages other than English.</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>This issue may occur if the input image has other languages. The language and tessdata are unavailable for those languages.    
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
The essential<sup>&reg;</sup> PDF supports all the languages the Tesseract engine supports in the OCR processor.
The dictionary packs for the languages can be downloaded from the following repository:<br/>
<a href="https://github.com/tesseract-ocr/tessdata">https://github.com/tesseract-ocr/tessdata</a>
<br/><br/>
It is also mandatory to change the corresponding language code in the <code>OCRProcessor.Settings.Language</code> property.  <br/>
For example, to perform optical character recognition in German, set the property as shown below:
<br/>
{% tabs %}
{% highlight C# %}

processor.Settings.Language = "deu";

{% endhighlight %}
{% endtabs %}
<br/>
<b>Common language codes supported by the OCR Processor:</b>
<br/>
<table>
<tr><th>Language</th><th>Code</th><th>Tessdata file</th></tr>
<tr><td>English</td><td>eng</td><td>eng.traineddata</td></tr>
<tr><td>German</td><td>deu</td><td>deu.traineddata</td></tr>
<tr><td>French</td><td>fra</td><td>fra.traineddata</td></tr>
<tr><td>Spanish</td><td>spa</td><td>spa.traineddata</td></tr>
<tr><td>Italian</td><td>ita</td><td>ita.traineddata</td></tr>
<tr><td>Portuguese</td><td>por</td><td>por.traineddata</td></tr>
<tr><td>Japanese</td><td>jpn</td><td>jpn.traineddata</td></tr>
<tr><td>Korean</td><td>kor</td><td>kor.traineddata</td></tr>
<tr><td>Chinese (Simplified)</td><td>chi_sim</td><td>chi_sim.traineddata</td></tr>
<tr><td>Chinese (Traditional)</td><td>chi_tra</td><td>chi_tra.traineddata</td></tr>
<tr><td>Arabic</td><td>ara</td><td>ara.traineddata</td></tr>
<tr><td>Hindi</td><td>hin</td><td>hin.traineddata</td></tr>
</table>
<br/>
For the full list of supported languages, see the <a href="https://github.com/tesseract-ocr/tessdata">tessdata repository</a>.
</td>
</tr>
</table>

## OCR fails in .NET Core WinForms but Works in .NET Framework

<table>
<th style="font-size:14px" width="100px">Exception</th>
<th style="font-size:14px">OCR processing works correctly in a <b>.NET Framework WinForms</b> application but fails to produce any output when the same logic is used in a <b>.NET Core WinForms</b> application. The application runs without throwing any exceptions, but no text is recognized from the PDF or image.</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>The root cause is a <b>platform-specific dependency mismatch</b>. The Tesseract binaries required for .NET Framework are different from those required for .NET Core. Even if the binaries are present in the output folder, using Framework-specific binaries in a .NET Core project causes the OCR process to fail silently.    
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
Ensure your .NET Core project uses the correct Tesseract binaries built for .NET Core: <br>
1.<b>Install the Correct NuGet Package</b>:<br>
Reference the <code>Syncfusion.PDF.OCR.Net.Core</code> NuGet package in your .NET Core project. This package is supported on <b>.NET Core 3.1, .NET 5, .NET 6, .NET 7, and .NET 8</b> (WinForms and WPF). Use the regular <code>Syncfusion.PDF.OCR</code> package only for <b>.NET Framework</b> projects.
<br>
2.<b>Verify the Tesseract Binaries</b>:<br>
Confirm that the correct binaries are copied to your output directory:<br>
a.Extract the Syncfusion.PDF.OCR.Net.Core NuGet package.<br>
b.Copy the appropriate <code>runtimes</code> folder from the extracted package into your project's output directory (e.g., <code>bin/Debug/net6.0-windows/</code>).<br>
c.Add the following <code>None</code> entries to the <code>.csproj</code> so the <code>runtimes</code> folder is copied on every build:
<br/>
{% tabs %}
{% highlight xml %}

<ItemGroup>
  <None Include="runtimes\**\*">
    <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
  </None>
</ItemGroup>

{% endhighlight %}
{% endtabs %}
<br/>

</td>
</tr>
</table>

## Text does not recognize properly when performing OCR on a PDF document with low-quality images

<table>
<th style="font-size:14px" width="100px">Issue</th>
<th style="font-size:14px">Text does not recognize properly when performing OCR on a PDF document with low-quality images</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>The presence of low quality images in the input PDF document may be the cause of this issue.
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
By using the best tessdata, we can improve the OCR results. For more information,<br> please refer to the links below.
<br/>
<a href="https://github.com/tesseract-ocr/tessdata_best">https://github.com/tesseract-ocr/tessdata_best</a> <br>
{{'**Note:**'| markdownify }}For better performance, kindly use the fast tessdata which is mentioned in below link,<br/><a href="https://github.com/tesseract-ocr/tessdata_fast">https://github.com/tesseract-ocr/tessdata_fast</a> 
</td>
</tr>
</table>

## OCR not working on Mac: Exception has been thrown by the target of an invocation

<table>
<th style="font-size:14px" width="100px">Issue
</th>
<th style="font-size:14px">Syncfusion.Pdf.PdfException: Exception has been thrown by the target of an invocation" in the Mac machine. 
</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>The problem occurs due to a mismatch in the dependency package versions on your Mac machine. 
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution
</th>
<td>To resolve this problem, you should install and utilize Tesseract 5 on your Mac machine. Refer to the following steps for installing Tesseract 5 and integrating it into an OCR processing workflow. 
<br>
1.Execute the following command to install Tesseract 5. 
<br>
{% tabs %}
{% highlight bash %}

brew install tesseract

{% endhighlight %}
{% endtabs %}
<br>
If the "brew" is not installed on your machine, you can install it using the following command.
<br>
{% tabs %}
{% highlight bash %}

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

{% endhighlight %}
{% endtabs %}
<br>
2.<b>Verify the installation</b> by running the following command and confirming that the reported version starts with <code>5.x</code>:
<br/>
{% tabs %}
{% highlight bash %}

tesseract --version

{% endhighlight %}
{% endtabs %}
<br/>
Once Tesseract 5 is successfully installed, locate the Tesseract library folder using the following command:
<br/>
{% tabs %}
{% highlight bash %}

brew --prefix tesseract

{% endhighlight %}
{% endtabs %}
<br/>
The command returns a path similar to <code>/opt/homebrew/Cellar/tesseract/5.x.x</code> (on Apple Silicon) or <code>/usr/local/Cellar/tesseract/5.x.x</code> (on Intel Macs). Note that the patch version (for example, <code>5.3.2</code>) will differ depending on when Homebrew installed the package; replace it in the steps below with the version returned on your machine.
<br/><br/>
3.Once the Tesseract 5 binaries path is known, configure the path when setting up the OCR processor. Refer to the example code below:
<br>
{% tabs %}
{% highlight C# %}

//Initialize the OCR processor by providing the path of tesseract binaries.
using (OCRProcessor processor = new OCRProcessor("/opt/homebrew/Cellar/tesseract/5.3.2/lib"))

{% endhighlight %}
{% endtabs %}
<br>

4.Set the <code>TessDataPath</code> relative to the application directory (use <code>AppContext.BaseDirectory</code> so the path resolves correctly regardless of the current working directory). Refer to the consolidated example code below:
<br>
{% tabs %}
{% highlight C# %}

using System;
using System.IO;
using Syncfusion.OCRProcessor;
using Syncfusion.Pdf.Parsing;

class Program
{
    static void Main(string[] args)
    {
        // Use the version returned by 'brew --prefix tesseract' on your machine.
        string tesseractPath = "/opt/homebrew/Cellar/tesseract/5.3.2/lib";
        // Resolve tessdata relative to the application output directory, not CWD.
        string tessDataPath = Path.Combine(AppContext.BaseDirectory, "runtimes", "tessdata");

        // Initialize the OCR processor by providing the path of tesseract binaries.
        using (OCRProcessor processor = new OCRProcessor(tesseractPath))
        {
            // Set OCR language to process.
            processor.Settings.Language = Languages.English;
            // Set tessdata path.
            processor.TessDataPath = tessDataPath;

            // Load a PDF document.
            using (FileStream fileStream = new FileStream(Path.Combine(AppContext.BaseDirectory, "Input.pdf"), FileMode.Open, FileAccess.Read))
            using (PdfLoadedDocument lDoc = new PdfLoadedDocument(fileStream))
            {
                // Process OCR by providing the PDF document.
                processor.PerformOCR(lDoc);

                // Create file stream.
                using (FileStream outputFileStream = new FileStream(Path.Combine(AppContext.BaseDirectory, "Output.pdf"), FileMode.Create, FileAccess.ReadWrite))
                {
                    // Save the PDF document to file stream.
                    lDoc.Save(outputFileStream);
                }
                // Close the document.
                lDoc.Close(true);
            }
        }
    }
}

{% endhighlight %}
{% endtabs %}
</td>
</tr>
</table>

## Method PerformOCR() causes problems and ignores the tesseract files under WSL.

<table>
<th style="font-size:14px" width="100px">Issue</th>
<th style="font-size:14px">Method PerformOCR() causes problem and ignores the tesseract files under WSL</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>Tesseract binaries in WSL are missing.
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>To resolve this problem, you should install and utilize Leptonica and Tesseract on your machine. Refer to the following steps for installing Leptonica and Tesseract,
<br><br/>
1. Install the leptonica.
<br>
{% tabs %}
{% highlight bash %}

sudo apt-get install libleptonica-dev

{% endhighlight %}
{% endtabs %}
<br><br>
<img alt="OCR Install leptonica logo" src="OCR-Images/Install-leptonica.png">
<br><br>
2.Install the tesseract.
<br>
{% tabs %}
{% highlight bash %}

sudo apt-get install tesseract-ocr-eng

{% endhighlight %}
{% endtabs %}
<br><br>
<img alt="OCR Install tesseract logo" src="OCR-Images/Install-tesseract.png">
<br><br>
3. Locate the installed library files (the version suffix on <code>libtesseract</code> may differ on your system, for example <code>libtesseract.so.5</code>). Use the following commands to discover the exact paths before copying:
<br>
{% tabs %}
{% highlight bash %}

dpkg -L libleptonica-dev | grep liblept
dpkg -L tesseract-ocr-eng | grep libtesseract

{% endhighlight %}
{% endtabs %}
<br>
4. Copy the binaries (<code>liblept.so</code> and <code>libtesseract.so</code>) to the project's output folder. Replace <code>&lt;PROJECT_DIR&gt;</code> with the absolute path to your .NET project on WSL (the example below uses a placeholder — do not copy the path verbatim unless it matches your environment).
<br>
{% tabs %}
{% highlight bash %}

cp /usr/lib/x86_64-linux-gnu/liblept.so <PROJECT_DIR>/bin/Debug/net7.0/liblept1753.so

{% endhighlight %}
{% endtabs %}
<br>
{% tabs %}
{% highlight bash %}

# The source file name varies by Tesseract version (e.g. libtesseract.so.4 on Ubuntu 22.04, libtesseract.so.5 on Ubuntu 24.04).
# The destination name is fixed because the OCR processor loads it as 'libSyncfusionTesseract.so'.
cp /usr/lib/x86_64-linux-gnu/libtesseract.so.<X> <PROJECT_DIR>/bin/Debug/net7.0/libSyncfusionTesseract.so

{% endhighlight %}
{% endtabs %}
<br>
<b>Why the rename?</b> The OCR processor looks for <code>libSyncfusionTesseract.so</code> in the output directory. The Tesseract system package ships the file as <code>libtesseract.so.&lt;version&gt;</code>, so it must be copied (and renamed) into the project's output folder to be picked up at runtime.
<br/>
</td>
</tr>
</table>


## OCR not working on Linux: Exception has been thrown by the target of an invocation

<table>
<th style="font-size:14px" width="100px">Issue</th>
<th style="font-size:14px">Syncfusion.Pdf.PdfException: Exception has been thrown by the target of an invocation" in the Linux machine.</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>The problem occurs due to the missing prerequisites dependencies on your Linux machine.
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
To resolve this problem, you should install all required dependencies in your Linux machine. Refer to the following steps to installing the missing dependencies.

Step 1: Execute the following command in terminal window to check dependencies are installed properly.
{% tabs %}
{% highlight bash %}

ldd  liblept1753.so
ldd  libSyncfusionTesseract.so

{% endhighlight %}
{% endtabs %}
Run the following commands in terminal<br>
Step 2:
{% tabs %}
{% highlight bash %}

sudo apt-get install libleptonica-dev libjpeg62

{% endhighlight %}
{% endtabs %}
Step 3:
{% tabs %}
{% highlight bash %}

ln -s /usr/lib/x86_64-linux-gnu/libtiff.so.6 /usr/lib/x86_64-linux-gnu/libtiff.so.5

{% endhighlight %}
{% endtabs %}
Step 4:
{% tabs %}
{% highlight bash %}

ln -s /lib/x86_64-linux-gnu/libdl.so.2 /usr/lib/x86_64-linux-gnu/libdl.so

{% endhighlight %}
{% endtabs %}
<br/>
<b>Verify after install</b> by running the <code>ldd</code> commands in Step 1 again; no "not found" entries should remain.
</td>
</tr>
</table>

## OCR not working on Docker net 8.0: Exception has been thrown by target of an invocation.

<table>
<th style="font-size:14px" width="100px">Exception</th>
<th style="font-size:14px">OCR not working on Docker net 8.0: Exception has been thrown by target of an invocation.</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>The reported issue occurs due to the missing prerequisite dependencies packages in the Docker container in .NET 8.0 version.
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
 We can resolve the reported issue by installing the tesseract required dependencies by using Docker file. Please refer the below commands.

{% tabs %}

{% highlight bash %}

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
RUN apt-get update && \
apt-get install -yq --no-install-recommends \
libgdiplus libc6-dev libleptonica-dev libjpeg62
RUN ln -s /usr/lib/x86_64-linux-gnu/libtiff.so.6 /usr/lib/x86_64-linux-gnu/libtiff.so.5
RUN ln -s /lib/x86_64-linux-gnu/libdl.so.2 /usr/lib/x86_64-linux-gnu/libdl.so

USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

{% endhighlight %}

{% endtabs %}
<br/>
<b>Complete multi-stage example</b> (replace <code>&lt;YOUR_PROJECT&gt;</code> with your project name):
<br/>
{% tabs %}
{% highlight bash %}

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["<YOUR_PROJECT>.csproj", "./"]
RUN dotnet restore "<YOUR_PROJECT>.csproj"
COPY . .
RUN dotnet publish "<YOUR_PROJECT>.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
RUN apt-get update && \
apt-get install -yq --no-install-recommends \
libgdiplus libc6-dev libleptonica-dev libjpeg62
RUN ln -s /usr/lib/x86_64-linux-gnu/libtiff.so.6 /usr/lib/x86_64-linux-gnu/libtiff.so.5
RUN ln -s /lib/x86_64-linux-gnu/libdl.so.2 /usr/lib/x86_64-linux-gnu/libdl.so
WORKDIR /app
COPY --from=build /app/publish .
USER app
EXPOSE 8080
EXPOSE 8081
ENTRYPOINT ["dotnet", "<YOUR_PROJECT>.dll"]

{% endhighlight %}

{% endtabs %}

</td>
</tr>
</table>


## Default path reference for Syncfusion<sup>&reg;</sup> OCR packages
When installing the Syncfusion<sup>&reg;</sup> OCR NuGet packages, the tessdata and tesseract path binaries are copied into the runtimes folder. The default binaries path references are added in the package itself, so there is no need to set the manual path.

If you are facing any issues with default reference path in your project. Kindly manually set the Tesseract and Tessdata path using the TessdataPath and TesseractPath in OCRProcessor class. You can find the binaries in the below project in your project location.

<table>
<tr>
<th style="font-size:14px" width="100px">Tessdata path
</th>
<td>
Tessdata default path reference is common for all platform. You can find the tessdata in below path in your project.

"bin\Debug\net6.0\runtimes\tessdata"
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Tesseract Path</th>
<td>
Tesseract binaries are different based on the OS platform and bit version . You can find the tesseract path in below path in your project.
<br/><br/>
Windows Platform:<br/>
bin\Debug\net6.0\runtimes\win-x86\native (or) bin\Debug\net6.0\runtimes\win-x64\native
<br/><br/>
Linux (x64):
<br/>
bin\Debug\net6.0\runtimes\linux-x64\native
<br/><br/>
Linux (ARM64):
<br/>
bin\Debug\net6.0\runtimes\linux-arm64\native
<br/><br/>
Mac (Apple Silicon / Intel):
<br/>
bin\Debug\net6.0\runtimes\osx\native
<br/><br/>
<b>Note:</b> The example paths above use <code>net6.0</code>. Replace this segment with the actual Target Framework moniker of your project, for example <code>net7.0</code> or <code>net8.0</code>.
<br/><br/>
<b>Version-to-path mapping:</b>

<table>
<tr><th>Project Target Framework</th><th>Windows Tesseract path</th><th>Linux Tesseract path</th><th>macOS Tesseract path</th></tr>
<tr><td>net6.0</td><td>runtimes\win-x64\native</td><td>runtimes\linux-x64\native</td><td>runtimes\osx\native</td></tr>
<tr><td>net7.0</td><td>runtimes\win-x64\native</td><td>runtimes\linux-x64\native</td><td>runtimes\osx\native</td></tr>
<tr><td>net8.0</td><td>runtimes\win-x64\native</td><td>runtimes\linux-x64\native</td><td>runtimes\osx\native</td></tr>
</table>
</td>
</tr>
</table>

## System.NullReferenceException in Azure linux VM
<table>
<th style="font-size:14px" width="100px">Exception</th>
<th style="font-size:14px">System.NullReferenceException in Azure linux VM</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>The problem occurs while extracting the Image from PDF without a Skiasharp dependency in a Linux environment.
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
Install the following SkiaSharp NuGet for the Linux environment. It resolves the <code>System.NullReferenceException</code> raised while extracting images from PDFs in Linux.
<br/><br/>
NuGet:  <a href="https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/2.88.6">SkiaSharp.NativeAssets.Linux.NoDependencies (2.88.6)</a>
<br/><br/>
<b>Verification snippet:</b> After installation, confirm that the native asset was copied to the output directory:
<br/>
{% tabs %}
{% highlight bash %}

ls bin/Debug/net8.0/runtimes/linux-x64/native/libSkiaSharp.so

{% endhighlight %}
{% endtabs %}
<br/>
If the file is missing, the package was not added correctly or the project's RID does not match. Add the following to your <code>.csproj</code> to force the correct RID:
<br/>
{% tabs %}
{% highlight xml %}

<PropertyGroup>
  <RuntimeIdentifier>linux-x64</RuntimeIdentifier>
</PropertyGroup>

{% endhighlight %}
{% endtabs %}
</td>
</tr>
</table>

## IIS Fails to Load Tesseract OCR Binaries
<table>
<th style="font-size:14px" width="100px">Exception</th>
<th style="font-size:14px">The application failed to load Tesseract OCR Binaries when hosted on IIS, resulting in the error:
Could not find a part of the path 'C:\inetpub\wwwroot\YourApp\x64'.</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td> * IIS couldn't load the required Tesseract and Leptonica Binaries because some system components were missing.<br>
* The Visual C++ Redistributables for VS2015-VS2022 (x86 and x64) were not installed.<br>
* IIS on a 64-bit server needs both redistributables to load native libraries correctly.<br>
* The application's folder paths and permissions were not properly set up for OCR binaries.<br>
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
<b>Installed Required Redistributables</b><br>
Installed both <b>VC_redist.x86</b> and <b>VC_redist.x64</b> for VS2015-VS2022 on the IIS server.<br>
<b>Updated Server</b><br>
Applied all available Windows updates (including cumulative and Defender updates) to ensure system stability.<br>
<b>Configured Application Paths</b><br>
Set default paths for OCR binaries:<br>
* C:\inetpub\wwwroot\myapp\Tesseractbinaries<br>
* C:\inetpub\wwwroot\myapp\tessdata<br>
<b>Set Proper Permissions</b><br>
Ensured IIS_IUSRS group has <b>Read & Execute</b> and <b>List folder contents</b> permissions on the above directories.<br>
<b>Restart the App Pool</b><br>
After installing the redistributables and copying the binaries, run <code>iisreset</code> from an elevated command prompt (or recycle the affected application pool) so that IIS reloads the native libraries.
<br/><br/>
<b>Wire the Paths in Code</b><br>
Point the OCR processor at the IIS-deployed folders by setting the <code>TesseractPath</code> and <code>TessDataPath</code> properties before calling <code>PerformOCR</code>:
<br/>
{% tabs %}
{% highlight C# %}

using Syncfusion.OCRProcessor;
using Syncfusion.Pdf.Parsing;

OCRProcessor processor = new OCRProcessor();
processor.TesseractPath = @"C:\inetpub\wwwroot\myapp\Tesseractbinaries";
processor.TessDataPath = @"C:\inetpub\wwwroot\myapp\tessdata";
processor.Settings.Language = "eng";
// Load lDoc and call processor.PerformOCR(lDoc) as usual.

{% endhighlight %}
{% endtabs %}
<br/>
<b>Observed Delayed Activation</b><br>
OCR functionality did not activate immediately-likely due to IIS caching or delayed DLL loading-but began working shortly after configuration.<br>
</td>
</tr>
</table>

## OCR not working on Azure App Service Linux Docker Container: Exception has been thrown by the target of an invocation
<table>
<th style="font-size:14px" width="100px">Exception</th>
<th style="font-size:14px">Syncfusion.Pdf.PdfException: Exception has been thrown by the target of an invocation while deploying ASP .NET Core applications in Azure App Service Linux Docker Container</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>when publishing the ASP.NET Core application to the Azure App Service Linux Docker container, only the .so, .dylib, and .dll files are copied from the runtimes folder to the publish folder. Files in other formats are not copied to the publish folder.
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
To resolve this problem, the tessdata folder path must be explicitly set relative to the project directory under runtimes/tessdata. The publish folder can be located in your project directory at this path: obj\Docker\publish.
<br/><br/>
Please refer to the screenshot below:
<br/><br/>
<img alt="OCR folder image" src="OCR-Images/TessdataRemove.jpeg">
<br/><br/>
</td>
</tr>
</table>

## 'Image stream is null' exception while performing OCR in AKS (Linux)

<table>
<th style="font-size:14px" width="100px">Exception</th>
<th style="font-size:14px">	
'Image stream is null' exception while performing OCR in AKS (Linux))</th>
<tr>
<th style="font-size:14px" width="100px">Reason
</th>
<td>This issue typically arises due to insufficient file system permissions for the temporary directory used during OCR processing in an AKS (Azure Kubernetes Service) Linux environment.
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
To ensure your Kubernetes workloads have appropriate read, write, and execute permissions on temporary directories, apply one of the solutions below. Pick the option that matches your persistence and security requirements:

| Scenario | Recommended solution |
|----------|---------------------|
| OCR temp files are short-lived and need not survive pod restarts | Solution 1 (<code>emptyDir</code>) |
| Pods run as a non-root user but cannot write to mounted volumes | Solution 2 (<code>securityContext</code>) |
| OCR output must persist across pod restarts or be shared between pods | Solution 3 (Azure Files) |

<br/><br/>
<b>1.Use an EmptyDir Volume for a Writable Temp Directory:</b>
Update your deployment YAML to include a writable temporary directory with `emptyDir`:
<br/><br/>
{% tabs %}

{% highlight yaml %}

spec:
  containers:
    - name: your-container
      image: your-image
      volumeMounts:
        - name: temp-volume
          mountPath: /tmp # or /app/tmp if your app uses that
  volumes:
    - name: temp-volume
      emptyDir: {}

{% endhighlight %}

{% endtabs %}
<br/><br/>
This ensures each pod has its own writable temporary directory, ideal for short-lived, non-persistent data
<br/><br/>
<b>2.Grant Write Access Using SecurityContext:</b>
<br/><br/>
To ensure your container has permission to write to mounted volumes, add:
<br/><br/>
{% tabs %}

{% highlight yaml %}

securityContext:
  runAsUser: 1000 # safer than root
  fsGroup: 2000   # gives access to mounted files

{% endhighlight %}

{% endtabs %}
<br/><br/>
N> Avoid setting `runAsUser: 0` in production, as running containers as root poses a security risk.
<br/><br/>
<b>3.Use Persistent Writable Storage (Azure Files Example):</b>
<br/><br/>
If persistent storage is required, configure Azure Files:
<br/><br/>
{% tabs %}

{% highlight yaml %}

volumes:
    - name: azurefile
    azureFile:
      secretName: azure-secret
      shareName: aksshare
      readOnly: false

{% endhighlight %}

{% endtabs %}
<br/><br/>
This setup allows your container to write to a persistent Azure File Share, making it suitable for use cases that require long-term file storage.
<br/><br/>
By applying these configuration changes, the AKS workloads gain the necessary write access for OCR temp-file writes, while maintaining security and flexibility.
<br/><br/>
<b>Verify the configuration</b> by exec'ing into the pod and writing a small file to the temp directory:
<br/>
{% tabs %}
{% highlight bash %}

kubectl exec -it <POD_NAME> -- sh -c "echo test > /tmp/ocr-write-test && cat /tmp/ocr-write-test"

{% endhighlight %}
{% endtabs %}
If the command returns <code>test</code>, the directory is writable and OCR should succeed.

</td>
</tr>

</table>

## Does OCRProcessor require Microsoft.mshtml?

<table>
<tr>
<th style="font-size:14px" width="100px">Query
</th>
<td>
Is Microsoft.mshtml required when using the OCRProcessor in the .NET Framework?
</td>
</tr>
<tr>
<th style="font-size:14px" width="100px">Solution</th>
<td>
Yes, the Microsoft.mshtml component is required when using the OCRProcessor in .NET Framework applications. The OCR processor relies on this package internally to parse the hOCR results, which are delivered in HTML format. Because of this, Microsoft.mshtml is necessary for .NET Framework projects that use the OCRProcessor.
<br/><br/>
<b>Applies to .NET Framework only.</b> .NET Core, .NET 5+, and .NET 6/7/8 projects do <b>not</b> require Microsoft.mshtml.
<br/><br/>
<b>How to add the reference in a .NET Framework project:</b>
<ol>
<li>In <b>Solution Explorer</b>, right-click <b>References</b> under the project and choose <b>Add Reference</b>.</li>
<li>Switch to the <b>COM</b> tab.</li>
<li>Check <b>Microsoft HTML Object Library</b> (the type library GUID is <code>{3050F1C5-98B5-11CF-BB82-00AA00BDCE0B}</code>) and click <b>OK</b>.</li>
<li>Rebuild the project.</li>
</ol>
If the COM entry is not visible, install or repair the Visual Studio installation and ensure the "Windows Communication Foundation" / "Office Developer Tools" workload components are present.
</td>
</tr>
</table>