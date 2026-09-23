---
title: Images in JavaScript Excel Library | Syncfusion
description: Insert pictures into worksheets with the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Images in JavaScript Excel

Add a floating picture with `sheet.addImage(bytes, row, column, width, height)`.

* `bytes` — raw image file content as a `Uint8Array`. The library detects the format from the bytes.
* `row` / `column` — 1-based anchor cell for the top-left of the picture.
* `width` / `height` — size in **points** (72 points = 1 inch).

## Add an image

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
