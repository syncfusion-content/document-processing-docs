---
layout: post
title: Preprocess PDF Document in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to preprocess PDF documents using Syncfusion PDF Library before displaying them in the ASP.NET Core PDF Viewer.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Pre-process PDF Document Before Displaying in ASP.NET Core PDF Viewer

This section explains why preprocessing is useful, what operations you can perform using the Syncfusion PDF Library, and how to load the processed document in the ASP.NET Core PDF Viewer.

## Why Preprocessing Is Needed
Preprocessing a PDF before sending it to the viewer helps you:
- Reduce file size and improve load time
- Merge multiple documents into one
- Extract only required pages for faster loading
- Flatten form fields and annotations for performance & security
- Apply branding elements such as watermarks or stamps

These enhancements ensure a better, faster, and more controlled viewing experience.

## Merge PDF Documents
### UI-Level Merging
You can visually merge pages in the **Organize Pages** UI inside the PDF Viewer. Users can import another PDF, insert its pages into the current file, reorder pages, or delete unwanted pages.

![Import Pages](../images/import.gif)

### Programmatically Merge PDFs
Using the Syncfusion PDF Library, you can merge documents before loading them into the viewer.
```js
import { PdfDocument } from '@syncfusion/ej2-pdf';

const document1 = await PdfDocument.load('file1.pdf');
const document2 = await PdfDocument.load('file2.pdf');

document1.merge(document2);
const mergedBytes = await document1.save();
```
You can then load the merged PDF into the viewer using Blob or Base64.

## Extract Pages
### UI-Level Extraction
Using the Viewer’s [**Organize Pages**](../organize-pages/overview) window, users can select and extract required pages and download them separately.

![Extract Pages](../images/extract-page.png)

### Programmatically Extract Pages
```js
import { PdfDocument } from '@syncfusion/ej2-pdf';

const original = await PdfDocument.load('sample.pdf');
const extracted = original.extractPages([2,3,4]);
const resultBytes = await extracted.save();
```
This reduces file size and improves performance when loading large documents.

## Flatten Form Fields & Annotations
### Why Flattening Helps
- Prevents users from editing form fields
- Improves rendering speed
- Ensures consistent appearance across all devices

### Programmatic Flattening
```js
import { PdfDocument } from '@syncfusion/ej2-pdf';

const doc = await PdfDocument.load('form.pdf');
doc.formFields.flattenAllFields();
doc.annotations.flattenAllAnnotations();
const bytes = await doc.save();
```

### Flatten on Load

Use the following ASP.NET Core `cshtml` snippet when you want uploaded PDFs to be flattened before they are loaded into the viewer.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">

    <ejs-pdfviewer id="pdfViewer"
                   style="height:640px; display:block"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.12/dist/ej2-pdfviewer-lib"
                   toolbarClick="onToolbarClick">
    </ejs-pdfviewer>

    <input type="file"
           id="fileUpload"
           accept=".pdf"
           style="display:none" />
</div>

<script>
    let viewer;
    window.onload = function () {
        viewer = document.getElementById('pdfViewer').ej2_instances[0];
        viewer.toolbarSettings = {
            toolbarItems: [
                {
                    prefixIcon: 'e-icons e-folder',
                    id: 'openPdf',
                    text: 'Open',
                    align: 'Left'
                },
                'PageNavigationTool',
                'MagnificationTool',
                'PanTool',
                'SelectionTool',
                'SearchOption',
                'UndoRedoTool',
                'AnnotationEditTool',
                'FormDesignerEditTool',
                'CommentTool',
                'SubmitForm',
                'DownloadOption'
            ]
        };
    };

    window.onToolbarClick = function (args) {
        if (args.item.id === 'openPdf') {
            document.getElementById('fileUpload').click();
        }
    };

    document.getElementById('fileUpload').addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (!file) return;
        const formData = new FormData();
        formData.append('file', file);
    fetch('/PdfViewer/Flatten', {
        method: 'POST',
        body: formData
    })
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.onload = function () {
                const base64 = reader.result.split(',')[1];
                viewer.load(base64, null);
            };
            reader.readAsDataURL(blob);
        });
    });
</script>
{% endhighlight %}
{% endtabs %}

```csharp
    [HttpPost]
    public IActionResult Flatten(IFormFile file)
    {
        if (file == null)
            return BadRequest();
        using MemoryStream inputStream = new MemoryStream();
        file.CopyTo(inputStream);
        inputStream.Position = 0;
        // Load PDF
        PdfLoadedDocument document = new PdfLoadedDocument(inputStream);
        // Flatten form fields
        if (document.Form != null)
        {
            document.Form.Flatten = true;
        }
        // Flatten annotations
        document.FlattenAnnotations();
        // Save flattened PDF
        using MemoryStream outputStream = new MemoryStream();
        document.Save(outputStream);
        document.Close(true);
        outputStream.Position = 0;
        return File(outputStream.ToArray(), "application/pdf");
    }
```
N> Refer to the [Flatten on Download](../annotation/flatten-annotation#how-to-flatten-annotations) section for more information about flattening documents on download.

## Add Watermark or Stamp
### UI-Level Stamps
The PDF Viewer toolbar allows users to:
- Add [standard stamps](../annotation/stamp-annotation#add-stamp-annotations-to-the-pdf-document) (Approved, Draft, etc.)
- Insert [custom image stamps](../annotation/stamp-annotation#add-a-custom-stamp)

![Custom Stamp](../../react/images/customStamp.png)

### Programmatically Add a Watermark
```js
import { PdfDocument, PdfGraphics, PdfBrushes } from '@syncfusion/ej2-pdf';

const doc = await PdfDocument.load('input.pdf');
const page = doc.getPage(0);
const g = page.graphics;

g.drawString('CONFIDENTIAL', {
    x: 150,
    y: 300,
    fontSize: 48,
    brush: PdfBrushes.gray,
    opacity: 0.3,
    rotateAngle: 45
});

const outputBytes = await doc.save();
```

## How-To Guide: Load the Preprocessed PDF in the Viewer
You can load the processed PDF using **Blob**, **Base64**, or a **URL**.

### Load Using Blob (Recommended)
```js
fetch('/api/processed-pdf')
  .then(res => res.blob())
  .then(blob => {
      const url = URL.createObjectURL(blob);
      viewer.load(url);
  });
```
Best for large or dynamically processed PDFs.

### Load Using Base64
```js
viewer.load('data:application/pdf;base64,BASE64_STRING');
```
Use for small files.

### Load Using URL
```js
viewer.load('https://yourdomain.com/files/doc.pdf');
```
Ideal for stored/static files.
