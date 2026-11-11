# Split Word Documents

> Document splitting operations — split Word documents by sections, headings, bookmarks, and placeholder text.

---

## Required common usings

```java
import com.syncfusion.docio.*;
```

## Split by Section

### Minimal Code

```java
Path inputPath = Paths.get(System.getProperty("user.dir"), "input", "Template.docx");
FileInputStream fs = new FileInputStream(inputPath.toFile());
WordDocument document = new WordDocument(fs, FormatType.Docx);

for (int i = 0; i < document.getSections().getCount(); i++) {
WordDocument newDocument = new WordDocument();
// Clone the section from source and add to the new document
WSection clonedSection = (WSection) document.getSections().get(i).clone();
newDocument.getSections().add(clonedSection);

Path outPath = Paths.get(System.getProperty("user.dir"), "output", "Section" + i + ".docx");
Files.createDirectories(outPath.getParent());
FileOutputStream outputStream = new FileOutputStream(outPath.toFile());
newDocument.save(outputStream, FormatType.Docx);
outputStream.close();
newDocument.close();
}

fs.close();
document.close();
```

### Placeholders
- `"Template.docx"` → Replace with `"{input-filename}"`
- `"Section{i}.docx"` → Replace with `"{output-prefix}{i}.docx"`

---

## Split by Heading

### Minimal Code

```java
Path inputPath = Paths.get(System.getProperty("user.dir"), "input", "Template.docx");
FileInputStream inputStream = new FileInputStream(inputPath.toFile());
WordDocument document = new WordDocument(inputStream, FormatType.Docx);

WordDocument newDocument = null;
WSection newSection = null;
int headingIndex = 0;

for (Object obj : document.getSections()) {
    IWSection section = (IWSection) obj;

    if (newDocument != null) {
        newSection = addSection(newDocument, section);
    }

    List<TextBodyItem> items = (List<TextBodyItem>) section.getBody().getChildEntities();
    for (TextBodyItem item : items) {
        if (item instanceof WParagraph) {
            WParagraph paragraph = (WParagraph) item;
            String styleName = paragraph.getStyleName();
            if ("Heading 1".equals(styleName)) {
                if (newDocument != null) {
                    String fileName = "Document" + (headingIndex + 1) + ".docx";
                    saveWordDocument(newDocument, fileName);
                    headingIndex++;
                }
                newDocument = new WordDocument();
                newSection = addSection(newDocument, section);
                addEntity(newSection, paragraph);
            } else if (newDocument != null) {
                addEntity(newSection, paragraph);
            }
        } else {
            if (newDocument != null) {
                addEntity(newSection, item);
            }
        }
    }
}

if (newDocument != null) {
    String fileName = "Document" + (headingIndex + 1) + ".docx";
    saveWordDocument(newDocument, fileName);
    newDocument.close();
}

inputStream.close();
document.close();
```

### Helper Methods

```java
public static WSection addSection(WordDocument newDocument, IWSection section) throws Exception {
    WSection newSection = (WSection) section.clone();
    // Remove body content and headers/footers
    newSection.getBody().getChildEntities().clear();

    if (newSection.getHeadersFooters().getFirstPageHeader() != null)
        newSection.getHeadersFooters().getFirstPageHeader().getChildEntities().clear();
    if (newSection.getHeadersFooters().getFirstPageFooter() != null)
        newSection.getHeadersFooters().getFirstPageFooter().getChildEntities().clear();
    if (newSection.getHeadersFooters().getOddHeader() != null)
        newSection.getHeadersFooters().getOddHeader().getChildEntities().clear();
    if (newSection.getHeadersFooters().getOddFooter() != null)
        newSection.getHeadersFooters().getOddFooter().getChildEntities().clear();
    if (newSection.getHeadersFooters().getEvenHeader() != null)
        newSection.getHeadersFooters().getEvenHeader().getChildEntities().clear();
    if (newSection.getHeadersFooters().getEvenFooter() != null)
        newSection.getHeadersFooters().getEvenFooter().getChildEntities().clear();

    newDocument.getSections().add(newSection);
    return newSection;
}

public static void addEntity(WSection newSection, Entity entity) throws Exception {
    newSection.getBody().getChildEntities().add((Entity) entity.clone());
}

public static void saveWordDocument(WordDocument newDocument, String fileName) throws Exception {
    Path outDir = Paths.get(System.getProperty("user.dir"), "output");
    Files.createDirectories(outDir);
    Path outputPath = outDir.resolve(fileName);
    FileOutputStream outputStream = new FileOutputStream(outputPath.toFile());
    newDocument.save(outputStream, FormatType.Docx);
    outputStream.close();
    newDocument.close();
}
```

