---
layout: post
title: Templates in Flutter PDF library | Syncfusion
description: Learn here all about adding headers, footers, and stamps using the Templates feature of the Syncfusion Flutter PDF non-UI library and more.
platform: document-processing
control: PDF
documentation: ug
---

# Templates in Flutter PDF

A PDF template is a drawing surface, where contents can be added. All the elements that can be added to a [`PdfPage`](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfPage-class.html) are supported in [`PdfTemplate`](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfTemplate-class.html) as well. The template in turn can be drawn over the page or can be positioned at any part of the page.

## Creating a new PDF template

The [`PdfTemplate`](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfTemplate-class.html) class can be used to create a new PDF template. You can add contents to the template using [`graphics`](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfTemplate/graphics.html) property of the [`PdfTemplate`](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfTemplate-class.html) object.

The following code example explains how to add contents to the [`PdfTemplate`](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfTemplate-class.html) and render into the new PDF page.

{% tabs %}
{% highlight dart tabtitle="dart" %}

//Create a new PDF document.
PdfDocument document = PdfDocument();

//Create a PDF Template.
PdfTemplate template = PdfTemplate(100, 50);

//Draw a rectangle on the template graphics
template.graphics!.drawRectangle(
    brush: PdfBrushes.burlyWood, bounds: Rect.fromLTWH(0, 0, 100, 50));

//Draw a string using the graphics of the template.
template.graphics!.drawString(
    'Hello World', PdfStandardFont(PdfFontFamily.helvetica, 14),
    brush: PdfBrushes.black, bounds: Rect.fromLTWH(5, 5, 0, 0));

//Add a new page and draw the template on the page graphics of the document.
document.pages.add().graphics.drawPdfTemplate(template, Offset(0, 0));

//Save and dispose the PDF document
File('Output.pdf').writeAsBytes(await document.save());
document.dispose();

{% endhighlight %}
{% endtabs %}

## Creating templates from existing PDF document

Essential<sup>&reg;</sup> PDF supports template creation using the [`CreateTemplate`](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfPage/createTemplate.html) method, enabling users to extract content from an existing PDF page and seamlessly incorporate it into a new PDF document.

The following code illustrates how to create the template from an existing page and draw it in a new PDF document.

{% tabs %}
{% highlight dart tabtitle="dart" %}

    //Load the PDF document.
    PdfDocument loadedDocument =
      PdfDocument(inputBytes: File('Input.pdf').readAsBytesSync());
    //Get the first page from the document.
    PdfPage loadedPage = loadedDocument.pages[0];
    //Create a PDF Template.
    PdfTemplate template = loadedPage.createTemplate();
    //Create a new PDF document.
    PdfDocument document = PdfDocument();
    //Add the page.
    PdfPage page = document.pages.add();
    //Create the graphics.
    PdfGraphics graphics = page.graphics;
    //Draw the template.
    graphics.drawPdfTemplate(template, Offset(0, 0));
    //Dispose the loaded PDF document.
    loadedDocument.dispose();
    //Save and dispose of the PDF document.
    File('Output.pdf').writeAsBytes(await document.save());
    document.dispose();

{% endhighlight %}
{% endtabs %}

## Combining multiple PDF documents

Essential<sup>&reg;</sup> PDF allows you to combine or merge multiple PDF documents using the [`CreateTemplate`](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfPage/createTemplate.html) method. You can load each PDF, create templates from their pages, and draw them into a new document. 

The following code illustrates how to merge multiple PDF documents using the CreateTemplate method.

{% tabs %}
{% highlight dart tabtitle="dart" %}

// Merges multiple PDF documents into a single file
Future<void> combinePDF() async {
  List<String> files = ["Invoice.pdf", "Input.pdf"];
  PdfDocument document = PdfDocument();
  PdfSection? section;
  for (String file in files) {
    PdfDocument loadedDocument = PdfDocument(inputBytes: await _readData(file));
    for (int index = 0; index < loadedDocument.pages.count; index++) {
      PdfTemplate template = loadedDocument.pages[index].createTemplate();
      if (section == null || section.pageSettings.size != template.size) {
        section = document.sections!.add();
        section.pageSettings.size = template.size;
        section.pageSettings.margins.all = 0;
      }

      section.pages.add().graphics.drawPdfTemplate(
        template,
        const Offset(0, 0),
      );
    }
    loadedDocument.dispose();
  }
  // Save the document.
  List<int> bytes = await document.save();
  File('Output.pdf').writeAsBytes(bytes);
  document.dispose();
}

