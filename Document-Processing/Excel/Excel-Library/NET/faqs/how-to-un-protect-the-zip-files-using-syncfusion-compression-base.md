---
title: Un-protect zip files using Syncfusion.Compression.Base | Syncfusion
description: Learn how to unprotect and extract password-encrypted ZIP archives using Syncfusion.Compression.Base with code examples.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to un-protect the zip files using Syncfusion.Compression.Base?

A password-protected zip archive can be decrypted and re-saved without a password by using the `ZipArchive.UnProtect` method. This article is the counterpart to the [How to protect zip files with a password using Syncfusion.Compression.Base?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-protect-the-zip-files-using-syncfusion-compression-base) article. The following code example demonstrates how to open a protected archive, decrypt it with the original password, and save the result as a plain (unprotected) zip.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`). This transitively brings in `Syncfusion.Compression.Base` and `Syncfusion.Compression.Zip`.
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Have a password-protected zip archive (for example, `Protected.zip`) located in a `Data` folder two levels above the application's working directory. The path is resolved relative to `Environment.CurrentDirectory`; file paths are case-sensitive on Linux.
* Know the password that was used to encrypt the archive. `UnProtect` only removes the password from the in-memory archive; the source file is not modified.
* Ensure the output directory is writable; `ZipArchive.Save` creates or overwrites the destination file.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.Compression.Zip;
using System.IO;

class Program
{
  static void Main(string[] args)
  {
    //ZipArchive is IDisposable; the using block flushes buffers and releases the file handle
    using (ZipArchive zipArchive = new ZipArchive())
    {
      //Open the protected archive.
      //The 2nd argument (false) means "do not leave the stream open" — the archive owns it
      //Replace "YOUR_PASSWORD" with the password used to encrypt the source archive
      zipArchive.Open(
        new FileStream("../../Data/Protected.zip", FileMode.Open, FileAccess.Read),
        false,
        "password");

      //Remove the password from the in-memory archive
      zipArchive.UnProtect();

      //Save the archive without a password (overwrites if the destination exists)
      zipArchive.Save("WithoutPassword.zip");
    }
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.Compression.Zip;
using System.IO;

class Program
{
  static void Main(string[] args)
  {
    //ZipArchive is IDisposable; the using block flushes buffers and releases the file handle
    using (ZipArchive zipArchive = new ZipArchive())
    {
      //Open the protected archive.
      //The 2nd argument (false) means "do not leave the stream open" — the archive owns it
      //Replace "YOUR_PASSWORD" with the password used to encrypt the source archive
      zipArchive.Open(
        new FileStream("../../Data/Protected.zip", FileMode.Open, FileAccess.Read),
        false,
        "password");

      //Remove the password from the in-memory archive
      zipArchive.UnProtect();

      //Save the archive without a password (overwrites if the destination exists)
      zipArchive.Save("WithoutPassword.zip");
    }
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.Compression.Zip
Imports System.IO

Module Module1
  Sub Main()
    'ZipArchive is IDisposable; the Using block flushes buffers and releases the file handle
    Using zipArchive As ZipArchive = New ZipArchive()
      'Open the protected archive.
      'The 2nd argument (False) means "do not leave the stream open" — the archive owns it
      'Replace "YOUR_PASSWORD" with the password used to encrypt the source archive
      zipArchive.Open(
        New FileStream("../../Data/Protected.zip", FileMode.Open, FileAccess.Read),
        False,
        "password")

      'Remove the password from the in-memory archive
      zipArchive.UnProtect()

      'Save the archive without a password (overwrites if the destination exists)
      zipArchive.Save("WithoutPassword.zip")
    End Using
  End Sub
End Module
{% endhighlight %}
{% endtabs %}

## See Also

* [How to protect the zip files using Syncfusion.Compression.Base?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-protect-the-zip-files-using-syncfusion-compression-base)
* [How to zip files using the Syncfusion.Compression.Zip namespace?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-zip-files-using-the-syncfusion-compression-zip-namespace)
* [How to zip all the files in subfolders using Syncfusion&reg; Compression?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-zip-all-the-files-in-subfolders-using-syncfusion-compression)
* [How to protect certain cells in a worksheet?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-protect-certain-cells-in-a-worksheet)
* [How to unprotect Excel workbook?](https://help.syncfusion.com/document-processing/excel/excel-library/net/migrate-from-office-automation-to-syncfusion-xlsio/unprotect-excel-workbook)
* [How to protect worksheet?](https://help.syncfusion.com/document-processing/excel/excel-library/net/security#protect-worksheet)
