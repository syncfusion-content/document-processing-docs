---
title: Images in JavaScript Excel Library | Syncfusion
description: Insert pictures into worksheets, set placement, and manage image collections with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Images in JavaScript Excel

Images place floating pictures on a worksheet so logos and other visuals appear when the file opens in Excel. Provide image bytes and position the picture with row, column, width, and height.

* `bytes` — raw image file content as a `Uint8Array`. The library detects the format from the bytes.
* `row` / `column` — 1-based anchor cell for the top-left of the picture.
* `width` / `height` — size in **points** (72 points = 1 inch).

## Add an image

Images place pictures as floating drawings on the worksheet. Embed image bytes so logos, charts exported as pictures, or other visuals appear when the file opens in Excel.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// imageBytes: Uint8Array of PNG, JPEG, or another supported image file
const picture = sheet.addImage(imageBytes, 1, 1, 200, 120);
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// imageBytes: Uint8Array of PNG, JPEG, or another supported image file
const picture = sheet.addImage(imageBytes, 1, 1, 200, 120);
{% endhighlight %}
{% endtabs %}

## Remove an image

Remove an image when it is no longer needed so the worksheet layout stays clean. You can target a specific picture or remove one by its position among images on the sheet.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);
const picture = sheet.addImage(imageBytes, 2, 2, 144, 72);

sheet.removeImage(picture);
// Or by zero-based index among sheet pictures:
// sheet.removeImage(0);
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);
const picture = sheet.addImage(imageBytes, 2, 2, 144, 72);

sheet.removeImage(picture);
{% endhighlight %}
{% endtabs %}

N> Drawing package parts for pictures are written when you save the workbook. Do not pass a public content-type enum as a second argument; format is sniffed from the image bytes.
