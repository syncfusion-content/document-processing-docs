---
title: Images in JavaScript Excel Library | Syncfusion
description: Insert pictures into worksheets, set placement, and manage image collections with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Images in JavaScript Excel Library

Images place floating pictures on a worksheet so logos and other visuals appear when the file opens in Excel. Provide image bytes and position the picture with row, column, width, and height.

* `bytes` — raw image file content as a `Uint8Array`. The library detects the format from the bytes.
* `row` / `column` — 1-based anchor cell for the top-left of the picture.
* `width` / `height` — size in **points** (72 points = 1 inch).

N> The snippets on this page save the workbook with `await workbook.save('<file name>.xlsx')`, which requires Node.js. In a browser, call `workbook.save()` without arguments and download the returned bytes, as shown in [Getting started](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/getting-started).

## Add an image

Images place pictures as floating drawings on the worksheet. Embed image bytes so logos, charts exported as pictures, or other visuals appear when the file opens in Excel.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFile } from 'node:fs/promises';
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Read a PNG, JPEG, or another supported image file as bytes.
const imageBytes = await readFile('./logo.png');
const picture = sheet.addImage(imageBytes, 1, 1, 200, 120);

// Save the workbook.
await workbook.save('AddAnImage.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { readFile } from 'node:fs/promises';
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Read a PNG, JPEG, or another supported image file as bytes.
const imageBytes = await readFile('./logo.png');
const picture = sheet.addImage(imageBytes, 1, 1, 200, 120);

// Save the workbook.
await workbook.save('AddAnImage.xlsx');
{% endhighlight %}
{% endtabs %}

## Resize and move an image

Change the position and size of a picture after you add it. Use `row` and `column` for a cell anchor, `top` and `left` for distances in points from the top-left corner of the sheet, and `width` and `height` for the size in points (72 points = 1 inch).

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFile } from 'node:fs/promises';
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const imageBytes = await readFile('./logo.png');
const picture = sheet.addImage(imageBytes, 2, 2, 144, 72);

// Resize
picture.width = 216;
picture.height = 108;

// Anchor to another cell
picture.row = 5;
picture.column = 3;

// Or place by distance from the top-left corner, in points
picture.top = 120;
picture.left = 200;

// Save the workbook.
await workbook.save('ResizeAndMoveImage.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { readFile } from 'node:fs/promises';
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const imageBytes = await readFile('./logo.png');
const picture = sheet.addImage(imageBytes, 2, 2, 144, 72);

// Resize
picture.width = 216;
picture.height = 108;

// Anchor to another cell
picture.row = 5;
picture.column = 3;

// Or place by distance from the top-left corner, in points
picture.top = 120;
picture.left = 200;

// Save the workbook.
await workbook.save('ResizeAndMoveImage.xlsx');
{% endhighlight %}
{% endtabs %}

## Work with multiple images

Add as many pictures as you need, each with its own position. The `sheet.images` collection lists the pictures on the worksheet in the order that you added them.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFile } from 'node:fs/promises';
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

const imageBytes = await readFile('./logo.png');

// Arguments: bytes, row, column, width, height
sheet.addImage(imageBytes, 2, 2, 96, 48);
sheet.addImage(imageBytes, 2, 6, 96, 48);
sheet.addImage(imageBytes, 8, 2, 192, 96);

const count = sheet.images.length;
const first = sheet.images[0];
const size = first.width + ' x ' + first.height;

// Save the workbook.
await workbook.save('AddSeveralImages.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { readFile } from 'node:fs/promises';
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

const imageBytes = await readFile('./logo.png');

// Arguments: bytes, row, column, width, height
sheet.addImage(imageBytes, 2, 2, 96, 48);
sheet.addImage(imageBytes, 2, 6, 96, 48);
sheet.addImage(imageBytes, 8, 2, 192, 96);

const count = sheet.images.length;
const first = sheet.images[0];
const size = first.width + ' x ' + first.height;

// Save the workbook.
await workbook.save('AddSeveralImages.xlsx');
{% endhighlight %}
{% endtabs %}

The library detects the image format from the bytes. The supported formats are PNG, JPEG, GIF, BMP, TIFF, WebP, SVG, EMF, and WMF.

## Remove an image

Remove an image when it is no longer needed so the worksheet layout stays clean. You can target a specific picture or remove one by its position among images on the sheet.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFile } from 'node:fs/promises';
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
const imageBytes = await readFile('./logo.png');
const picture = sheet.addImage(imageBytes, 2, 2, 144, 72);

sheet.removeImage(picture);

// Save the workbook.
await workbook.save('RemoveAnImage.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { readFile } from 'node:fs/promises';
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const imageBytes = await readFile('./logo.png');
const picture = sheet.addImage(imageBytes, 2, 2, 144, 72);

sheet.removeImage(picture);

// Save the workbook.
await workbook.save('RemoveAnImage.xlsx');
{% endhighlight %}
{% endtabs %}

N> Drawing package parts for pictures are written when you save the workbook. Do not pass a public content-type enum as a second argument; format is sniffed from the image bytes.
