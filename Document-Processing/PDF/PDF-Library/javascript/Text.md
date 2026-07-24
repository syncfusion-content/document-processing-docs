---
title: Text in JavaScript PDF Library | Syncfusion
canonical_url: https://www.syncfusion.com/document-sdk/javascript-pdf-library
description: This section explains how to add text to a PDF by using different types of fonts, including TrueType fonts and standard fonts, with the JavaScript PDF Library
platform: document-processing
control: PDF
documentation: UG
---

# Text in JavaScript PDF Library

The JavaScript PDF Library enables precise control over text appearance and layout in PDF documents. It supports adding and formatting text using multiple font types — Standard, TrueType, and CJK — and provides layout-aware rendering for multi-page documents.

## Drawing text in a new document

This example demonstrates how to draw text in a new PDF document using the [drawString](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawstring) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class. The method accepts the text content, font, brush, and a position rectangle to render the text on a page.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Get graphics from the page
var graphics = page.graphics;
// Set font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
// Draw text
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

N> Due to the inherent limitations of the PDF specification and the rendering capabilities of PDF libraries, emojis with skin tone modifiers are not supported in generated PDF documents. Only the base versions of emojis can be displayed. This limitation is common across most PDF libraries, as the PDF format does not explicitly support rendering skin tone variations in emojis.

## The importance of saving and restoring graphics state in PDF content rendering

This example demonstrates saving and restoring the graphics state using the [save](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#Syncfusion_Pdf_Graphics_PdfGraphics_Save) and [restore](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#Syncfusion_Pdf_Graphics_PdfGraphics_Restore_Syncfusion_Pdf_Graphics_PdfGraphicsState_) methods of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class. These methods ensure that transformations such as scaling, rotation, or color changes applied to the graphics context do not affect subsequent drawing operations, maintaining consistent layout and design.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfGraphics, PdfGraphicsState, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Get graphics from the page
let graphics: PdfGraphics = page.graphics;
// Save the current graphics state and apply transformations
let state: PdfGraphicsState = graphics.save();
graphics.translateTransform({ x: 100, y: 50 });
graphics.rotateTransform(45);
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new PdfBrush({ r: 0, g: 0, b: 255 }));
// Restore the graphics state
graphics.restore(state);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Get graphics from the page
var graphics = page.graphics;
// Save the current graphics state and apply transformations
var state = graphics.save();
graphics.translateTransform({ x: 100, y: 50 });
graphics.rotateTransform(45);
// Set font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
// Draw text
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
// Restore the graphics state
graphics.restore(state);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Drawing text in an existing document

This example demonstrates how to draw text in an existing PDF document using the [drawString](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawstring) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class. The existing PDF is passed as a byte array to the `PdfDocument` constructor.


