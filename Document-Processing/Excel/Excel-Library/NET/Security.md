---
title: Security in Excel (XlsIO) Library | Excel Protected View | Syncfusion
description: This section explains all about the security feature(Excel Protected View) of the Syncfusion Excel (XlsIO) Library and more.
platform: document-processing
control: XlsIO
documentation: UG
---

# Security in Excel (XlsIO) Library (Excel Protected View)

You can protect an anonymous user from viewing, moving, editing or deleting important data from a worksheet or workbook by [protecting a worksheet or workbook](https://support.microsoft.com/en-gb/office/protect-a-workbook-7e365a4d-3e89-4616-84ca-1931257c1517?redirectSourcePath=%252fen-us%252farticle%252fPassword-protect-worksheet-or-workbook-elements-dbf706e0-ba22-4a08-84d8-552db16eef11#bmprotectelements), with or without a password.

To quickly encrypt and decrypt an Excel document with the .NET Excel (XlsIO) Library, please check out this video:
{% youtube "https://www.youtube.com/watch?v=XzpA97zNubo" %}

N> Encrypt and Decrypt can be performed by referring .NET Standard assemblies in UWP platform. 

## Protect Workbook

To keep others from making structural changes to your documents such as moving, deleting and adding sheets, you can protect the workbook in the following ways. 

**Encryption** **with** **password**

There are two different passwords to encrypt a document.

1. **Password** **To** **Open** **-** This password helps to protect your workbook from unauthorized viewing or accessing.
2. **Password** **to** **Modify** **-** This password helps to allow give specific users permission to modify the workbook data and save changes to the file.

**Read****-****Only** **Recommended** **–** If the excel file is set as Read-only recommended, then Microsoft Excel displays a message recommending that you open the workbook as read-only when users open the excel file. This can be set with or without requiring a password to open the file.

The Following code snippets illustrate how to achieve the above options.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/XlsIO-Excel-Protect-UnProtect/Encrypt-Excel/.NET/Encrypt-Excel/Encrypt-Excel/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	//Open Excel
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputExcel.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Encrypt workbook with password
	workbook.PasswordToOpen = "syncfusion";                
	
	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/EncryptedWorkbook.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);

  //Encrypt the workbook with password
  workbook.PasswordToOpen = "password";

  //Set the password to modify the workbook
  workbook.SetWriteProtectionPassword("modify_password");

  //Set the workbook as read-only
  workbook.ReadOnlyRecommended = true;

  workbook.SaveAs("Encrypt.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)

  'Encrypt the workbook with password
  workbook.PasswordToOpen = "password"

  'Set the password to modify the workbook
  workbook.SetWriteProtectionPassword("modify_password")

  'Set the workbook as read-only
  workbook.ReadOnlyRecommended = True

  workbook.SaveAs("Encrypt.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

Now, the encrypted workbook can be saved. Refer [Save Excel file](https://help.syncfusion.com/document-processing/excel/excel-library/net/loading-and-saving-workbook#saving-a-excel-workbook-to-file-system). 

A complete working example to encrypt a workbook in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/XlsIO-Excel-Protect-UnProtect/Encrypt-Excel/.NET/Encrypt-Excel).

**Opening** **an** **encrypted** **workbook**

You can open an existing encrypted workbook (decrypting) from either the file system or the stream using the following overloads.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Creates a new instance for ExcelEngine
ExcelEngine excelEngine = new ExcelEngine();

//Loads or open an existing workbook through Open method of IWorkbooks
IWorkbook workbook = excelEngine.Excel.Workbooks.Open(workbookStream, ExcelParseOptions.Default, false, "password");
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Creates a new instance for ExcelEngine
ExcelEngine excelEngine = new ExcelEngine();

//Loads or open an existing workbook through Open method of IWorkbooks
IWorkbook workbook = excelEngine.Excel.Workbooks.Open(fileName, ExcelParseOptions.Default, false, "password");
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Creates a new instance for ExcelEngine
Dim excelEngine As New ExcelEngine()

'Loads or open an existing workbook through Open method of IWorkbooks
Dim workbook As IWorkbook = excelEngine.Excel.Workbooks.Open(fileName, ExcelParseOptions.Default, False, "password")
{% endhighlight %}
{% endtabs %}

**Removing** **encryption**

The following code illustrates how to remove a protection for an encrypted document.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/XlsIO-Excel-Protect-UnProtect/Decrypt-Excel/.NET/Decrypt-Excel/Decrypt-Excel/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	
	//Open encrypted Excel document with password
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/EncryptedWorkbook.xlsx"), ExcelParseOptions.Default, false, "syncfusion");
	IWorksheet worksheet = workbook.Worksheets[0];

	//Decrypt workbook
	workbook.PasswordToOpen = string.Empty;
	
	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/DecryptedWorkbook.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = excelEngine.Excel.Workbooks.Open("Sample.xlsx", ExcelParseOptions.Default, true, "password");

  //Removing a protection
  workbook.PasswordToOpen = string.Empty;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = excelEngine.Excel.Workbooks.Open("Sample.xlsx", ExcelParseOptions.Default, True, "password")

  'Removing a protection
  workbook.PasswordToOpen = String.Empty

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to decrypt a workbook in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/XlsIO-Excel-Protect-UnProtect/Decrypt-Excel/.NET/Decrypt-Excel).

N> By default, Microsoft Excel uses AES-128 encryption for versions Excel 2007 and above, and MD5 encryption for versions Excel97 to 2003 when providing the password for Excel documents. So, XlsIO uses the same encryptions for password protection based on the Excel versions.

### Protect workbook elements

XlsIO provides options to protect and unprotect workbook elements with password. The following code example illustrates how to protect a workbook with a password.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/XlsIO-Excel-Protect-UnProtect/Protect-Workbook/.NET/Protect-Workbook/ProtectWorkbook/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	//Open Excel
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputWorkbook.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Protect workbook with password
	workbook.Protect(true, true, "syncfusion");
	
	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/ProtectedWorkbook.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");

  bool isProtectWindow = true;
  bool isProtectContent = true;

  //Protect Workbook
  workbook.Protect(isProtectWindow, isProtectContent, "password");

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("ProtectWorkbook.xlsx")

  Dim isProtectWindow As Boolean = True
  Dim isProtectContent As Boolean = True

  'protect workbook
  workbook.Protect(isProtectWindow, isProtectContent, "password")

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to protect a workbook in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/XlsIO-Excel-Protect-UnProtect/Protect-Workbook/.NET/Protect-Workbook).