// Read the existing PDF file.
Future<List<int>> _readData(String name) async {
  final ByteData data = await rootBundle.load('assets/$name');
  return data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes);
}

{% endhighlight %}
{% endtabs %}

## Working with PdfPageTemplateElement

The [`PdfPageTemplateElement`](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/PdfPageTemplateElement-class.html) is a template element that can be added to any part of the PDF page such as header, footer, and more.

The following code example explains how to add the page template elements to a PDF document.

{% tabs %}
{% highlight dart tabtitle="dart" %}

//Create a new PDF document
PdfDocument document = PdfDocument();

//Add a page to the PDF document
PdfPage page = document.pages.add();

Rect bounds = Rect.fromLTWH(0, 0, page.getClientSize().width, 50);
PdfFont font = PdfStandardFont(PdfFontFamily.helvetica, 7);

//Create a header and draw the image
PdfPageTemplateElement header = PdfPageTemplateElement(bounds);

//Get image data
File imageFile = File('image.jpg');
Uint8List imagebytes = await imageFile.readAsBytes();
String imageData = base64.encode(imagebytes);

//Draw the image in the header
header.graphics.drawImage(
    PdfBitmap.fromBase64String(imageData),
    Rect.fromLTWH(0, 0, 100, 50));

//Add the header at the top
document.template.top = header;

//Create a Page template that can be used as footer
PdfPageTemplateElement footer = PdfPageTemplateElement(bounds);

//Add the fields in composite fields
PdfCompositeField compositeField = PdfCompositeField(
    font: font,
    brush: PdfBrushes.black,
    text: "Page {0} of {1}",
    fields: <PdfAutomaticField>[
      PdfPageNumberField(font: font, brush: PdfBrushes.black),
      PdfPageCountField(font: font, brush: PdfBrushes.black)
    ]);
compositeField.bounds = footer.bounds;

//Draw the composite field in footer
compositeField.draw(footer.graphics, Offset(470, 40));

//Add the footer template at the bottom
document.template.bottom = footer;

//Save and dispose the PDF document
File('SampleOutput.pdf').writeAsBytes(await document.save());
document.dispose();

{% endhighlight %}
{% endtabs %}

## Adding stamp to the PDF document

The Syncfusion<sup>&reg;</sup> Flutter PDF allows you to add a stamp to the PDF document using PDF templates.

The following code example explains how to draw text as a stamp to the PDF document.

{% tabs %}
{% highlight dart tabtitle="dart" %}

//Create a new PDF document
PdfDocument document = PdfDocument();

//Add a page to the PDF document
PdfPage page = document.pages.add();

//Create template and draw text in template graphics
final PdfPageTemplateElement custom =
    PdfPageTemplateElement(Offset(0, 0) & page.getClientSize(), page);
custom.dock = PdfDockStyle.fill;
PdfGraphicsState state = custom.graphics.save();
custom.graphics.rotateTransform(-40);
custom.graphics.drawString(
    'STAMP PDF DOCUMENT', PdfStandardFont(PdfFontFamily.helvetica, 20),
    pen: PdfPens.red,
    brush: PdfBrushes.red,
    bounds: Rect.fromLTWH(-150, 450, 400, 400));
custom.graphics.restore(state);

//Add template as a stamp to the PDF document
document.template.stamps.add(custom);

//Draw rectangle to the page graphics
page.graphics.drawRectangle(
    pen: PdfPen(PdfColor(0, 0, 0), width: 5),
    brush: PdfBrushes.lightGray,
    bounds: Offset(0, 0) & page.getClientSize());

//Save the document
final List<int> bytes = await document.save();

//Dispose the document
document.dispose();

{% endhighlight %}
{% endtabs %}