### Placeholders
- `"Heading 1"` → Replace with `"{heading-style}"` (can be "Heading 1", "Heading 2", etc.)
- `"Document{i}.docx"` → Replace with `"{output-prefix}{i}.docx"`

---

## Split by Bookmark

### Minimal Code

```java
Path inputPath = Paths.get(System.getProperty("user.dir"), "input", "Template.docx");
FileInputStream fs = new FileInputStream(inputPath.toFile());
WordDocument document = new WordDocument(fs, FormatType.Docx);

BookmarksNavigator bookmarksNavigator = new BookmarksNavigator(document);
BookmarkCollection bookmarkCollection = document.getBookmarks();

for (int i = 0; i < bookmarkCollection.getCount(); i++) {
Bookmark bookmark = bookmarkCollection.get(i);
String name = bookmark.getName();

bookmarksNavigator.moveToBookmark(name);
WordDocumentPart documentPart = bookmarksNavigator.getContent();

WordDocument newDocument = documentPart.getAsWordDocument();

Path outDir = Paths.get(System.getProperty("user.dir"), "output");
Files.createDirectories(outDir);
Path outputPath = outDir.resolve(name + ".docx");

FileOutputStream outputStream = new FileOutputStream(outputPath.toFile());
newDocument.save(outputStream, FormatType.Docx);
outputStream.close();
newDocument.close();
}

fs.close();
document.close();
```

### Split Specific Bookmark

```java
Path inputPath = Paths.get(System.getProperty("user.dir"), "input", "Template.docx");
FileInputStream fs = new FileInputStream(inputPath.toFile());
WordDocument document = new WordDocument(fs, FormatType.Docx);

BookmarksNavigator bookmarksNavigator = new BookmarksNavigator(document);
bookmarksNavigator.moveToBookmark("ChapterOne");

WordDocumentPart documentPart = bookmarksNavigator.getContent();

WordDocument newDocument = documentPart.getAsWordDocument();

Path outDir = Paths.get(System.getProperty("user.dir"), "output");
Files.createDirectories(outDir);
Path outputPath = outDir.resolve("ChapterOne.docx");
FileOutputStream outputStream = new FileOutputStream(outputPath.toFile());
newDocument.save(outputStream, FormatType.Docx);
outputStream.close();
newDocument.close();

fs.close();
document.close();

fs.close();
document.close();
```

### Placeholders
- `"Template.docx"` → Replace with `"{input-filename}"`
- `"ChapterOne"` → Replace with `"{bookmark-name}"`

---

## Split by Placeholder Text

### Minimal Code

