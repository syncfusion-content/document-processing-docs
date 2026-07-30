---
title: How to protect zip file items with different passwords? | XlsIO | Syncfusion
description: Explains how to set a unique password for each item in a Syncfusion.Compression.Zip archive, with a C# and VB.NET example.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to protect zip file items with different passwords?

The [`Syncfusion.Compression.Zip`](https://help.syncfusion.com/cr/document-processing/Syncfusion.Compression.Zip.ZipArchive.html) namespace lets you set a unique password for each item in a zip archive. When the archive is decompressed, the user is prompted for the password of each protected item before it can be extracted. This article shows how to create such an archive using the `ZipCrypto` encryption algorithm.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.Compression.Base](https://www.nuget.org/packages/Syncfusion.Compression.Base) NuGet package (this provides both `Syncfusion.Compression` and `Syncfusion.Compression.Zip`).
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Provide three input files at the relative path `../../Data/` (`InputTemplate1.xlsx`, `InputTemplate2.xlsx`, `InputTemplate3.xlsx`). The files can be any content; the example does not read them.
* Ensure the `../../Output/` directory exists or is creatable. Create it with `Directory.CreateDirectory("../../Output");` if it does not exist.
* Ensure the working directory and `../../Output/` are writable.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.Compression;
using Syncfusion.Compression.Zip;
class Program
{
  static void Main(string[] args)
  {
        //Initialize ZipArchive
        ZipArchive zipArchive = new ZipArchive();
        zipArchive.DefaultCompressionLevel = CompressionLevel.Best;

        //Add the file without password you want to zip.
        zipArchive.AddFile(@"../../Data/InputTemplate1.xlsx");

        //Add the file with password you want to zip
        zipArchive.AddFile(@"../../Data/InputTemplate2.xlsx", "password2");
        zipArchive.AddFile(@"../../Data/InputTemplate3.xlsx", "password3");

        //Protect the ZipArchive with password
        zipArchive.Protect("password", EncryptionAlgorithm.ZipCrypto);

        //Save the ZipArchive
        zipArchive.Save(@"../../Output/Output.zip");
        zipArchive.Close();
    }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.Compression;
using Syncfusion.Compression.Zip;
class Program
{
  static void Main(string[] args)
  {
        //Initialize ZipArchive
        ZipArchive zipArchive = new ZipArchive();
        zipArchive.DefaultCompressionLevel = CompressionLevel.Best;

        //Add the file without password you want to zip.
        zipArchive.AddFile(@"../../Data/InputTemplate1.xlsx");

        //Add the file with password you want to zip
        zipArchive.AddFile(@"../../Data/InputTemplate2.xlsx", "password2");
        zipArchive.AddFile(@"../../Data/InputTemplate3.xlsx", "password3");

        //Protect the ZipArchive with password
        zipArchive.Protect("password", EncryptionAlgorithm.ZipCrypto);

        //Save the ZipArchive
        zipArchive.Save(@"../../Output/Output.zip");
        zipArchive.Close();
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.Compression
Imports Syncfusion.Compression.Zip

Module Program
    Sub Main(args As String())
        'Initialize ZipArchive
        Dim zipArchive As New ZipArchive()
        zipArchive.DefaultCompressionLevel = CompressionLevel.Best

        'Add the file without password you want to zip.
        zipArchive.AddFile("../../Data/InputTemplate1.xlsx")

        'Add the files with password you want to zip.
        zipArchive.AddFile("../../Data/InputTemplate2.xlsx", "password2")
        zipArchive.AddFile("../../Data/InputTemplate3.xlsx", "password3")

        'Protect the ZipArchive with password
        zipArchive.Protect("password", EncryptionAlgorithm.ZipCrypto)

        'Save the ZipArchive
        zipArchive.Save("../../Output/Output.zip")
        zipArchive.Close()
    End Sub
End Module

{% endhighlight %}
{% endtabs %}

## See Also

* [How to protect zip files with Syncfusion.Compression.Base?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-protect-the-zip-files-using-syncfusion-compression-base)
* [How to unprotect zip files with Syncfusion.Compression.Base?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-un-protect-the-zip-files-using-syncfusion-compression-base)
* [How to zip files with the Syncfusion.Compression.Zip namespace?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-zip-files-using-the-syncfusion-compression-zip-namespace)
* [How to zip all files in subfolders with Syncfusion<sup>&reg;</sup> Compression?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-zip-all-the-files-in-subfolders-using-syncfusion-compression)
* [ZipArchive API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.Compression.Zip.ZipArchive.html)
* [Syncfusion.Compression.Base NuGet package](https://www.nuget.org/packages/Syncfusion.Compression.Base)
