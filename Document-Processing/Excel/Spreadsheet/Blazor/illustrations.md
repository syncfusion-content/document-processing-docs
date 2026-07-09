---
layout: post
title: Illustrations in Blazor Spreadsheet component | Syncfusion
description: Check out and learn about illustrations in the Syncfusion Blazor Spreadsheet component and more.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Images and Illustrations in Blazor Spreadsheet Component

The Syncfusion Blazor Spreadsheet component lets you insert images into a worksheet to enhance visual presentation and provide additional context alongside data. Images such as logos, screenshots, diagrams, or illustrations can be placed within a sheet, positioned as needed, resized, selected, or removed.

Image support is controlled by the [`AllowImage`](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Spreadsheet.SfSpreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AllowImage) property, which is enabled by default. Setting `AllowImage` to **false** hides the **Insert** tab's image-related options and prevents inserting new images from the Ribbon.

## Supported Image Formats

The Blazor Spreadsheet component accepts the following image formats for insertion:

* PNG (`image/png`)
* JPEG / JPG (`image/jpeg`)
* GIF (`image/gif`)

## Disabling image support

The example below shows how to disable image support across the Spreadsheet:

{% tabs %}
{% highlight razor %}

@page "/"
@using Syncfusion.Blazor.Spreadsheet

<SfSpreadsheet AllowImage="false" DataSource="DataSourceBytes">
    <SpreadsheetRibbon></SpreadsheetRibbon>
</SfSpreadsheet>

@code {
    public byte[] DataSourceBytes { get; set; }

    protected override void OnInitialized()
    {
        string filePath = "wwwroot/Sample.xlsx";
        DataSourceBytes = File.ReadAllBytes(filePath);
    }
}

{% endhighlight %}
{% endtabs %}

## Working with images and illustrations

The Blazor Spreadsheet component provides a range of features for working with images and illustrations. Each subsection below describes how to perform the operation from the UI.

### Inserting images

To insert an image into the active sheet:

1.  Select the cell near the desired top-left placement location.
2.  Go to the **Insert** tab in the Ribbon.
3.  Click **Image** in the toolbar to open the file picker.
4.  Select an image file (PNG, JPEG, BMP, GIF, WEBP, or SVG) and confirm.
5.  The image is inserted at the selection and can be moved by dragging it to a new position.

### Resizing images

To resize an image that is already inserted in the sheet:

1.  Click the image to select it and reveal the selection handles.
2.  Drag any of the edge handles to adjust the width or height.
3.  To maintain the aspect ratio, drag a corner handle.

### Deleting images

To remove an image from the active sheet:

1.  Click the image to select it.
2.  Press the **Delete** key, or right-click the image and choose the standard delete option from the context menu.

### Selecting images

To select or deselect images on the sheet:

1.  Click a single image to select it.
2.  Hold **Ctrl** (or **Shift** for a contiguous range) and click additional images to build a multi-selection.
3.  Click an empty area of the sheet to clear the selection.


![Images in Blazor Spreadsheet](./images/image-feature.gif)

## Known limitations

The following limitations apply to the image support in the Blazor Spreadsheet component:

* Corner resize handles are not available on inserted images. Resizing must be performed using edge handles or pre-sized in the source file.
* Copying and pasting external images is not supported. Images can be inserted through the **Insert** tab, but pasted image content is not retained.
* Programmatic insertion, resizing, repositioning, and deletion of images through the `SfSpreadsheet` API are not currently available.
