---
layout: post
title: Excel Images in Flutter Excel Library | Syncfusion
description: The Flutter Excel Library lets users add, format, and remove images in Excel worksheets.
platform: document-processing
control: Excel
documentation: ug
---

# Excel Images in Flutter Excel Library

## Adding Images to worksheet

Flutter XlsIO allows to insert images like JPEG and PNG formats into a worksheet. 

Refer to the following code snippet to add images to worksheet.

{% highlight dart %}

// Create a new Excel document.
final Workbook workbook = Workbook();

// Accessing worksheet via index.
final Worksheet sheet = workbook.worksheets[0];

// Adding an image.
final List<int> imageBytes = File('image.jpeg').readAsBytesSync();
sheet.pictures.addStream(1, 1, imageBytes);

// Save and dispose workbook.
final List<int> bytes = workbook.saveSync();
workbook.dispose();

File('AddImage.xlsx').writeAsBytes(bytes);

{% endhighlight %}


## Re-Sizing, Flip and Rotation Images

Pictures can be re-sized, flip and formatted using various properties of **Picture** class. Refer to the following code snippet.

{% highlight dart %}

// Create a new Excel document.
final Workbook workbook = Workbook();

// Accessing worksheet via index.
final Worksheet sheet = workbook.worksheets[0];

// Add a image.
final List<int> imageBytes = File('image.jpeg').readAsBytesSync();
sheet.pictures.addStream(1, 1, imageBytes);

final Picture picture = sheet.pictures[0];

// Re-size an image
picture.height = 200;
picture.width = 200;

// rotate an image.
picture.rotation = 100;

// Flip an image.
picture.horizontalFlip = true;

// save and dispose workbook
final List<int> bytes = workbook.saveSync();
workbook.dispose();

File('Image.xlsx').writeAsBytes(bytes);

{% endhighlight %}

