---
title: Printing Contents in UWP RichTextBox control | Syncfusion
description: Learn here all about Printing Contents support in Syncfusion UWP RichTextBox (SfRichTextBoxAdv) control and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: printing,printmanager,printdocument,print-task,print-preview
---
# Printing Contents in UWP RichTextBox (SfRichTextBoxAdv)

[`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) supports an API to retrieve each page as a bitmap image by specifying the page number. Using this API together with the UWP print manager, you can print the content of `SfRichTextBoxAdv` page by page in Universal Windows Platform applications.

## Registering for printing

The following sample code demonstrates how to register for printing and how to implement the print document event handlers.
{% tabs %}
{% highlight c# %}
// Initializes a list of BitmapImage to store the page images.
List<BitmapImage> pageImages = new List<BitmapImage>();

// Initializes a PrintDocument instance.
PrintDocument printDocument = new PrintDocument();
IPrintDocumentSource printDocumentSource;

// Registers for printing.
void RegisterForPrinting()
{
    // Subscribes to the PrintTaskRequested event.
    PrintManager printManager = PrintManager.GetForCurrentView();
    printManager.PrintTaskRequested += PrintManager_PrintTaskRequested;

    // Initializes the print document source.
    printDocumentSource = printDocument.DocumentSource;

    // Subscribes to the print document events.
    printDocument.Paginate += PrintDocument_Paginate;
    printDocument.GetPreviewPage += PrintDocument_GetPreviewPage;
    printDocument.AddPages += PrintDocument_AddPages;
}

// Handles the PrintTaskRequested event.
private void PrintManager_PrintTaskRequested(PrintManager sender, PrintTaskRequestedEventArgs args)
{
    PrintTask printTask = null;
    printTask = args.Request.CreatePrintTask("Document", sourceRequested =>
    {
        // Subscribes to the PrintTask.Completed event, invoked when the print job finishes.
        printTask.Completed += PrintTask_Completed;
        sourceRequested.SetSource(printDocumentSource);
    });
}

// Handles the PrintTask.Completed event.
private void PrintTask_Completed(PrintTask sender, PrintTaskCompletedEventArgs args)
{
    // Clears the page images to free memory after the print job completes.
    pageImages.Clear();
}

// Handles the Paginate event.
private void PrintDocument_Paginate(object sender, PaginateEventArgs e)
{
    int pageCount = richTextBoxAdv.PageCount;
    PrintDocument printDocument = sender as PrintDocument;
    // Reports the number of preview pages created.
    printDocument.SetPreviewPageCount(pageCount, PreviewPageCountType.Intermediate);
}

// Handles the GetPreviewPage event.
private void PrintDocument_GetPreviewPage(object sender, GetPreviewPageEventArgs e)
{
    PrintDocument printDocument = sender as PrintDocument;
    int currentPreviewPage = 0;
    Interlocked.Exchange(ref currentPreviewPage, e.PageNumber - 1);
    if (pageImages.Count >= e.PageNumber)
    {
        BitmapImage bitmap = pageImages[e.PageNumber - 1];
        Image image = new Image();
        image.Source = bitmap;
        printDocument.SetPreviewPage(e.PageNumber, image);
    }
}

// Handles the AddPages event.
private void PrintDocument_AddPages(object sender, AddPagesEventArgs e)
{
    int pageCount = richTextBoxAdv.PageCount;
    for (int i = 0; i < pageImages.Count; i++)
    {
        Image image = new Image();
        image.Source = pageImages[i];
        printDocument.AddPage(image);
    }
    printDocument.AddPagesComplete();
}



{% endhighlight %}

{% endtabs %}

## Retrieving page images

The following code example demonstrates how to retrieve each page of `SfRichTextBoxAdv` as a bitmap image and how to invoke printing.

{% tabs %}
{% highlight c# %}
// Gets the page images asynchronously.
async Task<bool> GetPageImagesAsync()
{
    TaskCompletionSource<bool> taskCompletionSource = new TaskCompletionSource<bool>();
    // Clears the page images.
    pageImages.Clear();
    int pageCount = richTextBoxAdv.PageCount;
    for (int i = 0; i < pageCount; i++)
    {
        // Retrieves the specified page of SfRichTextBoxAdv as a BitmapImage by specifying the page number.
        BitmapImage bitmapImage = await richTextBoxAdv.GetPageAsImageAsync(i);
        pageImages.Add(bitmapImage);
    }
    taskCompletionSource.SetResult(true);
    return await taskCompletionSource.Task;
}

// Invokes printing asynchronously.
async void InvokePrintAsync()
{
    bool pagesRetrieved = await GetPageImagesAsync();
    if (pagesRetrieved)
        await PrintManager.ShowPrintUIAsync();
}

{% endhighlight %}
{% endtabs %}

## Unregistering printing

The following code example demonstrates how to unregister printing and the print document event handlers.

{% tabs %}
{% highlight c# %}
// Unregisters printing.
void UnRegisterPrinting()
{
    // Unsubscribes from the print document events.
    if (printDocument != null)
    {
        printDocument.Paginate -= PrintDocument_Paginate;
        printDocument.GetPreviewPage -= PrintDocument_GetPreviewPage;
        printDocument.AddPages -= PrintDocument_AddPages;
        printDocumentSource = null;
        printDocument = null;
    }
    // Unsubscribes from the PrintTaskRequested event.
    PrintManager printManager = PrintManager.GetForCurrentView();
    printManager.PrintTaskRequested -= PrintManager_PrintTaskRequested;
}

{% endhighlight %}
{% endtabs %}

## Hiding comments when printing

In the `SfRichTextBoxAdv` control, comments are shown by default when printing the document. You can hide the comments while printing by setting the [`PrintComments`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.EditorSettings.html#Syncfusion_UI_Xaml_RichTextBoxAdv_EditorSettings_PrintComments) property of the [`EditorSettings`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.EditorSettings.html) class.

The following code example illustrates how to hide the comments when printing the document.

{% tabs %}
{% highlight xaml %}
<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv">
    <RichTextBoxAdv:SfRichTextBoxAdv.EditorSettings>
        <RichTextBoxAdv:EditorSettings PrintComments="False" />
    </RichTextBoxAdv:SfRichTextBoxAdv.EditorSettings>
</RichTextBoxAdv:SfRichTextBoxAdv>

{% endhighlight %}
{% highlight c# %}
SfRichTextBoxAdv richTextBoxAdv = new SfRichTextBoxAdv();
richTextBoxAdv.EditorSettings.PrintComments = false;

{% endhighlight %}
{% highlight VB %}
Dim richTextBoxAdv As New SfRichTextBoxAdv()
richTextBoxAdv.EditorSettings.PrintComments = False

{% endhighlight %}
{% endtabs %}

## See also

- [Commands in UWP RichTextBox](./Commands)
- [Selection in UWP RichTextBox](./Selection)
- [Getting started with UWP RichTextBox](./Getting-Started)