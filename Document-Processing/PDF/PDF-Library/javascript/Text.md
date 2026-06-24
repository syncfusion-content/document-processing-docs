---
title: Text in JavaScript PDF Library | Syncfusion
description: This section explains how to add text to a PDF by using different types of fonts, including TrueType fonts and standard fonts, with the JavaScript PDF Library
platform: document-processing
control: PDF
documentation: UG
---
# Text in JavaScript PDF Library

The PDF provides support to add and format text in PDF documents using various font types, including TrueType and standard fonts, enabling precise control over text appearance and layout.

## Drawing text in a new document

This example demonstrates how to draw text in a new PDF document using the [drawString](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawstring) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class. The method allows you to specify the text content, font, brush, and position to render the text on a page within the document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
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
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
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

N>  Due to the inherent limitations of the PDF specification and the rendering capabilities of PDF libraries, emojis with skin tone modifiers are not supported in generated PDF documents. Only the base versions of emojis can be displayed. This limitation is common across most PDF libraries, as the PDF format does not explicitly support rendering skin tone variations in emojis.

## The importance of saving and restoring graphics state in PDF content rendering

This example demonstrates the importance of saving and restoring the graphics state when rendering PDF content using the [save](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#Syncfusion_Pdf_Graphics_PdfGraphics_Save) and [restore](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#Syncfusion_Pdf_Graphics_PdfGraphics_Restore_Syncfusion_Pdf_Graphics_PdfGraphicsState_) methods of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class. These methods ensure that any transformations, such as scaling, rotation, or color changes, applied to the graphics context do not affect subsequent drawing operations, maintaining consistent layout and design.

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
graphics.translateTransform({ x: 100, y: 50});
graphics.rotateTransform(45);
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text
graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
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

This example demonstrates how to draw text in an existing PDF document using the [drawString](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawstring) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class. The method allows you to specify the text content, font, brush, and position to render the text on a selected page within the document.

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
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
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

## Drawing text using different fonts

JavaScript PDF allows you to add text to the PDF document using the following types of fonts.

1. Standard fonts
2. TrueType fonts
3. Chinese, Japanese and Korean (CJK) fonts

### Draw text using standard fonts

This example demonstrates how to draw text using standard fonts in a PDF document by utilizing the [drawString](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawstring) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class along with predefined font types from the [PdfStandardFont](https://ej2.syncfusion.com/documentation/api/pdf/pdfstandardfont) class. Standard fonts such as Helvetica, TimesRoman, or Courier can be specified to render text with consistent and widely supported typography.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfStandardFont, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
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
// Draw text
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

### Draw text using TrueType fonts

This example demonstrates how to draw text using TrueType fonts in a PDF document by utilizing the [drawString](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawstring) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class along with a [PdfTrueTypeFont](https://ej2.syncfusion.com/documentation/api/pdf/pdftruetypefont) instance. The TrueType font provides enhanced text rendering with support for custom font styles.

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
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
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

### Draw text using CJK fonts

This example demonstrates how to draw text using fonts in a PDF document by utilizing the [drawString](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics#drawstring) method of the [PdfGraphics](https://ej2.syncfusion.com/documentation/api/pdf/pdfgraphics) class. The fonts provide support for Chinese, Japanese, and Korean characters, ensuring accurate rendering of multilingual text in the document.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfCjkStandardFont, PdfBrush, PdfFontStyle } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Set font
let font: PdfCjkStandardFont = document.embedFont(PdfCjkFontFamily.heiseiMinchoW3, 10, PdfFontStyle.regular);
// Draw text
page.graphics.drawString('こんにちは世界', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
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
var font = document.embedFont(ej.pdf.PdfCjkFontFamily.heiseiMinchoW3, 10, ej.pdf.PdfFontStyle.regular);
// Draw text
page.graphics.drawString('こんにちは世界', font, { x: 10, y: 20, width: 100, height: 200 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Drawing text using different text alignment

This example demonstrates how to draw text in a PDF document using different text alignment options by utilizing the [PdfStringFormat](https://ej2.syncfusion.com/documentation/api/pdf/pdfstringformat) class. The alignment can be set through the alignment property, which supports values such as Left, Center, and Right, allowing precise control over the positioning of text within the page or a defined rectangle.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfStandardFont, PdfTextAlignment, PdfVerticalAlignment, PdfStringFormat, PdfFontFamily, PdfFontStyle, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Create a string format object to define text layout
let format = new PdfStringFormat(PdfTextAlignment.right, PdfVerticalAlignment.bottom);
format.wordSpacing = 2;                    // Set word spacing
format.characterSpacing = 1;               // Set character spacing
// Set font
let font: PdfStandardFont = document.embedFont(PdfFontFamily.helvetica, 10, PdfFontStyle.regular);
// Draw text
page.graphics.drawString('JavaScript PDF Library', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
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
// Draw text
page.graphics.drawString('JavaScript PDF Library', font, { x: 10, y: 20, width: 100, height: 200 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }), format);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## LineLimit, NoClip properties in PdfStringFormat

**LineLimit:** When LineLimit is enabled, the provided string will be laid out within the specified bounds. If the LineLimit property is disabled, the layout will continue to fill any remaining space. The default value of the LineLimit property is true.

**NoClip:** If we enable the NoClip option, it will show the text without cutting any words. If we disable the NoClip option, any text outside the fitting area will be hidden.

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
// Set no clip
format.noClip = true;
// Set line limit
format.lineLimit = false;
// Draw text
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200}, new PdfBrush({r: 0, g: 0, b: 255}));
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
// Set no clip
format.noClip = true;
// Set line limit
format.lineLimit = false;
// Draw text
page.graphics.drawString('Hello World', font, { x: 10, y: 20, width: 100, height: 200 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 255 }), format);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();
{% endhighlight %}
{% endtabs %}

## Drawing Right-To-Left text

This example demonstrates how to render right-to-left (RTL) text in a PDF document using a TrueType font that supports RTL scripts such as Hebrew or Arabic.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfTrueTypeFont, PdfStringFormat, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Set font
let font: PdfTrueTypeFont = document.embedFont(data, 13);
// Create a new PDF string format
let format: PdfStringFormat =  new PdfStringFormat();
// Sets the text alignment of form field as right
format.alignment = PdfTextAlignment.right; 
// Sets the text direction of form field as rightToLeft
format.textDirection = PdfTextDirection.rightToLeft;
// Draw RTL text
page.graphics.drawString(`שלום עולם!!!`, font, { x: 0, y: 200, width: 100, height: 100 }, new PdfBrush({ r: 0, g: 0, b: 0 }), format);
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
let format =  new ej.pdf.PdfStringFormat();
// Sets the text alignment of form field as right
format.alignment = PdfTextAlignment.right; 
// Sets the text direction of form field as rightToLeft
format.textDirection = PdfTextDirection.rightToLeft;
// Draw RTL text
page.graphics.drawString(`שלום עולם!!!`, font, { x: 0, y: 200, width: 100, height: 100 }, new ej.pdf.PdfBrush({ r: 0, g: 0, b: 0 }), format);
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}

## Embedded font

This example shows how to embed fonts using [embedFont()](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument#embedfont) method of the [PdfDocument](https://ej2.syncfusion.com/documentation/api/pdf/pdfdocument) to ensure consistent text rendering across all platforms. The [JavaScript PDF Library](https://www.syncfusion.com/document-sdk/javascript-pdf-library) supports embedding [PdfStandardFont](https://ej2.syncfusion.com/documentation/api/pdf/pdfstandardfont), [PdfCjkStandardFont](https://ej2.syncfusion.com/documentation/api/pdf/pdfcjkstandardfont), and [PdfTrueTypeFont](https://ej2.syncfusion.com/documentation/api/pdf/pdftruetypefont) for reliable Unicode text display. Additionally, using embedded fonts helps reduce overall PDF size, since the font dictionary is not duplicated for each usage—ensuring cleaner and more efficient output.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { PdfDocument, PdfPage, PdfFont, PdfStandardFont, PdfCjkStandardFont, PdfFontFamily, PdfFontStyle, PdfCjkFontFamily, PdfBrush } from '@syncfusion/ej2-pdf';

// Create a new PDF document
let document: PdfDocument = new PdfDocument();
// Add a page
let page: PdfPage = document.addPage();
// Embed a standard font into the PDF document.
const embedded1: PdfStandardFont = document.embedFont(PdfFontFamily.timesRoman, 12,  PdfFontStyle.regular);
// Gets a font variant from the base font with the given size and style
const embedded2: PdfFont = embedded1.getFont(14, PdfFontStyle.bold);
const embedded3: PdfFont = embedded1.getFont(14, PdfFontStyle.italic);
// Embed a CJK font into the PDF document.
const embedded4: PdfCjkStandardFont = document.embedFont(PdfCjkFontFamily.hanyangSystemsGothicMedium, 12,  PdfFontStyle.regular , true);
// Draw string using embed font.
page.graphics.drawString('timesRoman with regular', embedded1, {x: 10, y: 10, width: 300, height: 24}, new PdfBrush({r: 0, g: 0, b: 255}));
page.graphics.drawString('timesRoman with bold', embedded2, {x: 10, y: 50, width: 300, height: 24}, new PdfBrush({r: 0, g: 0, b: 255}));
page.graphics.drawString('timesRoman with italic', embedded3, {x: 200, y: 50, width: 300, height: 24}, new PdfBrush({r: 0, g: 0, b: 255}));
page.graphics.drawString('Cjkfont with regular', embedded4, {x: 200, y: 10, width: 300, height: 24}, new PdfBrush({r: 0, g: 0, b: 255}));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}

// Create a new PDF document
var document = new new ej.pdf.PdfDocument();
// Add a page
var page = document.addPage();
// Embed a font into the PDF document.
const embedded1 = document.embedFont(new ej.pdf.PdfFontFamily.timesRoman, 12,  new ej.pdf.PdfFontStyle.regular);
const embedded2 = document.embedFont(new ej.pdf.PdfCjkFontFamily.hanyangSystemsGothicMedium, 12,  new ej.pdf.PdfFontStyle.regular , true);
// Gets a font variant from the base font with the given size and style
const embedded3 = embedded1.getFont(14, new ej.pdf.PdfFontStyle.bold);
const embedded4 = embedded4.getFont(14, new ej.pdf.PdfFontStyle.bold);
// Draw string using embed font.
page.graphics.drawString('timesRoman with regular', embedded1, {x: 10, y: 10, width: 300, height: 24}, new ej.pdf.PdfBrush({r: 0, g: 0, b: 255}));
page.graphics.drawString('timesRoman with bold', embedded3, {x: 10, y: 50, width: 300, height: 24}, new ej.pdf.PdfBrush({r: 0, g: 0, b: 255}));
page.graphics.drawString('Cjkfont with regular', embedded2, {x: 200, y: 10, width: 300, height: 24}, new ej.pdf.PdfBrush({r: 0, g: 0, b: 255}));
page.graphics.drawString('Cjkfont with bold', embedded4, {x: 200, y: 50, width: 300, height: 24}, new ej.pdf.PdfBrush({r: 0, g: 0, b: 255}));
// Save the document
document.save('Output.pdf');
// Close the document
document.destroy();

{% endhighlight %}
{% endtabs %}