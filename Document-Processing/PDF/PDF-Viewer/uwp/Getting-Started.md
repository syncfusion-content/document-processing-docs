---
layout: post
title: Getting Started with UWP Pdf Viewer control | Syncfusion
description: Learn here about getting started with Syncfusion<sup>®</sup> UWP Pdf Viewer (SfPdfViewer) control, its elements and more.
platform: document-processing
control: PDF viewer
documentation: ug
---

# Getting Started with UWP PDF Viewer (SfPdfViewer)
This section explains about the assemblies required for the deployment of [UWP PDF Viewer]() (SfPdfViewer) and how to create simple application using the SfPdfViewer control.

## Required Assemblies

The following list of assemblies are required for adding a PDF viewer control to the Universal Windows Platform application.

<table>
<tr>
<th>Assembly</th>
<th>Description</th>
</tr>
<tr>
<td>Syncfusion.SfPdfViewer.UWP</td>
<td>This component contains the rendering area and other related UI elements.</td>
</tr>
<tr>
<td>Syncfusion.Pdf.UWP</td>
<td>This library contains the PDF reader and creator that supports the PDF Viewer.</td>
</tr>
<tr>
<td>Syncfusion.SfColorPickers.UWP</td>
<td>This component contains UI controls for Color Picker that are used in the PDF Viewer.</td>
</tr>
<tr>
<td>Syncfusion.SfInput.UWP</td>
<td>This component contains input controls like combobox, range slider and text boxes used in the PDF Viewer</td>
</tr>
<tr>
<td>Syncfusion.SfRadialMenu.UWP</td>
<td>This component contains UI controls for context menu that are used in the PDF Viewer.</td>
</tr>
<tr>
<td>Syncfusion.SfShared.UWP</td>
<td>This component contains various UI controls (Numeric UpDown) that are used in the PDF Viewer.</td>
</tr>
<table>

Each assembly must be placed together with its corresponding resource files (i.e., the resource files for an assembly should reside in the same folder as that assembly). The assemblies do not all have to be in a single folder — each assembly may live in its own folder so long as its resource files are kept alongside it. The screenshot shows only the SfPdfViewer assembly for brevity.

![Dependent assemblies needed for SfPdfViewerControl](Getting-Started_images/Getting-Started_img3.jpeg)

