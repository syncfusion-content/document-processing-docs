---
title: Working with Text | Syncfusion
description: This section explains how to add text to the PDF file using different type of fonts, TrueType fonts and standard fonts
platform: document-processing
control: PDF
documentation: UG
---
# Working with text in the PDF file

## Drawing text in a new document

This example demonstrates how to draw text in a new PDF document using the `drawString` method of the `PdfGraphics` class. The method allows you to specify the text content, font, brush, and position to render the text on a page within the document.

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

N>  Due to the inherent limitations of the PDF specification and the rendering capabilities of PDF libraries, emojis with skin tone modifiers are not supported in generated PDF documents. Only the base versions of emojis can be displayed. This limitation is common across most PDF libraries, as the PDF format does not explicitly support rendering skin tone variations in emojis.

## The importance of saving and restoring graphics state in PDF content rendering

This example demonstrates the importance of saving and restoring the graphics state when rendering PDF content using the `save` and `restore` methods of the `PdfGraphics` class. These methods ensure that any transformations, such as scaling, rotation, or color changes, applied to the graphics context do not affect subsequent drawing operations, maintaining consistent layout and design.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a page
    let page: PdfPage = document.addPage();
    // Get graphics from the page
    let graphics: PdfGraphics = page.graphics;
    // Save the current graphics state and apply transformations
    graphics.save();
    graphics.translateTransform({x: 100, y: 50});
    graphics.rotateTransform(45);
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

## Drawing text in an existing document

This example demonstrates how to draw text in an existing PDF document using the `drawString` method of the `PdfGraphics` class. The method allows you to specify the text content, font, brush, and position to render the text on a selected page within the document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

    // Load an existing PDF document
    let document: PdfDocument = new PdfDocument(data, password);
    // Access first page
    let page: PdfPage = document.getPage(0);
    // Set font
    let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Draw text
    page.graphics.drawString('Hello World', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Drawing text using different fonts

Essential<sup>&reg;</sup> PDF allows you to add text to the PDF document using the following types of fonts.

1. Standard fonts
2. TrueType fonts
3. Chinese, Japanese and Korean (CJK) fonts

### Draw text using standard fonts

This example demonstrates how to draw text using standard fonts in a PDF document by utilizing the `drawString` method of the `PdfGraphics` class along with predefined font types from the `PdfStandardFont` class. Standard fonts such as Helvetica, TimesRoman, or Courier can be specified to render text with consistent and widely supported typography.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a page
    let page: PdfPage = document.addPage();
    // Set font
    let font: PdfStandardFont = new PdfStandardFont(PdfFontFamily.helvetica, 10);
    // Draw text
    page.graphics.drawString('Hello World', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

### Draw Text using TrueType fonts

This example demonstrates how to draw text using TrueType fonts in a PDF document by utilizing the `drawString` method of the `PdfGraphics` class along with a `PdfTrueTypeFont` instance. The TrueType font provides enhanced text rendering with support for custom font styles.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfTrueTypeFont, PdfBrush } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a page
    let page: PdfPage = document.addPage();
    // Set font
    let font: PdfTrueTypeFont = new PdfTrueTypeFont('Arial.ttf', 10);
    // Draw text
    page.graphics.drawString('Hello World', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

### Draw text using CJK fonts

This example demonstrates how to draw text using fonts in a PDF document by utilizing the `drawString` method of the `PdfGraphics` class along with a `PdfCjkStandardFont` instance. CJK fonts provide support for Chinese, Japanese, and Korean characters, ensuring accurate rendering of multilingual text in the document.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfCjkStandardFont, PdfBrush } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a page
    let page: PdfPage = document.addPage();
    // Set font
    let font: PdfCjkStandardFont = new PdfCjkStandardFont(PdfCjkFontFamily.heiseiMinchoW3, 10);
    // Draw text
    page.graphics.drawString('こんにちは世界', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Drawing text using OpenType font

This example demonstrates how to draw text using an OpenType font in a PDF document by utilizing the `drawString` method of the `PdfGraphics` class along with a `PdfTrueTypeFont` instance. OpenType fonts provide advanced typographic features and support for a wide range of characters.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfTrueTypeFont, PdfBrush } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a page
    let page: PdfPage = document.addPage();
    // Set font
    let font: PdfTrueTypeFont = new PdfTrueTypeFont("Arial.otf", 10);
    // Draw text
    page.graphics.drawString('Syncfusion Essential PDF library used to create, read, and edit PDF files in any application', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## Drawing text using different text alignment

This example demonstrates how to draw text in a PDF document using different text alignment options by utilizing the `PdfStringFormat` class. The alignment can be set through the alignment property, which supports values such as Left, Center, and Right, allowing precise control over the positioning of text within the page or a defined rectangle.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfStandardFont, PdfStringFormat, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a page
    let page: PdfPage = document.addPage();
    // Create a string format object to define text layout
    let format = new PdfStringFormat();
    format.alignment = PdfTextAlignment.right; // Align text to the right
    format.wordSpacing = 2;                    // Set word spacing
    format.characterSpacing = 1;               // Set character spacing
    // Set font
    let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Draw text
    page.graphics.drawString('Syncfusion Essential PDF library', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}

## LineLimit, ClipPath, NoClip properties in PdfStringFormat

**LineLimit:** When LineLimit is enabled, the provided string will be laid out within the specified bounds. If the LineLimit property is disabled, the layout will continue to fill any remaining space. The default value of the LineLimit property is true.

**NoClip:** If we enable the NoClip option, it will show the text without cutting any words. If we disable the NoClip option, any text outside the fitting area will be hidden.

{% tabs %}
{% highlight c# tabtitle="TypeScript" %}

    import { PdfDocument, PdfPage, PdfStandardFont, PdfStringFormat, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

    // Create a new PDF document
    let document: PdfDocument = new PdfDocument();
    // Add a page
    let page: PdfPage = document.addPage();
    // Set font
    let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
    // Create a new PdfStringFormat and set its properties
    let format: PdfStringFormat = new PdfStringFormat();
    // Set no clip
    format.noClip = true;
    // Set line limit
    format.lineLimit = false;
    // Draw text
    page.graphics.drawString('Hello World', font, {x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
    // Save the document
    document.save('Output.pdf');
    // Close the document
    document.destroy();

{% endhighlight %}
{% endtabs %}