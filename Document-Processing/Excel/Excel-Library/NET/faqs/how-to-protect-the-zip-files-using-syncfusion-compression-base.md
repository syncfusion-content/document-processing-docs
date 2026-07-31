---
title: Protect ZIP Files with Passwords Using Compression | Syncfusion
description: Code example that protects a zip archive with a password using Syncfusion.Compression.Base encryption algorithms.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to protect the zip files using Syncfusion.Compression.Base?

A password can be used to protect zip archives that need extra security. Syncfusion<sup>&reg;</sup> Document Processing supports password-based encryption through the `Syncfusion.Compression.Base` namespace, which is consumed by `Syncfusion.Compression.Zip`'s `ZipArchive.Protect` method. The following code example demonstrates how to encrypt an archive with the AES-256 algorithm.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`). This transitively brings in `Syncfusion.Compression.Base` and `Syncfusion.Compression.Zip`.
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Place `Template1.txt`, `Template2.txt`, and `Template3.txt` in a `Data` folder two levels above the application's working directory (the path is resolved relative to `Environment.CurrentDirectory`). File paths are case-sensitive on Linux.
* Ensure the output directory is writable; `ZipArchive.Save` creates or overwrites the destination file.

## Supported encryption algorithms

The `EncryptionAlgorithm` enum (from `Syncfusion.Compression.Base`) exposes the following values:

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.Compression.Zip;

class Program
{
  static void Main(string[] args)
  {
    //ZipArchive is IDisposable; the using block flushes buffers and releases the file handle
    using (ZipArchive zipArchive = new ZipArchive())
    {
      //Add the files to be encrypted (paths are relative to the current working directory)
      zipArchive.AddFile("../../Data/Template1.txt");
      zipArchive.AddFile("../../Data/Template2.txt");
      zipArchive.AddFile("../../Data/Template3.txt");

      //Encrypt the archive with a password and the AES-256 algorithm
      //Replace "YOUR_PASSWORD" with a strong password read from a secure store
      zipArchive.Protect("YOUR_PASSWORD", EncryptionAlgorithm.AES256);

      //Save the encrypted archive
      zipArchive.Save("WithPassword256Bit.zip");
    }
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.Compression.Zip;

class Program
{
  static void Main(string[] args)
  {
    //ZipArchive is IDisposable; the using block flushes buffers and releases the file handle
    using (ZipArchive zipArchive = new ZipArchive())
    {
      //Add the files to be encrypted (paths are relative to the current working directory)
      zipArchive.AddFile("../../Data/Template1.txt");
      zipArchive.AddFile("../../Data/Template2.txt");
      zipArchive.AddFile("../../Data/Template3.txt");

      //Encrypt the archive with a password and the AES-256 algorithm
      //Replace "YOUR_PASSWORD" with a strong password read from a secure store
      zipArchive.Protect("YOUR_PASSWORD", EncryptionAlgorithm.AES256);

      //Save the encrypted archive
      zipArchive.Save("WithPassword256Bit.zip");
    }
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.Compression.Zip

Module Module1
  Sub Main()
    'ZipArchive is IDisposable; the Using block flushes buffers and releases the file handle
    Using zipArchive As ZipArchive = New ZipArchive()
      'Add the files to be encrypted (paths are relative to the current working directory)
      zipArchive.AddFile("../../Data/Template1.txt")
      zipArchive.AddFile("../../Data/Template2.txt")
      zipArchive.AddFile("../../Data/Template3.txt")

      'Encrypt the archive with a password and the AES-256 algorithm
      'Replace "YOUR_PASSWORD" with a strong password read from a secure store
      zipArchive.Protect("YOUR_PASSWORD", EncryptionAlgorithm.AES256)

      'Save the encrypted archive
      zipArchive.Save("WithPassword256Bit.zip")
    End Using
  End Sub
End Module
{% endhighlight %}
{% endtabs %}

## See Also

* [How to un-protect the zip files using Syncfusion.Compression.Base?](how-to-un-protect-the-zip-files-using-syncfusion-compression-base)
* [How to zip files using the Syncfusion.Compression.Zip namespace?](how-to-zip-files-using-the-syncfusion-compression-zip-namespace)
* [How to zip all the files in subfolders using Syncfusion&reg; Compression?](how-to-zip-all-the-files-in-subfolders-using-syncfusion-compression)
* [How to protect certain cells in a worksheet?](how-to-protect-certain-cells-in-a-worksheet)
* [How to protect Excel workbook?](https://help.syncfusion.com/file-formats/xlsio/migrate-from-office-automation-to-syncfusion-xlsio/protect-excel-workbook)
* [How to protect worksheet?](https://help.syncfusion.com/file-formats/xlsio/security#protect-worksheet)
