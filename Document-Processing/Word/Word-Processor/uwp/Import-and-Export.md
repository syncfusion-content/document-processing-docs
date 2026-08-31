---
title: Import and Export in UWP DOCX Editor | Syncfusion
description: The import and export in UWP DOCX Editor support multiple file formats, enabling loading and saving of word, rich text, HTML and text documents.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: import,export,load,save,loadasync,saveasync,fileopenpicker,filesavepicker,storage-file,loadasyncsettings,showpagenumber,documentchanging,documentsaving
---
# Import and Export in UWP DOCX Editor

The [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) allows you to import and export Word documents (`.docx`, `.doc`), rich-text-format documents (`.rtf`), HTML documents (`.htm`, `.html`), and text documents (`.txt`).

## Importing a document

The following sample code demonstrates how to import content from a storage file into `SfRichTextBoxAdv`.

{% tabs %}
{% highlight c# %}
// Imports the document asynchronously.
async void ImportDocumentAsync()
{
    // Initializes the file open picker.
    FileOpenPicker fileOpenPicker = new FileOpenPicker();
    fileOpenPicker.FileTypeFilter.Add(".docx");
    fileOpenPicker.FileTypeFilter.Add(".doc");
    fileOpenPicker.FileTypeFilter.Add(".rtf");
    fileOpenPicker.FileTypeFilter.Add(".htm");
    fileOpenPicker.FileTypeFilter.Add(".html");
    fileOpenPicker.FileTypeFilter.Add(".txt");

    // Picks a single storage file using the file open picker.
    StorageFile storageFile = await fileOpenPicker.PickSingleFileAsync();

    if (storageFile != null)
        // Loads the storage file into RichTextBoxAdv asynchronously.
        await richTextBoxAdv.LoadAsync(storageFile);
}

{% endhighlight %}
{% highlight VB %}
' Imports the document asynchronously.
Private Async Sub ImportDocumentAsync()
    ' Initializes the file open picker.
    Dim fileOpenPicker As New FileOpenPicker()
    fileOpenPicker.FileTypeFilter.Add(".docx")
    fileOpenPicker.FileTypeFilter.Add(".doc")
    fileOpenPicker.FileTypeFilter.Add(".rtf")
    fileOpenPicker.FileTypeFilter.Add(".htm")
    fileOpenPicker.FileTypeFilter.Add(".html")
    fileOpenPicker.FileTypeFilter.Add(".txt")

    ' Picks a single storage file using the file open picker.
    Dim storageFile As StorageFile = Await fileOpenPicker.PickSingleFileAsync()

    If storageFile IsNot Nothing Then
        ' Loads the storage file into RichTextBoxAdv asynchronously.
        Await richTextBoxAdv.LoadAsync(storageFile)
    End If
End Sub

{% endhighlight %}
{% endtabs %}

## Exporting a document

The following code example demonstrates how to export the `SfRichTextBoxAdv` content as a storage file.

{% tabs %}
{% highlight c# %}
// Exports the document asynchronously.
async void ExportDocumentAsync()
{
    // Initializes the file save picker.
    FileSavePicker fileSavePicker = new FileSavePicker();
    fileSavePicker.FileTypeChoices.Add("Word Document", new List<string>() { ".docx" });
    fileSavePicker.FileTypeChoices.Add("Word 97-2003 Document", new List<string>() { ".doc" });
    fileSavePicker.FileTypeChoices.Add("Rich Text Format", new List<string>() { ".rtf" });
    fileSavePicker.FileTypeChoices.Add("HTML Document", new List<string>() { ".html" });
    fileSavePicker.FileTypeChoices.Add("Text Document", new List<string>() { ".txt" });

    // Picks the storage file to save.
    StorageFile storageFile = await fileSavePicker.PickSaveFileAsync();

    if (storageFile != null)
        // Saves RichTextBoxAdv content into the storage file asynchronously.
        await richTextBoxAdv.SaveAsync(storageFile);
}

{% endhighlight %}
{% highlight VB %}
' Exports the document asynchronously.
Private Async Sub ExportDocumentAsync()
    ' Initializes the file save picker.
    Dim fileSavePicker As New FileSavePicker()
    fileSavePicker.FileTypeChoices.Add("Word Document", New List(Of String)() From {".docx"})
    fileSavePicker.FileTypeChoices.Add("Word 97-2003 Document", New List(Of String)() From {".doc"})
    fileSavePicker.FileTypeChoices.Add("Rich Text Format", New List(Of String)() From {".rtf"})
    fileSavePicker.FileTypeChoices.Add("HTML Document", New List(Of String)() From {".html"})
    fileSavePicker.FileTypeChoices.Add("Text Document", New List(Of String)() From {".txt"})

    ' Picks the storage file to save.
    Dim storageFile As StorageFile = Await fileSavePicker.PickSaveFileAsync()

    If storageFile IsNot Nothing Then
        ' Saves RichTextBoxAdv content into the storage file asynchronously.
        Await richTextBoxAdv.SaveAsync(storageFile)
    End If
End Sub

{% endhighlight %}
{% endtabs %}

N> 1. When the `SfRichTextBoxAdv` control encounters an unsupported element, it does not render the element. Instead, it continues to the next supported element and renders that. 
N> 2. Examples of unsupported elements are AutoShapes, watermarks, charts, SmartArt, WordArt, equations, document structure tags, styles, wrapping styles, fields other than hyperlinks, absolutely positioned tables, and absolutely positioned images.

## Asynchronous loading settings

### Show or hide the loading page number

The `SfRichTextBoxAdv` control shows the current loading page number by default in the bottom-right corner of the control while loading the document asynchronously. You can hide this loading page number by setting the [`ShowPageNumber`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.LoadAsyncSettings.html#Syncfusion_UI_Xaml_RichTextBoxAdv_LoadAsyncSettings_ShowPageNumberProperty) property of the [`LoadAsyncSettings`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.LoadAsyncSettings.html) class.

The following code example demonstrates how to hide the loading page number in the `SfRichTextBoxAdv` control.

{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv">
    <RichTextBoxAdv:SfRichTextBoxAdv.LoadAsyncSettings>
        <RichTextBoxAdv:LoadAsyncSettings ShowPageNumber="False" />
    </RichTextBoxAdv:SfRichTextBoxAdv.LoadAsyncSettings>
</RichTextBoxAdv:SfRichTextBoxAdv>

{% endhighlight %}
{% highlight c# %}
// Initializes a new instance of SfRichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
// Hides the loading page number.
richTextBoxAdv.LoadAsyncSettings.ShowPageNumber = false;

{% endhighlight %}
{% highlight VB %}
' Initializes a new instance of SfRichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()
' Hides the loading page number.
richTextBoxAdv.LoadAsyncSettings.ShowPageNumber = False

{% endhighlight %}
{% endtabs %}

N> This API is supported starting from release version v17.4.0.X.

## Events for document load and save notifications

`SfRichTextBoxAdv` also provides the following events to notify when a document starts and completes loading and saving.

### Events table

| Event | Description |
| --- | --- |
| `DocumentChanging` | Fires when the document starts loading. |
| `DocumentChanged` | Fires after the document is successfully loaded. |
| `DocumentSaving` | Fires when the document starts saving. |
| `DocumentSaved` | Fires after the document is successfully saved. |

N> These events are supported from Syncfusion UWP DOCX Editor v18.2.0.X onwards.

## See also

- [Commands in UWP DOCX Editor](./Commands)
- [Document properties in UWP DOCX Editor](./Document-Properties)
- [Getting started with UWP DOCX Editor](./Getting-Started)