### Unprotect Workbook elements

You can unprotect or remove protection for a workbook as shown below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/XlsIO-Excel-Protect-UnProtect/UnProtect-Workbook/.NET/UnProtect-Workbook/UnProtectWorkbook/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	//Open Excel
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputWorkbook.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//UnProtect workbook with password
	workbook.Unprotect("syncfusion");
	
	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/UnProtectedWorkbook.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("ProtectedWorkbook.xlsx");

  //Unprotect (unlock) Workbook using Password
  workbook.Unprotect("password");

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("ProtectedWorkbook.xlsx")

  'Unprotect (unlock) Workbook using Password
  workbook.Unprotect("password")

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to unprotect a workbook in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/XlsIO-Excel-Protect-UnProtect/UnProtect-Workbook/.NET/UnProtect-Workbook).

## Protect Worksheet 

XlsIO provides support for protecting and unprotecting elements in worksheets by using the [Protect](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ITabSheet.html#Syncfusion_XlsIO_ITabSheet_Protect_System_String_) method of [IWorksheet](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html). The following code example illustrates how to protect a worksheet with a password. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/XlsIO-Excel-Protect-UnProtect/Protect-Worksheet/.NET/Protect-Worksheet/ProtectWorksheet/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	//Open Excel
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputData.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Protect worksheet with multiple options
	worksheet.Protect("Protect", ExcelSheetProtection.FormattingCells | ExcelSheetProtection.LockedCells | ExcelSheetProtection.UnLockedCells);
					
	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/ProtectedSheet.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  //Protecting the Worksheet by using a Password
  sheet.Protect("syncfusion", ExcelSheetProtection.All);

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Protecting the Worksheet by using a Password
  sheet.Protect("syncfusion", ExcelSheetProtection.All)

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to protect a worksheet in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/XlsIO-Excel-Protect-UnProtect/Protect-Worksheet/.NET/Protect-Worksheet).

The list of supported Excel sheet protection options and their behavior in Syncfusion XlsIO is given below.

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>ExcelSheetProtection.DeletingRows</td>
    <td>Allows users to delete entire rows when the worksheet is protected. The deletion is only possible if the rows contain only unlocked cells.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.DeletingColumns</td>
    <td>Allows users to delete entire columns in a protected worksheet. The operation is permitted only if the columns consist entirely of unlocked cells.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.InsertingRows</td>
    <td>Permits the insertion of new rows into areas with unlocked cells.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.InsertingColumns</td>
    <td>Permits the insertion of new columns into areas with unlocked cells.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.InsertingHyperlinks</td>
    <td>Allows the user to insert hyperlinks into unlocked cells.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.FormattingCells</td>
    <td>Enables formatting of unlocked cells (e.g., fonts, number formats) while the sheet is protected.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.FormattingColumns</td>
    <td>Allows formatting of entire columns even when the sheet is protected.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.FormattingRows</td>
    <td>Allows formatting of entire rows even when the sheet is protected.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.Objects</td>
    <td>Prevents editing or deletion of objects like charts, shapes, or images on the sheet.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.Scenarios</td>
    <td>Protects defined scenarios from modification or deletion.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.Sorting</td>
    <td>Enables sorting functionality in a protected worksheet, assuming all cells involved are unlocked.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.Filtering</td>
    <td>Allows filtering of data using AutoFilter drop-downs while the sheet is protected.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.UsingPivotTables</td>
    <td>Enables users to interact with PivotTables (e.g., refresh or rearrange) in a protected sheet.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.LockedCells</td>
    <td>Applies protection to all locked cells. Users cannot modify these cells unless unlocked or explicitly permitted.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.UnLockedCells</td>
    <td>Specifies that users are allowed to edit unlocked cells even when the worksheet is protected.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.Content</td>
    <td>Prevents editing of any content on the worksheet unless specific permissions are granted.</td>
  </tr>
  <tr>
    <td>ExcelSheetProtection.All</td>
    <td>Applies all protection options available for the worksheet, including locking cells, disabling formatting, insertion, deletion, etc.</td>
  </tr>
