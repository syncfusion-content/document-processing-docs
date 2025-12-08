---
title: Pages in TypeScript PDF library | Syncfusion
description: This section explains how to add, rearrange, remove pages, and detect empty pages in a PDF file by using the TypeScript PDF library
platform: document-processing
control: PDF
documentation: UG
---
# Pages in TypeScript PDF library

Essential<sup>&reg;</sup> PDF provides support to add, remove, rearrange, and detect empty pages in PDF documents, enabling complete control over page management for creating dynamic and customized PDFs.

## Adding a new page to the document

The following code sample demonstrates how to add a `PdfPage` to a PDF document. When multiple pages are added, each new page is appended to the end of the document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

    // Create a PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a page
    let page: PdfPage = document.addPage();
    // Get graphics from the page
    let graphics: PdfGraphics = page.graphics;
    // Set font
    let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Draw text
    graphics.drawString('Hello World', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Adding margin to the PDF pages

The `PdfPageSettings` class is used to define properties such as margins, orientation, rotation, and page size. In this example, margins are set using the `PdfMargins` class to ensure consistent spacing around the page content. These settings can be applied when creating sections or pages in the PDF for precise layout control.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Define page settings
    let settings: PdfPageSettings = new PdfPageSettings();
    // Add margin  
    settings.margins = new PdfMargins(40);                                    
    // Add a section to the document with the specified settings
    let section: PdfSection = document.addSection(settings);
    // Add a page
    let page: PdfPage = section.addPage();
    // Get graphics from the page
    let graphics: PdfGraphics = page.graphics;
    // Set font
    let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Draw text
    graphics.drawString('Hello World', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Adding sections with different page settings

This example demonstrates how to add sections with different page settings in a PDF document. It shows how to configure rotation, orientation, margins, and page size using `PdfPageSettings`. The `PdfSection` class is used to apply unique page customizations within a single PDF document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Create a new PDF page settings instance
    let pageSetting: PdfPageSettings = new PdfPageSettings();
    // Sets the margins
    pageSetting.margins = new PdfMargins(40);
    // Sets the page size
    pageSetting.size ={width: 595, height: 842};;
    // Sets the page orientation
    pageSetting.orientation = PdfPageOrientation.landscape;
    // Add a page
    let page: PdfPage = document.addPage(pageSetting);
    // Get graphics from the page
    let graphics: PdfGraphics = page.graphics;
    // Set font
    let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Draw text
    graphics.drawString('Hello World', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Create a new PDF page settings instance
    let pageSetting1: PdfPageSettings = new PdfPageSettings();
    // Sets the margins
    pageSetting1.margins = new PdfMargins(40);
    // Sets the page size
    pageSetting1.size ={width: 595, height: 842};;
    // Sets the page orientation
    pageSetting1.orientation = PdfPageOrientation.landscape;
    // Add a page
    let page1: PdfPage = document.addPage(pageSetting1);
     // Get graphics from the page
    let graphics1 = page1.graphics;
    // Draw text
    graphics1.drawString('Hello World', font, {x: 40, y: 60, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Save the PDF document
    document.save('Output.pdf');
    // Close and dispose the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Get number of pages from a PDF document

This example demonstrates how to retrieve the total number of pages in a PDF document using the `pageCount` property of the `PdfDocument` class. The page count returns an integer value representing the number of pages currently in the document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument } from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Gets the page count
    let count: number = document.pageCount;
    // Destroy the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Importing pages from an existing document

This example demonstrates how to import pages from an existing PDF document into a new PDF document using the `importPageRange` method of the `PdfDocument` class. This method allows you to specify a start and end index to copy a range of pages from the source document into the target document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument } from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
	let document: PdfDocument = new PdfDocument(data, password);
    // Define start and end page indices
    const startIndex = 0;
    const endIndex = document.pageCount - 1;
    // Import all pages from the loaded document into the new document
    document.importPageRange(document, startIndex, endIndex);
    // Save the new document
    document.save('Output.pdf');
    // Close the loaded document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Rearranging pages in an existing document

This example demonstrates how to rearrange the pages in an existing PDF document using the `reorderPages` method of the `PdfDocument` class. The method accepts an array of page indices that defines the new order of pages within the document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument } from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Reorders the pages in the PDF document
    document.reorderPages([3, 2, 1]);
    // Save the document
    document.save('output.pdf');
    // Destroy the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Removing pages from a document

This example demonstrates how to remove a page from a PDF document using the `removePage` method of the `PdfDocument` class. The method takes the zero-based index of the page to be removed, effectively deleting that page from the document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument } from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Removes the first page
    document.removePage(0);
    // Save the document
    document.save('output.pdf');
    // Destroy the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Rotating a PDF page

This example demonstrates how to rotate a PDF page using the `rotation` property of the `PdfPageSettings` class. The property accepts a value from the `PdfRotationAngle` enumeration, such as angle180, to specify the rotation angle applied to the page.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Create a new PDF page settings instance
    let pageSetting : PdfPageSettings = new PdfPageSettings();
    // Sets the page rotation
    pageSetting.rotation = PdfRotationAngle.angle180;
    // Add a page
    let page: PdfPage = document.addPage(pageSetting);
    // Get graphics from the page
    let graphics: PdfGraphics = page.graphics;
    // Set font
    let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Draw text
    graphics.drawString('Hello World', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Save the PDF document
    let data = document.save('Output.pdf');
    // Close and dispose the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Rotating an existing PDF page

This example demonstrates how to rotate an existing PDF page using the `rotation` property of the `PdfPage` class. The property accepts a value from the `PdfRotationAngle` enumeration, such as angle180, to specify the rotation angle applied to the selected page.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access first page
    let page: PdfPage = document.getPage(0);
    //Set the rotation for loaded page
    page.rotation = PdfRotationAngle.angle180;
    // Save the document
    document.save('output.pdf');
    // Destroy the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Splitting a PDF file to individual pages

This example demonstrates how to split a PDF file into individual pages by importing a specific page from the source document using the `importPage` method of the `PdfDocument` class. The method takes the zero-based index of the page to be copied and adds it as a new page in the target document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Copy the second page and add it as third page
    document.importPage(1);
    // Save the output PDF
    document.save('Output.pdf');
    // Destroy the documents
    document.destroy();

{% endhighlight %}
{% endtabs %}