---
title: How to decrypt individual items with specific passwords in a protected ZIP file | Syncfusion
description: This page demonstrates how to decrypt individual items with specific passwords using Syncfusion.Compression.Zip in .NET.
platform: document-processing
control: Compression
documentation: UG
---

# How to decrypt individual items with specific passwords in a protected ZIP file?

Syncfusion.Compression.Zip allows you to decrypt individual items within a protected ZIP file, each secured with a unique password. When the archive is opened, the `OnZipArchiveItemPasswordNeeded` event is raised for every encrypted entry; supplying the matching password in the event handler lets that item be extracted successfully. Items that are not encrypted (added without a per-item password) are extracted without raising the event.

The following complete code snippet explains how to create a protected ZIP file with per-item passwords and then decrypt those items by handling the `OnZipArchiveItemPasswordNeeded` event. The example uses the [ZipCrypto](https://help.syncfusion.com/cr/document-processing/Syncfusion.Compression.Zip.EncryptionAlgorithm.html) encryption algorithm.

## Prerequisites

Before running the code example, make sure the following prerequisites are met:

- Install the **Syncfusion.Compression.Base** NuGet package.
- Add the required `using` directive: `using Syncfusion.Compression.Zip;` (or `Imports Syncfusion.Compression.Zip` in VB.NET).
- The example expects input files (`FinancialReport.xlsx`, `EmployeeDetails.pdf`, `ProjectDetails.docx`, `ProductImage.png`) to exist in a `Data` folder relative to the application's working directory, and an `Output` folder to exist for the generated ZIP files.
- The example first creates `Sample.zip` and then opens it again to demonstrate the password event flow. The two `ZipArchive` instances are independent — only the second one needs the password event handler.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
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
