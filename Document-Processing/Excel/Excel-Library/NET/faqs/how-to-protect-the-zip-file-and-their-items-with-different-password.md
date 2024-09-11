---
title: Protect the zip files and their items with password | Syncfusion
description: This page demonstrates how to protect the zip files and their items with password using Syncfusion.Compression.Base.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to protect the zip files and their items with password?

In Syncfusion, you can protect the entire zip file or assign individual passwords to specific items within the archive.

Some items may not require a password, while others can have unique passwords for enhanced security, providing flexibility in selectively protecting files within the same zip archive.

The following complete code snippet explains how to protect a zip file and its items with passwords using the ZipCrypto encryption algorithm.

{% tabs %}
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
        zipArchive.AddFile(@"../../Data/InputTemplate2.xlsx.cs", "password2");
        zipArchive.AddFile(@"../../Data/InputTemplate3.xlsx.cs", "password3");

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

* [How to protect the zip files using Syncfusion.Compression.Base?](how-to-protect-the-zip-files-using-syncfusion-compression-base.md)
* [How to un-protect the zip files using Syncfusion.Compression.Base?](how-to-un-protect-the-zip-files-using-syncfusion-compression-base)
* [How to zip files using the Syncfusion.Compression.Zip namespace?](how-to-zip-files-using-the-syncfusion-compression-zip-namespace)
* [How to zip all the files in subfolders using Syncfusion Compression?](how-to-zip-all-the-files-in-subfolders-using-syncfusion-compression)