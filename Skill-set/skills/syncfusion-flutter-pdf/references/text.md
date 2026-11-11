# Working with Text

> Draw text on PDF pages using drawString, PdfTextElement, various font types, RTL, and multicolumn layouts.

---

## Draw Text (Simple)

### Draw Text Using drawString

```dart
//Create a new PDF document
PdfDocument document = PdfDocument();

//Draw text using drawString
document.pages.add().graphics.drawString(
    'Hello World!!!', PdfStandardFont(PdfFontFamily.helvetica, 20),
    brush: PdfBrushes.black, bounds: Rect.fromLTWH(10, 10, 300, 50));

//Save and dispose
File('Output.pdf').writeAsBytes(await document.save());
document.dispose();
```

### Placeholders
- `'Hello World!!!'` → Replace with actual text content
- `PdfFontFamily.helvetica` → Replace with desired font family
- `20` → Replace with desired font size
- `Rect.fromLTWH(10, 10, 300, 50)` → Replace with actual position/size bounds

---

## Draw Text in Existing Document

```dart
//Load an existing PDF document
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Get the first page
PdfPage page = document.pages[0];

//Draw text on the existing page
page.graphics.drawString(
    'Added Text', PdfStandardFont(PdfFontFamily.helvetica, 20),
    bounds: Rect.fromLTWH(40, 40, 500, 40));
```

---

## Font Types

### Add a Standard Fonts (14 built-in PDF fonts)

```dart
//Standard font families:
// PdfFontFamily.helvetica
// PdfFontFamily.timesRoman
// PdfFontFamily.courier
// PdfFontFamily.symbol
// PdfFontFamily.zapfDingbats

PdfFont font = PdfStandardFont(PdfFontFamily.helvetica, 16);

document.pages.add().graphics.drawString(
    'Hello World!!!', font,
    brush: PdfBrushes.black, bounds: Rect.fromLTWH(10, 10, 300, 50));
```

### Add a Different Font Styles

```dart
//Bold
PdfFont boldFont = PdfStandardFont(PdfFontFamily.timesRoman, 14,
    style: PdfFontStyle.bold);

//Italic
PdfFont italicFont = PdfStandardFont(PdfFontFamily.timesRoman, 14,
    style: PdfFontStyle.italic);

//Regular
PdfFont boldItalicFont = PdfStandardFont(PdfFontFamily.timesRoman, 14,
    style: PdfFontStyle.regular);

//Underline
PdfFont underlineFont = PdfStandardFont(PdfFontFamily.timesRoman, 14,
    style: PdfFontStyle.underline);

//Strikeout
PdfFont strikeoutFont = PdfStandardFont(PdfFontFamily.timesRoman, 14,
    style: PdfFontStyle.strikethrough);
```

### Add a TrueType Fonts (from file)

```dart
//Load TrueType font from file bytes
PdfFont trueTypeFont =
    PdfTrueTypeFont(File('Arial.ttf').readAsBytesSync(), 14);

document.pages.add().graphics.drawString('Hello World!!!', trueTypeFont,
    brush: PdfBrushes.black, bounds: Rect.fromLTWH(10, 10, 300, 50));
```

### Add CJK Fonts (Chinese, Japanese, Korean)

```dart
//CJK font families:
// PdfCjkFontFamily.heiseiKakuGothicW5
// PdfCjkFontFamily.heiseiMinchoW3
// PdfCjkFontFamily.monotypeHeiMedium
// PdfCjkFontFamily.monotypeSungLight
// PdfCjkFontFamily.sinoTypeSongLight

document.pages.add().graphics.drawString(
    'こんにちは世界',
    PdfCjkStandardFont(PdfCjkFontFamily.heiseiMinchoW3, 20),
    brush: PdfBrushes.black, bounds: Rect.fromLTWH(10, 10, 300, 50));
```

---

## Measure String Size

```dart
PdfFont font = PdfStandardFont(PdfFontFamily.helvetica, 12);
String text = 'Hello World!!!';

//Measure the text to get its rendered size
Size size = font.measureString(text);

//Draw with exact measured bounds
document.pages.add().graphics.drawString(text, font,
    brush: PdfBrushes.black,
    bounds: Rect.fromLTWH(0, 0, size.width, size.height));
```

