---
layout: post
title: Getting Started with WPF PDF Viewer control | Syncfusion&reg;
description: Learn here about getting started with Syncfusion<sup>&reg;</sup> Essential Studio&reg; WPF PDF Viewer control, its elements and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Getting Started with WPF PDF Viewer

This section explains how to create an application that displays a PDF file using the [WPF PDF Viewer](https://www.syncfusion.com/wpf-controls/pdf-viewer).

To get started quickly with WPF PDF Viewer, you can check out this video:
<style>#WPFPDFViewerVideoTutorial{width : 90% !important; height: 400px !important }</style>
<iframe id='WPFPDFViewerVideoTutorial' src='https://www.youtube.com/embed/H1YBX_-QWKc'></iframe>

## Prerequisites
* [System requirements for WPF components](https://help.syncfusion.com/wpf/system-requirements)

## Create a new WPF App in Visual Studio

You can create a **WPF Application** using Visual Studio via [Microsoft Templates](https://learn.microsoft.com/en-us/dotnet/desktop/wpf/get-started/create-app-visual-studio) or the [Syncfusion<sup style="font-size:70%">&reg;</sup> WPF](https://help.syncfusion.com/wpf/visual-studio-integration/template-studio).

## Assemblies Deployment

To add a WPF PDF Viewer component to your application by installing it via NuGet packages (Recommended) or by manually adding the required assemblies to the project.

{% tabcontents %}

{% tabcontent NuGet Package %}

### Install Syncfusion<sup style="font-size:70%">&reg;</sup> WPF PDF Viewer NuGet packages

To add **WPF PDF Viewer** component in the application, open the NuGet package manager in Visual Studio (*Tools → NuGet Package Manager → Manage NuGet Packages for Solution*), search and install:

•	[Syncfusion.PdfViewer.WPF](https://www.nuget.org/packages/Syncfusion.PdfViewer.WPF)

To ensure the control is styled correctly, install the theme package:

•	[Syncfusion.Themes.Windows11Light.WPF](https://www.nuget.org/packages/Syncfusion.Themes.Windows11Light.WPF)

Rather than referencing the assemblies, you can utilize the [PdfViewer NuGet](https://www.nuget.org/packages/Syncfusion.PdfViewer.WPF) Packages. For more information on how to install the NuGet package in a WPF application, please follow the provided link.
[How to install nuget packages in a WPF application](https://help.syncfusion.com/wpf/installation/install-nuget-packages)

{% endtabcontent %}
 
{% tabcontent Assemblies (.dll) %}

### Add Syncfusion® WPF PDF Viewer Assemblies

The following table lists the assemblies required to be added in the project when the WPF PDF Viewer control is used in your application.

<table>
<tr>
<th>
Assembly</th><th>
Description</th></tr>
<tr>
<td>
Syncfusion.Compression.Base.dll</td><td>
This library handles various compression and decompression operations that are used in the PDF file internally.</td></tr>
<tr>
<td>
Syncfusion.Pdf.Base.dll</td><td>
This library contains the PDF reader and creator that supports the PDF Viewer.</td></tr>
<tr>
<td>
Syncfusion.PdfToImageConverter.Base.dll</td><td>
This library is responsible for Pdfium integration and image generation, enhancing the capabilities of the PDF Viewer.</td></tr>
<tr>
<td>
Syncfusion.PdfViewer.WPF.dll</td><td>
This component contains the rendering area and other related UI elements.</td></tr>
<tr>
<td>
Syncfusion.Shared.WPF.dll</td><td>
This component contains various UI controls (ColorPickerPalette and Numeric UpDown) that are used in the PDF Viewer.</td></tr>
</table>



Below are the additional DLLs required for applying themes and skinning to the WPF PDF Viewer control:

<table> <tr> <th>Assembly</th> <th>Description</th> </tr> <tr> <td>Syncfusion.Themes.Windows11Light.WPF.dll</td> <td>Contains the Windows 11 Light theme style for Syncfusion WPF controls.</td> </tr> <tr> <td>Syncfusion.SfSkinManager.WPF.dll</td> <td>Contains the SfSkinManager which helps to apply different themes to Syncfusion WPF controls.</td> </tr> </table>

N> You need to add these references to your project to use the skinning and theming capabilities of the PDF Viewer.

{% endtabcontent %}
 
{% endtabcontents %}

N>* Starting with version 23.1.x, Syncfusion PdfToImageConverter is necessary for PDF Viewer applications.
N>* Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to include a license key in your projects. Please refer to [this link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion&reg; license key in your WPF application to use our components.

## Add WPF PDF Viewer component
WPF PDF Viewer control can be added to an application either through the designer (XAML) or programmatically using code. 

{% tabcontents %}
 
{% tabcontent Via Designer %}
1.Open the Visual Studio toolbox.
2.Navigate to <b>Syncfusion<sup>&reg;</sup> WPF Toolbox</b> tab and drag the `PdfViewerControl` toolbox item to the Designer window. The required references are automatically added to the current application.

   ![WPF PDF Viewer in Toolbox](getting-started_images/wpf-pdf-viewer-in-toolbox.png)
   PDF Viewer control in toolbox
   {:.caption}
    
3.Use the `PdfViewerControl` in XAML by including the Syncfusion namespace.

	{% tabs %}
	{% highlight xaml tabtitle="MainWindow.xaml" %}
	<Window x:Class="Namespace.MainWindow"
			xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
			xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
			xmlns:syncfusion="clr-namespace:Syncfusion.Windows.PdfViewer;assembly=Syncfusion.PdfViewer.WPF">
		<Grid x:Name="HomeGrid">
			<syncfusion:PdfViewerControl x:Name="pdfViewer"></syncfusion:PdfViewerControl>
		</Grid>
	</Window>
		
	{% endhighlight %}
	{% endtabs %}

	N> Declare a name for the PDF Viewer component as shown above for reference.

4.Add the [SfSkinManager](https://help.syncfusion.com/cr/wpf/Syncfusion.SfSkinManager.html) namespace to style the control correctly, and apply the desired theme.

	{% tabs %}
	{% highlight xaml tabtitle="MainWindow.xaml" %}
	<Window x:Class="Namespace.MainWindow"
		xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
		xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
		xmlns:syncfusionskin="clr-namespace:Syncfusion.SfSkinManager;assembly=Syncfusion.SfSkinManager.WPF"
		syncfusionskin:SfSkinManager.Theme="{syncfusionskin:SkinManagerExtension ThemeName=Windows11Light}">

	</Window>
	{% endhighlight %}
	{% endtabs %}

	{% endtabcontent %}
	 
	{% tabcontent Via Coding %}
To add the control manually from code, follow these steps:

1.Add the required assemblies as a reference to the project.
2.Add the following Syncfusion<sup>&reg;</sup>; namespace in MainWindow.xaml.cs.

	{% tabs %}
	{% highlight c# tabtitle="C#" %}
	using Syncfusion.Windows.PdfViewer;
	{% endhighlight %}
	{% endtabs %}

3.Create a PdfViewerControl instance and add it to the main window.

	{% tabs %}
	{% highlight c# tabtitle="C#" %}
	using Syncfusion.Windows.PdfViewer;
	using System.Windows;

	namespace PdfViewerDemo
	{
		/// <summary>
		/// Interaction logic for Window1.xaml
		/// </summary>
		public partial class MainWindow : Window
		{
			# region Constructor
			public MainWindow()
			{
				InitializeComponent();
				PdfViewerControl pdfViewer = new PdfViewerControl();
				HomeGrid.Children.Add(pdfViewer);
			}
			#endregion
		}
	}
	{% endhighlight %}
	{% endtabs %}

4.The following example code demonstrate how to apply the FluentDark theme to PDF Viewer control in MainWindow.xaml.cs using SfSkinManager.
  
	{% tabs %}
	{% highlight c# tabtitle="C#" %}
	
	using Syncfusion.Windows.PdfViewer;
	using Syncfusion.SfSkinManager;
	public MainWindow()
	{
		InitializeComponent();
		//Initialize PDF Viewer.
		PdfViewerControl pdfViewer = new PdfViewerControl();
		HomeGrid.Children.Add(pdfViewer);

		//Apply the theme to PDFViewer.
		SfSkinManager.ApplyThemeAsDefaultStyle = true;
		SfSkinManager.SetTheme(pdfViewer, new Theme() { ThemeName = "FluentDark" });
		pdfViewer.Load(@"../../PDF_Succinctly.pdf");           
	}        

	{% endhighlight %}

	{% highlight vbnet tabtitle="VB.NET" %}

	Public Sub New()
		InitializeComponent()
		'Initialize PDF Viewer.
		Dim pdfViewer As PdfViewerControl = New PdfViewerControl()
		HomeGrid.Children.Add(pdfViewer)

		'Apply the theme to PDFViewer.
		SfSkinManager.ApplyThemeAsDefaultStyle = True
		SfSkinManager.SetTheme(pdfViewer, New Theme() With {
			.ThemeName = "FluentDark"
		})
		pdfViewer.Load("../../PDF_Succinctly.pdf")
	End Sub

	{% endhighlight %}
	{% endtabs %}


	{% endtabcontent %}
	 
	{% endtabcontents %}


N>[View Sample in GitHub.](https://github.com/SyncfusionExamples/WPF-PDFViewer-Examples/tree/master/GettingStarted). Looking for the full WPF PDF Viewer component overview, features, pricing, and documentation? Visit the [WPF PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/wpf-pdf-viewer) page.

## See Also
- [Viewing PDF Files](./viewing-pdf-files)
- [Themes](./Themes)

