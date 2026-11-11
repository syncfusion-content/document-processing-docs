# Syncfusion Flutter PDF Library Skill

Create and manipulate PDF documents using the Syncfusion Flutter PDF library written natively in Dart. Supports creating PDFs from scratch with text, images, shapes, tables, lists, headers/footers, bookmarks, annotations, and encryption — without any Adobe dependency.

See **[SKILL.md](SKILL.md)** for the full intent-routing guide and rules.

---

## One Mode

### Generate Dart Code for the User's Flutter Project *(default)*

Produces production-ready Dart code for use in a Flutter project. No standalone scripts are created or run.

**Trigger keywords:** "code", "snippet", "how to write", "main.dart", "show me", "sample", "example code", "generate code for".

**Workflow:**

#### Step 1 — Detect the Platform and Suggest the Correct Package
- Inspect the workspace project files (`pubspec.yaml`, `main.dart`, etc.) to identify the Flutter platform target.
- Tell the user to add `syncfusion_flutter_pdf` to `pubspec.yaml` **before** generating any code.

#### Step 2 — Generate Code from Reference Files Only
Do NOT invent APIs/methods not in reference files.
- Read the relevant `references/*.md` file(s) for the requested feature
- Build Dart code **strictly** from the APIs and snippets found in those files
- Use the correct save/launch pattern for the target platform:
  - **Mobile** → `getApplicationSupportDirectory()` + `OpenFile.open()`
  - **Desktop** → `getApplicationSupportDirectory()` + `OpenFile.open()`
  - **Web** → base64 + JavaScript download or `web` package approach

## Quick Start

### Prerequisites

- **Flutter SDK** installed
- Add dependency to `pubspec.yaml`:
  ```yaml
  dependencies:
    syncfusion_flutter_pdf: ^33.1.44
  ```
- Use the latest compatible package version from pub.dev or Syncfusion documentation, then run: `flutter pub get`
- Import in your Dart file:
  ```dart
  import 'package:syncfusion_flutter_pdf/pdf.dart';
  ```

---

## Code References

All snippets used by the skill are in the `references/` folder:

| File | Contents |
|------|----------|
| [document-structure.md](references/document-structure.md) | Create/load document, page settings, orientation, margins, save to file/stream, open encrypted PDF, dispose |
| [pages.md](references/pages.md) | Add/insert/remove/rotate pages, get page count, set margins, sections with different page settings, get client size |
| [flow-layout.md](references/flow-layout.md) | Chain elements using PdfLayoutResult, paginate text across pages, PdfLayoutFormat options |
| [text.md](references/text.md) | Draw text (drawString, PdfTextElement), standard/TrueType/CJK fonts, RTL text, multicolumn, pens and brushes |
| [images.md](references/images.md) | Insert JPEG/PNG images (PdfBitmap), transparency, rotation, insert from web URL |
| [shapes.md](references/shapes.md) | Draw polygon, line, curve, path, rectangle, pie, arc, bezier, ellipse |
| [tables.md](references/tables.md) | Create PdfGrid, columns/headers/rows, cell/row/column customization, built-in styles, pagination, multiple tables |
| [lists.md](references/lists.md) | Ordered lists (PdfOrderedList), unordered lists (PdfUnorderedList), nested sub-lists |
| [header-footer.md](references/header-footer.md) | Headers and footers (PdfPageTemplateElement), page number/count/date-time automatic fields |
| [bookmarks.md](references/bookmarks.md) | Add/insert/remove/modify bookmarks, child bookmarks, destination, color, text style |
| [annotations.md](references/annotations.md) | Rectangle, ellipse, line, polygon, URI, document link, text web link, text markup, popup annotations; flatten, modify, remove, import/export |
| [hyperlinks.md](references/hyperlinks.md) | Web navigation links (PdfTextWebLink), URI annotations, internal document navigation (PdfDocumentLinkAnnotation), destination modes |
| [watermarks.md](references/watermarks.md) | Text and image watermarks with transparency and rotation, apply to all pages via PdfPageTemplateElement stamp |
| [pdf-templates.md](references/pdf-templates.md) | Create PdfTemplate, draw templates on pages, extract page as template using createTemplate, stamp overlays with PdfPageTemplateElement |
| [digital-signature.md](references/digital-signature.md) | PdfSignatureField, PdfCertificate, sign new/existing PDF, signature appearance, external signer, multiple signatures, timestamp, LTV |
| [text-extraction.md](references/text-extraction.md) | Extract text (full/page/range), extract text lines/words/characters with bounds and font info, find text with MatchedItem |
| [pdf-conformance.md](references/pdf-conformance.md) | PDF/A-1b, PDF/A-2b, PDF/A-3b conformance levels, embedded fonts requirement, attachment relationships for PDF/A-3b |
| [attachments.md](references/attachments.md) | Add/remove file attachments (PdfAttachment), attach from base64, extract and save to disk, PDF/A-3b attachment metadata |
| [layers.md](references/layers.md) | Add/toggle/remove layers (PdfPageLayer), nested layers (PdfLayer), visibility control, flatten layers |
| [forms.md](references/forms.md) | AcroForm fields: text box, combo box, radio button, list box, check box, signature, button; fill/modify/flatten/remove fields; import/export FDF/XFDF/JSON/XML |
| [encryption.md](references/encryption.md) | RC4/AES encryption, user/owner passwords, permissions, protect existing PDF, change/remove password |

