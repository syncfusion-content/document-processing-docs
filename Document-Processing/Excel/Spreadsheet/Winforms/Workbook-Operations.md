---
layout: post
title: Workbook Operations in Windows Forms Spreadsheet control | Syncfusion®
description: Learn how to create, open, and save Excel workbooks, as well as how to display charts and sparklines in Syncfusion® Windows Forms Spreadsheet.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Workbook Operations in Windows Forms Spreadsheet

This section explains how to manage Excel workbooks in the Spreadsheet control, including creating a new workbook, opening existing workbooks from various sources, and saving changes efficiently.

## Creating a new Excel Workbook

A new workbook can be created by using the [Create](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_Create_System_Int32_) method with specified number of worksheets. By default, a workbook will be created with a single worksheet.

{% tabs %}
{% highlight c# tabtitle="Form1.cs" %}
....
public Form1()
{
    InitializeComponent();
    spreadsheet.Create(2);
}
....
{% endhighlight %}
{% endtabs %}


## Opening an existing Excel Workbook

The Excel workbook can be opened in the Spreadsheet control using the [Open](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_Open_Syncfusion_XlsIO_IWorkbook_) method in various ways:

{% tabs %}
{% highlight c# tabtitle="Form1.cs" %}
....
public Form1()
{
    InitializeComponent();

    // Using Stream
    spreadsheet.Open(Stream file);

    // Using string (file path)
    spreadsheet.Open(string file);

    // Using Workbook
    spreadsheet.Open(IWorkbook workbook);

    // Example: Open from file path
    spreadsheet.Open(@"..\..\Data\Outline.xlsx");
}
....
{% endhighlight %}
{% endtabs %}


![Opening an existing excel workbook in WindowsForms Spreadsheet](getting-started_images/windowsforms-spreadsheet-opening-an-existing-excel-workbook.png)


Opening an Excel file in the Spreadsheet control
   {:.caption}

## Saving the Excel Workbook

The Excel workbook can be saved in the Spreadsheet control using the [Save](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_Save) method. If the workbook already exists on the system drive, it will be saved in the same location; otherwise, the Save dialog box opens to save the workbook in a user-specified location.

{% tabs %}
{% highlight c# tabtitle="Form1.cs" %}
....
public Form1()
{
    InitializeComponent();
    
    .....
    spreadsheet.Save();
    .....
}
....
{% endhighlight %}
{% endtabs %}


You can also use the [SaveAs](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_SaveAs) method directly to save the existing Excel file with modifications.

The `SaveAs` method in the Spreadsheet control can be used in various ways:

{% tabs %}
{% highlight c# tabtitle="Form1.cs" %}
....
public Form1()
{
    InitializeComponent();

    .....

    // Using Stream
    spreadsheet.SaveAs(Stream file);

    // Using string (file path)
    spreadsheet.SaveAs(string file);

    // Using dialog box
    spreadsheet.SaveAs();

    .....
}
....
{% endhighlight %}
{% endtabs %}
