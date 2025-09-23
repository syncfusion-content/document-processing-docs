---
layout: post
title: UI Customization in .NET MAUI PDF Viewer control | Syncfusion
description: Learn here all about the UI customization options in Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control and more.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# UI Customization in .NET MAUI PDF Viewer (SfPdfViewer)

This section walks you through the UI customization options supported in the [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html).

## Customize the loading indicator 
 
You can customize the loading indicator color by setting the color of the activity indicator using the [Themes key for .NET MAUI PdfViewer](https://help.syncfusion.com/maui/themes/keys). 

{% tabs %} 
{% highlight xaml tabtitle="App.xaml" %} 
<Application.Resources> 
    <ResourceDictionary> 
        <ResourceDictionary.MergedDictionaries> 
            <ResourceDictionary> 
                <x:String x:Key="SfPdfViewerTheme">Custom Theme</x:String> 
                <Color x:Key="SfPdfViewerLoadingIndicatorColor">Red</Color> 
            </ResourceDictionary> 
        </ResourceDictionary.MergedDictionaries> 
    </ResourceDictionary> 
</Application.Resources> 
{% endhighlight %}  
{% endtabs %}  

## Hiding loading indicator: 

To disable the loading indicator while loading the pdf and rendering the pages, you can set the color of the loading indicator as transparent using the [Themes key for .NET MAUI PdfViewer](https://help.syncfusion.com/maui/themes/keys). Refer the code example below to disable the loading indicator. 

{% tabs %} 
{% highlight xaml %} 
<Color x:Key="SfPdfViewerLoadingIndicatorColor">Transparent</Color> 
{% endhighlight %} 
{% endtabs %}

N> For complete customization of the PDF Viewer, refer to the [theme user guide](https://help.syncfusion.com/maui/themes/themes) for detailed instructions. You can also explore the [sample project](https://github.com/SyncfusionExamples/maui-pdf-viewer-examples/tree/master/Styles/PDFViewerThemes), which demonstrates the custom theme implementation for the PDF Viewer in .NET MAUI applications.