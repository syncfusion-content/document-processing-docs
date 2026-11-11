# Text Extraction

> Extract and search text from PDF documents using PdfTextExtractor. Supports full document, page range, and character-level extraction with bounds, font, and style information.

---

## Extract Text from the Entire Document

```dart
//Load an existing PDF document
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Extract all text from all pages
String text = PdfTextExtractor(document).extractText();

//Dispose the document
document.dispose();
```

---

## Extract Text from a Specific Page

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Extract text from page 1 (index 0)
String text = PdfTextExtractor(document).extractText(startPageIndex: 0);

document.dispose();
```

---

## Extract Text from a Page Range

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Extract text from pages 1 to 3 (indices 0 to 2)
String text = PdfTextExtractor(document)
    .extractText(startPageIndex: 0, endPageIndex: 2);

document.dispose();
```

---

## Extract Text Lines with Bounds and Font Info

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Extract text lines from all pages
final List<TextLine> textLines =
    PdfTextExtractor(document).extractTextLines();

//Access properties of the first line
TextLine line = textLines[0];

Rect bounds = line.bounds;                         // Position and size of the line
String fontName = line.fontName;                   // Font name used
double fontSize = line.fontSize;                   // Font size in points
List<PdfFontStyle> fontStyle = line.fontStyle;     // e.g., [PdfFontStyle.bold]
String text = line.text;                           // Text content of the line
List<TextWord> wordCollection = line.wordCollection; // Words in the line

document.dispose();
```

---

## Extract Words with Bounds and Font Info

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Extract text lines from page 2 (index 1)
final List<TextLine> textLines =
    PdfTextExtractor(document).extractTextLines(startPageIndex: 1);

TextLine line = textLines[0];
List<TextWord> wordCollection = line.wordCollection;

//Access properties of the first word
TextWord word = wordCollection[0];

Rect wordBounds = word.bounds;                        // Bounding box of the word
String wordFontName = word.fontName;                  // Font name
double wordFontSize = word.fontSize;                  // Font size
List<PdfFontStyle> wordFontStyle = word.fontStyle;    // Font style
String wordText = word.text;                          // Word text
List<TextGlyph> glyphs = word.glyphs;                 // Individual characters

document.dispose();
```

---

## Extract Characters (Glyphs) with Bounds

```dart
//Extract lines from pages 2 to 3
final List<TextLine> textLines = PdfTextExtractor(document)
    .extractTextLines(startPageIndex: 1, endPageIndex: 2);

TextLine line = textLines[0];
TextWord word = line.wordCollection[0];
List<TextGlyph> glyphs = word.glyphs;

//Access properties of the first character
TextGlyph glyph = glyphs[0];

Rect glyphBounds = glyph.bounds;                        // Bounding box of the character
String glyphFontName = glyph.fontName;                  // Font name
double glyphFontSize = glyph.fontSize;                  // Font size
List<PdfFontStyle> glyphFontStyle = glyph.fontStyle;    // Font style
String glyphText = glyph.text;                          // The character itself
```

---

## Find Text in the Entire Document

```dart
//Search for multiple text strings
List<MatchedItem> matches =
    PdfTextExtractor(document).findText(['Invoice', 'Total']);

//Access properties of the first match
MatchedItem match = matches[0];
Rect textBounds = match.bounds;   // Bounding rectangle of the matched text
int pageIndex = match.pageIndex;  // Zero-based page index
String matchedText = match.text;  // The matched text
```

---

## Find Text on a Specific Page

```dart
//Search on page 1 only (index 0)
List<MatchedItem> matches = PdfTextExtractor(document)
    .findText(['text1', 'text2'], startPageIndex: 0);
```

---

## Find Text with Search Options (Case-Sensitive, Page Range)

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Search with case-sensitive option on pages 1 to 3
List<MatchedItem> matches = PdfTextExtractor(document).findText(
    ['Invoice', 'Amount'],
    startPageIndex: 0,
    endPageIndex: 2,
    searchOption: TextSearchOption.caseSensitive);

document.dispose();
```

### Search Options
```dart
TextSearchOption.caseSensitive  
TextSearchOption.wholeWords 
TextSearchOption.both
```

---

## API Reference

| Class / Member | Description |
|---|---|
| `PdfTextExtractor(document)` | Creates an extractor for the given document |
| `extractText()` | Extracts all text as a single `String` |
| `extractText(startPageIndex, endPageIndex)` | Extracts text from a page range |
| `extractTextLines()` | Returns `List<TextLine>` with bounds and font details |
| `findText(List<String>)` | Returns all `MatchedItem` occurrences of the search terms |
| `TextLine.text` | The text content of a line |
| `TextLine.bounds` | Bounding rectangle of the line |
| `TextLine.wordCollection` | List of `TextWord` objects in the line |
| `TextWord.glyphs` | List of `TextGlyph` (character-level) objects |
| `MatchedItem.bounds` | Rectangle of the matched text on the page |
| `MatchedItem.pageIndex` | Zero-based page index where the text was found |

---

## Notes

- Page indexes are **zero-based**: page 1 = index 0, page 3 = index 2.
- `extractTextLines()` provides per-line layout information including font name, size, and style — useful for document analysis.
- `findText()` supports searching for multiple terms simultaneously in one call.
- Text extraction works on existing PDF documents only — not on newly created empty documents.