{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Load an existing PDF document
let document: PdfDocument = new PdfDocument(data);
// Access first page
let page: PdfPage = document.getPage(0);
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Load an existing PDF document
var document = new ej.pdf.PdfDocument(data);
// Access first page
var page = document.getPage(0);
// Set font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
// Draw text
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Embedded fonts

This example shows how to embed fonts using the [embedFont()](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#embedfont) method of the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument) class to ensure consistent text rendering across all platforms. The JavaScript PDF Library supports embedding [PdfStandardFont](https://ej2.syncfusion.com/documentation/api/pdf/pdfstandardfont), [PdfCjkStandardFont](https://ej2.syncfusion.com/documentation/api/pdf/pdfcjkstandardfont), and [PdfTrueTypeFont](https://ej2.syncfusion.com/documentation/api/pdf/pdftruetypefont) for reliable Unicode text display.

The fourth `embed` parameter of `embedFont` is `true` for CJK fonts to embed the full font dictionary in the PDF. This is required for the recipient viewer to render CJK characters correctly without depending on a system-installed font, but it increases the file size. When `embed` is `false`, only the font reference is stored, which produces a smaller file but may render incorrectly on systems without the font installed.

The [getFont()](https://ej2.syncfusion.com/documentation/api/pdf/pdffont#getfont) method of the [PdfFont](https://ej2.syncfusion.com/documentation/api/pdf/pdffont) class returns a derived `PdfFont` variant of the base font with the specified size and style. This avoids re-embedding the same font multiple times.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfFont, PdfStandardFont, PdfCjkStandardFont, PdfFontFamily, PdfFontStyle, PdfCjkFontFamily, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();

// Embed a standard font into the PDF document
const embedded1: PdfStandardFont = document.embedFont(PdfFontFamily.timesRoman, 12, PdfFontStyle.regular);
// Derive a bold variant from the base font
const embedded2: PdfFont = embedded1.getFont(14, PdfFontStyle.bold);
// Derive an italic variant from the base font
const embedded3: PdfFont = embedded1.getFont(14, PdfFontStyle.italic);
// Embed a CJK font into the PDF document (the final `true` enables full embedding)
const embedded4: PdfCjkStandardFont = document.embedFont(PdfCjkFontFamily.hanyangSystemsGothicMedium, 12, PdfFontStyle.regular, true);

// Draw strings using each embedded font
page.graphics.drawString('timesRoman with regular', embedded1, { x: 10, y: 10, width: 300, height: 24 }, new PdfBrush({ r: 0, g: 0, b: 255 }));
page.graphics.drawString('timesRoman with bold', embedded2, { x: 10, y: 50, width: 300, height: 24 }, new PdfBrush({ r: 0, g: 0, b: 255 }));
page.graphics.drawString('timesRoman with italic', embedded3, { x: 10, y: 90, width: 300, height: 24 }, new PdfBrush({ r: 0, g: 0, b: 255 }));
page.graphics.drawString('Cjkfont with regular', embedded4, { x: 10, y: 130, width: 300, height: 24 }, new PdfBrush({ r: 0, g: 0, b: 255 }));

// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();

// Embed a standard font into the PDF document
var embedded1 = document.embedFont(ej.pdf.PdfFontFamily.timesRoman, 12, ej.pdf.PdfFontStyle.regular);
// Derive a bold variant from the base font
var embedded2 = embedded1.getFont(14, ej.pdf.PdfFontStyle.bold);
// Derive an italic variant from the base font
var embedded3 = embedded1.getFont(14, ej.pdf.PdfFontStyle.italic);
// Embed a CJK font into the PDF document (the final `true` enables full embedding)
var embedded4 = document.embedFont(ej.pdf.PdfCjkFontFamily.hanyangSystemsGothicMedium, 12, ej.pdf.PdfFontStyle.regular, true);
// Derive a bold variant of the CJK font
var embedded5 = embedded4.getFont(14, ej.pdf.PdfFontStyle.bold);

// Draw strings using each embedded font
page.graphics.drawString('timesRoman with regular', embedded1, { x: 10, y: 10, width: 300, height: 24 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
page.graphics.drawString('timesRoman with bold', embedded2, { x: 10, y: 50, width: 300, height: 24 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
page.graphics.drawString('timesRoman with italic', embedded3, { x: 10, y: 90, width: 300, height: 24 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
page.graphics.drawString('Cjkfont with regular', embedded4, { x: 10, y: 130, width: 300, height: 24 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
page.graphics.drawString('Cjkfont with bold', embedded5, { x: 10, y: 170, width: 300, height: 24 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));

// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Drawing text using different font types

The JavaScript PDF Library supports the following font types:

1. Standard fonts
2. TrueType fonts
3. Chinese, Japanese and Korean (CJK) fonts

### Drawing text using standard fonts

This example demonstrates how to draw text using standard fonts in a PDF document by utilizing the [drawString](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawstring) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class along with predefined font types from the [PdfStandardFont](https://ej2.syncfusion.com/documentation/api/pdf/pdfstandardfont) class. Standard fonts such as Helvetica, TimesRoman, and Courier can be specified to render text with consistent and widely supported typography.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.timesRoman, 14, PdfFontStyle.bold);
// Draw text
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 200, height: 30 }, new PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Set font
var font = document.embedFont(ej.pdf.PdfFontFamily.timesRoman, 14, ej.pdf.PdfFontStyle.bold);
// Draw text
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 200, height: 30 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Drawing text using TrueType fonts

This example demonstrates how to draw text using TrueType fonts in a PDF document by utilizing the [drawString](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawstring) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class along with a [PdfTrueTypeFont](https://ej2.syncfusion.com/documentation/api/pdf/pdftruetypefont) instance. TrueType fonts provide enhanced text rendering with support for custom font styles.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfTrueTypeFont, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Embed a TTF font into the PDF
let font: PdfTrueTypeFont = document.embedFont(data, 10);
// Draw text
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Embed a TTF font into the PDF
var font = document.embedFont(data, 10);
// Draw text
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Drawing text using CJK fonts

This example demonstrates how to draw text using CJK fonts in a PDF document by utilizing the [drawString](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawstring) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class. CJK fonts support Chinese, Japanese, and Korean characters, ensuring accurate rendering of multilingual text.

N> Pass the fourth `embed` argument as `true` when calling `embedFont` for CJK fonts. This fully embeds the font dictionary in the PDF so the recipient viewer does not need a system-installed copy of the font. Embedded CJK fonts significantly increase the output file size — for smaller files, use subset embedding or a pre-installed font on the target system.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfCjkStandardFont, PdfCjkFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Set font — pass `true` as the fourth argument to embed the CJK font
let font: PdfCjkStandardFont = document.embedFont(PdfCjkFontFamily.heiseiMinchoW3, 10, PdfFontStyle.regular, true);
// Draw text
page.graphics.drawString('こんにちは世界', font, { x: 10, y: 20, width: 200, height: 30 }, new PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Set font — pass `true` as the fourth argument to embed the CJK font
var font = document.embedFont(ej.pdf.PdfCjkFontFamily.heiseiMinchoW3, 10, ej.pdf.PdfFontStyle.regular, true);
// Draw text
page.graphics.drawString('こんにちは世界', font, { x: 10, y: 20, width: 200, height: 30 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Drawing right-to-left text

This example demonstrates how to render right-to-left (RTL) text in a PDF document using a TrueType font that supports RTL scripts such as Hebrew or Arabic. The [PdfStringFormat](https://ej2.syncfusion.com/documentation/api/pdf/pdfstringformat) class is used to set the [textDirection](https://ej2.syncfusion.com/documentation/api/pdf/pdfstringformat#textdirection) property to [PdfTextDirection.rightToLeft](https://ej2.syncfusion.com/documentation/api/pdf/pdftextdirection).

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfTrueTypeFont, PdfStringFormat, PdfTextAlignment, PdfTextDirection, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Set font
let font: PdfTrueTypeFont = document.embedFont(data, 13);
// Create a new PDF string format
let format: PdfStringFormat = new PdfStringFormat();
// Sets the text alignment to right
format.alignment = PdfTextAlignment.right;
// Sets the text direction to right-to-left
format.textDirection = PdfTextDirection.rightToLeft;
// Draw RTL text
page.graphics.drawString('שלום עולם!!!', font, { x: 0, y: 200, width: 100, height: 100 }, new PdfBrush({ r: 0, g: 0, b: 0 }), format);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Set font
var font = document.embedFont(data, 13);
// Create a new PDF string format
var format = new ej.pdf.PdfStringFormat();
// Sets the text alignment to right
format.alignment = ej.pdf.PdfTextAlignment.right;
// Sets the text direction to right-to-left
format.textDirection = ej.pdf.PdfTextDirection.rightToLeft;
// Draw RTL text
page.graphics.drawString('שלום עולם!!!', font, { x: 0, y: 200, width: 100, height: 100 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 }), format);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## PdfStringFormat options

The [PdfStringFormat](https://ej2.syncfusion.com/documentation/api/pdf/pdfstringformat) class controls the layout, alignment, and clipping behavior of text drawn with [drawString](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawstring). Pass a `PdfStringFormat` instance as the last argument to `drawString` to apply these options.

### Text alignment

This example demonstrates how to draw text using different text-alignment options. The alignment is configured through the [alignment](https://ej2.syncfusion.com/documentation/api/pdf/pdfstringformat#alignment) and [lineAlignment](https://ej2.syncfusion.com/documentation/api/pdf/pdfstringformat#linealignment) properties, which support values such as Left, Center, and Right, allowing precise control over text positioning.

The [wordSpacing](https://ej2.syncfusion.com/documentation/api/pdf/pdfstringformat#wordspacing) and [characterSpacing](https://ej2.syncfusion.com/documentation/api/pdf/pdfstringformat#characterspacing) properties adjust the spacing between words and characters.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfStandardFont, PdfTextAlignment, PdfVerticalAlignment, PdfStringFormat, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Create a string format object to define text layout
let format: PdfStringFormat = new PdfStringFormat(PdfTextAlignment.right, PdfVerticalAlignment.bottom);
format.wordSpacing = 2; // Set word spacing
format.characterSpacing = 1; // Set character spacing
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text (pass format as the last argument to apply alignment and spacing)
page.graphics.drawString('JavaScript PDF Library', font, { x: 10, y: 20, width: 200, height: 30 }, new PdfBrush({ r: 0, g: 0, b: 255 }), format);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Create a string format object to define text layout
var format = new ej.pdf.PdfStringFormat(ej.pdf.PdfTextAlignment.right, ej.pdf.PdfVerticalAlignment.bottom);
format.wordSpacing = 2; // Set word spacing
format.characterSpacing = 1; // Set character spacing
// Set font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
// Draw text (pass format as the last argument to apply alignment and spacing)
page.graphics.drawString('JavaScript PDF Library', font, { x: 10, y: 20, width: 200, height: 30 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }), format);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### LineLimit and NoClip

- **[lineLimit](https://ej2.syncfusion.com/documentation/api/pdf/pdfstringformat#linelimit):** When `lineLimit` is enabled, the provided string is laid out within the specified bounds. If disabled, the layout continues to fill any remaining space. The default value is `true`.
- **[noClip](https://ej2.syncfusion.com/documentation/api/pdf/pdfstringformat#noclip):** When `noClip` is enabled, text outside the fitting area is shown in full. When disabled, text outside the fitting area is clipped (hidden). The default value is `false`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfStandardFont, PdfStringFormat, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Create a new PdfStringFormat and set its properties
let format: PdfStringFormat = new PdfStringFormat();
format.noClip = true;
format.lineLimit = false;
// Draw text (pass format to apply the noClip and lineLimit settings)
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new PdfBrush({ r: 0, g: 0, b: 255 }), format);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Set font
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 10, ej.pdf.PdfFontStyle.regular);
// Create a new PdfStringFormat and set its properties
var format = new ej.pdf.PdfStringFormat();
format.noClip = true;
format.lineLimit = false;
// Draw text (pass format to apply the noClip and lineLimit settings)
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }), format);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Drawing text with pagination using PdfTextElement

The `PdfTextElement` class provides a structured and flexible way to render text in PDF documents with layout-aware capabilities. It supports essential properties such as font, brush, pen, and formatting, enabling consistent and customizable text rendering.

With built-in features like automatic pagination, alignment, and formatting, `PdfTextElement` simplifies the process of creating well-structured, multi-page documents. Text can be drawn using coordinates or defined bounds, ensuring precise placement and predictable layout behavior.

When rendering large blocks of text, the content can seamlessly flow across multiple pages. The [PdfLayoutResult](https://ej2.syncfusion.com/documentation/api/pdf/pdflayoutresult) class returns layout information such as the rendered bounds and page details. This allows accurate placement of subsequent elements without overlap, maintaining proper spacing and continuity.

The [PdfLayoutFormat](https://ej2.syncfusion.com/documentation/api/pdf/pdflayoutformat) class controls layout behavior through its [layout](https://ej2.syncfusion.com/documentation/api/pdf/pdflayoutformat#layout) property, which accepts a value from the [PdfLayoutType](https://ej2.syncfusion.com/documentation/api/pdf/pdflayouttype) enumeration (such as `paginate`).

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush, PdfPen, PdfLayoutFormat, PdfLayoutType, PdfStringFormat, PdfTextAlignment, PdfTextElement, PdfLayoutResult } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page to the document
let page: PdfPage = document.addPage();
// Define font for text rendering
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 14);
// Define brush for text color (blue)
let brush: PdfBrush = new PdfBrush({ r: 0, g: 0, b: 255 });
// Define pen for text outline
let pen: PdfPen = new PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Define string formatting (alignment)
let format: PdfStringFormat = new PdfStringFormat();
format.alignment = PdfTextAlignment.center;
// Define layout format for pagination
let layoutFormat: PdfLayoutFormat = new PdfLayoutFormat();
// Enables layout and pagination
layoutFormat.layout = PdfLayoutType.paginate;
// Create a text element with all supported properties
let element: PdfTextElement = {
  text: 'This is a large text block demonstrating layout-aware rendering. '.repeat(25),
  font: font,
  pen: pen,
  brush: brush,
  stringFormat: format,
  layoutFormat: layoutFormat
};
// Draw the text element within specified bounds; width constraint enables wrapping and multi-page flow
let result: PdfLayoutResult = page.drawTextElement(element, { x: 40, y: 60, width: 400 });
// Retrieve the last page from layout result
let nextPage: PdfPage = result.page;
// Create continuation text element
let continuation: PdfTextElement = {
  text: 'This is the continuation of the content on the second page.',
  font: font,
  brush: brush
};
// Draw continuation text below the previous content using layout bounds
nextPage.drawTextElement(continuation, { x: 40, y: result.bounds.y + 10, width: 400 });
// Save the document
document.save('Output.pdf');
// Destroy the document to release resources
document.destroy();
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
// Create a new PDF document
var document = new ej.pdf.PdfDocument();
// Add a page to the document
var page = document.addPage();
// Define font for text
var font = document.embedFont(ej.pdf.PdfFontFamily.helvetica, 14);
// Define brush for text color (blue)
var brush = new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 });
// Define pen for text outline
var pen = new ej.pdf.PdfPen({ r: 0, g: 0, b: 0 }, 1);
// Define string format (alignment)
var format = new ej.pdf.PdfStringFormat();
format.alignment = ej.pdf.PdfTextAlignment.center;
// Define layout format
var layoutFormat = new ej.pdf.PdfLayoutFormat();
// Enables layout and pagination
layoutFormat.layout = ej.pdf.PdfLayoutType.paginate;
// Create text element with all properties
var element = {
  text: 'This is a large text block demonstrating layout-aware rendering. '.repeat(25),
  font: font,
  pen: pen,
  brush: brush,
  stringFormat: format,
  layoutFormat: layoutFormat
};
// Draw text with layout and wrapping
var result = page.drawTextElement(element, { x: 40, y: 60, width: 400 });
// Access last page from layout result
var nextPage = result.page;
// Create continuation text
var continuation = {
  text: 'This is the continuation of the content on the second page.',
  font: font,
  brush: brush
};
// Draw continuation text below previous content
nextPage.drawTextElement(continuation, { x: 40, y: result.bounds.y + 10, width: 400 });
// Save the document
document.save('Output.pdf');
// Destroy the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Additional Resources

- [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library)
- [JavaScript PDF Library documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/javascript/overview)
- [JavaScript PDF Library API reference](https://ej2.syncfusion.com/documentation/api/pdf)
- [JavaScript PDF Library examples](https://document.syncfusion.com/demos/pdf/javascript/#/tailwind3/pdf/default.html)