This co-location matters only if you move assemblies out of their installed location. If you relocate an assembly, be sure to move its resource files with it and place them in the same folder as that assembly.

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>®</sup> assemblies from trial setup or from the NuGet feed, you also have to include a license key in your projects. Please refer to [this link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>®</sup> license key in your UWP application to use our components.


## Create a simple application with the SfPdfViewer

Follow the below steps to create a simple application with the SfPdfViewer.

1. Create a new UWP application in the Visual Studio.

2. Open the Visual Studio tool box and drag the [SfPdfViewerControl](https://help.syncfusion.com/cr/uwp/Syncfusion.Windows.PdfViewer.SfPdfViewerControl.html) toolbox item to the designer window. Name the [SfPdfViewerControl](https://help.syncfusion.com/cr/uwp/Syncfusion.Windows.PdfViewer.SfPdfViewerControl.html) as pdfViewer.

![SfPdfViewerControl in visual studio toolbox](Getting-Started_images/Getting-Started_img1.jpeg)

When you drag the SfPdfViewer toolbox item to the window, it automatically adds the required assembly references to the current application.

### Add PDF Viewer using code

To add the SfPdfViewer by using code, add the required assemblies mentioned previously as reference to the project.

Add the following code in XAML to make use of the SfPdfViewer.

{% tabs %}
{% highlight xaml %}
<Page
    x:Class="SimpleSample.MainPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:local="using:SimpleSample"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:syncfusion="using:Syncfusion.Windows.PdfViewer"
    >
    <Grid>
        <syncfusion:SfPdfViewerControl Name="pdfViewer"> </syncfusion:SfPdfViewerControl>
    </Grid>
</Page>
{% endhighlight %}
{% endtabs %}

## Loading PDF document through binding

The following steps explains how to load a PDF document through binding.

1. The SfPdfViewer’s [ItemSource](https://help.syncfusion.com/cr/uwp/Syncfusion.Windows.PdfViewer.SfPdfViewerControl.html#Syncfusion_Windows_PdfViewer_SfPdfViewerControl_ItemsSource) property allows you to bind PDF documents in XAML. The ItemsSource property accepts a stream input that can be bound to the viewer during initialization.

2. To bind the PDF file, add the PDF file to the project as an asset. Right Click the PDF file and open the properties window. In the properties window, set the Build Action as Embedded Resource.

3. Create a simple class that loads a PDF report and provides the stream as a property that can be bound to the viewer as shown in the following code. Save the class file as PdfReport.cs.

{% tabs %}
{% highlight c# %}
class PdfReport : INotifyPropertyChanged
    {
        private Stream docStream;
        public event PropertyChangedEventHandler PropertyChanged;

        /// <summary>
        /// Stream object to be bound to the ItemsSource of the PDF Viewer
        /// </summary>
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
            //Loads the stream from the embedded resource.
            Assembly assembly = typeof(MainPage).GetTypeInfo().Assembly;
            docStream = assembly.GetManifestResourceStream("SimpleSample.Assets.JavaScript_Succinctly.pdf");
        }

        public void OnPropertyChanged(PropertyChangedEventArgs e)
        {
            if (PropertyChanged != null)
                PropertyChanged(this, e);
        }        
    }
{% endhighlight %}
{% highlight vbnet %}
Class PdfReport
    Implements INotifyPropertyChanged

    Private docStream As Stream
    Private Event PropertyChanged As PropertyChangedEventHandler Implements INotifyPropertyChanged.PropertyChanged

    ''' <summary>
    ''' Stream object to be bound to the ItemsSource of the PDF Viewer
    ''' </summary>
    Public Property DocumentStream As Stream
        Get
            Return docStream
        End Get
        Set
            docStream = Value
            OnPropertyChanged(New PropertyChangedEventArgs("DocumentStream"))
        End Set
    End Property

    Public Sub New()
        'Loads the stream from the embedded resource.
        Dim assembly As Assembly = GetType(MainPage).GetTypeInfo().Assembly
        docStream = assembly.GetManifestResourceStream("SimpleSample.JavaScript_Succinctly.pdf")
    End Sub

    Public Sub OnPropertyChanged(e As PropertyChangedEventArgs)
        RaiseEvent PropertyChanged(Me, e)
    End Sub
End Class
{% endhighlight %}
{% endtabs %}

In order to bind the [DocumentStream](https://help.syncfusion.com/cr/uwp/Syncfusion.Windows.PdfViewer.SfPdfViewerControl.html#Syncfusion_Windows_PdfViewer_SfPdfViewerControl_DocumentStream) property of the PdfReport class, the [DataContext](https://learn.microsoft.com/en-us/uwp/api/windows.ui.xaml.frameworkelement.datacontext?view=winrt-28000) needs to be set for the page. To add the [DataContext](https://learn.microsoft.com/en-us/uwp/api/windows.ui.xaml.frameworkelement.datacontext?view=winrt-28000) in XAML, use the following code example.

{% tabs %}
{% highlight xaml %}
<Page
    x:Class="SimpleSample.MainPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:local="using:SimpleSample"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:syncfusion="using:Syncfusion.Windows.PdfViewer"
    Loaded="Page_Loaded">
    <Page.DataContext>
        <local:PdfReport/>
    </Page.DataContext>
    <Grid>
        <syncfusion:SfPdfViewerControl Name="pdfViewer"></syncfusion:SfPdfViewerControl>
    </Grid>
</Page>
{% endhighlight %}
{% endtabs %}

Once the DataContext has been set, the ItemSource dependency property can be set by using the following code in XAML.

{% tabs %}
{% highlight xaml %}
<Page
    x:Class="SimpleSample.MainPage"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:local="using:SimpleSample"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:syncfusion="using:Syncfusion.Windows.PdfViewer"
    Loaded="Page_Loaded">
    <Page.DataContext>
        <local:PdfReport/>
    </Page.DataContext>
    <Grid>
        <syncfusion:SfPdfViewerControl Name="pdfViewer" ItemsSource="{Binding DocumentStream}"></syncfusion:SfPdfViewerControl>
    </Grid>
</Page>
{% endhighlight %}
{% endtabs %}


## Loading PDF document using FileOpenPicker

Alternatively, a FileOpenPicker can also be used to load documents at run time. To achieve this, include a button to the application.

{% tabs %}
{% highlight xaml %}
<Button Name="Open" Click="Open_Click" Content="Open"/>
{% endhighlight %}
{% endtabs %}

Include the below code in the click event of the button.

{% tabs %}
{% highlight c# %}
async private void Open_Click(object sender, RoutedEventArgs e)
        {
            //Opens a file picker.
            var picker = new FileOpenPicker();
            picker.SuggestedStartLocation = PickerLocationId.DocumentsLibrary;
            picker.ViewMode = PickerViewMode.List;
            //Filters PDF files in the documents library.
            picker.FileTypeFilter.Add(".pdf");
            var file = await picker.PickSingleFileAsync();
            if (file == null) return;
            //Reads the stream of the loaded PDF document.
            var stream = await file.OpenAsync(Windows.Storage.FileAccessMode.Read);
            Stream fileStream = stream.AsStreamForRead();
            byte[] buffer = new byte[fileStream.Length];
            fileStream.Read(buffer, 0, buffer.Length);
            //Loads the PDF document.
            PdfLoadedDocument loadedDocument = new PdfLoadedDocument(buffer);
            pdfViewer.LoadDocument(loadedDocument);
        }
{% endhighlight %}
{% highlight vbnet %}
Private Async Sub Open_Click(sender As Object, e As RoutedEventArgs)
    'Opens a file picker.
    Dim picker = New FileOpenPicker()
    picker.SuggestedStartLocation = PickerLocationId.DocumentsLibrary
    picker.ViewMode = PickerViewMode.List
    'Filters PDF files in the documents library.
    picker.FileTypeFilter.Add(".pdf")
    Dim file = Await picker.PickSingleFileAsync()
    If file Is Nothing Then
        Return
    End If
    'Reads the stream of the loaded PDF document.
    Dim stream = Await file.OpenAsync(Windows.Storage.FileAccessMode.Read)
    Dim fileStream As Stream = stream.AsStreamForRead()
    Dim buffer As Byte() = New Byte(fileStream.Length - 1) {}
    fileStream.Read(buffer, 0, buffer.Length)
    'Loads the PDF document.
    Dim loadedDocument As New PdfLoadedDocument(buffer)
    pdfViewer.LoadDocument(loadedDocument)
End Sub
{% endhighlight %}
{% endtabs %}

## See Also
- [Viewing PDF](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/viewing-pdf)
- [UWP PDF Viewer Overview](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/overview)
- [Magnification](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/working-with-magnification)

