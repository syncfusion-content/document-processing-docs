# Merge Word Documents

> Import content from source documents into destination documents — merge in new page, same page, maintain list styles.

---

## Required common usings

```java
import com.syncfusion.docio.*;
```

## Merge Document in New Page

Import contents from source document into destination document where imported contents start from a new page.

### Minimal Code

```java
FileInputStream sourceStream = new FileInputStream("source.docx");
WordDocument sourceDoc = new WordDocument(sourceStream, FormatType.Automatic);

FileInputStream destStream = new FileInputStream("destination.docx");
WordDocument destDoc = new WordDocument(destStream, FormatType.Docx);

// Common variants: ImportOptions.UseDestinationStyles or ImportOptions.USE_DESTINATION_STYLES
destDoc.importContent(sourceDoc, ImportOptions.UseDestinationStyles);

FileOutputStream outputStream = new FileOutputStream("merged.docx");
destDoc.save(outputStream, FormatType.Docx);

outputStream.close();
destStream.close();
sourceStream.close();
destDoc.close();
sourceDoc.close();
```

### Placeholders
- `"source.docx"` → Replace with `"{source-file-path}"`
- `"destination.docx"` → Replace with `"{destination-file-path}"`
- `"merged.docx"` → Replace with `"{output-file-path}"`

---

## Merge Document in Same Page

Import contents from source document into destination document on the same page by setting the section break code to `NoBreak`.

### Minimal Code

```java
FileInputStream sourceStream = new FileInputStream("source.docx");
WordDocument sourceDoc = new WordDocument(sourceStream, FormatType.Automatic);

FileInputStream destStream = new FileInputStream("destination.docx");
WordDocument destDoc = new WordDocument(destStream, FormatType.Docx);

// Set the first section of source to have no break before importing
sourceDoc.getSections().get(0).setBreakCode(SectionBreakCode.NoBreak);

// Import content using destination styles (adjust constant name if your SDK differs)
destDoc.importContent(sourceDoc, ImportOptions.UseDestinationStyles);

FileOutputStream outputStream = new FileOutputStream("merged.docx");
destDoc.save(outputStream, FormatType.Docx);

outputStream.close();
destStream.close();
sourceStream.close();
destDoc.close();
sourceDoc.close();
```

### Placeholders
- `"source.docx"` → Replace with `"{source-file-path}"`
- `"destination.docx"` → Replace with `"{destination-file-path}"`
- `"merged.docx"` → Replace with `"{output-file-path}"`
- `SectionBreakCode.NoBreak` → Use this to merge on same page; omit to merge on new page

---

## Maintain Imported List Style Information

Preserve list style cache when merging documents with list styles. Useful for cloning and merging with list formatting.

### Minimal Code

```java
FileInputStream sourceStream = new FileInputStream("source.docx");
WordDocument sourceDoc = new WordDocument(sourceStream, FormatType.Docx);

FileInputStream destStream = new FileInputStream("destination.docx");
WordDocument destDoc = new WordDocument(destStream, FormatType.Docx);

destDoc.getSettings().setMaintainImportedListCache(true);

for (Object obj : sourceDoc.getSections()) {
IWSection section = (IWSection) obj;

List<TextBodyItem> items = (List<TextBodyItem>) section.getBody().getChildEntities();
for (TextBodyItem bodyItem : items) {
// Clone the body item and add to destination last section
TextBodyItem cloned = (TextBodyItem) bodyItem.clone(); // if your SDK uses deepClone(), replace accordingly
destDoc.getLastSection().getBody().getChildEntities().add(cloned);
}
}

sourceStream.close();
sourceDoc.close();

destDoc.getSettings().setMaintainImportedListCache(false);

FileOutputStream outputStream = new FileOutputStream("merged.docx");
destDoc.save(outputStream, FormatType.Docx);

outputStream.close();
destStream.close();
destDoc.close();
```

### Placeholders
- `"source.docx"` → Replace with `"{source-file-path}"`
- `"destination.docx"` → Replace with `"{destination-file-path}"`
- `"merged.docx"` → Replace with `"{output-file-path}"`

### Options
```java
// Enable before merge to preserve list styles
destDoc.getSettings().setMaintainImportedListCache(true);
// Disable after merge
destDoc.getSettings().setMaintainImportedListCache(false);
```

---

## Import Options

Control how content is imported:

```java
// Import using destination styles
destDoc.importContent(sourceDoc, ImportOptions.UseDestinationStyles);
// Import keeping source formatting
destDoc.importContent(sourceDoc, ImportOptions.KeepSourceFormatting);

destDoc.importContent(sourceDoc, ImportOptions.KeepTextOnly);
destDoc.importContent(sourceDoc, ImportOptions.ListContinueNumbering);
destDoc.importContent(sourceDoc, ImportOptions.ListRestartNumbering);
destDoc.importContent(sourceDoc, ImportOptions.MergeFormatting);
```

### Placeholders
- `ImportOptions.UseDestinationStyles` → Use when you want merged content to match destination formatting
- `ImportOptions.KeepSourceFormatting` → Use when you want to preserve source document formatting
- `ImportOptions.KeepTextOnly` → Use when you want to import only plain text and remove all formatting, styles, lists, images, and fields
- `ImportOptions.ListContinueNumbering` → Use when you want imported lists to continue numbering from the destination document
- `ImportOptions.ListRestartNumbering` → Use when you want imported list numbering to restart from the beginning
- `ImportOptions.MergeFormatting` → Use when you want to merge source document formatting with destination styles

---

## Merge Multiple Documents

Merge multiple source documents into a single destination document.

```java
FileInputStream destStream = new FileInputStream("destination.docx");
WordDocument destDoc = new WordDocument(destStream, FormatType.Docx);

String[] sourceFiles = new String[] { "source1.docx", "source2.docx", "source3.docx" };

for (String sourceFile : sourceFiles) {
FileInputStream sourceStream = new FileInputStream(sourceFile);
WordDocument sourceDoc = new WordDocument(sourceStream, FormatType.Docx);

// Prevent section break between imported content
sourceDoc.getSections().get(0).setBreakCode(SectionBreakCode.NoBreak);

// Import using destination styles
destDoc.importContent(sourceDoc, ImportOptions.UseDestinationStyles);

sourceStream.close();
sourceDoc.close();
}

FileOutputStream outputStream = new FileOutputStream("merged.docx");
destDoc.save(outputStream, FormatType.Docx);

outputStream.close();
destStream.close();
destDoc.close();
```

### Placeholders
- `"destination.docx"` → Replace with `"{destination-file-path}"`
- `sourceFiles` → Replace with array of `"{source-file-paths}"`
- `"merged.docx"` → Replace with `"{output-file-path}"`
