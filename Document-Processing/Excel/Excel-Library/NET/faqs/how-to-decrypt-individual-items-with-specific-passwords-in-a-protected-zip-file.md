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
        zipArchieve.AddFile("../../Data/FinancialReport.xlsx");
        zipArchieve.AddFile("../../Data/EmployeeDetails.pdf", "Employee");
        zipArchieve.AddFile("../../Data/ProjectDetails.docx", "Project");
        zipArchieve.AddFile("../../Data/ProductImage.png", "Image");

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
        if (args.FileName == "EmployeeDetails.pdf")
            args.Password = "Employee";
        else if (args.FileName == "ProjectDetails.docx")
            args.Password = "Project";
        else if (args.FileName == "ProductImage.png")
            args.Password = "Image";
    }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.Compression.Zip

Module Program
    Sub Main(args As String())
        ' Create the zip file with and without item password
        Dim zipArchive As New ZipArchive()
        zipArchive.AddFile("../../Data/FinancialReport.xlsx")
        zipArchive.AddFile("../../Data/EmployeeDetails.pdf", "Employee")
        zipArchive.AddFile("../../Data/ProjectDetails.docx", "Project")
        zipArchive.AddFile("../../Data/ProductImage.png", "Image")

        ' Protect the ZipArchive with a password
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
        If args.FileName = "EmployeeDetails.pdf" Then
            args.Password = "Employee"
        ElseIf args.FileName = "ProjectDetails.docx" Then
            args.Password = "Project"
        ElseIf args.FileName = "ProductImage.png" Then
            args.Password = "Image"
        End If
    End Sub
End Module
{% endhighlight %}
{% endtabs %}

## See Also

* [How to protect the zip file items with different passwords?](how-to-protect-zip-file-items-with-different-passwords)
* [How to protect the zip files using Syncfusion.Compression.Base?](how-to-protect-the-zip-files-using-syncfusion-compression-base)
* [How to un-protect the zip files using Syncfusion.Compression.Base?](how-to-un-protect-the-zip-files-using-syncfusion-compression-base)
* [How to zip files using the Syncfusion.Compression.Zip namespace?](how-to-zip-files-using-the-syncfusion-compression-zip-namespace)
* [How to zip all the files in subfolders using Syncfusion&reg; Compression?](how-to-zip-all-the-files-in-subfolders-using-syncfusion-compression)