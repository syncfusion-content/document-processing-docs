---
layout: post
title: Viewing PDF in UWP PDF Viewer control | Syncfusion
description: Learn here all about Viewing PDF support in Syncfusion<sup>®</sup> UWP PDF Viewer (SfPdfViewer) control and more.
platform: document-processing
control: PDF viewer
documentation: ug
---

# Viewing PDF in UWP PDF Viewer (SfPdfViewer)
The [`SfPdfViewer`](https://help.syncfusion.com/cr/uwp/Syncfusion.Windows.PdfViewer.SfPdfViewerControl.html) allows you to load the PDF documents from the [`stream`](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream?view=net-5.0), [`storageFile`](https://learn.microsoft.com/en-us/uwp/api/windows.storage.storagefile?view=winrt-19041), and [`PdfLoadedDocument`](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) object.

## Loading a PDF using PdfLoadedDocument object
The [`SfPdfViewer`](https://help.syncfusion.com/cr/uwp/Syncfusion.Windows.PdfViewer.SfPdfViewerControl.html) allows you to load the PDF document synchronously and asynchronously from the specified pdfLoadedDocument object using the `LoadDocument` and  `LoadDocumentAsync` methods respectively.

The following code explains how to load the document synchronously using a [`PdfLoadedDocument`](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) object that was created from the PDF in the Assets folder of the application.

{% tabs %}
{% highlight c# %}
Assembly assembly = typeof(MainPage).GetTypeInfo().Assembly;
//Loads the stream from the embedded resource.
fileStream = assembly.GetManifestResourceStream("ApplicationNameSpace.Assets.PDFFileName.pdf");
byte[] buffer = new byte[fileStream.Length];
fileStream.Read(buffer, 0, buffer.Length);
//Create a new PDFLoadedDocument object.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(buffer);
pdfViewer.LoadDocument(loadedDocument);
{% endhighlight %}
{% highlight vbnet %}
'Create a new PDFLoadedDocument object.
Dim loadedDocument As New PdfLoadedDocument(Buffer)
pdfViewer.LoadDocument(loadedDocument)
{% endhighlight %}
{% endtabs %}

The following code explains how to load the document asynchronously using the [`PdfLoadedDocument`](https://help.syncfusion.com/cr/file-formats/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) object that was created from the PDF in the Assets folder of the application.

{% tabs %}
{% highlight c# %}
//Create a new PDFLoadedDocument object.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(buffer);
CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();
await pdfViewer.LoadDocumentAsync(loadedDocument, cancellationTokenSource.Token);
pdfViewer.LoadDocument(loadedDocument);
{% endhighlight %}
{% highlight vbnet %}
'Create a new PDFLoadedDocument object.
Dim loadedDocument As New PdfLoadedDocument(Buffer)
Dim cancellationTokenSource As New CancellationTokenSource()
Await pdfViewer.LoadDocumentAsync(loadedDocument, cancellationTokenSource.Token)
{% endhighlight %}
{% endtabs %}

In the above code sample, the [`CancellationToken`](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken?view=net-5.0) enables you to cancel the asynchronous loading of a PDF document when it is in progress.

## Loading a PDF using Stream object
The [`SfPdfViewer`](https://help.syncfusion.com/cr/uwp/Syncfusion.Windows.PdfViewer.SfPdfViewerControl.html) allows you to load the PDF document synchronously and asynchronously from the specified stream using the `LoadDocument` and `LoadDocumentAsync` methods respectively.

The following code explains how to load the document synchronously using a [`stream`](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream?view=net-5.0) object that was created from the PDF in the Assets folder of the application.

{% tabs %}
{% highlight c# %}
Assembly assembly = typeof(MainPage).GetTypeInfo().Assembly; 
//Loads the stream from the embedded resource.
fileStream = assembly.GetManifestResourceStream("ApplicationNameSpace.Assets.PDFFileName.pdf"); 
pdfViewer.LoadDocument(fileStream);
{% endhighlight %}
{% highlight vbnet %}
'Loads the stream from the embedded resource. 
Dim assembly As Assembly = GetType(MainPage).GetTypeInfo().Assembly 
docStream = assembly.GetManifestResourceStream("ApplicationNameSpace. Assets.PDFFileName.pdf")
pdfViewer.LoadDocument(docStream)
{% endhighlight %}
{% endtabs %}

The following code explains how to load the document asynchronously using a [`stream`](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream?view=net-5.0) object that was created from the PDF in the Assets folder of the application.

{% tabs %}
{% highlight c# %}
Assembly assembly = typeof(MainPage).GetTypeInfo().Assembly; 
//Loads the stream from the embedded resource.
fileStream = assembly.GetManifestResourceStream("ApplicationNameSpace.Assets.PDFFileName.pdf"); 
CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();
await pdfViewer.LoadDocumentAsync(fileStream, cancellationTokenSource.Token);
{% endhighlight %}
{% highlight vbnet %}
Assembly assembly = typeof(MainPage).GetTypeInfo().Assembly; 
//Loads the stream from the embedded resource.
fileStream = assembly.GetManifestResourceStream("ApplicationNameSpace.Assets.PDFFileName.pdf"); 
Dim cancellationTokenSource As New CancellationTokenSource()
Await pdfViewer.LoadDocumentAsync(fileStream, cancellationTokenSource.Token)
{% endhighlight %}
{% endtabs %}

In the above code sample, the [`CancellationToken`](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken?view=net-5.0) enables you to cancel the asynchronous loading of a PDF document when it is in progress.

## Loading PDF through binding

The [`SfPdfViewer`](https://help.syncfusion.com/cr/uwp/Syncfusion.Windows.PdfViewer.SfPdfViewerControl.html) supports loading a PDF document using data binding. This is useful in MVVM-based applications where the document stream is exposed as a property.

### Creating a view model

1. Add a PDF file to the project and set its **Build Action** to **Embedded Resource**.

2. Create a simple class (`PdfReport.cs`) that provides the PDF stream property for binding.

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

### Binding the document

To bind the [DocumentStream](https://help.syncfusion.com/cr/uwp/Syncfusion.Windows.PdfViewer.SfPdfViewerControl.html#Syncfusion_Windows_PdfViewer_SfPdfViewerControl_DocumentStream) property of the PdfReport class to the PDF viewer, you need to set the [DataContext](https://learn.microsoft.com/en-us/uwp/api/windows.ui.xaml.frameworkelement.datacontext?view=winrt-28000) of the page. After setting the DataContext, bind the [`ItemsSource`](https://help.syncfusion.com/cr/uwp/Syncfusion.Windows.PdfViewer.SfPdfViewerControl.html#Syncfusion_Windows_PdfViewer_SfPdfViewerControl_ItemsSource) property of the `SfPdfViewer` to the `DocumentStream` property.

The following example shows how to set the `DataContext` and `ItemsSource`property in XAML:

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

The `SfPdfViewer` allows users to select and load a PDF document at runtime using the `FileOpenPicker`. The selected file is returned as a `StorageFile`, which can be directly loaded into the viewer.

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

## Loading a PDF using the StorageFile object

The [`SfPdfViewer`](https://help.syncfusion.com/cr/uwp/Syncfusion.Windows.PdfViewer.SfPdfViewerControl.html) allows you to load the PDF document synchronously and asynchronously from the specified storage file using the `LoadDocument` and  `LoadDocumentAsync` methods respectively.

The following code explains how to load the document synchronously using a [`StorageFile`](https://learn.microsoft.com/en-us/uwp/api/windows.storage.storagefile?view=winrt-19041) object that was created from the PDF in the Assets folder of the application.

{% tabs %}
{% highlight c# %}
//Opens a file picker.
var picker = new FileOpenPicker();
picker.SuggestedStartLocation = PickerLocationId.DocumentsLibrary;
picker.ViewMode = PickerViewMode.List;
//Filters the PDF files in the documents library.
picker.FileTypeFilter.Add(".pdf");
StorageFile file = await picker.PickSingleFileAsync();
pdfViewer.LoadDocument(file);
{% endhighlight %}
{% highlight vbnet %}
'Opens a file picker. Dim picker = New FileOpenPicker()
picker.SuggestedStartLocation = PickerLocationId.DocumentsLibrary 
picker.ViewMode = PickerViewMode.List 
'Filters the PDF files in the documents library. 
picker.FileTypeFilter.Add(".pdf") 
Dim file = Await picker.PickSingleFileAsync()
pdfViewer.LoadDocument(file)
{% endhighlight %}
{% endtabs %}

The following code explains how to load the document asynchronously using a [`StorageFile`](https://learn.microsoft.com/en-us/uwp/api/windows.storage.storagefile?view=winrt-19041) object that was created from the PDF in the Assets folder of the application.

{% tabs %}
{% highlight c# %}
//Opens a file picker.
var picker = new FileOpenPicker();
picker.SuggestedStartLocation = PickerLocationId.DocumentsLibrary;
picker.ViewMode = PickerViewMode.List;
//Filters the PDF files in the documents library.
picker.FileTypeFilter.Add(".pdf");
StorageFile file = await picker.PickSingleFileAsync();
CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();
await pdfViewer.LoadDocumentAsync(file, cancellationTokenSource.Token);
{% endhighlight %}
{% highlight vbnet %}
'Opens a file picker. Dim picker = New FileOpenPicker()
picker.SuggestedStartLocation = PickerLocationId.DocumentsLibrary 
picker.ViewMode = PickerViewMode.List 
'Filters the PDF files in the documents library. 
picker.FileTypeFilter.Add(".pdf") 
Dim file = Await picker.PickSingleFileAsync()
Dim cancellationTokenSource As New CancellationTokenSource()
Await pdfViewer.LoadDocument(file, cancellationTokenSource.Token);
{% endhighlight %}
{% endtabs %}

In the above code sample, the [`CancellationToken`](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken?view=net-5.0) enables you to cancel the asynchronous loading of a PDF document when it is in progress.

## Unloading PDF document from the viewer

The SfPdfViewer control allows you to unload the PDF document from the viewer when the control is no longer in use. This releases the PDF document and all its associated resources.

{% tabs %}
{% highlight c# %}
private void Unload_Click(object sender, RoutedEventArgs e)
{
	//Unloads the PDF document displayed in the PDF Viewer Control.
	pdfViewer.Unload();
}
{% endhighlight %}
{% endtabs %}

## Saving a PDF document

The `Save` method returns the PDF document along with the changes made (annotations addition and modification) as a stream, which can be saved as a file.

{% tabs %}
{% highlight c# %}
//Save the PDF document.
Stream pdfDocumentStream = pdfViewerControl.Save();
{% endhighlight %}
{% endtabs %}

N> The `Save` method does not save stamp annotations in the PDF document. Use the `SaveAsync` method to save them.

## Saving a PDF document asynchronously

The PDF Viewer also allows you to save and return the PDF document with the changes as a stream asynchronously using the `SaveAsync` method.

{% tabs %}
{% highlight c# %}
//Save the PDF document asynchronously.
Task<Stream> pdfDocumentStream = pdfViewerControl.SaveAsync();
{% endhighlight %}
{% endtabs %}

## Events to track PDF loading

The PDF Viewer control allows you to track PDF loading by using the `DocumentLoaded` event. This event is triggered after the document is properly loaded in the SfPdfViewer.

{% tabs %}
{% highlight c# %}
SfPdfViewerControl pdfViewer = new SfPdfViewerControl();

pdfViewer.DocumentLoaded += PdfViewer_DocumentLoaded;

private void PdfViewer_DocumentLoaded(object sender, DocumentLoadedEventArgs args)
{
	//Gets the total page count of the loaded PDF document.
	int pageCount = pdfViewer.PageCount;
}
{% endhighlight %}
{% endtabs %}

## Disposing the managed resources of PDF Viewer

The PDF Viewer control allows you to dispose the managed resources associated with the viewer. To do this, call the `Dispose` method of the PDF Viewer control as shown in the following code sample.

{% tabs %}
{% highlight c# %}
//Disposes all managed resources of SfPdfViewer.
pdfViewer.Dispose();
{% endhighlight %}
{% endtabs %}

## See Also
- [Custom toolbar](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/creating-custom-toolbar)
- [Annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/working-with-annotations)
- [Bookmarks](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/bookmark-navigation)