---

## Common Use Cases

### 1. Create a Simple PDF

```dart
import 'dart:io';
import 'package:syncfusion_flutter_pdf/pdf.dart';

Future<void> createSimplePdf() async {
  // Create a new PDF document
  PdfDocument document = PdfDocument();

  // Add a page and draw text
  document.pages.add().graphics.drawString(
      'Hello World!', PdfStandardFont(PdfFontFamily.helvetica, 20),
      brush: PdfBrushes.black, bounds: Rect.fromLTWH(10, 10, 400, 50));

  // Save the document
  File('simple.pdf').writeAsBytes(await document.save());

  // Dispose the document
  document.dispose();
}
```

### 2. Create a PDF with a Table

```dart
PdfDocument document = PdfDocument();
PdfGrid grid = PdfGrid();
grid.columns.add(count: 3);
grid.headers.add(1);

PdfGridRow header = grid.headers[0];
header.cells[0].value = 'ID';
header.cells[1].value = 'Name';
header.cells[2].value = 'Score';

PdfGridRow row = grid.rows.add();
row.cells[0].value = '1';
row.cells[1].value = 'Alice';
row.cells[2].value = '95';

grid.draw(page: document.pages.add(), bounds: Rect.fromLTWH(0, 0, 0, 0));
File('table.pdf').writeAsBytes(await document.save());
document.dispose();
```

### 3. Add an Image

```dart
PdfDocument document = PdfDocument();
PdfPage page = document.pages.add();

page.graphics.drawImage(
    PdfBitmap(File('image.jpg').readAsBytesSync()),
    Rect.fromLTWH(0, 0, 200, 150));

File('image.pdf').writeAsBytes(await document.save());
document.dispose();
```

### 4. Encrypt a PDF

```dart
PdfDocument document = PdfDocument();
document.security.algorithm = PdfEncryptionAlgorithm.aesx256Bit;
document.security.userPassword = 'userpass';
document.security.ownerPassword = 'ownerpass';

document.pages.add().graphics.drawString(
    'Protected PDF', PdfStandardFont(PdfFontFamily.helvetica, 18),
    brush: PdfBrushes.black, bounds: Rect.fromLTWH(10, 10, 300, 40));

File('encrypted.pdf').writeAsBytes(await document.save());
document.dispose();
```

### 5. Add Header and Footer with Page Numbers

```dart
PdfDocument document = PdfDocument();
PdfPageTemplateElement footer = PdfPageTemplateElement(
    Rect.fromLTWH(0, 0, document.pageSettings.size.width, 50));

PdfPageNumberField pageNumber = PdfPageNumberField(
    font: PdfStandardFont(PdfFontFamily.timesRoman, 12),
    brush: PdfSolidBrush(PdfColor(0, 0, 0)));
PdfPageCountField count = PdfPageCountField(
    font: PdfStandardFont(PdfFontFamily.timesRoman, 12),
    brush: PdfSolidBrush(PdfColor(0, 0, 0)));

PdfCompositeField compositeField = PdfCompositeField(
    font: PdfStandardFont(PdfFontFamily.timesRoman, 12),
    brush: PdfSolidBrush(PdfColor(0, 0, 0)),
    text: 'Page {0} of {1}',
    fields: <PdfAutomaticField>[pageNumber, count]);
compositeField.bounds = footer.bounds;
compositeField.draw(footer.graphics, Offset(250, 15));

document.template.bottom = footer;

for (int i = 1; i <= 3; i++) {
  document.pages.add().graphics.drawString(
      'Page $i content', PdfStandardFont(PdfFontFamily.helvetica, 14),
      brush: PdfBrushes.black, bounds: Rect.fromLTWH(10, 10, 400, 30));
}

File('with-footer.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Example Prompts

### Code Generation
- "Show me how to create a PDF with a title and paragraph using Syncfusion Flutter PDF."
- "How do I add a table to a PDF document in Flutter?"
- "Provide code to draw a rectangle and an ellipse on a PDF page."
- "How can I add bookmarks to a PDF in Flutter?"
- "How do I encrypt a Flutter PDF with AES 256?"

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Package not found | Add `syncfusion_flutter_pdf` to `pubspec.yaml` and run `flutter pub get` |
| File not found on mobile | Use `getApplicationSupportDirectory()` from `path_provider` |
| PDF not opening | Add `open_file` package and call `OpenFile.open(filePath)` |
| Web download not working | Use base64 + JS download or the `web` package approach |
| Content overlapping | Use `PdfLayoutResult.bounds.bottom` to position successive elements |

---

## Resources

- [Syncfusion Flutter PDF Documentation](https://help.syncfusion.com/document-processing/pdf/pdf-library/flutter/overview)
- [API Reference](https://pub.dev/documentation/syncfusion_flutter_pdf/latest/pdf/pdf-library.html)
- [pub.dev Package](https://pub.dev/packages/syncfusion_flutter_pdf)
- [Flutter Examples on GitHub](https://github.com/syncfusion/flutter-examples)

---