```java
Path inputPath = Paths.get(System.getProperty("user.dir"), "input", "Template.docx");
FileInputStream fs = new FileInputStream(inputPath.toFile());
WordDocument document = new WordDocument(fs, FormatType.Docx);

// Find all occurrences of <<...>>
Pattern pattern = Pattern.compile("<<(.*)>>");
TextSelection[] textSelections = document.findAll(pattern);

if (textSelections != null && textSelections.length > 0) {
    int bkmkId = 1;
    List<String> bookmarks = new ArrayList<>();

    for (int i = 0; i < textSelections.length; i++) {
        // start marker
        WTextRange startRange = (WTextRange) textSelections[i].getAsOneRange();
        WParagraph startParagraph = startRange.getOwnerParagraph();
        int index = startParagraph.getChildEntities().indexOf(startRange);

        String bookmarkName = "Bookmark_" + bkmkId;
        bookmarks.add(bookmarkName);

        BookmarkStart bkmkStart = new BookmarkStart(document, bookmarkName);
        startParagraph.getChildEntities().insert(index, bkmkStart);
        startRange.setText("");

        i++; // move to corresponding end marker

        // end marker
        WTextRange endRange = (WTextRange) textSelections[i].getAsOneRange();
        WParagraph endParagraph = endRange.getOwnerParagraph();
        index = endParagraph.getChildEntities().indexOf(endRange);

        BookmarkEnd bkmkEnd = new BookmarkEnd(document, bookmarkName);
        // insert after the endRange (index + 1)
        endParagraph.getChildEntities().insert(index + 1, bkmkEnd);
        bkmkId++;
        endRange.setText("");
    }

    BookmarksNavigator bookmarksNavigator = new BookmarksNavigator(document);
    int fileIndex = 1;

    for (String bookmark : bookmarks) {
        bookmarksNavigator.moveToBookmark(bookmark);
        WordDocumentPart wordDocumentPart = bookmarksNavigator.getContent();

        WordDocument newDocument = wordDocumentPart.getAsWordDocument();

        Path outDir = Paths.get(System.getProperty("user.dir"), "output");
        Files.createDirectories(outDir);
        Path outputPath = outDir.resolve("Placeholder_" + fileIndex + ".docx");

        FileOutputStream outputStream = new FileOutputStream(outputPath.toFile());
        newDocument.save(outputStream, FormatType.Docx);
        outputStream.close();
        newDocument.close();
        fileIndex++;
    }
}

fs.close();
document.close();
```

### Custom Placeholder Pattern

```java
Pattern pattern = Pattern.compile("\\Q[[START]]\\E.*?\\Q[[END]]\\E", Pattern.DOTALL);
TextSelection[] textSelections = document.findAll(pattern);
```

### Placeholders
- `"<<(.*)>>"` → Replace with `"{placeholder-pattern}"` (regex pattern)
- `"Placeholder_{i}.docx"` → Replace with `"{output-prefix}{i}.docx"`

---

## Complete Example: Split Document Multiple Ways

### Full Example

```java
 Path inputPath = Paths.get(System.getProperty("user.dir"), "input", "LargeDocument.docx");
Path outputDir = Paths.get(System.getProperty("user.dir"), "output");
Files.createDirectories(outputDir);

FileInputStream fs = new FileInputStream(inputPath.toFile());
WordDocument document = new WordDocument(fs, FormatType.Docx);

// Option 1: Split by sections
System.out.println("Splitting by sections...");
for (int i = 0; i < document.getSections().getCount(); i++) {
    WordDocument sectionDoc = new WordDocument();
    sectionDoc.getSections().add((WSection) document.getSections().get(i).clone());

    Path outPath = outputDir.resolve("Section_" + (i + 1) + ".docx");
    FileOutputStream stream = new FileOutputStream(outPath.toFile());
    sectionDoc.save(stream, FormatType.Docx);
    stream.close();
    sectionDoc.close();
    System.out.println("Created: Section_" + (i + 1) + ".docx");
}

// Option 2: Split by bookmarks
System.out.println("\nSplitting by bookmarks...");
BookmarksNavigator navigator = new BookmarksNavigator(document);
BookmarkCollection bookmarks = document.getBookmarks();
for (int i = 0; i < bookmarks.getCount(); i++) {
    Bookmark bookmark = bookmarks.get(i);
    navigator.moveToBookmark(bookmark.getName());
    WordDocumentPart part = navigator.getContent();
    WordDocument bookmarkDoc = part.getAsWordDocument();

    Path outPath = outputDir.resolve("Bookmark_" + bookmark.getName() + ".docx");
    FileOutputStream stream = new FileOutputStream(outPath.toFile());
    bookmarkDoc.save(stream, FormatType.Docx);
    stream.close();
    bookmarkDoc.close();
    System.out.println("Created: Bookmark_" + bookmark.getName() + ".docx");
}

fs.close();
document.close();
System.out.println("\nSplit operation completed!");
```

### Placeholders
- `"LargeDocument.docx"` → Replace with `"{input-filename}"`
- `"output"` → Replace with `"{output-directory}"`
