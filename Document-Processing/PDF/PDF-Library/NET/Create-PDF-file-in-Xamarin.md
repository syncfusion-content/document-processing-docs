---
title: Create a PDF File in Xamarin | Syncfusion
description: Learn how to create a PDF file in Xamarin with easy steps using Syncfusion Xamarin PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
---
# Create a PDF File in Xamarin

> **⚠️ Deprecation Notice:** Xamarin is deprecated as of May 2024. For new projects, use [.NET MAUI](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-document-in-blazor), which provides better performance and cross-platform support.

The [Xamarin PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) enables you to create, read, and edit PDF documents. It provides advanced features including merging, splitting, stamping documents, managing forms, and securing PDF files with encryption.

**Requirements:**
- Xamarin.Forms 5.0 or later (4.0+ supported)
- Visual Studio 2019 or later
- .NET Standard 2.0+

To include the Syncfusion<sup>&reg;</sup> Xamarin PDF library into your Xamarin application, please refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation.

## Project Setup

### Step 1: Create a new C# Xamarin.Forms application project
![Xamarin project creation](Xamarin_images/Xamarin_project_creation.jpg)

### Step 2: Select project template and code sharing strategy

Select a project template and target platforms (iOS, Android, UWP, etc.). For code sharing, choose **one of the following:**

- **.NET Standard (Recommended):** For new projects using shared portable assemblies across all platforms
- **Portable Class Library (PCL):** Legacy option for older Xamarin projects

