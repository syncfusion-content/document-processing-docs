---
title: Hyperlinks in TypeScript PDF library | Syncfusion
description: This section explains how to add a hyperlink in a new or existing PDF document by using the TypeScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Hyperlinks in TypeScript PDF library

In PDF, hyperlinks can be added to allow the users to navigate to another part of PDF file, web page or any other external content.

## Working with Web navigation

This example demonstrates how to create a web link annotation in a PDF document using the `PdfTextWebLinkAnnotation` class. A web link annotation allows users to navigate to a specified URL directly from the PDF by clicking the annotated text.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfStringFormat, PdfStandardFont, PdfFontFamily, Size, PdfTextWebLinkAnnotation, PdfFontStyle  } from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new PDF string format
    const format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.left, PdfVerticalAlignment.top);
    // Create a new standard font
    const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Get the text size
    let size: Size = font.measureString('Syncfusion');
    // Create a new text web link annotation
    let annotation: PdfTextWebLinkAnnotation = new PdfTextWebLinkAnnotation({x: 50, y: 40, width: size.width, height: size.height}, {r: 0, g: 0, b: 0}, {r: 165, g: 42, b: 42}, 1);
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet explains how to add a text web link annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfStringFormat, PdfStandardFont, PdfFontFamily, Size, PdfTextWebLinkAnnotation, PdfFontStyle  } from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access the first page
    let page: PdfPage = document.getPage(0);
    // Create a new PDF string format
    const format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.left, PdfVerticalAlignment.top);
    // Create a new standard font
    const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Get the text size
    let size: Size = font.measureString('Syncfusion');
    // Create a new text web link annotation
     let annotation: PdfTextWebLinkAnnotation = new PdfTextWebLinkAnnotation({x: 50, y: 40, width: size.width, height: size.height}, {r: 0, g: 0, b: 0}, {r: 165, g: 42, b: 42}, 1);
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Working with internal document navigation

This example demonstrates how to create internal navigation within a PDF document using destination-based annotations.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfStringFormat, PdfStandardFont, Size, PdfTextWebLinkAnnotation, PdfDestination } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a page
    let page: PdfPage = document.addPage();
    // Create a new PDF string format
    const format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.left, PdfVerticalAlignment.top);
    // Create a new standard font
    const font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Get the text size
    let size: Size = font.measureString('Syncfusion');
    // Create a new text web link annotation
    let annotation: PdfTextWebLinkAnnotation = new PdfTextWebLinkAnnotation({x: 50, y: 40, width: size.width, height: size.height}, {r: 0, g: 0, b: 0}, {r: 165, g: 42, b: 42}, 1);
    // Initializes a new instance of the `PdfDestination` class.
    let destination: PdfDestination = new PdfDestination();
    // Sets the zoom factor.
    destination.zoom = 20;
    // Sets the page where the destination is situated.
    destination.page = page;
    // Sets the mode of the destination.
    destination.mode = PdfDestinationMode.fitToPage;
    // Sets the location of the destination.
    destination.location = {x: 20, y: 20};;
   // Sets the bounds of the destination.
   destination.destinationBounds = {x: 20, y: 20, width: 100, height: 50};
   // Sets destination to  document link annotation.
   annotation.destination = destination;
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet demonstrates how to add internal document navigation to a web link annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfDocumentLinkAnnotation } from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Get the page
    let page: PdfPage = document.getPage(0);
    // Access the annotation at index 0
    let annotation: PdfDocumentLinkAnnotation = document.getPage(0).annotations.at(0) as PdfDocumentLinkAnnotation;
    // Initializes a new instance of the `PdfDestination` class.
    let destination: PdfDestination = new PdfDestination();
    // Sets the zoom factor.
    destination.zoom = 20;
    // Sets the page where the destination is situated.
    destination.page = page;
    // Sets the mode of the destination.
    destination.mode = PdfDestinationMode.fitToPage;
     // Sets the location of the destination.
    destination.location = {x: 20, y: 20};;
    // Sets the bounds of the destination.
    destination.destinationBounds = {x: 20, y: 20, width: 100, height: 50};
    // Sets destination to  document link annotation.
    annotation.destination = destination;
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Working with external document navigation

This example demonstrates how to create external navigation in a PDF document using `PdfFileLinkAnnotation` annotations. External navigation allows users to open and navigate to another PDF or an external file from within the current document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfFileLinkAnnotation } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a page
    let page: PdfPage = document.addPage();
    // Create a new file link annotation
    let annotation: PdfFileLinkAnnotation = new PdfFileLinkAnnotation({x: 10, y: 40, width: 30, height: 30}, 'image.png');
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

The following code snippet demonstrates how to add internal document navigation to a web link annotation in an existing PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfFileLinkAnnotation } from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Get the first page
    let page: PdfPage = document.getPage(0) as PdfPage;
    // Create a new file link annotation
    let annotation: PdfFileLinkAnnotation = new PdfFileLinkAnnotation({x: 10, y: 40, width: 30, height: 30}, 'image.png');
    // Add annotation to the page
    page.annotations.add(annotation);
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}