---
title: Decrypt individual items with specific passwords | Syncfusion
description: This page demonstrates how to decrypt individual items with specific passwords using Syncfusion.Compression.Base.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to decrypt individual items with specific passwords using C#?

Syncfusion.Compression allows users to decrypt individual items within a protected ZIP file, each secured with a unique password. When decompressing the ZIP file, you can provide the correct password for each item to extract it successfully.

The following complete code snippet explains how to decrypt individual items in a ZIP file using the ZipCrypto encryption algorithm.

{% tabs %}
{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.Compression.Zip;

class Program
{
    static void Main(string[] args)
    {
        //Create the zip file with and without item password
        ZipArchive zipArchieve = new ZipArchive();
        zipArchieve.AddFile("../../Data/Sample.xlsx");
        zipArchieve.AddFile("../../Data/Sample1.xlsx", "Syncfusion1");
        zipArchieve.AddFile("../../Data/Sample2.xlsx", "Syncfusion2");
        zipArchieve.AddFile("../../Data/Sample3.xlsx", "Syncfusion3");

        //Protect the ZipArchive with password
        zipArchieve.Protect("ZipCompression", EncryptionAlgorithm.ZipCrypto);

        //Save the Zip file
        zipArchieve.Save("../../Output/Sample.zip");

        //Open the created zip file for reading
        zipArchieve = new ZipArchive();

        //Decrypt individual items with their specific passwords in the protected Zip file
        zipArchieve.OnZipArchiveItemPasswordNeeded += ZipArchieve_OnZipArchiveItemPasswordNeeded;

        zipArchieve.Open("../../Output/Sample.zip", "ZipCompression");

        //Save the modified zip file
        zipArchieve.Save("../../Output/Resave.zip");
        zipArchieve.Dispose();
    }

    // Event handler to provide passwords for individual items in the zip archive
    private static void ZipArchieve_OnZipArchiveItemPasswordNeeded(object sender, ZipArchiveItemPasswordEventArgs args)
    {
        if (args.FileName == "Sample1.xlsx")
            args.Password = "Syncfusion1";
        else if (args.FileName == "Sample2.xlsx")
            args.Password = "Syncfusion2";
        else if (args.FileName == "Sample3.xlsx")
            args.Password = "Syncfusion3";
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.Compression.Zip

Module Program
    Sub Main(args As String())
        ' Create the zip file with and without item password
        Dim zipArchive As New ZipArchive()
        zipArchive.AddFile("../../Data/Sample.xlsx") ' No password for this file
        zipArchive.AddFile("../../Data/Sample1.xlsx", "Syncfusion1") ' Item-specific password
        zipArchive.AddFile("../../Data/Sample2.xlsx", "Syncfusion2") ' Item-specific password
        zipArchive.AddFile("../../Data/Sample3.xlsx", "Syncfusion3") ' Item-specific password

        ' Protect the ZipArchive with a global password
        zipArchive.Protect("ZipCompression", EncryptionAlgorithm.ZipCrypto)

        ' Save the zip file
        zipArchive.Save("../../Output/Sample.zip")

        ' Open the created zip file for reading
        zipArchive = New ZipArchive()

        ' Decrypt individual items with their specific passwords in the protected Zip file
        AddHandler zipArchive.OnZipArchiveItemPasswordNeeded, AddressOf ZipArchive_OnZipArchiveItemPasswordNeeded

        zipArchive.Open("../../Output/Sample.zip", "ZipCompression")

        ' Save the modified zip file
        zipArchive.Save("../../Output/Resave.zip")
        zipArchive.Dispose()
    End Sub

    ' Event handler to provide passwords for individual items in the zip archive
    Private Sub ZipArchive_OnZipArchiveItemPasswordNeeded(sender As Object, args As ZipArchiveItemPasswordEventArgs)
        If args.FileName = "Sample1.xlsx" Then
            args.Password = "Syncfusion1"
        ElseIf args.FileName = "Sample2.xlsx" Then
            args.Password = "Syncfusion2"
        ElseIf args.FileName = "Sample3.xlsx" Then
            args.Password = "Syncfusion3"
        End If
    End Sub
End Module
{% endhighlight %}
{% endtabs %}

## See Also

* [How to protect the zip file items with different passwords?](how-to-protect-zip-file-items-with-different-passwords)
* [How to protect the zip files using Syncfusion.Compression.Base?](how-to-protect-the-zip-files-using-syncfusion-compression-base.md)
* [How to un-protect the zip files using Syncfusion.Compression.Base?](how-to-un-protect-the-zip-files-using-syncfusion-compression-base)
* [How to zip files using the Syncfusion.Compression.Zip namespace?](how-to-zip-files-using-the-syncfusion-compression-zip-namespace)
* [How to zip all the files in subfolders using Syncfusion&reg; Compression?](how-to-zip-all-the-files-in-subfolders-using-syncfusion-compression)