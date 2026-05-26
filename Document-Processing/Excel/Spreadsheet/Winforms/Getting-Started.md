---
layout: post
title: Getting Started with WinForms Spreadsheet control | Syncfusion®
description: Learn here about getting started with Syncfusion® Windows Forms Spreadsheet control, its elements and more details.
platform:  document-processing
control: Spreadsheet
documentation: ug
---

# Getting Started with Windows Forms Spreadsheet
This section briefly explains how to include the [Syncfusion<sup>®</sup> WinForms Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/winforms-spreadsheet-editor) component in Windows Forms App using Visual Studio.

## Prerequisites
* [System requirements for WinForms components](https://help.syncfusion.com/windowsforms/system-requirements)

## Create a new Windows Forms App in Visual Studio

You can create a **Windows Forms Application** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/dotnet/desktop/winforms/get-started/create-app-visual-studio) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> Windows Forms](https://help.syncfusion.com/windowsforms/visual-studio-integration/template-studio).

## Assemblies Deployment

To add a WinForms spreadsheet component to your application by installing it via NuGet packages(Recommended) or by manually adding the required assemblies to the project.

{% tabcontents %}
 
{% tabcontent NuGet Package %}

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> Windows Forms Spreadsheet NuGet packages

To add **Windows Forms Spreadsheet** component in the application, open the NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), search and install:

•	[Syncfusion.Spreadsheet.Windows](https://www.nuget.org/packages/Syncfusion.Spreadsheet.Windows)

{% endtabcontent %}
 
{% tabcontent Assemblies(.dll)  %}

### Add Syncfusion® WinForms Spreadsheet Assemblies

Below table describes, list of assemblies required to be added in project when the [WinForms Spreadsheet](https://www.syncfusion.com/winforms-ui-controls/spreadsheet) control is used in your application.

<table>
<tr>
<th>
Assembly</th><th>
Description</th></tr>
<tr>
<td>
Syncfusion.Spreadsheet.Windows.dll</td><td>
Contains the classes  that handles all the UI Operations of Spreadsheet such as importing of sheets, applying formulas/styles etc.</td></tr>
<tr>
<td>
Syncfusion.Shared.Base.dll</td><td>
Contains the classes which holds the controls like TabBarPage, TabBarSplitterControl etc.</td></tr>
<tr>
<td>
Syncfusion.Tools.Windows.dll</td><td>
Contains the classes which holds the controls like Ribbon, ToolStripPanelItem,MaskedEditBox,ToolStripGallery,BackStageButton  etc which are used in Spreadsheet.</td></tr>
<tr>
<td>
Syncfusion.XlsIO.Base.dll</td><td>
Contains the base classes which is responsible for read and write in Excel files, Worksheet Manipulations, Formula calculations etc.</td></tr>
</table>
Below are the assemblies list that can be added when you want to enable certain features in Spreadsheet control. 

<table>
<tr>
<th>
Optional Assemblies</th><th>
Description</th></tr>
<tr>
<td>
Syncfusion.SpreadsheetHelper.Windows.dll</td><td>
Contains the classes which is responsible for importing charts and sparklines into Spreadsheet</td></tr>
<tr>
<td>
Syncfusion.ExcelChartToImageConverter.WPF.dll</td><td>
Contains the classes which is responsible for converting charts as image</td></tr>
<tr>
<td>
Syncfusion.Chart.Base.dll</td><td>
Contains the base classes which is responsible for importing charts like Line charts, Pie charts, Sparklines etc.</td></tr>
<tr>
<td>
Syncfusion.Chart.Windows.dll</td><td>
Contains the classes which is responsible for creating charts that holds axes, series, legends etc.</td></tr>
<tr>
<td>
Syncfusion.ExcelToPDFConverter.Base.dll</td><td>
Contains the base and fundamental classes which is responsible for converting excel to PDF.</td></tr>
<tr>
<td>
Syncfusion.Pdf.Base.dll</td><td>
Contains the base and fundamental classes for creating PDF.</td></tr>
</table>

{% endtabcontent %}
 
{% endtabcontents %}

## Add Windows Forms Spreadsheet component

WinForms Spreadsheet control can be added to an application either through the designer (XAML) or programmatically using code.

{% tabcontents %}
 
{% tabcontent Via Designer %}

1.Open the Visual Studio **Tool** **box**. Navigate to Syncfusion<sup>®</sup> Controls tab, and find the  Spreadsheet/SpreadsheetRibbon toolbox items.

![Toolbox in WindowsForms Spreadsheet](getting-started_images/windowsforms-spreadsheet-toolbox.jpg)

2.Drag `Spreadsheet` and drop in the Designer area from the Toolbox.

{% tabs %}
{% highlight c# tabtitle="Form1.Designer.cs" %}
....
public Form1()
{
....
private void InitializeComponent()
{
Spreadsheet spreadsheet = new Spreadsheet();
}
....
}
....
{% endhighlight %}
{% endtabs %}

3.Ribbon can be added to the application by dragging `SpreadsheetRibbon` to the Designer area.

{% tabs %}
{% highlight c# tabtitle="Form1.Designer.cs" %}
....
public Form1()
{
....
private void InitializeComponent()
{
Spreadsheet spreadsheet = new Spreadsheet();
SpreadsheetRibbon spreadsheetRibbon = new SpreadsheetRibbon();
}
....
}
....
{% endhighlight %}
{% endtabs %}

4.To make an interaction between Ribbon items and `Spreadsheet`, bind the Spreadsheet as DataContext to the `SpreadsheetRibbon`.

{% tabs %}
{% highlight c# tabtitle="Form1.Designer.cs" %}
....
public Form1()
{
....
private void InitializeComponent()
{
Spreadsheet spreadsheet = new Spreadsheet();
SpreadsheetRibbon spreadsheetRibbon = new SpreadsheetRibbon();
spreadsheetRibbon.Spreadsheet = spreadsheet;
}
....
}
....
{% endhighlight %}
{% endtabs %}

{% endtabcontent %}
 
{% tabcontent Via Coding %}


Spreadsheet is available in the following namespace **[Syncfusion.Windows.Forms.Spreadsheet](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.html)** and it can be created programmatically by using below code. 

_For_ _Spreadsheet_

{% tabs %}
{% highlight c# tabtitle="Form1.cs" %}

....
    public Form1()
    {
        InitializeComponent();
        Spreadsheet spreadsheet = new Spreadsheet();
        SpreadsheetRibbon ribbon = new SpreadsheetRibbon() { Spreadsheet = spreadsheet };
        spreadsheet.Dock = DockStyle.Fill;
        spreadsheet.Anchor = AnchorStyles.Left | AnchorStyles.Top;
        this.Controls.Add(spreadsheet);
        this.Controls.Add(ribbon);
    }
....

{% endhighlight %}
{% endtabs %}


{% endtabcontent %}
 
{% endtabcontents %}

## Run the application

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application.The output will appear as follows:

![Adding control via coding in WindowsForms Spreadsheet](getting-started_images/windowsforms-spreadsheet-coding.png)

To learn how to create, open, and save files in the WPF Spreadsheet Component, see [Workbook Operations](Workbook-Operations).

N>[View Sample in GitHub.](https://github.com/SyncfusionExamples/winforms-spreadsheet-getting-started)

## See Also
- [Data Management](Data-Management)
- [Display Charts and Sparklines](Shapes)
