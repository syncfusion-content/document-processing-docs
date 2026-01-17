---
title: Protect zip file items with different password | Syncfusion
description: This page demonstrates how to protect zip file items with different password using Syncfusion.Compression.Base.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to protect zip file items with different passwords using C#?

Syncfusion.Compression allows users to set a unique password for each item when creating a compressed Zip file. When the zip file is decompressed, the user can enter the password for each zip item and extract the zip items.

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

* [How to protect the zip files using Syncfusion.Compression.Base?](how-to-protect-the-zip-files-using-syncfusion-compression-base)
* [How to un-protect the zip files using Syncfusion.Compression.Base?](how-to-un-protect-the-zip-files-using-syncfusion-compression-base)
* [How to zip files using the Syncfusion.Compression.Zip namespace?](how-to-zip-files-using-the-syncfusion-compression-zip-namespace)
* [How to zip all the files in subfolders using Syncfusion&reg; Compression?](how-to-zip-all-the-files-in-subfolders-using-syncfusion-compression)