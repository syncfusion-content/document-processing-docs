---
title: PDF Templates | Syncfusion
description: This section explains how to create a PDF template, which is a drawing surface where contents can be added, by using the TypeScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# PDF Templates 

A PDF template is a drawing surface, where contents can be added. All the elements that can be added to a PdfPage is supported in PdfTemplate as well. The template in turn can be drawn over the page or can be positioned at any part of the page.

## Creating a new PDF template

This example demonstrates how to create a new PDF template using the `PdfTemplate` class. A PDF template allows you to define reusable graphics or content that can be drawn on multiple pages or annotations within a PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfRubberStampAnnotation, PdfTemplate, PdfImage, PdfBitmap } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a page
    let page: PdfPage = document.addPage();
    // Create a new rubber stamp annotation
    const annotation: PdfRubberStampAnnotation = new PdfRubberStampAnnotation ({x: 50, y: 100, width: 100, height: 50});
    // Get the normal appearance of the annotation
    let normalAppearance: PdfTemplate = annotation.appearance.normal;
    // Create new image object by using JPEG image data as Base64 string format
    let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
    // Draw the image as the custom appearance for the annotation
    normalAppearance.graphics.drawImage(image, {x: 10, y: 20});
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Creating templates from existing PDF document

This example demonstrates how to create templates from an existing PDF document using the `PdfTemplate` class. A PDF template allows you to extract and reuse content from a PDF page or annotation, enabling consistent design and repeated elements across multiple pages.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfRubberStampAnnotation, PdfTemplate, PdfImage, PdfBitmap } from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Get the first page
    let page: PdfPage = document.getPage(0) as PdfPage;
    // Create a new rubber stamp annotation
    const annotation: PdfRubberStampAnnotation = new PdfRubberStampAnnotation ({x: 50, y: 100, width: 100, height: 50});
    // Get the normal appearance of the annotation
    let normalAppearance: PdfTemplate = annotation.appearance.normal;
    // Create new image object by using JPEG image data as Base64 string format
    let image: PdfImage = new PdfBitmap('/9j/4AAQSkZJRgABAQEAkACQAAD/4....QB//Z');
    // Draw the image as the custom appearance for the annotation
    normalAppearance.graphics.drawImage(image, {x: 10, y: 20});
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}