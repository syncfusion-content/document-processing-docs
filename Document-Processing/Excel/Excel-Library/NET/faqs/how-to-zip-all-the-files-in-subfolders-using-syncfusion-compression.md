---
title: Zip all files in subfolders using Syncfusion's Compression |Syncfusion
description: This page illustrates with an example to zip all the files in subfolders using the Syncfusion.Compression.Zip namespace.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to zip all the files in subfolders using Syncfusion's Compression?

You can compress and decompress the files with our Compression library. The following code example illustrates this. Additionally, it shows how to delete the source files from the given path after compression.

{% tabs %} 
{% highlight c# tabtitle="C# [Windows-specific]" %}
using System;
using System.Collections.Generic;
using System.IO;
using Syncfusion.Compression.Zip;

class Program
{
  private static List<DirectoryInfo> arrOfItems = new List<DirectoryInfo>();
  private static ZipArchive zipArchive = new ZipArchive();
  private static string folderPath = "D:\\Compress"; // Enter the folder path
  private static List<Stream> arrOfStreamItems = new List<Stream>();

  private static void SubFoldersFiles(string path)
  {
    DirectoryInfo dInfo = new DirectoryInfo(path);
    foreach (DirectoryInfo d in dInfo.GetDirectories())
    {
      SubFoldersFiles(d.FullName);
      arrOfItems.Add(d);
    }
  }

  // Zip and save the file.
  private static void ZipAndSave()
  {
    SubFoldersFiles(folderPath);
    if (Directory.Exists(folderPath))
    {
      AddRootFiles();
      AddSubFoldersFiles();

      // Saving zipped file.
      zipArchive.Save("../../Output/CompressedFile.zip");
      zipArchive.Close();

      Console.WriteLine("Files Zipped successfully!");

      // Delete the source files
      DeleteFolderContents(folderPath);
    }
  }

  private static void AddRootFiles()
  {
    string fileName = "";
    foreach (string rootFiles in Directory.GetFiles(folderPath))
    {
      // Creating the stream from file
      FileStream filestream = new FileStream(rootFiles, FileMode.Open, FileAccess.ReadWrite);

      // Getting the File Name alone and ignoring the directory path
      fileName = Path.GetFileName(rootFiles);

      FileAttributes attribute = File.GetAttributes(rootFiles);
      zipArchive.AddItem(fileName, filestream, false, attribute);

      // Adding the file stream to the list for later disposal
      arrOfStreamItems.Add(filestream);
    }
  }

  private static void AddSubFoldersFiles()
  {
    foreach (DirectoryInfo dInfo in arrOfItems)
    {
      FileInfo[] fInfo = dInfo.GetFiles();
      string mainDirectoryPath = Path.GetFullPath(folderPath);
      foreach (FileInfo file in fInfo)
      {
        // Get the File name with its current folder and ignoring the Main Directory
        string fileName = file.FullName.Replace(mainDirectoryPath + "\\", "");

        // Read the file stream by its Full name
        FileStream folderStream = new FileStream(file.FullName, FileMode.Open, FileAccess.ReadWrite);
        FileAttributes attributes = File.GetAttributes(file.FullName);

        // Add the item to the zip Archive
        zipArchive.AddItem(fileName, folderStream, true, attributes);

        // Adding the folder stream to the list for later disposal
        arrOfStreamItems.Add(folderStream);
      }
    }
  }

  // Unzipping the Folder
  private static void UnZipFiles()
  {
    ZipArchive zip = new ZipArchive();
    string path = "../../Output/UnZippedFile";
    zip.Open("../../Output/CompressedFile.zip");
    if (!Directory.Exists(path))
    {
      Directory.CreateDirectory(path);
    }

    // Saving the contents of zip file to disk.
    for (int i = 0; i < zip.Count; i++)
    {
      ZipArchiveItem item = zip[i];
      string itemName = path + item.ItemName;

      // checking whether the item is root file
      if (itemName.Contains("/"))
      {
        itemName = itemName.Replace("/", "\\");
      }

      // Check whether the Directory is present or not
      if (!Directory.Exists(itemName) || itemName.Contains("\\"))
      {
          int index = itemName.LastIndexOf("\\");
          if (index >= 0)
          {
              string directoryPath = itemName.Remove(index, itemName.Length - index);
              Directory.CreateDirectory(directoryPath);
          }
      }

      using (FileStream fileStream = new FileStream(itemName, FileMode.OpenOrCreate, FileAccess.ReadWrite))
      {
          MemoryStream memoryStream = item.DataStream as MemoryStream;
          memoryStream.WriteTo(fileStream);
          fileStream.Flush();
      }
    }
    Console.WriteLine("File has been Unzipped");
  }

  // Delete the source folder files
  private static void DeleteFolderContents(string path)
  {
    foreach (Stream stream in arrOfStreamItems)
    {
      stream.Dispose();
    }

    if (path != null && Directory.Exists(path))
    {
      // Delete all files within the directory
      foreach (string file in Directory.GetFiles(path))
      {
        File.Delete(file);
      }

      // Delete all subdirectories and their contents recursively
      foreach (string directory in Directory.GetDirectories(path))
      {
        DeleteFolder(directory);
      }

      Console.WriteLine("Folder contents deleted successfully!");
    }
  }

  private static void DeleteFolder(string path)
  {
    if (path != null && Directory.Exists(path))
    {
      // Delete all files within the directory
      foreach (string file in Directory.GetFiles(path))
      {
        File.Delete(file);
      }

      // Delete all subdirectories and their contents recursively
      foreach (string directory in Directory.GetDirectories(path))
      {
        DeleteFolder(directory);
      }

      // Finally, delete the directory itself
      Directory.Delete(path);
      Console.WriteLine("Folder deleted successfully!");
    }
  }

  static void Main(string[] args)
  {
    ZipAndSave();
    UnZipFiles();
  }
}

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.Compression.Zip
Imports System.IO
Module Module1
  Private arrOfItems As New List(Of DirectoryInfo)()
  Private zipArchive As New ZipArchive()
  Private folderPath As String = "D:\Compress" 'Enter the folder path 
  Private arrOfStreamItems As New List(Of Stream)()

  Private Sub SubFoldersFiles(path As String)
    Dim dInfo As New DirectoryInfo(path)
    For Each d As DirectoryInfo In dInfo.GetDirectories()
      SubFoldersFiles(d.FullName)
      arrOfItems.Add(d)
    Next
  End Sub

  ' Zip and save the file.
  Private Sub ZipAndSave()
    SubFoldersFiles(folderPath)
    If Directory.Exists(folderPath) Then
        AddRootFiles()
        AddSubFoldersFiles()

        ' Saving zipped file.
        zipArchive.Save("../../Output/CompressedFile.zip")
        zipArchive.Close()

        Console.WriteLine("Files Zipped successfully!")
        ' Delete the source files
        DeleteFolderContents(folderPath)
    End If
  End Sub

  Private Sub AddRootFiles()
    Dim fileName As String = ""
    For Each rootFiles As String In Directory.GetFiles(folderPath)
      ' Creating the stream from file
      Dim filestream As New FileStream(rootFiles, FileMode.Open, FileAccess.ReadWrite)

      ' Getting the File Name alone and ignoring the directory path
      fileName = Path.GetFileName(rootFiles)
      Dim attribute As FileAttributes = File.GetAttributes(rootFiles)
      zipArchive.AddItem(fileName, filestream, False, attribute)

      'Adding the file stream to the list for later disposal
      arrOfStreamItems.Add(filestream)
    Next
  End Sub

  Private Sub AddSubFoldersFiles()
    For Each dInfo As DirectoryInfo In arrOfItems
      Dim fInfo As FileInfo() = dInfo.GetFiles()
      Dim mainDirectoryPath As String = Path.GetFullPath(folderPath)
      For Each file__1 As FileInfo In fInfo
        ' Get the File name with its current folder and ignoring the Main Directory
        Dim fileName As String = file__1.FullName.Replace(mainDirectoryPath + "\", "")

        ' Read the file stream by its Full name
        Dim folderStream As New FileStream(file__1.FullName, FileMode.Open, FileAccess.ReadWrite)
        Dim attributes As FileAttributes = File.GetAttributes(file__1.FullName)

        ' Add the item to the zip Archive
        zipArchive.AddItem(fileName, folderStream, True, attributes)

        'Adding the folder stream to the list for later disposal
        arrOfStreamItems.Add(folderStream)
      Next
    Next
  End Sub

  ' Unzipping the Folder
  Private Sub UnZipFiles()
    Dim zip As New ZipArchive()
    Dim path As String = "../../Output/UnZippedFile"
    zip.Open("../../Output/CompressedFile.zip")
    If Not Directory.Exists(path) Then
      Directory.CreateDirectory(path)
    End If

    ' Saving the contents of zip file to disk.
    For i As Integer = 0 To zip.Count - 1
      Dim item As ZipArchiveItem = zip(i)
      Dim itemName As String = path + item.ItemName

      ' checking whether the item is root file
      If itemName.Contains("/") Then
        itemName = itemName.Replace("/", "\")
      End If

      ' Check whether the Directory is present or not
      If Not Directory.Exists(itemName) OrElse itemName.Contains("\") Then
          Dim index As Integer = itemName.LastIndexOf("\")
          If index >= 0 Then
            Dim directoryPath As String = itemName.Remove(index, itemName.Length - index)
            Directory.CreateDirectory(directoryPath)
          End If
      End If

      Using fileStream As New FileStream(itemName, FileMode.OpenOrCreate, FileAccess.ReadWrite)
        Dim memoryStream As MemoryStream = TryCast(item.DataStream, MemoryStream)
        memoryStream.WriteTo(fileStream)
        fileStream.Flush()
      End Using
    Next

    Console.WriteLine("File has been Unzipped")
  End Sub

  'Delete the source folder files
  Private Sub DeleteFolderContents(path As String)
    For Each stream As Stream In arrOfStreamItems
      stream.Dispose()
    Next
    For Each stream As Stream In arrOfStreamItems
      stream.Dispose()
    Next
    If path IsNot Nothing AndAlso Directory.Exists(path) Then
      ' Delete all files within the directory
      For Each file As String In Directory.GetFiles(path)
        System.IO.File.Delete(file)
      Next

      ' Delete all subdirectories and their contents recursively
      For Each directorys As String In Directory.GetDirectories(path)
        DeleteFolder(directorys)
      Next

        Console.WriteLine("Folder contents deleted successfully!")
    End If
  End Sub

  Private Sub DeleteFolder(path As String)
    If path IsNot Nothing AndAlso Directory.Exists(path) Then
      ' Delete all files within the directory
      For Each file As String In Directory.GetFiles(path)
        System.IO.File.Delete(file)
      Next

      ' Delete all subdirectories and their contents recursively
      For Each directorys As String In Directory.GetDirectories(path)
        DeleteFolder(directorys)
      Next

      ' Finally, delete the directory itself
      Directory.Delete(path)
      Console.WriteLine("Folder deleted successfully!")
    End If
  End Sub

  Sub Main(args As String())
    ZipAndSave()
    UnZipFiles()
    DeleteFolderContents(folderPath)
  End Sub
End Module
{% endhighlight %}
{% endtabs %}  

## See Also

* [How to zip files using the Syncfusion.Compression.Zip namespace?](https://help.syncfusion.com/file-formats/xlsio/faqs/how-to-zip-files-using-the-syncfusion-compression-zip-namespace)
* [How to protect the zip files using Syncfusion.Compression.Base?](https://help.syncfusion.com/file-formats/xlsio/faqs/how-to-protect-the-zip-files-using-syncfusion-compression-base)
* [How to un-protect the zip files using Syncfusion.Compression.Base?](https://help.syncfusion.com/file-formats/xlsio/faqs/how-to-un-protect-the-zip-files-using-syncfusion-compression-base)
* [How to merge excel files from more than one workbook to a single file?](https://help.syncfusion.com/file-formats/xlsio/faqs/how-to-merge-excel-files-from-more-than-one-workbook-to-a-single-file)
