---
title: Import and Export in WPF RichTextBox control | Syncfusion
description: Learn here all about Import and Export support in Syncfusion WPF RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: import, export, load, save, async-load, document-events, file-formats
---
# Import and Export in WPF RichTextBox (SfRichTextBoxAdv)

The [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk/wpf-docx-editor) (SfRichTextBoxAdv) allows you to import or export Word documents (.docx, .doc), Rich Text Format documents (.rtf), HTML documents (.htm, .html), XAML documents (.xaml), and text documents (.txt). The import and export operations are exposed through the [Load](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_Load_System_String_), [Save](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_Save_System_String_), and [LoadAsync](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_LoadAsync_System_String_) API members.
## Import

The following sample code demonstrates how to import a document from a file into SfRichTextBoxAdv using the [Load(string)](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_Load_System_String_) overload. Use the `Load(string fileName)` overload for file paths, or `Load(Stream)` to load from a stream.
{% tabs %}
{% highlight c# %}
// Imports the document.
void ImportDocument ()
{
    // Initializes the open file dialog.
    OpenFileDialog openFileDialog = new OpenFileDialog()
    {
        Filter = "All supported files (*.docx,*.doc,*.htm,*.html,*.rtf,*.txt,*.xaml)|*.docx;*.doc;*.htm;*.html;*.rtf;*.txt;*.xaml|Word Document (*.docx)|*.docx|Word 97 - 2003 Document (*.doc)|*.doc|Web Page (*.htm,*.html)|*.htm;*.html|Rich Text File (*.rtf)|*.rtf|Text File (*.txt)|*.txt|Xaml File (*.xaml)|*.xaml",
        FilterIndex = 1,
        Multiselect = false
    };

    if ((bool)openFileDialog.ShowDialog())
    {
        // Loads the file into RichTextBoxAdv.
        richTextBoxAdv.Load(openFileDialog.FileName);
        // Sets the File name as Document Title.
        richTextBoxAdv.DocumentTitle = openFileDialog.FileName.Remove(openFileDialog.FileName.LastIndexOf("."));
    }
}



{% endhighlight %}
{% highlight VB %}
' Imports the document.
Private Sub ImportDocument()
	' Initializes the open file dialog.
	Dim openFileDialog As New OpenFileDialog() With { _
		Key .Filter = "All supported files (*.docx,*.doc,*.htm,*.html,*.rtf,*.txt,*.xaml)|*.docx;*.doc;*.htm;*.html;*.rtf;*.txt;*.xaml|Word Document (*.docx)|*.docx|Word 97 - 2003 Document (*.doc)|*.doc|Web Page (*.htm,*.html)|*.htm;*.html|Rich Text File (*.rtf)|*.rtf|Text File (*.txt)|*.txt|Xaml File (*.xaml)|*.xaml", _
		Key .FilterIndex = 1, _
		Key .Multiselect = False _
	}

	If CBool(openFileDialog.ShowDialog()) Then
		' Loads the file into RichTextBoxAdv.
		richTextBoxAdv.Load(openFileDialog.FileName)
		' Sets the File name as Document Title.
		richTextBoxAdv.DocumentTitle = openFileDialog.FileName.Remove(openFileDialog.FileName.LastIndexOf("."))
	End If
End Sub


{% endhighlight %}
{% endtabs %}

## Export

The following code example demonstrates how to export the SfRichTextBoxAdv contents into a file using the [Save(string)](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_Save_System_String_) overload. Use the `Save(string fileName)` overload for file paths, or `Save(Stream)` to write the document to a stream.
{% tabs %}
{% highlight c# %}
// Exports the document.
void ExportDocument ()
{    
    // Initializes the file save picker.
    SaveFileDialog saveFileDialog = new SaveFileDialog()
    {
        Filter = "Word Document (*.docx)|*.docx|Word 97 - 2003 Document (*.doc)|*.doc|Web Page (*.htm,*.html)|*.htm;*.html|Rich Text File (*.rtf)|*.rtf|Text File (*.txt)|*.txt|Xaml File (*.xaml)|*.xaml",
        FilterIndex = 1
    };
    if ((bool)saveFileDialog.ShowDialog())
    {
        // Saves the document content into a file.
        richTextBoxAdv.Save(saveFileDialog.FileName);
    }
}



{% endhighlight %}
{% highlight VB %}
' Exports the document.
Private Sub ExportDocument()
	' Initializes the file save picker.
	Dim saveFileDialog As New SaveFileDialog() With { _
		Key .Filter = "Word Document (*.docx)|*.docx|Word 97 - 2003 Document (*.doc)|*.doc|Web Page (*.htm,*.html)|*.htm;*.html|Rich Text File (*.rtf)|*.rtf|Text File (*.txt)|*.txt|Xaml File (*.xaml)|*.xaml", _
		Key .FilterIndex = 1 _
	}
	If CBool(saveFileDialog.ShowDialog()) Then
		' Saves the document content into a file.
		richTextBoxAdv.Save(saveFileDialog.FileName)
	End If
End Sub


{% endhighlight %}
{% endtabs %}

N> When the SfRichTextBoxAdv control encounters an unsupported element, it does not render the element; instead, it continues to the next supported element and renders it. Examples of unsupported elements are AutoShapes, watermarks, charts, SmartArt, WordArt, equations, document structure tags, styles, wrapping styles, fields other than hyperlinks, absolutely positioned tables, and absolutely positioned images. Content in unsupported elements is skipped without raising an error.

## UI commands

The [OpenDocumentCommand](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_OpenDocumentCommand) and [SaveDocumentCommand](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_SaveDocumentCommand) UI commands show built-in Open and Save dialogs, similar to the `Load` / `Save` methods shown above, but they handle the file-selection UI for you.

The following code example demonstrates how to bind commands for importing and exporting documents.
{% tabs %}
{% highlight xaml %}
<!-- Binds button to the OpenDocumentCommand -->
<Button Content="Open" Command="RichTextBoxAdv:SfRichTextBoxAdv.OpenDocumentCommand" CommandTarget="{Binding ElementName=richTextBoxAdv}" />
<!-- Binds button to the SaveDocumentCommand -->
<Button Content="Save" Command="RichTextBoxAdv:SfRichTextBoxAdv.SaveDocumentCommand" CommandTarget="{Binding ElementName=richTextBoxAdv}" />


{% endhighlight %}

{% endtabs %}

N> In order to perform import/export documents, the standard keyboard shortcuts such as CTRL + O, CTRL + S can also be used.

## Asynchronous import settings

The following code example demonstrates how to load a document asynchronously using the [LoadAsync](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_LoadAsync_System_String_) method.

{% tabs %}
{% highlight c# %}
// Loads the document asynchronously.
richTextBoxAdv.LoadAsync(openFileDialog.FileName);
{% endhighlight %}
{% highlight VB %}
' Loads the document asynchronously.
richTextBoxAdv.LoadAsync(openFileDialog.FileName)
{% endhighlight %}
{% endtabs %}

### Show or hide the loading page number

The SfRichTextBoxAdv control shows the current loading page number by default at the bottom-right corner of the control while loading the document asynchronously. You can hide this loading page number by setting the [`ShowPageNumber`](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.LoadAsyncSettings.html#Syncfusion_Windows_Controls_RichTextBoxAdv_LoadAsyncSettings_ShowPageNumber) property of the `LoadAsyncSettings` class to `false`.

The following code example demonstrates how to hide the loading page number in SfRichTextBoxAdv control.

{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv">
       <RichTextBoxAdv:SfRichTextBoxAdv.LoadAsyncSettings>
           <RichTextBoxAdv:LoadAsyncSettings ShowPageNumber="False"/>
       </RichTextBoxAdv:SfRichTextBoxAdv.LoadAsyncSettings>
</RichTextBoxAdv:SfRichTextBoxAdv>


{% endhighlight %}
{% highlight c# %}
// Initializes a new instance of RichTextBoxAdv.
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
////Hides the loading page number.
richTextBoxAdv.LoadAsyncSettings.ShowPageNumber = false;


{% endhighlight %}
{% highlight VB %}
' Initializes a new instance of RichTextBoxAdv.
Dim richTextBoxAdv As New SfRichTextBoxAdv()
' Hides the loading page number.
richTextBoxAdv.LoadAsyncSettings.ShowPageNumber = false


{% endhighlight %}

{% endtabs %}

N> This API is supported starting from the release version in which `LoadAsyncSettings` was introduced.


## Document load and save events

SfRichTextBoxAdv also provides the following events to notify when document loading and saving start and complete. The following example shows how to subscribe to them.

{% tabs %}
{% highlight c# %}
// Hooks the event handlers.
richTextBoxAdv.DocumentChanging += (s, e) => { /* document is about to load */ };
richTextBoxAdv.DocumentChanged  += (s, e) => { /* document has finished loading */ };
richTextBoxAdv.DocumentSaving   += (s, e) => { /* document is about to save */ };
richTextBoxAdv.DocumentSaved    += (s, e) => { /* document has finished saving */ };
{% endhighlight %}
{% highlight VB %}
' Hooks the event handlers.
AddHandler richTextBoxAdv.DocumentChanging, Sub(s, e)
    ' document is about to load
End Sub
AddHandler richTextBoxAdv.DocumentChanged, Sub(s, e)
    ' document has finished loading
End Sub
AddHandler richTextBoxAdv.DocumentSaving, Sub(s, e)
    ' document is about to save
End Sub
AddHandler richTextBoxAdv.DocumentSaved, Sub(s, e)
    ' document has finished saving
End Sub
{% endhighlight %}
{% endtabs %}


### Events table

| Event | Description |
|-------|-------------|
| [DocumentChanging](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_DocumentChanging) | Triggered when the document starts loading. |
| [DocumentChanged](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_DocumentChanged) | Triggered after the document is successfully loaded. |
| [DocumentSaving](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_DocumentSaving) | Triggered when the document starts saving. |
| [DocumentSaved](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.Controls.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_Windows_Controls_RichTextBoxAdv_SfRichTextBoxAdv_DocumentSaved) | Triggered after the document is successfully saved. |

N> This API is supported starting from the release version in which these events were introduced.

N> You can refer to our [WPF RichTextBox](https://www.syncfusion.com/docx-editor-sdk-wpf-docx-editor) feature tour page for its groundbreaking feature representations. You can also explore our [WPF RichTextBox example](https://github.com/syncfusion/docx-editor-sdk-wpf-demos) to know how to render and configure the editing tool.
## See Also

- [Commands in WPF RichTextBox](Commands)
- [Clipboard in WPF RichTextBox](Clipboard)
- [Document Structure in WPF RichTextBox](Document-Structure)