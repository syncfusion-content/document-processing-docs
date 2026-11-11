# Attachments

> Attach files to PDF documents using PdfAttachment, retrieve attachment collections, extract and save attachments, and remove them from existing PDFs.

---

## Add a File Attachment to a New PDF

```dart
//Create and add an attachment from file bytes
document.attachments.add(PdfAttachment(
    'input.txt',                                
    File('input.txt').readAsBytesSync(),        
    description: 'Text File',
    mimeType: 'application/txt'));
```

---

## Add an Attachment from a Base64 String

```dart
//Attach a file encoded as a Base64 string
document.attachments.add(PdfAttachment.fromBase64String(
    'input.txt',
    'SGVsbG8gV29ybGQ=',   // Base64-encoded file content
    description: 'Text File',
    mimeType: 'application/txt'));
```

---

## Add an Attachment to an Existing PDF

```dart
//Load an existing PDF document
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Add a new attachment
document.attachments.add(PdfAttachment(
    'report.xlsx',
    File('report.xlsx').readAsBytesSync(),
    description: 'Monthly Report',
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'));
```

---

## Get Attachments details

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Add a new attachment
document.attachments.add(PdfAttachment(
    'report.xlsx',
    File('report.xlsx').readAsBytesSync(),
    description: 'Monthly Report',
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'));
// Gets number of attachments in the document
int countOfAttachments = document.attachments.count;
print('Total attachments: $countOfAttachments');

// Check whether a specific attachment exists
bool exists = document.attachments.contains(attachment);
print('Attachment exists: $exists');

// Find the index of an attachment
int index = document.attachments.indexOf(attachment);
print('Attachment index: $index');
```

---

## Remove Attachments from an Existing PDF

```dart
//Remove a specific attachment by reference
PdfAttachment attachment = document.attachments[0];
document.attachments.remove(attachment);

//Remove an attachment by index
document.attachments.removeAt(1);

//Remove all attachments from the document
document.attachments.clear();
```

---

## Extract and Save Attachments to Disk

```dart
PdfDocument document =
    PdfDocument(inputBytes: File('input.pdf').readAsBytesSync());

//Get the attachment collection
PdfAttachmentCollection attachmentCollection = document.attachments;

//Iterate and save all attachments to disk
for (int i = 0; i < attachmentCollection.count; i++) {
  //Save each attachment using its original file name
  File(attachmentCollection[i].fileName)
      .writeAsBytesSync(attachmentCollection[i].data);
}

File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## Attach a File in a PDF/A-3b Document

```dart
PdfDocument document =
    PdfDocument(conformanceLevel: PdfConformanceLevel.a3b)
      ..pages.add().graphics.drawString(
          'PDF/A-3b with attachment',
          PdfTrueTypeFont(File('arial.ttf').readAsBytesSync(), 12),
          bounds: Rect.fromLTWH(20, 20, 300, 50));

//Create an attachment with relationship and modification date
PdfAttachment attachment = PdfAttachment(
    'data.xml', File('data.xml').readAsBytesSync(),
    description: 'Source XML data',
    mimeType: 'application/xml')
  ..relationship = PdfAttachmentRelationship.data
  ..modificationDate = DateTime.now();

document.attachments.add(attachment);

File('output.pdf').writeAsBytes(await document.save());
document.dispose();
```

---

## PdfAttachment Properties Reference

| Property | Type | Description |
|---|---|---|
| `fileName` | `String` | The file name stored inside the PDF |
| `data` | `List<int>` | Raw bytes of the attached file |
| `description` | `String` | Human-readable description of the attachment |
| `mimeType` | `String` | MIME type of the file (e.g., `'application/pdf'`) |
| `relationship` | `PdfAttachmentRelationship` | Relationship type (used in PDF/A-3b) |
| `modificationDate` | `DateTime` | Last modification date of the attachment |

### PdfAttachmentRelationship Values (PDF/A-3b)
```dart
PdfAttachmentRelationship.unspecified   // No specific relationship
PdfAttachmentRelationship.data          // Source data
PdfAttachmentRelationship.source        // Source file
PdfAttachmentRelationship.alternative   // Alternative representation
PdfAttachmentRelationship.supplement    // Supplemental information
```

---
