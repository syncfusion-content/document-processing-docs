---
layout: post
title: Workbook Operations in Windows Forms Spreadsheet control | Syncfusion®
description: Learn how to create, open, and save Excel workbooks, as well as how to display charts and sparklines in Syncfusion® UWP Spreadsheet.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

## Creating a new Excel Workbook

A new workbook can be created by using a `Create` method with specified number of worksheets. By default, a workbook will be created with single worksheet.

{% tabs %}
{% highlight c# %}

    spreadsheet.Create(2);

{% endhighlight %}
{% endtabs %}

## Opening an existing Excel Workbook

The Excel Workbook can be opened in SfSpreadsheet using the `Open` method in various ways,

{% tabs %}
{% highlight c# %}

//Using Stream, 
spreadsheet.Open (Stream file)

//Using StorageFile,
spreadsheet.Open (StorageFile file)

//Using Workbook,
spreadsheet.Open(IWorkbook workbook)

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight c# %}

Stream fileStream = typeof(MainPage).GetTypeInfo().Assembly.GetManifestResourceStream("SfSpreadsheetDemo.Assets.BidDetails.xlsx");
this.spreadsheet.Open(fileStream);

{% endhighlight %}
{% endtabs %}

N> Place the **Excel file** inside the **Assets** folder of the UWP application. Then, right-click the file, select Properties, and set the Build Action to **Embedded Resource**. This configuration ensures that the above code can correctly access and load the Excel file into the spreadsheet.

![Getting-Started_img4](Getting-Started_images/Getting-Started_img4.jpg)


## Saving the Excel Workbook

The Excel workbook can be saved in SfSpreadsheet using `Save` method. If the workbook already exists in the system drive, it will be saved in the same location, otherwise Save Dialog box opens to save the workbook in user specified location.

{% tabs %}
{% highlight c# %}

    spreadsheet.Save();

{% endhighlight %}
{% endtabs %}

You can also use `SaveAs` method directly to save the existing excel file with modifications.

The `SaveAs` method in SfSpreadsheet can be used in various ways,

{% tabs %}
{% highlight c# %}

//Using Storage File,
spreadsheet.SaveAs (StorageFile file);

//Using String,
spreadsheet.SaveAs (string file);

//For Dialog box,
spreadsheet.SaveAs();
      
{% endhighlight %}
{% endtabs %}

## Displaying Charts and Sparklines

For importing charts and sparklines in SfSpreadsheet, add the following assembly as reference into the application.
 
Assembly: **Syncfusion.SfSpreadsheetHelper.UWP.dll**  

### Charts
 
Create an instance of `Syncfusion.UI.Xaml.SpreadsheetHelper.GraphicChartCellRenderer` and add that renderer into `GraphicCellRenderers` collection by using the helper method `AddGraphicChartCellRenderer` which is available under the namespace `Syncfusion.UI.Xaml.Spreadsheet.GraphicCells`. 

{% tabs %}
{% highlight c# %}

public MainWindow()
{
  InitializeComponent();
  
  //For importing charts,
  this.spreadsheet.AddGraphicChartCellRenderer(new GraphicChartCellRenderer());
}

{% endhighlight %}
{% endtabs %}

### Sparklines

Create an instance of `Syncfusion.UI.Xaml.SpreadsheetHelper.SparklineCellRenderer` and add that renderer into the Spreadsheet by using the helper method `AddSparklineCellRenderer` which is available under the namespace `Syncfusion.UI.Xaml.Spreadsheet.GraphicCells`.

{% tabs %}
{% highlight c# %}

public MainWindow()
{
  InitializeComponent();
      
  //For importing sparklines,
  this.spreadsheet.AddSparklineCellRenderer(new SparklineCellRenderer());
}

{% endhighlight %}
{% endtabs %}