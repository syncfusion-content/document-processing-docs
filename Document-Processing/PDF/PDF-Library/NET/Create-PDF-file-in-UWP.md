---
title: Create or Generate PDF file in UWP | Syncfusion
description: Learn how to create or generate a PDF file in UWP with easy steps using Syncfusion UWP PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
---

# Create or Generate PDF file in UWP

The [UWP PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, work with forms, and secure PDF files.

To include the Syncfusion<sup>&reg;</sup> UWP PDF library into your UWP application, please refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation.

## Steps to create PDF document in UWP

Step 1: Create a new UWP application project. 
![UWP sample creation](GettingStarted_images/UWP_sample_creation.png)

Step 2: Install the [Syncfusion.Pdf.UWP](https://www.nuget.org/packages/Syncfusion.Pdf.UWP/) NuGet package as a reference to your UWP applications from [NuGet.org](https://www.nuget.org/).
![PDF UWP Nuget package](GettingStarted_images/NuGet-package-UWP.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add the `Syncfusion.Licensing` assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn about registering the Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Add a button to the *MainPage.xaml* page using the following code example and wire up a *Button_Click* event handler.
{% tabs %}
{% highlight XAML %}

<Grid>
  <Button Content="CreatePDF" HorizontalAlignment="Center"  VerticalAlignment="Center" Width="150" Height="100" Click="Button_Click" />
</Grid>

{% endhighlight %}
{% endtabs %}

Step 4: Include the following namespaces in the *MainPage.xaml.cs* file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using Windows.Storage;
using Windows.Storage.Pickers;
using Windows.UI.Popups;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;

{% endhighlight %}
{% endtabs %}

Step 5: Include the following code example in the click event of the button in *MainPage.xaml.cs* file to create PDF document using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. Then use the [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) object to draw the text on the PDF page.

{% tabs %}
{% highlight c# tabtitle="C#" %}

private void Button_Click(object sender, RoutedEventArgs e)
{
    //Create a PDF document. 
    using (PdfDocument document = new PdfDocument())
    {
        //Add a page to the document.
        PdfPage page = document.Pages.Add();
        //Create PDF graphics for the page
        PdfGraphics graphics = page.Graphics;
        //Set the standard font.
        PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
        //Draw the text.
        graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
        //Create memory stream.
        MemoryStream ms = new MemoryStream();
        //Open the document in browser after saving it.
        document.Save(ms);
        //Close the document.
        document.Close(true);
        Save(ms, "Sample.pdf");
    }
}

{% endhighlight %}
{% endtabs %}

Step 6: Use the following helper method to save the stream as a physical file and open the file for viewing.
{% tabs %}
{% highlight c# tabtitle="C#" %}

#region Helper Methods
public async void Save(Stream stream, string filename)
{
    stream.Position = 0; 

    StorageFile stFile; 
    if (!(Windows.Foundation.Metadata.ApiInformation.IsTypePresent("Windows.Phone.UI.Input.HardwareButtons"))) 
    { 
        FileSavePicker savePicker = new FileSavePicker(); 
        savePicker.DefaultFileExtension = ".pdf"; 
        savePicker.SuggestedFileName = "Sample"; 
        savePicker.FileTypeChoices.Add("Adobe PDF Document", new List<string>() { ".pdf" }); 
        stFile = await savePicker.PickSaveFileAsync(); 
    } 
    else 
    { 
        StorageFolder local = Windows.Storage.ApplicationData.Current.LocalFolder; 
        stFile = await local.CreateFileAsync(filename, CreationCollisionOption.ReplaceExisting); 
    } 
    if (stFile != null) 
    { 
        Windows.Storage.Streams.IRandomAccessStream fileStream = await stFile.OpenAsync(FileAccessMode.ReadWrite); 
        Stream st = fileStream.AsStreamForWrite(); 
        st.SetLength(0); 
        st.Write((stream as MemoryStream).ToArray(), 0, (int)stream.Length); 
        st.Flush(); 
        st.Dispose(); 
        fileStream.Dispose(); 
        MessageDialog msgDialog = new MessageDialog("Do you want to view the Document?", "File created."); 
        UICommand yesCmd = new UICommand("Yes"); 
        msgDialog.Commands.Add(yesCmd); 
        UICommand noCmd = new UICommand("No"); 
        msgDialog.Commands.Add(noCmd); 
        IUICommand cmd = await msgDialog.ShowAsync(); 
        if (cmd == yesCmd) 
        { 
            //Launch the retrieved file.
            bool success = await Windows.System.Launcher.LaunchFileAsync(stFile); 
        } 
    } 
}
#endregion

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/UWP/Create-a-new-PDF-document).

By executing the program, you will get the PDF document as follows.
![PDF generation output](GettingStarted_images/pdf-generation-output.png)

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.

An online sample link to [create PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind). 