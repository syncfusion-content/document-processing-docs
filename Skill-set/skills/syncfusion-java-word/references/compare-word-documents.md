# Compare Word Documents

> Word document comparison — comparing two Word documents, tracking insertions and deletions, setting author and date information, and customizing comparison options to ignore format changes.

---

## Required common usings

```java
import com.syncfusion.docio.*;
```

## Compare Two Word Documents

### Minimal Code
```java
//Load the original document.
WordDocument originalDocument = new WordDocument("OriginalDocument.docx", FormatType.Docx);
//Load the revised document.
WordDocument revisedDocument = new WordDocument("RevisedDocument.docx", FormatType.Docx);
//Compare the original document with the revised document.
originalDocument.compare(revisedDocument);
//Save the word document.
originalDocument.save("Comparison.docx");
//Close the word documents.
originalDocument.close();
revisedDocument.close();
```

### Changes Tracked
- **Insertions**: Content added in the revised document
- **Deletions**: Content removed from the original document
- **Formatting**: Style and formatting modifications

### Notes
- DocIO performs **word-level comparison**—if a single character in a word is changed, the entire word is highlighted as changed
- Comparison is **supported in DOCX format only**
- Default author: `"Author"`
- Default date: Current system time

### Placeholders
- `"OriginalDocument.docx"` → Replace with `"{original-file-path}"`
- `"RevisedDocument.docx"` → Replace with `"{revised-file-path}"`
- `"Comparison.docx"` → Replace with `"{output-file-path}"`

---

## Set Author and Date

### Minimal 

```java
//Load the original document.
WordDocument originalDocument = new WordDocument("OriginalDocument.docx", FormatType.Docx);
//Load the revised document.
WordDocument revisedDocument = new WordDocument("RevisedDocument.docx", FormatType.Docx);
//Compare the original document with the revised document.
originalDocument.compare(revisedDocument, "Nancy Davolio", LocalDateTime.now());
//Save the word document.
originalDocument.save("Comparison.docx");
//Close the word documents.
originalDocument.close();
revisedDocument.close();
```

### Method Signature

```java
public void Compare(WordDocument revisedDocument, String author, LocalDateTime dateTime)
```

### Parameters
- `revisedDocument`: The document to compare against the original
- `author`: Name of the person making the revision (default: `"Author"`)
- `dateTime`: Timestamp of the revision (default: current time)

### Placeholders
- `"Nancy Davolio"` → Replace with `"{author-name}"`
- `LocalDateTime.now()` → Replace with `"{revision-date}"`

---

## Comparison Options

### Overview
Customize word comparison behavior using the `ComparisonOptions` class to control how DocIO identifies and tracks changes between documents.

### Available Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `setDetectFormatChanges(bool)` | bool | `true` | Track formatting changes (font, color, size, style, etc.) |

---

## Ignore Format Changes

### Minimal Code

```java
//Load the original document.
FileInputStream originalStream = new FileInputStream("OriginalDocument.docx");
WordDocument originalDocument = new WordDocument(originalStream, FormatType.Docx);
FileInputStream revisedStream = new FileInputStream("RevisedDocument.docx");
WordDocument revisedDocument = new WordDocument(revisedStream, FormatType.Docx);
ComparisonOptions compareOptions = new ComparisonOptions();
compareOptions.setDetectFormatChanges(false); // ignore formatting changes
originalDocument.compare(revisedDocument, "Syncfusion", LocalDateTime.now(), compareOptions);
originalDocument.save("Comparison.docx", FormatType.Docx);
//Close the word documents.
originalDocument.close();
revisedDocument.close();
```

### When to Use
- Compare documents where **only content changes matter**
- Ignore style, color, font, and formatting modifications
- Focus on **substantive content edits** (insertions, deletions)

### Behavior
- With `setDetectFormatChanges(false)` (default): All formatting differences are tracked
- With `setDetectFormatChanges(true)`: Only content changes are tracked

### Placeholders
- `compareOptions.setDetectFormatChanges(false); false` → Set to `true` to track format changes

---

## Complete Example

### Full Workflow

```java
//Load the original document.
FileInputStream originalStream = new FileInputStream("OriginalDocument.docx");
WordDocument originalDocument = new WordDocument(originalStream, FormatType.Docx);
FileInputStream revisedStream = new FileInputStream("RevisedDocument.docx");
WordDocument revisedDocument = new WordDocument(revisedStream, FormatType.Docx);
ComparisonOptions compareOptions = new ComparisonOptions();
compareOptions.setDetectFormatChanges(true);
originalDocument.compare(revisedDocument, "John Smith", LocalDateTime.now(), compareOptions);
originalDocument.save("Comparison.docx", FormatType.Docx);
//Close the word documents.
originalDocument.close();
revisedDocument.close();
```

---

## Common Properties

| Property | Type | Description |
|----------|------|-------------|
| `Compare()` | Method | Compares two Word documents and tracks changes |
| `ComparisonOptions` | Class | Encapsulates customization options for document comparison |
| `setDetectFormatChanges()` | bool | Controls whether formatting changes are detected and tracked |

---