---

## Create Text using PdfTextElement

```dart
PdfPage page = document.pages.add();

PdfTextElement element = PdfTextElement(
    text: 'Invoice Header',
    font: PdfStandardFont(PdfFontFamily.timesRoman, 14));
element.brush = PdfBrushes.black;

//Draw and capture the layout result
PdfLayoutResult result = element.draw(
    page: page, bounds: Rect.fromLTWH(10, 10, 0, 0))!;

//Draw next element below the previous one using result.bounds.bottom
PdfTextElement element2 = PdfTextElement(
    text: 'Sub-heading text below',
    font: PdfStandardFont(PdfFontFamily.timesRoman, 11));
element2.brush = PdfBrushes.black;
element2.draw(
    page: page,
    bounds: Rect.fromLTWH(10, result.bounds.bottom + 10, 0, 0));
```

---

## Create Multicolumn PDF document

```dart
PdfPage page = document.pages.add();

String text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

//Draw text in first column
PdfTextElement(
        text: text, font: PdfStandardFont(PdfFontFamily.timesRoman, 14))
    .draw(
        page: page,
        bounds: Rect.fromLTWH(0, 0, page.getClientSize().width / 2,
            page.getClientSize().height / 2));

//Draw text in second column
PdfTextElement(
        text: text, font: PdfStandardFont(PdfFontFamily.timesRoman, 14))
    .draw(
        page: page,
        bounds: Rect.fromLTWH(page.getClientSize().width / 2, 0,
            page.getClientSize().width / 2, page.getClientSize().height / 2));
```

---

## Create Text Element that Flows Across Pages (Paginated)

```dart
PdfPage page = document.pages.add();

String text = 'Very long text that spans multiple pages...';

PdfTextElement textElement = PdfTextElement(
    text: text, font: PdfStandardFont(PdfFontFamily.timesRoman, 20));

//Configure pagination
PdfLayoutFormat layoutFormat = PdfLayoutFormat(
    layoutType: PdfLayoutType.paginate,
    breakType: PdfLayoutBreakType.fitPage);

//Draw with pagination
PdfLayoutResult result = textElement.draw(
    page: page,
    bounds: Rect.fromLTWH(0, 0, page.getClientSize().width,
        page.getClientSize().height),
    format: layoutFormat)!;
```

---

## Draw a Right-To-Left (RTL) Text

```dart
PdfPage page = document.pages.add();

String arabicText = 'مرحبا بالعالم'; // Arabic: Hello World

page.graphics.drawString(
    arabicText,
    PdfTrueTypeFont(File('Arial.ttf').readAsBytesSync(), 14),
    brush: PdfBrushes.black,
    bounds: Rect.fromLTWH(
        0, 0, page.getClientSize().width, page.getClientSize().height),
    format: PdfStringFormat(
        textDirection: PdfTextDirection.rightToLeft,
        alignment: PdfTextAlignment.right,
        paragraphIndent: 35));
```

### Available TextDirection
```dart
PdfTextDirection.none
PdfTextDirection.leftToRight
PdfTextDirection.rightToLeft
```

---

## Set a text wrapping type.

```dart
PdfDocument document = PdfDocument()
  ..pages.add().graphics.drawString(
      'Hello World!', PdfStandardFont(PdfFontFamily.helvetica, 12),
      format: PdfStringFormat(wordWrap: PdfWordWrapType.word));
```

### Available WordWrapType
```dart
PdfWordWrapType.none
PdfWordWrapType.word
PdfWordWrapType.wordOnly
PdfWordWrapType.character
```

---

## Draw Text with Custom Pen and Brush

```dart
document.pages.add().graphics.drawString(
    'Styled Text!', PdfStandardFont(PdfFontFamily.helvetica, 20),
    //Fill color of the text characters
    brush: PdfSolidBrush(PdfColor(0, 0, 0)),
    //Outline color of the text characters
    pen: PdfPen(PdfColor(255, 0, 0), width: 0.5),
    bounds: const Rect.fromLTWH(0, 0, 500, 50));
```

---