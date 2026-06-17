---
layout: post
title: Display PDF file in WPF Pdf Viewer control | Syncfusion&reg;
description: Learn here about how to display PDF file with Syncfusion<sup>&reg;</sup>; Essential Studio&reg; WPF Pdf Viewer control, its elements and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---
# Display PDF file in WPF Pdf Viewer

The [PdfViewerControl](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html)’s [ItemSource](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_PdfViewer_PdfViewerControl_ItemSource) property allows you to bind PDF documents in XAML. This property accepts a stream input that can be bounded to the viewer during initialization. The following steps explain how to display a PDF file using the [PdfViewerControl](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html):

N> From v16.3.0x onwards, PDF Viewer uses PDFium as a default rendering engine to render the PDF pages, which is a more robust and promising rendering engine. Refer to this [link](https://help.syncfusion.com/wpf/pdf-viewer/pdf-rendering-engines) for more details.

1.	Create a simple class in the application that implements [INotifyPropertyChanged](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged?view=netcore-3.1) and declare a file stream property in the class as shown in the following code sample.

{% tabs %}
{% highlight c# tabtitle="PdfReport.cs" %}
	using System.ComponentModel;
	using System.IO;

	namespace PdfViewerDemo
	{
		public class PdfReport : INotifyPropertyChanged
		{
			private Stream docStream;
			public event PropertyChangedEventHandler PropertyChanged;
			
			public Stream DocumentStream
			{
				get
				{
					return docStream;
				}
				set
				{
					docStream = value;
					OnPropertyChanged(new PropertyChangedEventArgs("DocumentStream"));
				}
			}

			public PdfReport()
			{
				//Load the stream from the local system.
				docStream = new FileStream(@"../../Data/HTTP Succinctly.pdf", FileMode.OpenOrCreate);
			}

			public void OnPropertyChanged(PropertyChangedEventArgs e)
			{
				if (PropertyChanged != null)
					PropertyChanged(this, e);
			}
		}
	}
{% endhighlight %}
{% endtabs %}

2. Set the [DataContext](https://learn.microsoft.com/en-us/dotnet/api/system.windows.frameworkelement.datacontext?view=windowsdesktop-8.0&viewFallbackFrom=netcore-3.1) to the Window for data binding. To add the `DataContext` in XAML, use the following code example.

{% tabs %}
{% highlight xaml tabtitle="MainWindow.xaml" %}
	<Window.DataContext>
		<pdfviewerdemo:PdfReport/>
	</Window.DataContext>
{% endhighlight %}
{% endtabs %}


3.	After setting the `DataContext`, bind the file stream property to the [ItemSource](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_PdfViewer_PdfViewerControl_ItemSource) dependency property of [PdfViewerControl](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html) using the following code sample in XAML.

{% tabs %}
{% highlight xaml tabtitle="MainWindow.xaml" %}
﻿<Window 
    <Grid x:Name="HomeGrid">
        <syncfusion:PdfViewerControl x:Name="pdfViewer" ItemSource="{Binding DocumentStream}"></syncfusion:PdfViewerControl>
    </Grid>
</Window>
	
{% endhighlight %}
{% endtabs %}

The sample project for displaying PDF files using the PDF Viewer is available in the [GitHub](https://github.com/SyncfusionExamples/WPF-PDFViewer-Examples/tree/master/DisplayPDF).

N> Alternatively, the Open button in the toolbar can also be used to load and display the PDF documents at runtime. Refer to this [link](https://help.syncfusion.com/wpf/pdf-viewer/viewing-pdf-files#open-pdf-file-from-the-local-disk-using-toolbar) for more details.


## See Also
- [Getting started](./Getting-Started)
- [Themes](./Themes)
