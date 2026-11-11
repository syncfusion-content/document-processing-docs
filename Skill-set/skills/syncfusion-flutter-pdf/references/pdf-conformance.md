# PDF Conformance

> Create PDF/A-conformant documents using PdfConformanceLevel for long-term archiving. Supports PDF/A-1b, PDF/A-2b, and PDF/A-3b standards.

---

## Create a document with PDF/A-1b Conformance

```dart
//Create a new PDF document with PDF/A-1b conformance
PdfDocument document =
    PdfDocument(conformanceLevel: PdfConformanceLevel.a1b)
      ..pages.add().graphics.drawString(
          'Hello World!',
          //TrueType font must be embedded for PDF/A compliance
          PdfTrueTypeFont(File('arial.ttf').readAsBytesSync(), 12),
          bounds: Rect.fromLTWH(20, 20, 200, 50));

//Save and dispose the document
File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Create a document with PDF/A-2b Conformance

```dart
//Create a new PDF document with PDF/A-2b conformance
PdfDocument document =
    PdfDocument(conformanceLevel: PdfConformanceLevel.a2b)
      ..pages.add().graphics.drawString(
          'Hello World!',
          PdfTrueTypeFont(File('arial.ttf').readAsBytesSync(), 12),
          bounds: Rect.fromLTWH(20, 20, 200, 50));

File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Create a document with PDF/A-3b Conformance

```dart
//Create a new PDF document with PDF/A-3b conformance
PdfDocument document =
    PdfDocument(conformanceLevel: PdfConformanceLevel.a3b)
      ..pages.add().graphics.drawString(
          'Hello World!',
          PdfTrueTypeFont(File('arial.ttf').readAsBytesSync(), 12),
          bounds: Rect.fromLTWH(20, 20, 200, 50));

//Create an attachment with PDF/A-3b relationship metadata
PdfAttachment attachment = PdfAttachment(
    'input.txt', File('input.txt').readAsBytesSync(),
    description: 'Source data file',
    mimeType: 'application/txt')
  ..relationship = PdfAttachmentRelationship.alternative
  ..modificationDate = DateTime.now();

//Add the attachment to the document
document.attachments.add(attachment);

//Save and dispose
File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## PDF/A-3b Attachment Relationship Types

```dart
PdfAttachmentRelationship.unspecified   // No specific relationship
PdfAttachmentRelationship.data          // Source data for the document
PdfAttachmentRelationship.source        // Source file from which this document was derived
PdfAttachmentRelationship.alternative   // Alternative version of the content
PdfAttachmentRelationship.supplement    // Supplemental information
```

---

## Conformance Level Reference

| Enum Value | Standard | Description |
|---|---|---|
| `PdfConformanceLevel.a1b` | PDF/A-1b | Basic archival: embedded fonts, no encryption, no transparency |
| `PdfConformanceLevel.a2b` | PDF/A-2b | Adds JPEG2000, transparency, digital signatures, optional content |
| `PdfConformanceLevel.a3b` | PDF/A-3b | All of PDF/A-2b plus arbitrary file attachments |
| `PdfConformanceLevel.none` | Standard PDF | No conformance requirements (default) |

---

## Notes

- **All fonts must be embedded** when creating PDF/A documents — use `PdfTrueTypeFont` with font file bytes, not `PdfStandardFont`.
- PDF/A documents do not support encryption or password protection.
- PDF/A-1b does not support transparency effects (`setTransparency`).
- PDF/A-3b is commonly used for electronic invoices (e.g., ZUGFeRD, Factur-X) where an XML attachment accompanies the visual PDF.
- Validate PDF/A compliance with tools like Adobe Preflight or veraPDF after generation.