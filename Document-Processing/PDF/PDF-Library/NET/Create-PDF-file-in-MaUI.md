---
title: Create or Generate PDF file in MAUI | Syncfusion
description: Learn how to create or generate a PDF file in .NET MAUI with easy steps using Syncfusion .NET Core PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
---

# Create PDF file in .NET MAUI

The [.NET MAUI PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit **PDF** documents. This library also includes functions for merging, splitting, stamping, working with forms, and securing PDF files and more. Using this library, you can create a PDF document in a .NET MAUI application.

## Steps to create PDF document programmatically in .NET MAUI

{% tabcontents %}
{% tabcontent Visual Studio %}
{% include_relative tabcontent-support/Create-PDF-document-in-MaUI-Visual-Studio.md %}
{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}
{% include_relative tabcontent-support/Create-PDF-document-in-MaUI-VS-Code.md %}
{% endtabcontent %}

{% tabcontent JetBrains Rider %}
{% include_relative tabcontent-support/Create-PDF-document-in-MaUI-JetBrains.md %}
{% endtabcontent %}
{% endtabcontents %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/MAUI/CreateMAUIPDFSample).

By executing the program on Windows, you will get the PDF document as follows.
![.NET MAUI output image](MAUI_images/invoice.png)  

By executing the program on Android, you will get the PDF document as follows.
![.NET MAUI invoice android image](MAUI_images/invoice_android.png)  

By executing the program on iOS, you will get the PDF document as follows.
![.NET MAUI invoice iOS image](MAUI_images/invoice_ios.png)  

N> You can also explore our [MAUI PDF library demo](https://www.syncfusion.com/demos/fileformats/pdf-library) that shows how to create and modify PDF files from C# with only a few lines of code.

**Helper files for .NET MAUI**

Download the helper files from this [link](https://www.syncfusion.com/downloads/support/directtrac/general/ze/Helper_files-1664336865) and add them into the mentioned project. These helper files allow you to save the stream as a physical file and open the file for viewing.

<table>
  <tr>
  <td>
    <b>Folder Name</b>
  </td>
  <td>
    <b>File Name</b>
  </td>
  <td>
    <b>Summary</b>
  </td>
  </tr>
  <tr>
  <td>
    .NET MAUI Project
  </td>
  <td>
    SaveService.cs
  </td>
  <td>Represents the base class for the save operation.
  </td>
  </tr>
  <tr>
  <td>
    Windows
  </td>
  <td>
    SaveWindows.cs
  </td>
  <td>Save implementation for Windows.
  </td>
  </tr>
  <tr>
  <td>
    Android
  </td>
  <td>
    SaveAndroid.cs
  </td>
  <td>Save implementation for Android device.
  </td>
  </tr>
  <tr>
  <td>
    Mac Catalyst
  </td>
  <td>
    SaveMac.cs
  </td>
  <td>Save implementation for Mac Catalyst device.
  </td>
  </tr>
  <tr>
  <td rowspan="2">
    iOS
  </td>
  <td>
    SaveIOS.cs
  </td>
  <td>
    Save implementation for iOS device
  </td>
  </tr>
  <tr>
  <td>
    PreviewControllerDS.cs<br/>QLPreviewItemFileSystem.cs
  </td>
  <td>
    Helper classes for viewing the <b>PDF document</b> in iOS device
  </td>
  </tr>
</table>

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.

An online sample to [create a PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind) is also available.