---
title: How to zip files using the Syncfusion.Compression.Zip namespace | Compression | Syncfusion
description: Code example that zips files using the Syncfusion.Compression.Zip namespace with the .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to zip files using the Syncfusion.Compression.Zip namespace?

You can compress one or more files into a zip archive by using the **Syncfusion.Compression.Zip** namespace in Syncfusion<sup>&reg;</sup> Document Processing. The following code example demonstrates how to add a file to a `ZipArchive` and save the result.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`). This transitively brings in `Syncfusion.Compression.Base` and `Syncfusion.Compression.Zip`.
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Place a `SampleFile.cs` file in the application's working directory (the path is resolved relative to `Environment.CurrentDirectory`). File paths are case-sensitive on Linux.
* Ensure the output directory is writable; `ZipArchive.Save` creates or overwrites the destination file.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.Compression.Zip;
using System.IO;

using (ZipArchive zipArchive = new Syncfusion.Compression.Zip.ZipArchive())
{
  //Pick the strongest available compression
  zipArchive.DefaultCompressionLevel = Syncfusion.Compression.CompressionLevel.Best;

  //Add the file you want to zip (resolved relative to the current working directory)
  zipArchive.AddFile("SampleFile.cs");

  //Save creates or overwrites the destination zip file
  zipArchive.Save("SyncfusionCompressFileSample.zip");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.Compression.Zip;
using System.IO;

using (ZipArchive zipArchive = new Syncfusion.Compression.Zip.ZipArchive())
{
  //Pick the strongest available compression
  zipArchive.DefaultCompressionLevel = Syncfusion.Compression.CompressionLevel.Best;

  //Add the file you want to zip (resolved relative to the current working directory)
  zipArchive.AddFile("SampleFile.cs");

  //Save creates or overwrites the destination zip file
  zipArchive.Save("SyncfusionCompressFileSample.zip");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.Compression.Zip
Imports System.IO

Using zipArchive As ZipArchive = New Syncfusion.Compression.Zip.ZipArchive()
  'Pick the strongest available compression
  zipArchive.DefaultCompressionLevel = Syncfusion.Compression.CompressionLevel.Best

  'Add the file you want to zip (resolved relative to the current working directory)
  zipArchive.AddFile("SampleFile.cs")

  'Save creates or overwrites the destination zip file
  zipArchive.Save("SyncfusionCompressFileSample.zip")
End Using
{% endhighlight %}
{% endtabs %}

T>You can use CompressionLevel to reduce the size of the file.  

For compressing directories, you can make use of the **AddDirectory** method which adds an empty directory file to a ZipArchive. If you want to add all the files inside the directory, then you should manually add these files by using the **AddItem** method.

The following code snippet illustrate how to add the file from the local drive.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.Compression.Zip;
using System.IO;

string fileName = @"SampleFile.cs";
using (ZipArchive zipArchive = new Syncfusion.Compression.Zip.ZipArchive())
{
  zipArchive.DefaultCompressionLevel = CompressionLevel.Best;

  //Stream the file from disk; wrap in a using block to release the handle
  using (Stream stream = new FileStream(fileName, FileMode.Open, FileAccess.Read))
  {
    //Cast the enum to FileAttributes because File.GetAttributes returns a boxed int
    FileAttributes attributes = (FileAttributes)File.GetAttributes(fileName);

    //ZipArchiveItem(zipArchive, nameInArchive, sourceStream, isDirectory, fileAttributes)
    //The 4th argument (true here) marks the entry as a directory; pass false for a regular file
    ZipArchiveItem item = new ZipArchiveItem(zipArchive, "SampleFile.cs", stream, false, attributes);

    zipArchive.AddItem(item);
  }

  zipArchive.Save(@"SyncfusionCompressFileSample.zip");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.Compression.Zip;
using System.IO;

string fileName = @"SampleFile.cs";
using (ZipArchive zipArchive = new Syncfusion.Compression.Zip.ZipArchive())
{
  zipArchive.DefaultCompressionLevel = CompressionLevel.Best;

  //Stream the file from disk; wrap in a using block to release the handle
  using (Stream stream = new FileStream(fileName, FileMode.Open, FileAccess.Read))
  {
    FileAttributes attributes = File.GetAttributes(fileName);

    //ZipArchiveItem(zipArchive, nameInArchive, sourceStream, isDirectory, fileAttributes)
    //The 4th argument (false here) marks the entry as a regular file
    ZipArchiveItem item = new ZipArchiveItem(zipArchive, "SampleFile.cs", stream, false, attributes);

    zipArchive.AddItem(item);
  }

  zipArchive.Save(@"SyncfusionCompressFileSample.zip");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.Compression.Zip
Imports System.IO

Dim fileName As String = "SampleFile.cs"
Using zipArchive As ZipArchive = New Syncfusion.Compression.Zip.ZipArchive()
  zipArchive.DefaultCompressionLevel = CompressionLevel.Best

  'Stream the file from disk; wrap in a Using block to release the handle
  Using stream As Stream = New FileStream(fileName, FileMode.Open, FileAccess.Read)
    Dim attributes As FileAttributes = File.GetAttributes(fileName)

    'ZipArchiveItem(zipArchive, nameInArchive, sourceStream, isDirectory, fileAttributes)
    'The 4th argument (False here) marks the entry as a regular file
    Dim item As New ZipArchiveItem(zipArchive, "SampleFile.cs", stream, False, attributes)

    zipArchive.AddItem(item)
  End Using

  zipArchive.Save("SyncfusionCompressFileSample.zip")
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to zip files using the Syncfusion.Compression.Zip namespace?](how-to-zip-files-using-the-syncfusion-compression-zip-namespace)
* [How to protect the zip files using Syncfusion.Compression.Base?](how-to-protect-the-zip-files-using-syncfusion-compression-base)
* [How to un-protect the zip files using Syncfusion.Compression.Base?](how-to-un-protect-the-zip-files-using-syncfusion-compression-base)
* [How to merge excel files from more than one workbook to a single file?](how-to-merge-excel-files-from-more-than-one-workbook-to-a-single-file)