For more details about code sharing strategies, refer to the [Xamarin documentation](https://learn.microsoft.com/en-us/xamarin/cross-platform/app-fundamentals/code-sharing).

![Xamarin project creation step2](Xamarin_images/Select_blank_app.jpg)

### Step 3: Install the Syncfusion PDF NuGet package

Install the [Syncfusion.Xamarin.PDF](https://www.nuget.org/packages/Syncfusion.Xamarin.PDF/) NuGet package to your portable project from [NuGet.org](https://www.nuget.org/).

![Install Xamarin PDF NuGet package](Xamarin_images/NuGet_package.jpg)

**Via Package Manager Console:**
```
Install-Package Syncfusion.Xamarin.PDF
```

### Step 3a: Configure Licensing (Required)

Starting with v16.2.0.x and later, you must register a Syncfusion license key to use the components. Add the `Syncfusion.Licensing` NuGet package and register your license key. Refer to the [licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview) for step-by-step instructions.

N> Without a valid license key, your application will throw licensing errors at runtime.

## Create the User Interface

### Step 4: Add a XAML page (if not already defined)

If no XAML page is already defined in the App class, add a new Forms XAML page:

a. Right-click the portable project and select **Add > New Item**. Choose **Forms XAML Page** and name it `MainXamlPage`.

b. In the `App.cs` file (portable project), replace the App constructor to set `MainXamlPage` as the root page:

{% tabs %}
{% highlight c# tabtitle="C#" %}

public App()
{
  //The root page of your application.
  MainPage = new MainXamlPage();
}

{% endhighlight %}
{% endtabs %}

### Step 5: Add a button to trigger PDF generation

In `MainXamlPage.xaml`, add a button that will generate the PDF document:

{% tabs %}
{% highlight XAML %}
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="GettingStarted.MainXamlPage">
  <StackLayout VerticalOptions="Center">
    <Button Text="Generate Document" Clicked="OnButtonClicked" HorizontalOptions="Center"/>
  </StackLayout>
</ContentPage>
{% endhighlight %}
{% endtabs %}

## Implement PDF Generation

### Step 6: Add required namespaces

Add the following namespaces to `MainXamlPage.xaml.cs`:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System;
using System.Drawing;
using System.IO;
using Xamarin.Forms;

{% endhighlight %}
{% endtabs %}

### Step 7: Create the PDF generation method

Add the following event handler to `MainXamlPage.xaml.cs`. This creates a PDF document using [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html), adds a page, and draws text using the [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html). The document is saved to a stream and passed to the platform-specific `ISave` service for file saving.

{% tabs %}
{% highlight c# tabtitle="C#" %}

private void OnButtonClicked(object sender, EventArgs e)
{
    try
    {
        //Create a new PDF document.
        using (PdfDocument document = new PdfDocument())
        {
            //Add a page to the document.
            PdfPage page = document.Pages.Add();
            //Create PDF graphics for the page.
            PdfGraphics graphics = page.Graphics;
            //Set the standard font.
            PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
            //Draw the text. PointF(0, 0) represents the top-left corner in pixels.
            graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
            
            //Save the document to a memory stream.
            MemoryStream stream = new MemoryStream();
            document.Save(stream);
            stream.Position = 0;
            
            //Pass the stream to the platform-specific save service.
            DependencyService.Get<ISave>().SaveAndView("Output.pdf", "application/pdf", stream);
        }
    }
    catch (Exception ex)
    {
        DisplayAlert("Error", "Error generating PDF: " + ex.Message, "OK");
    }
}

{% endhighlight %}
{% endtabs %}

## Platform-Specific Implementation

### Step 8: Define the ISave interface

Create the `ISave.cs` interface in the portable project. This interface defines the contract for platform-specific file saving implementations:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using System.IO;

public interface ISave
{
    //Method to save document as a file and view the saved document.
    void SaveAndView(string filename, string contentType, MemoryStream stream);
}

{% endhighlight %}
{% endtabs %}

### Step 9: Download and configure platform-specific implementations

Download the helper files from this [link](https://www.syncfusion.com/downloads/support/directtrac/general/ze/Helper_Class1305995392). These files provide platform-specific implementations of the `ISave` interface for each platform. Add them to the following project locations:

| Project | File Name | Location | Summary |
|---------|-----------|----------|---------|
| Portable | ISave.cs | Project root | Interface definition for save operation (shown above) |
| iOS | SaveIOS.cs | iOS project root | iOS-specific save and preview implementation |
| iOS | PreviewControllerDS.cs | iOS project root | Helper class for QuickLook PDF preview |
| Android | SaveAndroid.cs | Android project root | Android-specific save implementation |
| Windows Phone | SaveWinPhone.cs | WinPhone project root | Windows Phone save implementation (legacy) |
| UWP | SaveWindows.cs | UWP project root | UWP-specific save implementation |
| Windows 8.1 | SaveWindows81.cs | Windows project root | Windows 8.1 WinRT save implementation (legacy) |

### Step 10: Register DependencyService implementations

For each platform project, register the `ISave` implementation in the platform-specific Main class or AppDelegate:

**iOS (AppDelegate.cs):**
```csharp
LoadApplication(new App());
DependencyService.Register<SaveIOS>();
```

**Android (MainActivity.cs):**
```csharp
LoadApplication(new App());
DependencyService.Register<SaveAndroid>();
```

**UWP (App.xaml.cs):**
```csharp
DependencyService.Register<SaveWindows>();
```

### Step 11: Configure Android permissions and file provider

#### Android Configuration

Create a new XML file named `provider_paths.xml` in the `Android/Resources/xml` folder (create the xml folder if it doesn't exist):

{% tabs %}
{% highlight XML %}

<?xml version="1.0" encoding="UTF-8"?>
<paths xmlns:android="http://schemas.android.com/apk/res/android">
    <external-path
        name="external_files"
        path="." />
    <external-files-path
        name="external_files"
        path="." />
    <cache-path
        name="cache"
        path="." />
    <external-cache-path
        name="external_cache"
        path="." />
</paths>

{% endhighlight %}
{% endtabs %}

Update `Properties/AndroidManifest.xml` to add the FileProvider configuration and permissions:

{% tabs %}
{% highlight XML %}

<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
          android:versionCode="1"
          android:versionName="1.0"
          package="com.companyname.gettingstarted">
    <uses-sdk
        android:minSdkVersion="21"
        android:targetSdkVersion="33" />
    <application
        android:label="GettingStarted.Android"
        android:requestLegacyExternalStorage="true">
        <provider
            android:name="androidx.core.content.FileProvider"
            android:authorities="${applicationId}.provider"
            android:exported="false"
            android:grantUriPermissions="true">
            <meta-data
                android:name="android.support.FILE_PROVIDER_PATHS"
                android:resource="@xml/provider_paths" />
        </provider>
    </application>
    <!-- Required permissions for file access -->
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
</manifest>

{% endhighlight %}
{% endtabs %}

**For Android 11+ deployments:**

Add the following attribute to the `<application>` tag:
```xml
android:requestLegacyExternalStorage="true"
```

> **Note:** The `${applicationId}` placeholder is automatically replaced by the build system; do not edit manually. Android 6.0 (API 23+) requires runtime permissions; FileProvider handles secure file access.

#### iOS Configuration

For iOS, add the following key to `Info.plist` to describe file access usage:

```xml
<key>NSPhotoLibraryAddUsageDescription</key>
<string>This app needs access to your photo library to save PDF files.</string>
```

> **Note:** iOS uses QuickLook framework (included in helper files) for PDF preview.

### Step 12: Build and run the application

Build and execute the application on your target platform(s):

1. Click the **Generate Document** button to create the PDF
2. The platform-specific save handler will save the file to the device's default documents folder
3. A preview or native file viewer will open automatically (depending on platform)

**Expected output:** A PDF file named `Output.pdf` containing "Hello World!!!" text.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "NuGet package not found" error | Verify NuGet source is configured; ensure Syncfusion.Xamarin.PDF package version matches your .NET version |
| "ISave interface not found" or "DependencyService failed to resolve" | Ensure ISave.cs is in portable project; verify platform-specific SaveXxx.cs files exist; confirm DependencyService.Register() called in platform projects |
| "Permission denied" on Android | Verify Android/Resources/xml/provider_paths.xml exists; check AndroidManifest.xml has required permissions (READ/WRITE_EXTERNAL_STORAGE) |
| "File not saving" on device | Check device storage permissions; verify app has write access to Documents folder on iOS; ensure Android SDK version ≥21 |
| "PDF preview not showing" on iOS | Verify PreviewControllerDS.cs helper file is in iOS project; check QuickLook framework is available |
| "Handler method not found" | Ensure XAML `OnButtonClicked` matches C# method name exactly (case-sensitive) |
| "Licensing" errors at runtime | Install Syncfusion.Licensing NuGet package; register valid license key in App constructor or App.xaml.cs |

## Next Steps

- **Download [Complete Working Sample](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Xamarin/CreatePDFDocument)** — Reference implementation with all platforms
- **Try [Online Demo](https://document.syncfusion.com/demos/pdf/default#/tailwind)** — Interactive PDF generation examples
- **Migrate to [.NET MAUI](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-document-in-blazor)** — Use modern cross-platform framework (Xamarin is deprecated)
- **Explore [Syncfusion PDF Features](https://www.syncfusion.com/document-sdk/net-pdf-library)** — Complete API reference and advanced capabilities

## Sample Output

By executing the application and clicking **Generate Document**, you will get the following output:

![Xamarin output PDF document](GettingStarted_images/pdf-generation-output.png)