---
title: PowerPoint slides to Image conversion in UWP| Syncfusion
description: Learn about how to convert PowerPoint slides to Image in UWP using the .NET PowerPoint (Presentation) library.
platform: document-processing
control: PowerPoint
documentation: UG
---
# Convert PowerPoint to Image in UWP

PowerPoint slides can be converted to images in UWP by using Essential<sup>&reg;</sup> Presentation library. The following assemblies are required in the UWP application to convert the slides as images.

<table>
    <thead>
        <tr>
            <th>
                Assembly Name</th>
            <th>
                Short Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Syncfusion.Presentation.UWP</td>
            <td>This assembly contains the core features needed for creating, reading, manipulating a Presentation file.</td>
        </tr>
        <tr>
            <td>Syncfusion.OfficeChart.UWP</td>
            <td>This assembly contains the Office Chart Object model and core features needed for chart creation.</td>
        </tr>
        <tr>
            <td>Syncfusion.OfficeChartToImageConverter.UWP</td>
            <td>This assembly is used to convert Office Chart into Image. </td>
        </tr>
        <tr>
            <td>Syncfusion.SfChart.UWP</td>
            <td>Supporting assembly for Syncfusion.OfficeChartToImageConverter.UWP</td>
        </tr>
    </tbody>
</table>

## Convert a slide to image

The following code example demonstrates how to convert a slide to image in UWP.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load the presentation file using open picker
FileOpenPicker openPicker = new FileOpenPicker();
openPicker.FileTypeFilter.Add(".pptx");
StorageFile inputFile = await openPicker.PickSingleFileAsync();
pptxDoc = await Presentation.OpenAsync(inputFile);
//Initialize the ‘ChartToImageConverter’ instance to convert the charts in the slides
pptxDoc.ChartToImageConverter = new ChartToImageConverter();
//Pick the folder to save the converted images.
FolderPicker folderPicker = new FolderPicker();
folderPicker.ViewMode = PickerViewMode.Thumbnail;
folderPicker.FileTypeFilter.Add("*");
StorageFolder storageFolder = await folderPicker.PickSingleFolderAsync();
StorageFile imageFile = await storageFolder.CreateFileAsync("Slide1.jpg", CreationCollisionOption.ReplaceExisting);
//Convert the slide to image.
await slide.SaveAsImageAsync(imageFile);
//Closes the presentation instance
pptxDoc.Close();
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-Image-conversion/Convert-PowerPoint-slide-to-Image/UWP).

## Convert PowerPoint Presentation to images

The following code snippet demonstrates how to convert a PowerPoint slide to image using custom image resolution.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load the presentation file using open picker
FileOpenPicker openPicker = new FileOpenPicker();
openPicker.FileTypeFilter.Add(".pptx");
StorageFile inputFile = await openPicker.PickSingleFileAsync();
pptxDoc = await Presentation.OpenAsync(inputFile);
//Initialize the ‘ChartToImageConverter’ instance to convert the charts in the slides.
pptxDoc.ChartToImageConverter = new ChartToImageConverter();
//Pick the folder to save the converted images.
FolderPicker folderPicker = new FolderPicker();
folderPicker.ViewMode = PickerViewMode.Thumbnail;
folderPicker.FileTypeFilter.Add("*");
StorageFolder storageFolder = await folderPicker.PickSingleFolderAsync();
StorageFile imageFile = await storageFolder.CreateFileAsync("Slide1.jpg", CreationCollisionOption.ReplaceExisting);
//Get the stream of the created image file.
StorageFile imageStream = await imageFile.OpenStreamForWriteAsync()
//Creates a new instance for the rendering options to customize the image resolution.
RenderingOptions renderingOptions = new RenderingOptions();
//Sets the horizontal scaling value for the converted image. The default value is 1.
renderingOptions.ScaleX = 10F;
//Sets the vertical scaling value for the converted image. The default value is 1.
renderingOptions.ScaleY = 10F;
//Convert the slide to image with specified resolution.
await slide.SaveAsImageAsync(imageStream, renderingOptions);
//Closes the presentation instance
pptxDoc.Close();
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-Image-conversion/Change-resolution-of-converted-image/UWP).

## Convert a slide to image by CancellationToken

The following code snippet demonstrates how to convert a PowerPoint slide to image by passing ‘CancellationToken’.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load the presentation file using open picker
FileOpenPicker openPicker = new FileOpenPicker();
openPicker.FileTypeFilter.Add(".pptx");
StorageFile inputFile = await openPicker.PickSingleFileAsync();
pptxDoc = await Presentation.OpenAsync(inputFile);
//Initialize the ChartToImageConverter instance to convert the charts in the slides.
pptxDoc.ChartToImageConverter = new ChartToImageConverter();
//Pick the folder to save the converted images.
FolderPicker folderPicker = new FolderPicker();                    
folderPicker.ViewMode = PickerViewMode.Thumbnail;
folderPicker.FileTypeFilter.Add("*");
StorageFolder storageFolder = await folderPicker.PickSingleFolderAsync();
//Create a cancellation token to cancel the image rendering instantly.
CancellationTokenSource cancellationToken = new CancellationTokenSource();
//Convert the slide to image.
int slideNumber = 1;
foreach (ISlide slide in pptxDoc.Slides)
{
    StorageFile imageFile = await storageFolder.CreateFileAsync("Slide" + slideNumber++ + ".jpg", CreationCollisionOption.ReplaceExisting);
    await slide.SaveAsImageAsync(imageFile, cancellationToken.Token);
}
//Close the Presentation instance
pptxDoc.Close();
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/PPTX-to-Image-conversion/Convert-with-UWP-cancellation-token).

N> 1. Instance of [ChartToImageConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChartToImageConverter.ChartToImageConverter.html) class is mandatory to convert the charts present in the Presentation to image. Otherwise, the charts in the presentation are not exported to the converted image
N> 2. The assembly "Syncfusion.SfChart.WPF" is non compliance with FIPS(Federal Information Processing Standard) algorithm policy.
N> 3. EMF images in the PowerPoint slides will not be converted in UWP due to platform limitation.
N> 4. Radial gradient, rectangular gradient and path gradient brushes are not supported in UWP due to platform limitation. These brushes are rendered as linear gradient brush in our UWP slide to image conversion.
