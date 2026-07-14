---
layout: post
title: Illustrations in Blazor Spreadsheet component | Syncfusion
description: Check out and learn about illustrations in the Syncfusion Blazor Spreadsheet component and enhance spreadsheets with visual content.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Images and Illustrations in Blazor Spreadsheet Component

The [Blazor Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/blazor-spreadsheet-editor) component lets you insert images into a worksheet to enhance visual presentation and provide additional context alongside data. Images such as logos, screenshots, diagrams, or illustrations can be placed within a sheet, positioned as needed, resized, selected, or removed.

Image support is controlled by the [AllowImage](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AllowImage) property, which is enabled by default.

## Disabling image support

The example below shows how to disable image support across the Spreadsheet:

{% tabs %}
{% highlight razor tabtitle="Index.razor" %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet AllowImage="false">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

{% endhighlight %}
{% endtabs %}

## Working with image

The Blazor Spreadsheet component provides a range of features for working with images and illustrations. Each subsection below describes how to perform the operation from the UI.

### Inserting images

To insert an image into the active sheet:

1.  Click a cell near where you want the image to appear.
2.  Go to the **Insert** tab in the **Ribbon**.
3.  Click **Image** to open the file picker.
4.  Browse to and select an image file then click **Open**.
5.  The image now inserted. Drag it to a new position if needed.

### Resizing images

To resize an image that is already inserted in the sheet:

1.  Click the image to select it. Four selection handles appear at the center of each side.
2.  Drag any **handle** to resize the image freely in width and height.

### Deleting images

To remove an image from the active sheet:

1.  Click the image to select it.
2.  Press **Delete** key to delete the image

### Selecting images

To select one or more images on the sheet:

1.  Click an image to select it.
2.  Click an empty area of the sheet to clear the selection.


![Images in Blazor Spreadsheet](./images/image-feature.gif)

## Known limitations

The following limitations apply to the image support in the [Blazor Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/blazor-spreadsheet-editor):

* Corner resize handles are not available on inserted images. Resizing must be performed using edge handles.
* Copying and pasting external images is not supported. 
* Programmatic operations for image manipulation are currently not available.