</table>

**Chart** **Sheet** **Protection**

Essential<sup>&reg;</sup> XlsIO can also provide support to protect or unprotect a chart sheet.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("ChartSheet.xlsx");
  IChart chart = workbook.Charts[0];

  //Protect chart sheet
  chart.Protect("syncfusion", ExcelSheetProtection.All);

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("sample.xlsx");
  IChart chart = workbook.Charts[0];

  //Protect chart sheet
  chart.Protect("syncfusion", ExcelSheetProtection.All);

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim chart As IChart = workbook.Charts(0)

  'Protect chart sheet
  chart.Protect("syncfusion", ExcelSheetProtection.All)

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

**Un****-****Protect** **Worksheet** 

You can also unprotect the worksheet by using the [Unprotect](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ITabSheet.html#Syncfusion_XlsIO_ITabSheet_Unprotect_System_String_) method of XlsIO. The following code example illustrates how to remove worksheet protection.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/XlsIO-Excel-Protect-UnProtect/UnProtect-Worksheet/.NET/UnProtect-Worksheet/UnProtectWorksheet/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	//Open Excel
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/ProtectedWorksheet.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//UnProtect worksheet with password
	worksheet.Unprotect("syncfusion");
	
	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/UnProtectedSheet.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet sheet = workbook.Worksheets[0];

  //Unprotecting (unlocking) the Worksheet using the Password
  sheet.Unprotect("syncfusion");

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("sample.xlsx")
  Dim sheet As IWorkbook = workbook.Worksheets(0)

  'Unprotecting (unlocking) the Worksheet using the Password
  sheet.Unprotect("syncfusion")

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  

A complete working example to unprotect a worksheet in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/XlsIO-Excel-Protect-UnProtect/UnProtect-Worksheet/.NET/UnProtect-Worksheet).

**Removing** **protection** **of** **a** **Chart** **Sheet**

You can remove the protection of a chart sheet as shown below.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IChart chart = workbook.Charts[0];

  //Unprotect chart sheet
  chart.Unprotect("syncfusion");

  //Saving the workbook 
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IChart chart = workbook.Charts[0];

  //Unprotect chart sheet
  chart.Unprotect("syncfusion");

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim chart As IChart = workbook.Charts(0)

  'Unprotect chart sheet
  chart.Unprotect("syncfusion")

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Protect Cell

XlsIO supports locking and unlocking cells by using the cell's [Locked](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IExtendedFormat.html#Syncfusion_XlsIO_IExtendedFormat_Locked) property of [CellStyle](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_CellStyle). This can be manipulated to make certain cells editable in a protected worksheet. 

N> By default, cells are locked. Lock or Unlock cell in an unprotected worksheet has no effect. 

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/XlsIO-Excel-Protect-UnProtect/Locked-Cells/.NET/Locked-Cells/LockedCells/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	//Open Excel
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputData.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Unlock cell
	worksheet["A1"].CellStyle.Locked = false;
	
	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/LockedCells.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];

  //Unlocking a cell to edit in worksheet protection mode
  worksheet.Range["A1"].CellStyle.Locked = false;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Unlocking a cell to edit in worksheet protection mode
  worksheet.Range("A1").CellStyle.Locked = False

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}  


N> Security features are now supported in .NET Standard 1.4 onwards.

N> By default, all cells in an Excel worksheet have the Locked property set to true. This property only takes effect when the worksheet is protected. To allow edits in specific cells, you must explicitly set the Locked property to false before applying protection. Once the sheet is protected, only the unlocked cells remain editable. However, ExcelEngine will allow editing cells programmatically even though the worksheet is protected.

A complete working example to protect a cell in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/XlsIO-Excel-Protect-UnProtect/Locked-Cells/.NET/Locked-Cells).
