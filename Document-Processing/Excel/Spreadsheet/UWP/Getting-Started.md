---
layout: post
title: Getting Started with UWP Spreadsheet control | Syncfusion®
description: Learn here about getting started with Syncfusion® UWP Spreadsheet (SfSpreadsheet) control, its elements and more.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

# Getting Started with UWP Spreadsheet (SfSpreadsheet)

This section briefly explains how to include the Syncfusion<sup>®</sup> UWP SfSpreadsheet component in UWP App using Visual Studio

## Prerequisites
* [System requirements for UWP components](https://help.syncfusion.com/uwp/system-requirements)

## Create a new UWP App in Visual Studio

You can create a **Spreadsheet UWP Application** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-uwp?view=visualstudio&tabs=vs-2022-17-10) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> UWP](https://help.syncfusion.com/uwp/visual-studio-integration/create-project).

## Assemblies Deployment

{% tabcontents %}

{% tabcontent Via NuGet Package %}

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> UWP SfSpreadsheet NuGet in the App (Recommended)

To add **UWP SfSpreadsheet** component in the application, open the NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), search and install 

•	[Syncfusion.SfSpreadsheet.UWP](https://www.nuget.org/packages/Syncfusion.SfSpreadsheet.UWP)

{% endtabcontent %}

{% tabcontent Via Dependencies %}

### Add Dependencies

Below table describes, list of assemblies required to be added in project when the SfSpreadsheet control is used in your application.

<table>
<tr>
<th>
Assembly</th><th>
Description</th></tr>
<tr>
<td>
Syncfusion.SfCellGrid.UWP.dll</td><td>
Contains the base and fundamental classes which holds the underlying architecture for displaying cells with virtualized behavior and selection/interaction of cells.</td></tr>
<tr>
<td>
Syncfusion.SfGridCommon.UWP.dll</td><td>
Covers the classes which holds the properties of scroll viewer and disposable elements</td></tr>
<tr>
<td>
Syncfusion.SfSpreadsheet.UWP.dll</td><td>
Contains the classes that handles all the UI Operations of SfSpreadsheet such as importing of sheets, applying formulas/styles etc.</td></tr>
<tr>
<td>
Syncfusion.SfShared.UWP.dll</td><td>
Contains the classes which holds the properties and operations of the controls like SfUpDown, SfNavigator, Looping control etc</td></tr>
<tr>
<td>
Syncfusion.SfInput.UWP.dll</td><td>
Contains the classes which holds the controls like SfDropDownButton, SfTextBoxExt,SfMaskedEdit etc.</td></tr>
<tr>
<td>
Syncfusion.SfRibbon.UWP.dll</td><td>
Covers the classes which holds the Ribbon controls such as SfRibbon, SfRibbonMenu, SfRibbonGalleryItem etc.</td></tr>
<tr>
<td>
Syncfusion.SfTabControl.UWP.dll</td><td>
Covers the classes which holds the controls like SfTabControl, SfTabItem etc</td></tr>
<tr>
<td>
Syncfusion.XlsIO.UWP.dll</td><td>
Contains the base classes which is responsible for read and write in Excel files, Worksheet Manipulations, Formula calculations etc.</td></tr>
</table>
Below are the assemblies list that can be added when you want to enable certain features in SfSpreadsheet control. 

<table>
<tr>
<th>
Optional Assemblies</th><th>
Description</th></tr>
<tr>
<td>
Syncfusion.SfSpreadsheetHelper.UWP.dll</td><td>
Contains the classes which is responsible for importing charts and sparklines into SfSpreadsheet</td></tr>
<tr>
<td>
Syncfusion.ExcelChartToImageConverter.UWP.dll</td><td>
Contains the classes which is responsible for converting charts as image</td></tr>
<tr>
<td>
Syncfusion.SfChart.UWP.dll</td><td>
Contains the classes which is responsible for importing charts like Line charts, Pie charts, Sparklines etc.</td></tr>
</table>

{% endtabcontent %}

{% endtabcontents %}

## Add UWP SfSpreadsheet component

SfSpreadsheet control can be added into the application either via designer or via coding. 

{% tabcontents %}

{% tabcontent Via Designer %}

### Adding a Control via Designer

1.Click and open the MainPage.Xaml file.

2.Open the Visual Studio **Tool** **box**. Navigate to “Syncfusion<sup>®</sup> Controls for UWP” tab, and find the  SfSpreadsheet/SfSpreadsheetRibbon toolbox items.

![Getting-Started_img1](Getting-Started_images/Getting-Started_img1.jpg)

3.Drag `SfSpreadsheet` and drop in to the Designer area from the Toolbox.

_For_ _Spreadsheet:_

{% tabs %}
{% highlight xaml %}

    <syncfusion:SfSpreadsheet  x:Name="spreadsheet"  />

{% endhighlight %}
{% endtabs %}

Declare a name for the Spreadsheet component as shown above for reference.

4.Ribbon can be added to the application by dragging and dropping `SfSpreadsheetRibbon` to the Designer area.

5.To make an interaction between Ribbon items and SfSpreadsheet, need to bind the `SfSpreadsheet` as DataContext to the `SfSpreadsheetRibbon`.

_For_ _Ribbon:_

{% tabs %}
{% highlight xaml %}

    <syncfusion:SfSpreadsheetRibbon DataContext="{Binding ElementName=spreadsheet}"  />

{% endhighlight %}
{% endtabs %}

6.Align the SfSpreadsheet and SfSpreadsheetRibbon components using Row Definition.

{% tabs %}
{% highlight xaml %}

    <Grid.RowDefinitions>
        <RowDefinition Height="Auto"/>
        <RowDefinition Height="*"/>
    </Grid.RowDefinitions>
    <Spreadsheet:SfSpreadsheet Name="spreadsheet" Grid.Row="1" />
    <Spreadsheet:SfSpreadsheetRibbon DataContext="{Binding ElementName=spreadsheet}" Grid.Row="0" />

{% endhighlight %}
{% endtabs %}

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application.

{% endtabcontent %}

{% tabcontent Via Coding %}

### Adding Control Via Coding

Spreadsheet is available in the following namespace “_Syncfusion_._UI_._Xaml_._Spreadsheet_” and it can be created programmatically either by using XAML or C# code.

{% tabs %}

{% highlight xaml %}

<Page
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:local="using:App1"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:Spreadsheet="using:Syncfusion.UI.Xaml.Spreadsheet"
    x:Class="App1.MainPage"
    mc:Ignorable="d"
    Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">

    <Grid>
        <Grid.RowDefinitions>
            <RowDefinition Height="Auto"/>
            <RowDefinition Height="*"/>
        </Grid.RowDefinitions>
        <Spreadsheet:SfSpreadsheet Name="spreadsheet" Grid.Row="1" />
        <Spreadsheet:SfSpreadsheetRibbon DataContext="{Binding ElementName=spreadsheet}" Grid.Row="0" />
    </Grid>
</Page>

{% endhighlight %}

{% highlight c# %}

Grid grid = new Grid();

grid.RowDefinitions.Add(new RowDefinition { Height = GridLength.Auto });
grid.RowDefinitions.Add(new RowDefinition { Height = new GridLength(1, GridUnitType.Star) });

SfSpreadsheet spreadsheet = new SfSpreadsheet();
SfSpreadsheetRibbon ribbon = new SfSpreadsheetRibbon() { SfSpreadsheet = spreadsheet };

Grid.SetRow(ribbon, 0);
Grid.SetRow(spreadsheet, 1);

grid.Children.Add(ribbon);
grid.Children.Add(spreadsheet);

this.Content = grid;

{% endhighlight %}

{% endtabs %}

Press <kbd>Ctrl</kbd>+<kbd>F5</kbd> (Windows) or <kbd>⌘</kbd>+<kbd>F5</kbd> (macOS) to launch the application.

N> To load the SfSpreadsheet in Windows Mobile, add the above code in MainPage.xaml file in DeviceFamily-Mobile folder.

{% endtabcontent %}

{% endtabcontents %}

_You_ _can_ _get_ _the_ _following_ _output_ _when_ _execute_ _the_ _application._

![Getting-Started_img2](Getting-Started_images/Getting-Started_img2.jpg)

N> [View Sample in GitHub](https://github.com/SyncfusionExamples/uwp-spreadsheet-examples).

## See Also
- [Workbook operations such as creating, opening, and saving a workbook](Workbook-Operations)
