---
layout: post
title: Illustrations in Blazor Spreadsheet component | Syncfusion
description: Checkout and learn here about the Illustrations in the Syncfusion Blazor Spreadsheet component and more.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Illustrations in Blazor Spreadsheet

Illustrations help you to insert images in the Blazor Spreadsheet component. Images can be used to enhance your spreadsheet by adding visual content, logos that help communicate data more effectively.

## Image

Adding images to a spreadsheet can enhance the visual appeal and help to convey information more clearly. Whether you want to add company logos, product images, or visual diagrams, the Blazor Spreadsheet provides an easy way to integrate images into your spreadsheet data.

N> The default value for the [AllowImage](https://help.syncfusion.com/cr/blazor/syncfusion.blazor.spreadsheet.sfspreadsheet.html#Syncfusion_Blazor_Spreadsheet_SfSpreadsheet_AllowImage) property is `true`.


### Insert Image

You can insert the image by using the following way,

* Selecting the Insert tab in the Ribbon toolbar, and then choose the Image option. This opens a file browser where you can select an image file from your computer to insert into the spreadsheet at your desired location.

N> In a spreadsheet, you can add many types of image files, including IMAGE, JPG, PNG, GIF, and JPEG files. Ensure that your image files are in one of these supported formats for best compatibility and performance.

### Delete Image

* If you want to delete the image, just select the image, and then press the Delete key. The image will be immediately removed from the spreadsheet without affecting any surrounding data or formatting.

### Image Customization

Image feature allows you to view and insert an image in a spreadsheet, and you can change the height and width of the image by resizing and moving it to another position. This provides flexibility in positioning images exactly where you need them within your spreadsheet layout.

#### Height and Width

* You can change the height and width of the image by resizing. Simply click on the image to select it, and then drag the resize handles located at the center of each side (top, bottom, left, and right) of the image to adjust its dimensions to fit your requirements.

#### Top and Left

* You can change the position of the image by drag and drop. Select the image and drag it to the desired location within the spreadsheet. This allows you to place images strategically alongside your data for better visual organization.

### Limitations of Image

The following features have some limitations in Image:

* Corner resizing option in the image element. Currently, resizing images is supported through side center handles, but certain advanced corner resizing options have limitations.
* Copy and paste the external image. Direct copying and pasting of external images have restrictions; use the Insert Image option for more reliable image insertion.